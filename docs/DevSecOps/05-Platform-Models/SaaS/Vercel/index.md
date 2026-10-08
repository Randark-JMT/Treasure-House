---
sidebar_position: 1
sidebar_label: Vercel
sidebar_class_name: green
---

# Vercel

> Vercel 的前端云为开发人员提供了框架、工作流程和基础设施，以构建更快、更个性化的 Web。

## Vercel with Github

[Deploying GitHub Projects with Vercel](https://vercel.com/docs/concepts/deployments/git/vercel-for-github)

### 通过 Github App 部署 Vercel

通过 `Github App` 明显很方便，但是其绕不开对仓库权限的限制，以及组织所属的仓库没办法免费使用 `Github App` 部署到 `Vercel`

[GitHub App - Vercel](https://github.com/apps/vercel)

### 通过 Github Action 部署 Vercel

以下为官方教程

[How to Use GitHub Actions to Deploy to Vercel](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)

:::tip
这里以 Mkdocs 为例
:::

Github Action 配置文件如下

```yaml
name: Build and Release to Vercel

env:
  VERCEL_ORG_ID: ${{secrets.VERCEL_ORG_ID}}
  VERCEL_PROJECT_ID: ${{secrets.VERCEL_PROJECT_ID}}

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Setup Python
        uses: actions/setup-python@v2
        with:
          python-version: "3.11"

      - name: Upgrade pip
        run: python3 -m pip install --upgrade pip

      - name: Install requirements
        run: python3 -m pip install -r ./requirements.txt

      - name: Install Vercel CLI
        run: npm install --global vercel@latest

      - name: Mkdocs build Project
        run: mkdocs build

      - name: Pull Vercel Environment Information
        working-directory: ./site
        run: vercel pull --yes --environment=production --token=${{secrets.VERCEL_TOKEN}}

      - name: Build Project Artifacts
        working-directory: ./site
        run: vercel build --prod --token=${{secrets.VERCEL_TOKEN}}

      - name: Deploy Project Artifacts to Vercel
        working-directory: ./site
        run: vercel deploy --prebuilt --prod --token=${{secrets.VERCEL_TOKEN}}
```

## Vercel CLI
