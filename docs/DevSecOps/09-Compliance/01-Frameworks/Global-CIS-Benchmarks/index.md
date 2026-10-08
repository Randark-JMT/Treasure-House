---
sidebar_position: 2
sidebar_label: CIS Benchmarks
---

# CIS Benchmarks

CIS Benchmarks 由互联网安全中心（Center for Internet Security, CIS）发布，是针对具体产品的安全配置基线，不是管理体系标准。它回答的是「这个产品的这一项该设成什么值」，而不是「你应当建立什么流程」。

规模上官方口径并不统一：FAQ 页写「超过 140 种技术」，站点导航写「100+ 份厂商中立配置指南」，列表页又按「25+ 厂商产品族」组织。准确的 benchmark 份数 待验证。分类筛选共 10 项：云服务商、桌面软件、DevSecOps 工具、DISA STIG、移动设备、网络设备、操作系统、服务器软件、存储设备，以及全部。

获取方式：PDF 免费下载，CIS SecureSuite 会员另可下载 Word、Excel、XML 格式；协作平台 WorkBench 注册免费。

## 单条建议的构成

每份 benchmark 的主体是一串编号建议，字段顺序固定：

```text
编号 + 标题 + (Scored) / (Not Scored)
Profile Applicability    适用于哪些 Profile
Description              这项配置是什么
Rationale                为什么要这么配
Impact                   改了会影响什么
Audit                    怎么检查当前值
Remediation              怎么改
Default Value            出厂默认值
References               出处
CIS Controls             对应哪几条控制项
```

`Scored` 与 `Not Scored` 决定这一条是否计入合规评分。Impact 一段写的是执行修复后可能出现的功能影响，做基线加固时最该先读的恰恰是它——跳过 Impact 直接照 Remediation 批量改，是生产环境断服务的常见原因。

## Profile 分级

| Profile | 官方定义要点 |
|---|---|
| Level 1 | practical and prudent；有明确安全收益；不妨碍系统可用性 |
| Level 2 | 在 Level 1 之上扩展；安全优先、纵深防御；可能损害可用性或性能 |
| STIG | 只含与 DISA STIG 相关的建议 |

Level 3 已废除，由 STIG profile 取代，FAQ 原文是 "The STIG profile replaces the previous Level 3"。每条建议至少归属一个 Profile。

Level 1 与 Level 2 的界线是可用性：Level 2 明确允许为安全牺牲功能。选哪一档不是技术问题，取决于这台机器承担什么角色。

## 与 CIS Controls 的关系

CIS Controls 当前版本 v8.1，v7.1 仍可下载，共 18 个 Control、153 个 Safeguard。Implementation Group 分三档：IG1 官方定义为 essential cyber hygiene，即抵御最常见攻击所需的基础集合；IG2 在 IG1 之上扩展；IG3 包含全部 Control 与 Safeguard。

两者的连接是内嵌式的——每条 benchmark 建议末尾的 `CIS Controls:` 段直接列出对应的控制号、标题与控制全文。Controls 回答「该做什么」，Benchmarks 回答「在这台机器上具体怎么做」，这个分工是它比多数标准好用的地方。

## 自动化

CIS-CAT Pro Assessor 评估系统与 benchmark 的符合度，需要 SecureSuite 会员；CIS-CAT Lite 免费且不限扫描次数。CIS Hardened Images 是各云厂商镜像市场上按 Level 1 或 Level 2 预加固的虚拟镜像，适合新建环境直接从基线起步。

## 版本与更新

版本号是三段式，如 v1.0.0。发布节奏取决于社区与对应技术的大版本周期，官方每月发邮件通告新增与更新；Windows 系列承诺在最新 Windows build 发布后 90 天内覆盖。历史版本是否仍可下载 未核实。

## 使用时的注意点

Benchmark 是产品特化的。同一个控制目标在不同产品的条目里措辞与检查方法都不同，跨产品汇总合规率时不能直接按条目数平均——一台 Windows 服务器和一套 Kubernetes 的条目密度完全不是一回事。

Audit 段给的命令多数可以直接跑，Remediation 里则混着注册表项、组策略路径与云服务 API 调用，批量执行前要在同版本环境上验一遍。

与 [USGCB](../US-USGCB/index.md) 相比，CIS 仍在活跃更新；与 [STIG](../US-STIGs/index.md) 相比，它不绑定美国国防部体系，而 STIG profile 的存在让两者可以逐条对照。

## 参考

- CIS Benchmarks 列表与 FAQ：`https://www.cisecurity.org/cis-benchmarks`
- CIS Controls v8：`https://www.cisecurity.org/controls/v8`
- Implementation Groups：`https://www.cisecurity.org/controls/implementation-groups`
- CIS-CAT Pro：`https://www.cisecurity.org/cybersecurity-tools/cis-cat-pro`
