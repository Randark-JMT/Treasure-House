---
sidebar_position: 0
sidebar_label: 目录总览
---

# Treasure-House

> ***Why So Serious***

这是一座按「知识域」组织的攻防与安全运维知识库：红蓝对抗与渗透测试、DevSecOps 的工程实践与合规基线、工业控制的专属场景、电子取证的复盘方法，以及证书轨道。内容以中文为主，命令与工具名保留原文。

## 分区导航

| 分区 | 收录范围 | 入口 |
|---|---|---|
| DevSecOps | CI/CD、容器化、系统与运维、可观测性、交付模型、开发框架，以及合入的标准框架 → 基线 → 加固 → 核查 | [进入](/docs/DevSecOps/) · [合规与基线](/docs/DevSecOps/Compliance/) |
| 红蓝攻防 | 渗透测试四层（Cyber Kill Chain / 技术手法 / 目标服务 / 内网横向），加上资产测绘、威胁情报、溯源研判、反制与厂商产品认知 | [进入](/docs/Attack-Defense/) · [四层总览](/docs/Attack-Defense/Penetration-Layers) |
| 工业控制 | 工控协议、平台、标准与专属工具 | [进入](/docs/ICS/) |
| 电子取证 | 样本类型、内存取证、流量取证、日志分析 | [进入](/docs/Forensic/) |
| 靶场与实验 | CTF 平台、网络仿真环境、CTF 技术研究与靶机 writeup | [进入](/docs/Lab/) |
| 证书 | Red Hat 认证学习轨道（RHCSA 9 / RHCE 9） | [进入](/docs/Certificate/) |
| CheatSheet | 跨域速查表，实战中直接抄用的命令组合 | [进入](/docs/CheatSheet/) |

站内随手可查的还有 [Blog](/blog) 与 [主站 randark.site](https://randark.site/)。

## 阅读约定

- **按知识域归位，不按技术命名归位**：同一个服务（如 Redis）的弱口令、未授权、历史漏洞与加固建议集中在同一页，不再散在多个分区。
- **目录名前的数字只控制侧边栏顺序**，不出现在 URL 里，所以顺序调整不影响既有链接。
- **一页一主题**。仍在编写中的页面会以「待验证」显式标注，不会用空壳冒充完成。
- 涉及破坏性操作的命令只记录方法与原理，实际验证请在授权环境内进行。

<!--
以下 4 项是从旧首页（mkdocs 脚手架残留）移来的个人待办，不属于站点内容，
保留在此以免丢失；同时登记在 toc-refactor-plan.md §3.7 第 6 条。
AFFiNE
Hetman RAID Recovery
zui
mRemoteNG
-->
