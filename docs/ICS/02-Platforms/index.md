---
sidebar_position: 0
sidebar_label: 工控平台
---

# 工控平台

这一目录收设备与系统平台本身：它们各自负责什么、处在分层的哪一级、暴露哪些接口、固件与工程软件的版本差异如何影响结论。

## 分层参考

现场普遍采用普渡模型（Purdue Model）描述层级，其标准化形式为 IEC 62264：

| 层级 | 定位 | 典型平台 |
|---|---|---|
| Level 0 | 物理过程 | 被控对象、传感器、执行机构 |
| Level 1 | 基础控制 | PLC（可编程逻辑控制器）、RTU（远程终端单元）、DCS 控制站、PAC、安全仪表系统 |
| Level 2 | 区域监控 | SCADA（数据采集与监视控制系统）、HMI（人机界面）、DCS 操作站、报警管理 |
| Level 3 | 生产运营管理 | MES、历史数据库 Historian、批次与质量管理 |
| Level 3.5 | 工业隔离区 DMZ | 跨层数据交换的中转与单向控制 |
| Level 4 | 企业经营 | ERP、供应链管理 |
| Level 5 | 企业网络 | 办公网，不属于 IACS 范围 |

历史数据库的层级归属在不同资料中不一致，常见于 Level 2 与 Level 3 之间；DCS 本身横跨 Level 1 与 Level 2，控制站在下、操作站在上。

工程站（Engineering Workstation）不单独占一层，它横跨 Level 1 到 Level 3。编程与组态软件（如 Siemens TIA Portal、Rockwell Studio 5000、Omron CX-Programmer、Schneider Control Expert）通过厂商专有协议向 PLC 下载程序，这条通道的权限通常高于任何监控协议，是平台侧最需要单独立项的对象。

## 收录范围

| 对象 | 内容 |
|---|---|
| PLC / PAC | 运行模式与保护机制、程序下载通道、固件更新方式、内置 Web 管理界面 |
| RTU | 远程站点的通信链路、供电约束、本地维护接口 |
| DCS | 控制站与操作站架构、冗余机制、组态工具链 |
| SCADA / HMI | 主站系统、画面组态、与 Historian 的数据流、账户体系 |
| 工程站与组态软件 | 工程文件结构、程序反编译、离线仿真 |
| 工控安全设备 | 工控防火墙、单向网闸、审计探针的能力边界与部署位置 |
