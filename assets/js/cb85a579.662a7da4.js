"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4933],{3905:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>c});var l=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,l)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e){if(null==t)return{};var i,l,a=function(t,e){if(null==t)return{};var i,l,a={},n=Object.keys(t);for(l=0;l<n.length;l++)i=n[l],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)i=n[l],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var p=l.createContext({}),s=function(t){var e=l.useContext(p),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},u=function(t){var e=s(t.components);return l.createElement(p.Provider,{value:e},t.children)},m="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var i=t.components,a=t.mdxType,n=t.originalType,p=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),m=s(i),d=a,c=m["".concat(p,".").concat(d)]||m[d]||y[d]||n;return i?l.createElement(c,o(o({ref:e},u),{},{components:i})):l.createElement(c,o({ref:e},u))}));function c(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=i.length,o=new Array(n);o[0]=d;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r[m]="string"==typeof t?t:a,o[1]=r;for(var s=2;s<n;s++)o[s]=i[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,i)}d.displayName="MDXCreateElement"},1011:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>n,metadata:()=>r,toc:()=>s});var l=i(7462),a=(i(7294),i(3905));const n={},o="Volatility \u63d2\u4ef6\u6307\u5357",r={unversionedId:"Forensic/Memory-Forensic/Volatility-Guide/Volatility \u63d2\u4ef6\u6307\u5357",id:"Forensic/Memory-Forensic/Volatility-Guide/Volatility \u63d2\u4ef6\u6307\u5357",title:"Volatility \u63d2\u4ef6\u6307\u5357",description:"\u5728 Volatility 2 \u4e2d\u4f7f\u7528\u63d2\u4ef6",source:"@site/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility \u63d2\u4ef6\u6307\u5357.md",sourceDirName:"Forensic/Memory-Forensic/Volatility-Guide",slug:"/Forensic/Memory-Forensic/Volatility-Guide/Volatility \u63d2\u4ef6\u6307\u5357",permalink:"/Treasure-House/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility \u63d2\u4ef6\u6307\u5357",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility \u63d2\u4ef6\u6307\u5357.md",tags:[],version:"current",frontMatter:{},sidebar:"Forensic_Sidebar",previous:{title:"Volatility \u4f7f\u7528\u5165\u95e8",permalink:"/Treasure-House/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility \u4f7f\u7528\u5165\u95e8"},next:{title:"\u5982\u4f55\u5b89\u88c5 Volatility",permalink:"/Treasure-House/docs/Forensic/Memory-Forensic/Volatility-Guide/\u5982\u4f55\u5b89\u88c5 Volatility"}},p={},s=[{value:"\u5728 Volatility 2 \u4e2d\u4f7f\u7528\u63d2\u4ef6",id:"\u5728-volatility-2-\u4e2d\u4f7f\u7528\u63d2\u4ef6",level:2},{value:"\u5728 Volatility 3 \u4e2d\u4f7f\u7528\u63d2\u4ef6",id:"\u5728-volatility-3-\u4e2d\u4f7f\u7528\u63d2\u4ef6",level:2},{value:"\u63d2\u4ef6\u5217\u8868",id:"\u63d2\u4ef6\u5217\u8868",level:2},{value:"\u5e38\u7528\u63d2\u4ef6",id:"\u5e38\u7528\u63d2\u4ef6",level:2},{value:"mimikatz for volatility",id:"mimikatz-for-volatility",level:3},{value:"volatility-docker",id:"volatility-docker",level:3}],u={toc:s},m="wrapper";function y(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"volatility-\u63d2\u4ef6\u6307\u5357"},"Volatility \u63d2\u4ef6\u6307\u5357"),(0,a.kt)("h2",{id:"\u5728-volatility-2-\u4e2d\u4f7f\u7528\u63d2\u4ef6"},"\u5728 Volatility 2 \u4e2d\u4f7f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5bf9\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 2"),"\u4e2d\u52a0\u8f7d\u63d2\u4ef6\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a\u4e00\u79cd\u662f\u76f4\u63a5\u5c06\u63d2\u4ef6\u6587\u4ef6\u653e\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u7684\u63d2\u4ef6\u76ee\u5f55\uff1b\u53e6\u5916\u4e00\u79cd\u662f\u5728\u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u7684\u65f6\u5019\u624b\u52a8\u6307\u5b9a\u63d2\u4ef6\u76ee\u5f55\u3002\u7b2c\u4e00\u79cd\u867d\u7136\u662f\u4e00\u52b3\u6c38\u9038\u7684\uff0c\u4f46\u662f\u7531\u4e8e\u7b2c\u4e00\u79cd\u65b9\u6848\u4f1a\u5bfc\u81f4",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u5728\u6bcf\u6b21\u542f\u52a8\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u52a0\u8f7d\u4e00\u6b21\u6240\u6709\u7684\u63d2\u4ef6\uff0c\u4f1a\u589e\u52a0\u542f\u52a8\u7528\u65f6\uff0c\u5e76\u4e14\u90e8\u5206\u60c5\u51b5\u4e0b\u8fd8\u4f1a\u5bfc\u81f4\u4e0d\u540c\u7684\u63d2\u4ef6\u4e4b\u95f4\u53d1\u751f\u51b2\u7a81\uff1b\u800c\u7b2c\u4e8c\u79cd\u53ea\u9700\u8981\u5c06\u63d2\u4ef6\u6574\u7406\u5728\u4e00\u4e2a\u6587\u4ef6\u5939\u5185\uff0c\u9700\u8981\u7684\u65f6\u5019\u518d\u52a0\u8f7d\u5373\u53ef\u3002"),(0,a.kt)("p",null,"!!! info\n\u672c\u6587\u5c55\u793a\u6240\u7528\u7684\u73af\u5883\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"/Treasure-House/docs/Forensic/Memory-Forensic/Volatility-Guide/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85%20Volatility"},"\u5982\u4f55\u5b89\u88c5 Volatility")," \u6240\u642d\u5efa\u7684\u73af\u5883\uff0c\u82e5\u4f7f\u7528\u5176\u4ed6\u7684\u73af\u5883\uff0c\u5219\u9700\u8981\u81ea\u884c\u5224\u65ad\u73af\u5883\u7684\u5f02\u540c\u70b9\uff08\u7406\u8bba\u4e0a\u82e5\u662f\u6b63\u786e\u5b89\u88c5\uff0c\u5219\u662f\u4e0d\u4f1a\u6709\u5dee\u5f02\u7684\uff09"),(0,a.kt)("p",null,"!!! info\n\u82e5\u9700\u8981\u67e5\u770b\u76ee\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u5df2\u7ecf\u52a0\u8f7d\u7684\u6240\u6709\u63d2\u4ef6\uff0c\u5219\u9700\u8981\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"vol.py \u2014info"),"\u6307\u4ee4\uff0c\u5728\u6307\u4ee4\u8f93\u51fa\u4e2d\u5c31\u53ef\u4ee5\u770b\u5230\u6240\u6709\u5df2\u52a0\u8f7d\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u82e5\u9009\u62e9\u76f4\u63a5\u5c06\u63d2\u4ef6\u6587\u4ef6\u653e\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u7684\u63d2\u4ef6\u76ee\u5f55\uff0c\u9996\u5148\u5c31\u662f\u9700\u8981\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u7684\u4e3b\u76ee\u5f55\uff08\u5bf9\u4e8e\u4e8c\u8fdb\u5236\u7248\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\uff0c\u5219\u6ca1\u6709\u4e3b\u76ee\u5f55\uff0c\u9700\u8981\u4f7f\u7528\u4e0a\u6587\u7684\u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ pip list | grep vol\nDEPRECATION: Python 2.7 reached the end of its life on January 1st, 2020. Please upgrade your Python as Python 2.7 is no longer maintained. pip 21.0 will drop support for Python 2.7 in January 2021. More details about Python 2 support in pip can be found at https://pip.pypa.io/en/latest/development/release-process/#python-2-support pip 21.0 will remove support for this functionality.\nvolatility   2.6.1\n\nrandark@randark-virtual-machine:~$ pip show volatility\nDEPRECATION: Python 2.7 reached the end of its life on January 1st, 2020. Please upgrade your Python as Python 2.7 is no longer maintained. pip 21.0 will drop support for Python 2.7 in January 2021. More details about Python 2 support in pip can be found at https://pip.pypa.io/en/latest/development/release-process/#python-2-support pip 21.0 will remove support for this functionality.\nName: volatility\nVersion: 2.6.1\nSummary: Volatility -- Volatile memory framework\nHome-page: http://www.volatilityfoundation.org\nAuthor: AAron Walters\nAuthor-email: awalters@4tphi.net\nLicense: GPL\nLocation: /usr/local/lib/python2.7/dist-packages/volatility-2.6.1-py2.7.egg\nRequires: \nRequired-by:\n")),(0,a.kt)("p",null,"\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"pip list | grep vol"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"pip show volatility"),"\u4e24\u4e2a\u6307\u4ee4\u7684\u8f93\u51fa\uff0c\u5c31\u53ef\u4ee5\u770b\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u5728\u73af\u5883\u4e2d\u7684\u5177\u4f53\u4fe1\u606f\uff0c\u5e76\u5f97\u77e5",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u7684\u6240\u5728\u4f4d\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/python2.7/dist-packages/volatility-2.6.1-py2.7.egg/"),"\u3002"),(0,a.kt)("p",null,"\u8fdb\u5165\u5bf9\u5e94\u7684\u76ee\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ cd /usr/local/lib/python2.7/dist-packages/volatility-2.6.1-py2.7.egg/\nrandark@randark-virtual-machine:/usr/local/lib/python2.7/dist-packages/volatility-2.6.1-py2.7.egg$ ls -lh\ntotal 16K\ndrwxr-sr-x 4 root staff 4.0K 11 \u6708 16 13:08 contrib\ndrwxr-sr-x 3 root staff 4.0K 11 \u6708 16 13:08 EGG-INFO\ndrwxr-sr-x 6 root staff 4.0K 11 \u6708 16 13:08 tools\ndrwxr-sr-x 5 root staff 4.0K 11 \u6708 16 13:08 volatility\n\nrandark@randark-virtual-machine:/usr/local/lib/python2.7/dist-packages/volatility-2.6.1-py2.7.egg$ cd volatility/\nrandark@randark-virtual-machine:/usr/local/lib/python2.7/dist-packages/volatility-2.6.1-py2.7.egg/volatility$ ls -lh\ntotal 452K\n......\ndrwxr-sr-x 9 root staff 4.0K 11 \u6708 16 13:08 plugins\n......\n-rw-r--r-- 1 root staff 1.6K 11 \u6708 16 13:08 validity.py\n-rw-r--r-- 1 root staff 2.3K 11 \u6708 16 13:08 validity.pyc\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u5176\u4e2d\u53d1\u73b0\u4e00\u4e2a\u6587\u4ef6\u5939\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\uff0c\u5176\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u63d2\u4ef6\u7684\u5b58\u653e\u5b58\u5f84\u3002\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\u6587\u4ef6\u5939\u4e2d\u8fd8\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"linux"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"mac"),"\u4e24\u4e2a\u6587\u4ef6\u5939\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\u6587\u4ef6\u5939\u548c\u5176\u5b50\u6587\u4ef6\u5939\u5171\u540c\u7ec4\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u542f\u52a8\u65f6\u4f1a\u81ea\u52a8\u52a0\u8f7d\u7684\u63d2\u4ef6\u6240\u5b58\u653e\u7684\u76ee\u5f55\uff0c\u5b58\u653e\u5728\u5176\u4e2d\u7684\u63d2\u4ef6\u90fd\u4f1a\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u542f\u52a8\u7684\u65f6\u5019\u81ea\u52a8\u52a0\u8f7d\u3002\u9700\u8981\u4f7f\u7528\u7b2c\u4e00\u79cd\u65b9\u5f0f\u6dfb\u52a0\u63d2\u4ef6\u7684\u8bdd\uff0c\u53ea\u9700\u8981\u5c06\u63d2\u4ef6\u6587\u4ef6\u76f4\u63a5\u6dfb\u52a0\u8fdb",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\u6587\u4ef6\u5939\u6216\u5176\u5b50\u6587\u4ef6\u5939\u5373\u53ef\u3002"),(0,a.kt)("p",null,"!!!warning"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c`plugins`\u6587\u4ef6\u5939\u4f4d\u4e8e`/usr/local/lib/`\u6587\u4ef6\u5939\u5185\uff0c\u4fee\u6539\u5176\u4e2d\u7684\u6570\u636e\u9700\u8981\u6700\u9ad8\u6743\u9650\uff08`root`\uff09\uff0c\u5728\u64cd\u4f5c\u7684\u65f6\u5019\u9700\u8981\u5207\u6362\u5230`root`\u8d26\u6237\uff08`sudo su`\uff09\uff0c\u6216\u8005\u4f7f\u7528`sudo`\u547d\u4ee4\u8fdb\u884c\u77ed\u6682\u63d0\u6743\uff08`sudo <your command>`\uff09\u5982\uff1a\n\n```shell\nsudo cp mimikatz.py /usr/local/lib/python2.7/dist-packages/volatility-2.6.1-py2.7.egg/volatility/plugins/\n```\n")),(0,a.kt)("p",null,"\u5c06\u63d2\u4ef6\u6dfb\u52a0\u8fdb",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\u6587\u4ef6\u5939\u5185\u4e4b\u540e\uff0c\u518d\u6b21\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"vol.py \u2014info"),"\uff0c\u5373\u53ef\u67e5\u770b\u63d2\u4ef6\u7684\u52a0\u8f7d\u60c5\u51b5\uff0c\u5e76\u67e5\u770b\u6dfb\u52a0\u7684\u63d2\u4ef6\u662f\u5426\u88ab\u6b63\u786e\u52a0\u8f7d\uff08\u53ea\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"vol.py \u2014info"),"\u8f93\u51fa\u4e2d\u770b\u5230\u6dfb\u52a0\u7684\u63d2\u4ef6\u540d\u79f0\uff0c\u5e76\u4e14\u6ca1\u6709\u62a5\u9519\uff0c\u5c31\u662f\u63d2\u4ef6\u5df2\u88ab\u6210\u529f\u6dfb\u52a0\uff09"),(0,a.kt)("p",null,"\u82e5\u4f7f\u7528\u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff0c\u5373\u5728\u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u7684\u65f6\u5019\u624b\u52a8\u6307\u5b9a\u63d2\u4ef6\u76ee\u5f55\uff0c\u5219\u9700\u8981\u81ea\u884c\u786e\u5b9a\u4e00\u4e2a\u8def\u5f84\u5b58\u653e\u63d2\u4ef6\u6587\u4ef6\uff0c\u7136\u540e\u5728\u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u7684\u65f6\u5019\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"--plugins=PLUGINS"),"\u53c2\u6570\u3002\u76f8\u5173\u53c2\u6570\u53ef\u4ee5\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u7684\u5e2e\u52a9\u4fe1\u606f\u4e2d\u67e5\u9605\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ vol.py -h\n......\n--plugins=PLUGINS     Additional plugin directories to use (colon separated)\n")),(0,a.kt)("p",null,"\u4f8b\u5982\u60f3\u8981\u52a0\u8f7d\u5206\u6790\u5185\u5b58\u4e2d firefox \u4e2d\u7f13\u5b58\u6570\u636e\u7684\u63d2\u4ef6\u2014\u2014firefoxhistory.py\uff0c\u5c06 community/DaveLasalle/\u4e0b\u7684\u63d2\u4ef6\u6587\u4ef6\u4fdd\u5b58\u5728\u4e00\u4e2a\u81ea\u5b9a\u76ee\u5f55\uff0c\u7136\u540e\u5982\u4ee5\u4e0b\u6307\u4ee4\u5c06\u63d2\u4ef6\u52a0\u8f7d\u8fdb Volatility\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vol.py --plugins=./plugins_for_vol2 <your commmand>\n")),(0,a.kt)("p",null,"\u52a0\u8f7d\u6210\u529f\u7684\u8bdd\uff0c\u5e94\u8be5\u5728\u2014info \u7684\u8f93\u51fa\u4e2d\u770b\u5230\u63d2\u4ef6\u7684\u4fe1\u606f\uff0c\u5982\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u63d2\u4ef6\u6210\u529f\u52a0\u8f7d\u63d0\u793a",src:i(3098).Z,width:"982",height:"83"})),(0,a.kt)("h2",{id:"\u5728-volatility-3-\u4e2d\u4f7f\u7528\u63d2\u4ef6"},"\u5728 Volatility 3 \u4e2d\u4f7f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5982\u4e0a\u6587\uff0c\u4e5f\u662f\u901a\u8fc7 pip3 show volatility3 \u6765\u67e5\u770b Volatility3 \u7684\u6240\u5728\u4f4d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ pip3 show volatility3\nName: volatility3\nVersion: 2.0.1\nSummary: Memory forensics framework\nHome-page: https://github.com/volatilityfoundation/volatility3/\nAuthor: Volatility Foundation\nAuthor-email: volatility@volatilityfoundation.org\nLicense: VSL\nLocation: /usr/local/lib/python3.10/dist-packages\nRequires: pefile\nRequired-by:\n")),(0,a.kt)("p",null,"\u8fdb\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 3"),"\u6240\u5728\u7684\u76ee\u5f55\uff0c\u53ef\u4ee5\u53d1\u73b0\u5b58\u5728\u4e24\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\u76ee\u5f55\uff0c\u5206\u522b\u662f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/lib/python3.10/dist-packages/volatility3/plugins"),"\u548c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/lib/python3.10/dist-packages/volatility3/framework/plugins"),"\uff0c")),(0,a.kt)("p",null,"\u5269\u4e0b\u7684\u6b65\u9aa4\u4e0e Volatility 2 \u76f8\u540c\uff0c\u6545\u4e0d\u591a\u505a\u9610\u8ff0\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u5217\u8868"},"\u63d2\u4ef6\u5217\u8868"),(0,a.kt)("p",null,"\u641c\u7d22\u63d2\u4ef6\u6700\u597d\u7684\u529e\u6cd5\uff0c\u4fbf\u662f Volatility Foundation \u5b98\u65b9\u7684\u63d2\u4ef6\u5e93\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/volatilityfoundation/community"},"plugins for Volatility2")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/volatilityfoundation/community3"},"plugins for Volatility3")),(0,a.kt)("p",null,"\u7edd\u5927\u591a\u6570\u63d2\u4ef6\u90fd\u53ef\u4ee5\u5728\u4e0a\u9762\u7684\u4ed3\u5e93\u4e2d\u627e\u5230\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"community"),"\u4e2d\u7684\u63d2\u4ef6\u9002\u7528\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 2"),"\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"community"),"3 \u4e2d\u7684\u63d2\u4ef6\u9002\u7528\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 3"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6709\u5f00\u53d1",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u63d2\u4ef6\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://volatility3.readthedocs.io/en/latest/development.html"},"Volatility 3 - Writing Plugins")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/volatilityfoundation/volatility/wiki/Style-Guide"},"Volatility 2 - Style Guide"))),(0,a.kt)("h2",{id:"\u5e38\u7528\u63d2\u4ef6"},"\u5e38\u7528\u63d2\u4ef6"),(0,a.kt)("h3",{id:"mimikatz-for-volatility"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/volatilityfoundation/community/blob/master/FrancescoPicasso/mimikatz.py"},"mimikatz for volatility")),(0,a.kt)("p",null,"Volatility 2 \u4e2d\u53ef\u80fd\u6700\u4e3a\u4eba\u77e5\u7684\u63d2\u4ef6-",(0,a.kt)("inlineCode",{parentName:"p"},"mimikatz for volatility")),(0,a.kt)("p",null,"\u4f5c\u8005\u7684\u63d2\u4ef6\u539f\u7406\u5206\u6790\u6587\u7ae0\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://blog.digital-forensics.it/2014/03/et-voila-le-mimikatz-offline.html"},"\u8fd9\u662f\u79bb\u7ebf\u7684 mimikatz")),(0,a.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"mimikatz for volatility"),"\uff0c\u53d6\u8bc1\u5206\u6790\u4eba\u5458\u53ef\u4ee5\u76f4\u63a5\u4ece\u5185\u5b58\u955c\u50cf\u4e2d\u83b7\u53d6 Windows \u7684\u5f00\u673a\u5bc6\u7801\uff08\u4ec5\u9650\u4e8e\u63d0\u53d6\u5185\u5b58\u65f6\u5df2\u7ecf\u767b\u5f55\u7684\u7528\u6237\uff09\uff0c\u4ece\u800c\u907f\u514d\u76f4\u63a5\u5bf9\u7740 NTLM \u54c8\u5e0c\u8fdb\u884c\u7206\u7834\uff0c\u4ece\u800c\u5927\u5927\u51cf\u5c11\u63d0\u53d6\u5f00\u673a\u5bc6\u7801\u7684\u65f6\u95f4\u3002"),(0,a.kt)("p",null,"!!! note\nmimikatz for volatility",(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u9002\u7528\u4e8e"),"Volatility 2",(0,a.kt)("inlineCode",{parentName:"p"},"\uff0c\u5e76\u4e14\u6839\u636e\u5176\u6e90\u4ee3\u7801\uff0c\u4ec5\u652f\u6301"),"Windows 7",(0,a.kt)("inlineCode",{parentName:"p"},"\u7248\u672c\u53ca\u4ee5\u4e0b\u7684"),"Windows`\u7cfb\u7edf\u6240\u63d0\u53d6\u7684\u5185\u5b58\u955c\u50cf\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"mimikatz for volatility"),"\u5728\u9488\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"Windows"),"\u7684\u5185\u5b58\u53d6\u8bc1\u5206\u6790\u4e2d\u975e\u5e38\u5e38\u7528\uff0c\u6545\u76f4\u63a5\u4f7f\u7528\u4e0a\u6587\u7684\u7b2c\u4e00\u79cd\u65b9\u5f0f\uff0c\u76f4\u63a5\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"mimikatz for volatility"),"\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u4e3b\u6587\u4ef6\u5939\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\u6587\u4ef6\u5939\u5185\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ cd /usr/local/lib/python2.7/dist-packages/volatility-2.6.1-py2.7.egg/volatility/plugins/\nrandark@randark-virtual-machine:/usr/local/lib/python2.7/dist-packages/volatility-2.6.1-py2.7.egg/volatility/plugins$ ls -lh | grep mimikatz\n-rw-r--r-- 1 randark randark  21K 11 \u6708 18 22:23 mimikatz.py\nrandark@randark-virtual-machine:/usr/local/lib/python2.7/dist-packages/volatility-2.6.1-py2.7.egg/volatility/plugins$\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"vol.py \u2014info"),"\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u53d1\u73b0\u6709\u62a5\u9519\u4fe1\u606f\uff0c\u5e76\u4e14",(0,a.kt)("inlineCode",{parentName:"p"},"mimikatz for volatility"),"\u5e76\u6ca1\u6709\u88ab\u6210\u529f\u52a0\u8f7d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ vol.py --info\nVolatility Foundation Volatility Framework 2.6.1\n*** Failed to import volatility.plugins.mimikatz (ImportError: No module named construct)\n.......\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u62a5\u9519\u4fe1\u606f\uff0c\u53ef\u4ee5\u5f97\u77e5\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Python 2"),"\u4e2d\u7f3a\u5c11\u4e00\u4e2a\u7b2c\u4e09\u65b9\u5e93\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"construct"),"\u3002\u901a\u8fc7\u4e00\u822c\u601d\u8def\uff0c\u76f4\u63a5\u901a\u8fc7 pip \u5b89\u88c5 construct \u5e93\uff0c\u7136\u540e\u518d\u6b21\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"vol.py \u2014info"),"\uff0c\u53ef\u4ee5\u53d1\u73b0\u4ecd\u7136\u5b58\u5728\u62a5\u9519\u4fe1\u606f\uff0c\u5e76\u4e14\u53d1\u751f\u4e86\u53d8\u5316\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ vol.py --info \nVolatility Foundation Volatility Framework 2.6.1\n*** Failed to import volatility.plugins.mimikatz (AttributeError: 'module' object has no attribute 'ULInt32')\n")),(0,a.kt)("p",null,"\u5728\u67e5\u9605\u76f8\u5173\u6750\u6599\u4e4b\u540e\uff0c\u53ef\u4ee5\u5f97\u77e5\u8fd9\u4e2a\u95ee\u9898\u51fa\u5728\u4e0d\u540c\u7248\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"construct"),"\u5e93\u4e0a\u3002\u5728\u5378\u8f7d\u6389\u539f\u5148\u5b89\u88c5\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"construct"),"\u5e93\u4e4b\u540e\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"pip uninstall construct"),"\uff09\uff0c\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"pip install pip install construct==2.5.5-reupload -i https://pypi.tuna.tsinghua.edu.cn/simple"),"\uff0c\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u5728\u8fdb\u884c\u76f8\u5173\u4fee\u590d\u4e4b\u540e\uff0c\u518d\u6b21\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"vol.py \u2014info"),"\uff0c\u5373\u53ef\u53d1\u73b0\u6ca1\u6709\u4e86\u62a5\u9519\u4fe1\u606f\uff0c\u5e76\u4e14",(0,a.kt)("inlineCode",{parentName:"p"},"mimikatz for volatility"),"\u5df2\u7ecf\u53ef\u4ee5\u88ab\u6210\u529f\u52a0\u8f7d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"randark@randark-virtual-machine:~$ vol.py --info\nVolatility Foundation Volatility Framework 2.6.1\n\n......\nmimikatz                   - mimikatz offline\n")),(0,a.kt)("p",null,"\u90a3\u4e48",(0,a.kt)("inlineCode",{parentName:"p"},"mimikatz for volatility"),"\u63d2\u4ef6\u5c31\u5df2\u7ecf\u88ab\u6210\u529f\u5b89\u88c5\u8fdb\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 2")),(0,a.kt)("h3",{id:"volatility-docker"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/volatilityfoundation/community3/tree/master/Sheffer_Shaked_Docker"},"volatility-docker")),(0,a.kt)("p",null,"\u57fa\u4e8e Volatility 3 \u7684\u4e00\u4e2a\u7528\u4e8e\u5206\u6790 Docker \u73af\u5883\u7684\u63d2\u4ef6\uff0c\u80fd\u591f\u8bc6\u522b Docker \u7684\u5bb9\u5668\u5217\u8868\u3001\u7f51\u7edc\u4fe1\u606f\u7b49\u7b49"))}y.isMDXComponent=!0},3098:(t,e,i)=>{i.d(e,{Z:()=>l});const l=i.p+"assets/images/image_20230751-165141-d206ac01a87560d246987efee5dea83a.png"}}]);