"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[7446],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(i),f=n,u=p["".concat(s,".").concat(f)]||p[f]||m[f]||l;return i?a.createElement(u,r(r({ref:t},c),{},{components:i})):a.createElement(u,r({ref:t},c))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,r=new Array(l);r[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,r[1]=o;for(var d=2;d<l;d++)r[d]=i[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},3711:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=i(7462),n=(i(7294),i(3905));const l={},r="Volatility \u4f7f\u7528\u5165\u95e8",o={unversionedId:"Forensic/Memory-Forensic/Volatility-Guide/Volatility \u4f7f\u7528\u5165\u95e8",id:"Forensic/Memory-Forensic/Volatility-Guide/Volatility \u4f7f\u7528\u5165\u95e8",title:"Volatility \u4f7f\u7528\u5165\u95e8",description:"\u672c\u7bc7\u5c55\u793a\u64cd\u4f5c\u65f6\u6240\u7528\u7684\u68c0\u6750\u6765\u81ea\u4e8e OtterCTF 2018 \u6bd4\u8d5b\u7684\u9644\u4ef6\uff1a[OtterCTF 2018]What the password?",source:"@site/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility \u4f7f\u7528\u5165\u95e8.md",sourceDirName:"Forensic/Memory-Forensic/Volatility-Guide",slug:"/Forensic/Memory-Forensic/Volatility-Guide/Volatility \u4f7f\u7528\u5165\u95e8",permalink:"/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility \u4f7f\u7528\u5165\u95e8",draft:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility \u4f7f\u7528\u5165\u95e8.md",tags:[],version:"current",frontMatter:{},sidebar:"Forensic_Sidebar",previous:{title:"Volatility \u6307\u5357",permalink:"/docs/Forensic/Memory-Forensic/Volatility-Guide/"},next:{title:"Volatility \u63d2\u4ef6\u6307\u5357",permalink:"/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility-plugin"}},s={},d=[{value:"Volatility 2 \u5de5\u4f5c\u6d41",id:"volatility-2-\u5de5\u4f5c\u6d41",level:2},{value:"\u5206\u6790\u68c0\u6750\u7c7b\u578b",id:"\u5206\u6790\u68c0\u6750\u7c7b\u578b",level:3},{value:"\u67e5\u770b\u8fdb\u7a0b\u5217\u8868",id:"\u67e5\u770b\u8fdb\u7a0b\u5217\u8868",level:3},{value:"\u67e5\u770b\u5185\u5b58\u4e2d\u52a0\u8f7d\u4e86\u54ea\u4e9b\u6587\u4ef6",id:"\u67e5\u770b\u5185\u5b58\u4e2d\u52a0\u8f7d\u4e86\u54ea\u4e9b\u6587\u4ef6",level:3},{value:"\u6839\u636e filescan \u7684\u7ed3\u679c\u63d0\u53d6\u5185\u5b58\u4e2d\u7684\u6587\u4ef6",id:"\u6839\u636e-filescan-\u7684\u7ed3\u679c\u63d0\u53d6\u5185\u5b58\u4e2d\u7684\u6587\u4ef6",level:3},{value:"\u6839\u636e pslist \u7684\u7ed3\u679c\u63d0\u53d6\u7a0b\u5e8f\u5176\u53ef\u5bfb\u5740\u7684\u5185\u5b58\u6570\u636e",id:"\u6839\u636e-pslist-\u7684\u7ed3\u679c\u63d0\u53d6\u7a0b\u5e8f\u5176\u53ef\u5bfb\u5740\u7684\u5185\u5b58\u6570\u636e",level:3},{value:"\u6839\u636e pslist \u7684\u7ed3\u679c\u63d0\u53d6\u7a0b\u5e8f\u672c\u4f53",id:"\u6839\u636e-pslist-\u7684\u7ed3\u679c\u63d0\u53d6\u7a0b\u5e8f\u672c\u4f53",level:3},{value:"Volatility 3 \u5de5\u4f5c\u6d41",id:"volatility-3-\u5de5\u4f5c\u6d41",level:2},{value:"\u8bc6\u522b\u7cfb\u7edf\u4fe1\u606f",id:"\u8bc6\u522b\u7cfb\u7edf\u4fe1\u606f",level:3},{value:"Volatility 3 \u67e5\u770b\u8fdb\u7a0b\u5217\u8868",id:"volatility-3-\u67e5\u770b\u8fdb\u7a0b\u5217\u8868",level:3},{value:"Volatility 3 \u67e5\u770b\u5185\u5b58\u4e2d\u52a0\u8f7d\u4e86\u54ea\u4e9b\u6587\u4ef6",id:"volatility-3-\u67e5\u770b\u5185\u5b58\u4e2d\u52a0\u8f7d\u4e86\u54ea\u4e9b\u6587\u4ef6",level:3},{value:"Volatility 3 \u6839\u636e filescan \u7684\u7ed3\u679c\u63d0\u53d6\u5185\u5b58\u4e2d\u7684\u6587\u4ef6",id:"volatility-3-\u6839\u636e-filescan-\u7684\u7ed3\u679c\u63d0\u53d6\u5185\u5b58\u4e2d\u7684\u6587\u4ef6",level:3},{value:"Volatility 2 Windows \u76f8\u5173\u6a21\u5757",id:"volatility-2-windows-\u76f8\u5173\u6a21\u5757",level:2},{value:"Volatility 3 Windows \u76f8\u5173\u6a21\u5757",id:"volatility-3-windows-\u76f8\u5173\u6a21\u5757",level:2},{value:"Volatility 2 Linux \u76f8\u5173\u6a21\u5757",id:"volatility-2-linux-\u76f8\u5173\u6a21\u5757",level:2},{value:"Volatility 3 Linux \u76f8\u5173\u6a21\u5757",id:"volatility-3-linux-\u76f8\u5173\u6a21\u5757",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"volatility-\u4f7f\u7528\u5165\u95e8"},"Volatility \u4f7f\u7528\u5165\u95e8"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u672c\u7bc7\u5c55\u793a\u64cd\u4f5c\u65f6\u6240\u7528\u7684\u68c0\u6750\u6765\u81ea\u4e8e OtterCTF 2018 \u6bd4\u8d5b\u7684\u9644\u4ef6\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://www.ctfer.vip/problem/2458"},"[OtterCTF 2018]What the password?")),(0,n.kt)("p",{parentName:"admonition"},"\u6240\u4f7f\u7528\u7684 Volatility 2 \u73af\u5883\u662f\u76f4\u63a5\u7531\u6e90\u7801\u8fd0\u884c\uff0cVolatility 3 \u73af\u5883\u7531 pip \u5b89\u88c5\u5f97\u6765")),(0,n.kt)("h2",{id:"volatility-2-\u5de5\u4f5c\u6d41"},"Volatility 2 \u5de5\u4f5c\u6d41"),(0,n.kt)("p",null,"\u7b80\u5355\u6765\u8bb2\uff0c\u5c31\u662f\u9700\u8981\u5148\u8bc6\u522b\u51fa\u662f\u4f55\u79cd\u5185\u5b58\u955c\u50cf\uff0c\u53d6\u81ea\u4f55\u79cd\u7cfb\u7edf\uff0c\u7136\u540e\u6307\u5b9a\u7b26\u53f7\u8868\u5e76\u52a0\u8f7d\u6a21\u5757\u8fdb\u884c\u6570\u636e\u5206\u6790"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Volatility \u5728\u4f7f\u7528\u6a21\u5757\u7684\u65f6\u5019\uff08\u975e imageinfo \u8fd9\u7c7b\u901a\u7528\u578b\uff09\uff0c\u9700\u8981\u6307\u5b9a\u7b26\u53f7\u8868\uff08",(0,n.kt)("inlineCode",{parentName:"p"},"--profile")," \u53c2\u6570\uff09\u624d\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c")),(0,n.kt)("h3",{id:"\u5206\u6790\u68c0\u6750\u7c7b\u578b"},"\u5206\u6790\u68c0\u6750\u7c7b\u578b"),(0,n.kt)("p",null,"\u62ff\u5230\u68c0\u6750\u540e\u7684\u7b2c\u4e00\u4ef6\u4e8b\uff0c\u4fbf\u662f\u8bc6\u522b\u51fa\u68c0\u6750\u7684\u7c7b\u578b\uff0c\u5df2\u7ecf\u63d0\u53d6\u81ea\u4f55\u79cd\u8bbe\u5907\uff0c\u6240\u4f7f\u7528\u7684\u6a21\u5757\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"imageinfo")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ python2 ./volatility2/vol.py -f ./OtterCTF.vmem imageinfo\nVolatility Foundation Volatility Framework 2.6.1\nINFO    : volatility.debug    : Determining profile based on KDBG search...\n          Suggested Profile(s) : Win7SP1x64, Win7SP0x64, Win2008R2SP0x64, Win2008R2SP1x64_24000, Win2008R2SP1x64_23418, Win2008R2SP1x64, Win7SP1x64_24000, Win7SP1x64_23418\n                     AS Layer1 : WindowsAMD64PagedMemory (Kernel AS)\n                     AS Layer2 : FileAddressSpace (/home/randark/OtterCTF.vmem)\n                      PAE type : No PAE\n                           DTB : 0x187000L\n                          KDBG : 0xf80002c430a0L\n          Number of Processors : 2\n     Image Type (Service Pack) : 1\n                KPCR for CPU 0 : 0xfffff80002c44d00L\n                KPCR for CPU 1 : 0xfffff880009ef000L\n             KUSER_SHARED_DATA : 0xfffff78000000000L\n           Image date and time : 2018-08-04 19:34:22 UTC+0000\n     Image local date and time : 2018-08-04 22:34:22 +0300\n")),(0,n.kt)("p",null,"\u8fd9\u91cc\u5c31\u53ef\u4ee5\u770b\u5230\uff0cVolatility \u6210\u529f\u8bc6\u522b\u51fa\u4e86\u76ee\u6807\u8bbe\u5907\u7684\u5185\u5b58\u6570\u636e\u7c7b\u578b\uff08\u63d0\u53d6\u81ea Windows \u7cfb\u7edf\uff09\uff0c\u5e76\u4e14\u7ed9\u51fa\u4e86\u7cfb\u7edf\u7248\u672c\u7684\u5efa\u8bae\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"Win7SP1x64")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u975e WIndows \u7cfb\u7edf\u7684\u8bbe\u5907\u63d0\u53d6\u51fa\u6765\u7684\u5185\u5b58\u955c\u50cf\uff0cVolatility \u65e0\u6cd5\u6b63\u786e\u8bc6\u522b\u51fa\u8bbe\u5907\u7684\u5185\u5b58\u60c5\u51b5\uff0c\u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u4f7f\u7528 strings+grep \u76f4\u63a5\u5bf9\u5185\u5b58\u955c\u50cf\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u7b5b\u9009\uff0c\u901a\u8fc7\u5173\u952e\u5b57\u5224\u65ad\u5185\u5b58\u63d0\u53d6\u81ea\u4f55\u79cd\u8bbe\u5907")),(0,n.kt)("h3",{id:"\u67e5\u770b\u8fdb\u7a0b\u5217\u8868"},"\u67e5\u770b\u8fdb\u7a0b\u5217\u8868"),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u53ef\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"pslist")," \u6a21\u5757\u6765\u67e5\u770b\u76ee\u6807\u8bbe\u5907\u5728\u63d0\u53d6\u5185\u5b58\u955c\u50cf\u7684\u65f6\u5019\uff0c\u90fd\u8fd0\u884c\u54ea\u4e9b\u8fdb\u7a0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ python2 ./volatility2/vol.py -f OtterCTF.vmem --profile=Win7SP1x64 pslist\nVolatility Foundation Volatility Framework 2.6.1\nOffset(V)          Name                    PID   PPID   Thds     Hnds   Sess  Wow64 Start                          Exit                          \n------------------ -------------------- ------ ------ ------ -------- ------ ------ ------------------------------ ------------------------------\n0xfffffa8018d44740 System                    4      0     95      411 ------      0 2018-08-04 19:26:03 UTC+0000                                 \n0xfffffa801947e4d0 smss.exe                260      4      2       30 ------      0 2018-08-04 19:26:03 UTC+0000                                 \n0xfffffa801a0c8380 csrss.exe               348    336      9      563      0      0 2018-08-04 19:26:10 UTC+0000                                 \n0xfffffa80198d3b30 csrss.exe               388    380     11      460      1      0 2018-08-04 19:26:11 UTC+0000                                 \n0xfffffa801a2ed060 wininit.exe             396    336      3       78      0      0 2018-08-04 19:26:11 UTC+0000                                 \n0xfffffa801aaf4060 winlogon.exe            432    380      3      113      1      0 2018-08-04 19:26:11 UTC+0000                                 \n0xfffffa801ab377c0 services.exe            492    396     11      242      0      0 2018-08-04 19:26:12 UTC+0000                                 \n0xfffffa801ab3f060 lsass.exe               500    396      7      610      0      0 2018-08-04 19:26:12 UTC+0000                                 \n0xfffffa801ab461a0 lsm.exe                 508    396     10      148      0      0 2018-08-04 19:26:12 UTC+0000                                 \n0xfffffa8018e3c890 svchost.exe             604    492     11      376      0      0 2018-08-04 19:26:16 UTC+0000                                 \n0xfffffa801abbdb30 vmacthlp.exe            668    492      3       56      0      0 2018-08-04 19:26:16 UTC+0000                                 \n0xfffffa801abebb30 svchost.exe             712    492      8      301      0      0 2018-08-04 19:26:17 UTC+0000\n......\n")),(0,n.kt)("h3",{id:"\u67e5\u770b\u5185\u5b58\u4e2d\u52a0\u8f7d\u4e86\u54ea\u4e9b\u6587\u4ef6"},"\u67e5\u770b\u5185\u5b58\u4e2d\u52a0\u8f7d\u4e86\u54ea\u4e9b\u6587\u4ef6"),(0,n.kt)("p",null,"\u5728\u7cfb\u7edf\u6253\u5f00\u6587\u4ef6\u7684\u65f6\u5019\uff0c\u6587\u4ef6\u6570\u636e\u5c31\u4f1a\u88ab\u4ece\u78c1\u76d8\u4e2d\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u8fd9\u4fbf\u5728\u4fbf\u5728\u5185\u5b58\u4e2d\u7559\u4e0b\u4e86\u6587\u4ef6\u6570\u636e\u3002\u6240\u4f7f\u7528\u7684\u6a21\u5757\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"filescan")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ python2 ./volatility2/vol.py -f OtterCTF.vmem --profile=Win7SP1x64 filescan\nVolatility Foundation Volatility Framework 2.6.1\nOffset(P)            #Ptr   #Hnd Access Name\n------------------ ------ ------ ------ ----\n0x0000000005def290      6      0 RW-rwd \\Device\\HarddiskVolume1\\$Directory\n0x0000000005df67f0      1      1 R--rw- \\Device\\HarddiskVolume1\\Windows\\System32\n0x000000007d402680     14      0 R--r-d \\Device\\HarddiskVolume1\\Nexon\\MapleStory\\l3codeca.acm\n0x000000007d405270      1      1 R--r-- \\Device\\HarddiskVolume1\\Users\\Rick\\AppData\\Roaming\\BitTorrent\\dlimagecache\\165F6EF40A81DD175FFAEA69E77ABFD30B27E71C\n0x000000007d405d20      1      0 R--r-- \\Device\\HarddiskVolume1\\Windows\\System32\\config\\systemprofile\\AppData\\LocalLow\\Microsoft\\CryptnetUrlCache\\MetaData\\DDA81A73291E20E6ACF6CACA76D5C942_4D9486FF3A1DA70CF6B67432FCEC9330\n0x000000007d406510     16      0 R--r-d \\Device\\HarddiskVolume1\\Windows\\assembly\\NativeImages_v2.0.50727_32\\SMDiagnostics\\8218dc4808b77f3585fb048c61597af1\\SMDiagnostics.ni.dll\n0x000000007d413930      1      0 R--r-- \\Device\\HarddiskVolume1\\Windows\\Microsoft.NET\\Framework64\\v2.0.50727\\CONFIG\\machine.config\n0x000000007d414dc0      1      1 R--r-d \\Device\\HarddiskVolume1\\Windows\\System32\\en-US\\setupapi.dll.mui\n0x000000007d418290     16      0 RWDr-- \\Device\\HarddiskVolume1\\Windows\\System32\\Tasks\\Microsoft\\Windows Defender\\MP Scheduled Scan\n0x000000007d418f20      9      0 R--r-d \\Device\\HarddiskVolume1\\Windows\\SysWOW64\\dinput8.dll\n0x000000007d42b7b0      1      1 ------ \\Device\\Afd\\Endpoint\n......\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"filescan \u6240\u8f93\u51fa\u7684\u6570\u636e\u91cf\u662f\u5341\u5206\u5e9e\u5927\u7684\uff0c\u6240\u4ee5\u60f3\u8981\u589e\u52a0\u6548\u7387\u7684\u8bdd\uff0c\u53ef\u4ee5\u4f7f\u7528 grep+\u5173\u952e\u8bcd\u6765\u5bf9\u6570\u636e\u8fdb\u884c\u7b5b\u9009\u3002\u5173\u952e\u8bcd\u53ef\u4ee5\u4f7f\u7528\u4f8b\u5982 Desktop\uff0c\u684c\u9762\uff08\u4e2d\u6587\u7528\u6237\u7684\u684c\u9762\u8def\u5f84\uff09\uff0csecret\uff0chint\uff0cflag \u7b49\u7b49\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u540c\u65f6\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528 grep \u5bf9\u7ed3\u679c\u8fdb\u884c\u7b5b\u9009\u7684\u65f6\u5019\uff0c\u5173\u952e\u8bcd\u662f\u6709\u5927\u5c0f\u5199\u654f\u611f\u7684"),(0,n.kt)("p",{parentName:"admonition"},"filescan \u8f93\u51fa\u7684\u7ed3\u679c\u4e2d\uff0c\u4f20\u7edf\u7684\u76d8\u7b26\uff08\u5982 C \u76d8\uff0cD \u76d8\uff09\u5e76\u4e0d\u80fd\u6b63\u786e\u663e\u793a\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u5219\u662f\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"Device\\HarddiskVolume1\\")," \u8fd9\u7c7b\u7684\u8868\u793a\u65b9\u6cd5")),(0,n.kt)("p",null,"\u4f7f\u7528 grep+\u5173\u952e\u8bcd\u7684\u6548\u679c\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ python2 ./volatility2/vol.py -f OtterCTF.vmem --profile=Win7SP1x64 filescan | grep Desktop\nVolatility Foundation Volatility Framework 2.6.1\n0x000000007d660500      2      0 -W-r-- \\Device\\HarddiskVolume1\\Users\\Rick\\Desktop\\READ_IT.txt\n0x000000007d74c2d0      2      1 R--rwd \\Device\\HarddiskVolume1\\Users\\Rick\\Desktop\n0x000000007d7f98c0      2      1 R--rwd \\Device\\HarddiskVolume1\\Users\\Rick\\Desktop\n0x000000007d864250     16      0 R--rwd \\Device\\HarddiskVolume1\\Users\\Public\\Desktop\\desktop.ini\n0x000000007d8a9070     16      0 R--rwd \\Device\\HarddiskVolume1\\Users\\Rick\\Desktop\\desktop.ini\n0x000000007d8ac800      2      1 R--rwd \\Device\\HarddiskVolume1\\Users\\Public\\Desktop\n0x000000007d8ac950      2      1 R--rwd \\Device\\HarddiskVolume1\\Users\\Public\\Desktop\n0x000000007e410890     16      0 R--r-- \\Device\\HarddiskVolume1\\Users\\Rick\\Desktop\\Flag.txt\n0x000000007e5c52d0      3      0 R--rwd \\Device\\HarddiskVolume1\\Users\\Rick\\AppData\\Roaming\\Microsoft\\Windows\\SendTo\\Desktop.ini\n0x000000007e77fb60      1      1 R--rw- \\Device\\HarddiskVolume1\\Users\\Rick\\Desktop\n")),(0,n.kt)("h3",{id:"\u6839\u636e-filescan-\u7684\u7ed3\u679c\u63d0\u53d6\u5185\u5b58\u4e2d\u7684\u6587\u4ef6"},"\u6839\u636e filescan \u7684\u7ed3\u679c\u63d0\u53d6\u5185\u5b58\u4e2d\u7684\u6587\u4ef6"),(0,n.kt)("p",null,"\u5982\u4e0a\u6587\uff0c\u5728\u5185\u5b58\u6570\u636e\u4e2d\u53d1\u73b0\u4e86\u4e00\u4e2a\u660e\u663e\u53ef\u7591\u7684\u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"0x000000007d660500      2      0 -W-r-- \\Device\\HarddiskVolume1\\Users\\Rick\\Desktop\\READ_IT.txt\n")),(0,n.kt)("p",null,"\u90a3\u4e48\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"dumpfiles")," \u6a21\u5757\u5c06\u5176\u7684\u6570\u636e\u63d0\u53d6\u51fa\u6765\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ python2 ./volatility2/vol.py -f OtterCTF.vmem --profile=Win7SP1x64 dumpfiles -Q 0x000000007d660500 -D ./\nVolatility Foundation Volatility Framework 2.6.1\nDataSectionObject 0x7d660500   None   \\Device\\HarddiskVolume1\\Users\\Rick\\Desktop\\READ_IT.txt\n")),(0,n.kt)("p",null,"\u63d0\u53d6\u51fa\u6765\u7684\u6587\u4ef6\u540d\u4e3a\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"file.None.<PHYSOFFSET>.dat")),(0,n.kt)("p",null,"\u90a3\u4e48\u5c31\u53ef\u4ee5\u6d4f\u89c8\u76ee\u6807\u6587\u4ef6\u7684\u6570\u636e\u4e86\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ cat file.None.0xfffffa801b2def10.dat \nYour files have been encrypted.\nRead the Program for more information\nread program for more information.\n")),(0,n.kt)("h3",{id:"\u6839\u636e-pslist-\u7684\u7ed3\u679c\u63d0\u53d6\u7a0b\u5e8f\u5176\u53ef\u5bfb\u5740\u7684\u5185\u5b58\u6570\u636e"},"\u6839\u636e pslist \u7684\u7ed3\u679c\u63d0\u53d6\u7a0b\u5e8f\u5176\u53ef\u5bfb\u5740\u7684\u5185\u5b58\u6570\u636e"),(0,n.kt)("p",null,"\u5728\u4e0a\u6587\u7684 pslist \u7ed3\u679c\u4e2d\uff0c\u53ef\u4ee5\u53d1\u73b0\u4e00\u4e2a\u53ef\u7591\u7a0b\u5e8f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"0xfffffa801b486b30 Rick And Morty         3820   2728      4      185      1      1 2018-08-04 19:32:55 UTC+0000\n")),(0,n.kt)("p",null,"\u90a3\u4e48\u5c31\u53ef\u4ee5\u4f7f\u7528 memdump \u6a21\u5757\u5c06\u7a0b\u5e8f\u7684\u53ef\u5bfb\u5740\u7684\u5185\u5b58\u6570\u636e\u63d0\u53d6\u51fa\u6765\uff0c\u5e76\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u6790\uff0c\u67e5\u770b\u7a0b\u5e8f\u90fd\u52a0\u8f7d\u5e76\u64cd\u4f5c\u4e86\u54ea\u4e9b\u6570\u636e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ python2 ./volatility2/vol.py -f OtterCTF.vmem --profile=Win7SP1x64 memdump -p 3820 -D ./\nVolatility Foundation Volatility Framework 2.6.1\n************************************************************************\nWriting Rick And Morty [  3820] to 3820.dmp\n")),(0,n.kt)("p",null,"\u8f93\u51fa\u7684\u6587\u4ef6\u540d\u683c\u5f0f\u4e3a\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"<pid of process>.dmp")),(0,n.kt)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u5229\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"strings"),"\u5bf9\u63d0\u53d6\u51fa\u6765\u7684\u6570\u636e\u8fdb\u884c\u5206\u6790\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ strings 3820.dmp \nvn*u\n=Atw\nTemp\nX=!u\n~M!u\n=Atw\nWow64ApcRoutine\n......\n")),(0,n.kt)("h3",{id:"\u6839\u636e-pslist-\u7684\u7ed3\u679c\u63d0\u53d6\u7a0b\u5e8f\u672c\u4f53"},"\u6839\u636e pslist \u7684\u7ed3\u679c\u63d0\u53d6\u7a0b\u5e8f\u672c\u4f53"),(0,n.kt)("p",null,"\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5bf9\u7a0b\u5e8f\u672c\u4f53\u8fdb\u884c\u9006\u5411\u5206\u6790\uff0c\u4f46\u662f memdump \u6a21\u5757\u8f93\u51fa\u7684\u6570\u636e\u91cf\u592a\u5927\u4e86\uff0c\u5bf9\u4e8e\u4ec5\u4ec5\u53ea\u9700\u8981\u63d0\u53d6\u7a0b\u5e8f\u672c\u4f53\u7684\u9700\u6c42\u663e\u7136\u4e0d\u7b26\u5408\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u7528\u5230 procdump \u6a21\u5757\u3002\u5982\u4e0a\u6587\uff0c\u8fd8\u662f\u5bf9"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"0xfffffa801b486b30 Rick And Morty         3820   2728      4      185      1      1 2018-08-04 19:32:55 UTC+0000\n")),(0,n.kt)("p",null,"\u8fd9\u4e2a\u8fdb\u7a0b\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ python2 ./volatility2/vol.py -f OtterCTF.vmem --profile=Win7SP1x64 procdump -p 3820 -D ./\nVolatility Foundation Volatility Framework 2.6.1\nProcess(V)         ImageBase          Name                 Result\n------------------ ------------------ -------------------- ------\n0xfffffa801b486b30 0x0000000000400000 Rick And Morty       OK: executable.3820.exe\n")),(0,n.kt)("p",null,"\u63d0\u53d6\u51fa\u6765\u7684\u6587\u4ef6\u540d\u683c\u5f0f\u4e3a\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"executable.<pid of process>.<exe/elf>")),(0,n.kt)("p",null,"\u7136\u540e\u4fbf\u53ef\u4ee5\u5bf9\u76ee\u6807\u8fdb\u7a0b\u7684\u7a0b\u5e8f\u672c\u4f53\u8fdb\u884c\u9006\u5411\u5206\u6790\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Die \u5206\u6790\u7ed3\u679c",src:i(8562).Z,width:"723",height:"464"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IDA \u5206\u6790\u7ed3\u679c",src:i(3982).Z,width:"1920",height:"1050"})),(0,n.kt)("h2",{id:"volatility-3-\u5de5\u4f5c\u6d41"},"Volatility 3 \u5de5\u4f5c\u6d41"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Volatility 3 \u6539\u8fdb\u4e86\u6a21\u5757\u7684\u5de5\u4f5c\u65b9\u5f0f\uff0c\u5728\u76f8\u8f83\u4e0e Volatility 2 \u5927\u5927\u589e\u52a0\u4e86\u5206\u6790\u901f\u5ea6\u7684\u540c\u65f6\uff0c\u4e5f\u652f\u6301\u81ea\u52a8\u8bc6\u522b\u5185\u5b58\u955c\u50cf\u7684\u7cfb\u7edf\u7248\u672c\u7684\u7279\u6027\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u518d\u4e5f\u4e0d\u9700\u8981\u624b\u52a8\u6307\u5b9a\u7b26\u53f7\u8868\u4e86"),(0,n.kt)("p",{parentName:"admonition"},"\u867d\u7136 Volatility 3 \u652f\u6301\u81ea\u52a8\u9009\u62e9\u7b26\u53f7\u8868\u6765\u8fdb\u884c\u5206\u6790\u5de5\u4f5c\uff0c\u4f46\u662f\u5bf9\u4e8e\u7cfb\u7edf\u79cd\u7c7b\uff08Windows\uff0cMac OS\uff0cLinux\uff09\u8fd8\u662f\u9700\u8981\u81ea\u884c\u8bc6\u522b\u5e76\u6307\u5b9a\u3002")),(0,n.kt)("h3",{id:"\u8bc6\u522b\u7cfb\u7edf\u4fe1\u606f"},"\u8bc6\u522b\u7cfb\u7edf\u4fe1\u606f"),(0,n.kt)("p",null,"\u9996\u5148\u8fd8\u662f\u8bc6\u522b\u4e00\u4e0b\u5185\u5b58\u6570\u636e\u7684\u60c5\u51b5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ vol -f OtterCTF.vmem windows.info\nVolatility 3 Framework 2.0.1\nProgress:  100.00               PDB scanning finished                        \nVariable        Value\n\nKernel Base     0xf80002a52000\nDTB     0x187000\nSymbols file:///usr/local/lib/python3.10/dist-packages/volatility3/symbols/windows/ntkrnlmp.pdb/3844DBB920174967BE7AA4A2C20430FA-2.json.xz\nIs64Bit True\nIsPAE   False\nlayer_name      0 WindowsIntel32e\nmemory_layer    1 FileLayer\nKdDebuggerDataBlock     0xf80002c430a0\nNTBuildLab      7601.17514.amd64fre.win7sp1_rtm.\nCSDVersion      1\nKdVersionBlock  0xf80002c43068\nMajor/Minor     15.7601\nMachineType     34404\nKeNumberProcessors      2\nSystemTime      2018-08-04 19:34:22\nNtSystemRoot    C:\\Windows\nNtProductType   NtProductWinNt\nNtMajorVersion  6\nNtMinorVersion  1\nPE MajorOperatingSystemVersion  6\nPE MinorOperatingSystemVersion  1\nPE Machine      34404\nPE TimeDateStamp        Sat Nov 20 09:30:02 2010\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u7684\u64cd\u4f5c\u540c Volatility 2")),(0,n.kt)("h3",{id:"volatility-3-\u67e5\u770b\u8fdb\u7a0b\u5217\u8868"},"Volatility 3 \u67e5\u770b\u8fdb\u7a0b\u5217\u8868"),(0,n.kt)("p",null,"\u540c\u6837\u4f7f\u7528\u7684\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"pslist"),"\u6a21\u5757\uff0c\u53ea\u4e0d\u8fc7\u4e0d\u9700\u8981\u6307\u5b9a\u7cfb\u7edf\u4fe1\u606f\uff08\u7b26\u53f7\u8868\uff09"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ vol -f OtterCTF.vmem windows.pslist\nVolatility 3 Framework 2.0.1\nProgress:  100.00               PDB scanning finished                        \nPID     PPID    ImageFileName   Offset(V)       Threads Handles SessionId       Wow64   CreateTime      ExitTime        File output\n\n4       0       System  0xfa8018d44740  95      411     N/A     False   2018-08-04 19:26:03.000000      N/A     Disabled\n260     4       smss.exe        0xfa801947e4d0  2       30      N/A     False   2018-08-04 19:26:03.000000      N/A     Disabled\n348     336     csrss.exe       0xfa801a0c8380  9       563     0       False   2018-08-04 19:26:10.000000      N/A     Disabled\n388     380     csrss.exe       0xfa80198d3b30  11      460     1       False   2018-08-04 19:26:11.000000      N/A     Disabled\n396     336     wininit.exe     0xfa801a2ed060  3       78      0       False   2018-08-04 19:26:11.000000      N/A     Disabled\n432     380     winlogon.exe    0xfa801aaf4060  3       113     1       False   2018-08-04 19:26:11.000000      N/A     Disabled\n492     396     services.exe    0xfa801ab377c0  11      242     0       False   2018-08-04 19:26:12.000000      N/A     Disabled\n500     396     lsass.exe       0xfa801ab3f060  7       610     0       False   2018-08-04 19:26:12.000000      N/A     Disabled\n508     396     lsm.exe 0xfa801ab461a0  10      148     0       False   2018-08-04 19:26:12.000000      N/A     Disabled\n604     492     svchost.exe     0xfa8018e3c890  11      376     0       False   2018-08-04 19:26:16.000000      N/A     Disabled\n668     492     vmacthlp.exe    0xfa801abbdb30  3       56      0       False   2018-08-04 19:26:16.000000      N/A     Disabled\n712     492     svchost.exe     0xfa801abebb30  8       301     0       False   2018-08-04 19:26:17.000000      N/A     Disabled\n808     492     svchost.exe     0xfa801ac2e9e0  22      508     0       False   2018-08-04 19:26:18.000000      N/A     Disabled\n844     492     svchost.exe     0xfa801ac31b30  17      396     0       False   2018-08-04 19:26:18.000000      N/A     Disabled\n868     492     svchost.exe     0xfa801ac4db30  45      1114    0       False   2018-08-04 19:26:18.000000      N/A     Disabled\n......\n")),(0,n.kt)("h3",{id:"volatility-3-\u67e5\u770b\u5185\u5b58\u4e2d\u52a0\u8f7d\u4e86\u54ea\u4e9b\u6587\u4ef6"},"Volatility 3 \u67e5\u770b\u5185\u5b58\u4e2d\u52a0\u8f7d\u4e86\u54ea\u4e9b\u6587\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ vol -f OtterCTF.vmem windows.filescan\nVolatility 3 Framework 2.0.1\nProgress:  100.00               PDB scanning finished                        \nOffset  Name    Size\n\n0x5def290       \\$Directory     216\n0x5df67f0       \\Windows\\System32       216\n0x7d402680      \\Nexon\\MapleStory\\l3codeca.acm  216\n0x7d405270      \\Users\\Rick\\AppData\\Roaming\\BitTorrent\\dlimagecache\\165F6EF40A81DD175FFAEA69E77ABFD30B27E71C    216\n0x7d405d20      \\Windows\\System32\\config\\systemprofile\\AppData\\LocalLow\\Microsoft\\CryptnetUrlCache\\MetaData\\DDA81A73291E20E6ACF6CACA76D5C942_4D9486FF3A1DA70CF6B67432FCEC9330   216\n0x7d406510      \\Windows\\assembly\\NativeImages_v2.0.50727_32\\SMDiagnostics\\8218dc4808b77f3585fb048c61597af1\\SMDiagnostics.ni.dll        216\n0x7d413930      \\Windows\\Microsoft.NET\\Framework64\\v2.0.50727\\CONFIG\\machine.config     216\n0x7d414dc0      \\Windows\\System32\\en-US\\setupapi.dll.mui        216\n")),(0,n.kt)("h3",{id:"volatility-3-\u6839\u636e-filescan-\u7684\u7ed3\u679c\u63d0\u53d6\u5185\u5b58\u4e2d\u7684\u6587\u4ef6"},"Volatility 3 \u6839\u636e filescan \u7684\u7ed3\u679c\u63d0\u53d6\u5185\u5b58\u4e2d\u7684\u6587\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ vol -f OtterCTF.vmem windows.filescan | grep READ_IT\n0x7d660500 100.0\\Users\\Rick\\Desktop\\READ_IT.txt 216\nrandark@randark-virtual-machine:~$ vol -f OtterCTF.vmem windows.dumpfiles --physaddr 0x7d660500\nVolatility 3 Framework 2.0.1\nProgress:  100.00               PDB scanning finished                        \nCache   FileObject      FileName        Result\n\nDataSectionObject       0x7d660500      READ_IT.txt     file.0x7d660500.0xfa801b2def10.DataSectionObject.READ_IT.txt.dat\nrandark@randark-virtual-machine:~$ cat file.0x7d660500.0xfa801b2def10.DataSectionObject.READ_IT.txt.dat \nYour files have been encrypted.\nRead the Program for more information\nread program for more information.\n")),(0,n.kt)("h2",{id:"volatility-2-windows-\u76f8\u5173\u6a21\u5757"},"Volatility 2 Windows \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,"TODO Volatility 2 Windows \u76f8\u5173\u6a21\u5757"),(0,n.kt)("h2",{id:"volatility-3-windows-\u76f8\u5173\u6a21\u5757"},"Volatility 3 Windows \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,"TODO Volatility 3 Windows \u76f8\u5173\u6a21\u5757"),(0,n.kt)("h2",{id:"volatility-2-linux-\u76f8\u5173\u6a21\u5757"},"Volatility 2 Linux \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,"TODO Volatility 2 Linux \u76f8\u5173\u6a21\u5757"),(0,n.kt)("h2",{id:"volatility-3-linux-\u76f8\u5173\u6a21\u5757"},"Volatility 3 Linux \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,"TODO Volatility 3 Linux \u76f8\u5173\u6a21\u5757"))}m.isMDXComponent=!0},8562:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image_20230738-163858-6b90abef4788eb8a54732c9bdd2d6a06.png"},3982:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image_20230739-163921-016338f1741aeb80caf4594b5e1a71b4.png"}}]);