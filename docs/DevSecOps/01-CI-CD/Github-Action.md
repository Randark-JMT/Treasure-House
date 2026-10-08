# Github Action

## Github 官方市场

[GitHub Marketplace: actions to improve your workflow](https://github.com/marketplace?category=&query=&type=actions&verification=)

可以在官方市场中搜寻 `Github Action`，并将其加载到特定组织 / 仓库

## 基本结构

如果写过 `docker-compose` 的部署文件，对这个会比较熟悉，结构基本都是一致的

- `name` 定义工作流的名称
- `on` 定义了工作流开始工作的触发条件，可以是发生了新的 push 操作，也可以是定时运行的
- `env` 定义了工作流工作时的环境变量（类似于程序常数）
- `jobs` 就定义了工作流运行时的具体每个模块

### job

`jobs` 中可以定义多个 job，按照顺序执行，按照递进分别为名称，

- `runs-on` 为工作流运行时的基础容器
- `permissions` 指定了工作流对于仓库的权限，有助于避免发生问题时影响仓库内的数据
- `steps` 设计了每个 job 的各个部分

### steps

- `name` 定义了每一步的名称
- `uses` 定义每一步所使用的脚本，可以不写
- `with` 定义步骤内所使用的变量
- `run` 定义步骤执行的命令
- `with/context` 定义步骤所运行的路径

整体构建工作流的逻辑，是类似于编程的时候导入包的，只需要规划好各个部分的功能，大概率都能找到别人已经写好的包

同时整个工作流程中存在 `env` 和 `steps` 和 `secrets` 几个变量域，他们分别是环境变量，步骤中传出的变量和秘密变量

- `env` 是提前定义好的，可以用来规划一些写死的常量
- `steps` 是工作流工作时，其中某些步骤的输出，就可以用 steps.\<id\>.outputs 读取，可以将数据在单个工作流之间进行传递
- `secrets` 类似于 `docker-compose` 的 `secret` 概念，作用就是引入敏感凭据，同时又不至于以明文形式储存在工作流文件中，`secrets` 可以是单个仓库内的，也可以个人 / 组织共用的

## 自动化构建 Docker 镜像

以自己 [CTF-Archives](https://github.com/orgs/CTF-Archives/repositories) 仓库的 docker 自动化编译推送的脚本为例

Github Action 配置文件如下

```yaml
name: Publish Docker image

on:
  push:
    branches: ["master"]

env:
  REGISTRY_GITHUB: ghcr.io
  REGISTRY_DOCKERHUB: randark
  IMAGE_NAME_GITHUB: ${{github.repository}}

jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:

      - name: Check out the repo
        uses: actions/checkout@v3

      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: ${{secrets.DOCKER_USERNAME}}
          password: ${{secrets.DOCKER_PASSWORD}}

      - name: Log into registry ${{env.REGISTRY_GITHUB}}
        if: github.event_name != 'pull_request'
        uses: docker/login-action@28218f9b04b4f3f62068d7b6ce6ca5b26e35336c
        with:
          registry: ${{env.REGISTRY_GITHUB}}
          username: ${{github.actor}}
          password: ${{secrets.GITHUB_TOKEN}}

      - name: Get repository name
        id: repo-name
        uses: MariachiBear/get-repo-name-action@v1.1.0
        with:
          string-case: lowercase

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: |
            ${{env.REGISTRY_DOCKERHUB}}/${{ steps.repo-name.outputs.repository-name }}
            ${{env.REGISTRY_GITHUB}}/${{ env.IMAGE_NAME_GITHUB }}

      - name: Build and push Docker images
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: ${{steps.meta.outputs.tags}}
          labels: ${{steps.meta.outputs.labels}}

      - name: Docker Hub Description
        uses: peter-evans/dockerhub-description@v3
        with:
          username: ${{secrets.DOCKER_USERNAME}}
          password: ${{secrets.DOCKER_PASSWORD}}
          repository: ${{env.REGISTRY_DOCKERHUB}}/${{ steps.repo-name.outputs.repository-name }}
```

可以看出整体的工作流分为了以下几个部分：

- Check out the repo
- Log in to Docker Hub
- Log into registry `${{env.7*7}}`
- Get repository name
- Extract metadata (tags, labels) for Docker
- Build and push Docker images
- Docker Hub Description

## 自动处理项目数据，并推送到 Github Release

test