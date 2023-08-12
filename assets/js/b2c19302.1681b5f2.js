"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[1832],{3905:(e,r,n)=>{n.d(r,{Zo:()=>k,kt:()=>s});var o=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=o.createContext({}),m=function(e){var r=o.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},k=function(e){var r=m(e.components);return o.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,l=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=t,s=d["".concat(l,".").concat(u)]||d[u]||p[u]||c;return n?o.createElement(s,a(a({ref:r},k),{},{components:n})):o.createElement(s,a({ref:r},k))}));function s(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:t,a[1]=i;for(var m=2;m<c;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2118:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var o=n(7462),t=(n(7294),n(3905));const c={},a="Docker Daemon API",i={unversionedId:"Environment/docker/Docker-Daemon-API",id:"Environment/docker/Docker-Daemon-API",title:"Docker Daemon API",description:"Docker daemon \u662f Docker \u5f15\u64ce\u7684\u540e\u53f0\u8fdb\u7a0b\uff0c\u4e5f\u79f0\u4e3a Dockerd\u3002\u5b83\u662f\u4e00\u4e2a\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u8d1f\u8d23\u7ba1\u7406 Docker \u955c\u50cf\u3001\u5bb9\u5668\u3001\u7f51\u7edc\u548c\u5b58\u50a8\u7b49\u5404\u79cd\u8d44\u6e90\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a API \u4ee5\u4f9b Docker \u5ba2\u6237\u7aef\u8fdb\u884c\u4ea4\u4e92",source:"@site/docs/Environment/docker/Docker-Daemon-API.md",sourceDirName:"Environment/docker",slug:"/Environment/docker/Docker-Daemon-API",permalink:"/docs/Environment/docker/Docker-Daemon-API",draft:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Environment/docker/Docker-Daemon-API.md",tags:[],version:"current",frontMatter:{},sidebar:"Environment_Sidebar",previous:{title:"\u7ba1\u7406\u9762\u677f Portainer",permalink:"/docs/Environment/docker/Tool-Portainer"},next:{title:"Docker \u7279\u6743\u6a21\u5f0f",permalink:"/docs/Environment/docker/Docker-Privileged"}},l={},m=[{value:"Reference",id:"reference",level:2}],k={toc:m},d="wrapper";function p(e){let{components:r,...n}=e;return(0,t.kt)(d,(0,o.Z)({},k,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"docker-daemon-api"},"Docker Daemon API"),(0,t.kt)("p",null,"Docker daemon \u662f Docker \u5f15\u64ce\u7684\u540e\u53f0\u8fdb\u7a0b\uff0c\u4e5f\u79f0\u4e3a Dockerd\u3002\u5b83\u662f\u4e00\u4e2a\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u8d1f\u8d23\u7ba1\u7406 Docker \u955c\u50cf\u3001\u5bb9\u5668\u3001\u7f51\u7edc\u548c\u5b58\u50a8\u7b49\u5404\u79cd\u8d44\u6e90\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a API \u4ee5\u4f9b Docker \u5ba2\u6237\u7aef\u8fdb\u884c\u4ea4\u4e92"),(0,t.kt)("p",null,"Docker daemon\u662f\u4ec5\u9488\u5bf9Linux\u7684\uff0c\u4f46\u662f\u5728Windows\u4e0a\u548cMac\u4e0a\uff0c\u53ef\u4ee5\u901a\u8fc7\u517c\u5bb9\u5c42\u7684\u65b9\u5f0f\u6765\u8fd0\u884cDocker daemon\u3002Docker daemon\u901a\u8fc7\u5178\u578b\u5b89\u88c5\u9014\u5f84\u5b89\u88c5\u4e4b\u540e\uff0c\u5e94\u8be5\u7531systemctl\u81ea\u52a8\u7ba1\u7406\uff0c\u800c\u4e0d\u9700\u8981\u7531\u7528\u6237\u6765\u63a7\u5236Docker daemon\u7684\u884c\u4e3a"),(0,t.kt)("p",null,"Docker daemon\u5728\u540c\u4e00\u4e3b\u673a\u4e0a\u4ec5\u652f\u6301\u5b58\u5728\u4e00\u4e2aDocker daemon\u5b9e\u4f8b\uff0c\u5728\u9ed8\u8ba4systemctl\u8fd0\u884c\u4e86Docker daemon\u7684\u60c5\u51b5\u4e0b\uff0c\u65e0\u6cd5\u518d\u624b\u52a8\u63a7\u5236Docker daemon\uff08dockerd\uff09\u7684\u542f\u52a8\u53c2\u6570\uff0c\u9664\u975e\u4f7f\u7528sudo systemctl stop docker\u505c\u6b62Docker daemon\uff0c\u7136\u540e\u518d\u624b\u52a8\u542f\u52a8Docker daemon\uff08dockerd\uff09"),(0,t.kt)("p",null,"\u5f53\u5728\u4e3b\u673a\u4e0a\u4f7f\u7528 Docker \u547d\u4ee4\u65f6\uff08\u4f8b\u5982 ",(0,t.kt)("inlineCode",{parentName:"p"},"docker run"),"\uff09\uff0cDocker \u5ba2\u6237\u7aef\u5c06\u5411 ",(0,t.kt)("inlineCode",{parentName:"p"},"Docker daemon")," \u53d1\u9001\u547d\u4ee4\u8bf7\u6c42\uff0c\u5e76\u901a\u8fc7 ",(0,t.kt)("inlineCode",{parentName:"p"},"Docker API")," \u8fdb\u884c\u901a\u4fe1\u3002",(0,t.kt)("inlineCode",{parentName:"p"},"Docker daemon")," \u63a5\u6536\u5e76\u89e3\u6790\u8fd9\u4e9b\u8bf7\u6c42\uff0c\u5e76\u5728\u5176\u5185\u90e8\u7ba1\u7406\u5bf9\u8c61\u5b58\u50a8\u4e2d\u521b\u5efa\u3001\u4fee\u6539\u6216\u5220\u9664\u76f8\u5e94\u7684 Docker \u8d44\u6e90\u3002\u968f\u540e\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"Docker daemon")," \u5c06\u54cd\u5e94\u7ed3\u679c\u53d1\u9001\u56de\u5ba2\u6237\u7aef\uff0c\u7136\u540e\u7b49\u5f85\u4e0b\u4e00\u4e2a\u547d\u4ee4\u8bf7\u6c42\u3002"),(0,t.kt)("p",null,"\u53e6\u5916\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"Docker daemon")," \u4e5f\u8d1f\u8d23\u76d1\u89c6 Docker \u4e3b\u673a\u4e0a\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u548c\u670d\u52a1\uff0c\u4ee5\u53ca\u5904\u7406\u4e0e Docker \u7f51\u7edc\u548c\u5b58\u50a8\u76f8\u5173\u7684\u64cd\u4f5c\u3002\u5b83\u8fd8\u53ef\u4ee5\u4e0e\u5176\u4ed6 ",(0,t.kt)("inlineCode",{parentName:"p"},"Docker daemon")," \u8fdb\u884c\u901a\u4fe1\uff0c\u4ee5\u5b9e\u73b0\u8de8\u4e3b\u673a\u7684\u955c\u50cf\u548c\u5bb9\u5668\u7ba1\u7406\u3002"),(0,t.kt)("p",null,"\u603b\u4e4b\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"Docker daemon")," \u662f\u6574\u4e2a Docker \u5f15\u64ce\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u8d1f\u8d23\u5b9e\u73b0 Docker \u7684\u5404\u79cd\u529f\u80fd\uff0c\u5e76\u5c06\u5176\u66b4\u9732\u7ed9\u7528\u6237\u548c\u5176\u4ed6\u7a0b\u5e8f\u4f7f\u7528"),(0,t.kt)("h2",{id:"reference"},"Reference"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/xinga/articles/17520869.html"},"Docker Remote API \u672a\u6388\u6743\u8bbf\u95ee By  axing \u7684\u661f\u7a7a")))}p.isMDXComponent=!0}}]);