# Linux 账户控制

## 新增账户

:::note 权限问题

只有 root 权限，或者有能力使用 sudo 指令的账户，才有能力使用 useradd 指令

:::

```shell
useradd [OPTIONS] USERNAME
```

OPTIONS

- -m 创建用户目录
- -m -d /opt/username 自定义用户的用户目录
- -u 1500 指定用户的 uid
- -g users 指定用户的用户组

## 删除账户

```shell
userdel username
```

删除用户，并且删除用户的主目录

```shell
userdel -r username
```

## 限制账户运行特定程序

为了限制账户的运行特定程序的行为，需要利用到 Linux 的用户组特性，以及 PAM 机制

首先，需要创建两个测试账户

```shell
sudo adduser user1
sudo adduser user2
```

然后，创建一个新的用户组

```shell
sudo groupadd adminmembers
```

然后将上面两个测试账户添加进新创建的用户组

```shell
sudo usermod -aG adminmembers user1
sudo usermod -aG adminmembers user2
```

然后检查用户组内是否有这两个用户

```shell
getent group adminmembers
```

### Debian Family - 使用update-alternatives方案

sudo dpkg-statoverride --update --add root adminmembers 4750 /bin/su

> 在这里， sudo dpkg-statoverride --update --add命令用于覆盖基于 Debian 的 Linux 发行版上特定文件的文件权限和所有权。 在本例中，该命令正在为 /bin/su二进制。
>
> 让我们分解一下命令：
>
> sudo：这用于以超级用户（root）权限运行命令。 您将需要管理权限才能修改系统文件。
>
> dpkg-statoverride：这是基于 Debian 的系统中的一个命令行工具，允许您覆盖由包管理器管理的包的文件权限和所有权。
>
> --update: 这个选项告诉 dpkg-statoverride更新指定的覆盖（如果已存在）。
>
> --add：此选项表示我们要添加新的覆盖。
>
> root：指定将为文件设置所有权的用户。
>
> adminmembers：指定将为文件设置所有权的组。
>
> 4750：这是文件权限的数字表示。 价值 4750执行时有一个名为“SetUID”（设置用户 ID）的特殊权限。 当。。。的时候 su二进制文件设置了 > > SetUID 位，它使用文件所有者（root）的有效用户 ID 运行，而不是使用执行它的用户。 这允许普通用户在运行时临时切换到root用户的权限 su.
>
> /bin/su：这是要设置覆盖的文件的路径。 在这种情况下，它是 /bin/su二进制文件，允许用户在提供必要的密码后切换到另一个用户的帐户（通常是 root 用户）。
>
> 因此，该命令正在添加对权限和所有权的覆盖 /bin/su二进制。 它将文件的所有者设置为 root, 分组到 adminmembers，并授予该文件 SetUID 权限。 这意味着当用户运行 su命令，它将以root权限运行，允许他们在提供适当的密码后切换到root用户或具有超级用户权限的其他用户。 非“adminmembers”组成员不能使用 su命令，即使他们有 sudo 权限。

如何撤销

```shell
dpkg-statoverride --list /bin/su
```

检查当前的su的权限配置参数

```shell
sudo dpkg-statoverride --remove /bin/su
```

从当前的配置中，将su的配置项进行移除

### RHEL-based Family - PAM

同样的，创建用户，创建用户组，然后将新创建的用户加入到用户组内

然后检查/etc/security/su-adminmembers-access文件是否存在，内容为什么

```shell
# cat /etc/security/su-adminmembers-access 
admin
```

并且确保这个文件的权限是受保护的

```shell
# ls -l /etc/security/su-adminmembers-access
-rw-r--r-- 1 root root 7 Dec 4 12:44 /etc/security/su-adminmembers-access
```

然后配置PAM的配置文件：/etc/pam.d/su

```shell
auth  required    pam_wheel.so use_uid group=adminmembers debug
auth  required    pam_listfile.so item=user sense=allow onerr=fail file=/etc/security/su-adminmembers-access
```

- 只有“adminmembers”组中的用户（例如本例中为 oracle）可以使用有效密码通过“su – admin”切换到管理员
- adminmembers组中的用户只能通过su – admin切换到admin，切换到其他用户仍然失败
- 不在“adminmembers”组中的用户无法使用“su”切换用户
- 用户“root”仍然可以切换到任何其他用户
- 请注意，只有当您需要如此严格的 su 策略时才可以考虑上述设置。 一般来说，建议使用 sudo 来实现更自适应的切换策略。

## Password policies - 密码策略

密码的安全策略基于此软件包来实现的

```shell
libpam-cracklib
```

软件包安装好之后，可以通过配置文件对用户的密码安全策略进行配置

```shell
sudo nano /etc/pam.d/common-password
sudo vi /etc/pam.d/system-auth
```

这是一个example

```shell
password required pam_cracklib.so retry=3 minlen=8 difok=3 dcredit=1 ucredit=1 lcredit=1
```

- retry 重试次数
- minlen 密码的最小长度
- difok 新密码与旧密码之间的最大重用字符数
- dcredit 设置数字的最小数量
- ucredit 大写字符的最小数量
- lcredit 小写字符的最小数量
- ocredit 特殊字符的最小数量

## 密码有效期

```shell
chage -M <天数> <用户名>
```

将`<天数>`替换为你想要设置的密码最长有效期的天数，将`<用户名>`替换为要设置密码的用户的用户名。

例如，要将密码的最长有效期设置为90天，可以执行以下命令：

```shell
chage -M 90 username
```

这将使用户在90天后必须更改密码。

如果需要设置密码过期警告的天数，可以使用chage命令的-W选项。例如，要在密码过期前7天显示警告消息，可以执行以下命令：

```shell
chage -W 7 username
```

这将在用户的密码过期前7天显示警告消息。

请注意，具体命令和选项可能因Linux发行版和版本而有所不同。确保仔细阅读相关文档或使用man chage命令来查看特定系统上chage命令的用法和选项。

另外，密码策略和密码过期设置还可以通过PAM（Pluggable Authentication Modules，可插拔认证模块）进行配置。你可以查阅PAM配置文件和文档以了解更多配置选项。

## Reference

[Authentication with PAM By SUSE](https://documentation.suse.com/sles/12-SP5/html/SLES-all/cha-pam.html)