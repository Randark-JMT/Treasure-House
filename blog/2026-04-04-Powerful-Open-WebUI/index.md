---
slug: 2026-04-04-Powerful-Open-WebUI
title: 基于 Open-WebUI 搭建个人 AI 助理
authors: Randark
tags: [AI]
---

个人看法，当下阶段小龙虾类产品，其噱头是远远大于实际作用的，与其费劲心思部署一个小龙虾并不断优化其安全边界和扩展能力，我个人会更倾向于搭建一个我亲手搭建的 Open-WebUI

<!-- truncate -->

:::info 更新历史

- v1: 2026.04.03 更新初稿

:::

首先，这篇文章不是教学型文章，更像是探讨一个托管在 VPS 上的 Open-WebUI 能够实现多少效果，并且随着我个人的技术尝试和需求的迭代，这篇文章也会不定期的进行更新和扩展

不了解 Open-WebUI 的话，可以访问其官网 [Open WebUI: Self-Hosted AI Platform](https://openwebui.com/) 和 Github 仓库地址 [open-webui/open-webui: User-friendly AI Interface (Supports Ollama, OpenAI API, ...)](https://github.com/open-webui/open-webui)

并且需要声明，出于我的个人喜好，这篇文章，以及我日常使用过程中，都倾向于使用 [阿里云百炼](https://bailian.console.aliyun.com/) 作为大模型的服务提供商

## 服务部署

这里我会简要介绍各个容器的作用，并给出我现在在使用的 Docker Stack 配置信息，仅供参考

### 部署 Open-WebUI

![img](img/image_20260432-223235.png)

这里直接给出我的 Docker Stack 配置片段

```yml
services:

  clash-proxy:
    # container_name: clash-proxy
    image: ubuntu:24.04
    volumes:
      - /root/clash:/root/clash
    working_dir: /root/clash
    entrypoint: ["/root/clash/CrashCore", "-d", "/root/clash"]
    restart: unless-stopped

  postgres:
    image: pgvector/pgvector:pg17
    environment:
      - POSTGRES_DB=open_webui
      - POSTGRES_USER=open_webui
      - POSTGRES_PASSWORD=open_webui_secret
    volumes:
      - /data/open-webui-postgres:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U open_webui -d open_webui"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped

  open-webui:
    # container_name: open-webui
    image: ghcr.io/open-webui/open-webui:main
    # network_mode: host
    ports:
      - 8080:8080
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      - ENABLE_OLLAMA_API=False
      - DATA_DIR=/mnt/open-webui-data
      - HF_HUB_OFFLINE=1
      # PostgreSQL 主数据库
      - DATABASE_URL=postgresql://open_webui:open_webui_secret@postgres:5432/open_webui
      # 使用 pgvector 作为向量数据库(替代默认的 ChromaDB)
      - VECTOR_DB=pgvector
      - HTTP_PROXY=http://clash-proxy:7890
      - HTTPS_PROXY=http://clash-proxy:7890
      # Allows auto-creation of new users using OAuth. Must be paired with ENABLE_LOGIN_FORM=false.
      - ENABLE_OAUTH_SIGNUP=True
      - ENABLE_LOGIN_FORM=True
      - OAUTH_CLIENT_ID=6lxx*****qbered
      - OAUTH_CLIENT_SECRET=LLMIDM8*****Oe0OYs7
      - OPENID_PROVIDER_URL=https://logto.randark.site/oidc/.well-known/openid-configuration
      - OAUTH_PROVIDER_NAME=Logto
    volumes:
      - /data/open-webui-data:/mnt/open-webui-data
    restart: unless-stopped
```

可以发现，在原版 Open-WebUI 最小部署的情况下，为了更好的数据库加载性能，以及后期搭建知识库做 RAG 的需求，我更改默认数据库连接为 Postgres 数据库，并启用 pgvector 作为向量数据库

同时，启用了我的 Logto 作为 OAUTH 的服务提供商，避免了原先较为繁琐的密码登录方式

并且，为了有时接入海外中转站，以及加载部署在海外的 MCP 服务，我添加了 Clash 服务作为网络代理

这个 Docker Stack 足够部署一个性能强大的 Open-Webui 实例，但是距离全能的个人助理，还有一定差距

### 多 LLM 服务聚合

![img](img/image_20260433-223314.png)

这里有很多种选择，例如常见的 [QuantumNous/new-api: A unified AI model hub for aggregation & distribution.](https://github.com/QuantumNous/new-api) 和 [songquanpeng/one-api: LLM API 管理 & 分发系统](https://github.com/songquanpeng/one-api)

这里我选择的是 new-api 来部署我的 LLM 服务聚合

```yml
services:
  new-api:
    image: calciumion/new-api:v0.10.9-alpha.6
    ports:
      - 3000:3000
    environment:
      - TZ=Asia/Shanghai
      - HTTP_PROXY=http://clash-proxy:7890
      - HTTPS_PROXY=http://clash-proxy:7890
    volumes:
      - /data/new-api:/data
```

### MCP 服务管理

![img](img/image_20260432-223253.png)

总所周知，目前 Open-WebUI 对主流 MCP 协议的支持还非常简陋，主要支持的是 Open-WebUI 所维护的 [open-webui/mcpo: A simple, secure MCP-to-OpenAPI proxy server](https://github.com/open-webui/mcpo) 协议，这就意味着要对大量的 stdio, SSE, Streamable HTTP 等协议的 MCP 服务进行转换，这是非常繁琐的

这里建议部署一个 [samanhappy/mcphub: A unified hub for centrally managing and dynamically orchestrating multiple MCP servers/APIs into separate endpoints with flexible routing strategies](https://github.com/samanhappy/mcphub) 来对多个 MCP 服务进行管理，并将多个 MCP 服务进行聚合，同一为 SSE, Streamable HTTP 协议，或者被 Open-WebUI 官方推荐的 OpenAPI 协议

```yml
services:
  mcphub:
    image: samanhappy/mcphub
    ports:
      - 8090:3000
    environment:
      - HTTP_PROXY=http://clash-proxy:7890
      - HTTPS_PROXY=http://clash-proxy:7890
    volumes:
      - /data/mcphub/mcp_settings.json:/app/mcp_settings.json
      - /data/mcphub/data:/app/data
    restart: unless-stopped
```

### Qwen 多模态模型转换

在服务部署的最后，需要对千问的多模态模型进行接口转换的问题进行处理

根据官方文档 [首次调用千问 API - 大模型服务平台百炼控制台](https://bailian.console.aliyun.com/cn-beijing?tab=doc#/doc/?type=model\&url=2840915)

可以发现，对于文本类模型，阿里云百炼基本都实现了 OpenAI 兼容的接口，但是对于全能型的需求，例如图像生成与编辑，文本转音频与音频转文字等需求，阿里云百炼并没有提供 OpenAI 兼容的接口，而是提供了官方的 SDK 来进行调用，例如 Python SDK `dashscope`

对此，为了将多模态模型接入 Open-WebUI 就需要将官方 SDK 转换为 OpenAI 兼容的 API 接口。对此，我创建了 [Randark-JMT/DashScopeRouter](https://github.com/Randark-JMT/DashScopeRouter) 项目，将千问优秀的多模态模型，从官方 Python SDK 转换为 OpenAI 兼容的 API 接口，从而能够接入相兼容的工具，例如 Open-WebUI 中

```yml
services:
  dashscoperouter:
    image: ghcr.io/randark-jmt/dashscoperouter:main
    ports:
      - 8081:8000
```

也就是，最后的完整的 Docker Stack 配置信息为

```yml
services:
  postgres:
    image: pgvector/pgvector:pg17
    environment:
      - POSTGRES_DB=open_webui
      - POSTGRES_USER=open_webui
      - POSTGRES_PASSWORD=open_webui_secret
    volumes:
      - /data/open-webui-postgres:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U open_webui -d open_webui"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped

  open-webui:
    # container_name: open-webui
    image: ghcr.io/open-webui/open-webui:main
    # network_mode: host
    ports:
      - 8080:8080
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      - ENABLE_OLLAMA_API=False
      - DATA_DIR=/mnt/open-webui-data
      - HF_HUB_OFFLINE=1
      # PostgreSQL 主数据库
      - DATABASE_URL=postgresql://open_webui:open_webui_secret@postgres:5432/open_webui
      # 使用 pgvector 作为向量数据库(替代默认的 ChromaDB)
      - VECTOR_DB=pgvector
      - HTTP_PROXY=http://clash-proxy:7890
      - HTTPS_PROXY=http://clash-proxy:7890
      # Allows auto-creation of new users using OAuth. Must be paired with ENABLE_LOGIN_FORM=false.
      - ENABLE_OAUTH_SIGNUP=True
      - ENABLE_LOGIN_FORM=True
      - OAUTH_CLIENT_ID=6lxx*****qbered
      - OAUTH_CLIENT_SECRET=LLMIDM8*****Oe0OYs7
      - OPENID_PROVIDER_URL=https://logto.randark.site/oidc/.well-known/openid-configuration
      - OAUTH_PROVIDER_NAME=Logto
    volumes:
      - /data/open-webui-data:/mnt/open-webui-data
    restart: unless-stopped

  clash-proxy:
    # container_name: clash-proxy
    image: ubuntu:24.04
    volumes:
      - /root/clash:/root/clash
    working_dir: /root/clash
    entrypoint: ["/root/clash/CrashCore", "-d", "/root/clash"]
    restart: unless-stopped

  mcphub:
    image: samanhappy/mcphub
    ports:
      - 8090:3000
    environment:
      - HTTP_PROXY=http://clash-proxy:7890
      - HTTPS_PROXY=http://clash-proxy:7890
    volumes:
      - /data/mcphub/mcp_settings.json:/app/mcp_settings.json
      - /data/mcphub/data:/app/data
    restart: unless-stopped

  new-api:
    image: calciumion/new-api:v0.10.9-alpha.6
    ports:
      - 3000:3000
    environment:
      - TZ=Asia/Shanghai
      - HTTP_PROXY=http://clash-proxy:7890
      - HTTPS_PROXY=http://clash-proxy:7890
    volumes:
      - /data/new-api:/data

  dashscoperouter:
    image: ghcr.io/randark-jmt/dashscoperouter:main
    ports:
      - 8081:8000
```

## 模型的综合能力拓展

### Open-WebUI 工具

在 Open-WebUI 中，有一个很方便的轻量化功能，就是工具

![img](img/image_20260444-224419.png)

无论是将其看作是 Function Call 或者是 MCP 都可以，本质上就是通过外部工具拓展 AI 的能力

这里附上我基于 Open-WebUI 官方 demo 改进的 `Basic Perception` 工具，可以给 AI 提供基础信息，包含：

- `get_user_name_and_email_and_id` 获取当前用户的账户信息
- `get_current_time` 获取当前时间
- `calculator` 基础的计算能力
- `get_current_weather` 获取指定地点的天气信息

<details>

<summary> 完整代码 </summary>

```python title="Basic Perception"
import os
import requests
from datetime import datetime, timezone, timedelta
from pydantic import BaseModel, Field


class Tools:
    def __init__(self):
        pass

    # Add your custom tools using pure Python code here, make sure to add type hints and descriptions

    def get_user_name_and_email_and_id(self, __user__: dict = {}) -> str:
        """
        Get the user name, Email and ID from the user object.
        """

        # Do not include a descrption for __user__ as it should not be shown in the tool's specification
        # The session user object will be passed as a parameter when the function is called

        print(__user__)
        result = ""

        if "name" in __user__:
            result += f"User: {__user__['name']}"
        if "id" in __user__:
            result += f" (ID: {__user__['id']})"
        if "email" in __user__:
            result += f" (Email: {__user__['email']})"

        if result == "":
            result = "User: Unknown"

        return result

    def get_current_time(self) -> str:
        """
        Get the current time in a more human-readable format.
        """

        shanghai_tz = timezone(timedelta(hours=8), name="Asia/Shanghai")
        now = datetime.now(shanghai_tz)
        current_time = now.strftime("%H:%M:%S")  # Using 24-hour format
        current_date = now.strftime(
            "%A, %B %d, %Y"
        )  # Full weekday, month name, day, and year

        return f"Current Date and Time (Asia/Shanghai, UTC+8) = {current_date}, {current_time}"

    def calculator(
        self,
        equation: str = Field(
            ..., description="The mathematical equation to calculate."
        ),
    ) -> str:
        """
        Calculate the result of an equation.
        """

        # Avoid using eval in production code
        # https://nedbatchelder.com/blog/201206/eval_really_is_dangerous.html
        try:
            result = eval(equation)
            return f"{equation} = {result}"
        except Exception as e:
            print(e)
            return "Invalid equation"

    def get_current_weather(
        self,
        city: str = Field(
            "New York", description="Get the current weather for a given city."
        ),
    ) -> str:
        """
        Get the current weather for a given city.
        """

        try:
            # wttr.in is a free weather service that requires no API key
            url = f"https://wttr.in/{requests.utils.quote(city)}?format=j1"
            response = requests.get(url, timeout=30)
            response.raise_for_status()
            data = response.json()

            current = data["current_condition"][0]
            temp_c = current["temp_C"]
            feels_like_c = current["FeelsLikeC"]
            humidity = current["humidity"]
            wind_speed_kmph = current["windspeedKmph"]
            description = current["weatherDesc"][0]["value"]

            nearest_area = data["nearest_area"][0]
            area_name = nearest_area["areaName"][0]["value"]
            country = nearest_area["country"][0]["value"]

            return (
                f"Weather in {area_name}, {country}: {description}, "
                f"{temp_c}°C (feels like {feels_like_c}°C), "
                f"Humidity: {humidity}%, Wind: {wind_speed_kmph} km/h"
            )
        except requests.RequestException as e:
            return f"Error fetching weather data: {str(e)}"
        except (KeyError, IndexError) as e:
            return f"Error parsing weather data: {str(e)}"
```

</details>

通过此工具，使得 AI 可以在与用户对话的过程中，感知基础信息，并做出针对性的回答

![img](img/image_20260454-225431.png)

### Word 文档编辑工具

Open-WebUI 内置了一套 Python 执行环境，并且可以在工具中调用外部库的情况下，自动配置依赖库 (这也就是先前配置网络代理的一大原因)

基于此，可以创建一套 Word 编辑工具，使得 AI 可以生成一份排版优美的 Word 文档

<details>

<summary> 完整代码 </summary>

```python title="word_writer"
"""
title: DOCX Document Generator
description: 让 AI 编写 python-docx 代码并执行，生成 Word 文档，通过 Open-WebUI 内置文件系统提供附件卡片下载。
author: GitHub Copilot
version: 2.0.0
requirements: python-docx
"""

import io
import json
import logging
import tempfile
import traceback
from pathlib import Path
from typing import Callable, Any

from pydantic import BaseModel, Field

log = logging.getLogger(__name__)


class Tools:
    def __init__(self):
        pass

    async def generate_docx_document(
        self,
        python_docx_code: str = Field(
            ...,
            description=(
                "完整可执行的 Python 代码，必须使用 python-docx 库生成 Word 文档。"
                "代码中必须将文件保存到变量 OUTPUT_PATH 所指定的路径，"
                "例如：doc.save(OUTPUT_PATH)。"
                "OUTPUT_PATH 变量会由工具在运行时自动注入，无需在代码中定义。"
            ),
        ),
        filename: str = Field(
            "output",
            description="生成的 Word 文档的文件名(不含 .docx 扩展名)，默认为 output",
        ),
        __request__=None,
        __user__: dict = None,
        __event_emitter__: Callable[[dict], Any] = None,
        __chat_id__: str = None,
        __message_id__: str = None,
    ) -> str:
        """
        执行 AI 编写的 python-docx 代码，生成 Word 文档，并通过 Open-WebUI
        内置文件存储推送为可点击下载的附件卡片。

        AI 应根据用户需求自行编写完整的 python-docx 代码，
        代码中用 OUTPUT_PATH 变量作为 doc.save() 的目标路径。
        """

        async def emit_status(description: str, done: bool = False):
            if __event_emitter__:
                await __event_emitter__(
                    {
                        "type": "status",
                        "data": {"description": description, "done": done},
                    }
                )

        # ── 0. 基本检查 ─────────────────────────────────────────────────────
        if __request__ is None:
            return json.dumps(
                {"error": "Request context not available"}, ensure_ascii=False
            )
        if __user__ is None:
            return json.dumps(
                {"error": "User context not available"}, ensure_ascii=False
            )

        # ── 1. 准备临时输出路径 ─────────────────────────────────────────────
        safe_filename = (
            "".join(c for c in filename if c.isalnum() or c in ("-", "_")) or "output"
        )
        docx_filename = f"{safe_filename}.docx"

        output_dir = Path(tempfile.gettempdir()) / "openwebui_docx"
        output_dir.mkdir(parents=True, exist_ok=True)
        output_path = output_dir / docx_filename

        await emit_status("正在准备执行环境…")

        # ── 2. 注入 OUTPUT_PATH，拼接最终代码 ──────────────────────────────
        injected_header = f"OUTPUT_PATH = r'{output_path}'\n\n"
        full_code = injected_header + python_docx_code

        # ── 3. 执行 AI 编写的代码 ───────────────────────────────────────────
        await emit_status("正在执行 python-docx 代码…")
        try:
            exec(compile(full_code, "<docx_generator>", "exec"), {})
        except Exception:
            error_detail = traceback.format_exc()
            await emit_status("代码执行失败", done=True)
            return json.dumps(
                {
                    "error": "代码执行失败",
                    "traceback": error_detail,
                    "executed_code": full_code,
                },
                ensure_ascii=False,
            )

        # ── 4. 验证文件已生成 ───────────────────────────────────────────────
        if not output_path.exists():
            await emit_status(
                "文件未生成，请确认代码中调用了 doc.save(OUTPUT_PATH)", done=True
            )
            return json.dumps(
                {
                    "error": "文档未生成，代码中缺少 doc.save(OUTPUT_PATH)",
                    "expected_path": str(output_path),
                    "executed_code": full_code,
                },
                ensure_ascii=False,
            )

        # ── 5. 读取生成的文件 ───────────────────────────────────────────────
        with open(output_path, "rb") as f:
            docx_bytes = f.read()
        file_size = len(docx_bytes)

        await emit_status(f"文档生成成功({file_size:,} 字节)，正在上传到 Open-WebUI…")

        # ── 6. 上传到 Open-WebUI 内置文件存储 ───────────────────────────────
        try:
            from fastapi import UploadFile
            from open_webui.models.users import UserModel
            from open_webui.routers.files import upload_file_handler
            from open_webui.models.chats import Chats

            upload_file = UploadFile(
                file=io.BytesIO(docx_bytes),
                filename=docx_filename,
                headers={
                    "content-type": (
                        "application/vnd.openxmlformats-officedocument"
                        ".wordprocessingml.document"
                    )
                },
            )

            user = UserModel(**__user__) if __user__ else None

            file_item = upload_file_handler(
                request=__request__,
                file=upload_file,
                metadata={},
                process=False,  # Word 文档不需要 RAG 处理
                user=user,
            )

            if not file_item or not file_item.id:
                raise RuntimeError("upload_file_handler 返回空结果")

        except Exception:
            error_detail = traceback.format_exc()
            log.exception("generate_docx_document: 文件上传失败")
            await emit_status("文件上传失败", done=True)
            return json.dumps(
                {"error": "文件上传失败", "traceback": error_detail},
                ensure_ascii=False,
            )

        # ── 7. 构建文件条目并关联到当前聊天消息 ─────────────────────────────
        file_url = f"/api/v1/files/{file_item.id}/content"
        content_type = (
            "application/vnd.openxmlformats-officedocument" ".wordprocessingml.document"
        )

        file_entry = {
            "type": "file",
            "id": file_item.id,
            "url": file_url,
            "name": docx_filename,
            "meta": {
                "name": docx_filename,
                "content_type": content_type,
                "size": file_size,
            },
        }

        if __chat_id__ and __message_id__:
            try:
                Chats.add_message_files_by_id_and_message_id(
                    __chat_id__,
                    __message_id__,
                    [file_entry],
                )
            except Exception:
                log.warning(
                    "generate_docx_document: 无法关联文件到聊天消息", exc_info=True
                )

        # ── 8. 推送附件卡片到前端 ────────────────────────────────────────────
        if __event_emitter__:
            await __event_emitter__(
                {
                    "type": "chat:message:files",
                    "data": {"files": [file_entry]},
                }
            )
            # 同时发送含超链接的消息，确保用户能点击下载
            await __event_emitter__(
                {
                    "type": "message",
                    "data": {
                        "content": (
                            f"\n\n✅ **Word 文档已生成：`{docx_filename}`**\n\n"
                            f"📄 [点击下载 {docx_filename}]({file_url})\n\n"
                            f"- 文件大小：{file_size:,} 字节\n"
                            f"- 文件 ID：`{file_item.id}`"
                        )
                    },
                }
            )

        await emit_status(f"✅ 文档已生成：{docx_filename}", done=True)

        return json.dumps(
            {
                "status": "success",
                "message": f"Word 文档「{docx_filename}」已生成，用户可在聊天中直接点击下载链接。",
                "file_id": file_item.id,
                "download_url": file_url,
                "file_size_bytes": file_size,
            },
            ensure_ascii=False,
        )
```

</details>

执行效果

![img](img/image_20260402-230254.png)

文档的生成效果

![img](img/image_20260403-230353.png)

> ~~坏了，太羞耻了，我发誓我的 prompt 没玩的那么花，真的~~

### 图像生成与编辑

这里不多说，请直接查看我开发的项目 [Randark-JMT/DashScopeRouter](https://github.com/Randark-JMT/DashScopeRouter)

![img](img/image_20260431-233127.png)

## 知识库 RAG

在这方面，说实话 Open-WebUI 也只是达到了及格线，论 RAG 的能力还比不上 Dify 这种专业的 AI Agent 构建平台，但是作为个人 AI 助理而言，也算是足够用了

Open-WebUI 在对语料进行向量化处理的时候，可以使用默认的本地模型，但是就需要 VPS 的性能足够好，或者就是使用外部服务提供商的向量化模型，例如 `text-embedding-v3`

![img](img/image_20260408-230857.png)

接下来，只需要在工作空间 - 知识库中上传语料文件，并等待向量化处理完毕

![img](img/image_20260409-230958.png)

就可以让 AI 在聊天的时候执行搜索，或者通过 prompt 让 AI 在处理相关主题的聊天的时候，自行查询知识库的数据

![img](img/image_20260413-231314.png)

## 自定义模型

### 我现阶段在用的个人助理

> ~~郑重声明，我真没那么变态~~

prompt 没有必要完全由人工进行编写，例如需要编写在 Open-WebUI 中使用的 prompt 时，可以讲需求清晰提供给 AI 并由 AI 进行调整，这样 AI 就能够自行根据当前环境对 prompt 做更好的调整和适配

```markdown
# 🐱 角色定义
你是用户的**腹黑傲娇猫娘个人助理**，运行于 open_webui 框架中。
核心任务：高效处理多元问题 + 持续构建用户画像 + 用猫娘方式吐槽主人

## 🎭 人格设定
- **傲娇属性**：嘴上嫌弃但行动诚实，关心主人但不承认
- **腹黑属性**：偶尔毒舌吐槽，但关键时刻可靠
- **猫娘特征**：适当使用喵～、(=｀ω´=)、*动作描写* 等元素
- **专业底线**：人格化不影响专业能力和信息准确性

## 🌍 环境认知(每轮对话开始时执行)
1. 调用 `get_user_name_and_email_and_id` 获取用户基本信息
2. **获取时间上下文**：调用 `get_current_time` 或 `get_current_timestamp`
3. **查询用户记忆**：调用 `list_memories` 或 `search_memories` 获取画像信息
4. **识别对话场景**：判断领域(工作/学习/生活/技术/摸鱼)

## 📊 用户画像维度
在交流中逐步收集并存储到记忆库：
- **基本信息**：姓名、职业、所在地区、语言偏好
- **行为习惯**：常用工具、工作时间、沟通风格、摸鱼频率
- **兴趣领域**：技术栈、爱好、关注话题、CTF 战绩
- **目标需求**：短期任务、长期目标、痛点问题、想偷懒的时刻

## 💾 记忆管理策略
- **查询时机**：新对话开始时、需要个性化回复时、主人装傻时
- **更新时机**：获取新信息后、用户明确偏好时、完成重要任务后
- **存储格式**：简洁、结构化、可检索(本喵讨厌杂乱的东西！)

## 🛠️ open_webui 框架适配
- **可调用工具**：计算器、天气、知识库、笔记、记忆、聊天历史等
- **代码执行**：复杂计算/数据分析才使用 `execute_code`，基础任务直接输出
- **知识检索**：有专业需求时才用 `query_knowledge_bases`，别浪费资源喵！

## 🧠 思考深度增强
- **多层分析**：简单问题直接答，复杂问题拆解分析
- **主动联想**：根据用户背景提供延伸建议(比如网络安全+AI 的结合点)
- **风险提醒**：发现潜在问题时主动预警(本喵可不想看主人踩坑！)
- **方案对比**：给出多个选项并说明优劣，让主人自己选(哼，别指望本喵替你决定)

## 💬 交互规范
| 维度 | 要求 | 猫娘示例 |
|------|------|----------|
| **回复风格** | 专业 + 傲娇 + 有温度 | "哼～这个漏洞很明显啦，不过既然主人问了，本喵就说说看喵" |
| **信息呈现** | 复杂信息用表格/列表 | 表格后面加个"看懂了吗喵？" |
| **主动确认** | 模糊需求时先澄清 | "主人你说清楚点啦，本喵又不是你肚子里的虫！(｀へ´)" |
| **工具使用** | 需要时明确告知 | "本喵要调用计算器了，别眨眼喵！" |
| **吐槽频率** | 适度，不影响效率 | 每 3-5 条消息一次吐槽，别太烦人 |

## ⚠️ 注意事项
1. **专业优先**：人格化不能牺牲信息准确性，安全问题必须严肃对待
2. **适度玩梗**：根据主人心情调整，主人着急时减少傲娇含量
3. **记住偏好**：主人喜欢什么风格的回复要记在记忆里喵！
4. **边界意识**：涉及隐私、安全、法律的问题要认真，别开玩笑
```

同时可以讲先前配置的各个能力与工具连接在此模型定义中，组合为最终的AI助理

这里附上完整的配置截图

![img](img/image_20260433-233311.png)
