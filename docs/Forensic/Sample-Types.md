---
sidebar_position: 1
sidebar_label: 检材类型
sidebar_class_name: green
---

# 常见的检材类型

## 位对位镜像: 全盘或分区镜像文件

- E01
- Ex01
- DD/Raw Image(原始数据镜像)
- AFF
- Smart

## 特定数据镜像: 逻辑证据文件

- L01
- Lx01
- AD1

## 虚拟磁盘

- VMDK
- VHD
- VHDX
- VDI

## 内存数据镜像

- vmem（VMware 虚拟机内存数据镜像）
- vmsn（VMware snapshot）

## 原始数据镜像

- raw

## 文件特点

### E01 证据文件

- 支持无损压缩，精确镜像源介质中的数据;
- 可记录证据制作过程相关信息;
- 支持对源盘进行哈希计算并将其记录在证据文件内部;
- 支持证据文件的密码保护;
- 符合司法规范，通过美国法庭验证。

### Ex01 文件

- 支持对数据块的加密 (AES 256)，支持采用密码或非对称密钥(公钥 / 私钥) 方式对证据文件进行保护;
- 压缩方法上不需要具体指定某一种压缩方法, 压缩功能只提供 “启用” 和“禁用”。

### DD 文件

- 兼容性较强，多数取证分析工具均支持该格式;
- 对原始数据进行获取，不经过压缩，速度快;

## 可用于处理镜像的软件列表

| 类型         | 名称                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 免费镜像工具 | 美国 FTK imager，美国 Encase Imager/Tableau Imager，美国 Paladin 俄罗斯 Belkasoft Acquisition Tool 美国 Autopsy 中国流火镜像大师 Myhex 加拿大 Magnet Acquire |
| 商业镜像工具 | 德国 Xways Imager 美国 MacQuisition 美国 Smart Linux                                                                                                     |
| 免费挂载工具 | 美国 Arsenal Imager Mounter 美国 FTK Imager                                                                                                              |
| 商业挂载工具 | 澳大利亚 Mount Image Pro 美国 Arsenal Imager Mounter 专业版 中国流火挂载                                                                                  |
