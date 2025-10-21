---
slug: 2025-10-21-Deploy-Elastic-SIEM
title: 部署 Elastic SIEM
authors: Randark
tags: []
---

本文章介绍 Elastic SIEM 平台部署与使用

<!-- truncate -->

本文基于 `Ubuntu Server 24.04.3` 进行部署

```shell
randark@elastic-server:~$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 24.04.3 LTS
Release:        24.04
Codename:       noble
```

## 部署 Elasticsearch

参考 [Install Elasticsearch from archive on Linux or MacOS | Elastic Docs](https://www.elastic.co/docs/deploy-manage/deploy/self-managed/install-elasticsearch-with-debian-package)

执行

```shell
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg
sudo apt update
sudo apt-get install apt-transport-https
echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/9.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-9.x.list
# 添加 Elastic APT 仓库
sudo apt-get update && sudo apt-get install elasticsearch
```

理论上应当看到

```shell
randark@elastic-server:~$ wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg
randark@elastic-server:~$ sudo apt update
Get:4 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]
Hit:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble InRelease                              
Hit:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates InRelease                      
Hit:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-backports InRelease
Get:5 http://security.ubuntu.com/ubuntu noble-security/main amd64 Components [21.6 kB]
Get:6 http://security.ubuntu.com/ubuntu noble-security/restricted amd64 Components [212 B]
Get:7 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Components [52.3 kB]
Get:8 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 Components [208 B]                                                                                                                     
Fetched 200 kB in 7s (29.6 kB/s)                                                                                                                                                                               
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
28 packages can be upgraded. Run 'apt list --upgradable' to see them.
randark@elastic-server:~$ sudo apt-get install apt-transport-https
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following NEW packages will be installed:
  apt-transport-https
0 upgraded, 1 newly installed, 0 to remove and 28 not upgraded.
Need to get 3,970 B of archives.
After this operation, 36.9 kB of additional disk space will be used.
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/universe amd64 apt-transport-https all 2.8.3 [3,970 B]
Fetched 3,970 B in 1s (5,139 B/s)               
Selecting previously unselected package apt-transport-https.
(Reading database ... 87290 files and directories currently installed.)
Preparing to unpack .../apt-transport-https_2.8.3_all.deb ...
Unpacking apt-transport-https (2.8.3) ...
Setting up apt-transport-https (2.8.3) ...
Scanning processes...                                                                                                                                                                                           
Scanning linux images...                                                                                                                                                                                        

Running kernel seems to be up-to-date.

No services need to be restarted.

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.
randark@elastic-server:~$ echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/9.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-9.x.list
deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/9.x/apt stable main
```

在添加了 Elastic APT 仓库之后

```shell
randark@elastic-server:~$ sudo apt-get update && sudo apt-get install elasticsearch
Hit:1 http://cn.archive.ubuntu.com/ubuntu noble InRelease
Hit:2 https://artifacts.elastic.co/packages/9.x/apt stable InRelease
Get:3 http://cn.archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]
Hit:4 http://security.ubuntu.com/ubuntu noble-security InRelease
Hit:5 http://cn.archive.ubuntu.com/ubuntu noble-backports InRelease
Fetched 126 kB in 2s (81.8 kB/s)
Reading package lists... Done
N: Missing Signed-By in the sources.list(5) entry for 'http://cn.archive.ubuntu.com/ubuntu'
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following NEW packages will be installed:
  elasticsearch
0 upgraded, 1 newly installed, 0 to remove and 28 not upgraded.
Need to get 676 MB of archives.
After this operation, 1,299 MB of additional disk space will be used.
Get:1 https://artifacts.elastic.co/packages/9.x/apt stable/main amd64 elasticsearch amd64 9.1.5 [676 MB]
Fetched 660 MB in 42s (15.7 MB/s)                                                                                                                                                                              
Selecting previously unselected package elasticsearch.
(Reading database ... 87294 files and directories currently installed.)
Preparing to unpack .../elasticsearch_9.1.5_amd64.deb ...
Creating elasticsearch group... OK
Creating elasticsearch user... OK
Unpacking elasticsearch (9.1.5) ...
Setting up elasticsearch (9.1.5) ...
--------------------------- Security autoconfiguration information ------------------------------

Authentication and authorization are enabled.
TLS for the transport and HTTP layers is enabled and configured.

The generated password for the elastic built-in superuser is : e5v39XvVWLyCUdOwGWSV

If this node should join an existing cluster, you can reconfigure this with
'/usr/share/elasticsearch/bin/elasticsearch-reconfigure-node --enrollment-token <token-here>'
after creating an enrollment token on your existing cluster.

You can complete the following actions at any time:

Reset the password of the elastic built-in superuser with 
'/usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic'.

Generate an enrollment token for Kibana instances with 
 '/usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s kibana'.

Generate an enrollment token for Elasticsearch nodes with 
'/usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s node'.

-------------------------------------------------------------------------------------------------
### NOT starting on installation, please execute the following statements to configure elasticsearch service to start automatically using systemd
 sudo systemctl daemon-reload
 sudo systemctl enable elasticsearch.service
### You can start elasticsearch service by executing
 sudo systemctl start elasticsearch.service
Scanning processes...                                                                                                                                                                                           
Scanning linux images...                                                                                                                                                                                        

Running kernel seems to be up-to-date.

No services need to be restarted.

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.
```

## 配置 Elasticsearch

编辑 `/etc/elasticsearch/elasticsearch.yml` 文件，在其末尾加上

```yml
cluster.name: randark-elk
node.name: elk-1
network.host: 0.0.0.0
discovery.type: single-node
```

:::note

上述 yml 文件中，参数 `cluster.name` 和 `node.name` 可以按需更改

参数 `cluster.initial_master_nodes` 需要被注释，是因为需要的是单机部署

```yml
cluster.initial_master_nodes: ["elastic-server"]
```

:::

## 配置 Elasticsearch 服务

```shell
$ sudo systemctl daemon-reload
$ sudo systemctl enable elasticsearch.service
Created symlink /etc/systemd/system/multi-user.target.wants/elasticsearch.service → /usr/lib/systemd/system/elasticsearch.service.
```

启动服务后，查看状态

```shell
$ sudo systemctl start elasticsearch.service
$ sudo systemctl status elasticsearch.service
```

理论上应当看到

```shell
randark@elastic-server:~$ sudo systemctl status elasticsearch.service
● elasticsearch.service - Elasticsearch
     Loaded: loaded (/usr/lib/systemd/system/elasticsearch.service; enabled; preset: enabled)
     Active: active (running) since Tue 2025-10-21 13:28:30 UTC; 11s ago
       Docs: https://www.elastic.co
   Main PID: 3668 (java)
      Tasks: 80 (limit: 9379)
     Memory: 4.3G (peak: 4.3G)
        CPU: 1min 51.225s
     CGroup: /system.slice/elasticsearch.service
             ├─3668 /usr/share/elasticsearch/jdk/bin/java -Xms4m -Xmx64m -XX:+UseSerialGC -Dcli.name=server -Dcli.script=/usr/share/elasticsearch/bin/elasticsearch -Dcli.libs=lib/tools/server-cli -Des.path.h>
             ├─3732 /usr/share/elasticsearch/jdk/bin/java -Des.networkaddress.cache.ttl=60 -Des.networkaddress.cache.negative.ttl=10 -XX:+AlwaysPreTouch -Xss1m -Djava.awt.headless=true -Dfile.encoding=UTF-8 >
             └─3755 /usr/share/elasticsearch/modules/x-pack-ml/platform/linux-x86_64/bin/controller

Oct 21 13:27:23 elastic-server systemd[1]: Starting elasticsearch.service - Elasticsearch...
Oct 21 13:28:30 elastic-server systemd[1]: Started elasticsearch.service - Elasticsearch.
```

## 安装 Kibana 并配置

```shell
sudo apt install kibana
```

然后编辑 `/etc/kibana/kibana.yml` 配置文件

```yml
server.port: 5601
server.host: 0.0.0.0
server.name: randark-kibana
```

随后启动服务，应当能够看到

```shell
randark@elastic-server:~$ sudo systemctl start kibana
randark@elastic-server:~$ sudo systemctl status kibana
● kibana.service - Kibana
     Loaded: loaded (/usr/lib/systemd/system/kibana.service; disabled; preset: enabled)
     Active: active (running) since Tue 2025-10-21 13:58:01 UTC; 4s ago
       Docs: https://www.elastic.co
   Main PID: 5111 (node)
      Tasks: 11 (limit: 9379)
     Memory: 152.1M (peak: 152.4M)
        CPU: 5.192s
     CGroup: /system.slice/kibana.service
             └─5111 /usr/share/kibana/bin/../node/glibc-217/bin/node /usr/share/kibana/bin/../src/cli/dist

Oct 21 13:58:01 elastic-server systemd[1]: Started kibana.service - Kibana.
Oct 21 13:58:04 elastic-server kibana[5111]: {"log.level":"info","@timestamp":"2025-10-21T13:58:04.156Z","log.logger":"elastic-apm-node","ecs.version":"8.10.0","agentVersion":"4.13.0","env":{"pid":5111,"proc>
Oct 21 13:58:04 elastic-server kibana[5111]: Native global console methods have been overridden in production environment.
```

这个时候访问 5601 端口，应该能够看到

![img](img/image_20251000-220040.png)

## 为 Kibana 生成加密 key

```shell
randark@elastic-server:~$ sudo /usr/share/kibana/bin/kibana-encryption-keys generate
## Kibana Encryption Key Generation Utility

The 'generate' command guides you through the process of setting encryption keys for:

xpack.encryptedSavedObjects.encryptionKey
    Used to encrypt stored objects such as dashboards and visualizations
    https://www.elastic.co/guide/en/kibana/current/xpack-security-secure-saved-objects.html#xpack-security-secure-saved-objects

xpack.reporting.encryptionKey
    Used to encrypt saved reports
    https://www.elastic.co/guide/en/kibana/current/reporting-settings-kb.html#general-reporting-settings

xpack.security.encryptionKey
    Used to encrypt session information
    https://www.elastic.co/guide/en/kibana/current/security-settings-kb.html#security-session-and-cookie-settings


Already defined settings are ignored and can be regenerated using the --force flag.  Check the documentation links for instructions on how to rotate encryption keys.
Definitions should be set in the kibana.yml used configure Kibana.

Settings:
xpack.encryptedSavedObjects.encryptionKey: a99322106d2964fbc48666f98562a6aa
xpack.reporting.encryptionKey: f7b5d56daa013b43d42eef9c93cdfb7c
xpack.security.encryptionKey: 5814a2f69914478b0260255564e18f49
```

随后的配置在 `5601` webui 中进行配置

## Reference

[Security：如何安装 Elastic SIEM 和 EDR_elastic edr-CSDN博客](https://blog.csdn.net/UbuntuTouch/article/details/114023944)
