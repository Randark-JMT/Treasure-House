"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[7645],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,b=d["".concat(o,".").concat(p)]||d[p]||m[p]||u;return t?r.createElement(b,l(l({ref:n},s),{},{components:t})):r.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=t.length,l=new Array(u);l[0]=p;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<u;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},52391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>P,contentTitle:()=>E,default:()=>O,frontMatter:()=>w,metadata:()=>T,toc:()=>L});var r=t(87462),a=t(67294),u=t(3905),l=t(86010),i=t(12466),o=t(16550),c=t(91980),s=t(67392),d=t(50012);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??m(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),u=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(u),(0,a.useCallback)((e=>{if(!u)return;const n=new URLSearchParams(r.location.search);n.set(u,e),r.replace({...r.location,search:n.toString()})}),[u,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,u=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:u}))),[o,c]=f({queryString:t,groupId:r}),[s,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,u]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&u.set(e)}),[t,u])]}({groupId:r}),g=(()=>{const e=o??s;return b({value:e,tabValues:u})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),m(e)}),[c,m,u]),tabValues:u}}var y=t(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:u,selectValue:o,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const n=e.currentTarget,t=s.indexOf(n),r=c[t].value;r!==u&&(d(n),o(r))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>s.push(e),onKeyDown:p,onClick:m},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":u===n})}),t??n)})))}function h(e){let{lazy:n,children:t,selectedValue:r}=e;const u=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=u.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},u.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function x(e){const n=g(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},a.createElement(v,(0,r.Z)({},e,n)),a.createElement(h,(0,r.Z)({},e,n)))}function M(e){const n=(0,y.Z)();return a.createElement(x,(0,r.Z)({key:String(n)},e))}const N={tabItem:"tabItem_Ymn6"};function U(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(N.tabItem,r),hidden:t},n)}const w={},E="Linux \u5185\u5b58\u955c\u50cf\u5206\u6790",T={unversionedId:"Forensic/Memory-Forensic/Linux/index",id:"Forensic/Memory-Forensic/Linux/index",title:"Linux \u5185\u5b58\u955c\u50cf\u5206\u6790",description:"\u4e0d\u540c\u4e8e Windows \u955c\u50cf\u7684\u7b26\u53f7\u6587\u4ef6\uff08profile\uff09\u90fd\u662f\u7531 Microsoft \u5b98\u65b9\u8fdb\u884c\u63d0\u4f9b\uff0c\u7531\u4e8e Linux \u5404\u4e2a\u53d1\u884c\u7248\u767e\u5bb6\u4e89\u9e23\uff0c\u6240\u4ee5\u76ee\u524d\u5e76\u6ca1\u6709\u9488\u5bf9\u5404\u4e2a Linux \u53d1\u884c\u7248\u7684\u4e00\u7ad9\u5f0f\u7b26\u53f7\u6587\u4ef6\u5b58\u653e\u7ad9\uff0c\u6240\u4ee5\u9700\u8981\u5148\u5bf9\u955c\u50cf\u6587\u4ef6\u7684\u5185\u6838\u7248\u672c\u548c\u53d1\u884c\u7248\u672c\u8fdb\u884c\u5224\u65ad",source:"@site/docs/Forensic/Memory-Forensic/Linux/index.mdx",sourceDirName:"Forensic/Memory-Forensic/Linux",slug:"/Forensic/Memory-Forensic/Linux/",permalink:"/docs/Forensic/Memory-Forensic/Linux/",draft:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Forensic/Memory-Forensic/Linux/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"Forensic_Sidebar",previous:{title:"\u5185\u5b58\u53d6\u8bc1",permalink:"/docs/Forensic/Memory-Forensic/"},next:{title:"\u5982\u4f55\u5236\u4f5c\u5185\u5b58\u955c\u50cf",permalink:"/docs/Forensic/Memory-Forensic/Make-Image/"}},P={},L=[{value:"\u8bc6\u522b\u955c\u50cf\u7248\u672c",id:"\u8bc6\u522b\u955c\u50cf\u7248\u672c",level:2},{value:"\u5236\u4f5c profile \u6587\u4ef6",id:"\u5236\u4f5c-profile-\u6587\u4ef6",level:2},{value:"Volatility2 \u914d\u7f6e\u6587\u4ef6",id:"volatility2-\u914d\u7f6e\u6587\u4ef6",level:3}],C={toc:L},I="wrapper";function O(e){let{components:n,...t}=e;return(0,u.kt)(I,(0,r.Z)({},C,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"linux-\u5185\u5b58\u955c\u50cf\u5206\u6790"},"Linux \u5185\u5b58\u955c\u50cf\u5206\u6790"),(0,u.kt)("p",null,"\u4e0d\u540c\u4e8e Windows \u955c\u50cf\u7684\u7b26\u53f7\u6587\u4ef6\uff08profile\uff09\u90fd\u662f\u7531 Microsoft \u5b98\u65b9\u8fdb\u884c\u63d0\u4f9b\uff0c\u7531\u4e8e Linux \u5404\u4e2a\u53d1\u884c\u7248\u767e\u5bb6\u4e89\u9e23\uff0c\u6240\u4ee5\u76ee\u524d\u5e76\u6ca1\u6709\u9488\u5bf9\u5404\u4e2a Linux \u53d1\u884c\u7248\u7684\u4e00\u7ad9\u5f0f\u7b26\u53f7\u6587\u4ef6\u5b58\u653e\u7ad9\uff0c\u6240\u4ee5\u9700\u8981\u5148\u5bf9\u955c\u50cf\u6587\u4ef6\u7684\u5185\u6838\u7248\u672c\u548c\u53d1\u884c\u7248\u672c\u8fdb\u884c\u5224\u65ad"),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"\u8bf7\u6ce8\u610f\uff0c\u4ee5\u4e0b\u547d\u4ee4\u7684\u8f93\u51fa\u4ec5\u4e3a\u793a\u4f8b\uff0c\u5177\u4f53\u7684\u6307\u4ee4\u6267\u884c\u7ed3\u679c\u56e0\u68c0\u6750\u800c\u5f02"),(0,u.kt)("p",{parentName:"admonition"},"\u6240\u4f7f\u7528\u7684\u5185\u5b58\u955c\u50cf\uff0c\u57fa\u4e8e ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/microsoft/avml"},"AVML")," \u8fdb\u884c\u5236\u4f5c\uff0c\u7cfb\u7edf\u7531 ubuntu-22.04.2-desktop-amd64.iso \u955c\u50cf\u5b89\u88c5\u5f97\u6765\uff0c\u5e76\u672a\u8fdb\u884c\u8fc7\u7cfb\u7edf\u5347\u7ea7")),(0,u.kt)("h2",{id:"\u8bc6\u522b\u955c\u50cf\u7248\u672c"},"\u8bc6\u522b\u955c\u50cf\u7248\u672c"),(0,u.kt)(M,{mdxType:"Tabs"},(0,u.kt)(U,{value:"Volatility2",label:"Volatility2",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},'$ strings ~/out.lime | grep "^Linux version"\nLinux version %s (%s)\nLinux version %s (%s)\nLinux version 5.19.0-32-generic (buildd@lcy02-amd64-026) (x86_64-linux-gnu-gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0, GNU ld (GNU Binutils for Ubuntu) 2.38) #33~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Mon Jan 30 17:03:34 UTC 2 (Ubuntu 5.19.0-32.33~22.04.1-generic 5.19.17)\nLinux version 5.19.0-32-generic (buildd@lcy02-amd64-026) (x86_64-linux-gnu-gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0, GNU ld (GNU Binutils for Ubuntu) 2.38) #33~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Mon Jan 30 17:03:34 UTC 2 (Ubuntu 5.19.0-32.33~22.04.1-generic 5.19.17)7)\nLinux version 5.19.0-32-generic (buildd@lcy02-amd64-026) (x86_64-linux-gnu-gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0, GNU ld (GNU Binutils for Ubuntu) 2.38) #33~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Mon Jan 30 17:03:34 UTC 2 (Ubuntu 5.19.0-32.33~22.04.1-generic 5.19.17)\n'))),(0,u.kt)(U,{value:"Volatility3",label:"Volatility3",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"$ vol -f out.lime banners\nVolatility 3 Framework 2.0.1\nProgress:  100.00               PDB scanning finished\nOffset  Banner\n\n0x245b8c98      Linux version 5.19.0-32-generic (buildd@lcy02-amd64-026) (x86_64-linux-gnu-gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0, GNU ld (GNU Binutils for Ubuntu) 2.38) #33~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Mon Jan 30 17:03:34 UTC 2 (Ubuntu 5.19.0-32.33~22.04.1-generic 5.19.17)\n0x118786cf8     Linux version 5.19.0-32-generic (buildd@lcy02-amd64-026) (x86_64-linux-gnu-gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0, GNU ld (GNU Binutils for Ubuntu) 2.38) #33~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Mon Jan 30 17:03:34 UTC 2 (Ubuntu 5.19.0-32.33~22.04.1-generic 5.19.17)\n0x139800240     Linux version 5.19.0-32-generic (buildd@lcy02-amd64-026) (x86_64-linux-gnu-gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0, GNU ld (GNU Binutils for Ubuntu) 2.38) #33~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Mon Jan 30 17:03:34 UTC 2 (Ubuntu 5.19.0-32.33~22.04.1-generic 5.19.17)\n0x13abb3500     Linux version 5.19.0-32-generic (buildd@lcy02-amd64-026) (x86_64-linux-gnu-gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0, GNU ld (GNU Binutils for Ubuntu) 2.38) #33~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Mon Jan 30 17:03:34 UTC 2 (Ubuntu 5.19.0-32.33~22.04.1-generic 5.19.17)7)\n0x13fec78c8     Linux version 5.19.0-32-generic (buildd@lcy02-amd64-026) (x86_64-linux-gnu-gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0, GNU ld (GNU Binutils for Ubuntu) 2.38) #33~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Mon Jan 30 17:03:34 UTC 2 (Ubuntu 5.19.0-32.33~22.04.1-generic 5.19.17)\n")))),(0,u.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u6307\u4ee4\u7684\u7ed3\u679c\uff0c\u53ef\u4ee5\u5224\u65ad\u51fa\u6765\u8fd9\u4e2a\u5185\u5b58\u955c\u50cf\u7684\u5185\u6838\u4fe1\u606f\u4e3a\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-plaintext"},"Linux version 5.19.0-32-generic (buildd@lcy02-amd64-026) (x86_64-linux-gnu-gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0, GNU ld (GNU Binutils for Ubuntu) 2.38) #33~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Mon Jan 30 17:03:34 UTC 2 (Ubuntu 5.19.0-32.33~22.04.1-generic 5.19.17)\n")),(0,u.kt)("p",null,"\u5185\u6838\u4fe1\u606f\u662f\u6781\u4e3a\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u540e\u7eed\u5206\u6790 Linux \u7684\u5185\u5b58\u955c\u50cf\uff0c\u5c31\u9700\u8981\u5236\u4f5c\u5bf9\u5e94\u5185\u6838\u7684\u914d\u7f6e\u6587\u4ef6\uff08Volatility2\uff09\u6216\u8005\u7b26\u53f7\u8868\u6587\u4ef6\uff08Volatility3\uff09\uff0c\u5185\u6838\u7684\u7f16\u8bd1\u65f6\u95f4\u90fd\u4e0d\u80fd\u51fa\u73b0\u5dee\u5f02"),(0,u.kt)("h2",{id:"\u5236\u4f5c-profile-\u6587\u4ef6"},"\u5236\u4f5c profile \u6587\u4ef6"),(0,u.kt)("p",null,"profile \u7c7b\u4f3c\u4e8e\u5730\u56fe\uff0c\u4f7f Volatility \u6709\u80fd\u529b\u5bf9\u5185\u5b58\u7684\u539f\u59cb\u6570\u636e\u8fdb\u884c\u5b9a\u4f4d\uff0c\u5c06\u539f\u59cb\u6570\u636e\u4e00\u4e00\u5b9a\u4f4d\u51fa\u5177\u4f53\u7684\u5185\u5b58\u533a\u57df\uff0c\u8fdb\u800c\u8fdb\u884c\u5206\u6790\u3002\u5728 Volatility2 \u4e2d\uff0cprofile \u88ab\u79f0\u4e3a\u914d\u7f6e\u6587\u4ef6\uff0c\u5176\u76f4\u63a5\u7531 Linux \u7684 dwarf \u6587\u4ef6\u4e0e System.map \u6587\u4ef6\u7ec4\u6210\u3002\u800c\u5728 Volatility3 \u4e2d\uff0cprofile \u6587\u4ef6\u88ab\u79f0\u4e3a\u7b26\u53f7\u8868\u6587\u4ef6\uff0c\u56e0\u4e3a\u7b26\u53f7\u8868\u6587\u4ef6\u5b9e\u9645\u4e0a\u662f\u7531 Volatility2 \u6240\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u4e00\u6b65\u62bd\u8c61\u5316\u5f97\u6765\u3002"),(0,u.kt)("h3",{id:"volatility2-\u914d\u7f6e\u6587\u4ef6"},"Volatility2 \u914d\u7f6e\u6587\u4ef6"),(0,u.kt)("p",null,"\u5b98\u65b9\u7684\u8be6\u7ec6\u64cd\u4f5c\u8bf4\u660e\uff1a",(0,u.kt)("a",{parentName:"p",href:"https://github.com/volatilityfoundation/volatility/wiki/Linux#creating-a-new-profile"},"Creating a new profile")),(0,u.kt)("p",null,"\u5728 Volatility2 \u7684\u50a8\u5b58\u5e93\u4e2d\uff0c\u5b58\u653e\u6709 dwarf \u7684\u7f16\u8bd1\u6587\u4ef6\uff1a",(0,u.kt)("a",{parentName:"p",href:"https://github.com/volatilityfoundation/volatility/tree/master/tools/linux"},"volatility/tools/linux")),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"\u4e5f\u5c31\u610f\u5473\u7740\u88ab\u53d6\u8bc1\u7684\u4e3b\u673a\u4e0a\u9762\u8981\u6709\u4ee5\u4e0b\u7a0b\u5e8f\uff1a"),(0,u.kt)("ul",{parentName:"admonition"},(0,u.kt)("li",{parentName:"ul"},"make"),(0,u.kt)("li",{parentName:"ul"},"gcc"),(0,u.kt)("li",{parentName:"ul"},"......"))),(0,u.kt)("p",null,"\u5c06\u5176\u4f20\u8f93\u5230\u88ab\u53d6\u8bc1\u4e3b\u673a\u4e0a\uff0c\u5728\u7f16\u8bd1\u524d\uff0c\u9700\u8981\u5bf9 Makefile \u8fdb\u884c\u4e00\u5b9a\u7684\u4fee\u6539\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-makefile"},'# \u539f\u5148\u7684\u8bed\u53e5\nM="$(PWD)"\n\n# \u9700\u8981\u4fee\u6539\u4e3a\nM="$(shell pwd)"\n')),(0,u.kt)("p",null,"\u7136\u540e\u5728 module.c \u6587\u4ef6\u7684\u672b\u5c3e\u52a0\u4e0a\u4ee5\u4e0b\u8bed\u53e5\uff0c\u4e0d\u7136\u4f1a\u6709 ",(0,u.kt)("inlineCode",{parentName:"p"},"missing MODULE_LICENSE()")," \u62a5\u9519\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},'MODULE_LICENSE("GPL");\n')),(0,u.kt)("p",null,"\u7136\u540e\u5f00\u59cb\u7f16\u8bd1 dwarf \u8c03\u8bd5\u7b26\u53f7\u6587\u4ef6\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"$ make\nmake -C //lib/modules/5.19.0-32-generic/build CONFIG_DEBUG_INFO=y M=\"/home/randark/profile-generater\" modules\nmake[1]: Entering directory '/usr/src/linux-headers-5.19.0-32-generic'\n    CC [M]  /home/randark/profile-generater/module.o\n    MODPOST /home/randark/profile-generater/Module.symvers\n    CC [M]  /home/randark/profile-generater/module.mod.o\n    LD [M]  /home/randark/profile-generater/module.ko\nmake[1]: Leaving directory '/usr/src/linux-headers-5.19.0-32-generic'\ndwarfdump -di module.ko > module.dwarf\nmake -C //lib/modules/5.19.0-32-generic/build M=\"/home/randark/profile-generater\" clean\nmake[1]: Entering directory '/usr/src/linux-headers-5.19.0-32-generic'\n    CLEAN   /home/randark/profile-generater/Module.symvers\nmake[1]: Leaving directory '/usr/src/linux-headers-5.19.0-32-generic'\n\n$ ls -lh\ntotal 2.7M\ndrwxrwxr-x 2 randark randark 4.0K 10 \u6708 25 00:28 kcore\n-rw-rw-r-- 1 randark randark  402 10 \u6708 25 01:00 Makefile\n-rw-rw-r-- 1 randark randark  314 10 \u6708 25 00:28 Makefile.enterprise\n-rw-rw-r-- 1 randark randark  18K 10 \u6708 25 01:03 module.c\n-rw-rw-r-- 1 randark randark 2.6M 10 \u6708 25 01:07 module.dwarf\n")),(0,u.kt)("p",null,"\u5373\u53ef\u5f97\u5230 dwarf \u8c03\u8bd5\u7b26\u53f7\u6587\u4ef6"))}O.isMDXComponent=!0}}]);