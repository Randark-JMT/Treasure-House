---
sidebar_position: 6
sidebar_label: STIG
---

# DISA STIGs

STIG（Security Technical Implementation Guide，安全技术实施指南）由美国国防信息系统局（Defense Information Systems Agency, DISA）发布，DISA 是国防部的作战支援机构。在国防部体系内它是强制的，政策依据是 DoDI 8500.01（Cybersecurity，2014-03-14）与 DoDI 8510.01（RMF）；后者是否已改编号为 DoDM 8510.01 待验证，核对时 .mil 域名在境外网络多不可达。

体系之外，STIG 的影响力来自两件事：粒度细，且公开可得。很多与美军无关的组织拿它当手上最细的一份配置基线用。

## SRG、STIG 与 CCI

三层结构，读 STIG 之前要先分清：

```text
NIST SP 800-53     控制项目录
      ^ CCI（Control Correlation Identifier）
SRG                产品无关的通用安全要求模板，DISA 发布
      v 按产品特化
STIG               针对具体产品与版本的实施指南
```

SRG 写「应当如何」，STIG 写「在这个产品的这个版本上具体怎么做」。CCI 是把两者接到 SP 800-53 控制项上的标识符，合规报告按 CCI 汇总，就能把 STIG 的核查结果翻译成 800-53 的符合性表述。

## 严重度分级

| 类别 | 定义 |
|---|---|
| CAT I | 直接、立即导致保密性、可用性或完整性损失 |
| CAT II | 可能导致上述损失 |
| CAT III | 削弱防护措施，但不直接造成损失 |

CAT I 基本没有商量余地，CAT III 则大量存在按环境决定是否豁免的空间。做差距分析时先按类别分层，比按条目顺序逐条推进有效得多——否则会在 CAT III 上耗掉大半时间，而真正阻断上线的是前面那几条 CAT I。

## 编号体系

新旧两套并存，这是查资料时最容易混乱的地方：

```text
旧   V-222425                    漏洞 ID（Vulnerability ID）
     SV-222425r508029_rule       规则 ID，含修订号 rxxxxxx
新   WN25-SO-000140              产品前缀 + 类别段 + 序号
                                 WN25 = Windows Server 2025
```

同一份 STIG 里两种编号可能同时出现，不同厂商扫描器的映射也不一致，AWS 的文档对同一 STIG 仍在用 V-278xxx 系列。引用某条要求时最好同时给出 V 号与规则号，只给一个经常对不上。新格式里产品前缀与类别段的完整取值表 待验证。

## 工具与获取

STIG 可在 `https://public.cyber.mil/stigs/downloads/` 免费下载。STIG Viewer 有桌面版；是否存在 3.x Web 版以及当前版本号 待验证，核对时 public.cyber.mil 不可达。第三方站点 stigviewer.com 声明其内容取自 "publicly available, UNCLASSIFIED DISA STIG zip archive"，按季度更新，可当镜像但不能当权威来源。

自动化核查走 SCAP，OpenSCAP 是常见实现；NSA 的 SCC 工具当前状态 待验证。哪些 STIG 材料带 FOUO / CUI 限制、限制到什么范围也 待验证——公开下载的那部分是无密级的，但不要把这个结论外推到全部 STIG 材料。

DoDIN APL（核准产品清单）与 STIG 是两条并行的准入路径。DISA 已宣布分阶段退役 APL、转向以厂商 STIG 为主的做法，退役时间表 待验证。

## 与其他基线的关系

与 [CIS Benchmarks](../Global-CIS-Benchmarks/index.md) 覆盖面高度重叠，CIS 甚至专门设了 STIG profile 来对齐两者。差别在约束力来源和产品粒度：STIG 按产品版本发布、跟得很紧，CIS 更偏通用最佳实践，更新节奏由社区决定。

与 [USGCB](../US-USGCB/index.md) 的关系常被说成「取代」，但官方无此表述，具体见该页的实测说明。

国内场景没有直接对应物。[等级保护 2.0](../China-MLPS/index.md) 的要求项粒度远粗于 STIG，两者的映射只能做到控制族层面，逐条对应是做不出来的。

## 参考

- DISA STIG 下载：`https://public.cyber.mil/stigs/downloads/`
- 第三方镜像（非权威）：`https://www.stigviewer.com/`
