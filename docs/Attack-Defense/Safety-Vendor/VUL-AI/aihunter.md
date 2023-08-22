# 灵源 · 高级威胁检测与分析系统

## 菜单结构

```mermaid
graph TD;
    灵源 --> 威胁态势;
    灵源 --> 护网工作台;
    灵源 --> 威胁分析;
    灵源 --> 威胁报告;
    灵源 --> 响应处置;
    灵源 --> 资产管理;
    灵源 --> 日志检索;
    灵源 --> 离线分析;
    灵源 --> 系统管理;
```

```mermaid
graph TD;
    威胁态势 --> 总览;
    威胁态势 --> 态势大屏;
```

```mermaid
graph TD;
    威胁分析 --> 文件分析;
    威胁分析 --> 邮件分析;
    威胁分析 --> 暗网流量追溯;
    威胁分析 --> 恶意加密流量追溯;
```

```mermaid
graph TD;
    威胁报告 --> 报告列表;
    威胁报告 --> 周期报告设置;
```

```mermaid
graph TD;
    响应处置 --> 威胁响应策略;
    响应处置 --> 邮件设置;
    响应处置 --> 平台设置;
    响应处置 --> Kafka设置;
    响应处置 --> Syslog设置;
```

```mermaid
graph TD;
    资产管理 --> 资产列表;
    资产管理 --> 资产组;
    资产管理 --> 资产网段;
```

```mermaid
graph TD;
    日志检索 --> 威胁日志;
    日志检索 --> 文件检测日志;
    日志检索 --> 网络日志;
```

```mermaid
graph TD;
    离线分析 --> 流量包分析;
    离线分析 --> 文件分析;
```

```mermaid
graph TD;
    系统管理-第一层 --> 系统状态;
    系统管理-第一层 --> 规则管理;
    系统管理-第一层 --> 策略管理;
    系统管理-第一层 --> 黑白名单;
    系统管理-第一层 --> 网络设置;
    系统管理-第一层 --> 升级管理;
    系统管理-第一层 --> 用户管理;
    系统管理-第一层 --> 系统诊断;
```

```mermaid
graph TD;
    系统管理-第二层 --> 系统时间;
    系统管理-第二层 --> 安全性设置;
    系统管理-第二层 --> 系统维护;
    系统管理-第二层 --> 全流量储存配置;
```

## 护网工作台

监控 && 研判的工作核心，看日志就好了：

![灵源 护网工作台 首页](img/image_20230827-102744.png)

在上方的检测场景已经内置了许多常用筛选条件，其实就为筛选条件的集合，如

- 攻击成功
- 重要且疑似成功事件
- 重点关注事件
- 热点漏洞
- CobaltStrike威胁情报
- 挖矿风险主机
- 挖矿木马
- 勒索软件
- 恶意软件
- Log4j漏洞
- OA漏洞
- Web攻击
- 注入攻击
- 代码执行
- WebShell
- 恶意外联
- 钓鱼邮件
- 黑客工具
- 网络和路由设备漏洞
- 异常登录
- 信息泄露
- 扫描探测
- 人工智能引擎事件
- 僵木蠕威胁情报

可以在查询区域，手动添加检测场景：

![灵源 护网工作台 检测场景控制](img/image_20230801-110120.png)

如我本人常用的检测场景（查询条件）

```plaintext
NOT target : "POP3协议弱口令登录" AND NOT target : "HTTP协议弱口令登录" AND NOT target : "Remote control tool Sunlogin is found in traffic" AND NOT target : "web明文密码泄露" AND NOT target : "IMAP协议弱口令登录" AND NOT target : "web明文密码泄露(管理员账号)" AND NOT target : "SMTP协议弱口令登录" AND NOT target : "致远OA的web明文密码泄露" AND NOT target : "HTTP协议致远OA弱口令登录" AND NOT target : "HTTP协议弱口令登录(管理员账号)" AND NOT target : "致远OA的web明文密码泄露(管理员账号)" AND NOT target : "Phone number leaked" AND NOT target : "Remote control tool Todesk is found in traffic" AND NOT category : "maybe-mal-spam-mail" AND NOT target : "Phone number leaked successfully"
```

双击告警，即可查看告警详情：

![灵源 护网工作台 告警详情](img/image_20230804-110411.png)

## 资产管理

资产管理位于：资产管理 - 资产列表

在这里，可以给具体的ip段和ip地址打上标签，便于在告警工作台上分辨出来具体的资产归属

![灵源 资产管理](img/image_20230808-110805.png)
