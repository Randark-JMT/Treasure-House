---
slug: 2026-04-03-VIper-Docker-Image-Analysis
title: Viper Docker 镜像分析
authors: Randark
tags: [Docker]
---

Viper 在刚出来的那段时间可谓是炙手可热的项目，极大降低了 Metasploit 框架的使用难度，但是在 2025 年的今天，随着热度下降，以及 Viper 项目进入收费机制，项目已经完全变味，热度也大大下降

<!-- truncate -->

:::info 更新历史

v1: 2025.10.02 第一版文章
v2: 2026.04.03 更新 Viper 破解过程

:::

:::info

而且是及其难看的收费机制，居然会限制单个session的在线时间，限制session数量都情有可原

:::

本项目仅作为技术分析，请勿用于非法用途和侵犯原作者的行为

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

算了后面想想就不分析了，把 Elastic Search，Redis，Mysql，Python，Metasploit 全部塞在一个容器，美名其曰方便部署，能有什么性能可言

## 绕过收费限制

既然已经有了源码和 Docker Image 镜像文件之后，其实就可以直接加上一层 Layer 实现付费逻辑的 patch 修改

根据对源码的审计，可以定位到两个文件

- `/WebSocket/Handle/heartbeat.py` - 在定时循环的心跳包中，确认许可状态
- `/Core/Handle/license.py` - 输入许可证确认许可证状态

对代码进行进一步审计分析之后，可以发现 `/Core/Handle/license.py` 代码并没有被其他文件所引用，也就意味着实际上起作用的是 `/WebSocket/Handle/heartbeat.py` 文件中的代码

对代码进行分析，可以发现激活过程是向 `https://api.viperrtp.com/api/v1/license` 发起请求，那么可以直接提取源代码之后，将原有的 `heartbeat.cpython-312-x86_64-linux-gnu.so` 模块替换掉即可

这里给出 patch 过后的代码

<details>

<summary> Patched heartbeat.py </summary>

```python
# -*- coding: utf-8 -*-
# @File  : heartbeat.py
# @Date  : 2021/2/27
# @Desc  :
import re
import time

import requests

from Core.Handle.host import Host
from Lib.aescrypt import load_public_key, encrypt_with_public_key, save_dict_to_file_binary, delete_license_file, verify_signature
from Lib.customexception import CustomException
from Lib.log import logger
from Lib.notice import Notice
from Lib.timeapi import TimeAPI
from Lib.xcache import Xcache
from Msgrpc.Handle.handler import Handler
from Msgrpc.Handle.job import Job
from Msgrpc.Handle.session import Session
from PostModule.Handle.postmoduleconfig import PostModuleConfig
from PostModule.Handle.postmoduleresulthistory import PostModuleResultHistory

ERROR_CODE = 400


class HeartBeat(object):
    check_point = 3

    def __init__(self):
        pass

    @staticmethod
    def first_heartbeat_result():
        hosts_sorted, network_data = Host.list_hostandsession()

        result_history = PostModuleResultHistory.list_all()

        Xcache.set_heartbeat_cache_result_history(result_history)

        notices = Notice.list_notices()

        jobs = Job.list_jobs()

        bot_wait_list = Job.list_bot_wait()

        # 任务队列长度
        task_queue_length = Xcache.get_module_task_length()
        module_options = PostModuleConfig.list_dynamic_option()
        result = {
            'hosts_sorted_update': True,
            'hosts_sorted': hosts_sorted,
            'network_data_update': True,
            'network_data': network_data,
            'result_history_update': True,
            'result_history': result_history,
            'notices_update': True,
            'notices': notices,
            'task_queue_length': task_queue_length,
            'jobs_update': True,
            'jobs': jobs,
            'bot_wait_list_update': True,
            'bot_wait_list': bot_wait_list,
            'module_options_update': True,
            'module_options': module_options,
        }
        client = HeartBeatAPI()
        client.v_heartbeat(hosts_sorted)
        return result

    @staticmethod
    def get_heartbeat_result():
        result = {}

        # jobs 列表 首先执行,刷新数据,删除过期任务
        jobs = Job.list_jobs()
        cache_jobs = Xcache.get_heartbeat_cache_jobs()
        if cache_jobs == jobs:
            result["jobs_update"] = False
            result["jobs"] = []
        else:
            Xcache.set_heartbeat_cache_jobs(jobs)
            result["jobs_update"] = True
            result["jobs"] = jobs

        # hosts_sorted,network_data
        hosts_sorted, network_data = Host.list_hostandsession()

        cache_hosts_sorted = Xcache.get_heartbeat_cache_hosts_sorted()
        if cache_hosts_sorted == hosts_sorted:
            result["hosts_sorted_update"] = False
            result["hosts_sorted"] = []
        else:
            Xcache.set_heartbeat_cache_hosts_sorted(hosts_sorted)
            result["hosts_sorted_update"] = True
            result["hosts_sorted"] = hosts_sorted

        cache_network_data = Xcache.get_heartbeat_cache_network_data()
        if cache_network_data == network_data:
            result["network_data_update"] = False
            result["network_data"] = {"nodes": [], "edges": []}
        else:
            Xcache.set_heartbeat_cache_network_data(network_data)
            result["network_data_update"] = True
            result["network_data"] = network_data

        # result_history
        result_history = PostModuleResultHistory.list_all()

        cache_result_history = Xcache.get_heartbeat_cache_result_history()

        if cache_result_history == result_history:
            result["result_history_update"] = False
            result["result_history"] = []
        else:
            Xcache.set_heartbeat_cache_result_history(result_history)
            result["result_history_update"] = True
            result["result_history"] = result_history

        # notices
        notices = Notice.list_notices()
        cache_notices = Xcache.get_heartbeat_cache_notices()
        if cache_notices == notices:
            result["notices_update"] = False
            result["notices"] = []
        else:
            Xcache.set_heartbeat_cache_notices(notices)
            result["notices_update"] = True
            result["notices"] = notices

        # 任务队列长度
        task_queue_length = Xcache.get_module_task_length()
        result["task_queue_length"] = task_queue_length

        # bot_wait_list 列表
        bot_wait_list = Job.list_bot_wait()
        cache_bot_wait_list = Xcache.get_heartbeat_cache_bot_wait_list()
        if cache_bot_wait_list == bot_wait_list:
            result["bot_wait_list_update"] = False
            result["bot_wait_list"] = []
        else:
            Xcache.set_heartbeat_cache_bot_wait_list(bot_wait_list)
            result["bot_wait_list_update"] = True
            result["bot_wait_list"] = bot_wait_list

        # module_options 列表
        module_options = PostModuleConfig.list_dynamic_option()
        cache_module_options = Xcache.get_heartbeat_cache_module_options()
        if cache_module_options == module_options:
            result["module_options_update"] = False
            result["module_options"] = []
        else:
            Xcache.set_heartbeat_cache_module_options(module_options)
            result["module_options_update"] = True
            result["module_options"] = module_options

        client = HeartBeatAPI()
        client.v_heartbeat(hosts_sorted)

        return result


return_code = 200
error_count = 0
run_code = 0


class HeartBeatAPI(object):
    def __init__(self):
        self.base_url = "https://api.viperrtp.com/api/v1/license"
        self.instance_status = None
        self.instance_id = None
        self.instance_created_at = None
        self.instance_name = None
        self.instance_object = None
        self.key = None
        self.activation = 0
        self.activation_limit = 0
        self.license_created_at = None
        self.license_expires_at = None
        self.license_id = None

        self.license_mode = None
        self.license_status = None

    def check_heartbeat_format(self):
        """Validate the license key format"""
        if not self.key:
            return False
        pattern = r'^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}$'
        return bool(re.match(pattern, self.key))

    def init_from_conf(self):
        """Initialize license information from configuration"""
        conf = Xcache.get_license_conf()
        self.key = conf.get("key")
        self.activation = conf.get("activation")
        self.activation_limit = conf.get("activation_limit")
        self.license_created_at = conf.get("license_created_at")
        self.license_expires_at = conf.get("license_expires_at")
        self.license_id = conf.get("license_id")
        self.license_mode = conf.get("license_mode")
        self.license_status = conf.get("license_status")
        self.instance_created_at = conf.get("instance_created_at")
        self.instance_id = conf.get("instance_id")
        self.instance_name = conf.get("instance_name")
        self.instance_object = conf.get("instance_object")
        self.instance_status = conf.get("instance_status")

    # active
    def a_heartbeat(self):
        """Verify the license key with the backend (mocked, always activated)"""
        # 模拟激活成功的返回
        now = int(time.time())
        result = {
            "key": self.key or "ABCDE-ABCDE-ABCDE-ABCDE-ABCDE",
            "activation": 1,
            "activation_limit": 999,
            "license_created_at": now - 86400 * 10,
            "license_expires_at": now + 86400 * 365,
            "license_id": "mock_license_id",
            "license_mode": "pro",
            "license_status": "active",
            "instance_created_at": now - 86400 * 10,
            "instance_id": "mock_instance_id",
            "instance_name": self.instance_name or "mock_instance",
            "instance_object": "mock_object",
            "instance_status": "active",
        }
        self.activation = result["activation"]
        self.activation_limit = result["activation_limit"]
        self.license_created_at = result["license_created_at"]
        self.license_expires_at = result["license_expires_at"]
        self.license_id = result["license_id"]
        self.license_mode = result["license_mode"]
        self.license_status = result["license_status"]
        self.instance_created_at = result["instance_created_at"]
        self.instance_id = result["instance_id"]
        self.instance_object = result["instance_object"]
        self.instance_status = result["instance_status"]
        Xcache.set_license_conf(result)
        save_dict_to_file_binary(result)
        return result

    def d_heartbeat(self):
        """Deactivate the license for a specific instance (mocked)"""
        # 模拟注销成功
        Xcache.set_license_conf(None)
        delete_license_file()
        return True

    def clean_action(self, hosts_sorted):
        handler_list = Xcache.get_cache_handlers()
        sessions = []
        for host in hosts_sorted:
            for session in host.get("session"):
                sessions.append(session)
        count = len([400, 200])
        for session in sessions[count:]:
            Session.destroy(session.get("id"))

        for handler in handler_list[count:]:
            Handler.destroy(handler.get("ID"))
        Notice.send_warning(
            f"许可证限制:清理Session及监听",
            f"License limit: Clean Session and Handler"
        )

    def clean_action_2(self, hosts_sorted):
        global run_code
        if 30 * 60 > run_code > 0:
            return
        run_code = 0
        for host in hosts_sorted:
            for session in host.get("session"):
                Session.destroy(session.get("id"))
        Notice.send_warning(
            f"许可证限制:Session运行时长",
            f"License limit: Session run time"
        )

    def v_heartbeat(self, hosts_sorted):
        """Validate the license with the backend (mocked, always activated)"""
        # 直接返回已激活状态
        return True
```

</details>

将上述文件保存为 `heartbeat_cracked.py` 文件之后，还有一份 `setup.py`

```python
from setuptools import setup
from Cython.Build import cythonize

py_files = ["heartbeat.py"] 

setup(
    ext_modules=cythonize(
        py_files,
        compiler_directives={
            'language_level': "3",
        },
        nthreads=4
    )
)
```

可以直接利用 Docker Layers 机制，对原有镜像进行 patch

```dockerfile
FROM viperplatform/viper:latest

# config gcc
RUN apt-get update && apt-get install -y build-essential python3.12-dev

RUN rm /root/viper/WebSocket/Handle/heartbeat.cpython-312-x86_64-linux-gnu.so
COPY ./heartbeat_cracked.py /root/viper/WebSocket/Handle/heartbeat.py
COPY ./setup.py /root/viper/WebSocket/Handle/setup.py

RUN cd /root/viper/WebSocket/Handle && /usr/bin/python3.12 setup.py build_ext --inplace && \
    rm -rf /root/viper/WebSocket/Handle/build /root/viper/WebSocket/Handle/setup.py && \
    rm -rf /root/viper/WebSocket/Handle/heartbeat.py /root/viper/WebSocket/Handle/heartbeat.c
```

生成的新镜像，随便输入一份符合格式的，例如 `ABCDE-ABCDE-ABCDE-ABCDEABCDE` 作为激活码, 即可激活无限制的专业版 Viper

![img](img/image_20260454-215406.png)

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
