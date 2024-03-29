---
sidebar_position: 0
sidebar_label: 电子取证
sidebar_class_name: green
---

# 电子取证

> ***Everything about Forensics***

电子取证，顾名思义，就是针对电子设备中的证据数据进行提取，并加以分析。根据取材的类型不同，可以分为磁盘取证，内存取证，流量分析等等；而根据目标设备的不同类型，可以分为 Windows 取证，Linux 取证，安卓设备取证，苹果设备取证等等。

对于电子取证而言，其实在入门阶段就存在一定的门槛，因为不同于常规的 CTF 方向，电子取证具有较高的数据敏感性和专业性，并且在常规的 CTF 竞赛中，电子取证的出场率和分数占比也不高，所以电子取证其实并没有被大多数选手所重视。但近些年，随着各大电子取证比赛降低门槛，邀请 ( 允许 ) 非警校的院校参加，而且 CTF 近几年的题目趋势越来越接近实战，电子取证在 CTF 竞赛中也逐渐占有了一席之地。

但同时也需要明白，都说大学里面只学了 CTF 以后毕业不好找工作，那么取证其实是更尴尬的位置，如果不是有相关专业或者警校这类强相关的环境，否则取证并不能给你以后的工作提供太大的帮助。

## [何为检材](./Sample-Types.md)

检材，泛指用于取证分析的材料，物理意义上的检材，指的是现场发现的电子设备，对其进行数据固定，数据提取并加以分析，而对于电子取证比赛来说，检材可以是各种由电子设备中提取出来的电子数据保存而来的镜像文件，然后以文件的形式发给选手，而选手需要对文件中储存的原始电子设备数据进行操作，例如挂载，仿真，亦或者直接进行分析。

在一般工作中，电子镜像文件已经越发常见，由于检材文件已经为固定形式，所以可以将一份物理检材固定为检材文件之后，多方分发，以此大大提高取证工作灵活性与工作效率

## [内存取证](./Memory-Forensic/index.md)

内存为易失性储存设备，电子设备在断电后的短时间内，内存中就会丢失数据，从而失去分析价值；但是随着技术的进步，只要在设备断电后快速将内存卸下，并接入专用设备，也可以从残留的数据中提取证据。更何况大部分情况下，取证人员可以直接在现场，保持设备通电开机的情况下，直接对目标设备的内存进行取证工作，从而给完整提取目标设备的内存数据提供了机会。

不同于直接对硬盘、手机、储存卡等设备进行取证，内存取证由于其为设备的内存数据，其天生就为电子取证的重要一点：因为设备在运行中，凡是涉及到数据的解析，在内存中大多都是以中间态或最后的明文态而存在；而在硬盘等设备中，数据可以进行加密，进行混淆，就大大增加了分析难度。故在电子取证中，内存取证往往为最为重要的一环。

## 磁盘取证

磁盘取证分析，是指对磁盘上的原始数据进行取证分析。磁盘数据存在多种分区方案，例如 `FAT32`，`NTFS`，`EXT 系列`，`ZFS`，`exFAT` 等等，不同的分区方案需要用不同的方式进行读取，才能正确读取到数据。同时，由于不同的分区方案有着不同的数据结构和分区表形式，如果涉及到磁盘数据损坏，还要考虑到分区表损坏的情形，那就要更进一步，涉及到数据恢复的领域。

单单对于磁盘数据的处理和分析的话，可以考虑使用相关的磁盘管理和维护工具，例如 `Diskgenius`，对于原始磁盘镜像的读取和挂载，可以使用 `FTK Imager`，而对磁盘的原始扇区数据进行读取，以及查看分区表数据等操作，可以使用 `DIskgenius` 等磁盘管理工具。

对磁盘上的数据进行取证分析，常用的开源两件套是 `Autopsy` 和 `FTK imager`，`Autopsy` 可以对磁盘数据进行静态分析，而 `FTK imager` 可以直接浏览磁盘的原始数据，并支持将磁盘镜像文件进行挂载，二者相结合可以满足磁盘取证分析的基本要求

## 仿真取证

不同于使用工具直接对数据镜像进行分析，仿真取证是从数据镜像中还原出目标设备的原始环境，然后模拟出直接在目标设备上进行操作的环境。为了保护目标设备上的数据不得篡改，防止证据被破坏，取证分析人员不会直接在目标设备上直接进行操作，而是提取镜像之后进行仿真取证。仿真取证具有静态取证分析不可比拟的优越性：快速、直观且直接。通过仿真的方式进行取证分析，分析人员可以模拟直接与目标设备进行交互，进而快速探测目标设备上的具体情况，进而可以与静态取证分析相结合，大大增加取证分析的效率；并且通过模拟直接与目标设备进行交互，可以绕过繁琐的数据静态分析，从而直接查看数据，例如查看浏览器的历史记录、浏览邮件往来、访问笔记软件中的页面等等。

仿真取证看似美好，但是受到检材格式的约束：部分检材的格式为虚拟磁盘文件，那么说明极大概率得到的检材为虚拟机提取出来的，就可以直接导入相对应的虚拟机软件中尝试直接启动；而对于像 `.raw`、`.e01` 和 `.dd` 等格式的原始磁盘数据镜像文件，能否进行仿真取证很大程度上取决于提取出来的分区数据中是否包含有启动分区，若没有启动分区数据，则很难进行仿真取证。但是，没有启动分区数据也并非代表不能进行仿真取证：取证分析人员在分析磁盘上存在的系统种类之后，可以尝试使用现有的启动分区 ( 如直接拷贝物理 `Windows` 环境中的启动分区 ) ，进而尝试进行仿真取证。

## 流量分析

按照一般的理解，流量分析应该是直接放在 Misc 里面的，电子取证只涉及对内存数据和磁盘数据的取证分析。但是，电子取证其本身就是对电子设备的数据进行取证分析，而流量数据其分析重要性和内存、磁盘数据是不相上下的，三者往往相互辅助，共同辅助构建目标设备的时间线痕迹的分析结果。

## 商业软件与开源方案

在磁盘取证中，我们已经接触到了开源方案：`Autopsy` 和商业软件：` 取证大师 `，` 火眼证据分析 ` 等等，可以发现无论是支持分析的痕迹种类，运行速度等等指标，商业软件都要比开源方案好上不少。那么孰优孰劣呢？在允许的情况下 ( 自身可以从正规渠道取得相关公司的软件许可 ) ，建议还是使用商业软件来进行取证工作，以大大方便取证工作的开展。

但是怀揣着开源精神，从一定角度上来讲，商业软件也并非绝对机密，它们的相关功能均可以从开源代码中找到相关的同等效果实现，例如 ` 取证大师 ` 的内存分析工具，其中就是用到了 `Volatility 2` 相关开源运行库，而相关浏览器痕迹分析 ( chromium 类和 Firefox 类浏览器中的浏览历史、页面缓存、用户保存的密码等等 ) 也可以找到相关开源代码。所以在无法取得相关商业软件授权的情况下，也不必灰心，完全可以依赖开源代码和自己的手速，来实现同等的效果 ( 没那么快就是了 )

~~国外的破解版软件也很香啊，比如 Passware Kit 和 AXIOM，既快又好用，前提是能找到没有私货的破解版~~

目前在国内，主流使用的商业取证软件可以分为三家，分别是美亚柏科 ( 取证大师 ) 、弘连网络 ( 火眼证据分析 ) 和盘古石，三家的软件各有优劣，但是核心功能大差不差，竞争点都集中在对数据预处理后的自动化分析上。

## Windows 取证

WIndows 作为用户基数最大的操作系统，自然大部分电子取证也都是针对 Windows 平台而展开工作。对于 Windows 的内存数据，一是 Microsoft 已经提供了各个版本系统内核所对应的内存数据符号表，二是由于 Windows 的内核版本相对较少，也更容易针对性的制作符号表文件，从而对内存数据进行精确分析；而对于 Windows 的硬盘数据，则不一定那么容易，由于 Windows 平台存在桌面环境，所以有部分敏感数据会以便签等形式存在于用户桌面，而且从 `Windows 7` 之后，Windows 可以启用 `Bitlocker` 硬盘加密功能，而这也进一步加大了对 Windows 硬盘数据进行分析取证的难度。

## Linux 取证

Linux 的分析相对棘手，从硬盘数据来说，Linux 支持 EXT 系列分区方案、FAT、ZFS 等等，不同的分区方案有各自的特点，需要不同的工具来针对性分析；而对于内存数据，Linux 并不像 Windows, Windows 的发行版内核可以方便确定，其内存数据的符号表也是便于获取的，而 Linux 需要手动针对不同版本的内核针对性的制作符号表，然后才能开展相关针对性的取证分析工作。

同时，Android 系统由于其底层基于 Linux，所以对于 Android 设备的取证分析也可以视作 Linux 取证分析中的特殊一类。

## Apple 取证

Apple 平台作为一个神奇的平台，其旗下的 Mac 电脑搭载类 Unix 系统，可以执行内存数据提取和硬盘镜像制作；而 iPhone 和 iPad 搭载 IOS 系统，由于其闭源的特性，使得除非直接对内存模块和硬盘模块直接飞线读取数据，否则没有办法制作镜像文件。但是，IOS 系统提供了备份的功能，电脑可以与 IOS 系统进行交互，取得 IOS 系统的完整备份数据 ( 备份数据可以设置密码 ) 。

:::info
资金有限，没有条件写分析文章呜呜
:::

## About RAID && ZFS

`Raid`，即 `Redundant Arrays of Independent Disks`，数块独立磁盘构成的具有冗余能力的阵列。通过构建 Raid 整列，可以将多块独立的物理硬盘整合为一个储存池，在便于管理的同时，可以提供比单块硬盘更加优秀的读写性能和风险冗余能力。但是 on the other hand，在提供多种高级特性的同时，阵列也是脆弱的，一旦多块硬盘同时发生数据校验错误，就可能发生阵列严重性错误，最终导致即使其他硬盘的工作状态完好，也无法再将数据提取出来，也就是直接火葬场。所以，在电子取证领域，数据恢复也是一大难题。

常见的 Raid 工作模式具体特点可以看下表：

| Raid 工作模式 | 数据安全性           | 所需磁盘数量 | 最多允许出错的磁盘数量 | 工作模式                                                                                                                                                       |
| ------------- | -------------------- | ------------ | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Raid 0        | Null                 | >2           | 0                      | 所有磁盘的可用容量合在一起，成为计算机上的一个逻辑卷。如果一个磁盘发生故障，所有磁盘的数据都将不可访问，因为数据分条到每个磁盘 里了                            |
| Raid 1        | 最安全 ( 1-1 备份 )  | >2           | 1                      | 两个磁盘合并后的 可用容量限制为最小磁盘的容量上限。如果 一个磁盘出现故障，可以立即从第二个磁盘上获取数据。即使 一个磁盘出现故障，也不会丢失任何数据            |
| Raid 5        | 一般 ( 奇偶校验 )    | >3           | 1                      | 数据会在所有磁盘之间分条，并且每个数据块的奇偶校验块写入到同一条带上。如果 一个磁盘出现故障，该磁盘上的数据可以重建到更换磁盘上                                |
| Raid 6        | 更好 ( 对比 Raid 5 ) | >5           | 2                      | RAID 6 的数据会在所有磁盘间进行分条，并且每个数据块的两个奇偶校验块写入到同一条带上。如果 一个磁盘出现故障，该磁盘上的数据可以重建到更换磁盘上                 |
| Raid 0+1      | 类似 Raid 1          | 4*n          | 1*n ( 在同一阵列下 )   | 在 RAID 0 + 1 中，五个磁盘的第五个磁盘 将成为 备用磁盘或空置磁盘。在 RAID 0 + 1 中，最多允许两个磁盘出现故障而不会丢失数据，但故障磁盘必须属于同一 RAID 0 队列 |
| Raid 10       | 类似 Raid 0+1        | 4*n          | 1*n                    |                                                                                                                                                                |
| JBOD          | Null                 | Null         | Null                   |                                                                                                                                                                |

| 相关资料参考自： [RAID：所有模式详解](https://blog.csdn.net/qq_21127151/article/details/118449568)

而 `ZFS`，即 `Zettabyte File System`，常见于新版本的 Linux 系统，ZFS 是基于存储池的，与典型的映射物理存储设备的传统文件系统不同，ZFS 所有在存储池中的文件系统都可以使用存储池的资源。其支持自动校验数据的完整性，并对数据压缩提供了支持。ZFS 与 Raid 相组合，可以组成 Raid-z 和 Raid-z2. Raid-z 和 Raid-z2 常见于基于 Linux 系统的 NAS 设备中 ( 如 Freenas, Truenas ) ，相较于传统的几大 Raid 模式，其整合了 Raid 的优点，并将 ZFS 的高级特性也带入了 Raid 储存池。

## About TrueCrtpt && Veracrypt

TrueCrypt 是一款免费开源的、多平台支持的开源加密软件，支持建立基于文件的虚拟磁盘，并支持大部分主流加密算法。其加密方案为完全真加密，最终所暴露在磁盘上的数据不具有任何特征 ( Magic Number ) ，故破解难度极大。但是 TrueCrypt 的开发工作在 Windows XP 终止支持了之后便停止了，取而代之的是 Varacrypt 的出现。Varacrypt 宣称继承了 Truecrypt 的源代码，并在不会影响加密性能和安全性的前提下，对其进行了改进。

目前对于此类加密方式，主流方案都不是强攻，因为强攻 ( 即暴力爆破密钥 ) 的密钥可能性 ( 尤其是使用了大密钥的 AES 算法 ) 过于迷茫，最终在有限时间内成功爆破出密钥的期望值无限接近于零；当下唯一具有较大可能性的破解方案，便是内存取证：已知任何软件的运算中间态和最终态，都会在内存中停留过，那么只要能获取到成功解密后的电脑的内存 ( 即使曾短暂断电过 ) ，便有机会在内存中获取到一定的信息，从而逆推出用户所使用的密钥。

同时，Truecrypt 有一段非常有意思的历史，直接牵扯到 Bitlocker 和 Veracrypt 的发展，这个改日再谈

## About Forensics In Github

- [HSNHK / Computer-forensics](https://github.com/HSNHK/Computer-forensics)
- [digitalisx / awesome-memory-forensics](https://github.com/digitalisx/awesome-memory-forensics)

## Acknowledgements

数据安全协创社团-DIDCTF： [DIDCTF-blog](https://blog.didctf.com/)  [电子数据取证 Wiki - DIDCTF](https://www.forensics-wiki.com/)
