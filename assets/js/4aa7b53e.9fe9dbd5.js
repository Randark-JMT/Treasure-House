"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[7125],{5429:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=i(5893),r=i(1151);const t={},s="\u5185\u5b58\u53d6\u8bc1",c={id:"Forensic/Memory-Forensic/index",title:"\u5185\u5b58\u53d6\u8bc1",description:"\u5185\u5b58\u53d6\u8bc1\u5c31\u4e24\u4e2a\u96be\u9898\uff0c\u4e00\u4e2a\u662f\u5982\u4f55\u5f97\u5230\u5185\u5b58\u6570\u636e\uff0c\u4e00\u4e2a\u662f\u5982\u4f55\u89e3\u6790\u5185\u5b58\u6570\u636e\uff0c\u770b\u4f3c\u7b80\u5355\u7684\u4e24\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u51fa\u4e00\u672c\u4e66",source:"@site/docs/Forensic/Memory-Forensic/index.md",sourceDirName:"Forensic/Memory-Forensic",slug:"/Forensic/Memory-Forensic/",permalink:"/docs/Forensic/Memory-Forensic/",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Forensic/Memory-Forensic/index.md",tags:[],version:"current",frontMatter:{},sidebar:"Forensic_Sidebar",previous:{title:"\u65e5\u5fd7\u5206\u6790",permalink:"/docs/Forensic/Log-Analytics/"},next:{title:"Linux \u5185\u5b58\u955c\u50cf\u5206\u6790",permalink:"/docs/Forensic/Memory-Forensic/Linux/"}},d={},l=[{value:"\u5982\u4f55\u5f97\u5230\u5185\u5b58\u6570\u636e",id:"\u5982\u4f55\u5f97\u5230\u5185\u5b58\u6570\u636e",level:2},{value:"\u5982\u4f55\u89e3\u6790\u5185\u5b58\u6570\u636e",id:"\u5982\u4f55\u89e3\u6790\u5185\u5b58\u6570\u636e",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u5185\u5b58\u53d6\u8bc1",children:"\u5185\u5b58\u53d6\u8bc1"}),"\n",(0,o.jsx)(n.p,{children:"\u5185\u5b58\u53d6\u8bc1\u5c31\u4e24\u4e2a\u96be\u9898\uff0c\u4e00\u4e2a\u662f\u5982\u4f55\u5f97\u5230\u5185\u5b58\u6570\u636e\uff0c\u4e00\u4e2a\u662f\u5982\u4f55\u89e3\u6790\u5185\u5b58\u6570\u636e\uff0c\u770b\u4f3c\u7b80\u5355\u7684\u4e24\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u51fa\u4e00\u672c\u4e66"}),"\n",(0,o.jsx)(n.h2,{id:"\u5982\u4f55\u5f97\u5230\u5185\u5b58\u6570\u636e",children:"\u5982\u4f55\u5f97\u5230\u5185\u5b58\u6570\u636e"}),"\n",(0,o.jsx)(n.p,{children:"\u5185\u5b58\u6570\u636e\u7684\u83b7\u53d6\uff0c\u8981\u770b\u5177\u4f53\u662f\u54ea\u4e2a\u5e73\u53f0\u3002\u5728 Windows \u4e0a\u76f8\u5bf9\u8f83\u4e3a\u5bb9\u6613\uff0c\u56e0\u4e3a Microsoft \u5b98\u65b9\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u63a5\u53e3\u4e0e\u6743\u9650\u8bf4\u660e\uff0c\u53ef\u4ee5\u8f83\u4e3a\u5bb9\u6613\u7684\u626b\u63cf\u5e76\u83b7\u53d6\u5230\u5168\u90e8\u5185\u5b58\u6570\u636e"}),"\n",(0,o.jsxs)(n.admonition,{title:"Hyper-v \u53ef\u80fd\u5b58\u5728\u67b6\u6784\u95ee\u9898",type:"caution",children:[(0,o.jsx)(n.p,{children:"\u7531\u4e8e\u542f\u7528 Hyper-v \u7279\u6027\u4e4b\u540e\uff0c\u7cfb\u7edf\u6574\u4f53\u4f1a\u88ab\u865a\u62df\u5316\u7279\u6027\u6574\u4f53\u9694\u79bb\uff0c\u6240\u4ee5\u83b7\u53d6\u5b8c\u6574\u5185\u5b58\u6570\u636e\u5c06\u4f1a\u9047\u5230\u4e0d\u53ef\u9884\u671f\u7684\u95ee\u9898"}),(0,o.jsx)(n.p,{children:"Windows \u5e73\u53f0\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u73b0\u6210\u7684\u4e00\u4e9b\u5de5\u5177\u4e00\u952e\u83b7\u53d6\u5185\u5b58\u955c\u50cf ( \u524d\u63d0\u662f\u62e5\u6709\u7ba1\u7406\u5458\u6743\u9650 )"})]}),"\n",(0,o.jsx)(n.admonition,{title:'"\u6765\u4e2a\u8df3\u8f6c"',type:"info",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/Forensic/Memory-Forensic/Make-Image/",children:"\u5982\u4f55\u5236\u4f5c\u5185\u5b58\u955c\u50cf"})})}),"\n",(0,o.jsx)(n.h2,{id:"\u5982\u4f55\u89e3\u6790\u5185\u5b58\u6570\u636e",children:"\u5982\u4f55\u89e3\u6790\u5185\u5b58\u6570\u636e"}),"\n",(0,o.jsx)(n.p,{children:"\u5bf9\u4e8e\u6bd4\u8d5b\u4e2d\u6240\u63a5\u89e6\u5230\u7684\u5185\u5b58\u53d6\u8bc1\uff0c\u9009\u624b\u5927\u591a\u62ff\u5230\u7684\u90fd\u662f\u5df2\u7ecf\u63d0\u53d6\u597d\u7684\u5185\u5b58\u955c\u50cf\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5185\u5b58\u6570\u636e\u7684\u539f\u59cb\u5b8c\u6574\u62f7\u8d1d\uff0c\u8fd9\u5df2\u7ecf\u4ece\u5f00\u5c40\u5c31\u5927\u5927\u7b80\u5316\u4e86\u5185\u5b58\u53d6\u8bc1\u7684\u96be\u5ea6\u3002\u800c\u9009\u624b\u63a5\u4e0b\u6765\u6240\u8981\u9762\u5bf9\u7684\uff0c\u5c31\u662f\u5bf9\u5185\u5b58\u6570\u636e\u8fdb\u884c\u89e3\u6790\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5bf9\u4e8e\u5185\u5b58\u6570\u636e\uff0c\u6700\u4e3a\u5e38\u7528\u7684\u5de5\u5177\u4fbf\u662f ",(0,o.jsx)(n.code,{children:"Volatility Framework"})," \uff0c\u5176\u4e3a ",(0,o.jsx)(n.code,{children:"Volatility Foundation"})," \u6240\u5f00\u53d1\u7684\u4e00\u6b3e\u5bf9\u5185\u5b58\u53d6\u8bc1\u5206\u6790\u63d0\u4f9b\u652f\u6301\u7684\u6846\u67b6\uff0c\u5bf9\u591a\u5e73\u53f0\u7535\u5b50\u8bbe\u5907\u7684\u5185\u5b58\u6570\u636e\u5747\u63d0\u4f9b\u4e86\u652f\u6301\uff0c\u5e76\u4e14\u4e5f\u652f\u6301\u52a0\u8f7d\u7b2c\u4e09\u65b9\u6a21\u5757\u6765\u589e\u52a0\u529f\u80fd\u3002"]}),"\n",(0,o.jsx)(n.admonition,{title:"\u5c0f tips",type:"tip",children:(0,o.jsxs)(n.p,{children:["\u867d\u8bf4\u5185\u5b58\u53d6\u8bc1\u6700\u4e3a\u4f18\u96c5\u7684\u89e3\u6cd5\u5c31\u662f\u5229\u7528 ",(0,o.jsx)(n.code,{children:"Volatility Framework"})," \uff0c\u4f46\u662f\u90fd\u620f\u79f0\uff1a\u5185\u5b58\u53d6\u8bc1\u7684\u7ec8\u70b9\u662f ",(0,o.jsx)(n.code,{children:"strings"}),"+",(0,o.jsx)(n.code,{children:"grep"}),"\u3002\u56e0\u4e3a\u7531\u4e8e\u5185\u5b58\u5176\u672c\u8eab\u5c31\u4e3a\u64cd\u4f5c\u7cfb\u7edf\u548c\u8f6f\u4ef6\u8fd0\u884c\u65f6\u7684\u52a8\u6001\u6570\u636e\uff0c\u6240\u4ee5\u7edd\u5927\u591a\u6570\u7684\u6570\u636e\u90fd\u662f\u76f4\u63a5\u4ee5\u660e\u6587\u5f62\u5f0f\u50a8\u5b58\u5728\u5185\u5b58\u4e4b\u4e2d\u7684\uff0c\u5f80\u5f80\u76f4\u63a5 strings \u8fdb\u884c\u63d0\u53d6\u660e\u6587\u5b57\u7b26\u4e32\u5e76\u52a0\u4ee5\u7b5b\u9009\uff0c\u5c31\u80fd\u83b7\u5f97\u4e00\u4e9b\u610f\u60f3\u4e0d\u5230\u7684\u60ca\u559c"]})}),"\n",(0,o.jsxs)(n.p,{children:["\u5f53\u524d\uff0c",(0,o.jsx)(n.code,{children:"Volatility"})," \u5df2\u7ecf\u5f00\u53d1\u5230\u4e86 ",(0,o.jsx)(n.code,{children:"Volatility 3"}),"\uff0c\u4f46\u662f\u7b2c\u4e09\u4ee3\u4ecd\u7136\u5728\u5f00\u53d1\u9636\u6bb5\uff0c\u5176\u529f\u80fd\u76f8\u8f83\u4e8e\u7b2c\u4e8c\u4ee3\u8fd8\u4e0d\u5b8c\u5584\uff0c\u4f46\u662f\u7b2c\u4e09\u4ee3\u5bf9 ",(0,o.jsx)(n.code,{children:"Windows 10"})," \u4ee5\u4e0a\u7684 ",(0,o.jsx)(n.code,{children:"Windows"})," \u7cfb\u7edf\u6240\u5bfc\u51fa\u7684\u5185\u5b58\u6570\u636e\u63d0\u4f9b\u4e86\u66f4\u5b8c\u5584\u7684\u652f\u6301\uff0c\u6545\u5efa\u8bae\u8fdb\u884c\u5185\u5b58\u53d6\u8bc1\u5de5\u4f5c\u7684\u65f6\u5019\uff0c\u4e24\u4ee3 ",(0,o.jsx)(n.code,{children:"Volatility"})," \u90fd\u5907\u7740 ( \u53cd\u6b63\u53ea\u662f\u4e00\u4e2a\u5de5\u5177\uff0c\u76f8\u8f83\u4e8e\u68c0\u6750\u52a8\u8f84\u5927\u51e0 G \u800c\u8a00\uff0c\u5b8c\u5168\u4e0d\u7b97\u5927 ) \u3002"]}),"\n",(0,o.jsx)(n.admonition,{title:'"\u6765\u4e2a\u8df3\u8f6c"',type:"info",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/Forensic/Memory-Forensic/Volatility/",children:"Volatility \u6307\u5357"})})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var o=i(7294);const r={},t=o.createContext(r);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);