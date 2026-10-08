---
sidebar_position: 1
sidebar_label: Dockerfile 指南
sidebar_class_name: green
---

# Dockerfile 指南

## Dockerfile 基本语句

Dockerfile文件本身可以看作是编译控制流的一种，通过相关语句可以同时最终docker镜像的编译成果。在Dockerfile中，可以实现命令执行，文件传输，环境变量控制，标签控制，容器入口点控制等等

文件传输类有：

- COPY
- ADD

命令执行有：

- RUN

容器入口点控制有：

- CMD
- ENTRYPOINT

标签控制有：

- TAG
