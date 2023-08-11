---
sidebar_position: 0
sidebar_label: 下载与安装
sidebar_class_name: green
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

同时，此脚本本身由于属于 `docker.com` 域内，所以大陆网络环境直接 `curl` 获取脚本可能会存在性能低下的问题，建议直接在合适的网络环境下下载好脚本，然后执行安装操作。大陆网络环境下建议使用以下指令来获取脚本并执行：

```bash
curl -fsSL https://get.docker.com -o install-docker.sh
sudo sh install-docker.sh --mirror https://mirror.azure.cn/docker-ce
```

如果不加 sudo 也可以，脚本能够正确处理环境的权限态问题，同时也可以安装 Docker 于 rootless 模式，但是需要脚本执行安装操作结束之后，由用户进行进一步操作，跟随命令行信息操作即可。

[官方文档 - Install Docker Engine](https://docs.docker.com/engine/install/)
