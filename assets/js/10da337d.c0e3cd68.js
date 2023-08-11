"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[7101],{3905:(t,e,i)=>{i.d(e,{Zo:()=>d,kt:()=>y});var n=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)i=l[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)i=l[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var r=n.createContext({}),s=function(t){var e=n.useContext(r),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},d=function(t){var e=s(t.components);return n.createElement(r.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,l=t.originalType,r=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=s(i),u=a,y=c["".concat(r,".").concat(u)]||c[u]||m[u]||l;return i?n.createElement(y,o(o({ref:e},d),{},{components:i})):n.createElement(y,o({ref:e},d))}));function y(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=i.length,o=new Array(l);o[0]=u;var p={};for(var r in e)hasOwnProperty.call(e,r)&&(p[r]=e[r]);p.originalType=t,p[c]="string"==typeof t?t:a,o[1]=p;for(var s=2;s<l;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},4905:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const l={sidebar_position:0,sidebar_label:"Volatility \u5982\u4f55\u5b89\u88c5",sidebar_class_name:"green"},o="Volatility \u5982\u4f55\u5b89\u88c5",p={unversionedId:"Forensic/Memory-Forensic/Volatility-Guide/Volatility-installation",id:"Forensic/Memory-Forensic/Volatility-Guide/Volatility-installation",title:"Volatility \u5982\u4f55\u5b89\u88c5",description:"\u8fd9\u91cc\u7528\u4f5c\u6f14\u793a\u7684\u7cfb\u7edf\u4e3aUbuntu-22.04-desktop-amd64 \uff0c\u5b89\u88c5\u53c2\u6570\u4e3a\u9009\u62e9\u4e86\u6700\u5c0f\u5b89\u88c5\u3002\u5176\u5b83\u7cfb\u7edf\u4e5f\u53ef\u4ee5\uff0c\u4f46\u662f\u8fd8\u662f\u5efa\u8bae\u65b0\u7248\u672c Ubuntu\uff0c\u6bd5\u7adf\u51fa\u4e86\u95ee\u9898\u4fee\u8d77\u6765\u4e5f\u5bb9\u6613",source:"@site/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility-installation.md",sourceDirName:"Forensic/Memory-Forensic/Volatility-Guide",slug:"/Forensic/Memory-Forensic/Volatility-Guide/Volatility-installation",permalink:"/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility-installation",draft:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility-installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Volatility \u5982\u4f55\u5b89\u88c5",sidebar_class_name:"green"},sidebar:"Forensic_Sidebar",previous:{title:"Volatility \u6307\u5357",permalink:"/docs/Forensic/Memory-Forensic/Volatility-Guide/"},next:{title:"Volatility \u4f7f\u7528\u5165\u95e8",permalink:"/docs/Forensic/Memory-Forensic/Volatility-Guide/Volatility-intro"}},r={},s=[{value:"\u5173\u4e8e\u7f51\u7edc\u95ee\u9898",id:"\u5173\u4e8e\u7f51\u7edc\u95ee\u9898",level:2},{value:"\u5b89\u88c5 Volatility 2",id:"\u5b89\u88c5-volatility-2",level:2},{value:"\u83b7\u53d6 Volatility 2 \u6e90\u7801",id:"\u83b7\u53d6-volatility-2-\u6e90\u7801",level:3},{value:"\u914d\u7f6e Python2 \u73af\u5883",id:"\u914d\u7f6e-python2-\u73af\u5883",level:3},{value:"\u5b89\u88c5 Volatility2",id:"\u5b89\u88c5-volatility2",level:3},{value:"\u5b89\u88c5 Volatility 3",id:"\u5b89\u88c5-volatility-3",level:2},{value:"\u914d\u7f6e Python3 \u73af\u5883",id:"\u914d\u7f6e-python3-\u73af\u5883",level:3},{value:"\u5b89\u88c5 Volatility3",id:"\u5b89\u88c5-volatility3",level:3}],d={toc:s},c="wrapper";function m(t){let{components:e,...l}=t;return(0,a.kt)(c,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"volatility-\u5982\u4f55\u5b89\u88c5"},"Volatility \u5982\u4f55\u5b89\u88c5"),(0,a.kt)("admonition",{title:"\u57fa\u7840\u73af\u5883",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u7528\u4f5c\u6f14\u793a\u7684\u7cfb\u7edf\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Ubuntu-22.04-desktop-amd64")," \uff0c\u5b89\u88c5\u53c2\u6570\u4e3a\u9009\u62e9\u4e86\u6700\u5c0f\u5b89\u88c5\u3002\u5176\u5b83\u7cfb\u7edf\u4e5f\u53ef\u4ee5\uff0c\u4f46\u662f\u8fd8\u662f\u5efa\u8bae\u65b0\u7248\u672c Ubuntu\uff0c\u6bd5\u7adf\u51fa\u4e86\u95ee\u9898\u4fee\u8d77\u6765\u4e5f\u5bb9\u6613"),(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u865a\u62df\u673a\u800c\u8a00\uff0c\u5efa\u8bae CPU \u5f00\u5230 2 \u6838\u5de6\u53f3\uff0c\u5185\u5b58\u5728 2G \u5de6\u53f3\uff0c\u800c\u786c\u76d8\u5efa\u8bae\u5f00\u5230 40G \u52a8\u6001\u78c1\u76d8\uff08\u4e00\u822c\u60c5\u51b5\u4e0b\u8db3\u591f\u5bb9\u7eb3 Ubuntu \u4e3b\u4f53+2~3 \u4e2a\u5185\u5b58\u955c\u50cf\uff09"),(0,a.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u53d7\u9650\u4e8e Python \u67b6\u6784\uff0c\u5b9e\u9645\u4e0a\u65e0\u8bba\u955c\u50cf\u6587\u4ef6\u6709\u591a\u5927\u6709\u591a\u96be\u5206\u6790\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility"),"\u90fd\u662f\u5355\u6838\u5e94\u7528\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u542f\u7528\u8fc7\u591a\u7684\u865a\u62df\u5316\u6838\u5fc3")),(0,a.kt)("admonition",{title:"Windows - cmd \u53ef\u80fd\u4f1a\u51fa\u73b0\u95ee\u9898",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u672c\u4eba\u5efa\u8bae\u8fd9\u7c7b\u73af\u5883\u662f\u57fa\u4e8e Linux\uff08\u672c\u4eba\u63a8\u8350 Ubuntu\uff09\uff0c\u4f7f\u7528 Windows \u6765\u5f00\u5c55\u5de5\u4f5c\u4e5f\u53ef\u4ee5"),(0,a.kt)("p",{parentName:"admonition"},"\u53e6\u5916\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 3"),"\u5728 Windows \u7684 cmd \u4e2d\u65e0\u6cd5\u6267\u884c\uff0c\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 3"),"\u6240\u7ed1\u5b9a\u7684\u6307\u4ee4\u662f vol\uff0c\u8fd9\u4e0e cmd \u4e2d\u81ea\u5e26\u7684\u6307\u4ee4\u53d1\u751f\u51b2\u7a81\uff08vol in cmd\uff1a\u663e\u793a\u78c1\u76d8\u5377\u6807\u548c\u5e8f\u5217\u53f7\uff08\u5982\u679c\u5b58\u5728\uff09\uff09\uff0c\u6545\u5982\u679c\u8981\u5728 Windows \u73af\u5883\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 3"),"\uff0c\u9700\u8981\u4f7f\u7528\u975e cmd \u7ec8\u7aef\uff08\u4f8b\u5982 Powershell\uff09")),(0,a.kt)("h2",{id:"\u5173\u4e8e\u7f51\u7edc\u95ee\u9898"},"\u5173\u4e8e\u7f51\u7edc\u95ee\u9898"),(0,a.kt)("p",null,"\u7531\u4e8e\u5927\u9646\u5185\u5bf9\u4e8e Github \u76f4\u8fde\u5df2\u7ecf\u4e0d\u5b58\u5728\u5e0c\u671b\uff0c\u6240\u4ee5\u76f8\u5173\u6e90\u7801\u5efa\u8bae\u5728\u6709\u7f51\u7edc\u4ee3\u7406\u7684\u73af\u5883\u4e0b\u5148\u4e0b\u8f7d\u597d\uff0c\u5728\u76f4\u63a5\u4f20\u8fdb Ubuntu \u5185\uff0c\u4ee5\u65b9\u4fbf\u64cd\u4f5c"),(0,a.kt)("p",null,"\u5728\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u4e4b\u524d\uff0c\u5efa\u8bae\u5148\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt update")," \u66f4\u65b0 apt \u4ed3\u5e93\u7684\u8f6f\u4ef6\u5305\u4fe1\u606f"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 pip \u5b89\u88c5\u7b2c\u4e09\u65b9\u5305\u7684\u65f6\u5019\uff0c\u4e3a\u4e86\u52a0\u5feb\u901f\u5ea6\uff0c\u4f7f\u7528\u4e86\u6e05\u534e\u5927\u5b66\u955c\u50cf\u6e90\uff0c\u53ef\u4ee5\u81ea\u884c\u51b3\u5b9a\u662f\u5426\u4fee\u6539\u76f8\u5173\u6307\u4ee4"),(0,a.kt)("h2",{id:"\u5b89\u88c5-volatility-2"},"\u5b89\u88c5 Volatility 2"),(0,a.kt)("admonition",{title:"\u4f7f\u7528\u63d0\u793a",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 2")," \u7684\u5b98\u65b9\u4ed3\u5e93\u4e2d\u53d1\u73b0\uff0c\u5176\u5b9e\u5b98\u65b9\u7684\u7528\u6cd5\u5c31\u662f\u76f4\u63a5",(0,a.kt)("inlineCode",{parentName:"p"},"python2 vol.py")," \u6240\u4ee5\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 2")," \u800c\u8a00\uff0c\u662f\u53ef\u4ee5\u76f4\u63a5\u4ece\u539f\u59cb\u7684 Python \u4ee3\u7801\u76f4\u63a5\u8fd0\u884c\u7684\uff0c\u4f46\u662f\u5982\u679c\u60f3\u8981\u5b89\u88c5\u7684\u8bdd\uff0c\u4e5f\u662f\u53ef\u4ee5\u7684\u3002")),(0,a.kt)("h3",{id:"\u83b7\u53d6-volatility-2-\u6e90\u7801"},"\u83b7\u53d6 Volatility 2 \u6e90\u7801"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5148\u4ece\u5b98\u65b9\u7684 Github \u4ed3\u5e93\u83b7\u53d6\u4e0b\u6765",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 2"),"\u7684\u5b8c\u6574\u6e90\u7801\uff0c\u76f4\u63a5",(0,a.kt)("inlineCode",{parentName:"p"},"Download ZIP"),"\u5373\u53ef\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Volatility 2 Github",src:i(1303).Z,width:"1548",height:"741"})),(0,a.kt)("p",null,"\u5c06\u4e0b\u8f7d\u4e0b\u6765\u7684 zip \u6587\u4ef6\u89e3\u538b\uff0c\u5e94\u8be5\u5f97\u5230\u7c7b\u4f3c\u4e8e\u4e0b\u9762\u7684\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Volatility 2 \u6e90\u7801",src:i(321).Z,width:"1309",height:"746"})),(0,a.kt)("p",null,"\u5c06\u8fd9\u4e9b\u6587\u4ef6\u62f7\u8d1d\u81f3 Ubuntu \u4e2d"),(0,a.kt)("h3",{id:"\u914d\u7f6e-python2-\u73af\u5883"},"\u914d\u7f6e Python2 \u73af\u5883"),(0,a.kt)("admonition",{title:"\u8bf7\u6ce8\u610f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u65b0\u7248\u672c Ubuntu \u4e2d\u5df2\u7ecf\u4e0d\u518d\u9884\u88c5 Python2 \u73af\u5883\uff0c\u9700\u8981\u624b\u52a8\u5b89\u88c5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install python2\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ubuntu \u5b89\u88c5 python2",src:i(7682).Z,width:"1440",height:"900"})),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u8fdb\u5165\u5b58\u653e ",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 2")," \u6e90\u7801\u7684\u6587\u4ef6\u5939\u5185\uff0c\u5e76\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"python2 vol.py")," \uff0c\u89c2\u5bdf\u662f\u5426\u53ef\u4ee5\u88ab\u6267\u884c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u68c0\u67e5 Volatility 2 \u8fd0\u884c\u60c5\u51b5",src:i(1479).Z,width:"1440",height:"900"})),(0,a.kt)("admonition",{title:"\u8bf7\u6ce8\u610f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5373\u4f7f\u6709\u62a5\u9519\uff0c\u4e5f\u8bf4\u660e\u53ef\u4ee5\u8fd0\u884c\uff0c\u56e0\u4e3a\u989d\u5916\u7684\u7b2c\u4e09\u65b9\u5e93\u8fd8\u6ca1\u6709\u5b89\u88c5\uff0c\u6240\u4ee5\u51fa\u73b0\u62a5\u9519\u662f\u6b63\u5e38\u7684")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5c31\u662f\u9700\u8981\u5904\u7406\u8fd0\u884c\u65f6\u6240\u4f53\u73b0\u7684\u62a5\u9519\u4fe1\u606f\u3002\u7b2c\u4e00\u6b65\uff0c\u4fbf\u662f\u5b89\u88c5 python2 \u7684\u5305\u7ba1\u7406\u5668 pip\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install python-pip\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u914d\u7f6e Python2 - pip",src:i(7489).Z,width:"1440",height:"900"})),(0,a.kt)("p",null,"\u5728 pip \u5b89\u88c5\u6210\u529f\u4e4b\u540e\uff0c\u5b89\u88c5 Volatility \u6240\u9700\u7684\u7b2c\u4e09\u65b9\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo pip2 install distorm3 pycrtptodome -i https://pypi.tuna.tsinghua.edu.cn/simple\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5c1d\u8bd5\u5b89\u88c5 pycrtptodome",src:i(6380).Z,width:"1440",height:"900"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86\u5927\u7247\u7684\u7ea2\u8272\u62a5\u9519\uff0c\u4f46\u662f\u4e0d\u8981\u614c\u5f20\uff0c\u770b\u5411\u6700\u5e95\u4e0b\u7684\u62a5\u9519\u4fe1\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u62a5\u9519\u4fe1\u606f",src:i(4429).Z,width:"1357",height:"183"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\uff0c\u5728 python \u5b89\u88c5\u8f6f\u4ef6\u5305\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5728\u7f16\u8bd1\u9636\u6bb5\uff0c\u51fa\u73b0\u4e86 include \u4e0d\u5b58\u5728\u7684\u5934\u6587\u4ef6\uff0c\u6240\u4ee5\u624d\u5bfc\u81f4\u4e86\u62a5\u9519\u3002\u5728\u67e5\u9605\u4e86\u76f8\u5173\u8d44\u6599\u540e\uff0c\u5f97\u77e5\u95ee\u9898\u51fa\u5728\u6ca1\u6709\u5b89\u88c5 python2 \u7684\u7f16\u8bd1\u4f9d\u8d56\u5934\u6587\u4ef6\u5e93\u5bfc\u81f4\u7684\uff0c\u5b89\u88c5\u4e0a\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install python2-dev\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5b89\u88c5 python2-dev",src:i(9829).Z,width:"1440",height:"900"})),(0,a.kt)("p",null,"\u5b89\u88c5\u597d python2-dev \u8f6f\u4ef6\u5305\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u7ee7\u7eed\u4e4b\u524d\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo pip2 install distorm3 pycrtptodome -i https://pypi.tuna.tsinghua.edu.cn/simple\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u7ee7\u7eed\u5b89\u88c5 pycrtptodome",src:i(2210).Z,width:"1440",height:"900"})),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u7ee7\u7eed\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 2"),"\u770b\u770b\u6548\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python2 vol.py \n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u68c0\u67e5 volatility2 \u8fd0\u884c\u60c5\u51b5",src:i(9161).Z,width:"1440",height:"900"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u4e4b\u524d\u7684\u5927\u91cf\u62a5\u9519\u4fe1\u606f\u5df2\u7ecf\u4e0d\u89c1\u4e86\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u4ec5\u6709\u4e00\u884c\u4fe1\u606f\uff0c\u63d0\u793a\u6211\u4eec\u8f93\u5165\u53c2\u6570\u8fdb\u884c\u64cd\u4f5c\u3002\u81f3\u6b64\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 2"),"\u5df2\u7ecf\u53ef\u4ee5\u76f4\u63a5\u4ece\u6e90\u7801\u8fd0\u884c\uff0c\u5e76\u5f00\u5c55\u76f8\u5173\u53d6\u8bc1\u5206\u6790\u5de5\u4f5c\u3002"),(0,a.kt)("h3",{id:"\u5b89\u88c5-volatility2"},"\u5b89\u88c5 Volatility2"),(0,a.kt)("p",null,"\u4e0a\u9762\u6b65\u9aa4\u53ea\u662f\u914d\u7f6e\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility2"),"\u7684\u8fd0\u884c\u73af\u5883\uff0c\u5bf9\u4e8e\u8fdb\u4e00\u6b65\u5b89\u88c5\u9700\u6c42\uff0c\u5219\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py"),"\u6587\u4ef6\u8fdb\u884c\u5b89\u88c5\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo python2 setup.py install\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5b89\u88c5 volatility2",src:i(4838).Z,width:"1440",height:"900"})),(0,a.kt)("p",null,"\u5728\u5927\u91cf\u7684\u4fe1\u606f\u6eda\u5c4f\u4e4b\u540e\uff0c\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u6700\u7ec8\u64cd\u4f5c\u6210\u529f\u7684\u4fe1\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5b89\u88c5 volatility2 \u6210\u529f",src:i(408).Z,width:"700",height:"63"})),(0,a.kt)("p",null,"\u6b64\u65f6\uff0c\u8981\u4f7f\u7528 Vol2 \u7684\u8bdd\uff0c\u5c31\u4e0d\u5fc5\u518d\u4ece\u6e90\u7801\u8fd0\u884c\u4e86\uff0c\u800c\u662f\u76f4\u63a5\u5728\u7ec8\u7aef\u6267\u884c vol.py \u6307\u4ee4\uff0c\u5c31\u53ef\u4ee5\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 2"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vol.py\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6267\u884c volatility2",src:i(6033).Z,width:"1440",height:"900"})),(0,a.kt)("h2",{id:"\u5b89\u88c5-volatility-3"},"\u5b89\u88c5 Volatility 3"),(0,a.kt)("p",null,"\u76f8\u8f83\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 2"),"\u8981\u901a\u8fc7\u6e90\u7801\u6765\u7f16\u8bd1\u5b89\u88c5\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 3"),"\u7684\u5b89\u88c5\u5219\u66f4\u4e3a\u4eba\u6027\u5316\uff1a\u76f4\u63a5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"pip3"),"\u6765\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/volatility3/"},"Python3 - volatility3 in Pypi")),(0,a.kt)("admonition",{title:"python 2 & 3 \u73af\u5883\u51b2\u7a81\u95ee\u9898",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cLinux \u7cfb\u7edf\u4e2d\uff0c\u5141\u8bb8 Python2 \u4e0e Python3 \u73af\u5883\u5e76\u5b58\uff0c\u4f46\u662f\u4e8c\u8005\u7684\u4f9d\u8d56\u5e93\uff08python-dev\uff09\u548c\u7b2c\u4e09\u65b9\u5305\uff08\u901a\u8fc7 pip \u5305\u7ba1\u7406\u5668\u5b89\u88c5\u7684\u7b2c\u4e09\u65b9\u5305\uff09\u5e76\u4e0d\u4f1a\u5171\u4eab\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u5982\u679c\u5982\u4e0a\u6587\u5b89\u88c5\u597d Vol 2 \u4e4b\u540e\uff0c\u76f8\u5173\u64cd\u4f5c\u4e5f\u8981\u518d\u91cd\u590d\u4e00\u904d"),(0,a.kt)("p",{parentName:"admonition"},"\u53e6\u5916\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cpython-pip \u548c python3-pip \u4e24\u4e2a\u5305\u7ba1\u7406\u5668\u65e0\u6cd5\u901a\u8fc7 apt \u6765\u540c\u65f6\u5b58\u5728\uff0c\u5982\u679c\u9700\u8981\u4e24\u4e2a\u7248\u672c\u7684 pip \u5171\u5b58\u7684\u8bdd\uff0c\u8bf7\u8003\u8651\u4e00\u4e2a\u624b\u52a8\u5b89\u88c5\u4e00\u4e2a\u7528 apt \u5b89\u88c5\uff0c\u6216\u8005\u76f4\u63a5\u4e24\u4e2a\u90fd\u624b\u52a8\u5b89\u88c5"),(0,a.kt)("p",{parentName:"admonition"},"\u76f8\u5173\u64cd\u4f5c\u53ef\u4ee5\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_42533216/article/details/120672856"},"\u4f7f\u7528 get-pip.py \u5b89\u88c5 python2 \u7684 pip"))),(0,a.kt)("h3",{id:"\u914d\u7f6e-python3-\u73af\u5883"},"\u914d\u7f6e Python3 \u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ubuntu 22.04")," \u5df2\u7ecf\u9884\u88c5\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python 3")," \u73af\u5883\uff0c\u4f46\u662f\u6ca1\u6709\u9644\u5e26\u9762\u5bf9 Python3 \u7684 pip \u5305\u7ba1\u7406\u5668\uff0c\u6240\u4ee5\u5148\u5b89\u88c5 pip"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install python3-pip\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5b89\u88c5 python3-pip",src:i(818).Z,width:"1440",height:"900"})),(0,a.kt)("admonition",{title:"\u73af\u5883\u51b2\u7a81",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u5c31\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u5df2\u7ecf\u901a\u8fc7 apt \u5b89\u88c5 python-pip \u7684\u60c5\u51b5\u4e0b\uff0c\u518d\u901a\u8fc7 apt \u5b89\u88c5 python3-pip\uff0capt \u5c31\u4f1a\u68c0\u6d4b\u5230\u8f6f\u4ef6\u7684\u7248\u672c\u8fed\u4ee3\uff0c\u4ece\u800c\u81ea\u52a8\u79fb\u9664 python-pip \u7684\u5b89\u88c5")),(0,a.kt)("h3",{id:"\u5b89\u88c5-volatility3"},"\u5b89\u88c5 Volatility3"),(0,a.kt)("p",null,"\u5b89\u88c5\u597d\u540e\uff0c\u76f4\u63a5\u901a\u8fc7 pip \u5b89\u88c5 Vol 3 \u548c\u76f8\u5173\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u5e93\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo pip3 install volatility3 pycryptodome -i https://pypi.tuna.tsinghua.edu.cn/simple\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5b89\u88c5\u76f8\u5173\u8f6f\u4ef6\u5305",src:i(2915).Z,width:"1440",height:"900"})),(0,a.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u4e4b\u540e\uff0c\u6267\u884c vol \u6307\u4ee4\uff0c\u5373\u53ef\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"Volatility 3")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"volatility3 \u6210\u529f\u8fd0\u884c",src:i(395).Z,width:"1440",height:"900"})),(0,a.kt)("admonition",{title:"\u989d\u5916\u914d\u7f6e",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 Vol 3 \u4e2d\uff0c\u52a0\u5165\u4e86\u8f93\u51fa\u4fe1\u606f\u7ea7\u522b\u7684\u6307\u5b9a\uff1a-vv \u53c2\u6570\uff0c\u901a\u8fc7\u6539\u53d8 v \u7684\u6570\u91cf\u6765\u6307\u5b9a\u8f93\u51fa\u7684\u65e5\u5fd7\u4fe1\u606f\u7684\u7ea7\u522b\uff08Info\uff0cDebug\uff0cError \u7b49\u7b49\uff09\uff0c\u901a\u8fc7\u52a0\u4e0a-v \u53c2\u6570\uff0c\u53ef\u4ee5\u53d1\u73b0\u76ee\u524d\u8fd8\u7f3a\u5c11 yara \u76f8\u5173\u4f9d\u8d56\uff0c\u4f46\u662f\u7531\u4e8e yara \u914d\u7f6e\u7684\u64cd\u4f5c\u76f8\u5bf9\u7e41\u7410\uff0c\u5e76\u4e14\u4e0d\u5f71\u54cd Vol 3 \u7684\u6b63\u5e38\u4f7f\u7528\uff0c\u6545\u5728\u6b64\u4e0d\u505a\u76f8\u5173\u5904\u7406\u3002  ")))}m.isMDXComponent=!0},818:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230700-110001-e53bb48559c6379b64f521ff47c1ebbb.png"},2915:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230701-110103-03222e93efa4c895a7c6a71435a6efeb.png"},395:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230701-110146-d0500d87bc4e0db2fdfe40eddde63cd6.png"},1303:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230731-103139-3b3f4e6f65514114a1dacb9d66c8eeb0.png"},321:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230732-103237-143a35443ba82a716ff9fa2b4b99f6e4.png"},7682:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230735-103520-b7284c05e0e24b1abffb4bc89a681b53.png"},1479:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230735-103549-8d3f9c54116031d8e3ae1d6c5d811acf.png"},7489:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230741-104102-e3ccd7732a67a5fef5056e072495ac42.png"},6380:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230742-104221-8ed7ddff5f8a5c374171e939cb1f2ed2.png"},4429:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230742-104245-4b3f2d25bd48e5b4ca6fa10eea4a544d.png"},9829:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230743-104342-16f90b43cf514912cddfffddde4b7ac4.png"},2210:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230744-104424-697c787b60d73e52e87911963a62e981.png"},9161:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230745-104510-1e471b26f3f28f09b4b770d000d85523.png"},4838:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230745-104549-361af6cef71ab8d3691205ab16ae56fa.png"},408:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230746-104630-ea18c55e3fcb943512e164b81dc3e68f.png"},6033:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/image_20230747-104705-32324b642757284f3aaf955b0a54d277.png"}}]);