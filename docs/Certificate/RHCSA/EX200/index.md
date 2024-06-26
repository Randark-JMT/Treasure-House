---
sidebar_position: 3
---

# EX200

RHCSA 考生应能在没有他人帮助的情况下完成下列任务。这些任务分为多个类别。

## 了解和使用基础工具

- 访问 shell 命令提示符，并使用正确的语法发出命令
- 使用输入输出重定向（>、>>、|、2 等）
- 使用 grep 和正则表达式来分析文本
- 使用 SSH 访问远程系统
- 在多用户目标中登录和切换用户
- 使用 tar、gzip 和 bzip2 将文件归档、压缩、解除捆绑和解压缩
- 创建和编辑文本文件
- 创建、删除、复制和移动文件和目录
- 创建硬链接和软链接
- 罗列、设置和更改标准 ugo/rwx 权限
- 查找、读取和使用系统文档，包括 /usr/share/doc 中的手册、信息和文件

## 创建简单的 shell 脚本

- 在一定条件下执行代码（使用：if、test、[] 等）
- 使用循环结构（for 等）来处理文件、命令行输入
- 处理脚本输入（$1、$2 等）
- 在脚本中处理 Shell 命令的输出

## 运维运行中的系统

- 正常地启动、重启和关闭系统
- 通过手动方式让系统启动进入不同的目标
- 中断启动流程，获取系统访问权限
- 识别 CPU / 内存占用量较大的进程，并停止相关进程
- 调整进程的调度安排
- 管理调优配置文件
- 查找和解读系统日志文件和日志信息
- 保留系统日志
- 启动和停止网络服务，查看网络服务的状态
- 在系统间安全地传输文件

## 配置本地存储

- 罗列、创建、删除 MBR 和 GPT 磁盘上的分区
- 创建和删除物理卷
- 将物理卷分配至卷组
- 创建和删除逻辑卷
- 配置系统，以便在启动时根据通用唯一 ID（UUID）或标签来挂载文件系统
- 添加新的分区和逻辑卷，在保留原有结构的情况下置换为某个系统

## 创建和配置文件系统

- 创建、挂载、卸载、使用 vfat、ext4 和 xfs 文件系统
- 使用 NFS 挂载和卸载网络文件系统
- 配置 autofs
- 扩展现有逻辑卷
- 创建和配置 set-GID 目录，以进行协助处理
- 诊断和修复文件权限问题

## 部署、配置和维护系统

- 使用 at 和 cron 安排任务
- 启动和停止服务，配置服务以在系统启动时自动启动
- 配置系统，以便自动启动进入某个特定目标
- 配置时间服务客户端
- 通过红帽网络、远程存储库或本地文件系统来安装和更新软件包
- 修改系统引导加载程序

## 进行基本联网管理

- 配置 IPv4 和 IPv6 地址
- 进行主机名称解析配置
- 配置网络服务，以便在系统启动时自动启动
- 使用 firewall-cmd/firewall 限制网络访问

## 管理用户和群组

- 创建、删除和修改本地用户帐户
- 为本地用户帐户更改密码和调整密码有效期
- 创建、删除和修改本地群组和群组会籍
- 配置超级用户访问权限

## 管理安全防护

- 使用 firewall-cmd / firewalld 配置防火墙设置
- 管理默认文件权限
- 为 SSH 配置基于密钥的身份验证机制
- 为 SELinux 设置强制和允许模式
- 罗列和识别 SELinux 文件与进程的上下文
- 还原默认文件上下文
- 管理 SELinux 端口标签
- 使用布尔值设置来修改系统 SELinux 设置
- 诊断和处理常规 SELinux 策略违规情况

## 管理容器

- 从远程注册表查找和检索容器镜像
- 检查容器镜像
- 使用 podman 和 skopeo 等命令执行容器管理
- 从 Containerfile 构建容器
- 执行基本容器管理，例如，运行、启动、停止和列出正在运行的容器
- 在容器内运行服务
- 配置容器，以作为 systemd 服务自动启动
- 将持久存储与容器连接

## 模拟题

第一部分的题目，在 node1 上进行操作

### RH124 - 配置网络设置

### RH124 - 配置您的系统以使用默认存储库

### RH124 - 创建用户帐户

### RH124 - 配置 cron 作业

### RH124 - 创建协作目录

### RH124 - 配置 NTP

### RH124 - 配置用户帐户

### RH124 - 查找文件

### RH124 - 查找字符串

### RH124 - 创建存档

### RH124 - 配置 sudo 免密

第二部分的题目，在 node2 上进行操作

### RH134 - 设置 root 密码

### RH124 - 配置您的系统以使用默认存储库
