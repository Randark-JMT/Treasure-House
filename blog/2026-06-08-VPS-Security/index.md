---
slug: 2026-06-08-VPS-Security
title: 安全配置 命令笔记
authors: Randark
tags: []
---

安全配置记录

<!-- truncate -->

允许已建立的连接（防止打断现有操作）

```shell
iptables -I INPUT -i eth0 -m state --state ESTABLISHED,RELATED -j ACCEPT
```

更改 SSH 端口

```shell
# 检查默认端口
root@jmt-projekt-replica1:~# cat /etc/ssh/sshd_config | grep Port
Port 22
GatewayPorts no

# 更改端口
root@jmt-projekt-replica1:~# nano /etc/ssh/sshd_config
......
root@jmt-projekt-replica1:~# cat /etc/ssh/sshd_config | grep Port
Port 23422
GatewayPorts no
```

允许指定的 TCP 端口 (22, 80, 443, 21114-21119)

```shell
# 允许 SSH
iptables -A INPUT -i eth0 -p tcp --dport 23422 -j ACCEPT
# 允许 Web 服务
iptables -A INPUT -i eth0 -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -i eth0 -p tcp --dport 443 -j ACCEPT
# 允许 Rustdesk
iptables -A INPUT -i eth0 -p tcp --dport 21114:21119 -j ACCEPT
# 插入 允许 Portainer Edge Compute
iptables -I INPUT 8 -i eth0 -p tcp --dport 8000 -j ACCEPT
```

允许指定的 UDP 端口 (21116)

```shell
iptables -A INPUT -i eth0 -p udp --dport 21116 -j ACCEPT
```

丢弃 eth0 的其他所有入站流量

```shell
iptables -A INPUT -i eth0 -j DROP
```

持久化保存

```shell
# Debian/Ubuntu
iptables-save > /etc/iptables/rules.v4
# CentOS/RHEL
service iptables save
```

## 检查配置

```shell
root@jmt-projekt-replica1:~# iptables -v -n -L
Chain INPUT (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination         
 449K  147M ACCEPT     all  --  eth0   *       0.0.0.0/0            0.0.0.0/0            state RELATED,ESTABLISHED
  33M   30G ts-input   all  --  *      *       0.0.0.0/0            0.0.0.0/0           
    2   104 ACCEPT     tcp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            tcp dpt:23422
  275 14555 ACCEPT     tcp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            tcp dpt:80
 3279  199K ACCEPT     tcp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            tcp dpt:443
    0     0 ACCEPT     tcp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            tcp dpts:21114:21119
    0     0 ACCEPT     udp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            udp dpt:21116
22945 1240K DROP       all  --  eth0   *       0.0.0.0/0            0.0.0.0/0           

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination         
  44M   40G ts-forward  all  --  *      *       0.0.0.0/0            0.0.0.0/0           
 177M  120G DOCKER-USER  all  --  *      *       0.0.0.0/0            0.0.0.0/0           
 177M  120G DOCKER-FORWARD  all  --  *      *       0.0.0.0/0            0.0.0.0/0           

Chain OUTPUT (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination         

Chain DOCKER (9 references)
 pkts bytes target     prot opt in     out     source               destination         
    0     0 ACCEPT     tcp  --  !br-aa6d32cbd66c br-aa6d32cbd66c  0.0.0.0/0            172.25.0.3           tcp dpt:3002
    0     0 ACCEPT     tcp  --  !br-aa6d32cbd66c br-aa6d32cbd66c  0.0.0.0/0            172.25.0.3           tcp dpt:3001
  155  8596 ACCEPT     tcp  --  !br-46b3f0a62ae2 br-46b3f0a62ae2  0.0.0.0/0            172.22.0.6           tcp dpt:8080
   73  4232 ACCEPT     tcp  --  !br-46b3f0a62ae2 br-46b3f0a62ae2  0.0.0.0/0            172.22.0.3           tcp dpt:3000
   40  2096 ACCEPT     tcp  --  !br-46b3f0a62ae2 br-46b3f0a62ae2  0.0.0.0/0            172.22.0.4           tcp dpt:3000
   59  3296 ACCEPT     tcp  --  !br-46b3f0a62ae2 br-46b3f0a62ae2  0.0.0.0/0            172.22.0.2           tcp dpt:8000
   87  4992 ACCEPT     tcp  --  !br-7fd53512e039 br-7fd53512e039  0.0.0.0/0            172.23.0.2           tcp dpt:9443
   18   832 ACCEPT     tcp  --  !br-7fd53512e039 br-7fd53512e039  0.0.0.0/0            172.23.0.2           tcp dpt:9080
 8431  573K ACCEPT     udp  --  !br-7fd53512e039 br-7fd53512e039  0.0.0.0/0            172.23.0.2           udp dpt:3478
 122K 7297K ACCEPT     tcp  --  !docker0 docker0  0.0.0.0/0            172.17.0.2           tcp dpt:9001
  168  9096 ACCEPT     tcp  --  !br-dcf9d454b2fe br-dcf9d454b2fe  0.0.0.0/0            172.24.0.2           tcp dpt:8888
 1567 92788 ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21119
  768 44900 ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21118
  999 56664 ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21117
 1338 58725 ACCEPT     udp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           udp dpt:21116
  896 49420 ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21116
 1100 61312 ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21115
 613K   32M ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21114
  286 15212 ACCEPT     tcp  --  !br-7694694aea74 br-7694694aea74  0.0.0.0/0            172.18.0.2           tcp dpt:8080
    0     0 DROP       all  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            0.0.0.0/0           
    0     0 DROP       all  --  !br-7694694aea74 br-7694694aea74  0.0.0.0/0            0.0.0.0/0           
    0     0 DROP       all  --  !br-a53d2d8b19fe br-a53d2d8b19fe  0.0.0.0/0            0.0.0.0/0           
    0     0 DROP       all  --  !br-dcf9d454b2fe br-dcf9d454b2fe  0.0.0.0/0            0.0.0.0/0           
    0     0 DROP       all  --  !docker0 docker0  0.0.0.0/0            0.0.0.0/0           
    0     0 DROP       all  --  !br-7fd53512e039 br-7fd53512e039  0.0.0.0/0            0.0.0.0/0           
    0     0 DROP       all  --  !br-46b3f0a62ae2 br-46b3f0a62ae2  0.0.0.0/0            0.0.0.0/0           
    0     0 DROP       all  --  !br-aa6d32cbd66c br-aa6d32cbd66c  0.0.0.0/0            0.0.0.0/0           
    0     0 DROP       all  --  !br-fa429b1bf360 br-fa429b1bf360  0.0.0.0/0            0.0.0.0/0           

Chain DOCKER-BRIDGE (1 references)
 pkts bytes target     prot opt in     out     source               destination         
 620K   32M DOCKER     all  --  *      br-5fb62ddc9413  0.0.0.0/0            0.0.0.0/0           
  286 15212 DOCKER     all  --  *      br-7694694aea74  0.0.0.0/0            0.0.0.0/0           
    0     0 DOCKER     all  --  *      br-a53d2d8b19fe  0.0.0.0/0            0.0.0.0/0           
  168  9096 DOCKER     all  --  *      br-dcf9d454b2fe  0.0.0.0/0            0.0.0.0/0           
 122K 7297K DOCKER     all  --  *      docker0  0.0.0.0/0            0.0.0.0/0           
 8536  579K DOCKER     all  --  *      br-7fd53512e039  0.0.0.0/0            0.0.0.0/0           
  327 18220 DOCKER     all  --  *      br-46b3f0a62ae2  0.0.0.0/0            0.0.0.0/0           
    0     0 DOCKER     all  --  *      br-aa6d32cbd66c  0.0.0.0/0            0.0.0.0/0           
    0     0 DOCKER     all  --  *      br-fa429b1bf360  0.0.0.0/0            0.0.0.0/0           

Chain DOCKER-CT (1 references)
 pkts bytes target     prot opt in     out     source               destination         
  85M   56G ACCEPT     all  --  *      br-5fb62ddc9413  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
 1352  105K ACCEPT     all  --  *      br-7694694aea74  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
    0     0 ACCEPT     all  --  *      br-a53d2d8b19fe  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
  886  102K ACCEPT     all  --  *      br-dcf9d454b2fe  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
4367K  772M ACCEPT     all  --  *      docker0  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
59314 4057K ACCEPT     all  --  *      br-7fd53512e039  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
 2050  181K ACCEPT     all  --  *      br-46b3f0a62ae2  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
    0     0 ACCEPT     all  --  *      br-aa6d32cbd66c  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
    0     0 ACCEPT     all  --  *      br-fa429b1bf360  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED

Chain DOCKER-FORWARD (1 references)
 pkts bytes target     prot opt in     out     source               destination         
 177M  120G DOCKER-CT  all  --  *      *       0.0.0.0/0            0.0.0.0/0           
  87M   63G DOCKER-INTERNAL  all  --  *      *       0.0.0.0/0            0.0.0.0/0           
  87M   63G DOCKER-BRIDGE  all  --  *      *       0.0.0.0/0            0.0.0.0/0           
  82M   57G ACCEPT     all  --  br-5fb62ddc9413 *       0.0.0.0/0            0.0.0.0/0           
 1340  852K ACCEPT     all  --  br-7694694aea74 *       0.0.0.0/0            0.0.0.0/0           
    0     0 ACCEPT     all  --  br-a53d2d8b19fe *       0.0.0.0/0            0.0.0.0/0           
  865  671K ACCEPT     all  --  br-dcf9d454b2fe *       0.0.0.0/0            0.0.0.0/0           
4053K 6007M ACCEPT     all  --  docker0 *       0.0.0.0/0            0.0.0.0/0           
67742 4912K ACCEPT     all  --  br-7fd53512e039 *       0.0.0.0/0            0.0.0.0/0           
 2064 1895K ACCEPT     all  --  br-46b3f0a62ae2 *       0.0.0.0/0            0.0.0.0/0           
    0     0 ACCEPT     all  --  br-aa6d32cbd66c *       0.0.0.0/0            0.0.0.0/0           
    0     0 ACCEPT     all  --  br-fa429b1bf360 *       0.0.0.0/0            0.0.0.0/0           

Chain DOCKER-INTERNAL (1 references)
 pkts bytes target     prot opt in     out     source               destination         

Chain DOCKER-USER (1 references)
 pkts bytes target     prot opt in     out     source               destination         

Chain ts-forward (1 references)
 pkts bytes target     prot opt in     out     source               destination         
    0     0 MARK       all  --  tailscale0 *       0.0.0.0/0            0.0.0.0/0            MARK xset 0x40000/0xff0000
    0     0 ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            mark match 0x40000/0xff0000
    0     0 DROP       all  --  *      tailscale0  100.64.0.0/10        0.0.0.0/0           
    0     0 ACCEPT     all  --  *      tailscale0  0.0.0.0/0            0.0.0.0/0           

Chain ts-input (1 references)
 pkts bytes target     prot opt in     out     source               destination         
    0     0 ACCEPT     all  --  lo     *       100.91.107.35        0.0.0.0/0           
 1859  193K ACCEPT     all  --  tailscale0 *       0.0.0.0/0            0.0.0.0/0           
  668 42288 ACCEPT     udp  --  *      *       0.0.0.0/0            0.0.0.0/0            udp dpt:41641
    0     0 RETURN     all  --  !tailscale0 *       100.115.92.0/23      0.0.0.0/0           
    0     0 DROP       all  --  !tailscale0 *       100.64.0.0/10        0.0.0.0/0           
root@jmt-projekt-replica1:~# iptables -v -n --line-numbers -L
Chain INPUT (policy ACCEPT 0 packets, 0 bytes)
num   pkts bytes target     prot opt in     out     source               destination         
1     449K  147M ACCEPT     all  --  eth0   *       0.0.0.0/0            0.0.0.0/0            state RELATED,ESTABLISHED
2      33M   30G ts-input   all  --  *      *       0.0.0.0/0            0.0.0.0/0           
3        2   104 ACCEPT     tcp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            tcp dpt:23422
4      275 14555 ACCEPT     tcp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            tcp dpt:80
5     3282  199K ACCEPT     tcp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            tcp dpt:443
6        0     0 ACCEPT     tcp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            tcp dpts:21114:21119
7        0     0 ACCEPT     udp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            udp dpt:21116
8    22969 1242K DROP       all  --  eth0   *       0.0.0.0/0            0.0.0.0/0           

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
num   pkts bytes target     prot opt in     out     source               destination         
1      44M   40G ts-forward  all  --  *      *       0.0.0.0/0            0.0.0.0/0           
2     177M  120G DOCKER-USER  all  --  *      *       0.0.0.0/0            0.0.0.0/0           
3     177M  120G DOCKER-FORWARD  all  --  *      *       0.0.0.0/0            0.0.0.0/0           

Chain OUTPUT (policy ACCEPT 0 packets, 0 bytes)
num   pkts bytes target     prot opt in     out     source               destination         

Chain DOCKER (9 references)
num   pkts bytes target     prot opt in     out     source               destination         
1        0     0 ACCEPT     tcp  --  !br-aa6d32cbd66c br-aa6d32cbd66c  0.0.0.0/0            172.25.0.3           tcp dpt:3002
2        0     0 ACCEPT     tcp  --  !br-aa6d32cbd66c br-aa6d32cbd66c  0.0.0.0/0            172.25.0.3           tcp dpt:3001
3      166  9168 ACCEPT     tcp  --  !br-46b3f0a62ae2 br-46b3f0a62ae2  0.0.0.0/0            172.22.0.6           tcp dpt:8080
4       73  4232 ACCEPT     tcp  --  !br-46b3f0a62ae2 br-46b3f0a62ae2  0.0.0.0/0            172.22.0.3           tcp dpt:3000
5       40  2096 ACCEPT     tcp  --  !br-46b3f0a62ae2 br-46b3f0a62ae2  0.0.0.0/0            172.22.0.4           tcp dpt:3000
6       59  3296 ACCEPT     tcp  --  !br-46b3f0a62ae2 br-46b3f0a62ae2  0.0.0.0/0            172.22.0.2           tcp dpt:8000
7       87  4992 ACCEPT     tcp  --  !br-7fd53512e039 br-7fd53512e039  0.0.0.0/0            172.23.0.2           tcp dpt:9443
8       18   832 ACCEPT     tcp  --  !br-7fd53512e039 br-7fd53512e039  0.0.0.0/0            172.23.0.2           tcp dpt:9080
9     8432  573K ACCEPT     udp  --  !br-7fd53512e039 br-7fd53512e039  0.0.0.0/0            172.23.0.2           udp dpt:3478
10    122K 7297K ACCEPT     tcp  --  !docker0 docker0  0.0.0.0/0            172.17.0.2           tcp dpt:9001
11     168  9096 ACCEPT     tcp  --  !br-dcf9d454b2fe br-dcf9d454b2fe  0.0.0.0/0            172.24.0.2           tcp dpt:8888
12    1567 92788 ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21119
13     768 44900 ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21118
14     999 56664 ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21117
15    1338 58725 ACCEPT     udp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           udp dpt:21116
16     896 49420 ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21116
17    1100 61312 ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21115
18    613K   32M ACCEPT     tcp  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            172.20.0.2           tcp dpt:21114
19     286 15212 ACCEPT     tcp  --  !br-7694694aea74 br-7694694aea74  0.0.0.0/0            172.18.0.2           tcp dpt:8080
20       0     0 DROP       all  --  !br-5fb62ddc9413 br-5fb62ddc9413  0.0.0.0/0            0.0.0.0/0           
21       0     0 DROP       all  --  !br-7694694aea74 br-7694694aea74  0.0.0.0/0            0.0.0.0/0           
22       0     0 DROP       all  --  !br-a53d2d8b19fe br-a53d2d8b19fe  0.0.0.0/0            0.0.0.0/0           
23       0     0 DROP       all  --  !br-dcf9d454b2fe br-dcf9d454b2fe  0.0.0.0/0            0.0.0.0/0           
24       0     0 DROP       all  --  !docker0 docker0  0.0.0.0/0            0.0.0.0/0           
25       0     0 DROP       all  --  !br-7fd53512e039 br-7fd53512e039  0.0.0.0/0            0.0.0.0/0           
26       0     0 DROP       all  --  !br-46b3f0a62ae2 br-46b3f0a62ae2  0.0.0.0/0            0.0.0.0/0           
27       0     0 DROP       all  --  !br-aa6d32cbd66c br-aa6d32cbd66c  0.0.0.0/0            0.0.0.0/0           
28       0     0 DROP       all  --  !br-fa429b1bf360 br-fa429b1bf360  0.0.0.0/0            0.0.0.0/0           

Chain DOCKER-BRIDGE (1 references)
num   pkts bytes target     prot opt in     out     source               destination         
1     620K   32M DOCKER     all  --  *      br-5fb62ddc9413  0.0.0.0/0            0.0.0.0/0           
2      286 15212 DOCKER     all  --  *      br-7694694aea74  0.0.0.0/0            0.0.0.0/0           
3        0     0 DOCKER     all  --  *      br-a53d2d8b19fe  0.0.0.0/0            0.0.0.0/0           
4      168  9096 DOCKER     all  --  *      br-dcf9d454b2fe  0.0.0.0/0            0.0.0.0/0           
5     122K 7297K DOCKER     all  --  *      docker0  0.0.0.0/0            0.0.0.0/0           
6     8537  579K DOCKER     all  --  *      br-7fd53512e039  0.0.0.0/0            0.0.0.0/0           
7      338 18792 DOCKER     all  --  *      br-46b3f0a62ae2  0.0.0.0/0            0.0.0.0/0           
8        0     0 DOCKER     all  --  *      br-aa6d32cbd66c  0.0.0.0/0            0.0.0.0/0           
9        0     0 DOCKER     all  --  *      br-fa429b1bf360  0.0.0.0/0            0.0.0.0/0           

Chain DOCKER-CT (1 references)
num   pkts bytes target     prot opt in     out     source               destination         
1      85M   56G ACCEPT     all  --  *      br-5fb62ddc9413  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
2     1352  105K ACCEPT     all  --  *      br-7694694aea74  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
3        0     0 ACCEPT     all  --  *      br-a53d2d8b19fe  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
4      886  102K ACCEPT     all  --  *      br-dcf9d454b2fe  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
5    4367K  772M ACCEPT     all  --  *      docker0  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
6    59319 4057K ACCEPT     all  --  *      br-7fd53512e039  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
7     2099  186K ACCEPT     all  --  *      br-46b3f0a62ae2  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
8        0     0 ACCEPT     all  --  *      br-aa6d32cbd66c  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
9        0     0 ACCEPT     all  --  *      br-fa429b1bf360  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED

Chain DOCKER-FORWARD (1 references)
num   pkts bytes target     prot opt in     out     source               destination         
1     177M  120G DOCKER-CT  all  --  *      *       0.0.0.0/0            0.0.0.0/0           
2      87M   63G DOCKER-INTERNAL  all  --  *      *       0.0.0.0/0            0.0.0.0/0           
3      87M   63G DOCKER-BRIDGE  all  --  *      *       0.0.0.0/0            0.0.0.0/0           
4      82M   57G ACCEPT     all  --  br-5fb62ddc9413 *       0.0.0.0/0            0.0.0.0/0           
5     1340  852K ACCEPT     all  --  br-7694694aea74 *       0.0.0.0/0            0.0.0.0/0           
6        0     0 ACCEPT     all  --  br-a53d2d8b19fe *       0.0.0.0/0            0.0.0.0/0           
7      865  671K ACCEPT     all  --  br-dcf9d454b2fe *       0.0.0.0/0            0.0.0.0/0           
8    4053K 6007M ACCEPT     all  --  docker0 *       0.0.0.0/0            0.0.0.0/0           
9    67748 4913K ACCEPT     all  --  br-7fd53512e039 *       0.0.0.0/0            0.0.0.0/0           
10    2133 1911K ACCEPT     all  --  br-46b3f0a62ae2 *       0.0.0.0/0            0.0.0.0/0           
11       0     0 ACCEPT     all  --  br-aa6d32cbd66c *       0.0.0.0/0            0.0.0.0/0           
12       0     0 ACCEPT     all  --  br-fa429b1bf360 *       0.0.0.0/0            0.0.0.0/0           

Chain DOCKER-INTERNAL (1 references)
num   pkts bytes target     prot opt in     out     source               destination         

Chain DOCKER-USER (1 references)
num   pkts bytes target     prot opt in     out     source               destination         

Chain ts-forward (1 references)
num   pkts bytes target     prot opt in     out     source               destination         
1        0     0 MARK       all  --  tailscale0 *       0.0.0.0/0            0.0.0.0/0            MARK xset 0x40000/0xff0000
2        0     0 ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            mark match 0x40000/0xff0000
3        0     0 DROP       all  --  *      tailscale0  100.64.0.0/10        0.0.0.0/0           
4        0     0 ACCEPT     all  --  *      tailscale0  0.0.0.0/0            0.0.0.0/0           

Chain ts-input (1 references)
num   pkts bytes target     prot opt in     out     source               destination         
1        0     0 ACCEPT     all  --  lo     *       100.91.107.35        0.0.0.0/0           
2     1879  194K ACCEPT     all  --  tailscale0 *       0.0.0.0/0            0.0.0.0/0           
3      674 42720 ACCEPT     udp  --  *      *       0.0.0.0/0            0.0.0.0/0            udp dpt:41641
4        0     0 RETURN     all  --  !tailscale0 *       100.115.92.0/23      0.0.0.0/0           
5        0     0 DROP       all  --  !tailscale0 *       100.64.0.0/10        0.0.0.0/0           
```
