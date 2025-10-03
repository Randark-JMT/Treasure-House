---
slug: 2025-10-02-VIper-Docker-Image-Analysis
title: Viper Docker 镜像分析
authors: Randark
tags: [Docker]
---

Viper 在刚出来的那段时间可谓是炙手可热的项目，极大降低了 Metasploit 框架的使用难度，但是在 2025 年的今天，随着热度下降，以及 Viper 项目进入收费机制，项目已经完全变味，热度也大大下降

:::info

而且是及其难看的收费机制，居然会限制单个session的在线时间，限制session数量都情有可原

:::

本项目仅作为技术分析，请勿用于非法用途和侵犯原作者的行为

<!-- truncate -->

本文章使用的镜像为

```plaintext
viperplatform/viper   latest    9513b84d3d58   5 weeks ago    3.95GB
```

其基本 Layer 哈希信息为

```bash
tar -xvf viper-9513b84d3d58.tar
x blobs/
x blobs/sha256/
x blobs/sha256/28f6bb6daee474076a2e4090ec4651b359e4627a656ab07a01cc338803e096b4
x blobs/sha256/32079183c93f5213250b9f2b85556470833e1ad9607e1b461a3db8e19746784d
x blobs/sha256/53b2667516cce81908e88d950dfc251493320e368be75c4a8ec15a376bb30950
x blobs/sha256/54f5d0ced7ca0e9e0c57a9358966ec5206a7d82c686fd573b7b3bdc8579a422c
x blobs/sha256/728f9596412839560aa42a607c677d6d1305f8ae2888e777563736571f155555
x blobs/sha256/8263c1ff94453049a1a9f0540bd58cd93030becfbdcea05a94ce161f36594299
x blobs/sha256/886d5655721a85a9f24eef774a103f2002683cf7fd07ddc53211b5fb2f7cfdf6
x blobs/sha256/88bf9672263d9cb1993971d6f9cb7519d38d1f2df0cd4a4cb477e95003de8922
x blobs/sha256/89dc7ea66d5cb680bb22f10adb79b646d7dd4a86ef05e2a5ebeeac7c70eaa4ed
x blobs/sha256/8e92b7eb758a15f2ab63305f04cf6adaca2b2ecde812f4838998817c82af3909
x blobs/sha256/8e9b05371e29e87e7edfd98cc04ec9918a96574b1f6311ac1f751f533746bf49
x blobs/sha256/9513b84d3d5864c44ff59410e57980cc4f9f536ef16dca161f27d21a8b27c45d
x blobs/sha256/9704eff5023b3688dc598b7cdfb54fa9da0db47acbc3e331dd2bd3877736bbb4
x blobs/sha256/af188efa357f5bccef10ccdd433df6f56af97b181acc6bfaa5c4f24128f46292
x blobs/sha256/d3170396eeb98bd52bdf1c8dc5cc5f432bd3b8444c1d50c422e67673c1af5033
x blobs/sha256/ef9fbb930591a70192543d4573dca5e928df6089507c42949fc656c22180af0b
x index.json
x manifest.json
x oci-layout
```

## Docker history 分析

```bash
docker history --no-trunc 9513b84d3d58
IMAGE                                                                     CREATED        CREATED BY                                                                                                                                                         SIZE      COMMENT
sha256:9513b84d3d5864c44ff59410e57980cc4f9f536ef16dca161f27d21a8b27c45d   5 weeks ago    CMD ["diypassword"]                                                                                                                                                0B        buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    ENTRYPOINT ["viper" "init" "-pw"]                                                                                                                                  0B        buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    CMD ["diypassword"]                                                                                                                                                0B        buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    ENTRYPOINT ["viper" "init" "-pw"]                                                                                                                                  0B        buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    RUN |3 ZSTD_COMPRESS=true ZSTD_COMPRESS_LEVEL=22 COMPRESS_LAYER=true /bin/sh -c chmod a+x /root/viper/Docker/build.sh && ./root/viper/Docker/build.sh # buildkit   1.08GB    buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    COPY rex-socket /root/rex-socket/ # buildkit                                                                                                                       257kB     buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    COPY rex-core /root/rex-core/ # buildkit                                                                                                                           143kB     buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    COPY viperjs/dist /root/viper/dist/ # buildkit                                                                                                                     6.15MB    buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    COPY vipermsf /root/metasploit-framework/ # buildkit                                                                                                               422MB     buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    COPY viperpython /root/viper/ # buildkit                                                                                                                           243MB     buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    ARG COMPRESS_LAYER=true                                                                                                                                            0B        buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    ARG ZSTD_COMPRESS_LEVEL=22                                                                                                                                         0B        buildkit.dockerfile.v0
<missing>                                                                 5 weeks ago    ARG ZSTD_COMPRESS=true                                                                                                                                             0B        buildkit.dockerfile.v0
<missing>                                                                 2 months ago                                                                                                                                                                      2.2GB     Imported from -
```

在其中可以看到镜像的两个入口点

```plaintext
CMD ["diypassword"]
ENTRYPOINT ["viper" "init" "-pw"]
```

其中运行了一次命令，猜测为预编译或者混淆操作

```bash
ZSTD_COMPRESS=true \
ZSTD_COMPRESS_LEVEL=22 \
COMPRESS_LAYER=true \
/bin/sh -c chmod a+x /root/viper/Docker/build.sh && \
./root/viper/Docker/build.sh
```

并且涵盖了 5 个外来的数据源作为 layer

```plaintext
COPY viperpython /root/viper/
COPY vipermsf /root/metasploit-framework/
COPY viperjs/dist /root/viper/dist/
COPY rex-core /root/rex-core/
COPY rex-socket /root/rex-socket/
```

根据其名字即可猜测，从上而下分别为 viper 的核心代码，与 Metasploit 交互的 SDK 代码，以及前段的代码，后面的两层为 Ruby Exploitation 的相关代码

## 对 Image Layer 进行分析

首先将 Docker Image 导出为 tar 格式

```bash
docker save 9513b84d3d58 -o viper-9513b84d3d58.tar
```

然后解压 tar 文件

```bash
tar -xvf viper-9513b84d3d58.tar
x blobs/
x blobs/sha256/
x blobs/sha256/28f6bb6daee474076a2e4090ec4651b359e4627a656ab07a01cc338803e096b4
x blobs/sha256/32079183c93f5213250b9f2b85556470833e1ad9607e1b461a3db8e19746784d
x blobs/sha256/53b2667516cce81908e88d950dfc251493320e368be75c4a8ec15a376bb30950
x blobs/sha256/54f5d0ced7ca0e9e0c57a9358966ec5206a7d82c686fd573b7b3bdc8579a422c
x blobs/sha256/728f9596412839560aa42a607c677d6d1305f8ae2888e777563736571f155555
x blobs/sha256/8263c1ff94453049a1a9f0540bd58cd93030becfbdcea05a94ce161f36594299
x blobs/sha256/886d5655721a85a9f24eef774a103f2002683cf7fd07ddc53211b5fb2f7cfdf6
x blobs/sha256/88bf9672263d9cb1993971d6f9cb7519d38d1f2df0cd4a4cb477e95003de8922
x blobs/sha256/89dc7ea66d5cb680bb22f10adb79b646d7dd4a86ef05e2a5ebeeac7c70eaa4ed
x blobs/sha256/8e92b7eb758a15f2ab63305f04cf6adaca2b2ecde812f4838998817c82af3909
x blobs/sha256/8e9b05371e29e87e7edfd98cc04ec9918a96574b1f6311ac1f751f533746bf49
x blobs/sha256/9513b84d3d5864c44ff59410e57980cc4f9f536ef16dca161f27d21a8b27c45d
x blobs/sha256/9704eff5023b3688dc598b7cdfb54fa9da0db47acbc3e331dd2bd3877736bbb4
x blobs/sha256/af188efa357f5bccef10ccdd433df6f56af97b181acc6bfaa5c4f24128f46292
x blobs/sha256/d3170396eeb98bd52bdf1c8dc5cc5f432bd3b8444c1d50c422e67673c1af5033
x blobs/sha256/ef9fbb930591a70192543d4573dca5e928df6089507c42949fc656c22180af0b
x index.json
x manifest.json
x oci-layout
```

其在磁盘上表现为

```plaintext
.
├── blobs
│   └── sha256
│       ├── 28f6bb6daee474076a2e4090ec4651b359e4627a656ab07a01cc338803e096b4
│       ├── 32079183c93f5213250b9f2b85556470833e1ad9607e1b461a3db8e19746784d
│       ├── 53b2667516cce81908e88d950dfc251493320e368be75c4a8ec15a376bb30950
│       ├── 54f5d0ced7ca0e9e0c57a9358966ec5206a7d82c686fd573b7b3bdc8579a422c
│       ├── 728f9596412839560aa42a607c677d6d1305f8ae2888e777563736571f155555
│       ├── 8263c1ff94453049a1a9f0540bd58cd93030becfbdcea05a94ce161f36594299
│       ├── 886d5655721a85a9f24eef774a103f2002683cf7fd07ddc53211b5fb2f7cfdf6
│       ├── 88bf9672263d9cb1993971d6f9cb7519d38d1f2df0cd4a4cb477e95003de8922
│       ├── 89dc7ea66d5cb680bb22f10adb79b646d7dd4a86ef05e2a5ebeeac7c70eaa4ed
│       ├── 8e92b7eb758a15f2ab63305f04cf6adaca2b2ecde812f4838998817c82af3909
│       ├── 8e9b05371e29e87e7edfd98cc04ec9918a96574b1f6311ac1f751f533746bf49
│       ├── 9513b84d3d5864c44ff59410e57980cc4f9f536ef16dca161f27d21a8b27c45d
│       ├── 9704eff5023b3688dc598b7cdfb54fa9da0db47acbc3e331dd2bd3877736bbb4
│       ├── af188efa357f5bccef10ccdd433df6f56af97b181acc6bfaa5c4f24128f46292
│       ├── d3170396eeb98bd52bdf1c8dc5cc5f432bd3b8444c1d50c422e67673c1af5033
│       └── ef9fbb930591a70192543d4573dca5e928df6089507c42949fc656c22180af0b
├── index.json
├── manifest.json
├── oci-layout
└── viper-9513b84d3d58.tar
```

### 查看 manifest

对 `manifest.json` 文件进行分析

```json
[
  {
    "Config": "blobs/sha256/9513b84d3d5864c44ff59410e57980cc4f9f536ef16dca161f27d21a8b27c45d",
    "RepoTags": null,
    "Layers": [
      "blobs/sha256/ef9fbb930591a70192543d4573dca5e928df6089507c42949fc656c22180af0b",
      "blobs/sha256/8e9b05371e29e87e7edfd98cc04ec9918a96574b1f6311ac1f751f533746bf49",
      "blobs/sha256/8263c1ff94453049a1a9f0540bd58cd93030becfbdcea05a94ce161f36594299",
      "blobs/sha256/728f9596412839560aa42a607c677d6d1305f8ae2888e777563736571f155555",
      "blobs/sha256/28f6bb6daee474076a2e4090ec4651b359e4627a656ab07a01cc338803e096b4",
      "blobs/sha256/88bf9672263d9cb1993971d6f9cb7519d38d1f2df0cd4a4cb477e95003de8922",
      "blobs/sha256/8e92b7eb758a15f2ab63305f04cf6adaca2b2ecde812f4838998817c82af3909"
    ],
    "LayerSources": {
      "sha256:28f6bb6daee474076a2e4090ec4651b359e4627a656ab07a01cc338803e096b4": {
        "mediaType": "application/vnd.oci.image.layer.v1.tar",
        "size": 212992,
        "digest": "sha256:28f6bb6daee474076a2e4090ec4651b359e4627a656ab07a01cc338803e096b4"
      },
      "sha256:728f9596412839560aa42a607c677d6d1305f8ae2888e777563736571f155555": {
        "mediaType": "application/vnd.oci.image.layer.v1.tar",
        "size": 6180352,
        "digest": "sha256:728f9596412839560aa42a607c677d6d1305f8ae2888e777563736571f155555"
      },
      "sha256:8263c1ff94453049a1a9f0540bd58cd93030becfbdcea05a94ce161f36594299": {
        "mediaType": "application/vnd.oci.image.layer.v1.tar",
        "size": 434012672,
        "digest": "sha256:8263c1ff94453049a1a9f0540bd58cd93030becfbdcea05a94ce161f36594299"
      },
      "sha256:88bf9672263d9cb1993971d6f9cb7519d38d1f2df0cd4a4cb477e95003de8922": {
        "mediaType": "application/vnd.oci.image.layer.v1.tar",
        "size": 331264,
        "digest": "sha256:88bf9672263d9cb1993971d6f9cb7519d38d1f2df0cd4a4cb477e95003de8922"
      },
      "sha256:8e92b7eb758a15f2ab63305f04cf6adaca2b2ecde812f4838998817c82af3909": {
        "mediaType": "application/vnd.oci.image.layer.v1.tar",
        "size": 1120905728,
        "digest": "sha256:8e92b7eb758a15f2ab63305f04cf6adaca2b2ecde812f4838998817c82af3909"
      },
      "sha256:8e9b05371e29e87e7edfd98cc04ec9918a96574b1f6311ac1f751f533746bf49": {
        "mediaType": "application/vnd.oci.image.layer.v1.tar",
        "size": 243732480,
        "digest": "sha256:8e9b05371e29e87e7edfd98cc04ec9918a96574b1f6311ac1f751f533746bf49"
      },
      "sha256:ef9fbb930591a70192543d4573dca5e928df6089507c42949fc656c22180af0b": {
        "mediaType": "application/vnd.oci.image.layer.v1.tar",
        "size": 2243532800,
        "digest": "sha256:ef9fbb930591a70192543d4573dca5e928df6089507c42949fc656c22180af0b"
      }
    }
  }
]
```

可以看到磁盘上的镜像有 7 层 layer

自上而下进行分析

```bash
1. blobs/sha256/ef9fbb930591a70192543d4573dca5e928df6089507c42949fc656c22180af0b

base image

2. blobs/sha256/8e9b05371e29e87e7edfd98cc04ec9918a96574b1f6311ac1f751f533746bf49

tar 文件，为数据层  COPY viperpython /root/viper/

3. blobs/sha256/8263c1ff94453049a1a9f0540bd58cd93030becfbdcea05a94ce161f36594299

tar 文件，为数据层 COPY vipermsf /root/metasploit-framework/

4. blobs/sha256/728f9596412839560aa42a607c677d6d1305f8ae2888e777563736571f155555

tar 文件，为数据层` COPY viperjs/dist /root/viper/dist/

5. blobs/sha256/28f6bb6daee474076a2e4090ec4651b359e4627a656ab07a01cc338803e096b4

tar 文件，为数据层 COPY rex-core /root/rex-core/

6. blobs/sha256/88bf9672263d9cb1993971d6f9cb7519d38d1f2df0cd4a4cb477e95003de8922

tar 文件，为数据层  COPY rex-socket /root/rex-socket/

7. blobs/sha256/8e92b7eb758a15f2ab63305f04cf6adaca2b2ecde812f4838998817c82af3909

执行预编译/混淆操作
```

:::info

这里就需要提到一个小知识，在 Docker Image 或者说 OCI Image 中，如 TAG 或者 CMD/ENTRYPOINT 操作，是不会新建一个 layer 的，而是作为一条 key:value 记录到镜像的元数据中

:::

### 分析 viper 核心源码

在先前的分析中，已经定位到 viper 的源码位于

```plaintext
blobs/sha256/8e9b05371e29e87e7edfd98cc04ec9918a96574b1f6311ac1f751f533746bf49
```

尝试对其进行提取

```bash
$ pwd
/Users/randark/Develop/viper-9513b84d3d58/blobs/sha256
$ mkdir viperpython
$ tar -xf 8e9b05371e29e87e7edfd98cc04ec9918a96574b1f6311ac1f751f533746bf49 -C ./viperpython
$ ls -laih ./viperpython/root/viper/
total 80
34466809 drwxr-xr-x   24 randark  staff   768B Aug 25 21:05 .
34466808 drwx------    3 randark  staff    96B Jul 12 21:31 ..
34466810 drwxr-xr-x    3 randark  staff    96B Aug 25 21:05 .cursor
34466813 drwxr-xr-x   14 randark  staff   448B Aug 25 21:05 .git
34466858 -rw-r--r--    1 randark  staff    74B Aug 25 21:05 .gitattributes
34466859 -rw-r--r--    1 randark  staff   2.8K Aug 25 21:05 .gitignore
34466860 drwxr-xr-x    8 randark  staff   256B Aug 25 21:05 Core
34466875 drwxr-xr-x   19 randark  staff   608B Aug 25 21:05 Docker
34466903 drwxr-xr-x   15 randark  staff   480B Aug 25 21:05 External
34466917 drwxr-xr-x   35 randark  staff   1.1K Aug 25 21:05 Lib
34466960 drwxr-xr-x   35 randark  staff   1.1K Aug 25 21:05 MODULES_DATA
34467126 drwxr-xr-x    7 randark  staff   224B Aug 25 21:05 MODULES_LLM
34467132 drwxr-xr-x  117 randark  staff   3.7K Aug 25 21:05 MODULES_POST
34467248 drwxr-xr-x    8 randark  staff   256B Aug 25 21:05 Msgrpc
34467272 drwxr-xr-x    8 randark  staff   256B Aug 25 21:05 PostLateral
34467284 drwxr-xr-x    8 randark  staff   256B Aug 25 21:05 PostModule
34467301 drwxr-xr-x    6 randark  staff   192B Aug 25 21:05 STATICFILES
34467351 drwxr-xr-x    7 randark  staff   224B Aug 25 21:05 Viper
34467357 drwxr-xr-x    5 randark  staff   160B Aug 25 21:05 WebSocket
34467364 drwxr-xr-x   10 randark  staff   320B Aug 25 21:05 Worker
34467562 -rw-r--r--    1 randark  staff   2.8K Aug 25 21:05 compile_and_clean.py
34467563 -rw-r--r--    1 randark  staff   537B Aug 25 21:05 manage.py
34467564 -rw-r--r--    1 randark  staff   1.3K Aug 25 21:05 setup.py
34467565 -rw-r--r--    1 randark  staff    17K Aug 25 21:05 viper.py
```

### Dockerfile 分析

此镜像的 `Dockerfile` 也位于 `viperpython` 仓库中

```shell
$ pwd
~/Users/randark/Develop/viper-9513b84d3d58/blobs/sha256/viperpython
$ find . -name "Dockerfile"
./root/viper/Docker/Dockerfile
```

具体的 `Dockerfile` 如下

```dockerfile
FROM registry.cn-shenzhen.aliyuncs.com/toys/viper-base:latest

ARG ZSTD_COMPRESS=true
ARG ZSTD_COMPRESS_LEVEL=22
ARG COMPRESS_LAYER=true

COPY viperpython /root/viper/
COPY vipermsf /root/metasploit-framework/
COPY viperjs/dist /root/viper/dist/
COPY rex-core /root/rex-core/
COPY rex-socket /root/rex-socket/

RUN chmod a+x /root/viper/Docker/build.sh && ./root/viper/Docker/build.sh

ENTRYPOINT ["viper", "init","-pw"]

CMD ["diypassword"]

#HEALTHCHECK CMD viper healthcheck
```

## 镜像性能分析

### Base Image 镜像性能分析

在 `Dockerfile` 中可以看到，所使用的基础镜像是

```docker
FROM registry.cn-shenzhen.aliyuncs.com/toys/viper-base:latest
```

但是这个镜像是一个私有镜像没办法进行分析

### Viper 镜像性能分析

TODO 待填坑

## 绕过收费限制

既然已经有了源码和 Docker Image 镜像文件之后，其实就可以直接加上一层 Layer 实现付费逻辑的 patch 修改

TODO 待填坑

## 镜像安全分析

### Git 凭据泄漏

这一点问题非常大了，尤其是使用传统明文凭据的 git 平台

```bash
$ pwd
/Users/randark/Develop/viper-9513b84d3d58/blobs/sha256/viperpython/root/viper/.git

$ ls -lh
total 184
-rw-r--r--   1 randark  staff    21B Aug 25 21:05 HEAD
drwxr-xr-x   2 randark  staff    64B Aug 25 21:05 branches
-rw-r--r--   1 randark  staff   361B Aug 25 21:05 config
-rw-r--r--   1 randark  staff    73B Aug 25 21:05 description
drwxr-xr-x  14 randark  staff   448B Aug 25 21:05 hooks
-rw-r--r--   1 randark  staff    71K Aug 25 21:05 index
drwxr-xr-x   3 randark  staff    96B Aug 25 21:05 info
drwxr-xr-x   4 randark  staff   128B Aug 25 21:05 logs
drwxr-xr-x   4 randark  staff   128B Aug 25 21:05 objects
-rw-r--r--   1 randark  staff   112B Aug 25 21:05 packed-refs
drwxr-xr-x   5 randark  staff   160B Aug 25 21:05 refs
-rw-r--r--   1 randark  staff    41B Aug 25 21:05 shallow

$ cat config 
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote "origin"]
	url = https://60**76:12**6e@codeup.aliyun.com/60**2e/FunnyWolf/viperpython.git
	fetch = +refs/heads/main:refs/remotes/origin/main
[branch "main"]
	remote = origin
	merge = refs/heads/main
```

### Cursor 配置文件泄漏

泄漏操作位于 `COPY viperpython /root/viper/` 操作中，没有将 `.cursor` 文件夹排除在 Docker Build 之外，导致将 `.cursor` 文件夹包含进了镜像中

```bash
$ pwd
~/Develop/viper-9513b84d3d58/blobs/sha256/viperpython/root/viper/.cursor

$ tree
.
└── rules
    └── code-style.mdc

2 directories, 1 file

$ cat ./rules/code-style.mdc 
永远不要尝试添加debug和test代码
永远不要尝试添加readme.md文件,除非用户明确要求你更新readme.md
```

## Alicloud Yunxiao 凭据泄漏

使用泄漏的凭据获取敏感数据

### 获取组织所有储存库

<details>

<summary> API 原始返回数据 </summary>

```json
{
    "result": [
        {
            "importStatus": "finished",
            "star": false,
            "accessLevel": 40,
            "description": "",
            "lastActivityAt": "2025-09-16T09:28:18+08:00",
            "archive": false,
            "createdAt": "2025-09-16T09:28:18+08:00",
            "path": "WatchDogKiller",
            "starCount": 0,
            "namespaceId": 212480,
            "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / WatchDogKiller",
            "webUrl": "https://codeup.aliyun.com/60cf4a6dfe6db12c807b672e/FunnyWolf/WatchDogKiller",
            "visibilityLevel": "0",
            "name": "WatchDogKiller",
            "Id": 5754835,
            "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/WatchDogKiller",
            "updatedAt": "2025-09-16T09:28:18+08:00"
        },
        {
            "importStatus": "none",
            "star": false,
            "accessLevel": 40,
            "lastActivityAt": "2025-09-08T16:59:40+08:00",
            "archive": false,
            "createdAt": "2025-08-29T17:08:50+08:00",
            "path": "ai-soc-framework",
            "starCount": 0,
            "namespaceId": 212480,
            "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / ai-soc-framework",
            "webUrl": "https://codeup.aliyun.com/60cf4a6dfe6db12c807b672e/FunnyWolf/ai-soc-framework",
            "visibilityLevel": "0",
            "name": "ai-soc-framework",
            "Id": 5674743,
            "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/ai-soc-framework",
            "updatedAt": "2025-09-08T16:59:40+08:00"
        },
        {
            "importStatus": "none",
            "star": false,
            "accessLevel": 40,
            "lastActivityAt": "2025-09-05T20:53:17+08:00",
            "archive": false,
            "createdAt": "2025-09-03T13:44:35+08:00",
            "path": "alert_forwarder",
            "starCount": 0,
            "namespaceId": 212480,
            "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / alert_forwarder",
            "webUrl": "https://codeup.aliyun.com/60cf4a6dfe6db12c807b672e/FunnyWolf/alert_forwarder",
            "visibilityLevel": "0",
            "name": "alert_forwarder",
            "Id": 5695503,
            "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/alert_forwarder",
            "updatedAt": "2025-09-05T20:53:17+08:00"
        },
        {
            "importStatus": "finished",
            "star": false,
            "accessLevel": 40,
            "lastActivityAt": "2025-08-31T22:29:58+08:00",
            "archive": false,
            "createdAt": "2021-07-13T10:13:48+08:00",
            "path": "viperpython",
            "starCount": 0,
            "namespaceId": 212480,
            "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / viperpython",
            "webUrl": "https://codeup.aliyun.com/60cf4a6dfe6db12c807b672e/FunnyWolf/viperpython",
            "visibilityLevel": "0",
            "name": "viperpython",
            "Id": 975572,
            "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/viperpython",
            "updatedAt": "2025-08-31T22:29:58+08:00"
        },
        {
            "importStatus": "finished",
            "star": false,
            "accessLevel": 40,
            "lastActivityAt": "2025-08-31T21:31:24+08:00",
            "archive": false,
            "createdAt": "2021-07-13T10:13:48+08:00",
            "path": "viperjs",
            "starCount": 0,
            "namespaceId": 212480,
            "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / viperjs",
            "webUrl": "https://codeup.aliyun.com/60cf4a6dfe6db12c807b672e/FunnyWolf/viperjs",
            "visibilityLevel": "0",
            "name": "viperjs",
            "Id": 975570,
            "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/viperjs",
            "updatedAt": "2025-08-31T21:31:24+08:00"
        },
        {
            "importStatus": "finished",
            "star": false,
            "accessLevel": 40,
            "lastActivityAt": "2025-08-17T22:02:59+08:00",
            "archive": false,
            "createdAt": "2021-07-13T10:13:48+08:00",
            "path": "vipermsf",
            "starCount": 0,
            "namespaceId": 212480,
            "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / vipermsf",
            "webUrl": "https://codeup.aliyun.com/60cf4a6dfe6db12c807b672e/FunnyWolf/vipermsf",
            "visibilityLevel": "0",
            "name": "vipermsf",
            "Id": 975571,
            "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/vipermsf",
            "updatedAt": "2025-08-17T22:02:59+08:00"
        },
        {
            "importStatus": "none",
            "star": false,
            "accessLevel": 40,
            "lastActivityAt": "2025-08-17T19:46:59+08:00",
            "archive": false,
            "createdAt": "2021-08-11T15:28:11+08:00",
            "path": "rex-socket",
            "starCount": 0,
            "namespaceId": 199872,
            "nameWithNamespace": "60cf4a6dfe6db12c807b672e / rex-socket",
            "webUrl": "https://codeup.aliyun.com/60cf4a6dfe6db12c807b672e/rex-socket",
            "visibilityLevel": "0",
            "name": "rex-socket",
            "Id": 1041835,
            "pathWithNamespace": "60cf4a6dfe6db12c807b672e/rex-socket",
            "updatedAt": "2025-08-17T19:46:59+08:00"
        },
        {
            "importStatus": "none",
            "star": false,
            "accessLevel": 40,
            "lastActivityAt": "2025-07-12T20:19:55+08:00",
            "archive": false,
            "createdAt": "2025-04-26T20:38:42+08:00",
            "path": "mettle",
            "starCount": 0,
            "namespaceId": 212480,
            "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / mettle",
            "webUrl": "https://codeup.aliyun.com/60cf4a6dfe6db12c807b672e/FunnyWolf/mettle",
            "visibilityLevel": "0",
            "name": "mettle",
            "Id": 5201371,
            "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/mettle",
            "updatedAt": "2025-07-12T20:19:55+08:00"
        },
        {
            "importStatus": "none",
            "star": false,
            "accessLevel": 40,
            "lastActivityAt": "2025-05-03T15:06:18+08:00",
            "archive": false,
            "createdAt": "2021-08-11T15:21:38+08:00",
            "path": "rex-core",
            "starCount": 0,
            "namespaceId": 199872,
            "nameWithNamespace": "60cf4a6dfe6db12c807b672e / rex-core",
            "webUrl": "https://codeup.aliyun.com/60cf4a6dfe6db12c807b672e/rex-core",
            "visibilityLevel": "0",
            "name": "rex-core",
            "Id": 1041809,
            "pathWithNamespace": "60cf4a6dfe6db12c807b672e/rex-core",
            "updatedAt": "2025-05-03T15:06:18+08:00"
        },
        {
            "importStatus": "finished",
            "star": false,
            "accessLevel": 40,
            "lastActivityAt": "2021-07-16T16:38:27+08:00",
            "archive": false,
            "createdAt": "2021-07-15T09:44:09+08:00",
            "path": "cthun3",
            "starCount": 0,
            "namespaceId": 212480,
            "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / cthun3",
            "webUrl": "https://codeup.aliyun.com/60cf4a6dfe6db12c807b672e/FunnyWolf/cthun3",
            "visibilityLevel": "0",
            "name": "cthun3",
            "Id": 979748,
            "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/cthun3",
            "updatedAt": "2021-07-16T16:38:27+08:00"
        }
    ],
    "total": 10,
    "requestId": "4BA084B8-1632-5DC1-9C11-1F8359E658D9",
    "success": true
}
```

</details>

也就是以下仓库

|                                          name                                         |    ID   |
| :-----------------------------------------------------------------------------------: | :-----: |
|                 60cf4a6dfe6db12c807b672e / FunnyWolf / WatchDogKiller                 | 5754835 |
|                60cf4a6dfe6db12c807b672e / FunnyWolf / ai-soc-framework                | 5674743 |
| 60cf4a6dfe6db12c807b672e / FunnyWolf / alert\_forwarder | 5695503 |
|                   60cf4a6dfe6db12c807b672e / FunnyWolf / viperpython                  |  975572 |
|                     60cf4a6dfe6db12c807b672e / FunnyWolf / viperjs                    |  975570 |
|                    60cf4a6dfe6db12c807b672e / FunnyWolf / vipermsf                    |  975571 |
|                         60cf4a6dfe6db12c807b672e / rex-socket                         | 1041835 |
|                     60cf4a6dfe6db12c807b672e / FunnyWolf / mettle                     | 5201371 |
|                          60cf4a6dfe6db12c807b672e / rex-core                          | 1041809 |
|                     60cf4a6dfe6db12c807b672e / FunnyWolf / cthun3                     |  979748 |

### 审计 token 权限

<details>

<summary> API 原始返回数据 </summary>

```json
{
    "result": [
        {
            "userInfo": {
                "avatarUrl": "https://tcs-devops.aliyuncs.com/thumbnail/112695aa8a7b148a044eab7ab894283efbd9/w/100/h/100",
                "name": "15524174828",
                "id": 550345,
                "state": "active",
                "email": "yu5890681@gmail.com",
                "username": "aliyun:15524174828_8Ps"
            },
            "repositoryInfos": [
                {
                    "repositoryRole": {
                        "sourceId": 975570,
                        "accessLevel": 40,
                        "sourceType": "Project",
                        "cnRoleName": "管理员",
                        "enRoleName": "Admin"
                    },
                    "repositoryInfo": {
                        "creatorId": 550345,
                        "lastActivityAt": "2025-08-31T21:31:24+08:00",
                        "path": "viperjs",
                        "createdAt": "2021-07-13T10:13:48+08:00",
                        "archived": false,
                        "encrypted": false,
                        "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / viperjs",
                        "namespaceId": 212480,
                        "visibilityLevel": "0",
                        "name": "viperjs",
                        "id": 975570,
                        "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/viperjs",
                        "updatedAt": "2025-08-31T21:31:24+08:00"
                    }
                },
                {
                    "repositoryRole": {
                        "sourceId": 975571,
                        "accessLevel": 40,
                        "sourceType": "Project",
                        "cnRoleName": "管理员",
                        "enRoleName": "Admin"
                    },
                    "repositoryInfo": {
                        "creatorId": 550345,
                        "lastActivityAt": "2025-08-17T22:02:59+08:00",
                        "path": "vipermsf",
                        "createdAt": "2021-07-13T10:13:48+08:00",
                        "archived": false,
                        "encrypted": false,
                        "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / vipermsf",
                        "namespaceId": 212480,
                        "visibilityLevel": "0",
                        "name": "vipermsf",
                        "id": 975571,
                        "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/vipermsf",
                        "updatedAt": "2025-08-17T22:02:59+08:00"
                    }
                },
                {
                    "repositoryRole": {
                        "sourceId": 975572,
                        "accessLevel": 40,
                        "sourceType": "Project",
                        "cnRoleName": "管理员",
                        "enRoleName": "Admin"
                    },
                    "repositoryInfo": {
                        "creatorId": 550345,
                        "lastActivityAt": "2025-08-31T22:29:58+08:00",
                        "path": "viperpython",
                        "createdAt": "2021-07-13T10:13:48+08:00",
                        "archived": false,
                        "encrypted": false,
                        "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / viperpython",
                        "namespaceId": 212480,
                        "visibilityLevel": "0",
                        "name": "viperpython",
                        "id": 975572,
                        "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/viperpython",
                        "updatedAt": "2025-08-31T22:29:58+08:00"
                    }
                },
                {
                    "repositoryRole": {
                        "sourceId": 979748,
                        "accessLevel": 40,
                        "sourceType": "Project",
                        "cnRoleName": "管理员",
                        "enRoleName": "Admin"
                    },
                    "repositoryInfo": {
                        "creatorId": 550345,
                        "lastActivityAt": "2021-07-16T16:38:27+08:00",
                        "path": "cthun3",
                        "createdAt": "2021-07-15T09:44:09+08:00",
                        "archived": false,
                        "encrypted": false,
                        "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / cthun3",
                        "namespaceId": 212480,
                        "visibilityLevel": "0",
                        "name": "cthun3",
                        "id": 979748,
                        "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/cthun3",
                        "updatedAt": "2021-07-16T16:38:27+08:00"
                    }
                },
                {
                    "repositoryRole": {
                        "sourceId": 1041809,
                        "accessLevel": 40,
                        "sourceType": "Project",
                        "cnRoleName": "管理员",
                        "enRoleName": "Admin"
                    },
                    "repositoryInfo": {
                        "creatorId": 550345,
                        "lastActivityAt": "2025-05-03T15:06:18+08:00",
                        "path": "rex-core",
                        "createdAt": "2021-08-11T15:21:38+08:00",
                        "archived": false,
                        "encrypted": false,
                        "nameWithNamespace": "60cf4a6dfe6db12c807b672e / rex-core",
                        "namespaceId": 199872,
                        "visibilityLevel": "0",
                        "name": "rex-core",
                        "id": 1041809,
                        "pathWithNamespace": "60cf4a6dfe6db12c807b672e/rex-core",
                        "updatedAt": "2025-05-03T15:06:18+08:00"
                    }
                },
                {
                    "repositoryRole": {
                        "sourceId": 1041835,
                        "accessLevel": 40,
                        "sourceType": "Project",
                        "cnRoleName": "管理员",
                        "enRoleName": "Admin"
                    },
                    "repositoryInfo": {
                        "creatorId": 550345,
                        "lastActivityAt": "2025-08-17T19:46:59+08:00",
                        "path": "rex-socket",
                        "createdAt": "2021-08-11T15:28:11+08:00",
                        "archived": false,
                        "encrypted": false,
                        "nameWithNamespace": "60cf4a6dfe6db12c807b672e / rex-socket",
                        "namespaceId": 199872,
                        "visibilityLevel": "0",
                        "name": "rex-socket",
                        "id": 1041835,
                        "pathWithNamespace": "60cf4a6dfe6db12c807b672e/rex-socket",
                        "updatedAt": "2025-08-17T19:46:59+08:00"
                    }
                },
                {
                    "repositoryRole": {
                        "sourceId": 5201371,
                        "accessLevel": 40,
                        "sourceType": "Project",
                        "cnRoleName": "管理员",
                        "enRoleName": "Admin"
                    },
                    "repositoryInfo": {
                        "creatorId": 550345,
                        "lastActivityAt": "2025-07-12T20:19:55+08:00",
                        "path": "mettle",
                        "createdAt": "2025-04-26T20:38:42+08:00",
                        "archived": false,
                        "encrypted": false,
                        "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / mettle",
                        "namespaceId": 212480,
                        "visibilityLevel": "0",
                        "name": "mettle",
                        "id": 5201371,
                        "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/mettle",
                        "updatedAt": "2025-07-12T20:19:55+08:00"
                    }
                },
                {
                    "repositoryRole": {
                        "sourceId": 5674743,
                        "accessLevel": 40,
                        "sourceType": "Project",
                        "cnRoleName": "管理员",
                        "enRoleName": "Admin"
                    },
                    "repositoryInfo": {
                        "creatorId": 550345,
                        "lastActivityAt": "2025-09-08T16:59:40+08:00",
                        "path": "ai-soc-framework",
                        "createdAt": "2025-08-29T17:08:50+08:00",
                        "archived": false,
                        "encrypted": false,
                        "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / ai-soc-framework",
                        "namespaceId": 212480,
                        "visibilityLevel": "0",
                        "name": "ai-soc-framework",
                        "id": 5674743,
                        "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/ai-soc-framework",
                        "updatedAt": "2025-09-08T16:59:40+08:00"
                    }
                },
                {
                    "repositoryRole": {
                        "sourceId": 5695503,
                        "accessLevel": 40,
                        "sourceType": "Project",
                        "cnRoleName": "管理员",
                        "enRoleName": "Admin"
                    },
                    "repositoryInfo": {
                        "creatorId": 550345,
                        "lastActivityAt": "2025-09-05T20:53:17+08:00",
                        "path": "alert_forwarder",
                        "createdAt": "2025-09-03T13:44:35+08:00",
                        "archived": false,
                        "encrypted": false,
                        "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / alert_forwarder",
                        "namespaceId": 212480,
                        "visibilityLevel": "0",
                        "name": "alert_forwarder",
                        "id": 5695503,
                        "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/alert_forwarder",
                        "updatedAt": "2025-09-05T20:53:17+08:00"
                    }
                },
                {
                    "repositoryRole": {
                        "sourceId": 5754835,
                        "accessLevel": 40,
                        "sourceType": "Project",
                        "cnRoleName": "管理员",
                        "enRoleName": "Admin"
                    },
                    "repositoryInfo": {
                        "creatorId": 550345,
                        "description": "",
                        "lastActivityAt": "2025-09-16T09:28:18+08:00",
                        "path": "WatchDogKiller",
                        "createdAt": "2025-09-16T09:28:18+08:00",
                        "archived": false,
                        "encrypted": false,
                        "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf / WatchDogKiller",
                        "namespaceId": 212480,
                        "visibilityLevel": "0",
                        "name": "WatchDogKiller",
                        "id": 5754835,
                        "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf/WatchDogKiller",
                        "updatedAt": "2025-09-16T09:28:18+08:00"
                    }
                }
            ],
            "groupInfos": [
                {
                    "groupInfo": {
                        "path": "FunnyWolf",
                        "createdAt": "2021-07-13T10:13:48+08:00",
                        "nameWithNamespace": "60cf4a6dfe6db12c807b672e / FunnyWolf",
                        "visibilityLevel": "0",
                        "name": "FunnyWolf",
                        "description": "",
                        "id": 212480,
                        "pathWithNamespace": "60cf4a6dfe6db12c807b672e/FunnyWolf",
                        "ownerId": 550345,
                        "parentId": 199872,
                        "updatedAt": "2021-07-13T10:13:48+08:00"
                    },
                    "groupRole": {
                        "sourceId": 212480,
                        "accessLevel": 40,
                        "sourceType": "Namespace",
                        "cnRoleName": "管理员",
                        "enRoleName": "Admin"
                    }
                }
            ]
        }
    ],
    "total": 1,
    "requestId": "AC0B9C6F-EF1A-5D39-AB6E-49C9B42E84F3",
    "success": true
}
```

</details>

### 用户加入的企业列表

Token 权限不足，没办法查询
