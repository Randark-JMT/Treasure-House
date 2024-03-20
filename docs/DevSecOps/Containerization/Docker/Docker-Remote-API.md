# Docker Remote API

Docker Remote API 是一个取代远程命令行界面（rcli）的REST API，其默认绑定2375端口

Docker Remote API 常见端口：

| 端口      | 作用                                                                        |
| --------- | --------------------------------------------------------------------------- |
| 2375      | 未加密的 docker socket, 远程 root 无密码访问主机                            |
| 2376      | tls 加密套接字, 很可能这是您的 CI 服务器 4243 端口作为 https 443 端口的修改 |
| 2377      | 群集模式套接字, 适用于群集管理器, 不适用于 docker 客户端                    |
| 5000      | docker 注册服务                                                             |
| 4789/7946 | 覆盖网络                                                                    |

## Docker Remote API 开启

- “`unix:///var/run/docker.sock`”：`unix socket`，本地客户端将通过这个来连接 Docker Daemon

- “`tcp://0.0.0.0:2375`”：`tcp socket`，表示允许任何远程客户端通过 2375 端口连接 Docker Daemon

- `/usr/lib/systemd/system/docker.service`，配置远程访问：`-H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock`

service 配置文件如下：

```shell
# 主要是在 [Service] 这个部分
[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
ExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock --containerd=/run/containerd/containerd.sock
ExecReload=/bin/kill -s HUP $MAINPID
TimeoutSec=0
RestartSec=2
Restart=always

# 重启
systemctl daemon-reload
systemctl restart docker
```

修改 `/etc/docker/daemon.json` 的配置:

```json
{
  "hosts": ["tcp://0.0.0.0:2375","unix:///var/run/docker.sock"]
}
```

使用这种方式，需要去掉 `/usr/lib/systemd/system/docker.service` 中关于 -H 的选项，否则会报错

```shell
ExecStart=/usr/bin/dockerd --containerd=/run/containerd/containerd.sock
```

开启 Docker remote API 之后，查看开启后的端口监听状态

```shell
ss -tunlp | grep docker
```

## Docker 客户端使用 Docker Remote API

在 Docker Cli 中，`-H` 为连接目标主机 docker 服务

查看 docker 版本：

```shell
docker -H tcp://<Server-IP>:2375 version
```

查看镜像信息：

```shell
docker -H tcp://<Server-IP>:2375 image ls
```

## HTTP 协议使用 Docker Remote API

官方提供 Docker Engine API 文档：[Develop with Docker Engine API](https://docs.docker.com/engine/api/)

Docker Remote API 是一个取代远程命令行界面（rcli）的 REST API。本文中，我们将使用命令行工具 cURL 来处理 url 相关操作。cURL 可以发送请求、获取以及发送数据、检索信息

- 容器列表, 获取所有容器的清单：`GET /containers/json`
- 创建新容器, 命令如下：`POST /containers/create`
- 监控容器, 使用容器 id 获取该容器底层信息：`GET /containers/(id)/json`
- 进程列表, 获取容器内进程的清单：`GET /containers/(id)/top`
- 容器日志, 获取容器的标准输出和错误日志：`GET /containers/(id)/logs`
- 导出容器, 导出容器内容：`GET /containers/(id)/export`
- 启动容器, 如下：`POST /containers/(id)/start`
- 停止容器, 命令如下：`POST /containers/(id)/stop`
- 重启容器, 如下：`POST /containers/(id)/restart`
- 终止容器：`POST /containers/(id)/kill`

例如获取容器信息：

```shell
curl <Server-IP>:2375/containers/json
```

## Reference

[Docker Remote API 配置与使用 By 旺仔_牛奶](https://blog.csdn.net/qq_41586875/article/details/130182132)
