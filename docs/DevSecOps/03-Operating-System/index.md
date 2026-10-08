# Operation System

## 关于虚拟机克隆之后资源标识冲突

查看当前 machine-id

```shell
cat /etc/machine-id /var/lib/dbus/machine-id
```

重置

```shell
rm /etc/machine-id /var/lib/dbus/machine-id ; dbus-uuidgen --ensure=/etc/machine-id ; dbus-uuidgen --ensure
# or systemd-systemd-machine-id-setup but sometimes it's not work
```

查看重置结果

```shell
cat /etc/machine-id /var/lib/dbus/machine-id
```

## pve 克隆导致CA证书冲突

```shell
    rm /etc/pve/local/pve-ssl.*
rm /etc/pve/pve-root-ca.pem
pvecm updatecerts --force
systemctl restart pveproxy
reboot
```