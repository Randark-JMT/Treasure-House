"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[2972],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),m=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=m(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(t),f=o,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71479:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=t(87462),o=(t(67294),t(3905));const a={},i="\u5982\u4f55\u5236\u4f5c\u5185\u5b58\u955c\u50cf",c={unversionedId:"Forensic/Memory-Forensic/Make-Image",id:"Forensic/Memory-Forensic/Make-Image",title:"\u5982\u4f55\u5236\u4f5c\u5185\u5b58\u955c\u50cf",description:"MAGNET RAM Capture",source:"@site/docs/Forensic/Memory-Forensic/Make-Image.md",sourceDirName:"Forensic/Memory-Forensic",slug:"/Forensic/Memory-Forensic/Make-Image",permalink:"/docs/Forensic/Memory-Forensic/Make-Image",draft:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Forensic/Memory-Forensic/Make-Image.md",tags:[],version:"current",frontMatter:{},sidebar:"Forensic_Sidebar",previous:{title:"\u5185\u5b58\u53d6\u8bc1",permalink:"/docs/Forensic/Memory-Forensic/"},next:{title:"Volatility \u6307\u5357",permalink:"/docs/Forensic/Memory-Forensic/Volatility-Guide/"}},s={},m=[{value:"MAGNET RAM Capture",id:"magnet-ram-capture",level:2},{value:"WinPmem",id:"winpmem",level:2}],l={toc:m},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5982\u4f55\u5236\u4f5c\u5185\u5b58\u955c\u50cf"},"\u5982\u4f55\u5236\u4f5c\u5185\u5b58\u955c\u50cf"),(0,o.kt)("h2",{id:"magnet-ram-capture"},(0,o.kt)("a",{parentName:"h2",href:"https://www.magnetforensics.com/resources/magnet-ram-capture/"},"MAGNET RAM Capture")),(0,o.kt)("p",null,"\u7531MAGNET\u516c\u53f8\u6240\u516c\u5f00\u7684\u4e00\u6b3eWindows\u5e73\u53f0\u5185\u5b58\u63d0\u53d6\u5de5\u5177\uff0c\u5bf9\u591a\u4e2aWindows\u7248\u672c\u90fd\u63d0\u4f9b\u4e86\u652f\u6301"),(0,o.kt)("p",null,"\u5176\u524d\u8eab\u4e3a\u6700\u4e3a\u5e38\u7528\u7684DumpIt"),(0,o.kt)("h2",{id:"winpmem"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/Velocidex/WinPmem"},"WinPmem")),(0,o.kt)("p",null,"WinPmem\u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u901a\u8fc7\u76f4\u63a5\u63a7\u5236\u8bbe\u5907\u63a5\u53e3\uff0c\u4ece\u800c\u4e3a\u83b7\u53d6\u8bbe\u5907\u5185\u5b58\u6570\u636e\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u53ef\u80fd\u6027"))}u.isMDXComponent=!0}}]);