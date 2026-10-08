---
sidebar_position: 0
sidebar_label: 数据存储
---

# Data Store - 数据存储

本分类收录数据存储与大数据生态服务的攻击页面，覆盖数据库、检索引擎与数据处理组件，共九个。

## 收录范围

下表没有沿用字母序，按暴露面大小排了个大概。Redis、MongoDB、Elasticsearch 打头，三者的攻击页面都直接以「未授权」命名，入口就是服务接口本身，不需要先拿到凭据，是这一批里暴露面最大的一档。

Hadoop 与 Spark 紧随其后，暴露点在大数据平台的管理与作业接口上，页面同样是未授权主题。Solr 的标题点明是 API 未授权。CouchDB 也属于这一档，存量比前面几个小。

Mysql 和 DragonflyDB 垫底。九个里面只有这两个的页面标题不带「未授权」：Mysql 有认证拦在门口，实际入口多半是口令而不是裸接口；DragonflyDB 则是个较新的面孔。

| 服务 | 页面 |
| :------------ | :------- |
| Redis | [Redis 未授权](./Redis.md) |
| MongoDB | [MongoDB 未授权](./MongoDB.md) |
| Elasticsearch | [Elasticsearch 未授权](./Elasticsearch.md) |
| Hadoop | [Hadoop 未授权](./Hadoop.md) |
| Spark | [Spark 未授权](./Spark.md) |
| Solr | [Solr API 未授权](./Solr.md) |
| CouchDB | [CouchDB 未授权](./CouchDB.md) |
| Mysql | [Mysql](./Mysql.md) |
| DragonflyDB | [DragonflyDB](./DragonflyDB.md) |
