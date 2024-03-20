"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[9949],{4254:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(5893),a=r(1151);const o={slug:"2024-03-19-Docker-Swarm-Init",title:"Docker Swarm with Photon OS",authors:"Randark",tags:[]},s=void 0,i={permalink:"/blog/2024-03-19-Docker-Swarm-Init",editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/blog/2024-03-19-Docker-Swarm-Init/index.md",source:"@site/blog/2024-03-19-Docker-Swarm-Init/index.md",title:"Docker Swarm with Photon OS",description:"\u6587\u7ae0\u5185\u5bb9\u4e3a\u6211\u4e2a\u4eba\u7684 Docker \u5b9e\u9a8c\u96c6\u7fa4\uff0c\u5e26\u6709\u4e2a\u4eba\u4e60\u60ef\uff0c\u6545\u5e76\u6ca1\u6709\u653e\u5728\u77e5\u8bc6\u5e93\u6b63\u6587",date:"2024-03-19T00:00:00.000Z",formattedDate:"2024\u5e743\u670819\u65e5",tags:[],readingTime:3.13,hasTruncateMarker:!1,authors:[{name:"\u9648\u6a58mo",title:"Why So Serious?",url:"https://randark.site",imageURL:"https://randark.site/img/logo.jpg",key:"Randark"}],frontMatter:{slug:"2024-03-19-Docker-Swarm-Init",title:"Docker Swarm with Photon OS",authors:"Randark",tags:[]},unlisted:!1,nextItem:{title:"Kubernetes with Photon OS",permalink:"/blog/2024-03-19-Kubernetes-Swarm-Init"}},d={authorsImageUrls:[void 0]},c=[{value:"\u5173\u95ed\u9632\u706b\u5899",id:"\u5173\u95ed\u9632\u706b\u5899",level:2},{value:"\u4e3a <code>tdnf</code> \u8bbe\u7f6e\u955c\u50cf\uff0c\u52a0\u5feb\u8f6f\u4ef6\u5305\u4e0b\u8f7d\u901f\u5ea6",id:"\u4e3a-tdnf-\u8bbe\u7f6e\u955c\u50cf\u52a0\u5feb\u8f6f\u4ef6\u5305\u4e0b\u8f7d\u901f\u5ea6",level:2},{value:"\u90e8\u7f72 Docker Swarm",id:"\u90e8\u7f72-docker-swarm",level:2},{value:"\u90e8\u7f72 Portainer",id:"\u90e8\u7f72-portainer",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6587\u7ae0\u5185\u5bb9\u4e3a\u6211\u4e2a\u4eba\u7684 Docker \u5b9e\u9a8c\u96c6\u7fa4\uff0c\u5e26\u6709\u4e2a\u4eba\u4e60\u60ef\uff0c\u6545\u5e76\u6ca1\u6709\u653e\u5728\u77e5\u8bc6\u5e93\u6b63\u6587"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6587\u7ae0\u5f00\u59cb\u4e4b\u524d\uff0c\u5df2\u7ecf\u57fa\u4e8e Photon OS \u90e8\u7f72\u4e86\u56db\u53f0\u865a\u62df\u673a\uff0c\u5176\u4e2d\u4e00\u53f0\u4e3b\u8282\u70b9\uff0c\u4e09\u53f0\u4f5c\u4e3a\u5b50\u8282\u70b9"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:r(8906).Z+"",width:"2048",height:"1236"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"hostname"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"ip address"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"docker-main"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"192.168.200.134"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"docker-node-1"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"192.168.200.135"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"docker-node-2"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"192.168.200.136"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"docker-node-3"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"192.168.200.137"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u505a\u597d\u4e86\u524d\u671f\u5de5\u4f5c"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u66f4\u6539\u6bcf\u4e00\u53f0\u8282\u70b9\u7684 hostname"}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u90e8\u7f72 clash \u4ee3\u7406"}),"\n",(0,t.jsx)(n.li,{children:"\u6bcf\u4e2a\u8282\u70b9\u7684 Docker \u5747\u8bbe\u7f6e\u4e86 Daemon Proxy"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5173\u95ed\u9632\u706b\u5899",children:"\u5173\u95ed\u9632\u706b\u5899"}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e\u6b64\u96c6\u7fa4\u7528\u4e8e\u6d4b\u8bd5\uff0c\u6240\u4ee5\u5728\u8fd9\u4e2a\u96c6\u7fa4\u4e0a\u4e0d\u9700\u8981\u9632\u706b\u5899\u7684\u4fdd\u62a4\u63aa\u65bd"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"systemctl stop iptables\nsystemctl disable iptables\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u4e3a-tdnf-\u8bbe\u7f6e\u955c\u50cf\u52a0\u5feb\u8f6f\u4ef6\u5305\u4e0b\u8f7d\u901f\u5ea6",children:["\u4e3a ",(0,t.jsx)(n.code,{children:"tdnf"})," \u8bbe\u7f6e\u955c\u50cf\uff0c\u52a0\u5feb\u8f6f\u4ef6\u5305\u4e0b\u8f7d\u901f\u5ea6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"vim /etc/tdnf/tdnf.conf\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5176\u4e2d\u8fdb\u884c\u66f4\u6539"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"[main]\ngpgcheck=1\ninstallonly_limit=3\nclean_requirements_on_remove=0\nrepodir=/etc/yum.repos.d\ncachedir=/var/cache/tdnf\nproxy=http://127.0.0.1:7890\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee3\u7406\u914d\u7f6e\u5b8c\u6bd5\u4e4b\u540e\uff0c\u6267\u884c ",(0,t.jsx)(n.code,{children:"tdnf update"})]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\uff0c\u56db\u53f0\u865a\u62df\u673a\u7684\u8f6f\u4ef6\u5305\u7248\u672c\u5e94\u8be5\u90fd\u662f\u7edf\u4e00\u7684\u6700\u65b0\u7248\u672c"}),"\n",(0,t.jsx)(n.h2,{id:"\u90e8\u7f72-docker-swarm",children:"\u90e8\u7f72 Docker Swarm"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\uff0c\u73b0\u5728\u4e3b\u8282\u70b9\u521d\u59cb\u5316 swarm"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@docker-main [~]# docker swarm init --advertise-addr 192.168.200.134\nSwarm initialized: current node (pq6gku0fv2rfad9tt9np2bvzy) is now a manager.\n\nTo add a worker to this swarm, run the following command:\n\n    docker swarm join --token ****** 192.168.200.134:2377\n\nTo add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u4e86\u8282\u70b9\u95f4\u901a\u4fe1\u7684"}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u5c06\u4e09\u53f0\u5b50\u8282\u70b9\u52a0\u5165\u5230 swarm"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@docker-node-1 [~]# docker swarm join --token ****** 192.168.200.134:2377\nThis node joined a swarm as a worker.\n\nroot@docker-node-2 [~]# docker swarm join --token ****** 192.168.200.134:2377\nThis node joined a swarm as a worker.\n\nroot@docker-node-3 [~]# docker swarm join --token ****** 192.168.200.134:2377\nThis node joined a swarm as a worker.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"docker-main"})," \u8282\u70b9\u4e0a\u67e5\u8be2\u6574\u4e2a swarm \u72b6\u6001"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@docker-main [~]# docker node ls\nID                            HOSTNAME        STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION\npq6gku0fv2rfad9tt9np2bvzy *   docker-main     Ready     Active         Leader           24.0.5\nn00jzhnp2ttlkdxw53t0o7yf9     docker-node-1   Ready     Active                          24.0.5\nsuk0amyclojgcm0ykt9ah3l8t     docker-node-2   Ready     Active                          24.0.5\ngh480lkdg3f447zu26m7xl2y9     docker-node-3   Ready     Active                          24.0.5\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u90e8\u7f72-portainer",children:"\u90e8\u7f72 Portainer"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\uff0c\u4e0b\u8f7d\u5806\u6808\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"curl -L https://downloads.portainer.io/ce2-19/portainer-agent-stack.yml -o portainer-agent-stack.yml\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6587\u4ef6\u5185\u5bb9\u4e3a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",metastring:'title="portainer-agent-stack.yml"',children:'version: \'3.2\'\n\nservices:\n  agent:\n    image: portainer/agent:2.19.4\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /var/lib/docker/volumes:/var/lib/docker/volumes\n    networks:\n      - agent_network\n    deploy:\n      mode: global\n      placement:\n        constraints: [node.platform.os == linux]\n\n  portainer:\n    image: portainer/portainer-ce:2.19.4\n    command: -H tcp://tasks.agent:9001 --tlsskipverify\n    ports:\n      - "9443:9443"\n      - "9000:9000"\n      - "8000:8000"\n    volumes:\n      - portainer_data:/data\n    networks:\n      - agent_network\n    deploy:\n      mode: replicated\n      replicas: 1\n      placement:\n        constraints: [node.role == manager]\n\nnetworks:\n  agent_network:\n    driver: overlay\n    attachable: true\n\nvolumes:\n  portainer_data:\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u90e8\u7f72\u5806\u6808"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@docker-main [~]# docker stack deploy -c portainer-agent-stack.yml portainer\nCreating network portainer_agent_network\nCreating service portainer_portainer\nCreating service portainer_agent\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u670d\u52a1\u72b6\u6001"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@docker-main [~]# docker stack ls\nNAME        SERVICES\nportainer   2\nroot@docker-main [~]# docker service ls\nID             NAME                  MODE         REPLICAS   IMAGE                           PORTS\n0u1bzfeo2gir   portainer_agent       global       4/4        portainer/agent:2.19.4\nywjdr6qpsbjw   portainer_portainer   replicated   1/1        portainer/portainer-ce:2.19.4   *:8000->8000/tcp, *:9000->9000/tcp, *:9443->9443/tcp\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Portainer \u670d\u52a1\u5df2\u7ecf\u6210\u529f\u542f\u52a8\uff0c\u8bbf\u95ee ",(0,t.jsx)(n.code,{children:"https://192.168.200.134:9443"})," \u4e4b\u540e\u8fdb\u884c\u521d\u59cb\u5316\u914d\u7f6e\uff0c\u968f\u540e\u5373\u53ef\u770b\u5230 Portainer \u73af\u5883\u72b6\u6001"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:r(2044).Z+"",width:"2560",height:"1371"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},2044:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/image_20240317-181715-f054f7dad0018c1f5b85b4f576d2cbd9.png"},8906:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/image_20240335-163531-7f12e9d61ea7a1ec374209d6a09767c5.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var t=r(7294);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);