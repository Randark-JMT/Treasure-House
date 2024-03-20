# Docker Daemon API

Docker daemon 是 Docker 引擎的后台进程，也称为 Dockerd。它是一个长时间运行的进程，负责管理 Docker 镜像、容器、网络和存储等各种资源，并提供一个 API 以供 Docker 客户端进行交互

Docker daemon是仅针对Linux的，但是在Windows上和Mac上，可以通过兼容层的方式来运行Docker daemon。Docker daemon通过典型安装途径安装之后，应该由systemctl自动管理，而不需要由用户来控制Docker daemon的行为

Docker daemon在同一主机上仅支持存在一个Docker daemon实例，在默认systemctl运行了Docker daemon的情况下，无法再手动控制Docker daemon（dockerd）的启动参数，除非使用sudo systemctl stop docker停止Docker daemon，然后再手动启动Docker daemon（dockerd）

当在主机上使用 Docker 命令时（例如 `docker run`），Docker 客户端将向 `Docker daemon` 发送命令请求，并通过 `Docker API` 进行通信。`Docker daemon` 接收并解析这些请求，并在其内部管理对象存储中创建、修改或删除相应的 Docker 资源。随后，`Docker daemon` 将响应结果发送回客户端，然后等待下一个命令请求。

另外，`Docker daemon` 也负责监视 Docker 主机上正在运行的容器和服务，以及处理与 Docker 网络和存储相关的操作。它还可以与其他 `Docker daemon` 进行通信，以实现跨主机的镜像和容器管理。

总之，`Docker daemon` 是整个 Docker 引擎的核心组件，负责实现 Docker 的各种功能，并将其暴露给用户和其他程序使用

## Reference

[Docker Remote API 未授权访问 By  axing 的星空](https://www.cnblogs.com/xinga/articles/17520869.html)
