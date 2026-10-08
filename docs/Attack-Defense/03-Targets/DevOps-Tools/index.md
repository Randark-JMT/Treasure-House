---
sidebar_position: 0
sidebar_label: 运维工具
---

# DevOps Tools - 运维工具

本分类收录开发运维（Development and Operations，DevOps）工具链服务的攻击页面。

## 收录范围

七个工具可以按它们在工具链里的位置串起来看。构建这一头是 [Jenkins 未授权](./Jenkins.md) 和 [Sonarqube 未授权](./Sonarqube.md)，一个管持续集成，一个管代码质量。容器这一头是 [Docker 未授权](./Docker.md) 和 [Cadvisor 未授权](./Cadvisor.md)，前者是引擎的远程管理 API，后者是配套的容器监控。[Kong-admin 未授权](./Kong-admin.md) 是 API 网关的管理接口，[Swagger未授权](./Swagger.md) 是接口文档，这两个露出来的都是服务自身的元数据。[Jupyter 未授权](./Jupyter.md) 不太像链路上的一环，它是交互式的分析环境。

七个页面清一色以「未授权」命名。这类工具的管理接口默认自己待在可信内网里，假设一旦不成立，接口本身就是入口。字母序索引如下：

| 工具 | 页面 |
| :----------- | :------- |
| Cadvisor | [Cadvisor 未授权](./Cadvisor.md) |
| Docker | [Docker 未授权](./Docker.md) |
| Jenkins | [Jenkins 未授权](./Jenkins.md) |
| Jupyter | [Jupyter 未授权](./Jupyter.md) |
| Kong-admin | [Kong admin 未授权](./Kong-admin.md) |
| Sonarqube | [Sonarqube 未授权](./Sonarqube.md) |
| Swagger | [Swagger未授权](./Swagger.md) |
