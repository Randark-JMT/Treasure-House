---
slug: 2023-10-26-0xGame2023-oh-my-linux
title: 0xGame2023 oh-my-linux 技术分析
authors: Randark
tags: []
---

首先，先分析镜像的内核信息：

```shell
randark@memory-forensic:~$ vol -f oh-my-linux.mem banner
Volatility 3 Framework 2.0.1
Progress:  100.00               PDB scanning finished                  
Offset  Banner

0x4f000200      Linux version 5.10.0-21-amd64 (debian-kernel@lists.debian.org) (gcc-10 (Debian 10.2.1-6) 10.2.1 20210110, GNU ld (GNU Binutils for Debian) 2.35.2) #1 SMP Debian 5.10.162-1 (2023-01-21)
0x58ecc240      Linux version 5.10.0-21-amd64 (debian-kernel@lists.debian.org) (gcc-10 (Debian 10.2.1-6) 10.2.1 20210110, GNU ld (GNU Binutils for Debian) 2.35.2) #1 SMP Debian 5.10.162-1 (2023-01-21)
```

通过内核信息，可以定位到`Debian 5.10.0-21-amd64`的deb发行包文件：

[Index of /debian-security/pool/main/l/linux](https://debian.sipwise.com/debian-security/pool/main/l/linux/)

![linux-image-5.10.0-21-amd64-dbg_5.10.162-1_amd64.deb](img/image_20231022-192239.png)

下载下来后，将其作为`tar.xz`文件进行解压缩，得到`data.tar`文件，解压缩制作符号表需要的文件：

```shell
randark@memory-forensic:~/linux-image$ tar -xvf data.tar ./usr/lib/debug/boot/
./usr/lib/debug/boot/
./usr/lib/debug/boot/System.map-5.10.0-21-amd64
./usr/lib/debug/boot/vmlinux-5.10.0-21-amd64
```

然后开始制作符号表文件

```shell
randark@memory-forensic:~$  ./dwarf2json linux --system-map ~/linux-image/usr/lib/debug/boot/System.map-5.10.0-21-amd64 --elf ~/linux-image/usr/lib/debug/boot/vmlinux-5.10.0-21-amd64  >  linux-image-5.10.0-21-amd64-dbg_5.10.162-1_amd64.json
randark@memory-forensic:~$ sudo mv linux-image-5.10.0-21-amd64-dbg_5.10.162-1_amd64.json /usr/local/lib/python3.10/dist-packages/volatility3/symbols/linux/
```

尝试使用符号表进行分析：

```shell
randark@memory-forensic:~$ vol -f oh-my-linux.mem linux.pslist
Volatility 3 Framework 2.0.1
Progress:  100.00               Stacking attempts finished                 
PID     PPID    COMM

1       0       systemd
2       0       kthreadd
3       2       rcu_gp
4       2       rcu_par_gp
6       2       kworker/0:0H
8       2       mm_percpu_wq
9       2       rcu_tasks_rude_
10      2       rcu_tasks_trace
11      2       ksoftirqd/0
12      2       rcu_sched
13      2       migration/0
14      2       kworker/0:1
15      2       cpuhp/0
17      2       kdevtmpfs
18      2       netns
19      2       kauditd
20      2       khungtaskd
21      2       oom_reaper
22      2       writeback
23      2       kcompactd0
24      2       ksmd
25      2       khugepaged
43      2       kintegrityd
44      2       kblockd
45      2       blkcg_punt_bio
46      2       edac-poller
47      2       devfreq_wq
48      2       kworker/0:1H
49      2       kswapd0
50      2       kthrotld
......
```

成功实现加载符号表，并分析镜像