# 如何制作内存镜像

## Windows 内存镜像

Windows 由于其存在固定的发行版本与固定的内核版本，所以其内存镜像的制作是相对容易的，可以使用以下工具进行内存镜像的制作

:::info 权限注意
由于制作内存镜像时，需要访问完整的内存数据（包括核心敏感区），所以需要管理员权限
:::

### [MAGNET RAM Capture](https://www.magnetforensics.com/resources/magnet-ram-capture/)

由 MAGNET 公司所公开的一款免费 Windows 平台内存提取工具，对多个 Windows 版本都提供了支持

其前身为最为常用的 DumpIt

### [WinPmem](https://github.com/Velocidex/WinPmem)

WinPmem 是一个开源项目，通过直接控制设备接口，从而为获取设备内存数据提供了更多的可能性

### [FTK Imager](https://www.exterro.com/ftk-imager)

FTK Imager 被人广为所知的，是其磁盘镜像的读取与挂载功能，其实其也自带有强大的内存镜像制作功能

## Linux 内存镜像

### [img](https://github.com/halpomeranz/lmg)

相对比较古老的工具了（最后一次源码更新是在 2020 年），但是仍然活跃在一线取证现场

### [LiME](https://github.com/504ensicsLabs/LiME)

LiME 最初用于 Android 设备的内存提取工作，但是也可以对 Linux 系统的内存镜像进行读取

### [AVML](https://github.com/microsoft/avml)

作为微软官方出品的 Linux 内存镜像制作工具，其速度优异，并且提供了良好的兼容性

:::info 参考资料
[How to Perform Memory Forensic Analysis in Linux Using Volatility 3](https://cpuu.hashnode.dev/how-to-perform-memory-forensic-analysis-in-linux-using-volatility-3)
:::

## Mac OS 内存镜像

笔者没钱，有钱再说（别跟我说黑苹果，M 系列芯片的安全行为虚拟机可模拟不了）
