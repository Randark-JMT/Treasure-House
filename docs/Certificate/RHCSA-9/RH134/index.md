---

sidebar_position: 2

---

# RH134

本文档基于此教材进行编写

```plaintext
红帽系统管理二 - 学员练习册
RH134-RHEL9.0-zh-CN-4-20230333
MAN-RH134SKC-R5
```

## 环境初始化

```shell
# 清除之前的课程缓存
[kiosk@foundation0 ~]$ rht-clearcourse all

# 指定课程环境为 RH124
[kiosk@foundation0 ~]$ rht-setcourse rh134

# 首先重新部署 classroom 虚拟机环境
[kiosk@foundation0 ~]$ rht-vmctl reset classroom

# 重新部署所有虚拟机
[kiosk@foundation0 ~]$ rht-vmctl reset all
```

## 提高命令行运行效率

> 借助 Bash shell、shell 脚本和红帽企业 Linux 实用工具的各种高级功能，更加高效地运行命令
>
> 目标：通过使用 Bash shell 的高级功能、shell 脚本以及红帽企业 Linux 实用程序，可以更高效地运行命令
>
> 培训目标：
>
> * 通过使用 Bash shell 的高级功能、shell 脚本以及红帽企业 Linux 实用程序，可以更高效地运行命令
> * 使用 `for` 循环运行重复性任务，评估命令和脚本的退出代码，使用运算符运行测试，并使用 `if` 语句来创建条件结构
> * 创建正则表达式以匹配数据，使用 `grep` 命令将正则表达式应用到文本文件，并使用 `grep` 从竖线命令中搜索文件和数据
>
> 章节：
>
> * 编写简单的 Bash 脚本 (及引导式练习)
> * 脚本中的循环和条件结构 (及引导式练习)
> * 使用正则表达式匹配命令输出中的文本 (及引导式练习)
>
> 实验：提高命令行运行效率

### 编写简单的 Bash 脚本

脚本的第一行以 `#!` 开头，通常称为 `she-bang` 或者 `hash-bang`，用于指示处理文件的其余行所需的命令解释器和可选命令选项

对于普通的 Bash 语法脚本文件，第一行就是

```shell
#!/usr/bin/bash
```

### 脚本中的循环和条件结构

对于循环结构，一般为

```shell
for VARIABLE in LIST; do
COMMAND VARIABLE
done
```

其中换行不是必须的，整体循环的结构由 `do` 和 `done` 来规范

可以通过以下方式来向 `for` 循环提供字符串

```shell
$ for HOST in host1 host2 host3; do echo $HOST; done
host1
host2
host3
$ for HOST in host {1,2,3}; do echo $HOST; done
host1
host2
host3
$ for HOST in host {1..3}; do echo $HOST; done
host1
host2
host3
```

在 Bash 脚本中，`exit <value>` 可以指定脚本退出时的返回值，使用 `$?` 来获取上一个命令的返回值

在 Bash 脚本中，可以使用 `test` 关键词或者测试命令语法 `[]` 和扩展测试命令语法 `[[]]` 来判断变量是否满足预先设定的规则

* `-gt` ：大于
* `-ge` ：大于等于
* `-lt` ：小于
* `-le` ：小于等于
* `-eq` ：等于

```shell
# 对数字进行比较运算
$ test 1 -gt 0 ; echo $?
0
$ test 0 -gt 1 ; echo $?
1
$ [[ 1 -eq 1 ]]; echo $?
0
$ [[ 1 -ne 1 ]]; echo $?
1
# 对字符串进行比较运算
$ [[ abc = abc ]]; echo $?
0
$ [[ abc == def ]]; echo $?
1
$ [[ abc != def ]]; echo $?
0
# 一元(一个参数)运算符的使用
$ STRING=''; [[-z"$STRING"]]; echo $?
0
$ STRING='abc'; [[-n "$STRING"]]; echo $?
0
```

对于条件结构，一般为

```shell
if <CONDITION>; then
    <STATEMENT>
    ...
    <STATEMENT>
fi
```

例如使用条件结构来启动 `psacct` 服务 (如果服务未处于活动状态)

```shell
$ systemctl is-active psacct
inactive
$ systemctl is-active psacct > /dev/null 2>&1
$ if [[ $? -ne 0 ]]; then sudo systemctl start psacct; fi
```

条件结构可以实现更复杂的结构

```shell
# 启动 psacct 服务(如果未处于活跃状态)和停止该服务(如果处于活跃状态)
$ systemctl is-active psacct > /dev/null 2>&1
$ if [[ $? -ne 0 ]]; then \
sudo systemctl start psacct ; \
else \
sudo systemctl stop psacct ; \
fi

# 运行 mysql 客户端(如果 mariadb 服务处于活动状态)
# 运行 psql 客户端(如果 postgresql 服务处于活跃状态)
# 运行 sqlite3 客户端(如果 mariadb 和 postgresql 服务均未处于活跃状态)
$ systemctl is-active mariadb > /dev/null 2>&1
$ MARIADB_ACTIVE=$?
$ systemctl is-active postgresql > /dev/null 2>&1
$ POSTGRESQL_ACTIVE=$?
$ if [[ "$MARIADB_ACTIVE" -eq 0 ]]; then \
mysql; \
elif [[ "$POSTGRESQL_ACTIVE" -eq 0 ]]; then \
psql; \
else \
sqlite3; \
fi
```

### 使用正则表达式匹配命令输出中的文本

可以使用 `^` 执行行首匹配，`$` 执行行尾匹配

有两种正则表达式：基本正则表达式和扩展正则表达式。两种正则表达式之间，区别在于 `|`、`+`、`?`、`(`、`)`、`{` 和 `}` 特殊字符的行为

`grep`、`sed` 和 `vim` 命令使用基本正则表达式，而 `grep -E`、`sed -E` 和 `less` 命令使用扩展正则表达式

详细语法可以使用 `man grep` 进行查看

`grep` 中，可以使用 `-i` 参数忽略大小写，使用 `-v` 参数反向进行搜索

可以使用 `sed '/^\s*$/d'` 实现对空行的过滤

### 总结

* 创建并执行简单的 Bash 脚本来完成简单的管理任务
* 使用循坏来迭代命令行和 shell 脚本中的项目列表
* 使用条件结构将决策整合到 shell 脚本中
* 使用正则表达式和 `grep` 命令，搜索日志和配置文件中的文本

## 调度将来的任务

> 规划将来要一次性或重复运行的命令
>
> 目标：将任务调度到特定的时间和日期执行
>
> 培训目标：
>
> * 将命令设置为在将来运行一次
> * 利用用户的 `crontab` 文件，将命令调度为按计划重复运行
> * 利用系统 `crontab` 文件和目录，将命令调度为按计划重复运行
> * 启用和禁用 `systemd` 定时器，并配置管理临时文件的定时器
>
> 章节：
>
> * 调度延迟的用户作业 (及引导式练习)
> * 调度周期性用户作业 (及引导式练习)
> * 调度周期性系统作业 (及引导式练习)
> * 管理临时文件 (及引导式练习)
> * 调度未来任务 (测验)

### 调度延迟的用户作业

使用 `at` 命令可以调度一次性作业，以 `myscript` 脚本为例

```shell
# 将 myscript 中的命令设定为 21:03 时执行
$ at 21:03 < myscript
# 将 myscript 中的命令设定为 teatime(16:00) 时执行
$ at teatime < myscript
```

使用 `atq` 查看当前设置的调度任务，`atrm` 删除设置的调度任务

### 调度周期性用户作业

可以使用 `crontab` 创建周期性作业，其接受以下参数

* `-l` ：列出当前用户的作业
* `-r` ：删除当前用户的所有作业
* `-e` ：进入编辑模式
* `-u` ：指定某一用户

### 调度周期性系统作业

周期性的系统作业往往放置于 `/etc/crontab` 文件中，通过 `cron` 语法来进行配置。同时还存在有 `/etc/cron.hourly`、`/etc/cron.daily` 等目录，这些目录中可以直接存放可执行的脚本文件，可以按照预先制定的规则定期执行

`run-parts` 命令也按照约定执行来自 `/etc/anacrontab` 配置文件中的计划任务

在 `systemd` 中，也可以通过配置文件中的 `[Timer]` 配置项来配置服务的定期运行

对服务的配置文件进行修改之后，可以重载 `systemctl daemon` 来加载服务配置文件的修改，并启动服务的定时器单元

```shell
# 加载配置文件的修改
$ systemctl daemon-reload
# 激活定时器单元
$ systemctl enable --now <unitname>.timer
```

### 管理临时文件

红帽企业 Linux 包含 `systemd-tmpfiles` 工具，提供一种结构化和可配置的方法来管理临时目录和文件

`systemd-tmpfiles-clean.timer` 定时器单元可以定义 `systemd` 清理临时文件的行为

使用 `systemd-tmpfiles --clean` 指令来手动清理临时文件

`systemd-tmpfiles-clean` 服务配置文件可位于三个位置：

* `/etc/tmpfiles.d/*.conf`
* `/run/tmpfiles.d/*.conf`
* `/usr/lib/tmpfiles.d/*.conf`

### 调度未来任务

### 总结

* 调度到将来运行一次的作业称为延迟作业或任务
* 周期性用户作业可按重复的计划执行用户任务
* 周期性系统作业则是按重复的计划完成影响整个系统的管理任务
* `systemd` 定时器单元既可以执行延迟作业，也可以执行周期性作业

## 调优系统性能

> 目标：通过设置调优参数和调整进程的调度优先级来提高系统性能
>
> 培训目标：
>
> * 通过选择由 `tuned` 守护进程管理的调优配置集来优化系统性能
> * 通过 `nice` 和 `renice` 命令，对特定进程进行优先排序或取消其优先排序
>
> 章节：
>
> * 调整调优配置集 (及引导式练习)
> * 影响进程调度 (及引导式练习)
>
> 实验：调优系统性能

### 调整调优配置集

### 影响进程调度

### 总结

## 管理 SELinux 安全性

> 使用 SELinux 来确保和管理服务器的安全性

## 管理逻辑卷

> 通过命令行创建和管理包含文件系统和交换空间的逻辑卷

## 访问网络附加存储

> 使用 NFS 协议来管理网络附加存储

## 控制启动流程

> 管理启动过程，以控制所提供的服务、进行故障排除并修复问题

## 管理网络安全性

> 使用系统防火墙和 SELinux 规则来控制服务的网络连接情况

## 安装红帽企业 Linux

> 在服务器和虚拟机上安装红帽企业 Linux

## 运行容器

> 在单个红帽企业 Linux 服务器上以容器的形式获取、运行和管理轻量级的简单服务
