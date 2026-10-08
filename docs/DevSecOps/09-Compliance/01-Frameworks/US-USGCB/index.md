---
sidebar_position: 7
sidebar_label: USGCB
---

# USGCB

USGCB（United States Government Configuration Baseline，美国政府配置基线）由 NIST 主导，前身是联邦桌面核心配置（Federal Desktop Core Configuration, FDCC）的强制要求。政策依据是一组 OMB 备忘录：M-07-11、M-07-18、M-08-22，以及 CIO 委员会 2010-05-07 与 2010-09-15 两份备忘录。治理归属曾从 TIS 移交给 Information Security and Identity Management Committee。

## 当前状态

先说结论：它已经不能再用了，但官方没有任何一处明说。2026-10 实测四个地址：

```text
https://usgcb.nist.gov/                                   301 → csrc.nist.gov 项目页
https://usgcb.nist.gov/usgcb_content.shtml                404
https://usgcb.nist.gov/content/windows/win7/R3/win7R3.zip 404   SCAP 内容仓库已下线
https://csrc.nist.gov/Projects/United-States-Government-Configuration-Baseline
                                                          200   无 archived / discontinued 声明
```

csrc 项目页仍在线，页面元数据显示创建于 2016-12-14、最后更新 2026-04-13，正文却没有任何归档或停用字样；基线内容本身已经下载不到。FAQ 的表述是 "United States government agencies should not use expired USGCB/FDCC content"，SCAP 1.0 内容作为 expired content 归档在 National Checklist Program Repository，只供历史查阅。同一份 FAQ 又说 SCAP 1.2 的 USGCB/FDCC 内容仍可用于该场景——两句话指向的到底是同一批内容还是两批，待验证。

坊间常说 USGCB 已被 DISA STIG 取代。官方三个页面全文检索 STIG、transition、superseded 均为 0 命中，所以这个说法 待验证。从时间线和产品覆盖看方向大致成立，但没有官方文字支撑，写进合规文档前需要自己找依据。

## 覆盖范围

只到客户端，没有服务器：

| 类别 | 产品 |
|---|---|
| 操作系统 | Windows XP、Vista、7，各含 Firewall 变体 |
| 浏览器 | Internet Explorer 7、8 |
| 虚拟化 | Virtual Hard Disks |
| Linux | RHEL 5、RHEL 5 Desktop |

清单里没有任何 Windows Server 条目。产品列表停在 Windows 7 与 IE 8 这一代，这一点本身已经说明了维护状态。

## 技术形态

以 SCAP 分发，内容组成为 XCCDF + OVAL + CCE。FAQ 给出了版本映射：XCCDF 为 1.1.4 或 1.2，OVAL 覆盖 5.3 至 5.10。

SCAP（Security Content Automation Protocol）现行发布版是 1.3，由 NIST SP 800-126 Rev.3（2018-02）定义，1.4 仍在开发中。1.3 的组件包括 XCCDF、OVAL、OCIL、CPE、SWID Tags、CCE、CVE、CVSS、CCSS 与 XML Digital Signature，资产报告格式 ARF 在 SP 800-126r3 的 4.4 节。基线内容的集中分发处是 National Checklist Program。

SCAP 这套规范是 USGCB 留下的实际遗产。基线过期了，但「用机器可读格式描述配置要求并自动核查」的做法被 STIG、CIS 和各家合规扫描器沿用至今。

## 现在还该看什么

如果目的是拿到一份可自动核查的配置基线，USGCB 已无实用价值。可替代的有三条：[STIG](../US-STIGs/index.md) 同样走 SCAP，覆盖面和更新都还在；[CIS Benchmarks](../Global-CIS-Benchmarks/index.md) 免费 PDF，产品覆盖最广；国内合规场景则以等级保护 2.0 的要求项为准，见 [China-MLPS](../China-MLPS/index.md)。

USGCB 现在的用途是历史参照。理清 FDCC → USGCB → SCAP 1.3 这条线，有助于看懂 NIST 后续配置管理文档的来路，也解释了为什么今天的配置核查工具都长成 XCCDF + OVAL 这个样子。

## 参考

- NIST USGCB 项目页：`https://csrc.nist.gov/Projects/United-States-Government-Configuration-Baseline`
- 项目 FAQ（含 expired content 表述）：`https://csrc.nist.gov/Projects/United-States-Government-Configuration-Baseline/faqs`
- 官方备忘录清单：`https://csrc.nist.gov/Projects/United-States-Government-Configuration-Baseline/Official-Memoranda`
- SCAP 项目页与 SP 800-126 Rev.3：`https://csrc.nist.gov/projects/security-content-automation-protocol/`
- National Checklist Program：`https://ncp.nist.gov/repository`
