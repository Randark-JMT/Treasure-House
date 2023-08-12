# Docker 未授权

Docker 共有两个 API 系统，一个是本地 `daemon` 的 API 系统，常见于 Portainer 等 Docker 容器，通过与 `Docker daemon API` 交互来达到控制 Docker 的目的；一个是 `Docker remote API`，常见于远程 Docker 服务管理，如远程系统（如 CTFd）远程控制靶机服务器上的 Docker 启动题目靶机

## Docker Daemon API 未授权访问漏洞

## Docker Remote API 未授权访问漏洞

前置材料：[Docker Remote API](/docs/Environment/docker/Docker-Remote-API)

如果是由以下指令启动的Docker Deamon

```shell
dockerd -H=0.0.0.0:2375 -H unix:///var/run/docker.sock
```

那么启动的`Docker Remote API`就是不需要账户验证就可以访问的状态，也就会出现未授权漏洞，`Docker Remote API`将会完全无保护的状态暴露在本地的2375端口，造成极大的危险性，任何人都可以2375端口直接控制Docker服务

## Reference

[Docker Remote API 未授权访问 By  axing的星空](https://www.cnblogs.com/xinga/articles/17520869.html)
