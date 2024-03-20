"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[8522],{9956:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var s=c(5893),r=c(1151);const t={},d=void 0,i={id:"Attack-Defense/Security-Enhancement/Account-Control/linux-test",title:"linux-test",description:"\u5728Linux\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6epam_tally2\u6a21\u5757\u6765\u5b9e\u73b0\u8d26\u6237\u767b\u5f55\u5c1d\u8bd5\u6b21\u6570\u8fbe\u5230\u4e00\u5b9a\u9650\u5236\u540e\u9501\u5b9a\u8d26\u6237\u7684\u529f\u80fd\u3002\u4ee5\u4e0b\u662f\u8bbe\u7f6e\u8d26\u6237\u5c1d\u8bd5\u767b\u5f55\u6b21\u6570\u548c\u9501\u5b9a\u65f6\u95f4\u7684\u6b65\u9aa4\uff1a",source:"@site/docs/Attack-Defense/Security-Enhancement/Account-Control/linux-test.md",sourceDirName:"Attack-Defense/Security-Enhancement/Account-Control",slug:"/Attack-Defense/Security-Enhancement/Account-Control/linux-test",permalink:"/docs/Attack-Defense/Security-Enhancement/Account-Control/linux-test",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Attack-Defense/Security-Enhancement/Account-Control/linux-test.md",tags:[],version:"current",frontMatter:{},sidebar:"AttackDefense_Sidebar",previous:{title:"Windows \u8d26\u6237\u63a7\u5236",permalink:"/docs/Attack-Defense/Security-Enhancement/Account-Control/Windows"},next:{title:"\u65e5\u5fd7\u5ba1\u8ba1",permalink:"/docs/Attack-Defense/Security-Enhancement/Logging-Policies/"}},l={},o=[];function h(n){const e={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u5728Linux\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e",(0,s.jsx)(e.code,{children:"pam_tally2"}),"\u6a21\u5757\u6765\u5b9e\u73b0\u8d26\u6237\u767b\u5f55\u5c1d\u8bd5\u6b21\u6570\u8fbe\u5230\u4e00\u5b9a\u9650\u5236\u540e\u9501\u5b9a\u8d26\u6237\u7684\u529f\u80fd\u3002\u4ee5\u4e0b\u662f\u8bbe\u7f6e\u8d26\u6237\u5c1d\u8bd5\u767b\u5f55\u6b21\u6570\u548c\u9501\u5b9a\u65f6\u95f4\u7684\u6b65\u9aa4\uff1a"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6253\u5f00\u7ec8\u7aef\u5e76\u4ee5\u8d85\u7ea7\u7528\u6237\u6743\u9650\u767b\u5f55\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528\u6587\u672c\u7f16\u8f91\u5668\u6253\u5f00",(0,s.jsx)(e.code,{children:"/etc/pam.d/sshd"}),"\u6587\u4ef6\uff08\u5982\u679c\u4f7f\u7528SSH\u767b\u5f55\uff09\u6216",(0,s.jsx)(e.code,{children:"/etc/pam.d/login"}),"\u6587\u4ef6\uff08\u5982\u679c\u4f7f\u7528\u672c\u5730\u767b\u5f55\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728\u6587\u4ef6\u4e2d\u627e\u5230\u5305\u542b",(0,s.jsx)(e.code,{children:"auth"}),"\u5173\u952e\u5b57\u7684\u884c\uff0c\u901a\u5e38\u662f\u4ee5",(0,s.jsx)(e.code,{children:"auth"}),"\u5f00\u5934\u7684\u884c\u3002\u5728\u8be5\u884c\u540e\u9762\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"auth required pam_tally2.so deny=5 unlock_time=300 onerr=fail\n```\n\n\u89e3\u91ca\u4e00\u4e0b\u4e0a\u8ff0\u914d\u7f6e\u7684\u53c2\u6570\uff1a\n- `deny=5`\uff1a\u8bbe\u7f6e\u767b\u5f55\u5c1d\u8bd5\u5931\u8d25\u6b21\u6570\u8fbe\u52305\u6b21\u540e\u9501\u5b9a\u8d26\u6237\u3002\n- `unlock_time=300`\uff1a\u8bbe\u7f6e\u9501\u5b9a\u65f6\u95f4\u4e3a300\u79d2\uff085\u5206\u949f\uff09\u3002\n- `onerr=fail`\uff1a\u5728\u6a21\u5757\u9519\u8bef\u65f6\u5c06\u8fd4\u56de\u5931\u8d25\u3002\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4fdd\u5b58\u6587\u4ef6\u5e76\u5173\u95ed\u7f16\u8f91\u5668\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u914d\u7f6e\u751f\u6548\u540e\uff0c\u5f53\u4e00\u4e2a\u8d26\u6237\u7684\u767b\u5f55\u5c1d\u8bd5\u5931\u8d25\u6b21\u6570\u8fbe\u52305\u6b21\u65f6\uff0c\u8be5\u8d26\u6237\u5c06\u88ab\u9501\u5b9a\u5e76\u7981\u6b62\u767b\u5f55\u3002\u9501\u5b9a\u65f6\u95f4\u4e3a5\u5206\u949f\uff0c5\u5206\u949f\u540e\u8d26\u6237\u5c06\u81ea\u52a8\u89e3\u9501\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u8981\u624b\u52a8\u89e3\u9501\u8d26\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(e.code,{children:"pam_tally2"}),'\u547d\u4ee4\u3002\u4f8b\u5982\uff0c\u8981\u89e3\u9501\u540d\u4e3a"username"\u7684\u8d26\u6237\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a']}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"sudo pam_tally2 --reset --user username\n"})}),"\n",(0,s.jsx)(e.p,{children:'\u4e0a\u8ff0\u547d\u4ee4\u5c06\u91cd\u7f6e"username"\u8d26\u6237\u7684\u767b\u5f55\u5c1d\u8bd5\u8ba1\u6570\u3002'}),"\n",(0,s.jsx)(e.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u786e\u4fdd\u5728\u8fdb\u884c\u6b64\u7c7b\u66f4\u6539\u4e4b\u524d\u5907\u4efd\u548c\u4e86\u89e3\u7cfb\u7edf\u7684\u914d\u7f6e\uff0c\u4ee5\u514d\u610f\u5916\u9501\u5b9a\u81ea\u5df1\u6216\u5176\u4ed6\u7528\u6237\u7684\u8d26\u6237\u3002\u6b64\u5916\uff0c\u5177\u4f53\u7684\u914d\u7f6e\u65b9\u5f0f\u53ef\u80fd\u56e0Linux\u53d1\u884c\u7248\u548c\u7248\u672c\u800c\u6709\u6240\u4e0d\u540c\uff0c\u5efa\u8bae\u67e5\u9605\u76f8\u5173\u6587\u6863\u6216\u54a8\u8be2\u7cfb\u7edf\u7ba1\u7406\u5458\u4ee5\u83b7\u53d6\u51c6\u786e\u7684\u914d\u7f6e\u4fe1\u606f\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u8981\u8bbe\u7f6e",(0,s.jsx)(e.code,{children:"/etc/group"}),"\u548c",(0,s.jsx)(e.code,{children:"/etc/passwd"}),"\u7684\u6743\u9650\u4e3a\u6240\u6709\u8005\u53ef\u8bfb\u5199\uff0c\u7fa4\u7ec4\u7528\u6237\u548c\u5176\u4ed6\u7528\u6237\u53ea\u53ef\u8bfb\u53d6\uff0c\u4ee5\u53ca",(0,s.jsx)(e.code,{children:"/etc/shadow"}),"\u548c",(0,s.jsx)(e.code,{children:"/etc/gshadow"}),"\u7684\u6743\u9650\u4ec5\u9650\u6240\u6709\u8005\u53ef\u8bfb\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\uff1a"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6253\u5f00\u7ec8\u7aef\u5e76\u4ee5\u8d85\u7ea7\u7528\u6237\u6743\u9650\u767b\u5f55\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528",(0,s.jsx)(e.code,{children:"chmod"}),"\u547d\u4ee4\u8bbe\u7f6e",(0,s.jsx)(e.code,{children:"/etc/group"}),"\u548c",(0,s.jsx)(e.code,{children:"/etc/passwd"}),"\u7684\u6743\u9650\u4e3a\u6240\u6709\u8005\u53ef\u8bfb\u5199\uff0c\u7fa4\u7ec4\u7528\u6237\u548c\u5176\u4ed6\u7528\u6237\u53ea\u53ef\u8bfb\u53d6\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"sudo chmod 644 /etc/group /etc/passwd\n```\n\n\u8fd9\u5c06\u8bbe\u7f6e\u6743\u9650\u4e3a `-rw-r--r--`\uff0c\u5373\u6240\u6709\u8005\u53ef\u8bfb\u5199\uff0c\u7fa4\u7ec4\u7528\u6237\u548c\u5176\u4ed6\u7528\u6237\u53ea\u53ef\u8bfb\u53d6\u3002\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528",(0,s.jsx)(e.code,{children:"chmod"}),"\u547d\u4ee4\u8bbe\u7f6e",(0,s.jsx)(e.code,{children:"/etc/shadow"}),"\u548c",(0,s.jsx)(e.code,{children:"/etc/gshadow"}),"\u7684\u6743\u9650\u4e3a\u4ec5\u6240\u6709\u8005\u53ef\u8bfb\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"sudo chmod 600 /etc/shadow /etc/gshadow\n```\n\n\u8fd9\u5c06\u8bbe\u7f6e\u6743\u9650\u4e3a `-rw-------`\uff0c\u5373\u4ec5\u6240\u6709\u8005\u53ef\u8bfb\u3002\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u786e\u4fdd\u5728\u8fdb\u884c\u6b64\u7c7b\u66f4\u6539\u4e4b\u524d\u5907\u4efd\u91cd\u8981\u7684\u7cfb\u7edf\u6587\u4ef6\uff0c\u4ee5\u9632\u610f\u5916\u5bfc\u81f4\u6743\u9650\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u4e3a\u4e86\u786e\u4fdd\u7cfb\u7edf\u7684\u5b89\u5168\u6027\uff0c\u5efa\u8bae\u91c7\u53d6\u5176\u4ed6\u63aa\u65bd\uff0c\u5982\u5b9a\u671f\u5907\u4efd\u91cd\u8981\u6587\u4ef6\u3001\u9650\u5236\u5bf9\u7cfb\u7edf\u6587\u4ef6\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u5e76\u4fdd\u6301\u7cfb\u7edf\u548c\u8f6f\u4ef6\u66f4\u65b0\u4ee5\u4fee\u590d\u6f5c\u5728\u7684\u6f0f\u6d1e\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8981\u6ee1\u8db3\u8fd9\u4e2a\u9700\u6c42\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u6765\u5f00\u542f\u7cfb\u7edf\u7684\u5ba1\u8ba1\u529f\u80fd\uff0c\u5e76\u76d1\u63a7SSH\u7ec8\u7aef\u7684\u64cd\u4f5c\uff0c\u5305\u62ec\u5199\u64cd\u4f5c\u548c\u5c5e\u6027\u53d8\u5316\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u68c0\u67e5\u5ba1\u8ba1\u529f\u80fd\u662f\u5426\u5df2\u542f\u7528\uff1a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u68c0\u67e5\u7cfb\u7edf\u4e0a\u7684\u5ba1\u8ba1\u670d\u52a1\u662f\u5426\u5df2\u7ecf\u542f\u7528\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"systemctl status auditd\n```\n\n\u5982\u679c\u5ba1\u8ba1\u670d\u52a1\u672a\u8fd0\u884c\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u5b83\uff1a\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"systemctl start auditd"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\n\u5e76\u786e\u4fdd\u8bbe\u7f6e\u4e3a\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u542f\u52a8\uff1a\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"systemctl enable auditd"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u914d\u7f6e\u5ba1\u8ba1\u89c4\u5219\uff1a\u6253\u5f00 ",(0,s.jsx)(e.code,{children:"/etc/audit/audit.rules"})," \u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528\u6587\u672c\u7f16\u8f91\u5668\u8fdb\u884c\u7f16\u8f91\u3002\u6dfb\u52a0\u4ee5\u4e0b\u89c4\u5219\u6765\u76d1\u63a7SSH\u7ec8\u7aef\u7684\u64cd\u4f5c\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"-w /var/log/secure -p wa -k ssh\n```\n\n\u4e0a\u8ff0\u89c4\u5219\u5c06\u76d1\u63a7 `/var/log/secure` \u6587\u4ef6\u7684\u5199\u64cd\u4f5c\u548c\u5c5e\u6027\u53d8\u5316\uff0c\u5e76\u4f7f\u7528\u6807\u7b7e `ssh` \u8fdb\u884c\u6807\u8bb0\u3002\u8fd9\u662f\u5305\u542bSSH\u767b\u5f55\u4fe1\u606f\u7684\u7cfb\u7edf\u65e5\u5fd7\u6587\u4ef6\uff08\u5728\u67d0\u4e9b\u53d1\u884c\u7248\u4e2d\u53ef\u80fd\u662f\u4e0d\u540c\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u8c03\u6574\uff09\u3002\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4fdd\u5b58\u6587\u4ef6\u5e76\u5173\u95ed\u7f16\u8f91\u5668\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u91cd\u542f\u5ba1\u8ba1\u670d\u52a1\uff1a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u4f7f\u65b0\u7684\u5ba1\u8ba1\u89c4\u5219\u751f\u6548\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"systemctl restart auditd\n```\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u73b0\u5728\uff0c\u7cfb\u7edf\u5c06\u5f00\u59cb\u76d1\u63a7SSH\u7ec8\u7aef\u7684\u64cd\u4f5c\uff0c\u5305\u62ec\u5199\u64cd\u4f5c\u548c\u5c5e\u6027\u53d8\u5316\uff0c\u5e76\u5c06\u8fd9\u4e9b\u4e8b\u4ef6\u8bb0\u5f55\u5230\u5ba1\u8ba1\u65e5\u5fd7\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(e.code,{children:"ausearch"}),"\u6216",(0,s.jsx)(e.code,{children:"aureport"}),"\u7b49\u547d\u4ee4\u6765\u68c0\u7d22\u548c\u5206\u6790\u5ba1\u8ba1\u65e5\u5fd7\u4ee5\u83b7\u53d6\u6240\u9700\u7684\u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u786e\u4fdd\u5728\u8fdb\u884c\u6b64\u7c7b\u66f4\u6539\u4e4b\u524d\u5907\u4efd\u91cd\u8981\u7684\u7cfb\u7edf\u6587\u4ef6\uff0c\u5e76\u9075\u5faa\u6700\u4f73\u5b89\u5168\u5b9e\u8df5\u3002\u6b64\u5916\uff0c\u5177\u4f53\u7684\u914d\u7f6e\u65b9\u5f0f\u53ef\u80fd\u56e0Linux\u53d1\u884c\u7248\u548c\u7248\u672c\u800c\u6709\u6240\u4e0d\u540c\uff0c\u5efa\u8bae\u67e5\u9605\u76f8\u5173\u6587\u6863\u6216\u54a8\u8be2\u7cfb\u7edf\u7ba1\u7406\u5458\u4ee5\u83b7\u53d6\u51c6\u786e\u7684\u914d\u7f6e\u4fe1\u606f\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},1151:(n,e,c)=>{c.d(e,{Z:()=>i,a:()=>d});var s=c(7294);const r={},t=s.createContext(r);function d(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);