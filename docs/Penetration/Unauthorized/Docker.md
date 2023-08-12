# Docker 未授权

Docker 共有两个 API 系统，一个是本地 `daemon` 的 API 系统，常见于 Portainer 等 Docker 容器，通过与 `Docker daemon API` 交互来达到控制 Docker 的目的；一个是 `Docker remote API`，常见于远程 Docker 服务管理，如远程系统（如 CTFd）远程控制靶机服务器上的 Docker 启动题目靶机

## [Docker Daemon API](/docs/Environment/docker/Docker-Daemon-API) 未授权访问漏洞

前置材料：[Docker Daemon API](/docs/Environment/docker/Docker-Daemon-API)

`Docker Daemon API` 未授权漏洞, 常见于将 `Docker Daemon API` 映射进 Docker 容器中，然后在 Docker 容器内使用其他服务来控制宿主机中的 Docker 服务，例如 Portainer 这类 Docker 控制面板。

如果 Docker 容器内的服务存在漏洞，例如 Portainer 存在 CVE 导致攻击者能直接得到 Docker 容器内的最高权限，那么攻击者便能进一步得到宿主机的 `Docker Daemon API` 控制权限，进而完全控制 Docker 服务，那么就可以利用 `Docker Daemon API` 未授权访问漏洞

## [Docker Remote API](/docs/Environment/docker/Docker-Remote-API) 未授权访问漏洞

前置材料：[Docker Remote API](/docs/Environment/docker/Docker-Remote-API)

如果是由以下指令启动的 Docker Deamon

```shell
dockerd -H=0.0.0.0:2375 -H unix:///var/run/docker.sock
```

那么启动的 `Docker Remote API` 不需要经过账户验证就可以直接访问，也就会出现未授权漏洞，`Docker Remote API` 将会完全无保护的状态暴露在本地的 2375 端口，造成极大的危险性，任何人都可以 2375 端口直接控制 Docker 服务，那么就可以利用 `Docker Remote API` 未授权访问漏洞

## Docker 未授权漏洞利用方式

### 创建恶意映射

可以通过建立敏感文件的映射，来达到控制宿主机的目的，例如将shell相关文件映射到Docker容器中进行进一步控制和加毒：

```shell
docker ... -v /usr/bin/bash:/vuln/bash ...
```

就可以达到对宿主机的bash程序进行控制的目的

或者建立以下映射，以达到在容器内读取敏感信息的目的：

```shell
docker ... -v /etc:/vuln/etc ...
```

### 创建特权容器 - [Privileged Container](/docs/Environment/docker/Docker-Privileged)

常见于以下Docker容器启动场景：

```shell
docker run --privileged [image_name]
```

在特权容器中，容器内可以直接操作宿主机的内核资源与硬件资源，允许容器以root权限访问系统中的一切，为恶意用户创造了控制系统的机会,例如：

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

## Reference

[Docker Remote API 未授权访问 By axing 的星空](https://www.cnblogs.com/xinga/articles/17520869.html)

[特权容器以及安全隐患的规避 By Demonslzh](https://blog.csdn.net/Demonslzh/article/details/127484455)

[Docker --privileged By HackTricks](https://book.hacktricks.xyz/linux-hardening/privilege-escalation/docker-security/docker-privileged)

[Container is running in privileged mode By snyk](https://learn.snyk.io/lesson/container-runs-in-privileged-mode/)
