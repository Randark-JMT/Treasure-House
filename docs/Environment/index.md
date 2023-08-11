---
sidebar_position: 0
sidebar_label: 环境配置
sidebar_class_name: green
---

# 环境配置

> ***Environment for live and dead***

一个正确的环境对高效的学习是密不可分的，谁也不想自己想要编译 c 语言的时候 gcc 崩了，谁也不想想要 php 调试的时候，php xdebug 出现无法连接，所以一个正确的、稳定的的环境是十分重要的

## Virtual Machine

## Docker

Docker环境是目前最普及的轻量化、快速化的容器环境工具，可以在短时间内方便的启动容器化环境，同时由于只是容器化方案，所以并不会带来像虚拟机那样子高性能损耗的问题，Docker可以达到几乎物理机的性能水平

## Kubernetes

Kubernetes一个开源的，用于管理云平台中多个主机上的容器化的应用，其本质上只是一个管理平台，原本的主流容器化核心是Docker，现在的Kubernetes容器化核心则是转为了contained ，理由如下：

- 更轻量级 - containerd 比 Docker 更轻量和模块化,运行时开销更小。这在 Kubernetes 等大规模集群环境下很重要。
- 更好隔离 - Docker 使用整个宿主机内核,容器之间隔离性不强。而 containerd 基于 runc 使用 namespace 和 cgroups 提供更好的资源隔离。
- 更易维护 - Docker 的代码库庞大,维护困难。containerd 模块较少,代码更精简,维护更容易。
- 更易扩展 - containerd 通过 CRI 接口支持多个运行时,更易扩展。而 Docker 不符合 CRI 标准,不易实现多运行时支持。
- 去 Docker 依赖 - Kubernetes 项目希望减少对特定厂商技术的依赖。采用 containerd 可以避免对 Docker 的依赖。
- 更好安全隔离 - containerd 默认开启 seccomp 等安全隔离,默认提供更高安全性。
- 更好 Windows 支持 - containerd 对 Windows 的支持更加友好,Docker 在 Windows 支持上有一些问题。
