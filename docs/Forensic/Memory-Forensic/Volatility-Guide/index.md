# Volatility 指南

## [如何安装 Volatility](./如何安装 Volatility.md)

对于`Volatility 2`，官方允许并推荐直接从源代码运行，而安装并不是必须的；而对于`Volatility 3`，则并不推荐直接从源码直接运行，而是通过`pip`执行安装。

从源码直接运行`Volatility`，可以更方便的对`Volatility`进行调整，例如增删插件，添加符号表等等，但是某些功能模块要求`Volatility`一定被安装才能使用；而安装后再使用`Volatility`，使用`Volatility`会更加的方便，但是对其进行功能调整的时候会更加麻烦。

## 如何使用 Volatility

Volatility本质上是一款命令行工具，不少用户会在初上手的时候望而却步，但是并不需要害怕。在使用Volatility进行内存分析的过程中，有着一些常规的流程和常用的模块，经过基本流程后大部分情况下就可以取得需要的信息。

## Volatility 中的各种插件

`Volatility`之所以叫做内存取证框架，是因为它在本身就提供了大部分取证工作时会用到的功能之外，也提供了大量基本的api和运行库，来支持第三方作者借助`Volatility Framework` 来开发插件，进而提高`Volatility`的能力。较为人熟知的插件，就例如`mimikatz for volatility`：通过读取Windows内存数据中SAM的缓存数据，从而得到Windows开机密码

另外，这里收集并整理了一份不同版本的Volatility模块之间的异同点，便于取证分析人员在两个版本Volatility之间进行过渡

## Volatility 中的符号表

另外，符号表（Symbol Tables）在使用Volatility开展内存分析工作的时候是十分重要的，虽说Volatility本身对Windows的内存数据提供了完善支持，但是对于Mac OS和Linux平台的内存数据，需要自己制作符号表，来让Volatility能够分析内存数据
