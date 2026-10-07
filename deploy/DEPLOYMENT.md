# Treasure-House 部署迁移方案：GitHub Pages → 阿里云 ECS（含 SecOps 设计）

状态：文件已全部落地并自检通过，等待你在控制面（DNS / 密钥 / secrets）与服务器侧执行。
适用范围：`Randark-JMT/Treasure-House`（Docusaurus 3.9 静态站）→ `treasure-house.randark.site` on `jmt-projekt`。

---

## 1. 决策与结论

主链路：GitHub Actions 在 runner 上构建 → `rsync over SSH`（增量）推到 ECS 的 `incoming/` → 服务端硬链接物化为 `releases/<id>` → 符号链接 `current` 原子切流 → 服务端与 runner 双重冒烟 → 失败自动回滚。

选它的理由（针对你的实际环境）：

| 约束 | 影响 | 方案对应 |
| --- | --- | --- |
| VPS 在阿里云境内（`randark.site` 解析到 `8.129.29.180`） | GitHub runner→境内 22 端口入向可能抖动/丢包 | 重试 3 次 + `--partial-dir` 断点续传 + 增量传输（只传变化文件，不是每次 44MB） |
| 站点是公开内容、被篡改即品牌与钓鱼风险 | 部署凭据不能是 root，且必须能秒级换 | 专用无 sudo 系统用户 + `restrict` authorized_keys + 原子切流（无半程状态） |
| `treasure-house.randark.site` 目前 CNAME 指向 Pages | 证书 HTTP-01/TLS-ALPN 必须等 DNS 切过来才能签发 | 割接顺序编排（§6），并允许 `curl --resolve` 在切 DNS 前就验证真实内容 |
| 内容有 `.gitignore` 掉的敏感文章 | 本地构建误推送会直接公开 | CI 构建 + `check-build.sh` 内容门禁（§7.1，已实测拦下） |
| 需要能回滚 | 站点是纯静态，成本极低 | `releases/` 保留 5 份 + `--use <id>` 秒级回退 + DNS 回退杠杆 |

未采用的方案与原因：纯 `tar.gz` 全量（每次 44MB 走跨境链路，抖动时更慢）；自托管 runner（要长期在境内机驻留 runner 进程与更大信任面，列为 §9 备选通道）；SSH CA + OIDC（安全性最高，但要自建 `step-ca`，列为 P1 加固项而非首版）。

---

## 2. 落地文件清单

| 文件 | 作用 |
| --- | --- |
| `.github/workflows/deploy-vps.yml` | 主部署：构建 → 门禁 → rsync → 原子切流 → 双端冒烟 → 断言 |
| `.github/workflows/rollback-vps.yml` | 手动回滚：`--use <id>` 或默认回退上一版 |
| `.github/workflows/verify-vps.yml` | 每 6 小时只读巡检：路径、安全头、80→443、证书剩余天数与 SAN |
| `.github/workflows/docusaurus-to-ghpage.yml` | 降级为手动触发的割接期回退杠杆（不再随 push 跑） |
| `.github/actions/vps-ssh-setup/action.yml` | 复用 SSH 凭据与选项；known_hosts 缺失时直接失败，杜绝 `StrictHostKeyChecking=no` |
| `deploy/scripts/server-init.sh` | 服务器一次性初始化（预检/`APPLY=1` 两档） |
| `deploy/scripts/activate-release.sh` | 服务端发布器：门禁、物化、切流、冒烟、自动回滚、prune |
| `deploy/scripts/check-build.sh` | 构建产物门禁（文件数、敏感路径、私钥/令牌扫描、canonical 一致性） |
| `deploy/scripts/selftest.sh` | 发布器离线自检（本次已跑，14/14） |
| `deploy/nginx/treasure-house.randark.site.conf` | vhost：TLS、缓存、限速、方法收敛、隐藏文件拒绝 |
| `deploy/nginx/snippets/security-headers.conf` | HSTS/CSP/各类安全头（含 nginx add_header 继承陷阱的处理说明） |
| `deploy/nginx/treasure-house-limits.conf` | http 级 `limit_req_zone`/`limit_conn_zone`/方法 map/JSON 日志格式 |
| `static/robots.txt` | 新增，声明 sitemap，降低爬虫无谓抓取 |
| `docusaurus.config.js` | `url` 由 `http://` 改为 `https://`（否则 sitemap/canonical 会把用户导到明文端口） |

服务器上的目录约定：

```
/var/www/html/treasure-house/
├── current            -> releases/<id>     # nginx root 指向这里，符号链接原子替换
├── releases/<时间戳>-<sha8>                # 硬链接物化的不可变版本，保留 5 份
├── incoming/                               # rsync 目标（--delete 镜像本次构建）
├── shared/deploy-info.json                 # 审计：release/commit/run URL
├── logs/deploy.log                         # 部署与冒烟记录（logrotate weekly×12）
└── activate-release.sh                     # 发布器（在 web 根之外，不可 URL 访问）
```

---

## 3. 你需要准备的东西

一次性，约 20 分钟。命令按顺序执行。

**3.1 生成部署密钥**（本地或密钥管理器，不要提交进仓库）

```bash
ssh-keygen -t ed25519 -C "treasure-house@github-actions" -f treasure_house_deploy -N ""
```

无口令私钥是这套方案的已知妥协（见 §8 残余风险）；若你希望零长期凭据，直接跳 §9 的 SSH CA 路线。

**3.2 抓取并固定服务器 host key**（带外核对指纹，防 MITM）

```bash
# 在服务器执行，抄下指纹
ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub
# 在你本机执行，把主机名字段替换成别名（与 vars.VPS_HOST_KEY_ALIAS 一致）
ssh-keyscan -p 22 -t ed25519 8.129.29.180 | sed 's/^8\.129\.29\.180/treasure-house-deploy/' > known_hosts
```

**3.3 配置 GitHub 侧变量**（建议先建 `production` environment，把下列都设在 environment 级，便于加审批人）

```bash
gh secret set VPS_DEPLOY_SSH_KEY < treasure_house_deploy          # 私钥，Secrets
gh variable set VPS_SSH_KNOWN_HOSTS --body "$(cat known_hosts)"   # 也可放 environment 级
gh variable set VPS_HOST          --body '8.129.29.180'
gh variable set VPS_SSH_PORT      --body '22'
gh variable set VPS_USER          --body 'treasure-deploy'
gh variable set VPS_DEPLOY_PATH   --body '/var/www/html/treasure-house'
gh variable set VPS_HOST_KEY_ALIAS --body 'treasure-house-deploy'
gh variable set VPS_PUBLIC_IP     --body '8.129.29.180'   # 割接前让冒烟测试能绕开 DNS 直连
gh variable set SITE_URL          --body 'https://treasure-house.randark.site'
```

`vars` 里全部有代码级默认值，最少只需 `VPS_HOST` + `VPS_SSH_KNOWN_HOSTS` + `VPS_DEPLOY_SSH_KEY` 三项即可跑通。

---

## 4. 服务器侧执行

把仓库 `deploy/` 目录放到服务器（`scp -r deploy /root/`，或 `git clone` 到 `/opt/treasure-house-deploy`），然后：

```bash
# 1) 预检：只读，打印将要做的每一步
bash deploy/scripts/server-init.sh /root/treasure_house_deploy.pub

# 2) 执行：建用户与目录、写 authorized_keys(restrict)、sshd Match 加固、装 nginx 配置、logrotate
APPLY=1 bash deploy/scripts/server-init.sh /root/treasure_house_deploy.pub
```

脚本是幂等的，改动前会备份 `*.bak.<ts>`，`sshd -t` / `nginx -t` 校验失败立即回滚且不 reload。它不删除任何既有站点文件。

**注意保持当前 SSH 会话不要断开**，另开一个终端验证 `treasure-deploy` 的 key 登录成功再收工：

```bash
ssh -i treasure_house_deploy -o HostKeyAlias=treasure-house-deploy treasure-deploy@8.129.29.180 'id; ls -l /var/www/html/treasure-house'
```

预期能看到目录列表，且 `-t` 分配 TTY 会被拒绝（`PermitTTY no` 生效）。

---

## 5. 证书：扩 SAN，不换证书

现有证书 `randark.site` 有 4 个 SAN、有效期到 2026-12-25。把 treasure-house 并进去即可，沿用你的统一续签逻辑：

```bash
sudo certbot certonly --nginx --cert-name randark.site \
  -d randark.site -d www.randark.site -d docker.randark.site -d ha.randark.site \
  -d treasure-house.randark.site
sudo nginx -t && sudo systemctl reload nginx
```

同时把 `nginx_refresh_certs()` 更新为 5 个 `-d`（脚本执行完会打印同样的提示），否则手工续签时会掉 SAN。`certbot renew` 本身沿用证书已有 SAN 列表，不受影响。

两点说明：

- 用 `certonly --nginx` 而不是 `--nginx` 安装模式：新 vhost 已硬编码 `ssl_certificate` 路径，不需要 certbot 改写配置，避免它覆盖我们写的 HSTS/CSP 与限速设置。
- 签发前 DNS 必须已经指向这台机器（TLS-ALPN-01 与 HTTP-01 都要回连本机）。如果你的阿里云 DNS 有 API 凭据，可改用 DNS-01 预签，把证书准备从割接窗口里摘出去：`certbot certonly --dns-aliyun --cert-name randark.site -d ...`。

---

## 6. 割接 Runbook（顺序即安全）

| 步 | 动作 | 验证 | 回退 |
| --- | --- | --- | --- |
| 1 | 阿里云 DNS 把 `treasure-house` 记录 TTL 降到 60（记录值暂不改） | `dig +short treasure-house.randark.site` 仍是 Pages IP | — |
| 2 | 服务器执行 `server-init.sh`（§4） | `nginx -t` 通过；`curl -k https://127.0.0.1/ -H 'Host: treasure-house.randark.site'` 返回占位页 | 删 `sites-enabled` 软链并 reload |
| 3 | 配置 GitHub vars/secrets（§3），仓库提交本次改动 | — | `git revert` |
| 4 | Actions 手动跑 **Deploy to VPS**（此时 DNS 还在 Pages 上） | 工作流内冒烟用 `--resolve …:$VPS_PUBLIC_IP` 直连 ECS，应全绿 | 无需回退，线上仍由 Pages 服务 |
| 5 | 阿里云 DNS：`treasure-house` CNAME → A `8.129.29.180` | `dig +short` 返回 ECS IP；浏览器访问会提示证书名称不匹配（正常） | 改回 CNAME，分钟级生效 |
| 6 | 签发扩展证书（§5）+ `systemctl reload nginx` | `verify-vps.yml` 手动跑一次：200、安全头齐全、SAN 含本站、剩余天数≥14 | 证书侧无需回退 |
| 7 | 观察 1–2 周；稳定后 Settings→Pages 解除自定义域名，删除 `docusaurus-to-ghpage.yml` 与 `static/CNAME` | — | — |

第 4 步是关键设计：**先在 DNS 未切换时完成一次端到端部署验证**，把「部署链路是否可用」和「DNS 是否切换」两件事解耦，割接窗口里只剩改解析和签证书。

---

## 7. SecOps 控制矩阵

### 7.1 内容与构建完整性

| 威胁 | 控制 | 位置 |
| --- | --- | --- |
| 残缺/空构建把线上清空 | `check-build.sh` 要求 `index.html`/`404.html` 存在且文件数 ≥300；服务端 `validate_incoming` 再判一次 | CI + `activate-release.sh` |
| `.gitignore` 掉的敏感文章被发布 | 只从 CI 干净 checkout 构建；门禁扫描 `.gitignore` 中的敏感目录名 | `check-build.sh` |
| 私钥/令牌混入产物 | 门禁正则扫描 `PRIVATE KEY`/`ghp_`/`github_pat_`/`AKIA`/`xox` | `check-build.sh` |
| canonical 仍指向 http 或 Pages | 门禁要求 `sitemap.xml` 含 `EXPECTED_URL`；`url` 已改 https | `check-build.sh`、`docusaurus.config.js` |
| 传输半程不一致 | `--partial-dir` 隔离半包 + 传输后本地/远端文件数必须相等，否则拒绝切流 | `deploy-vps.yml` |

实测证据：本地 `build/` 含 `blog/2025-10-07-TrendMicro-VisionOne-{Trial,Use}`（这两篇只在 `.gitignore` 里，源码仍在工作区），门禁直接判失败；剔除这 4 个文件后同一产物（641 文件）通过。**这条正好证明：绝不能用本地构建产物直推服务器，否则两篇私密文章会立刻公开。**

### 7.2 传输与凭据

| 威胁 | 控制 |
| --- | --- |
| 部署密钥泄露后拿到服务器 | 专用 `treasure-deploy` 系统用户，无 sudo、无密码、`passwd -l`；写权限只覆盖 `/var/www/html/treasure-house` |
| 泄露密钥后被用于交互式驻留 | `authorized_keys` 前缀 `restrict,no-user-rc,no-X11-forwarding,no-agent-forwarding,no-port-forwarding`；sshd `Match User` 再叠 `PermitTTY no`、`AllowTcpForwarding no`、`MaxSessions 2` |
| 主机密钥被替换（MITM） | `StrictHostKeyChecking=yes` + 固定 known_hosts + `HostKeyAlias`；known_hosts 未配置时 action 直接失败并在报错里点名禁止 `StrictHostKeyChecking=no` |
| Actions 权限过宽 | `permissions: contents: read`，`verify-vps.yml` 为 `permissions: {}`；不使用 `GITHUB_TOKEN` 部署 |
| 并发部署竞态 | `concurrency: vps-deploy`，`cancel-in-progress: false`（deploy 与 rollback 共用同一组，排队不取消） |
| 部署超时挂死 | `timeout-minutes: 25`（rollback 10、verify 5），`BatchMode=yes` 避免 ssh 卡在交互提示 |
| 弱网丢包 | 3 次指数退避重试；`ServerAliveInterval=15`、`ConnectTimeout=15`、`IPQoS=throughput`、`--timeout=120`；`--checksum` 保证增量判断正确；`--skip-compress` 跳过 PDF/图片以免浪费 CPU |
| 密钥进日志 | 仅打印 `ssh-keygen -lf` 指纹，不回显私钥内容 |

### 7.3 站点与主机侧

| 威胁 | 控制 |
| --- | --- |
| 目录穿越读到 `releases/`、`incoming/`、发布脚本 | nginx `root` 只指向 `current`；再加显式 `location ~ ^/(releases|incoming|shared|logs|\.staging-)/ → 404` 与 `location ~ /\.(?!well-known) → deny` 做纵深防御 |
| 发布器被当成站点文件下载 | `activate-release.sh` 装在 `BASE` 下但在 `current` 之外，另有 `location = /activate-release.sh → 404` |
| 静态资源被跨站嵌套/内容嗅探 | HSTS(1y, includeSubDomains)、`X-Content-Type-Options: nosniff`、`X-Frame-Options: DENY`、`frame-ancestors 'none'`、`Referrer-Policy`、`Permissions-Policy`、`COOP/CORP same-origin` |
| CC/爬取打满境内出口带宽 | `limit_req 40r/s burst=120 nodelay`、`limit_conn 32`、`/assets/` 与图片 `immutable`/30d 缓存、HTML `no-cache`、gzip level 5 |
| 误用 HTTP 方法 | `map $request_method` 只放 GET/HEAD，其余 405；`client_max_body_size 16k` |
| TLS 配置退化 | 仅 TLS1.2/1.3、现代 cipher 套件、`ssl_session_tickets off`、`server_tokens off`；OCSP stapling 主动关闭（境内回源 LE OCSP 常超时刷错误日志） |
| 内容更新不可见 / 回滚不确定 | 未启用 `open_file_cache`：符号链接换向必须即时生效，缓存 stat 会让回滚在 `valid` 窗口内仍返回旧文件 |
| 磁盘写满导致部署半途失败 | 部署前 preflight 检查 `df -Pm` 可用 >300MB、`incoming` 可写、发布器可执行 |
| 旧版本无限堆积 | `KEEP=5` prune，且永不删 `current` 与上一可用版本 |
| 日志丢失/占盘 | `logrotate` weekly×12 + compress，nginx 与 `deploy.log` 同一策略 |

### 7.4 发布可靠性（DefOps）

| 阶段 | 失败时的行为 |
| --- | --- |
| 构建/门禁不过 | 不动服务器 |
| rsync 三次失败 | `incoming` 可能有残留，`current` 未变 → 线上仍是旧版 |
| 文件数不一致 | 显式拒绝切流 |
| 服务端冒烟失败 | **自动切回上一 release** 并以非零码结束，`current` 保证可用 |
| runner 侧公网冒烟/安全头缺失 | 工作流失败，摘要里打印 `--status`/`--list` 与回滚入口 |
| `--check` 断言 | 确认线上确实指向本次 release id，防止「日志说成功、实际没切」 |

发布用 `ln -sfn` + `mv -Tf`（rename(2)）原子替换，nginx 不需要 reload，因此**部署通道完全不需要任何特权**：`treasure-deploy` 没有 sudo，也不给 nginx 的 reload 权限。这是把爆炸半径压到「单站点静态目录被篡改」的关键。

---

## 8. 残余风险（明确不接受"零风险"叙事）

| 风险 | 现状 | 建议处置 |
| --- | --- | --- |
| 长期免口令私钥存在于 GitHub Secrets | 接受。组织/仓库管理员可读 Secrets | 定期轮换（重跑 `server-init.sh` 即覆盖同一 marker 的旧 key）；P1 用 OIDC+SSH CA 消灭它 |
| Secrets 泄露=可篡改站点内容（挂马/钓鱼/SEO 投毒） | 缓解但不根除 | 部署前后各有一次冒烟 + `--check`；`deploy.log`/`deploy-info.json` 留 run URL 可追溯；建议再加内容哈希基线（P2） |
| CSP 含 `'unsafe-inline'`（script/style） | Docusaurus 3 输出内联颜色模式脚本，静态构建无法逐次生成 hash/nonce | 短期接受；若要收敛需要给构建产物注入 hash（改构建链），优先级低 |
| `img-src 'self' data: https:` 偏宽 | 博客文章引用了站外图片 | 想收紧就把外链图片本地化到 `static/img`（同时消除第三方失效风险） |
| 22 端口对公网开放、境内噪音大 | 未装 fail2ban 配置 | 建议开 sshd jail；或改用 22xxx 高端口（`vars.VPS_SSH_PORT` 改一处即可） |
| GitHub 出口 IP 不可固定，无法做源地址白名单 | 事实如此（Azure 段大且变动） | 用 `from=` 白名单不现实；改为依赖 key-only + restrict + 审计 |
| runner→境内 SSH 完全不可达（极端情况） | 概率低但真实存在 | 备选通道见 §9 P2（自托管 runner / OSS 中转 / 服务端 webhook 拉取） |
| 备案与内容合规 | 新增子域名解析到境内主机，且站内有渗透测试 PDF/攻击类文章 | 确认 `randark.site` 的 ICP 与公安备案覆盖该子域名与用途；把 `assets/files/*.pdf` 这类敏感研究材料放非境内源，可降低被要求整改的风险 |
| 割接期存在两个发布源（Pages 分支 + VPS） | 有意保留的回退杠杆 | 稳定 1–2 周后按 §6 第 7 步清理，避免配置漂移 |

---

## 9. 加固路线（按性价比排序）

**P0（建议紧接着做）**

1. 仓库设置：Settings → Secrets and variables → 检查 `production` environment 是否已建，并按需加 "Required reviewers"；启用 secret scanning + push protection（公开仓库也建议开，配 partner 密钥扫描）。
2. 打开 Dependabot：`npm` 与 `github-actions` 两个生态。Docusaurus 依赖面大，锁文件更新会持续产生 PR。
3. `git checkout` 后加 `npm ci --ignore-scripts` 评估：Docusaurus 构建基本不需要 postinstall 脚本，能显著压缩供应链执行面（需先跑一次确认构建不破）。
4. 分支保护：`main` 要求 `Build & deploy treasure-house` 通过。

**P1（消灭长期凭据）**

5. SSH CA + GitHub OIDC：自建 `step-ca`（或用 Smallstep 托管），runner 用 OIDC 换 15 分钟短期 SSH 证书，服务器只信任 CA 公钥（`TrustedUserCAKeys`）+ `principals` 限定。仓库与 Secrets 里不再存任何长期私钥。注意：这不能解决跨境链路抖动，只解决凭据风险。
6. 若要更强隔离：`ChrootDirectory /var/www/html/treasure-house`（需 root 拥有父目录且不可写）或 `rssh`/`ForceCommand` 白名单包装，只允许 `rsync --server` 与 `activate-release.sh`。代价是运维命令都要过白名单。

**P2（通道与可观测性）**

7. 部署通道兜底：Actions 产出 `tar.gz` 上传阿里云 OSS，服务器侧 systemd timer 或签名 webhook 拉取后本地解包切流（境内→OSS 走内网/VPC，比跨境 SSH 稳）。`activate-release.sh` 的接口不用变。
8. 若长期观测不够：把 nginx JSON 日志接入 Vector/Loki，加一条 UptimeRobot（或境内拨测）作为 GitHub 之外的第二观测点——Actions 定时任务有排队延迟，且它自己就在跨境链路上，不适合当唯一告警源。
9. 内容基线：每次发布生成 `releases/<id>/MANIFEST.sha256`，服务器每日 `sha256sum -c` 检测站外篡改（配合 cron 与邮件告警）。

---

## 10. 验证记录与已知未验证项

**已在本机（Git Bash / Windows，无 nginx、无 docker、无 WSL）执行并通过：**

- `bash -n` 全部 4 个 shell 脚本；全部 workflow YAML 解析 + 内嵌 `run` 块逐个 `bash -n`（`${{ }}` 以占位符替换后检查）。
- `deploy/scripts/selftest.sh`：**14 项全绿**——空 `incoming` 拒绝、文件数不足拒绝、首次激活、冒烟失败自动回滚并非零退出、连续发布 prune(KEEP=2)、`--use` 定向回退、重复 release id 拒绝、硬链接 release 内容互不污染、`shared/deploy-info.json` 写入。
- `deploy/scripts/check-build.sh` 对真实产物：本地 `build/`（643 文件）被两篇敏感文章的门禁拦截；剔除后（641 文件）通过；`EXPECTED_URL=https://…` 能正确抓出「旧构建 sitemap 仍是 http」，把 `url` 改为 https 并重新 `npm run build`（成功）后 sitemap 已为 https。
- 本地 `npm run build` 通过，确认 `docusaurus.config.js` 改动无副作用（仅剩既有 KaTeX unicode 警告）。

**此环境无法执行、需要你在服务器确认的：**

- `nginx -t` 对三个 nginx 文件的语法与指令兼容性。风险点已标注：`listen 443 ssl http2` 用的是兼容 nginx <1.25.1 的旧写法（新版仍可用，只是弃用告警）；`http2 on;` 新写法在文件里以注释给出；IPv6 `listen` 已注释，确认 ECS 有 IPv6 再打开。
- 符号链接原子切流的真实行为（`mv -Tf` 覆盖 symlink）——Windows 无符号链接语义，自检里该函数被桩替换；Linux 上 `selftest.sh` 会自动使用真实实现，建议先在服务器跑一遍再走割接第 4 步。
- `restrict` + `PermitTTY no` 与 rsync-over-ssh 的共存（预期可用，rsync 不需要 TTY）——第一次手动 `ssh -i ... rsync` 时确认。
- certbot 扩 SAN 与阿里云安全组、备案状态。

割接前建议在服务器上先跑一次：`bash deploy/scripts/selftest.sh`，再手动 `workflow_dispatch` 跑 Deploy to VPS。
