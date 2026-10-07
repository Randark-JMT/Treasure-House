#!/usr/bin/env bash
# Treasure-House VPS 侧初始化（在服务器上以 root 执行）
#
#   预检（默认，只读，不改动任何东西）:  bash server-init.sh
#   真正执行:                            APPLY=1 bash server-init.sh /root/deploy_key.pub
#
# 幂等：可重复执行。它只做「新增」类变更，不删除既有站点文件。
# 覆盖范围：deploy 用户与目录骨架、authorized_keys（restrict 约束）、
#           sshd Match 加固、rsync 安装、nginx vhost/安全头/限速、logrotate、fail2ban 与证书提示。
set -euo pipefail

APPLY="${APPLY:-0}"
SITE="treasure-house.randark.site"
BASE="/var/www/html/treasure-house"
DEPLOY_USER="treasure-deploy"
DEPLOY_GROUP="$DEPLOY_USER"
KEY_PUB_FILE="${1:-/root/treasure-house-deploy_ed25519.pub}"
RELEASE_SCRIPT_SRC="$(dirname "$(readlink -f "$0")")/activate-release.sh"
REPO_NGINX_DIR="$(dirname "$(dirname "$(readlink -f "$0")")")/nginx"

# 本地开发仓库里 nginx 片段在 repo/nginx，服务器单独拷贝脚本时请按实际路径修改
NGINX_SRC_DIR="${NGINX_SRC_DIR:-$REPO_NGINX_DIR}"
VHOST_SRC="$NGINX_SRC_DIR/$SITE.conf"
HEADERS_SRC="$NGINX_SRC_DIR/snippets/security-headers.conf"
LIMITS_SRC="$NGINX_SRC_DIR/treasure-house-limits.conf"
NGINX_VHOST_DST="/etc/nginx/sites-available/$SITE.conf"
NGINX_HEADERS_DST="/etc/nginx/snippets/security-headers.conf"
NGINX_LIMITS_DST="/etc/nginx/conf.d/zz-treasure-house-limits.conf"
SSHD_DROPIN="/etc/ssh/sshd_config.d/90-treasure-deploy.conf"

log()  { printf '\033[1;36m[init]\033[0m %s\n' "$*"; }
note() { printf '\033[1;33m[todo]\033[0m %s\n' "$*"; }
run()  { if [[ "$APPLY" == "1" ]]; then eval "$@"; else echo "DRY-RUN: $*"; fi; }

[[ "$(id -u)" == "0" ]] || { echo "必须以 root 运行"; exit 1; }
[[ -d /etc/nginx ]] || { echo "未检测到 /etc/nginx，请先安装 nginx"; exit 1; }

log "APPLY=$APPLY（0=预检，1=执行）"
log "站点=$SITE 根目录=$BASE 用户=$DEPLOY_USER"

# --- 1. 前置文件存在性检查 -----------------------------------------------------
[[ -f "$VHOST_SRC" ]]    || { echo "缺少 nginx vhost: $VHOST_SRC（可用 NGINX_SRC_DIR=... 覆盖）"; exit 1; }
[[ -f "$HEADERS_SRC" ]]  || { echo "缺少安全头片段: $HEADERS_SRC"; exit 1; }
[[ -f "$LIMITS_SRC" ]]   || { echo "缺少限速片段: $LIMITS_SRC"; exit 1; }
[[ -f "$RELEASE_SCRIPT_SRC" ]] || { echo "缺少 activate-release.sh: $RELEASE_SCRIPT_SRC"; exit 1; }
[[ -f "$KEY_PUB_FILE" ]] || { echo "缺少部署公钥文件: $KEY_PUB_FILE（内容形如：ssh-ed25519 AAAAC3... treasure-house@github-actions）"; exit 1; }

PUBKEY_LINE="$(tr -d '\r\n' < "$KEY_PUB_FILE")"
grep -Eq '^(ssh-ed25519|ssh-rsa|ecdsa-sha2-nistp[0-9]+) ' <<<"$PUBKEY_LINE" || { echo "公钥格式不正确"; exit 1; }

# --- 2. 依赖与用户 ------------------------------------------------------------
log "安装 rsync（增量部署与本地落盘都需要）"
run "apt-get update -qq && apt-get install -y -qq rsync curl >/dev/null"

log "创建受限 deploy 用户 $DEPLOY_USER"
run "getent group $DEPLOY_GROUP >/dev/null || groupadd --system $DEPLOY_GROUP"
run "getent passwd $DEPLOY_USER >/dev/null || useradd --system --gid $DEPLOY_GROUP --home-dir /home/$DEPLOY_USER --shell /bin/bash --create-home $DEPLOY_USER"
# 站点属组给 www-data：nginx 以 www-data 读取文件，deploy 用户写入，互不越界
run "adduser $DEPLOY_USER www-data 2>/dev/null || true"

# 无 sudo、无密码：显式声明，避免误加入 sudo 组
run "deluser $DEPLOY_USER sudo 2>/dev/null || true"
run "passwd -l $DEPLOY_USER >/dev/null 2>&1 || true"

# --- 3. 目录骨架与发布脚本 -----------------------------------------------------
log "创建目录骨架：releases / incoming / shared / logs"
run "install -d -o $DEPLOY_USER -g www-data -m 0755 $BASE $BASE/releases $BASE/incoming $BASE/shared $BASE/logs"

# 首个占位 release：保证 current 一开始就有效，避免 vhost 上线瞬间 502/404 干扰证书签发
if [[ ! -e "$BASE/current" ]]; then
  log "写入占位 release（首次部署成功后会被真实版本替换）"
  run "install -d -o $DEPLOY_USER -g www-data -m 0755 $BASE/releases/00000000T000000Z-initial"
  run "printf '%s\n' '<!doctype html><html lang=\"zh-Hans\"><title>Treasure-House 部署中</title><p>Site is being deployed.</p></html>' > $BASE/releases/00000000T000000Z-initial/index.html"
  run "cp $BASE/releases/00000000T000000Z-initial/index.html $BASE/releases/00000000T000000Z-initial/404.html"
  run "ln -sfn $BASE/releases/00000000T000000Z-initial $BASE/current"
fi

log "安装发布脚本到 $BASE/activate-release.sh（放在 web 根之外，不可被 URL 访问）"
run "install -o $DEPLOY_USER -g www-data -m 0750 \"$RELEASE_SCRIPT_SRC\" $BASE/activate-release.sh"

# /var/www/html 与父目录必须可穿越，否则 nginx 读不到 current
run "chmod 0755 /var/www /var/www/html"

# --- 4. authorized_keys：restrict 收紧能力 ------------------------------------
# restrict 关闭 pty / 端口转发 / agent 转发 / X11 / Tunnel，但保留非交互命令执行，rsync-over-ssh 仍可用。
# 不用 command= 锁死是为了保留 rsync 与发布脚本；升级路径见 DEPLOYMENT.md「加固路线」。
AK="/home/$DEPLOY_USER/.ssh/authorized_keys"
MARKER="treasure-house@github-actions"
log "写入 authorized_keys（幂等，按注释标记替换旧条目）"
run "install -d -o $DEPLOY_USER -g $DEPLOY_USER -m 0700 /home/$DEPLOY_USER/.ssh"
run "touch '$AK' && chmod 0600 '$AK' && chown $DEPLOY_USER:$DEPLOY_USER '$AK'"
if [[ "$APPLY" == "1" ]]; then
  TMP_AK="$(mktemp)"
  grep -v -- "$MARKER" "$AK" > "$TMP_AK" || true
  printf 'restrict,no-user-rc,no-X11-forwarding,no-agent-forwarding,no-port-forwarding %s %s\n' "$PUBKEY_LINE" "$MARKER" >> "$TMP_AK"
  install -o "$DEPLOY_USER" -g "$DEPLOY_USER" -m 0600 "$TMP_AK" "$AK"
  rm -f "$TMP_AK"
  log "authorized_keys 已更新，指纹：$(cut -d' ' -f3 "$AK" | head -1 | awk '{print $2}' | cut -c1-24)...（用 ssh-keygen -lf 核对）"
else
  echo "DRY-RUN: 写入 restrict,... $PUBKEY_LINE $MARKER -> $AK"
fi

# --- 5. sshd Match 加固 -------------------------------------------------------
log "写入 $SSHD_DROPIN"
if [[ "$APPLY" == "1" ]]; then
  [[ -f "$SSHD_DROPIN" ]] && cp -a "$SSHD_DROPIN" "$SSHD_DROPIN.bak.$(date +%s)"
  install -d -m 0755 /etc/ssh/sshd_config.d
  cat > "$SSHD_DROPIN" <<'SSHD'
# Treasure-House 部署专用账号加固（由 deploy/scripts/server-init.sh 生成）
# 该账号仅用于 rsync 推送静态产物：无 TTY、无转发、无交互 shell。
# 如需更强隔离，见 deploy/DEPLOYMENT.md 的 Chroot / SSH CA 升级路线。
Match User treasure-deploy
    PermitTTY no
    AllowTcpForwarding no
    AllowAgentForwarding no
    X11Forwarding no
    PasswordAuthentication no
    PubkeyAuthentication yes
    PermitEmptyPasswords no
    MaxSessions 2
    ClientAliveInterval 20
    ClientAliveCountMax 3
SSHD
  if sshd -t; then
    log "sshd 配置校验通过"
  else
    echo "sshd -t 校验失败，已回滚 drop-in，未 reload。请人工检查。"
    rm -f "$SSHD_DROPIN"
    sshd -t
  fi
else
  echo "DRY-RUN: 写入 sshd Match 加固块 -> $SSHD_DROPIN（写入后会 sshd -t 校验，失败即回滚）"
fi

# --- 6. nginx 配置 ------------------------------------------------------------
log "安装 nginx vhost / 安全头 / 限速片段"
if [[ "$APPLY" == "1" ]]; then
  [[ -f "$NGINX_VHOST_DST" ]] && cp -a "$NGINX_VHOST_DST" "$NGINX_VHOST_DST.bak.$(date +%s)"
  install -d -m 0755 /etc/nginx/snippets
  install -m 0644 "$HEADERS_SRC" "$NGINX_HEADERS_DST"
  install -m 0644 "$LIMITS_SRC" "$NGINX_LIMITS_DST"
  install -m 0644 "$VHOST_SRC" "$NGINX_VHOST_DST"
  ln -sfn "$NGINX_VHOST_DST" "/etc/nginx/sites-enabled/$SITE.conf"
  install -d -o www-data -g www-data -m 0755 /var/www/certbot
  if nginx -t; then
    systemctl reload nginx
    log "nginx 已校验并 reload"
  else
    echo "nginx -t 失败，请检查配置（旧配置已保留 .bak）"
    exit 1
  fi
else
  echo "DRY-RUN: 安装 $VHOST_SRC -> $NGINX_VHOST_DST 并 symlink sites-enabled；$HEADERS_SRC -> $NGINX_HEADERS_DST；$LIMITS_SRC -> $NGINX_LIMITS_DST；nginx -t && systemctl reload nginx"
fi

# --- 7. 日志轮转 --------------------------------------------------------------
log "写入 /etc/logrotate.d/treasure-house"
if [[ "$APPLY" == "1" ]]; then
  cat > /etc/logrotate.d/treasure-house <<LOGROTATE
$BASE/logs/*.log /var/log/nginx/$SITE.*.log {
    weekly
    rotate 12
    compress
    delaycompress
    missingok
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        [ -f /var/run/nginx.pid ] && kill -USR1 \$(cat /var/run/nginx.pid) || true
    endpostrotate
}
LOGROTATE
  logrotate -d /etc/logrotate.d/treasure-house >/dev/null && log "logrotate 配置校验通过"
else
  echo "DRY-RUN: 写入 logrotate 配置（nginx 日志 + 部署日志，weekly/rotate 12/compress）"
fi

# --- 8. 只读校验输出 -----------------------------------------------------------
if [[ "$APPLY" == "1" ]]; then
  log "结果校验"
  namei -l "$BASE/current/index.html" | sed 's/^/    /'
  ss -lntp 2>/dev/null | grep -E ':22|:80|:443' | sed 's/^/    /' || true
  id "$DEPLOY_USER" | sed 's/^/    /'
  printf '    sudo -n -u %s id  => ' "$DEPLOY_USER"; sudo -n -u "$DEPLOY_USER" id 2>&1 | tail -1 || true
fi

echo
note "1. 阿里云安全组：22 端口保持仅必要来源；443/80 放行 0.0.0.0/0（站点服务需要）"
note "2. DNS：把 $SITE 从 CNAME(*.pages.github.io) 改为 A -> 本机公网 IP，建议先把 TTL 降到 60"
note "3. 签发/扩展证书（沿用现有 randark.site 证书，扩到 5 个 SAN）："
note "     certbot certonly --nginx --cert-name randark.site \\"
note "       -d randark.site -d www.randark.site -d docker.randark.site -d ha.randark.site -d $SITE"
note "4. 更新你的 nginx_refresh_certs()，把 -d $SITE 加进去，否则下次续签会掉 SAN 导致告警"
note "5. fail2ban 若未启用：sshd jail 建议开启（境内 ECS 的 22 端口爆破噪音很大）"
note "6. 公钥指纹核对：ssh-keygen -lf $KEY_PUB_FILE"
note "7. 复核部署日志：tail -f $BASE/logs/deploy.log"
[[ "$APPLY" == "1" ]] && log "完成" || log "预检结束。确认无误后执行：APPLY=1 bash server-init.sh $KEY_PUB_FILE"
