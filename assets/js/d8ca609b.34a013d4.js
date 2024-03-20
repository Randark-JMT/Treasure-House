"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[6142],{9074:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=o(5893),r=o(1151);const i={sidebar_position:0},s="\u4e0b\u8f7d\u4e0e\u5b89\u88c5",c={id:"DevSecOps/Containerization/Docker/Installation",title:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5",description:"\u8fd9\u91cc\u5e76\u4e0d\u4f1a\u53d9\u8ff0\u5982\u4f55\u5b89\u88c5 Docker Desktop \u684c\u9762\u7aef\uff0c\u800c\u4ec5\u8bb2\u8ff0\u5982\u4f55\u914d\u7f6e Docker Engine",source:"@site/docs/DevSecOps/Containerization/Docker/Installation.md",sourceDirName:"DevSecOps/Containerization/Docker",slug:"/DevSecOps/Containerization/Docker/Installation",permalink:"/docs/DevSecOps/Containerization/Docker/Installation",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/DevSecOps/Containerization/Docker/Installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"DevSecOps_Sidebar",previous:{title:"Docker",permalink:"/docs/DevSecOps/Containerization/Docker/"},next:{title:"Dockerfile \u6307\u5357",permalink:"/docs/DevSecOps/Containerization/Docker/Dockerfile-guide"}},a={},l=[];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5",children:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8fd9\u91cc\u5e76\u4e0d\u4f1a\u53d9\u8ff0\u5982\u4f55\u5b89\u88c5 Docker Desktop \u684c\u9762\u7aef\uff0c\u800c\u4ec5\u8bb2\u8ff0\u5982\u4f55\u914d\u7f6e Docker Engine"}),"\n",(0,t.jsx)(n.p,{children:"Docker Desktop \u6309\u7167\u8f6f\u4ef6\u63d0\u793a\u5b89\u88c5\u5373\u53ef"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Docker \u5b98\u65b9\u63a8\u8350\u4f7f\u7528\u4ee5\u4e0b\u4e00\u952e\u811a\u672c\u8fdb\u884c\u5b89\u88c5\u64cd\u4f5c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"https://get.docker.com/\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\ud83d\udca1 \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u867d\u7136 Kali \u96b6\u5c5e\u4e8e Debian \u4e0b\u6e38\u5206\u652f\uff0c\u4f46\u662f\u7531\u4e8e uname \u8bc6\u522b\u51fa\u6765\u7684\u7ed3\u679c\u662f Kali\uff0c\u5e76\u4e14 Docker \u5b98\u65b9\u5e76\u6ca1\u6709\u9488\u5bf9 Kali \u8fdb\u884c\u9002\u914d\u4e0e\u6d4b\u8bd5\uff0c\u6240\u4ee5\u5e76\u4e0d\u5efa\u8bae\u57fa\u4e8e Kali \u73af\u5883\u914d\u7f6e Docker"})}),"\n",(0,t.jsxs)(n.p,{children:["\u540c\u65f6\uff0c\u6b64\u811a\u672c\u672c\u8eab\u7531\u4e8e\u5c5e\u4e8e ",(0,t.jsx)(n.code,{children:"docker.com"})," \u57df\u5185\uff0c\u6240\u4ee5\u5927\u9646\u7f51\u7edc\u73af\u5883\u76f4\u63a5 ",(0,t.jsx)(n.code,{children:"curl"})," \u83b7\u53d6\u811a\u672c\u53ef\u80fd\u4f1a\u5b58\u5728\u57df\u540d\u5c4f\u853d\u7684\u95ee\u9898\uff0c\u5efa\u8bae\u76f4\u63a5\u5728\u5408\u9002\u7684\u7f51\u7edc\u73af\u5883\u4e0b\u4e0b\u8f7d\u597d\u811a\u672c\uff0c\u7136\u540e\u6267\u884c\u5b89\u88c5\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u5efa\u8bae\u5728\u4ee3\u7406\u73af\u5883\u4e0b\u83b7\u53d6\u5b89\u88c5\u811a\u672c\ncurl -fsSL https://get.docker.com -o install-docker.sh\nsudo sh install-docker.sh --mirror Aliyun\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u52a0 sudo \u4e5f\u53ef\u4ee5\uff0c\u811a\u672c\u80fd\u591f\u6b63\u786e\u5904\u7406\u73af\u5883\u7684\u6743\u9650\u6001\u95ee\u9898\uff0c\u4e3b\u52a8\u5411\u7528\u6237\u8bf7\u6c42 root \u6743\u9650"}),"\n",(0,t.jsx)(n.p,{children:"\u540c\u65f6\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5b89\u88c5\u7684\u6700\u540e\uff0c\u5b89\u88c5\u811a\u672c\u4f1a\u63d0\u793a\u542f\u7528 root-less \u6a21\u5f0f\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f1a\u4ea7\u751f\u4e24\u79cd docker \u670d\u52a1\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u4e24\u79cd\u4e0a\u4e0b\u6587\uff0c\u5e76\u4e14\u666e\u901a\u7528\u6237\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8bbf\u95ee\u7684\u59cb\u7ec8\u90fd\u662f root-less \u6a21\u5f0f\u7684 docker \u4e0a\u4e0b\u6587\uff0c\u4f1a\u5bf9\u73af\u5883\u4ee5\u53ca\u914d\u7f6e\u4ea7\u751f\u4e00\u5b9a\u5f71\u54cd"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"\u5b98\u65b9\u6587\u6863 - Install Docker Engine"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var t=o(7294);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);