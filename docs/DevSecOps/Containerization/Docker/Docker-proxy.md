# Docker Proxy

:::info 关于 Docker 使用代理

Docker 并不会接受来自环境变量的网络代理参数，如：

```shell
https_proxy=http://proxy.example.com:3129
HTTPS_PROXY=http://proxy.example.com:3129
http_proxy=http://proxy.example.com:3128
HTTP_PROXY=http://proxy.example.com:3128
```

也不会接受来自 dll 注入所引入的代理设置，如：

```shell
proxychains docker -H=***** version
```

所以必须手动根据需求，在对应的配置文件中设置网络代理

:::

Docker 核心具有两套网络代理机制，分别是：

- Docker 客户端代理（Docker CLient Proxy）
- Docker 守护进程代理（Docker Daemon Proxy）

这两套代理分别控制不同的 Docker 行为，如：

- Docker 客户端代理，将会影响 Docker 构建代理期间的行为，如：
  - `Docker build`
  - `docker-compose up` 时，使用了 `build : ***` 参数
- Docker 守护进程代理，将会影响 Docker 拉取镜像等行为

## Docker 客户端代理

在当前用户的 `~/.docker/config.json` 添加以下内容：

```json
{
 "proxies":
 {
   "default":
   {
     "httpProxy": "http://proxy.server:port",
     "httpsProxy": "http://proxy.server:port",
     "noProxy": "localhost,127.0.0.1"
   }
 }
}
```

即可在进行镜像构建的时候，通过网络代理进行镜像的构建

涉及的可能的网络行为可能会由以下命令形成：

- `RUN apt-get update`
- `RUN apt-get install -y python3`
- `RUN wget http://example.com/example`

## Docker 守护进程代理

Docker 守护进程的配置，可以直接通过 Docker 的服务配置文件来控制，Docker 的服务配置文件位于：`/etc/systemd/system/docker.service.d`

为了给 Docker Daemon 配置网络代理，可以在 `/etc/systemd/system/docker.service.d` 目录中添加文件 `http-proxy.conf`，并在其中写入：

```conf title="For example"
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:7890"
Environment="HTTPS_PROXY=http://127.0.0.1:7890"
Environment="NO_PROXY=localhost,127.0.0.1"
```

配置后，为了让参数生效，可以选择重启系统，或者将 Docker 服务进行重启

```shell
sudo systemctl daemon-reload
sudo systemctl restart docker
```

即可为 Docker Daemon 配置网络代理，后续执行拉取镜像等操作，便会通过网络代理来进行

:::tip

对于目前 DockerHub 的服务在大陆不稳定的情况，配置阿里云等服务提供商的镜像加速服务反而杯水车薪，这个时候为 Docker Daemon 配置代理，反而是稳定性最好的解决方案

:::

## Reference

[Getting Docker to work with a proxy server](https://airman604.medium.com/getting-docker-to-work-with-a-proxy-server-fadec841194e)

[Configure Docker to use a proxy server - Docker docs](https://docs.docker.com/network/proxy/)

[Docker 的三种网络代理配置 By 匿蟒](https://note.qidong.name/2020/05/docker-proxy/)