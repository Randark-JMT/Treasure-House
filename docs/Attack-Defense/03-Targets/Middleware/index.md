---
sidebar_position: 0
sidebar_label: 中间件
---

# Middleware - 中间件

本分类收录中间件与应用框架服务的攻击页面。五个组件的跨度不小，从整台应用服务器到藏在应用内部的连接池都在里面。

## 收录范围

五个组件的攻击页面都以「未授权」命名，但入口形态各不相同：应用服务器、应用框架、RPC 框架与连接池各有各的暴露面。类型标在下表第二列，按组件名排序。

| 组件 | 类型 | 页面 |
| :-------- | :------------- | :------- |
| Druid | 数据库连接池 | [Druid未授权](./Druid.md) |
| Dubbo | RPC 服务框架 | [Dubbo未授权](./Dubbo.md) |
| JBoss | 应用服务器 | [JBoss API 未授权](./JBoss.md) |
| Spring | 应用框架 | [Spring未授权](./Spring.md) |
| WebLogic | 应用服务器 | [WebLogic 未授权](./WebLogic.md) |
