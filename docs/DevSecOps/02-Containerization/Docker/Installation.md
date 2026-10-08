---
sidebar_position: 0
---

# 下载与安装

> 这里并不会叙述如何安装 Docker Desktop 桌面端，而仅讲述如何配置 Docker Engine
>
> Docker Desktop 按照软件提示安装即可

Docker 官方推荐使用以下一键脚本进行安装操作：

```plaintext
https://get.docker.com/
```

:::info

💡 需要注意的是，虽然 Kali 隶属于 Debian 下游分支，但是由于 uname 识别出来的结果是 Kali，并且 Docker 官方并没有针对 Kali 进行适配与测试，所以并不建议基于 Kali 环境配置 Docker

:::

同时，此脚本本身由于属于 `docker.com` 域内，所以大陆网络环境直接 `curl` 获取脚本可能会存在域名屏蔽的问题，建议直接在合适的网络环境下下载好脚本，然后执行安装操作。

```bash
# 建议在代理环境下获取安装脚本
curl -fsSL https://get.docker.com -o install-docker.sh
sudo sh install-docker.sh --mirror Aliyun
```

如果不加 sudo 也可以，脚本能够正确处理环境的权限态问题，主动向用户请求 root 权限

同时需要注意的是，安装的最后，安装脚本会提示启用 root-less 模式，在这种情况下会产生两种 docker 服务，以及对应的两种上下文，并且普通用户默认情况下访问的始终都是 root-less 模式的 docker 上下文，会对环境以及配置产生一定影响

[官方文档 - Install Docker Engine](https://docs.docker.com/engine/install/)
