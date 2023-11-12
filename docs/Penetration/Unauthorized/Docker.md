# Docker 未授权

Docker 共有两个 API 系统，一个是本地 `daemon` 的 API 系统，常见于 Portainer 等 Docker 容器，通过与 `Docker daemon API` 交互来达到控制 Docker 的目的；一个是 `Docker remote API`，常见于远程 Docker 服务管理，如远程系统（如 CTFd）远程控制靶机服务器上的 Docker 启动题目靶机

由于 Docker 自身服务的特殊性质，需要使用如 `cgroup` 等 Linux 安全特性，所以 Docker 服务需要基于 root 权限进行运行。

## [Docker Daemon API](/docs/Environment/docker/Docker-Daemon-API) 未授权访问漏洞

前置材料：[Docker Daemon API](/docs/Environment/docker/Docker-Daemon-API)

`Docker Daemon API` 未授权漏洞, 常见于将 `Docker Daemon API` 映射进 Docker 容器中，然后在 Docker 容器内使用其他服务来控制宿主机中的 Docker 服务，例如 Portainer 这类 Docker 控制面板。

如果 Docker 容器内的服务存在漏洞，例如 Portainer 存在 CVE 导致攻击者能直接得到 Docker 容器内的最高权限，那么攻击者便能进一步得到宿主机的 `Docker Daemon API` 控制权限，进而完全控制 Docker 服务，那么就可以利用 `Docker Daemon API` 未授权访问漏洞

或者将 `Docker Daemon API` 通过服务转发的方式，转发到外部网络环境 / 攻击者的 vps，便可以直接通过 Docker 客户端，取得宿主机上 Docker 服务的完全控制权限，进而通过定时任务 / 关键程序投毒的方式，取得宿主机的控制权限

## [Docker Remote API](/docs/Environment/docker/Docker-Remote-API) 未授权访问漏洞

前置材料：[Docker Remote API](/docs/Environment/docker/Docker-Remote-API)

如果是由以下指令启动的 Docker Deamon

```shell
dockerd -H=0.0.0.0:2375 -H unix:///var/run/docker.sock
```

那么启动的 `Docker Remote API` 不需要经过账户验证就可以直接访问，也就会出现未授权漏洞，`Docker Remote API` 将会完全无保护的状态暴露在本地的 2375 端口，造成极大的危险性，任何人都可以 2375 端口直接控制 Docker 服务，那么就可以利用 `Docker Remote API` 未授权访问漏洞

:::tip 关于多层内网的 Docker Remote API
Docker 客户端并不接受环境变量传入的网络代理参数，也不接受如 `proxychains` 等 dll 注入形式的网络代理，所以如果在多层内网中发现存在 `Docker Remote API` 未授权漏洞，并不能简单的通过网络代理对 `Docker Remote API` 进行访问，而是需要配置端口转发等形式，将 `Docker Remote API` 转发到可以直接访问的地址，再使用 Docker 客户端 进行连接
:::

## Docker 未授权漏洞利用方式

### 创建恶意映射

可以通过建立敏感文件的映射，来达到控制宿主机的目的，例如将 shell 相关文件映射到 Docker 容器中进行进一步控制和加毒：

```shell
docker ... -v /usr/bin/bash:/vuln/bash ...
```

就可以达到对宿主机的 bash 程序进行控制的目的

或者建立以下映射，以达到在容器内读取敏感信息的目的：

```shell
docker ... -v /etc:/vuln/etc ...
```

亦或者可以通过以下的方式，通过将整个宿主机的文件系统映射进容器内，从而实现一把梭：

```shell
docker run --privileged -it -v /:/tmp/hostss [image_name]
```

进而可以实现：

- ssh写入后门
- 写入可控用户
- 写入计划任务
- ......

### 创建特权容器 - [Privileged Container](/docs/Environment/docker/Docker-Privileged)

常见于以下 Docker 容器启动场景：

```shell
docker run --privileged [image_name]
```

在特权容器中，容器内可以直接操作宿主机的内核资源与硬件资源，允许容器以 root 权限访问系统中的一切，为恶意用户创造了控制系统的机会, 例如：

#### Inside Default Container

```shell
$ docker run --rm -it alpine sh
ls /dev
console  fd       mqueue   ptmx     random   stderr   stdout   urandom
core     full     null     pts      shm      stdin    tty      zero
```

#### Inside Privileged Container

```shell
$ docker run --rm --privileged -it alpine sh
ls /dev
cachefiles       mapper           port             shm              tty24            tty44            tty7
console          mem              psaux            stderr           tty25            tty45            tty8
core             mqueue           ptmx             stdin            tty26            tty46            tty9
cpu              nbd0             pts              stdout           tty27            tty47            ttyS0
[...]
```

由此可以看出，特权容器可以直接控制到宿主机的硬件资源

### 使用 Metasploit 进行自动化攻击

在 msfconsole 中，可以使用 `exploit/linux/http/docker_daemon_tcp` 模块进行自动化攻击

攻击模块的介绍：

> 通过未受保护的 tcp 套接字（2375/tcp，或 2376/tcp，带 tls 但不带 tls-auth）利用 Docker，攻击者可以在运行 Docker 容器的主机服务器上创建一个 Docker 容器，并在 "/" 路径上挂载读 / 写权限。由于 Docker 容器以 uid 0 的身份执行命令，因此主机操作系统会执行该命令，允许攻击者编辑 / 创建 root 拥有的文件。本漏洞利用这一点，在主机服务器的 "/etc/cron.d/" 路径下创建了一个 cron 作业。Docker 镜像应存在于目标系统上，或者是来自 hub.docker.com 的有效镜像。

:::info 关于容器镜像
一般来说，Docker 宿主机应当拥有访问外网的权限，所以 Docker 是能够从储存库拉取镜像的，如 DockerHub。但是如果 Docker宿主机是一台内网机，那么就没有办法自动从外网拉取镜像。在这种情况下，可以选择利用现有的镜像，如：

- `ubuntu:latest`
- `alpine:latest`

但是如果Docker内并没有现有的镜像，也不存在外网访问能力的话，就要选择从外部传输Docker Image的tar包，执行手动导入之后，再进行进一步利用
:::

攻击模块的基础参数如下：

| Name | Current Setting | Required | Description |
| ---- | --------------- | -------- | ----------- |
| CONTAINER_ID | | no | container id you would like |
| DOCKERIMAGE | alpine:latest | yes | hub.docker.com image or local image to use |
| Proxies | | no | A proxy chain |
| RHOSTS | | yes | The target host(s)|
| RPORT | 2375 | yes | The target port (TCP)|
| SSL | false | no | Negotiate SSL/TLS for outgoing connections|
| VHOST | | no | HTTP server virtual host|

简单来说，就是通过将宿主机的`/etc/cron.d/`容器映射进容器内，并创建恶意的计划任务，从而使宿主机上的crontab触发恶意指令，将root权限态的shell反弹至攻击者的监听器上，从而实现：

`Docker Remote API` -> 创建恶意容器 -> 控制宿主机的`/etc/cron.d/`目录 -> 创建恶意计划任务 -> 触发恶意载荷，反弹shell

## Reference

[Docker Remote API 未授权访问 By axing 的星空](https://www.cnblogs.com/xinga/articles/17520869.html)

[特权容器以及安全隐患的规避 By Demonslzh](https://blog.csdn.net/Demonslzh/article/details/127484455)

[Docker --privileged By HackTricks](https://book.hacktricks.xyz/linux-hardening/privilege-escalation/docker-security/docker-privileged)

[Container is running in privileged mode By snyk](https://learn.snyk.io/lesson/container-runs-in-privileged-mode/)

[Docker daemon attack surface - Docker docs](https://docs.docker.com/engine/security/#docker-daemon-attack-surface)

[Bind Docker to another host/port or a Unix socket - Docker docs](https://docs.docker.com/engine/reference/commandline/dockerd/#bind-docker-to-another-hostport-or-a-unix-socket)