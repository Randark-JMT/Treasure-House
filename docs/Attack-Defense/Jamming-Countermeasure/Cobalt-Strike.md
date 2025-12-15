# Cobalt Strike 干扰与反制

对抗 Cobaltstrike 中的手段：

- 伪造流量批量上线 (欺骗防御)
- 利用漏洞 (CVE-2022-39197)，反制攻击者，获取 aggressor 端的相关信息和相关权限
- 反制 server，爆破密码，获取 server 信息
- 旁路反制

## 伪造流量批量上线 (欺骗防御)

在这里有两种思路，一个是直接伪造流量欺骗新增 beacon

还有一种就是不断伪造会话，有两种途径：直接沙盒运行原始的样本，还有就是对样本中的连接配置进行解包，然后植入自己的 beacon 或者 SSH Session 中再大量执行，以造成堵塞的效果。

## 通过 CVE-2022-39197 反制攻击

## 对 server 端进行攻击反制

## 旁路反制

## Reference

[反制 Cobaltstrike 的那些手段 By Ga0WeI - 奇安信攻防社区](https://forum.butian.net/index.php/share/1975)
