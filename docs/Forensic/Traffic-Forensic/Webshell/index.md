# Webshell 流量分析

## GET 型 PHP Webshell 直接执行

## POST 型 PHP Websehll 直接执行

## Webshell 管理工具

### 蚁剑

:::info 前置介绍
[antSword 蚁剑 官方仓库](https://github.com/AntSwordProject/antSword)
[antSword 蚁剑启动器 官方仓库](https://github.com/AntSwordProject/AntSword-Loader)
[蚁剑 - 介绍](../../../Penetration/Webshell/antSword/index.md)
:::

> 中国蚁剑是一款开源的跨平台网站管理工具，它主要面向于合法授权的渗透测试安全人员以及进行常规操作的网站管理员。
> 任何人不得将其用于非法用途以及盈利等目的，否则后果自行承担并将追究其相关责任！

蚁剑原生支持以下编解码器：

编码器：

- default
- base64
- chr
- chr16
- rot13

解码器：

- default
- base64
- rot13

不同的编解码器组合，会导致 webshell 的网络流量发生变化，编码器将影响蚁剑发送给 webshell 的流量数据，而解码器将影响 webshell 回复给蚁剑的流量数据

:::info 蚁剑流量解析
[antSword 蚁剑 编码器 流量解析](/docs/Forensic/Traffic-Forensic/Webshell/antSword-encoder)

[antSword 蚁剑 解码器 流量解析](/docs/Forensic/Traffic-Forensic/Webshell/antSword-decoder)
:::

### 冰蝎

TODO

### 菜刀

TODO
