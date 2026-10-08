---
sidebar_position: 0
sidebar_label: 标准框架
---

# 标准框架

这一层收外部发布的合规标准与安全配置框架本身：谁发布、约束谁、以什么形式落到检查项。同级的 `03-Hardening` 收加固做法，`04-Baseline-Check` 收核查过程，本层只留「标准怎么写」。上级页面 [合规与基线](../index.md) 有一段 MLPS 的官方引介可作背景。

## 收录范围

目录名统一为 `<地区>-<框架缩写>`，地区取 `China`、`US`、`Taiwan`、`Global`。

| 子目录 | 框架 |
|---|---|
| [`China-MLPS`](./China-MLPS/index.md) | 网络安全等级保护（Multi-Level Protection Scheme, MLPS），《网络安全法》确立的强制性分级保护制度，2019 年起为 MLPS 2.0 |
| [`Global-CIS-Benchmarks`](./Global-CIS-Benchmarks/index.md) | CIS Benchmarks，互联网安全中心（Center for Internet Security, CIS）发布的产品特化安全配置基线 |
| [`Global-SWIFT-CSP`](./Global-SWIFT-CSP/index.md) | SWIFT 客户安全计划（Customer Security Programme, CSP），接入 SWIFT 网络的机构每年须提交 attestation |
| [`Taiwan-FCB`](./Taiwan-FCB/index.md) | 金融組態基準（Financial Configuration Baseline），金管會推动，是 GCB 在金融业的强化衍生 |
| [`Taiwan-GCB`](./Taiwan-GCB/index.md) | 政府組態基準，由 NICS 维护；已记录 GPKI（政府機關公開金鑰基礎建設）下的证书体系与 GTestRCA、GTestCA 链 |
| [`US-STIGs`](./US-STIGs/index.md) | 安全技术实施指南（Security Technical Implementation Guide, STIG），美国国防信息系统局（Defense Information Systems Agency, DISA）发布 |
| [`US-USGCB`](./US-USGCB/index.md) | 美国政府配置基线（United States Government Configuration Baseline, USGCB），NIST 以安全内容自动化协议（Security Content Automation Protocol, SCAP）格式分发；基线内容已停止分发 |

七个框架里只有 MLPS 是法定强制、带监督检查的。SWIFT CSP 的强制性来自合同与网络接入资格，STIG 的强制性限于美国国防部体系，其余属自愿采纳。这个差别决定了各自的证据形式：法定制度要出测评报告，自愿标准通常只需自我声明。

USGCB 与 FCB 两页都单独交代了当前状态与证据强度——前者的基线内容已经取不到，后者的官方原文尚未核到。引用这两页的结论前先读各自的说明段。

## 收录约定

一个框架一个目录。目录内先写标准的适用范围与控制项组织方式，具体的核查脚本与加固步骤分别落到 [04-Baseline-Check](../04-Baseline-Check/index.md) 与 [03-Hardening](../03-Hardening/index.md)，本层不复制。

标准编号、发布年份、条款号一律核对官方来源后再写，核不到的标「待验证」，不写看起来合理的具体值。厂商产品页与咨询机构解读可以用作线索，但不能当作标准的权威出处。
