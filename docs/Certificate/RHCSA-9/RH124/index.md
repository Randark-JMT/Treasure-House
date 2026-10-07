---
sidebar_position: 1
---

# RH124

## 环境初始化

```shell
# 清除之前的课程缓存
[kiosk@foundation0 ~]$ rht-clearcourse all

# 指定课程环境为 RH124
[kiosk@foundation0 ~]$ rht-setcourse rh124

# 首先重新部署 classroom 虚拟机环境
[kiosk@foundation0 ~]$ rht-vmctl reset classroom

# 重新部署所有虚拟机
[kiosk@foundation0 ~]$ rht-vmctl reset all
```

## 红帽企业 Linux 入门

> 介绍开源、Linux、Linux 发行版和红帽企业 Linux，并明确相关定义
>
> 目标：描述和定义开源、Linux、Linux 发行版和红帽企业 Linux
>
> 培训目标：
>
> - 定义和解释 Linux 用途、开源、Linux 发行版和红帽企业 Linux
>
> 章节：
>
> - 什么是 Linux？（及测验）

### 什么是 Linux？

### 总结

- 开源软件的源代码可由任何人免费使用、研究、修改和共享
- Linux 发行版是一种可安装的操作系统，由 Linux 内核以及提供支持的用户程序和库构建而成
- 红帽为开源项目提供支持并贡献代码，赞助项目软件并将项目软件集成到社区驱动的发行版中，同时经过调整和优化后产出稳定版软件，以作为受支持的企业就绪型产品提供给用户使用
- 红帽企业 Linux 是由红帽提供的、受商业支持的企业就绪型开源 Linux 发行版
- 免费的红帽开发人员订阅是一种非常实用的方式，可用来获取学习资源和信息，包括红帽企业 Linux 和其他红帽产品的开发人员订阅

## 访问命令行

> 登录 Linux 系统并使用 shell 运行简单的命令
>
> 目标：登陆 Linux 系统并从 shell 运行简单的命令
>
> 培训目标：
>
> - 登陆 Linux 系统并使用 shell 运行简单的命令
> - 使用 GNOME 桌面环境登陆 Linux 系统，并在终端程序中从 shell 提示符运行命令
> - 从 shell 提示符运行命令时，使用 Bash 快捷键来节省时间
>
> 章节：
>
> - 访问命令行（及测验）
> - 使用桌面访问命令行（及引导式练习）
> - 使用 Bash Shell 执行命令（及测验）
>
> 实验：访问命令行

### 访问命令行

在命令行中，不同的 shell 提示符代表着不同的用户状态

- `$` 代表普通用户的状态
- `#` 代表超级用户的状态

使用 `Ctrl`+`Alt`+`F1 - F6` 功能键组合，可以切换各个虚拟控制台（tty）

### 使用桌面访问命令行

红帽企业 Linux 9 中，默认使用 `GNOME 40` 作为默认桌面环境

可以使用 `Alt + F2` 快捷键，然后输入 `gnome-terminal` 来启动桌面环境下的终端

### 使用 Bash Shell 执行命令

- `Ctrl + A`：跳到命令行的开头
- `Ctrl + E`：跳到命令行的末尾
- `Ctrl + U` 将光标处到命令行开头的内容清除
- `Ctrl + K`：将光标处到命令行末尾的内容清除
- `Ctrl + LeftArrow`：跳到命令行中前一字的末尾
- `Ctrl + RightArrow`：跳到命令行中下一字的末尾
- `Ctrl + R`：在历史记录列表中搜索某一模式的命令

### 总结

- Bash shell 是一个命令解释器，它提示交互用户指定 Linux 命令
- 很多命令都有一个 `--help` 选项，可显示用法信息或屏幕
- 您可以使用工作区来整理多个应用窗口
- 顶栏左上角的 Activities 按钮可以提供一个概览模式，帮助用户整理窗口并启动应用。
- `file` 命令可以扫描文件内容的开头，显示该文件的类型
- `head` 和 `tail` 命令分别显示文件的开头和结尾部分
- 您可以使用 Tab 补全在键入文件名作为命令的参数时将它们补全
- 您可以将图形界面用于许多管理任务。您可以禁用该界面，以保留用于运行应用的资源。
- 您可以使用分号 `;` 字符在同一行中编写多个命令，并使用反斜杠 `\` 字符在多行中运行单个命令

## 使用命令行管理文件

> 通过 bash shell 复制、移动、创建、删除和整理文件
>
> 目标：从 Bash shell 中，复制、移动、创建、删除和组织文件
>
> 培训目标：
>
> - 描述 Linux 如何组织文件，以及文件系统层次结构中各种目录的用途
> - 指定文件的绝对位置和相对于当前工作目录的位置，确定并更改工作目录，以及列出目录的内容
> - 创建、复制、移动和删除文件及目录
> - 使用硬链接和符号（或 “软”）链接，使多个文件名引用同一文件
> - 通过使用 Bash shell 的模式匹配功能，高效地运行影响很多文件的命令
>
> 章节：
>
> - 描述 Linux 文件系统层次结构概念（及测验）
> - 通过名称指定文件（及测验）
> - 使用命令行工具管理文件（及引导式练习）
> - 制作文件间的链接（及引导式练习）
> - 使用 Shell 扩展匹配文件名（及测验）
>
> 实验：从命令行管理文件

### 描述 Linux 文件系统层次结构概念

TODO 在这里补上后续的内容

### 通过名称指定文件

### 使用命令行工具管理文件

### 制作文件间的链接

### 使用 Shell 扩展匹配文件名

### 总结

- Linux 系统中的文件都被组织到一个颠倒的目录树中，称为文件系统层次结构
- 绝对路径以正斜杠（`/`）开头，指定文件在文件系统层次结构中的位置
- 相对路径不以正斜杠（`/`）开头，指定文件相对于当前工作目录的位置
- 您可以将命令与句点（`.`）、双句点（`..`）和波形符（`~`）特殊字符结合使用，以引用文件系统中的文件位置
- `mkdir`、`rmdir`、`cp`、`mv` 和 `rm` 命令是 Linux 中用于管理文件的关键命令
- 硬链接和软链接是让多个文件名指向同一数据的不同方式
- Bash shell 提供了模式匹配、扩展和替换功能，可帮助您高效地运行命令

## 获取有关红帽企业 Linux 的帮助

> aka：在红帽 Linux 中获取帮助
>
> 使用本地帮助系统解决相关问题
>
> 目标：通过利用本地帮助系统来解决问题
>
> 培训目标：
>
> - 在本地 Linux 系统手册页中查找信息
>
> 章节：
>
> - 阅读手册页（及引导式练习）
>
> 实验：在红帽企业 Linux 中获取帮助

### 阅读手册页

### 总结

- 使用 `man` 命令可以查看 man page 并显示有关 Linux 系统组件（如文件、命令和功能）的信息
- 按照惯例，在引用 man page 时，页面名称的后面跟着放在括号内的章节号
- 您可以使用正则表达式在 man page 中搜索内容

## 创建、查看和编辑文本文件

> 通过命令输出或在文本编辑器中管理文本文件
>
> 目标：通过命令行输出或在编辑器中创建、查看和编辑文本文件
>
> 培训目标：
>
> - 通过 shell 重定向将标准输出或标准错误保存到文件中，并利用管道处理多个命令行程序的输出
> - 使用 `vim` 编辑器从命令行创建和编辑文本文件
> 设置 shell 变量以运行命令，并编辑 Bash 启动脚本以设置 shell 和环境变量，从而修改 shell 以及从 shell 运行的程序的行为
>
> 章节：
>
> - 将输出重定向到文本或程序（及测验）
> - 从 shell 提示符编辑文本文件（及引导式练习）
> - 更改 shell 环境（及引导式练习）
>
> 实验：创建、查看和编辑文本文件

### 将输出重定向到文本或程序

### 从 shell 提示符编辑文本文件

### 更改 shell 环境

### 总结

- 运行程序或进程涉及三个标准通信通道：标准输入、标准输出和标准错误
- 您可以使用 I/O 重定向从文件中读取标准输入，或者将输出或错误从进程写入文件
- 管道可以将标准输出从一个进程连接到另一个进程的标准输入，并可格式化输出或构建复杂命令
- 您应该学会如何使用至少一个命令行文本编辑器，建议您使用 Vim，因为 Linux 发行版中通常会默认安装它
- shell 变量可以帮助您运行命令，它们对于 shell 会话而言是唯一的
- 您可以利用环境变量来修改 shell 或进程的行为

## 管理本地用户和群组

> aka：管理本地用户和组
>
> 创建、管理和删除本地用户和群组，并管理本地密码策略。
>
> 目标：创建、管理和删除本地用户和组，以及管理本地密码策略
>
> 培训目标：
>
> - 描述 Linux 系统上用户和组的用途
> - 切换到超级用户账户来管理 Linux 系统，并使用 `sudo` 命令授予其他用户超级用户访问权限
> - 创建、修改和删除本地用户账户
> - 创建、修改和删除本地组账户
> - 为用户设置密码管理策略，并且手动锁定和解锁用户账户
>
> 章节：
>
> - 描述用户和组概念（及测验）
> - 获取超级用户访问权限（及引导式练习）
> - 管理本地用户账户（及引导式练习）
> - 管理本地组账户（及引导式练习）
> - 管理用户密码（及引导式练习）
>
> 实验：管理本地用户和组

### 描述用户和组概念

### 获取超级用户访问权限

### 管理本地用户账户

### 管理本地组账户

### 管理用户密码

### 总结

- Linux 中的用户账户类型有：超级用户、系统用户和普通用户
- 一个用户具有一个主要组，并且可能是多个补充组的成员
- `/etc/passwd`、`/etc/group` 和 `/etc/shadow` 这三个重要文件中包含用户和组的信息
- 您可以通过 `su` 和 `sudo` 命令，以超级用户身份运行命令
- `useradd`、`usermod` 和 `userdel` 命令可以管理用户
- `groupadd`、`groupmod` 和 `groupdel` 命令可以管理组
- `passwd` 命令可以管理用户的密码
- `chage` 命令可显示和配置用户的密码到期设置

## 控制文件访问权限

> aka：控制对文件的访问
>
> 设置文件的 Linux 文件系统权限，并解释不同权限设置的安全效果。
>
> 目标：设置文件的 Linux 文件系统权限，并解释不通权限设置的安全效果
>
> 培训目标：
>
> - 列出文件和目录的文件系统权限，并解释这些权限对用户的组访问权限的影响
> - 利用命令行工具更改文件的权限和所有权
> - 控制用户创建的文件的默认权限，解释特殊权限的影响，并使用特殊权限和默认权限来设置在特定目录中创建的文件的组的所有者
>
> 章节：
>
> - 解释 Linux 文件系统权限（及测验）
> - 从命令行管理文件系统权限（及引导式练习）
> - 管理默认权限和文件访问（及引导式练习）
>
> 实验：控制对文件的访问

### 解释 Linux 文件系统权限

### 从命令行管理文件系统权限

### 管理默认权限和文件访问

### 总结

- 文件所有权权限具有三个类别。文件由用户、单个组和其他用户拥有。应用最具体的权限。用户权限覆盖组权限，组权限又覆盖其他权限
- `ls` 命令 `-l` 选项可展开文件列表，以包括文件权限和所有权
- `chmod` 命令可从命令行更改文件权限
- `chmod` 命令可使用以下两种方法之一来表示权限：符号或八进制
- `chown` 命令可更改文件所有权。`chown` 命令 `-R` 选项可以递归更改目录树的所有权
- 不带参数运行 `umask` 命令将显示 shell 的当前 umask 值。系统上的每个进程都有一个 umask
- Bash 的默认 umask 值在 `/etc/login.defs` 文件中定义，可能会受到 `/etc/profile` 和 `/etc/bashrc` 文件、`/etc/profile.d` 中的文件或您的账户的 shell 初始化文件中的设置影响
- `suid`、`sgid` 和 `sticky` 特殊权限提供与文件访问权限相关的其他功能

## 监控和管理 Linux 进程

> 目标：评估和控制红帽企业 Linux 系统上正在运行的进程。
>
> 培训目标：
>
> - 确定系统上运行的程序的状态、资源使用情况和所有权，以进行控制
> - 使用 Bash 作业控制来管理从同一终端会话启动的多个进程
> - 使用命令来中止进程与进程通信，定义守护进程的特征，以及停止用户会话和进程
> - 定义负载平均值并确定资源密集型服务器进程
>
> 章节：
>
> - 进程状态和生命周期（及测验）
> - 控制作业（及引导式练习）
> - 中止进程（及引导式练习）
> - 监控进程活动（及引导式练习）
>
> 实验：监控和管理 Linux 进程

### 进程状态和生命周期

### 控制作业

### 中止进程

### 监控进程活动

### 总结

- 进程是可执行程序的运行中实例。进程被分配又有一个状态，可以是运行、睡眠、停止或僵停。`ps` 命令可以列出进程
- 每个终端都有自己的会话，并且可以具有一个前台进程和多个独立的后台进程。`jobs` 命令显示终端会话中的进程
- 信号是向执行中的程序报告事件的软件中断。`kill`、`pkill` 和 `killall` 命令使用信号来控制进程
- 负载平均值是一种对系统繁忙程度的估算。要显示负载平均值，可使用 `top`、`uptime` 或 `w` 命令

## 控制服务和守护进程

> 目标：使用 systemd 服务控制和监视网络服务与系统守护进程。
>
> 培训目标：
>
> - 列出由 `systemd` 服务和套接字单元启动的系统守护进程和网络服务
> - 使用 `systemctl` 控制系统守护进程和网络服务
>
> 章节：
>
> - 识别自动启动的系统进程（及引导式练习）
> - 控制系统服务（及引导式练习）
>
> 实验：控制服务和守护进程

### 识别自动启动的系统进程

```shell
# 列出并分页显示所有当前加载（active）的服务单元
$ systemctl list-units --type=service

# 列出所有的服务单元
$ systemctl list-units --type=service --all

# 列出所有的套接字单元
$ systemctl list-units --type=socket --all

# 列出所有已安装的单元文件的状态
$ systemctl list-unit-files --type=service

# 查看服务单元的状态（如 sshd 服务）
$ systemctl status sshd.service

# 验证服务是否处于活动状态（正在运行）（如 sshd 服务）
$ systemctl is-active sshd.service

# 验证服务单元是否已启用为在系统引导期间自动启动（如 sshd 服务）
$ systemctl is-enabled sshd.service

# 验证单元是否在启动过程中失败（如 sshd 服务）
$ systemctl is-failed sshd.service
```

### 控制系统服务

```shell
# 重新启动服务（如 sshd 服务）
$ systemctl restart sshd.service

# 重新加载服务（如 sshd 服务）
$ systemctl reload sshd.service

# 重载或重新启动服务（适用于未知是否支持重载的服务）（如 sshd 服务）
$ systemctl reload-or-restart sshd.service

# 列出启动服务单元所需的依赖项的层次结构映射（如 sshd 服务）
$ systemctl list-dependencies sshd.service

# 列出依赖本服务单元作为依赖项的单元的层次结构映射（如 sshd 服务）
$ systemctl list-dependencies --reverse sshd.service

# 屏蔽服务（避免意外启动与其他服务冲突的服务）（如 sendmail 服务）
$ systemctl mask sendmail.service

# 取消屏蔽服务（如 sendmail 服务）
$ systemctl unmask sendmail

# 使服务在系统引导时自动启动（如 sshd 服务）
$ systemctl enable sshd.service

# 启动服务，并使服务在系统引导时自动启动（如 sshd 服务）
$ systemctl enable --now sshd.service

# 服务在系统引导时不会自动启动（如 sshd 服务）
$ systemctl disable sshd.service

# 停止服务，并使服务在系统引导时不会自动启动（如 sshd 服务）
$ systemctl disable --now sshd.service

# 验证服务当前是启用状态还是禁用状态（如 sshd 服务）
$ systemctl is-enabled sshd.service
```

### 总结

- `systemd` 实用程序提供了一种方式，可在系统引导时以及运行中的系统上激活系统资源、服务器守护进程和其他进程
- 使用 `systemctl` 实用程序可以启动、停止、重新加载、启用和禁用服务
- 使用 `systemd` 实用程序可以管理服务单元、套接字单元和路径单元
- 使用 `systemctl status` 命令可以确定 `systemd` 启动的系统守护进程和网络服务的状态
- `systemctl list-dependencies` 命令可以列出特定服务单元依赖的所有服务单元
- `systemd` 实用程序可屏蔽服务单元，使其即便是为了满足依赖关系的需要也不会运行

## 配置 SSH 并确保其安全性

> aka：配置和保护 SSH
>
> 使用 OpenSSH 在远程系统上配置安全的命令行服务。
>
> 目标：使用 OpenSSH 配置远程系统上的安全命令行服务
>
> 培训目标：
>
> - 使用 `ssh` 命令登录远程系统并运行命令
> - 配置用户账户以使用基于密钥的身份验证，从而无需密码就能安全地登录远程系统
> 禁止直接以 `root` 身份登录，并为 OpenSSH 服务禁用基于密码的身份验证
>
> 章节：
>
> - 使用 SSH 访问远程命令行（及引导式练习）
> - 配置基于 SSH 密钥的身份验证（及引导式练习）
> - 自定义 OpenSSH 服务配置（及引导式练习）
>
> 实验：配置和保护 SSH

### 使用 SSH 访问远程命令行

SSH 连接远程主机时，会在本地的公钥储存中进行检索和核对，本地公钥储存的位置可为

- `/etc/ssh/ssh_known_hosts`
- `~/.ssh/known_hosts`

可以配置 `/etc/ssh/ssh_config` 文件中配置主机密钥检查的参数，通过启用严格的主机密钥检查，可以做到当远程主机的主机密钥与本地的公钥储存不一致时，中断 SSH 连接

```plaintext title="/etc/ssh/ssh_config"
StrictHostKeyChecking   yes
```

计算设备的 SSH 主机密钥（以 workstation 环境举例）

```shell
$ ssh-keygen -lf /etc/ssh/ssh_host_ecdsa_key.pub
256 SHA256:ZAM2zE6BVXU8RRfUB+kLSDNy/BLPfwZuPn6hQlNkqLI root@workstation.lab.example.com (ECDSA)
```

### 配置基于 SSH 密钥的身份验证

使用 `ssh-keygen` 命令，可以在本地创建一个密钥对，并将私钥和公钥分别保存在 `~/.ssh/id_rsa` 和 `~/.ssh/id_rsa.pub` 文件中。在 `ssh-keygen` 程序运行过程中，可以指定私钥密码，以提高安全性

可以通过 `ssh-keygen -f <filename>` 来指定密钥文件的保存位置

在本地生成一个密钥对之后，可以使用 `ssh-copy-id` 命令，来将本地的 SSH 公钥添加到远程系统的公钥储存中，以实现无密码登录远程系统。具体命令为 `ssh-copy-id -i ~/.ssh/key-with-pass.pub username@remotehost`

在使用带有密码保护的私钥时，为了方便以及避免频繁输入密码导致潜在的密码外泄可能，可以使用 `ssh-agent` 密钥管理器来优化使用密钥的流程

使用 `eval $(ssh-agent)` 来启动密钥管理器，并使用 `ssh-add` 命令来添加私钥，语法如 `ssh-add ~/.ssh/key-with-pass`

当 SSH 连接出现问题的时候，可以通过 `-v`、`-vv` 和 `-vvv` 三种不同等级的日志显示参数来对问题进行排查

`~/.ssh/config` 文件包含有 SSH 客户端的相关配置信息，可以在其中配置 SSH 连接过程中的行为

### 自定义 OpenSSH 服务配置

在 `/etc/ssh/sshd_config` 中，可以配置 OpenSSH 服务端的行为

```plaintext
# 设置为 允许 / 禁止 root 账户登录 SSH
PermitRootLogin yes/no

# 设置为 允许 / 禁止 使用密码登录 SSH
PasswordAuthentication yes/no
```

### 总结

- 通过 `ssh` 命令，用户可以使用 SSH 协议安全地访问远程系统
- 客户端系统将远程服务器的身份储存在 `~/.ssh/known_hosts` 和 `/etc/ssh/ssh_known_hosts` 文件中
- SSH 同时支持基于密码和基于密钥的身份验证
- `ssh-keygen` 命令可生成用于身份验证的 SSH 密钥对。`ssh-copy-id` 命令将公钥导出到远程系统
- `sshd` 服务在红帽企业 Linux 系统上实施 SSH 协议
- 在 `/etc/ssh/sshd_config` 配置文件中配置高级 SSH 设置
- 建议您配置 `sshd` 以禁止以 `root` 身份进行远程登录，并要求使用公钥身份验证，而非基于密码的身份验证

## 分析和存储日志

> 查找和准确解读系统事件日志，以便及时排除故障
>
> 目标：查找和准确解读系统事件日志，以满足故障排除之需
>
> 培训目标：
>
> - 描述红帽企业 Linux 用于记录事件的基本日志架构
> - 解读相关 syslog 文件中的事件，以排除故障或查看系统状态
> - 查找和解读系统日志中的条目，以排除故障或查看系统状态
> - 配置系统日志，以在服务器系统重启时保留事件记录
> 利用网络时间协议（NTP）维护准确的时间同步，并且配置时区以确保系统日志和日志记录的事件标有正确的时间戳
>
> 章节：
>
> - 描述系统日志架构（及测验）
> - 检查 syslog 文件（及引导式练习）
> - 检查系统日志条目（及引导式练习）
> - 保留系统日志（及引导式练习）
> - 维护准确的时间（及引导式练习）
>
> 实验：分析和储存日志

### 描述系统日志架构

`systemd-journald` 服务是操作系统事件日志架构的核心。`systemd-journald` 服务从许多来源收集事件信息：

- 系统内核
- 启动过程早期阶段的输出
- 守护进程的标准输出和标准错误
- 系统日志事件

`rsyslog` 服务对 syslog 信息进行排序，并将它们写入到 `/var/log` 目录下的日志文件中，这些日志文件在系统重启后不予保留。

### 查看 Syslog 文件

`rsyslog` 服务的配置文件位于

- `/etc/rsyslog.conf`
- `/etc/rsyslog.d/*.conf`

可以使用 `logger` 手动发送消息至 `rsyslog` 服务，例如 `logger -p local7.notice "Log entry created on host"`

### 查看系统日志条目

使用 `journalctl` 命令可以查看日志中的所有信息，能查看的信息范围取决于当前用户的权限

```shell
# 查看当前的所有日志信息
$ journalctl

# 插卡最后 10 个日志条目
$ journalctl -n 10

# 查看系统日志的最后 10 行，并实时更新
$ journalctl -f

# 查看优先级为 `error` 或以上的日志条目
$ journalctl -p err

# 查看指定 systemd 单元的消息（如 sshd 服务）
$ journalctl -u sshd.service

# 列出今天记录中的所有日志条目
$ journalctl --since today

# 列出从 2022-03-11 20:30:00 到 2022-03-14 10:00:00 范围内的所有日志条目
$ journalctl --since "2022-03-11 20:30:00" --until "2022-03-14 10:00:00"

# 查看上一个小时的所有条目
$ journalctl --since "-1 hour"

# 查看日志信息的详细输出
$ journalctl -o verbose

# 查看 PID 为 2110 的 sshd.service 的所有日志条目
$ journalctl _SYSTEMD_UNIT=sshd.service _PID=2110
```

### 保留系统日志

`/etc/systemd/journald.conf` 文件中的 `Storage` 参数定义系统日志以易失性方式储存，还是持久化保留，参数接受三种值

- `persistent`：使用持久储存 `/var/log/journal`
- `volatile`：使用易失性储存 `/run/log/journal`
- `auto`：如果存在 `/var/log/journal` 目录，则使用持久储存，否则使用易失性储存
- `none`：不使用任何储存

可以通过 `journalctl | grep -E 'Runtime Journal|System Journal'` 查看当前系统的日志条目大小限额

在启用了持久化日志储存的情况下，可以通过 `journalctl -b 1` 查看第一次系统启动的日志条目，可以通过 `journalctl --list-boots` 查看 `journald` 记录的系统启动事件。如果不加参数，直接 `journalctl -b` 则可以查看当前这次系统启动的日志条目

### 维护准确的时间

```shell
# 简要显示当前的时间相关系统设置
$ timedatectl

# 列出时区数据库
$ timedatectl list-timezones

# 更改时区为 America/Phoenix
$ timedatectl set-timezone America/Phoenix

# 更改系统的当前时间为 9:00:00（如果没有设置自动时间同步）
$ timedatectl set-time 9:00:00

# 启用 / 禁用 自动时间调整
$ timedatectl set-ntp true/false
```

在红帽企业 Linux 中，`timedatectl set-ntp` 命令可调整是否启用 `chronyd`NTP 服务

`chronyd` 服务的配置文件位于 `/etc/chronyd.conf`

```shell
# 验证本地系统是否使用 NTP 服务器进行自动时间调整
$ chronyc sources -v
```

### 总结

- `systemd-journald` 和 `rsyslog` 服务可捕获日志消息并写入到适当的文件中
- `/var/log` 目录包含日志文件
- 定期轮转日志文件可防止它们填满文件系统空间
- `systemd` 日志是临时的，不会在系统重启后持久保留
- `chronyd` 服务有助于将时间设置与时间源同步
- 您可以根据服务器的位置更新其时区

## 管理网络

> 目标：配置红帽企业 Linux 服务器上的网络接口和设置
>
> 培训目标：
>
> - 描述服务器关于网络寻址和路由的基本概念
> - 使用命令行实用程序，测试并检查当前的网络配置
> - 使用 `nmcli` 命令管理网络设置和设备
> - 通过编辑配置文件修改网络配置
> - 配置服务器的静态主机名及其名称解析，并测试其结果
>
> 章节：
>
> - 描述网络概念（及测验）
> - 验证网络配置（及引导式练习）
> - 从命令行配置网络（及引导式练习）
> - 编辑网络配置文件（及引导式练习）
> - 配置主机名和名称解析（及引导式练习）
>
> 实验：管理网络

### 描述网络概念

TCP/IP 网络模型是一组简化的四层通信协议

- 应用：应用层，如 SSH 协议，HTTP（S）协议，FTP 协议，SMTP 协议等等
- 传输：TCP 和 UDP 是传输层协议，TCP 是可靠连接导向型通信，UDP 属于无连接数据报协议。在 `/etc/services` 文件中可以查看常用和已注册的端口列表
- 互联网：IPv4 和 IPv6 协议是互联网层协议，每个主机具有 IP 地址和前缀，用于确定网络地址
- 链路：最常见的网络类型是有线以太网（802.3）和 WIFI（802.11）。每一个物理设备具有一个媒体访问控制（MAC）地址，也称为硬件地址。

```shell
# 查看本地网卡信息
$ ip addr show
$ ip a

# 以简短形式列出网卡信息
$ ip -br addr show

# 列出指定网卡的信息（如 eth0）
$ ip addr show eth0
```

### 验证网络配置

```shell
# 列出系统上可用的所有网络接口
$ ip link show

# 查看设备和地址信息（如 ens3）
$ ip addr show ens3

# 显示关于网络性能的统计信息
$ ip -s link show

# 查看路由表
$ ip route

# 查看 IPv6 的路由表
$ ip -6 route
```

若要追踪网络流量经过哪些设备，可以使用 `traceroute` 和 `tracepath` 命令

```shell
# 追踪到 access.redhat.com 的网络流量经过哪些设备
$ tracepath access.redhat.com
$ traceroute access.redhat.com

# 基于 TCP 追踪到 access.redhat.com 的网络流量经过哪些设备
$ traceroute -T access.redhat.com

# 基于 ICMP 追踪到 access.redhat.com 的网络流量经过哪些设备
$ traceroute -I access.redhat.com
```

查询本地系统当前网络的套接字，可以使用 `netstat` 或者使用 `ss`

```shell
# 显示套接字统计信息
$ ss -ta
```

### 从命令行配置网络

在 Linux 中，可以使用 `nmcli` 对 NetworkManager 服务进行管理，NetworkManager 服务可以监控和管理系统的网络设置

```shell
# 显示所有网络设备的状态
$ nmcli device status
$ nmcli dev status

# 显示所有连接的列表
$ nmcli connection show
$ nmcli con show

# 显示所有活动的连接的列表
$ nmcli connection show --active
$ nmcli con show --active
```

可以手动添加一个网络连接

```shell
# 添加 eno2 网络接口的 ethernet 类型的 eno2 连接
$ nmcli con add con-name eno2 type ethernet ifname eno2
```

可以添加一个静态 IPv4 的网络连接 eno3

```shell
# 静态 IPv4 网络设置的 eno3 网络接口的 ethernet 类型的 eno3 连接
# IP 地址为 192.168.0.5
# 网络前缀为 /24
# 网络网关为 192.168.0.254
$ nmcli con add con-name eno3 type ethernet ifname eno3 \
    ipv4.method manual \
    ipv4.address 192.168.0.5/24 \
    ipv4.gateway 192.168.0.254
```

同时配置静态 IPv4 和静态 IPv6 的网络连接 eno4

```shell
# IPv6 地址 2001:db8:0:1::c000:207
# IPv6 网络前缀 /64
# IPv6 网关地址 2001:db8:0:1::1
# IPv4 地址 192.0.2.7
# IPv4 网络前缀 /24
# IPv4 网关地址 192.0.2.1
$ nmcli con add con-name eno4 type ethernet ifname eno4 \
    ipv6.method manual \
    ipv6.address 2001:db8:0:1::c000:207/64 \
    ipv6.gateway 2001:db8:0:1::1 \
    ipv4.method manual \
    ipv4.address 192.0.2.7/24 \
    ipv4.gateway 192.0.2.1
```

通过 `nmcli` 管理网络连接

```shell
# 激活网络连接
$ nmcli connection up <connection name>

# 断开网络设备的连接
$ nmcli device disconnect <device name>
```

通过 `nmcli` 更新连接设置

```shell
# 更新 static-ens3 连接
# IPv4 地址 192.0.2.2/24
# IPv4 网关地址 192.0.2.254
# 系统启动时自动启用
$ nmcli con mod static-ens3 \
    ipv4.address 192.0.2.2/24 \
    ipv4.gateway 192.0.2.254 \
    connection.autoconnect yes

# 更新 static-ens3 连接
# IPv6 地址 2001:db8:0:1::a00:1/64
# IPv6 网关地址 2001:db8:0:1::1
# 系统启动时自动启用
$ nmcli con mod static-ens3 \
    ipv6.address 2001:db8:0:1::a00:1/64 \
    ipv6.gateway 2001:db8:0:1::1
```

一些设置可以拥有多个值，可以通过加号和减号对配置项列表进行编辑

```shell
# 更新 static-ens3 连接
# IPv4 的 dns 服务器列表添加 2.2.2.2
$ nmcli con mod static-ens3 +ipv4.dns 2.2.2.2
```

同时，也可以手动编辑 `cat /etc/NetworkManager/system-connections/` 目录下的配置文件来配置连接，并在编辑后使用 `nmcli con reload` 更新配置项

`nmcli connection delete` 命令可以从系统中删除连接，断开设备连接，并删除连接的配置文件

```shell
# 删除 static-ens3 连接
$ nmcli con del static-ens3
```

对 `NetworkManager` 服务部分配置项进行配置需要 `root` 权限，可以通过 `nmcli general permissions` 命令对权限进行查询

### 编辑网络配置文件

可以手动对 NetworkManager 服务的配置文件进行手动编辑，配置文件位于

- `/etc/NetworkManager/system-connections/`
- `/etc/sysconfig/network-scripts/` (old)

对配置文件进行手动修改了之后，需要执行 `nmcli con reload` 进行重载

### 配置主机名和名称解析

执行 `hostname` 可以输出当前系统的主机名，使用 `hostnamectl` 对主机名等参数进行配置

`/etc/hosts` 文件记录了静态名称解析记录，可以使用 `getent hosts <hostname>` 对静态名称解析记录进行查询，使用 `host <hostname>` 测试 DNS 服务器连接并执行 DNS 查询

若要执行 dns 查询，可以使用 `host`、`dig` 和 `nslookup` 命令

### 总结

- TCP/IP 网络模型是一种简化的四层抽象集合，用于描述不同的协议如何进行互操作，以便计算机通过互联网将流量从一台计算机发送至另一计算机
- IPv4 是当今互联网上使用的主要网络协议
- IPv6 旨在最终取代 IPv4 网络协议
- 默认情况下，红帽企业 Linux 以双栈模式运行，并行使用两种协议
- 网络路由决定了将数据包发送到特定网络的正确网络接口
- `NetworkManager` 守护进程监控和管理网络配置
- `nmcli` 命令是一个用于通过 `NetworkManager` 守护进程来配置网络设置的命令行工具
- 自虹膜企业 Linux 9 起，网络配置的默认位置是 `/etc/NetworkManager/system-connections` 目录
- 系统的静态主机名储存在 `/etc/hostname` 文件中
- `hostnamectl` 命令可以修改或查看系统的主机名和相关设置的状态

## 归档和传输文件

> 目标：将文件归档，并从一个系统复制文件到另一系统
>
> 培训目标：
>
> - 使用 `tar` 将文件和目录归档到压缩文件中，以及提取现有 `tar` 存档的内容
> - 通过 SSH，与远程系统安全地来回传输文件
> - 高效、安全地将本地文件或目录内容与远程服务器副本同步
>
> 章节：
>
> - 管理压缩的 tar 存档（及引导式练习）
> - 在系统之间安全地传输文件（及引导式练习）
> - 在系统之间安全地同步文件（及引导式练习）
>
> 实验：归档和传输文件

### 管理压缩的 tar 存档

`tar` 命令执行操作需要以下操作之一

- `-c` or `--create` ：创建存档文件
- `-t` or `--list` ：列出存档的内容
- `-x` or `--extract` ：提取存档

通常包括以下常用的选项

- `-v` or `--verbose` ：显示操作期间存档或提取的文件
- `-f` or `--file` ：要创建或打开的存档文件名
- `-p` or `--preserve-permissions` ：提取时保留原始文件权限
- `--xattrs` ：启用扩展属性支持
- `--selinux` ：启用 SELinux 上下文支持

以下选项可以用于选择算法

- `-a` or `--auto-compress` ：使用存档的后缀决定压缩算法
- `-z` or `--gzip` ：使用 gzip 算法
- `-j` or `--bzip2` ：使用 bzip2 算法
- `-J` or `--xz` ：使用 xz 压缩算法

### 在系统之间安全地传输文件

可以使用 OpenSSH 套件中的 sftp 命令进行文件传输

```shell
# 使用 sftp 连接到远程主机
$ sftp username@remotehost

# 查询本地当前工作目录
sftp> lpwd

# 查询远程当前工作目录
sftp> pwd

# 在远程主机上创建目录
sftp> mkdir <folder name>

# 将本地文件传输到远程的当前工作目录
sftp> put <local file path>

# 将远程文件传输到本地的当前工作目录
sftp> get <remote file path>
```

在 `get` 和 `put` 命令中，可以使用 `-r` 参数来以递归的方式操作目录

### 在系统之间安全地同步文件

使用 `rsync` 可以在系统之间安全地复制并同步文件（差量化）

### 总结

- `tar` 命令可从一组文件和目录创建存档文件。它还能提取和列出存档文件中的文件
- `tar` 命令提供一组压缩方式，用于缩小存档的大小
- 除了提供安全远程 shell 外，`SSH` 服务也提供 `sftp` 命令，作为与运行 `SSH` 服务器的远程系统来回传输文件的安全方式
- `rsync` 命令可安全高效地在两个目录之间同步文件夹，其中任一目录可以在远程系统上

## 安装和更新软件包

> 目标：从红帽和 DNF 软件包存储库下载、安装、更新和管理软件包
>
> 培训目标：
>
> - 将系统注册到您的红帽账户，并使用红帽订阅管理为其分配软件更新和支持服务的权利
> - 说明如何以 RPM 软件包形式提供软件，并调查 DNF 和 RPM 安装的系统软件包
> 使用 `dnf` 命令查找、安装和更新软件包
> - 启用和禁用红帽或第三方 DNF 储存库
>
> 章节：
>
> - 注册系统以获取红帽支持（及测验）
> - 解释和调查 RPM 软件包（及引导式练习）
> - 使用 DNF 安装和更新软件包（及引导式练习）
> - 启用 DNF 软件储存库（及引导式练习）
>
> 实验：安装和更新软件包

### 注册系统以获取红帽支持

可以使用 GUI 进行系统注册，或者使用 CLI 程序进行注册

```shell
# 使用红帽客户门户凭据进行注册系统
$ subscription-manager register --username <user name>

# 查看当前账户的可用订阅
$ subscription-manager list --available

# 自动附加订阅
$ subscription-manager attach --auto

# 从可用列表的特定池中附加订阅
$ subscription-manager attach --pool=<pool ID>

# 查看已用订阅
$ subscription-manager list --consumed

# 取消注册系统
$ subscription-manager unregister
```

授权证书可在本地系统上储存当前的授权信息，系统授权证书位于

- `/etc/pki/product` ：已安装的红帽产品
- `/etc/pki/consumer` ：注册的红帽账户
- `/etc/pki/entitlement` ：系统附加有哪些订阅

### 解释和调查 RPM 软件包

`rpm` 实用程序是一款低级工具，可检索软件包文件和已安装软件包的内容的相关信息

```shell
# 列出所有已安装的软件包
$ rpm -qa

# 确定提供 <filename> 的软件包
$ rpm -qf <filename>

# 列出当前安装的软件包版本
$ rpm -q

# 获取软件包的详细信息
$ rom -qi

# 列出软件包安装的文件
$ rpm -ql

# 仅列出软件包安装的配置文件
$ rpm -qc

# 仅列出软件包安装的文档文件
$ rpm -qd

# 列出安装或删除软件包时执行的 shell 脚本
$ rpm -q --scripts

# 列出软件包的更改日志信息
$ rpm -q --changelog

# 列出本地软件包安装的文件
$ rpm -qlp
```

通过 `rpm` 可以对本地的 rpm 包进行操作

```shell
# 安装在本地目录的 RPM 包
$ rpm -ivh <rpm filepath>

# 从 rpm 包中提取文件
$ rpm2cpio <rpm filepath> | cpio -idv

# 列出 rpm 包内的文件
$ rpm2cpio <rpm filepath> | cpio -tv
```

### 使用 DNF 安装和更新软件包

DNF（Dandified YUM）取代了 YUM，两者在功能上一致

```shell
# 显示已安装和可用的软件包
$ dnf list "http*"

# 使用关键词进行软件包检索
$ dnf search all "web server"

# 查看软件包相关的详细信息
$ dnf info httpd

# 查询与指定路径匹配的软件包
$ dnf provides /var/www/html
```

可以使用 `dnf` 对软件包进行安装和删除

```shell
# 获取并安装软件包
$ dnf install httpd

# 获取并更新软件包
$ dnf update <package name>

# 为系统安装新的内核
$ dnf update kernel

# 列出所有已安装和可用的内核
$ dnf list kernel

# 删除安装的软件包
$ dnf remove httpd
```

在 `dnf` 中存在有组的概念，即针对特定目的而一起安装的相关软件的集合

```shell
# 显示已安装和可用的组
$ dnf group list

# 显示已安装和可用的组（包括隐藏的组）
$ dnf group list hidden

# 显示与组相关的信息
$ dnf group info "RPM Development Tools"

# 安装一个组
$ dnf group install "RPM Development Tools"
```

所有的安装和删除事物的日志都记录在 `/var/log/dnf.rpm.log` 中

`dnf history` 命令可以显示安装和删除事物的摘要，使用 `dnf history undo 6` 可以撤销事物

`dnf` 支持应用流的模块化功能

```shell
# 列出可用的模块
$ dnf module list

# 列出特定模块的模块流
$ dnf module list module-name

# 显示模块的详细信息
$ dnf module info module-name

# 显示哪个模块提供特定的软件包
$ dnf module provides package
```

### 启用 DNF 软件储存库

```shell
# 列出所有可用的储存库及其状态
$ dnf repolist all

# 启用或禁用储存库
$ dnf config-manager --enable rhel-9-server-debug-rpms
$ dnf config-manager --disable rhel-9-server-debug-rpms

# 添加储存库
$ dnf config-manager --add-repo="https://dl.fedoraproject.org/pub/epel/9/Everything/x86_64/"
```

`dnf` 处理软件包时，基于 GPG 公钥对软件包进行校验，可以使用 `rpm --import` 导入 GPG 公钥

### 总结

- 红帽订阅管理提供用于向计算机授权产品订阅的工具，以便获取软件包的更新，并且跟踪系统所用支持合同和订阅的相关信息
- 软件以 RPM 软件包的形式提供，因此可以轻松地在系统上安装、升级和卸载软件
- `rpm` 命令可用于查询本地数据库，以提供有关已安装软件包的内容的信息并安装已下载的软件包文件
- `dnf` 实用程序是一个强大的命令行工具，可用于安装、更新、删除和查询软件包
- 红帽企业 Linux 使用应用流，通过提供单个储存库来承载应用软件包及其依赖项的多个版本

## 访问 Linux 文件系统

> 目标：访问、检查和使用附加至 Linux 服务器的存储上的现有文件系统
>
> 培训目标：
>
> - 识别文件系统层次结构中的目录，以及储存该目录的设备
> - 通过在文件系统层次结构中添加和删除文件系统，访问文件系统的内容
> - 通过 `find` 和 `locate` 命令搜索已挂载文件系统上的文件
>
> 章节：
>
> - 识别文件系统和设备（及测验）
> - 挂载和卸载文件系统（及引导式练习）
> - 查找系统上的文件（及引导式练习）
>
> 实验：访问 Linux 文件系统

### 识别文件系统和设备

`/dev` 目录下储存 RHEL 自动为所有设备创建的块设备文件

使用 `df` 列出系统上的文件系统和挂载点，可以添加 `-h` 参数，使 `df` 的输出单位转换为人类可读格式

使用 `du` 列出某一特定目录树空间的详细信息，可以添加 `-h` 参数，使 `du` 的输出单位转换为人类可读格式

### 挂载和卸载文件系统

```shell
# 列出指定块设备或所有可用设备的详细信息
$ lsblk

# 将 /dev/vda4 分区挂载到 /mnt/data 挂载点
$ mount /dev/vda4 /mnt/data

# 列出设备的完整路径、其 UUID 和挂载点
$ lsblk -fp

# 通过文件系统的 UUID 挂载文件系统
$ mount UUID="<UUID>" /mnt/data

# 使用挂载点卸载设备
$ umount /mnt/data

# 列出所有打开的文件，以及访问该文件系统的进程
$ lsof /mnt/data
```

### 查找系统上的文件

`locate` 的数据库会每日更新，也可以使用 `updatedb` 命令进行强制即可更新

```shell
# 查找用户可以读取并且名称或者路径中与 `passwd` 关键词匹配的文件
$ locate passwd

# 执行不区分大小写的搜索
$ locate -i messages

# 对搜索结果的结果数量进行限制
$ locate -n 5 passwd
```

`find` 通过在文件系统层次结构中执行实时搜索来查找文件

```shell
# 搜索根目录的 sshd_config 文件
$ find / -name sshd_config

# 从根目录开始搜索以 .txt 扩展名结尾的文件
$ find / -name '*.txt'

# 搜索含有 pass 字符串的文件
$ find / -name '*pass*'

# 执行不区分大小写的搜索
$ find / -iname '*messages*'

# 搜索 developer 用户拥有的文件
$ find -user developer

# 搜索 developer 组拥有的文件
$ find -group developer

# 搜索 uid == 1000 的用户拥有的文件
$ find -uid 1000

# 搜索 gid == 1000 的组拥有的文件
$ find -gid 1000

# 搜索特定文件权限的文件
$ find /home -perm 764
$ find /home -perm u=rwx,g=rw,o=r

# 基于文件权限进行搜索时，列出文件的信息
$ find /home -perm 764 -ls
```

`find` 可以基于文件大小进行搜索

```shell
# 大小为 10 兆字节的文件
$ find -size 10M

# 大小超过 10 千兆字节的文件
$ find -size +10G

# 大小不到 10 千字节的文件
$ find -size -10k
```

`find` 可以基于文件的修改时间进行搜索

```shell
# 120 分钟前更改过内容的所有文件
$ find / -mmin 120

# 200 分钟前更改过内容的所有文件
$ find / -mmin +200

# 过去 150 分钟内更改过内容的所有文件
$ find / -mmin -150
```

`find` 也可以基于文件类型进行搜索

```shell
# 搜索 /etc 目录中的所有目录
$ find /etc -type d

# 搜索 / 目录中的所有软链接
$ find / -type l

# 搜索 /dev 目录中的所有块设备
$ find /dev -type b

# 搜索硬链接数超过一个的所有常规文件
$ find / -type f -links +1
```

### 总结

- 储存设备由块设备文件类型来表示
- `df` 命令可报告所有已挂载的普通文件系统的总磁盘空间、已用磁盘空间和可用磁盘空间
- `root` 用户可以使用 `mount` 命令手动挂载文件系统
- 要成功卸载设备，所有进程都必须停止访问对应挂载点
- 在使用图形环境时，可移动储存设备挂载到 `/run/media` 目录
- `lsblk` 命令可列出块设备的详细信息，如大小和 UID
- `find` 命令可以根据搜索条件，在本地文件系统中实时搜索文件

## 分析服务器和获取支持

> 目标：在基于 Web 的管理界面中调查和解决问题，并从红帽获取支持以帮助解决问题
>
> 培训目标：
>
> - 激活 Web 控制台管理界面，以远程管理和监控红帽企业 Linux 服务器性能
> - 描述和使用红帽客户门户上的重要资源，并在红帽文档和知识库中查找信息
> - 使用 Red Hat Insights 分析服务器问题，修复或解决问题，以及确认解决方案是否奏效
>
> 章节：
>
> - 分析和管理远程服务器（及引导式练习）
> - 创建诊断报告（及引导式练习）
> - 通过红帽智能分析工具检测和解决问题（及测验）

### 总结

- Web 控制台是一个基于 Web 的服务器管理界面，它的基础时开源的 `cockpit` 服务
- Web 控制台提供系统性能图表、用于管理系统配置和检查日志的图形工具，以及交互式终端界面
- 通过红帽客户门户，您可以访问红帽产品的文档、下载项目、优化工具、支持案例管理，以及订阅和权力管理
- `redhat-support-tool` 命令行工具查询知识库并处理支持案例
- 红帽智能分析是一款基于 SaaS 的预测分析工具，可帮助您识别和修复系统的安全性、性能、可用性和稳定性威胁

## 综合复习

> 完成实训练习，以回顾本课程所涵盖的内容

### 从命令行管理文件

规范

- 以 `student` 用户身份登录 serverb
- 创建 `/home/student/grading` 目录
- 在 `/home/student/grading` 目录中创建以下三个空文件：`grade1`、`grade2` 和 `grade3`
- 将 `/home/student/bin/manage` 文件的前五行采集到 `/home/student/grading/review.txt` 文件中
- 将 `/home/student/bin/manage` 文件的最后三行附加到 `/home/student/grading/review.txt` 文件
- 将 `/home/student/grading/review.txt` 文件复制到 `/home/student/grading/review-copy.txt` 文件
- 编辑 `/home/student/grading/review-copy.txt` 文件，使 `Test JJ` 行出现两次
- 编辑 `/home/student/grading/review-copy.txt` 文件以删除 `Test HH` 行
- 编辑 `/home/student/grading/review-copy.txt` 文件，使得 `Test BB` 行和 `Test CC` 行之间存在 `A new line` 行
- 创建 `/home/student/grading/grade1` 文件的硬链接，取名为 `/home/student/hardcopy`
- 创建 `/home/student/grading/grade2` 文件的符号链接，取名为 `/home/student/softcopy`
- 将列出 `/boot` 目录的内容的命令输出保存到 `/home/student/grading/longlisting.txt` 文件。输出应该是一个长列表，内含各个文件的文件权限、所有者和组所有者、大小以及修改日期。输出中应当省略隐藏文件

部署环境

```shell
[student@workstation ~]$ lab start rhcsa-rh124-review1

Starting lab.

 · Checking lab systems ................................................................................................................................................ SUCCESS
 · Creating /home/student/bin folder on serverb ........................................................................................................................ SUCCESS
 · Creating /home/student/bin/manage file on serverb ................................................................................................................... SUCCESS
 · Changing /home/student/bin folder owner and group ................................................................................................................... SUCCESS
 · Creating /tmp/md5sum.txt file on serverb ............................................................................................................................ SUCCESS
```

开始测验

```shell
[student@workstation ~]$ ssh student@serverb
Activate the web console with: systemctl enable --now cockpit.socket

Register this system with Red Hat Insights: insights-client --register
Create an account or view all your systems at https://red.ht/insights-dashboard
Last login: Sat Jun  1 02:07:33 2024 from 172.25.250.250
[student@serverb ~]$ mkdir /home/student/grading
[student@serverb ~]$ cd /home/student/grading
[student@serverb grading]$ touch grade1 grade2 grade3
[student@serverb grading]$ ll
total 0
-rw-r--r--. 1 student student 0 Jun  1 02:27 grade1
-rw-r--r--. 1 student student 0 Jun  1 02:27 grade2
-rw-r--r--. 1 student student 0 Jun  1 02:27 grade3
[student@serverb grading]$ head -n 5 /home/student/bin/manage > /home/student/grading/review.txt
[student@serverb grading]$ tail -n 3 /home/student/bin/manage >> /home/student/grading/review.txt
[student@serverb grading]$ cat /home/student/grading/review.txt
Test AA
Test BB
Test CC
Test DD
Test EE
Test HH
Test II
Test JJ
[student@serverb grading]$ cp /home/student/grading/review.txt /home/student/grading/review-copy.txt
[student@serverb grading]$ vim /home/student/grading/review-copy.txt
# 中间的 vim 操作省略
[student@serverb grading]$ ln /home/student/grading/grade1 /home/student/hardcopy
[student@serverb grading]$ ls -lih /home/student/hardcopy
25169628 -rw-r--r--. 2 student student 0 Jun  1 02:27 /home/student/hardcopy
[student@serverb grading]$ ls -lih /home/student/grading/grade1
25169628 -rw-r--r--. 2 student student 0 Jun  1 02:27 /home/student/grading/grade1
[student@serverb grading]$ ln -s /home/student/grading/grade2 /home/student/softcopy
[student@serverb grading]$ ls -lih /home/student/softcopy
15736 lrwxrwxrwx. 1 student student 28 Jun  1 02:39 /home/student/softcopy -> /home/student/grading/grade2
[student@serverb ~]$ ls -l /boot > /home/student/grading/longlisting.txt
```

检验操作

```shell
[student@workstation ~]$ lab grade rhcsa-rh124-review1

Grading lab.

 · Checking lab systems ................................................................................................................................................ SUCCESS
 · Verifying /home/student/bin/manage file ............................................................................................................................. SUCCESS
 · Verifying /home/student/grading/review.txt file exists .............................................................................................................. SUCCESS
 · Verifying /home/student/grading/review-copy.txt file exists ......................................................................................................... SUCCESS
 · Verifying /home/student/grading/longlisting.txt file exists ......................................................................................................... SUCCESS
 · Verifying /home/student/grading folder exists ....................................................................................................................... SUCCESS
 · Verifying /home/student/grading/grade1 file exists and is empty ..................................................................................................... SUCCESS
 · Verifying /home/student/grading/grade2 file exists and is empty ..................................................................................................... SUCCESS
 · Verifying /home/student/grading/grade3 file exists and is empty ..................................................................................................... SUCCESS
 · Evaluating the hard link ............................................................................................................................................ SUCCESS
 · Evaluating the soft link ............................................................................................................................................ SUCCESS
 · Evaluating the longlisting file ..................................................................................................................................... SUCCESS
 · Evaluating the manage-files-copy.txt file ........................................................................................................................... SUCCESS

Overall lab grade: PASS
```

### 管理用户和组、权限以及进程

规范

- 以 `student` 用户身份登录 `serverb`
- 识别和终止当前使用最多 CPU 时间的进程
- 创建 `database` 组，其 GID 为 50000
- 创建 `dbadmin1` 用户，并使用以下要求对其进行配置
  - 添加 `database` 作为补充组
  - 将密码设置为 `redhat`，并强制在第一次登录时更改密码
  - 允许上次密码更改起 10 天后更改密码
  - 将密码到期时间设为上次密码更改后 30 天
  - 允许用户使用 `sudo` 命令以超级用户身份运行任何指令
  - 为 `dbadmin1` 用户将默认 umask 配置为 007
- 创建 `/home/dbadmin1/grading/review2` 目录，将 `dbadmin1` 设为所属用户，`database` 组设为所属组
- 配置 `/home/dbadmin1/grading/review2` 目录，使 `database` 组拥有此目录中创建的任何文件，无论该文件是由哪个用户创建的。配置目录的权限，以允许 `database` 组成员访问该目录以及在其中创建文件。所有其他用户应具有该目录的读取和执行权限
- 确保仅允许用户从 `/home/dbadmin1/grading/review2` 目录中删除自己拥有的文件

部署环境

```shell
[student@workstation ~]$ lab start rhcsa-rh124-review2

Starting lab.

 · Checking lab systems ................................................................................................................................................ SUCCESS
 · Creating ansible repo on serverb .................................................................................................................................... SUCCESS
 · Ensuring the CPU intensive process is not present on serverb ........................................................................................................ SUCCESS
 · Creating a CPU intensive process on serverb ......................................................................................................................... SUCCESS
 · Saving the PID for the CPU intensive process on serverb ............................................................................................................. SUCCESS
 · Ensuring dbadmin1 user does not exist on serverb .................................................................................................................... SUCCESS
 · Ensuring database group does not exist on serverb ................................................................................................................... SUCCESS
 · Ensuring dbadmin1 is not present in sudoers file .................................................................................................................... SUCCESS
 · Ensuring dbadmin1 is not present in sudoers folder .................................................................................................................. SUCCESS
 · Creating /home/student/grading folder on serverb .................................................................................................................... SUCCESS
 · Changing owner and group on /home/student/grading folder on serverb ................................................................................................. SUCCESS
 · Backing up /etc/sudoers on serverb .................................................................................................................................. SUCCESS
```

开始测验

```shell
# top 相关操作省略
[root@serverb ~]# groupadd -g 50000 database
[root@serverb ~]# useradd dbadmin1
[root@serverb ~]# usermod -G database dbadmin1
[root@serverb ~]# echo redhat | passwd --stdin dbadmin1
Changing password for user dbadmin1.
passwd: all authentication tokens updated successfully.
[root@serverb ~]# chage -d 0 dbadmin1
[root@serverb ~]# chage -m 10 dbadmin1
[root@serverb ~]# chage -M 30 dbadmin1
[root@serverb ~]# visudo
# visudo 具体操作省略
[root@serverb ~]# su - dbadmin1
[dbadmin1@serverb ~]$ echo "umask 007" > .bashrc
[dbadmin1@serverb ~]$ mkdir -p /home/dbadmin1/grading/review2
[dbadmin1@serverb ~]$ chown -R dbadmin1:database /home/dbadmin1/grading/review2
[dbadmin1@serverb ~]$ chown -R dbadmin1:database /home/dbadmin1/
[dbadmin1@serverb ~]$ chmod -R g+x /home/dbadmin1/
[dbadmin1@serverb ~]$ chmod g+s /home/dbadmin1/grading/review2
[dbadmin1@serverb ~]$ chmod 755 /home/dbadmin1/grading/review2
[dbadmin1@serverb ~]$ chmod o+t /home/dbadmin1/grading/review2
```

检验操作

```shell
[student@workstation ~]$ lab grade rhcsa-rh124-review2

Grading lab.

 · Checking lab systems ................................................................................................................................................ SUCCESS
 · Verifying termination of CPU intensive process on serverb ........................................................................................................... SUCCESS
 · Verifying if the database group exists on serverb ................................................................................................................... SUCCESS
 · Verifying if dbadmin1 belongs to database group on serverb .......................................................................................................... SUCCESS
 · Verifying the password expiration for the dbadmin1 user ............................................................................................................. SUCCESS
 · Evaluating properties of the review2 directory on serverb ........................................................................................................... FAIL
    - Command did not exit with the expected code
    - Expected: 0, Received: 1
 · Evaluating the sudo configuration of dbadmin1 on serverb ............................................................................................................ SUCCESS
 · Evaluating the umask of dbadmin1 on serverb ......................................................................................................................... SUCCESS

Overall lab grade: FAIL
```

:::warning

有点问题，不知道目录的权限设置具体怎么操作的，已经按照教材的 exp 执行过了，还是不对

:::

### 配置和管理服务器

规范

- 以 `student` 用户身份登录 `serverb`
- 为 `student` 用户生成 SSH 密钥。不要使用密语对该密钥进行保护。将私钥和公钥分别保存为 `/home/student/.ssh/review3_key` 和 `/home/student/.ssh/review_key.pub` 文件
- 在 `servera` 上配置 `student` 用户，以接受通过 `review3_key`SSH 密钥对进行登录身份验证。`serverb` 上的 `student` 用户应该无需输入密码，就能使用 SSH 来登录 `servera`
- 在 `serverb` 上配置 sshd 服务，以禁止 `root` 用户进行登录
- 在 `serverb` 上配置 `sshd` 服务，以禁止用户使用其密码进行登录。用户仍应能够使用 SSH 密钥对进行登录身份验证
- 创建 `/tmp/log.tar` tar 存档，其包含 `serverb` 上 `/var/log` 目录的内容。使用 `review3_key` 私钥以 `student` 用户验证身份，将 tar 存档远程传输到 `servera` 上的 `/tmp` 目录
- 配置 `serverb` 上的 `rsyslog` 服务，将所有优先级为 debug 或更高的服务记录到 `/var/log/grading-debug` 文件。在 `/etc/rsyslog.d/grading-debug.conf` 文件中定义配置。通过使用任何设备，生成优先级为 debug、且饱含 `Debug Testing` 文本的 syslog 消息
- 在 `serverb` 计算机上安装 `zsh` 软件包
- 将 `serverb` 的时区设为 `Asia/Kolkata`

部署环境

```shell
[student@workstation ~]$ lab start rhcsa-rh124-review3

Starting lab.

 · Checking lab systems ................................................................................................................................................ SUCCESS
 · Installing sshpass package on serverb ............................................................................................................................... SUCCESS
 · Backing up /etc/ssh/sshd_config on serverb .......................................................................................................................... SUCCESS
 · Ensuring that custom log files do not exist on serverb .............................................................................................................. SUCCESS
 · Recording pre-Lab time zone on serverb .............................................................................................................................. SUCCESS
 · Ensuring that zsh is not installed on serverb ....................................................................................................................... SUCCESS
```

开始测验

```shell
[student@workstation ~]$ ssh student@serverb
Activate the web console with: systemctl enable --now cockpit.socket

Register this system with Red Hat Insights: insights-client --register
Create an account or view all your systems at https://red.ht/insights-dashboard
Last login: Sat Jun  1 03:30:01 2024 from 172.25.250.9
[student@serverb ~]$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/student/.ssh/id_rsa): /home/student/.ssh/review3_key
Created directory '/home/student/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/student/.ssh/review3_key
Your public key has been saved in /home/student/.ssh/review3_key.pub
The key fingerprint is:
SHA256:1NliMvl0wHqq4Ka4Nf9S05/YY3Vwxvo1fcUGFdCrXds student@serverb.lab.example.com
The key's randomart image is:
+---[RSA 3072]----+
|         ..  .ooo|
|         o.+  .. |
|        =.* o. o.|
|       ..*.o. +.=|
|       .So.  =o.*|
|    . o o   o..+E|
|  o. o o + o o .o|
| o o+ . . *   .  |
|o..o.o.  . .     |
+----[SHA256]-----+
[student@serverb ~]$ ssh-copy-id -i /home/student/.ssh/review3_key.pub student@servera
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/student/.ssh/review3_key.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
student@servera's password:

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh'student@servera'"
and check to make sure that only the key(s) you wanted were added.
[student@serverb ~]$ sudo vim /etc/ssh/sshd_config
# sshd 服务 - root 限制登录 的配置操作部分省略
[student@serverb ~]$ sudo systemctl reload-or-restart sshd.service
[student@serverb ~]$ sudo vim /etc/ssh/sshd_config
# sshd 服务 - 限制密码登录 的配置操作部分省略
[student@serverb ~]$ sudo systemctl reload-or-restart sshd.service
[student@serverb ~]$ sudo tar -cvf /tmp/log.tar /var/log
tar: Removing leading `/' from member names
/var/log/
/var/log/private/
/var/log/rhsm/
/var/log/rhsm/rhsmcertd.log
/var/log/rhsm/rhsm.log
/var/log/qemu-ga/
/var/log/audit/
/var/log/audit/audit.log
/var/log/sssd/
/var/log/sssd/sssd_kcm.log
/var/log/chrony/
/var/log/insights-client/
/var/log/README
/var/log/tallylog
/var/log/wtmp
/var/log/btmp
/var/log/lastlog
/var/log/messages
/var/log/secure
/var/log/maillog
/var/log/spooler
/var/log/tuned/
/var/log/tuned/tuned.log
/var/log/cloud-init.log
/var/log/cloud-init-output.log
/var/log/cron
/var/log/dnf.log
/var/log/dnf.librepo.log
/var/log/dnf.rpm.log
/var/log/hawkey.log
/var/log/kdump.log
/var/log/samba/
/var/log/samba/old/
/var/log/boot.log
/var/log/firewalld
[student@serverb ~]$ sftp student@servera
student@servera's password:
Connected to servera.
sftp> cd /tmp
sftp> put /tmp/log.tar
Uploading /tmp/log.tar to /tmp/log.tar
log.tar                                                                                                                                         100% 3060KB  12.2MB/s   00:00
sftp> exit
[student@serverb ~]$ sudo vim /etc/rsyslog.d/grading-debug.conf
[student@serverb ~]$ cat /etc/rsyslog.d/grading-debug.conf
*.debug /var/log/grading-debug
[student@serverb ~]$ sudo systemctl restart rsyslog.service
[student@serverb ~]$ logger -p debug "Debug Testing"
[student@serverb ~]$ sudo dnf install zsh
Last metadata expiration check: 3:12:06 ago on Sat 01 Jun 2024 06:09:06 AM EDT.
Dependencies resolved.
==================================================================================================================================================================================
 Package                          Architecture                        Version                                  Repository                                                    Size
==================================================================================================================================================================================
Installing:
 zsh                              x86_64                              5.8-9.el9                                rhel-9.0-for-x86_64-baseos-rpms                              3.2 M

Transaction Summary
==================================================================================================================================================================================
Install  1 Package

Total download size: 3.2 M
Installed size: 7.6 M
Is this ok [y/N]: y
Downloading Packages:
zsh-5.8-9.el9.x86_64.rpm                                                                                                                          9.7 MB/s | 3.2 MB     00:00
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                                                             9.4 MB/s | 3.2 MB     00:00
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                                                                          1/1
  Installing       : zsh-5.8-9.el9.x86_64                                                                                                                                     1/1
  Running scriptlet: zsh-5.8-9.el9.x86_64                                                                                                                                     1/1
  Verifying        : zsh-5.8-9.el9.x86_64                                                                                                                                     1/1

Installed:
  zsh-5.8-9.el9.x86_64

Complete!
[student@serverb ~]$ sudo timedatectl set-timezone Asia/Kolkata
```

检验操作

```shell
[student@workstation ~]$ lab grade rhcsa-rh124-review3

Grading lab.

 · Checking lab systems ................................................................................................................................................ SUCCESS
 · Verifying SSH keys on serverb ....................................................................................................................................... SUCCESS
 · Evaluating root login settings on serverb ........................................................................................................................... SUCCESS
 · Evaluating password login settings on serverb ....................................................................................................................... SUCCESS
 · Verifying archives on servera ....................................................................................................................................... SUCCESS
 · Verifying archives on serverb ....................................................................................................................................... SUCCESS
 · Verifying syslog custom configuration on serverb .................................................................................................................... SUCCESS
 · Verifying time zone on serverb ...................................................................................................................................... SUCCESS
 · Verifying that zsh is installed ..................................................................................................................................... SUCCESS

Overall lab grade: PASS
```

### 管理网络

规范

- 在 `serverb` 上，确定以太网接口名称及其活跃连接配置文件
- 在 `serverb` 上，为可用的以太网接口激活 `static` 连接配置文件。`static` 配置文件以静态形式设定网络设置，不使用 DHCP。设置 `static` 配置文件，以使用下表中的网络设置
  - IPv4 地址：172.25.250.111
  - 子网掩码：255.255.255.0
  - 网关：172.25.250.254
  - DNS 服务器：172.25.250.254
- 将 `serverb` 主机名设为 `server-review4.lab4.example.com`
- 在 `serverb` 上，将 `client-review4` 设为 `servera 172.25.250.10`IPv4 地址的规范主机名
- 使用额外的 IPv4 地址 `172.25.250.211` 和子网掩码 `255.255.255.0` 来配置 `static` 连接配置集。不要删除现有的 IPv4 地址。确保当 `static` 连接处于活动状态时，`serverb` 能够对所有地址做出响应
- 在 `serverb` 上，通过激活原先的网络连接配置集来恢复原先的网络设置

部署环境

```shell
[student@workstation ~]$ lab start rhcsa-rh124-review4

Starting lab.

 · Checking lab systems ................................................................................................................................................ SUCCESS
 · Backing up the original /etc/hosts file on serverb .................................................................................................................. SUCCESS
```

开始测验

```shell
# 由于涉及到编辑网卡配置，所以直接通过 virsh 连接到虚拟机
[root@foundation0 ~]# virsh console serverb
Connected to domain 'serverb'
Escape character is ^] (Ctrl +])

serverb login: root
Password:
Last login: Sat Jun  1 03:35:11 from 172.25.250.9
[root@serverb ~]# nmcli connection show
NAME                UUID                                  TYPE      DEVICE
Wired connection 1  3968ff88-8373-3810-a63f-1cdbb896767e  ethernet  eth0
[root@serverb ~]# nmcli device status
DEVICE  TYPE      STATE      CONNECTION
eth0    ethernet  connected  Wired connection 1
lo      loopback  unmanaged  --
[root@serverb ~]# nmcli connection add con-name static ifname eth0 type ethernet \
> ipv4.address 172.25.250.111/24 \
> ipv4.gateway 172.25.250.254 \
> ipv4.dns 172.25.250.254 \
> ipv4.method manual
Connection 'static' (85e95b1d-cbfb-476e-bf13-32b65e77fbbd) successfully added.
[root@serverb ~]# nmcli connection up static
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/2)
[root@serverb ~]# hostnamectl
 Static hostname: serverb.lab.example.com
       Icon name: computer-vm
         Chassis: vm 🖴
      Machine ID: 3c373df75dc447cdb08f9cca704a8aa6
         Boot ID: 30bcf7fdf85d41ed9cef6eac99eb54c6
  Virtualization: kvm
Operating System: Red Hat Enterprise Linux 9.0 (Plow)
     CPE OS Name: cpe:/o:redhat:enterprise_linux:9::baseos
          Kernel: Linux 5.14.0-70.13.1.el9_0.x86_64
    Architecture: x86-64
 Hardware Vendor: Red Hat
  Hardware Model: KVM
[root@serverb ~]# hostnamectl set-hostname server-review4.lab4.example.com
[root@serverb ~]# echo "172.25.250.10 client-review4" >> /etc/hosts
[root@serverb ~]# nmcli connection modify static \
> +ipv4.address 172.25.250.211/24
[root@serverb ~]# nmcli connection up static
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/3)
[root@serverb ~]# nmcli device status
DEVICE  TYPE      STATE      CONNECTION
eth0    ethernet  connected  static
lo      loopback  unmanaged  --
[root@serverb ~]# nmcli connection up "Wired connection 1"
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/4)
[root@serverb ~]# nmcli device status
DEVICE  TYPE      STATE      CONNECTION
eth0    ethernet  connected  Wired connection 1
lo      loopback  unmanaged  --
```

检验操作

```shell
[student@workstation ~]$ lab grade rhcsa-rh124-review4

Grading lab.

 · Checking lab systems ................................................................................................................................................ SUCCESS
 · Verifying the static connection on serverb .......................................................................................................................... SUCCESS
 · Verifying DNS on serverb ............................................................................................................................................ SUCCESS
 · Verifying new IP adresses on serverb ................................................................................................................................ SUCCESS
 · Verifying the canonical name on serverb ............................................................................................................................. SUCCESS
 · Verifying the hostname on serverb ................................................................................................................................... SUCCESS

Overall lab grade: PASS
```

### 挂载文件系统和查找文件

规范

- 以 `student` 用户身份登录 `serverb`，并切换到 `root` 用户
- 识别 `serverb` 计算机上包含 XFS 文件系统的已卸载块设备。将块设备挂载到 `/review5-disk` 目录
- 查找 `review5-path` 文件。创建 `/review5-disk/review5-path.txt` 文件，它应包含由 `review5-path` 文件的绝对路径组成的一行内容
- 查找 `contractor1` 用户和 `contractor` 组拥有的所有文件。这些文件还必须具有八进制权限 640。将这些文件的列表保存到 `/review5-disk/review5-perms.txt` 文件
- 查找大小为 100 字节的所有文件。将这些文件的绝对路径保存到 `/review5-disk/review5-size.txt`

部署环境

```shell
[student@workstation ~]$ lab start rhcsa-rh124-review5

Starting lab.

 · Checking lab systems ................................................................................................................................................ SUCCESS
 · Creating a filesystem on serverb .................................................................................................................................... SUCCESS
 · Creating required user contractor1 on serverb ....................................................................................................................... SUCCESS
 · Creating contractor group on serverb ................................................................................................................................ SUCCESS
 · Creating first file on serverb ...................................................................................................................................... SUCCESS
 · Creating second file on serverb ..................................................................................................................................... SUCCESS
 · Changing second file owner and group on serverb ..................................................................................................................... SUCCESS
 · Changing second file permissions on serverb ......................................................................................................................... SUCCESS
 · Creating third file on serverb ...................................................................................................................................... SUCCESS
```

开始测验

```shell
[student@workstation ~]$ ssh student@serverb
Activate the web console with: systemctl enable --now cockpit.socket

Register this system with Red Hat Insights: insights-client --register
Create an account or view all your systems at https://red.ht/insights-dashboard
Last login: Sat Jun  1 10:04:26 2024 from 172.25.250.9
[student@serverb ~]$ sudo -i
[sudo] password for student: 
[root@serverb ~]# lsblk -fs
NAME  FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
vda1                                                                         
└─vda                                                                        
vda2  vfat   FAT16       7B77-95E7                             192.8M     3% /boot/efi
└─vda                                                                        
vda3  xfs          boot  5e75a2b9-1367-4cc8-bb38-4d6abc3964b8  334.7M    32% /boot
└─vda                                                                        
vda4  xfs          root  fb535add-9799-4a27-b8bc-e8259f39a767    7.6G    18% /
└─vda                                                                        
vdb1  xfs                d08c8564-3889-4900-bd08-ae66153992ca                
└─vdb                                                                        
vdc                                                                          
vdd   
[root@serverb ~]# mkdir /review5-disk
[root@serverb ~]# mount /dev/vdb1 /review5-disk
[root@serverb ~]# find / -name review5-path
/var/tmp/review5-path
[root@serverb ~]# find / -name review5-path > /review5-disk/review5-path.txt
[root@serverb ~]# find / -user contractor1 -group contractor -perm 640
find: ‘/proc/33685/task/33685/fd/5’: No such file or directory
find: ‘/proc/33685/task/33685/fdinfo/5’: No such file or directory
find: ‘/proc/33685/fd/6’: No such file or directory
find: ‘/proc/33685/fdinfo/6’: No such file or directory
/usr/share/review5-perms
[root@serverb ~]# find / -user contractor1 -group contractor -perm 640 > /review5-disk/review5-perms.txt
find: ‘/proc/33687/task/33687/fd/5’: No such file or directory
find: ‘/proc/33687/task/33687/fdinfo/5’: No such file or directory
find: ‘/proc/33687/fd/6’: No such file or directory
find: ‘/proc/33687/fdinfo/6’: No such file or directory
[root@serverb ~]# find / -size 100c > /review5-disk/review5-size.txt
```

检验操作

```shell
[student@workstation ~]$ lab grade rhcsa-rh124-review5

Grading lab.

 · Checking lab systems ................................................................................................................................................ SUCCESS
 · Confirming if /review5-disk is mounted on serverb ................................................................................................................... SUCCESS
 · Evaluating the first file content on serverb ........................................................................................................................ SUCCESS
 · Evaluating the second file content on serverb ....................................................................................................................... SUCCESS
 · Evaluating the third file content on serverb ........................................................................................................................ SUCCESS

Overall lab grade: PASS
```
