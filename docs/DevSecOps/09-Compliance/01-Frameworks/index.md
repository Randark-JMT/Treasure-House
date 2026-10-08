---
sidebar_position: 0
sidebar_label: 标准框架
---

# 标准框架

这一层收外部发布的合规标准与安全配置框架本身：谁发布、约束谁、以什么形式落到检查项。同级的 `03-Hardening` 收加固做法，`04-Baseline-Check` 收核查过程，本层只留「标准怎么写」。上级页面 [合规与基线](../index.md) 有一段 MLPS 的官方引介可作背景。

## 收录范围

目录名统一为 `<地区>-<框架缩写>`，地区取 `China`、`US`、`Taiwan`、`Global`。

| 子目录 | 框架 |
|---|---|---|
| `China-MLPS` | 网络安全等级保护（Multi-Level Protection Scheme, MLPS），《网络安全法》要求的分级保护制度，2019 年更新为 MLPS 2.0 |
| `Global-CIS-Benchmarks` | CIS Benchmarks，互联网安全中心（Center for Internet Security, CIS）发布的操作系统与应用安全配置基线 |
| `Global-SWIFT-CSP` | SWIFT 客户安全计划（Customer Security Programme, CSP），面向接入 SWIFT 网络的金融机构 |
| `Taiwan-FCB` | 缩写全称与适用范围待验证 | 待补写 |
| [`Taiwan-GCB`](./Taiwan-GCB/index.md) | 主管机关为数位发展部，已记录 GPKI（政府機關公開金鑰基礎建設）下的证书体系与 GTestRCA、GTestCA 链 |已有内容 |
| `US-STIGs` | 安全技术实施指南（Security Technical Implementation Guide, STIG），美国国防信息系统局（Defense Information Systems Agency, DISA）发布 |
| `US-USGCB` | 美国政府配置基线（United States Government Configuration Baseline, USGCB），由 NIST 以安全内容自动化协议（Security Content Automation Protocol, SCAP）格式分发 |

七个目录里有六个是空目录，除 `Taiwan-GCB` 外均无任何内容文件。空目录不进版本库，站点侧栏里也不会出现，首篇内容落地后才会显示，所以上表只给 `Taiwan-GCB` 做了链接。
