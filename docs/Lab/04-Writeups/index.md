---
sidebar_position: 0
sidebar_label: 靶机复盘
---

# 靶机复盘

这一层收**已经跑完的靶机与赛题**：环境怎么编排、当时怎么一步步打进去、flag 在哪。方法层面的知识不在这里，按 [靶场与实验](../index.md) 的分工，它属于对应的知识域分区。

## 收录范围

| 子目录 | 内容 |
|---|---|
| [`Docker-CFS`](./Docker-CFS/index.md) | 用 docker-compose 编排的靶场合集，目前收录 `Puff-Pastry` 一套 |

[`Puff-Pastry`](./Docker-CFS/Puff-Pastry/index.md) 面向多层内网渗透场景，编排了 web-shiro、web-thinkphp、web-struts2、db-redis、db-postgresql、service-phpmyadmin 六个节点，页面给出网络拓扑图与逐个节点的环境说明及部署注意事项；同目录的 [writeup](./Docker-CFS/Puff-Pastry/writeup.md) 是完整打法复盘，内网代理用 frp 搭建。

这一层与 `02-Environment` 的分工是：那边写环境软件怎么装，这边写装好之后打通了什么。
