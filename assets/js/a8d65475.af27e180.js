"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[1472],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>s});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,s=d["".concat(l,".").concat(m)]||d[m]||k[m]||a;return t?n.createElement(s,c(c({ref:r},u),{},{components:t})):n.createElement(s,c({ref:r},u))}));function s(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1191:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},c="Docker \u672a\u6388\u6743",i={unversionedId:"Penetration/Unauthorized/Docker",id:"Penetration/Unauthorized/Docker",title:"Docker \u672a\u6388\u6743",description:"Docker \u5171\u6709\u4e24\u4e2a API \u7cfb\u7edf\uff0c\u4e00\u4e2a\u662f\u672c\u5730 daemon \u7684 API \u7cfb\u7edf\uff0c\u5e38\u89c1\u4e8e Portainer \u7b49 Docker \u5bb9\u5668\uff0c\u901a\u8fc7\u4e0e Docker daemon API \u4ea4\u4e92\u6765\u8fbe\u5230\u63a7\u5236 Docker \u7684\u76ee\u7684\uff1b\u4e00\u4e2a\u662f Docker remote API\uff0c\u5e38\u89c1\u4e8e\u8fdc\u7a0b Docker \u670d\u52a1\u7ba1\u7406\uff0c\u5982\u8fdc\u7a0b\u7cfb\u7edf\uff08\u5982 CTFd\uff09\u8fdc\u7a0b\u63a7\u5236\u9776\u673a\u670d\u52a1\u5668\u4e0a\u7684 Docker \u542f\u52a8\u9898\u76ee\u9776\u673a",source:"@site/docs/Penetration/Unauthorized/Docker.md",sourceDirName:"Penetration/Unauthorized",slug:"/Penetration/Unauthorized/Docker",permalink:"/docs/Penetration/Unauthorized/Docker",draft:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Penetration/Unauthorized/Docker.md",tags:[],version:"current",frontMatter:{},sidebar:"Penetration_Sidebar",previous:{title:"CouchDB \u672a\u6388\u6743",permalink:"/docs/Penetration/Unauthorized/CouchDB"},next:{title:"Druid\u672a\u6388\u6743",permalink:"/docs/Penetration/Unauthorized/Druid"}},l={},p=[{value:"Docker Daemon API \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e",id:"docker-daemon-api-\u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e",level:2},{value:"Docker Remote API \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e",id:"docker-remote-api-\u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e",level:2},{value:"Reference",id:"reference",level:2}],u={toc:p},d="wrapper";function k(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-\u672a\u6388\u6743"},"Docker \u672a\u6388\u6743"),(0,o.kt)("p",null,"Docker \u5171\u6709\u4e24\u4e2a API \u7cfb\u7edf\uff0c\u4e00\u4e2a\u662f\u672c\u5730 ",(0,o.kt)("inlineCode",{parentName:"p"},"daemon")," \u7684 API \u7cfb\u7edf\uff0c\u5e38\u89c1\u4e8e Portainer \u7b49 Docker \u5bb9\u5668\uff0c\u901a\u8fc7\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker daemon API")," \u4ea4\u4e92\u6765\u8fbe\u5230\u63a7\u5236 Docker \u7684\u76ee\u7684\uff1b\u4e00\u4e2a\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker remote API"),"\uff0c\u5e38\u89c1\u4e8e\u8fdc\u7a0b Docker \u670d\u52a1\u7ba1\u7406\uff0c\u5982\u8fdc\u7a0b\u7cfb\u7edf\uff08\u5982 CTFd\uff09\u8fdc\u7a0b\u63a7\u5236\u9776\u673a\u670d\u52a1\u5668\u4e0a\u7684 Docker \u542f\u52a8\u9898\u76ee\u9776\u673a"),(0,o.kt)("h2",{id:"docker-daemon-api-\u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e"},"Docker Daemon API \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e"),(0,o.kt)("h2",{id:"docker-remote-api-\u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e"},"Docker Remote API \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e"),(0,o.kt)("p",null,"\u524d\u7f6e\u6750\u6599\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/Environment/docker/Docker-Remote-API"},"Docker Remote API")),(0,o.kt)("p",null,"\u5982\u679c\u662f\u7531\u4ee5\u4e0b\u6307\u4ee4\u542f\u52a8\u7684Docker Deamon"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dockerd -H=0.0.0.0:2375 -H unix:///var/run/docker.sock\n")),(0,o.kt)("p",null,"\u90a3\u4e48\u542f\u52a8\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Docker Remote API"),"\u5c31\u662f\u4e0d\u9700\u8981\u8d26\u6237\u9a8c\u8bc1\u5c31\u53ef\u4ee5\u8bbf\u95ee\u7684\u72b6\u6001\uff0c\u4e5f\u5c31\u4f1a\u51fa\u73b0\u672a\u6388\u6743\u6f0f\u6d1e\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Docker Remote API"),"\u5c06\u4f1a\u5b8c\u5168\u65e0\u4fdd\u62a4\u7684\u72b6\u6001\u66b4\u9732\u5728\u672c\u5730\u76842375\u7aef\u53e3\uff0c\u9020\u6210\u6781\u5927\u7684\u5371\u9669\u6027\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee52375\u7aef\u53e3\u76f4\u63a5\u63a7\u5236Docker\u670d\u52a1"),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/xinga/articles/17520869.html"},"Docker Remote API \u672a\u6388\u6743\u8bbf\u95ee By  axing\u7684\u661f\u7a7a")))}k.isMDXComponent=!0}}]);