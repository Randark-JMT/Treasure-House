"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[6802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},k=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,u=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(u,l(l({ref:t},k),{},{components:r})):n.createElement(u,l({ref:t},k))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l="Docker Remote API",i={unversionedId:"Environment/docker/Docker-Remote-API",id:"Environment/docker/Docker-Remote-API",title:"Docker Remote API",description:"Docker Remote API \u662f\u4e00\u4e2a\u53d6\u4ee3\u8fdc\u7a0b\u547d\u4ee4\u884c\u754c\u9762\uff08rcli\uff09\u7684REST API\uff0c\u5176\u9ed8\u8ba4\u7ed1\u5b9a2375\u7aef\u53e3",source:"@site/docs/Environment/docker/Docker-Remote-API.md",sourceDirName:"Environment/docker",slug:"/Environment/docker/Docker-Remote-API",permalink:"/docs/Environment/docker/Docker-Remote-API",draft:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Environment/docker/Docker-Remote-API.md",tags:[],version:"current",frontMatter:{},sidebar:"Environment_Sidebar",previous:{title:"Docker \u7279\u6743\u6a21\u5f0f",permalink:"/docs/Environment/docker/Docker-Privileged"}},c={},p=[{value:"Docker Remote API \u5f00\u542f",id:"docker-remote-api-\u5f00\u542f",level:2},{value:"Docker \u5ba2\u6237\u7aef\u4f7f\u7528 Docker Remote API",id:"docker-\u5ba2\u6237\u7aef\u4f7f\u7528-docker-remote-api",level:2},{value:"HTTP \u534f\u8bae\u4f7f\u7528 Docker Remote API",id:"http-\u534f\u8bae\u4f7f\u7528-docker-remote-api",level:2},{value:"Reference",id:"reference",level:2}],k={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-remote-api"},"Docker Remote API"),(0,a.kt)("p",null,"Docker Remote API \u662f\u4e00\u4e2a\u53d6\u4ee3\u8fdc\u7a0b\u547d\u4ee4\u884c\u754c\u9762\uff08rcli\uff09\u7684REST API\uff0c\u5176\u9ed8\u8ba4\u7ed1\u5b9a2375\u7aef\u53e3"),(0,a.kt)("p",null,"Docker Remote API \u5e38\u89c1\u7aef\u53e3\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2375"),(0,a.kt)("td",{parentName:"tr",align:null},"\u672a\u52a0\u5bc6\u7684 docker socket, \u8fdc\u7a0b root \u65e0\u5bc6\u7801\u8bbf\u95ee\u4e3b\u673a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2376"),(0,a.kt)("td",{parentName:"tr",align:null},"tls \u52a0\u5bc6\u5957\u63a5\u5b57, \u5f88\u53ef\u80fd\u8fd9\u662f\u60a8\u7684 CI \u670d\u52a1\u5668 4243 \u7aef\u53e3\u4f5c\u4e3a https 443 \u7aef\u53e3\u7684\u4fee\u6539")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2377"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u96c6\u6a21\u5f0f\u5957\u63a5\u5b57, \u9002\u7528\u4e8e\u7fa4\u96c6\u7ba1\u7406\u5668, \u4e0d\u9002\u7528\u4e8e docker \u5ba2\u6237\u7aef")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5000"),(0,a.kt)("td",{parentName:"tr",align:null},"docker \u6ce8\u518c\u670d\u52a1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4789/7946"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6\u7f51\u7edc")))),(0,a.kt)("h2",{id:"docker-remote-api-\u5f00\u542f"},"Docker Remote API \u5f00\u542f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u201c",(0,a.kt)("inlineCode",{parentName:"p"},"unix:///var/run/docker.sock"),"\u201d\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"unix socket"),"\uff0c\u672c\u5730\u5ba2\u6237\u7aef\u5c06\u901a\u8fc7\u8fd9\u4e2a\u6765\u8fde\u63a5 Docker Daemon")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u201c",(0,a.kt)("inlineCode",{parentName:"p"},"tcp://0.0.0.0:2375"),"\u201d\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"tcp socket"),"\uff0c\u8868\u793a\u5141\u8bb8\u4efb\u4f55\u8fdc\u7a0b\u5ba2\u6237\u7aef\u901a\u8fc7 2375 \u7aef\u53e3\u8fde\u63a5 Docker Daemon")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/docker.service"),"\uff0c\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"-H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock")))),(0,a.kt)("p",null,"service \u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e3b\u8981\u662f\u5728 [Service] \u8fd9\u4e2a\u90e8\u5206\n[Service]\nType=notify\n# the default is not to use systemd for cgroups because the delegate issues still\n# exists and systemd currently does not support the cgroup feature set required\n# for containers run by docker\nExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock --containerd=/run/containerd/containerd.sock\nExecReload=/bin/kill -s HUP $MAINPID\nTimeoutSec=0\nRestartSec=2\nRestart=always\n\n# \u91cd\u542f\nsystemctl daemon-reload\nsystemctl restart docker\n")),(0,a.kt)("p",null,"\u4fee\u6539 / etc/docker/daemon.json \u7684\u914d\u7f6e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hosts": ["tcp://0.0.0.0:2375","unix:///var/run/docker.sock"]\n}\n')),(0,a.kt)("p",null,"\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\uff0c\u9700\u8981\u53bb\u6389 / usr/lib/systemd/system/docker.service \u4e2d\u5173\u4e8e -H \u7684\u9009\u9879\uff0c\u5426\u5219\u4f1a\u62a5\u9519"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ExecStart=/usr/bin/dockerd --containerd=/run/containerd/containerd.sock\n")),(0,a.kt)("p",null,"\u5f00\u542f Docker remote API \u4e4b\u540e\uff0c\u67e5\u770b\u5f00\u542f\u540e\u7684\u7aef\u53e3\u76d1\u542c\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ss -tunlp | grep docker\n")),(0,a.kt)("h2",{id:"docker-\u5ba2\u6237\u7aef\u4f7f\u7528-docker-remote-api"},"Docker \u5ba2\u6237\u7aef\u4f7f\u7528 Docker Remote API"),(0,a.kt)("p",null,"\u5728 Docker Cli \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"-H")," \u4e3a\u8fde\u63a5\u76ee\u6807\u4e3b\u673a docker \u670d\u52a1"),(0,a.kt)("p",null,"\u67e5\u770b docker \u7248\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker -H tcp://<Server-IP>:2375 version\n")),(0,a.kt)("p",null,"\u67e5\u770b\u955c\u50cf\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker -H tcp://<Server-IP>:2375 image ls\n")),(0,a.kt)("h2",{id:"http-\u534f\u8bae\u4f7f\u7528-docker-remote-api"},"HTTP \u534f\u8bae\u4f7f\u7528 Docker Remote API"),(0,a.kt)("p",null,"\u5b98\u65b9\u63d0\u4f9b Docker Engine API \u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/api/"},"Develop with Docker Engine API")),(0,a.kt)("p",null,"Docker Remote API \u662f\u4e00\u4e2a\u53d6\u4ee3\u8fdc\u7a0b\u547d\u4ee4\u884c\u754c\u9762\uff08rcli\uff09\u7684 REST API\u3002\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177 cURL \u6765\u5904\u7406 url \u76f8\u5173\u64cd\u4f5c\u3002cURL \u53ef\u4ee5\u53d1\u9001\u8bf7\u6c42\u3001\u83b7\u53d6\u4ee5\u53ca\u53d1\u9001\u6570\u636e\u3001\u68c0\u7d22\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u5217\u8868, \u83b7\u53d6\u6240\u6709\u5bb9\u5668\u7684\u6e05\u5355\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"GET /containers/json")),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65b0\u5bb9\u5668, \u547d\u4ee4\u5982\u4e0b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"POST /containers/create")),(0,a.kt)("li",{parentName:"ul"},"\u76d1\u63a7\u5bb9\u5668, \u4f7f\u7528\u5bb9\u5668 id \u83b7\u53d6\u8be5\u5bb9\u5668\u5e95\u5c42\u4fe1\u606f\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"GET /containers/(id)/json")),(0,a.kt)("li",{parentName:"ul"},"\u8fdb\u7a0b\u5217\u8868, \u83b7\u53d6\u5bb9\u5668\u5185\u8fdb\u7a0b\u7684\u6e05\u5355\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"GET /containers/(id)/top")),(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u65e5\u5fd7, \u83b7\u53d6\u5bb9\u5668\u7684\u6807\u51c6\u8f93\u51fa\u548c\u9519\u8bef\u65e5\u5fd7\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"GET /containers/(id)/logs")),(0,a.kt)("li",{parentName:"ul"},"\u5bfc\u51fa\u5bb9\u5668, \u5bfc\u51fa\u5bb9\u5668\u5185\u5bb9\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"GET /containers/(id)/export")),(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8\u5bb9\u5668, \u5982\u4e0b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"POST /containers/(id)/start")),(0,a.kt)("li",{parentName:"ul"},"\u505c\u6b62\u5bb9\u5668, \u547d\u4ee4\u5982\u4e0b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"POST /containers/(id)/stop")),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u542f\u5bb9\u5668, \u5982\u4e0b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"POST /containers/(id)/restart")),(0,a.kt)("li",{parentName:"ul"},"\u7ec8\u6b62\u5bb9\u5668\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"POST /containers/(id)/kill"))),(0,a.kt)("p",null,"\u4f8b\u5982\u83b7\u53d6\u5bb9\u5668\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl <Server-IP>:2375/containers/json\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_41586875/article/details/130182132"},"Docker Remote API \u914d\u7f6e\u4e0e\u4f7f\u7528 By \u65fa\u4ed4_\u725b\u5976")))}d.isMDXComponent=!0}}]);