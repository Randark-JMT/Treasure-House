---
sidebar_position: 0
sidebar_label: 交付模型
---

# 交付模型

这一层按云服务的服务交付模型（Service Model）归类，回答「使用者拿到的是哪一层资源、还剩什么要自己管」，不写具体厂商的产品手册。

## 收录范围

| 子目录 | 交付模型 | 使用者的控制面 |
|---|---|---|
| [`LaaS`](./LaaS/index.md) | 基础设施即服务（Infrastructure as a Service, IaaS） | 处理、存储、网络等基础计算资源的配置，操作系统与应用自行部署，底层云物理设施由提供商掌握 |
| [`PaaS`](./PaaS/index.md) | 平台即服务（Platform as a Service, PaaS） | 已部署的应用及其宿主环境配置，网络、服务器、操作系统、存储由提供商管理 |
| [`SaaS`](./SaaS/index.md) | 软件即服务（Software as a Service, SaaS） | 经浏览器等客户端使用的成品应用，只保留提供商开放的应用内配置项 |

三层是托管程度的递进：使用者交出的管理职责越多，可动的主机层越窄，关注点也从系统配置上移到账号、接口与应用配置。

`LaaS` 目录名与页面标题写作 LaaS，正文写的是 IaaS。名称与内容不一致属于已知的内容问题，本层未改动该页。

`SaaS` 下再按产品分子目录：

| 子目录 | 状态 |
|---|---|
| [`Github-Page`](./SaaS/Github-Page/index.md) | GitHub Pages 静态站点托管，正文待补写 |
| [`Vercel`](./SaaS/Vercel/index.md) | Vercel 前端云，已记录经 GitHub App 与 GitHub Action 两条部署路径的差异与权限限制 |
| [`Cloudflare-Page`](./SaaS/Cloudflare-Page/index.md) | Cloudflare Pages 静态站点托管，正文待补写 |

## 收录约定

新的交付模型或托管产品先在本层建目录，厂商特定的部署细节留在该目录内，跨产品的通用结论再上移到本页。
