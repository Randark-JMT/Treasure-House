---
sidebar_position: 0
sidebar_label: 工控协议
---

# 工控协议

这一目录收工业控制系统中实际在跑的通信协议：报文结构、寻址模型、数据对象划分，以及协议在设计层面留下的安全缺口。

## 收录范围

| 类别 | 代表协议 |
|---|---|---|
| 串行现场总线 | [Modbus](./Modbus.md) RTU、Modbus ASCII、PROFIBUS |
| 工业以太网 | Modbus TCP（TCP 502）、PROFINET、EtherNet/IP（TCP 44818、UDP 2222）、S7comm（TCP 102）、EtherCAT |网 |
| 电力行业 | IEC 60870-5-104（TCP 2404）、IEC 61850（MMS 走 TCP 102，另有 GOOSE 与采样值）、DNP3（TCP 20000） |
| 过程与楼宇 | OPC UA（TCP 4840）、BACnet/IP（UDP 47808）、HART 与 WirelessHART、FOUNDATION Fieldbus |
| 安全增强变体 | Modbus TCP Security（TLS，TCP 802）、IEC 62351 对电力协议的加固 |
| 厂商专有 | 各厂商的编程、程序下载与诊断协议 | 公开文档少，实现细节 待验证 

## 收录约定

- 报文结构与功能码以协议组织发布的规范原文为准，字段偏移与长度逐位核对后再写；未核对的标「待验证」。
- 端口号只写规范定义的默认值，现场实际的端口映射以勘察结果为准，不用默认值代替实测值。
- 具体 CVE 编号、受影响固件版本与厂商实现差异不在本目录展开，标注「待验证」后转到 [02-Platforms](../02-Platforms/index.md)。
- 协议安全问题的写法固定为「设计缺陷」与「实现缺陷」两类分开，前者是协议无解的，后者可通过补丁收敛，混写会误导加固决策。
