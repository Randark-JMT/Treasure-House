---
sidebar_position: 0
sidebar_label: Linux
---

# Linux 提权

从普通用户到 root 的路径大致三类：配置错误、内核与服务漏洞、容器与虚拟化边界。真实环境里第一类占绝大多数，因为补丁有流程，配置没人复查。枚举顺序也照这个来——先把配置类摸干净，再考虑打内核。

## 枚举

先确定自己在哪：

```shell
id; sudo -l; uname -a; cat /etc/os-release
```

`sudo -l` 是这几条里信息量最大的一个，它列出当前用户能以谁的身份执行什么。很多环境到这一步就结束了。剩下的枚举项：

- SUID 清单：`find / -perm -4000 -type f 2>/dev/null`，换成 `-perm -2000` 找 SGID。
- 文件能力：`getcap -r / 2>/dev/null`。这项经常被漏掉，因为多数人只找 SUID。
- PATH 顺序与其中的可写目录。
- 计划任务：`/etc/crontab`、`/etc/cron.*`、`systemctl list-timers`，以及这些任务调用的脚本本身是否可写。
- 历史文件与配置里的明文凭证：`~/.bash_history`、web 配置文件、`.git-credentials`、`~/.ssh/`。

自动化脚本可以用 linpeas、LinEnum 或 linux-smart-enumeration。好处是覆盖面全，坏处是输出极长，且在受监控环境里特征明显——跑之前先确认目标有没有 auditd 和 EDR。

## 配置类

sudo 的利用方式取决于 `sudo -l` 给出的命令。GTFOBins（`https://gtfobins.github.io/`）把这些命令按能否提权、能否读文件、能否反弹 shell 分类，是最常用的对照表。同一个二进制在不同调用方式下能力差别很大：`find` 靠 `-exec`，`vim` 靠 `:!sh`，`less` 靠 `!sh`，`tar` 靠 `--checkpoint-action`。

`sudoedit` 在 1.8.2 到 1.8.31p2 之间存在堆溢出（CVE-2021-3156，Baron Samedit），用 `sudoedit -s /` 触发特定报错可以快速判断是否受影响。准确的版本区间与各发行版的补丁时间点 待验证。

SUID 的风险不在数量，而在清单里有没有解释器和文件操作工具。`bash`、`find`、`python`、`perl`、`vim`、`cp`、`mv`、`more`、`less`、`man` 带 SUID，基本等于直接交出 root。自研的 SUID 程序更值得逐个看，它们常常用相对路径调外部命令，或者不校验输入。

Capabilities 是比 SUID 细粒度的机制，也更容易配错。`cap_setuid` 可以直接 setuid(0)；`cap_dac_read_search` 允许绕过文件读权限，经典利用是 open_by_handle_at（shocker）；`cap_sys_ptrace` 可以注入任意进程；`cap_sys_module` 能加载内核模块，等于完全控制。

PATH 劫持的前提是脚本用相对命令名调外部程序，且 PATH 里有可写目录排在前面。cron 和自研 SUID 程序最常中招，写一个同名文件丢进可写目录即可。要注意目标脚本可能清空了环境变量，这时得看它是否用了绝对路径。

cron 的可写点有三处：任务文件本身、任务调用的脚本、脚本依赖的库或命令。第三处最隐蔽。

NFS 导出时若带 `no_root_squash`，在客户端以 root 挂载后写入一个 SUID shell，回到服务端执行即是 root。判断方法是读 `/etc/exports`。

`/etc/passwd` 可写时可以直接追加一行 uid 为 0 的账户。手法很旧，但在容器和镜像里仍偶尔遇到。`/var/run/docker.sock` 可写等同于宿主 root：起一个挂载宿主根目录的容器就够了。

## 内核与服务漏洞

打内核是噪音最大的一条路，代价是可能让机器 panic。生产环境上要不要打，取决于是否已经有持久化，以及目标能否承受一次重启。

按实际使用频率排：

- pkexec 的 CVE-2021-4034（PwnKit），影响面极广，利用稳定且不需要特殊条件。
- Dirty Pipe CVE-2022-0847，可覆写任意只读文件，受影响内核大致在 5.8 之后。
- Dirty COW CVE-2016-5195，很旧，但存量系统上仍能见到。
- OverlayFS CVE-2023-0386，Ubuntu 系上存在过较长时间。
- nf_tables CVE-2022-32250，需要非特权用户命名空间可用。

各 CVE 的准确适用区间、发行版补丁时间点 待验证；公开 PoC 的质量参差，用之前必须在同版本靶机上验过。另外，非特权用户命名空间是否开启（`kernel.unprivileged_userns_clone`）直接决定一大批内核利用能不能跑，这个开关值得单独看一眼。

## 检测与加固

SUID 与 capabilities 清单要建基线并监控增量，新增一个 SUID 文件几乎总是异常。sudo 的执行记录默认进 syslog，auditd 可以补上 execve 级别的审计；这两样都没有的话，提权行为事后基本无法溯源。

加固的优先级是：清理不必要的 SUID、收紧 `sudo -l` 的命令白名单并禁掉 shell 类命令、关闭非特权用户命名空间、NFS 导出不使用 `no_root_squash`、docker socket 不暴露给普通用户。内核补丁受停机窗口约束，现场的实际做法通常是把上面几条配置先做完。

## 相关

- 上一层的分类说明见 [Privilege-Escalation](../index.md)
- Windows 侧的对应内容见 [Windows](../Windows/index.md)
