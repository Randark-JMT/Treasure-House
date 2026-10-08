---
sidebar_position: 0
sidebar_label: 工业控制
sidebar_class_name: green
---

# 工业控制

这一区收工业控制系统（ICS, Industrial Control Systems）与运营技术（OT, Operational Technology）场景下特有的内容：协议报文怎么写、控制设备怎么分层、标准怎么落地、专用工具怎么用。判断一条内容该不该放这里的标准是「它在办公网环境里是否还成立」——如果不成立，就属于这一区。

通用渗透手法在 [红蓝攻防](../Attack-Defense/index.md)，实验环境与靶场搭建在 [靶场与实验](../Lab/index.md)，这一区只保留 OT 场景下与它们不同的部分：资产不能随意重启、写操作会产生物理后果、停机窗口以月为单位、主流协议在设计年代根本没有考虑认证与加密。

## 收录范围

| 子目录 | 内容 |
|---|---|
| [01-Protocols](./01-Protocols/index.md) | 工控通信协议的报文结构、寻址模型与协议层安全问题，如 [Modbus](./01-Protocols/Modbus.md) |
| [02-Platforms](./02-Platforms/index.md) | PLC、RTU、DCS、SCADA、HMI 与工程站等平台设备的分层模型、接口形态与各自暴露面 |
| [03-Standards](./03-Standards/index.md) | 标准与合规框架，以及标准条款到现场措施的映射方法，如 [IEC 62443](./03-Standards/IEC-62443.md) |
| [04-Tooling](./04-Tooling/index.md) | 工控专用的抓包、扫描、仿真与监测工具，含主动操作的破坏性风险提示 |