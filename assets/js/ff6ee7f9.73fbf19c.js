"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[7819],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>b});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?t.createElement(b,i(i({ref:n},s),{},{components:r})):t.createElement(b,i({ref:n},s))}));function b(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5655:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var t=r(87462),o=(r(67294),r(3905));const a={sidebar_position:0,sidebar_label:"\u73af\u5883\u914d\u7f6e",sidebar_class_name:"green"},i="\u73af\u5883\u914d\u7f6e",c={unversionedId:"Environment/index",id:"Environment/index",title:"\u73af\u5883\u914d\u7f6e",description:"Environment for live and dead",source:"@site/docs/Environment/index.md",sourceDirName:"Environment",slug:"/Environment/",permalink:"/docs/Environment/",draft:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Environment/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"\u73af\u5883\u914d\u7f6e",sidebar_class_name:"green"},sidebar:"Environment_Sidebar",next:{title:"Bochs",permalink:"/docs/Environment/Bochs/"}},l={},u=[{value:"Virtual Machine",id:"virtual-machine",level:2},{value:"Docker",id:"docker",level:2},{value:"Kubernetes",id:"kubernetes",level:2}],s={toc:u},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Environment for live and dead")))),(0,o.kt)("p",null,"\u4e00\u4e2a\u6b63\u786e\u7684\u73af\u5883\u5bf9\u9ad8\u6548\u7684\u5b66\u4e60\u662f\u5bc6\u4e0d\u53ef\u5206\u7684\uff0c\u8c01\u4e5f\u4e0d\u60f3\u81ea\u5df1\u60f3\u8981\u7f16\u8bd1 c \u8bed\u8a00\u7684\u65f6\u5019 gcc \u5d29\u4e86\uff0c\u8c01\u4e5f\u4e0d\u60f3\u60f3\u8981 php \u8c03\u8bd5\u7684\u65f6\u5019\uff0cphp xdebug \u51fa\u73b0\u65e0\u6cd5\u8fde\u63a5\uff0c\u6240\u4ee5\u4e00\u4e2a\u6b63\u786e\u7684\u3001\u7a33\u5b9a\u7684\u7684\u73af\u5883\u662f\u5341\u5206\u91cd\u8981\u7684"),(0,o.kt)("h2",{id:"virtual-machine"},"Virtual Machine"),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Docker\u73af\u5883\u662f\u76ee\u524d\u6700\u666e\u53ca\u7684\u8f7b\u91cf\u5316\u3001\u5feb\u901f\u5316\u7684\u5bb9\u5668\u73af\u5883\u5de5\u5177\uff0c\u53ef\u4ee5\u5728\u77ed\u65f6\u95f4\u5185\u65b9\u4fbf\u7684\u542f\u52a8\u5bb9\u5668\u5316\u73af\u5883\uff0c\u540c\u65f6\u7531\u4e8e\u53ea\u662f\u5bb9\u5668\u5316\u65b9\u6848\uff0c\u6240\u4ee5\u5e76\u4e0d\u4f1a\u5e26\u6765\u50cf\u865a\u62df\u673a\u90a3\u6837\u5b50\u9ad8\u6027\u80fd\u635f\u8017\u7684\u95ee\u9898\uff0cDocker\u53ef\u4ee5\u8fbe\u5230\u51e0\u4e4e\u7269\u7406\u673a\u7684\u6027\u80fd\u6c34\u5e73"),(0,o.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"Kubernetes\u4e00\u4e2a\u5f00\u6e90\u7684\uff0c\u7528\u4e8e\u7ba1\u7406\u4e91\u5e73\u53f0\u4e2d\u591a\u4e2a\u4e3b\u673a\u4e0a\u7684\u5bb9\u5668\u5316\u7684\u5e94\u7528\uff0c\u5176\u672c\u8d28\u4e0a\u53ea\u662f\u4e00\u4e2a\u7ba1\u7406\u5e73\u53f0\uff0c\u539f\u672c\u7684\u4e3b\u6d41\u5bb9\u5668\u5316\u6838\u5fc3\u662fDocker\uff0c\u73b0\u5728\u7684Kubernetes\u5bb9\u5668\u5316\u6838\u5fc3\u5219\u662f\u8f6c\u4e3a\u4e86contained \uff0c\u7406\u7531\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u66f4\u8f7b\u91cf\u7ea7 - containerd \u6bd4 Docker \u66f4\u8f7b\u91cf\u548c\u6a21\u5757\u5316,\u8fd0\u884c\u65f6\u5f00\u9500\u66f4\u5c0f\u3002\u8fd9\u5728 Kubernetes \u7b49\u5927\u89c4\u6a21\u96c6\u7fa4\u73af\u5883\u4e0b\u5f88\u91cd\u8981\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u597d\u9694\u79bb - Docker \u4f7f\u7528\u6574\u4e2a\u5bbf\u4e3b\u673a\u5185\u6838,\u5bb9\u5668\u4e4b\u95f4\u9694\u79bb\u6027\u4e0d\u5f3a\u3002\u800c containerd \u57fa\u4e8e runc \u4f7f\u7528 namespace \u548c cgroups \u63d0\u4f9b\u66f4\u597d\u7684\u8d44\u6e90\u9694\u79bb\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u6613\u7ef4\u62a4 - Docker \u7684\u4ee3\u7801\u5e93\u5e9e\u5927,\u7ef4\u62a4\u56f0\u96be\u3002containerd \u6a21\u5757\u8f83\u5c11,\u4ee3\u7801\u66f4\u7cbe\u7b80,\u7ef4\u62a4\u66f4\u5bb9\u6613\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u6613\u6269\u5c55 - containerd \u901a\u8fc7 CRI \u63a5\u53e3\u652f\u6301\u591a\u4e2a\u8fd0\u884c\u65f6,\u66f4\u6613\u6269\u5c55\u3002\u800c Docker \u4e0d\u7b26\u5408 CRI \u6807\u51c6,\u4e0d\u6613\u5b9e\u73b0\u591a\u8fd0\u884c\u65f6\u652f\u6301\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53bb Docker \u4f9d\u8d56 - Kubernetes \u9879\u76ee\u5e0c\u671b\u51cf\u5c11\u5bf9\u7279\u5b9a\u5382\u5546\u6280\u672f\u7684\u4f9d\u8d56\u3002\u91c7\u7528 containerd \u53ef\u4ee5\u907f\u514d\u5bf9 Docker \u7684\u4f9d\u8d56\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u597d\u5b89\u5168\u9694\u79bb - containerd \u9ed8\u8ba4\u5f00\u542f seccomp \u7b49\u5b89\u5168\u9694\u79bb,\u9ed8\u8ba4\u63d0\u4f9b\u66f4\u9ad8\u5b89\u5168\u6027\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u597d Windows \u652f\u6301 - containerd \u5bf9 Windows \u7684\u652f\u6301\u66f4\u52a0\u53cb\u597d,Docker \u5728 Windows \u652f\u6301\u4e0a\u6709\u4e00\u4e9b\u95ee\u9898\u3002")))}d.isMDXComponent=!0}}]);