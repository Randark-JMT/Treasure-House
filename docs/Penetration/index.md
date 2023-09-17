---
sidebar_position: 0
sidebar_label: 渗透测试
sidebar_class_name: green
---

# 渗透测试

> ***What is Penetration***

:::info 拥抱开源社区
💡 需要注意，本库只涵盖开源 / 免费方案，实现人人均可实现的体系，所以并不会包含一些商业化解决方案，如 `Cobalt Strike`
:::

## 渗透流程

按照 `The Cyber Kill Chain` 的相关设计，渗透测试分为以下七个步骤：

### [Reconnaissance - 侦察](./Reconnaissance/)

`Reconnaissance` 是网络杀伤链的第一阶段，涉及在进行任何渗透测试之前研究潜在目标。 侦察阶段可能包括识别潜在目标、发现其漏洞、发现哪些第三方与其连接（以及他们可以访问哪些数据）、探索现有入口点以及寻找新入口点。 侦察可以在线和离线进行。

### [Weaponization - 武器化](./Weaponization/)

网络杀伤链的 `Weaponization` 阶段发生在侦察发生并且攻击者发现有关潜在目标的所有必要信息（例如漏洞）之后。 在武器化阶段，攻击者的所有准备工作最终都会创建用于针对已识别目标的恶意软件。 武器化可以包括创建新型恶意软件或修改现有工具以用于网络攻击。 例如，网络犯罪分子可能会对现有勒索软件变体进行细微修改，以创建新的网络杀伤链工具。

### [Delivery - 交付](./Delivery/)

在 `Delivery` 阶段，网络武器和其他网络杀伤链工具用于渗透目标网络并接触用户。 传递可能涉及包含恶意软件附件的网络钓鱼电子邮件 ，其主题行会提示用户点击。 交付还可以采取侵入组织网络并利用硬件或软件漏洞渗透的形式。

### [Exploitation - 执行](./Exploitation/)

`Exploitation` 是交付和武器化之后的阶段。 在网络杀伤链的利用步骤中，攻击者利用他们在前一阶段发现的漏洞进一步渗透目标网络并实现其目标。 在此过程中，网络犯罪分子通常会在网络中横向移动以达到他们的目标。 如果网络负责人没有部署欺骗措施，利用有时可能会将攻击者引向目标。

### [Installation - 部署](./Installation/)

在网络犯罪分子利用目标的漏洞获取网络访问权限后，他们开始网络杀伤链的 `Installation` 阶段：尝试将恶意软件和其他网络武器安装到目标网络上，以控制其系统并窃取有价值的数据。 在此步骤中，网络犯罪分子可能会使用特洛伊木马、后门或命令行界面安装网络武器和恶意软件。

### [Command and Control- 命令与控制](./Command-and-Control/)

在网络杀伤链的 `Command and Control` 阶段，网络犯罪分子与他们安装到目标网络上的恶意软件进行通信，以指示网络武器或工具来实现其目标。 例如，攻击者可能使用通信渠道引导感染 Mirai 僵尸网络恶意软件的计算机使网站流量过载，或使用 C2 服务器指示计算机执行网络犯罪目标。

### [Actions on Objectives - 行动与目标](./Actions-on-Objectives/)

网络犯罪分子开发出网络武器，将其安装到目标网络并控制目标网络后，他们开始网络杀伤链的最后阶段：实现网络攻击目标。 虽然网络犯罪分子的目标因网络攻击的类型而异，但一些示例包括将僵尸网络武器化以通过分布式拒绝服务 (DDoS) 攻击中断服务、分发恶意软件以窃取目标组织的敏感数据以及使用勒索软件进行网络勒索工具。

## 常见漏洞

SQL 注入漏洞
远程文件包含漏洞
系统命令注入漏洞
模板注入漏洞
文件上传漏洞
跨站脚本（XSS）漏洞
目录遍历漏洞
配置错误漏洞
Web 服务器漏洞
Database 服务器漏洞
FTP 服务器漏洞
Mail 服务器漏洞
SSH 服务器漏洞
VNC 服务器漏洞
LDAP 服务器漏洞
网页编辑器漏洞
CMS 漏洞
弱口令漏洞
任意文件删除漏洞
任意文件读取漏洞

## 常见弱口令

FTP 弱口令
LDAP 弱口令
MYSQL 弱口令
POP3 弱口令
SMTP 弱口令
TELNET 弱口令
Web 弱口令
IMAP 弱口令
MSSQL 弱口令
ORACLE 弱口令
PCAnywhere 弱口令
Rsync 弱口令
SMB 弱口令
VMWARE 弱口令
VNC 弱口令
SSH 弱口令
RDP 弱口令
ONVIF 弱口令
Redis 弱口令
MongoDB 弱口令
Elasticsearch 弱口令
Sybase 弱口令
DB2 弱口令
SNMP 弱口令

## 常见网站攻击

文件包含
WebShell 上传

- 文件链接创建 WebShell
- 文件写入创建 WebShell
- 其他 WebShell 上传

目录遍历
网页挂马
代码注入

- SQL 注入
- XSS 攻击
- 系统命令注入
- 扩展注入
- XML 外部实体注入
- PHP 代码注入
- JAVA 代码注入
- Python 代码注入
- JavaScript 代码注入
- Perl 代码注入
- .NET 代码注入
- CRLF 注入
- LDAP 注入
- XPATH 注入
- JNDI 注入

信息泄露

- 系统信息泄露
- Web 组件信息泄露
- 源代码泄露
- 配置文件泄露
- 数据库文件泄露
- 凭据泄露
- Web 目录泄露
请求伪造

## 远程创建任务

ATSVC 创建服务
TSCH 创建服务
SVCCTL 创建服务

## Dos 攻击

TCP flood
UDP flood
SYN flood
DNS flood
ICMP flood
ARP flood
异常 IP 报文
未知协议 flood
CC 攻击防护
Dos 攻击

## 渗透框架

Empire

CobaltStrike

Metasploit

Burpsuite

SQLMap

manjusaka

havoc

Sliver
