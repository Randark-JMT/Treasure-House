---
toc_max_heading_level: 4
---

# Linux Operations

## 磁盘分区操作

### 查看当前磁盘使用情况

```shell
# 查看磁盘信息
lsblk

# 查看分区信息
sudo fdisk -l

# 查看文件系统使用情况
df -h
```

### 扩展当前系统分区

#### LVM 模式

```shell
# 1. 扩展物理卷
sudo pvresize /dev/sda3  # 替换为你的实际设备名

# 2. 查看卷组信息
sudo vgdisplay

# 3. 扩展逻辑卷（扩展所有可用空间）
sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
# 或者指定具体大小，例如增加 50GB
# sudo lvextend -L +50G /dev/ubuntu-vg/ubuntu-lv

# 4. 调整文件系统大小
sudo resize2fs /dev/ubuntu-vg/ubuntu-lv  # 对于 ext4
# 或
sudo xfs_growfs /  # 对于 XFS
```

#### 非 LVM 模式（简单分区）

```shell
# 1. 使用 growpart 扩展分区
sudo apt update
sudo apt install cloud-guest-utils -y
sudo growpart /dev/sda 2  # /dev/sda 是磁盘，2 是分区号

# 2. 调整文件系统大小
sudo resize2fs /dev/sda2  # 对于 ext4
# 或
sudo xfs_growfs /  # 对于 XFS
```

#### 手动操作 parted

```shell
# 1. 使用 parted 交互式调整
sudo parted /dev/sda

# 在 parted 提示符下：
(parted) print free  # 查看可用空间
(parted) resizepart 2 100%  # 将分区 2 扩展到 100%
(parted) quit

# 2. 调整文件系统
sudo resize2fs /dev/sda2  # 对于 ext4
```
