"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[2918],{8248:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var i=s(5893),t=s(1151);const c={},r="Github Action",o={id:"DevSecOps/Github-CI-CD/Github-Action",title:"Github Action",description:"Github \u5b98\u65b9\u5e02\u573a",source:"@site/docs/DevSecOps/Github-CI-CD/Github-Action.md",sourceDirName:"DevSecOps/Github-CI-CD",slug:"/DevSecOps/Github-CI-CD/Github-Action",permalink:"/docs/DevSecOps/Github-CI-CD/Github-Action",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/DevSecOps/Github-CI-CD/Github-Action.md",tags:[],version:"current",frontMatter:{},sidebar:"DevSecOps_Sidebar",previous:{title:"Github CI/CD",permalink:"/docs/DevSecOps/Github-CI-CD/"},next:{title:"Github App",permalink:"/docs/DevSecOps/Github-CI-CD/Github-App"}},l={},d=[{value:"Github \u5b98\u65b9\u5e02\u573a",id:"github-\u5b98\u65b9\u5e02\u573a",level:2},{value:"\u57fa\u672c\u7ed3\u6784",id:"\u57fa\u672c\u7ed3\u6784",level:2},{value:"job",id:"job",level:3},{value:"steps",id:"steps",level:3},{value:"\u81ea\u52a8\u5316\u6784\u5efa Docker \u955c\u50cf",id:"\u81ea\u52a8\u5316\u6784\u5efa-docker-\u955c\u50cf",level:2},{value:"\u81ea\u52a8\u5904\u7406\u9879\u76ee\u6570\u636e\uff0c\u5e76\u63a8\u9001\u5230 Github Release",id:"\u81ea\u52a8\u5904\u7406\u9879\u76ee\u6570\u636e\u5e76\u63a8\u9001\u5230-github-release",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"github-action",children:"Github Action"}),"\n",(0,i.jsx)(n.h2,{id:"github-\u5b98\u65b9\u5e02\u573a",children:"Github \u5b98\u65b9\u5e02\u573a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/marketplace?category=&query=&type=actions&verification=",children:"GitHub Marketplace: actions to improve your workflow"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u5728\u5b98\u65b9\u5e02\u573a\u4e2d\u641c\u5bfb ",(0,i.jsx)(n.code,{children:"Github Action"}),"\uff0c\u5e76\u5c06\u5176\u52a0\u8f7d\u5230\u7279\u5b9a\u7ec4\u7ec7 / \u4ed3\u5e93"]}),"\n",(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u7ed3\u6784",children:"\u57fa\u672c\u7ed3\u6784"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u5199\u8fc7 ",(0,i.jsx)(n.code,{children:"docker-compose"})," \u7684\u90e8\u7f72\u6587\u4ef6\uff0c\u5bf9\u8fd9\u4e2a\u4f1a\u6bd4\u8f83\u719f\u6089\uff0c\u7ed3\u6784\u57fa\u672c\u90fd\u662f\u4e00\u81f4\u7684"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," \u5b9a\u4e49\u5de5\u4f5c\u6d41\u7684\u540d\u79f0"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"on"})," \u5b9a\u4e49\u4e86\u5de5\u4f5c\u6d41\u5f00\u59cb\u5de5\u4f5c\u7684\u89e6\u53d1\u6761\u4ef6\uff0c\u53ef\u4ee5\u662f\u53d1\u751f\u4e86\u65b0\u7684 push \u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u662f\u5b9a\u65f6\u8fd0\u884c\u7684"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"env"})," \u5b9a\u4e49\u4e86\u5de5\u4f5c\u6d41\u5de5\u4f5c\u65f6\u7684\u73af\u5883\u53d8\u91cf\uff08\u7c7b\u4f3c\u4e8e\u7a0b\u5e8f\u5e38\u6570\uff09"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"jobs"})," \u5c31\u5b9a\u4e49\u4e86\u5de5\u4f5c\u6d41\u8fd0\u884c\u65f6\u7684\u5177\u4f53\u6bcf\u4e2a\u6a21\u5757"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"job",children:"job"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"jobs"})," \u4e2d\u53ef\u4ee5\u5b9a\u4e49\u591a\u4e2a job\uff0c\u6309\u7167\u987a\u5e8f\u6267\u884c\uff0c\u6309\u7167\u9012\u8fdb\u5206\u522b\u4e3a\u540d\u79f0\uff0c"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"runs-on"})," \u4e3a\u5de5\u4f5c\u6d41\u8fd0\u884c\u65f6\u7684\u57fa\u7840\u5bb9\u5668"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"permissions"})," \u6307\u5b9a\u4e86\u5de5\u4f5c\u6d41\u5bf9\u4e8e\u4ed3\u5e93\u7684\u6743\u9650\uff0c\u6709\u52a9\u4e8e\u907f\u514d\u53d1\u751f\u95ee\u9898\u65f6\u5f71\u54cd\u4ed3\u5e93\u5185\u7684\u6570\u636e"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"steps"})," \u8bbe\u8ba1\u4e86\u6bcf\u4e2a job \u7684\u5404\u4e2a\u90e8\u5206"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"steps",children:"steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," \u5b9a\u4e49\u4e86\u6bcf\u4e00\u6b65\u7684\u540d\u79f0"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"uses"})," \u5b9a\u4e49\u6bcf\u4e00\u6b65\u6240\u4f7f\u7528\u7684\u811a\u672c\uff0c\u53ef\u4ee5\u4e0d\u5199"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"with"})," \u5b9a\u4e49\u6b65\u9aa4\u5185\u6240\u4f7f\u7528\u7684\u53d8\u91cf"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"run"})," \u5b9a\u4e49\u6b65\u9aa4\u6267\u884c\u7684\u547d\u4ee4"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"with/context"})," \u5b9a\u4e49\u6b65\u9aa4\u6240\u8fd0\u884c\u7684\u8def\u5f84"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6574\u4f53\u6784\u5efa\u5de5\u4f5c\u6d41\u7684\u903b\u8f91\uff0c\u662f\u7c7b\u4f3c\u4e8e\u7f16\u7a0b\u7684\u65f6\u5019\u5bfc\u5165\u5305\u7684\uff0c\u53ea\u9700\u8981\u89c4\u5212\u597d\u5404\u4e2a\u90e8\u5206\u7684\u529f\u80fd\uff0c\u5927\u6982\u7387\u90fd\u80fd\u627e\u5230\u522b\u4eba\u5df2\u7ecf\u5199\u597d\u7684\u5305"}),"\n",(0,i.jsxs)(n.p,{children:["\u540c\u65f6\u6574\u4e2a\u5de5\u4f5c\u6d41\u7a0b\u4e2d\u5b58\u5728 ",(0,i.jsx)(n.code,{children:"env"})," \u548c ",(0,i.jsx)(n.code,{children:"steps"})," \u548c ",(0,i.jsx)(n.code,{children:"secrets"})," \u51e0\u4e2a\u53d8\u91cf\u57df\uff0c\u4ed6\u4eec\u5206\u522b\u662f\u73af\u5883\u53d8\u91cf\uff0c\u6b65\u9aa4\u4e2d\u4f20\u51fa\u7684\u53d8\u91cf\u548c\u79d8\u5bc6\u53d8\u91cf"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"env"})," \u662f\u63d0\u524d\u5b9a\u4e49\u597d\u7684\uff0c\u53ef\u4ee5\u7528\u6765\u89c4\u5212\u4e00\u4e9b\u5199\u6b7b\u7684\u5e38\u91cf"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"steps"})," \u662f\u5de5\u4f5c\u6d41\u5de5\u4f5c\u65f6\uff0c\u5176\u4e2d\u67d0\u4e9b\u6b65\u9aa4\u7684\u8f93\u51fa\uff0c\u5c31\u53ef\u4ee5\u7528 steps.<id>.outputs \u8bfb\u53d6\uff0c\u53ef\u4ee5\u5c06\u6570\u636e\u5728\u5355\u4e2a\u5de5\u4f5c\u6d41\u4e4b\u95f4\u8fdb\u884c\u4f20\u9012"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"secrets"})," \u7c7b\u4f3c\u4e8e ",(0,i.jsx)(n.code,{children:"docker-compose"})," \u7684 ",(0,i.jsx)(n.code,{children:"secret"})," \u6982\u5ff5\uff0c\u4f5c\u7528\u5c31\u662f\u5f15\u5165\u654f\u611f\u51ed\u636e\uff0c\u540c\u65f6\u53c8\u4e0d\u81f3\u4e8e\u4ee5\u660e\u6587\u5f62\u5f0f\u50a8\u5b58\u5728\u5de5\u4f5c\u6d41\u6587\u4ef6\u4e2d\uff0c",(0,i.jsx)(n.code,{children:"secrets"})," \u53ef\u4ee5\u662f\u5355\u4e2a\u4ed3\u5e93\u5185\u7684\uff0c\u4e5f\u53ef\u4ee5\u4e2a\u4eba / \u7ec4\u7ec7\u5171\u7528\u7684"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u81ea\u52a8\u5316\u6784\u5efa-docker-\u955c\u50cf",children:"\u81ea\u52a8\u5316\u6784\u5efa Docker \u955c\u50cf"}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u81ea\u5df1 ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/CTF-Archives/repositories",children:"CTF-Archives"})," \u4ed3\u5e93\u7684 docker \u81ea\u52a8\u5316\u7f16\u8bd1\u63a8\u9001\u7684\u811a\u672c\u4e3a\u4f8b"]}),"\n",(0,i.jsx)(n.p,{children:"Github Action \u914d\u7f6e\u6587\u4ef6\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"name: Publish Docker image\n\non:\n  push:\n    branches: [\"master\"]\n\nenv:\n  REGISTRY_GITHUB: ghcr.io\n  REGISTRY_DOCKERHUB: randark\n  IMAGE_NAME_GITHUB: ${{github.repository}}\n\njobs:\n  push_to_registries:\n    name: Push Docker image to multiple registries\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n      packages: write\n\n    steps:\n\n      - name: Check out the repo\n        uses: actions/checkout@v3\n\n      - name: Log in to Docker Hub\n        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9\n        with:\n          username: ${{secrets.DOCKER_USERNAME}}\n          password: ${{secrets.DOCKER_PASSWORD}}\n\n      - name: Log into registry ${{env.REGISTRY_GITHUB}}\n        if: github.event_name != 'pull_request'\n        uses: docker/login-action@28218f9b04b4f3f62068d7b6ce6ca5b26e35336c\n        with:\n          registry: ${{env.REGISTRY_GITHUB}}\n          username: ${{github.actor}}\n          password: ${{secrets.GITHUB_TOKEN}}\n\n      - name: Get repository name\n        id: repo-name\n        uses: MariachiBear/get-repo-name-action@v1.1.0\n        with:\n          string-case: lowercase\n\n      - name: Extract metadata (tags, labels) for Docker\n        id: meta\n        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38\n        with:\n          images: |\n            ${{env.REGISTRY_DOCKERHUB}}/${{ steps.repo-name.outputs.repository-name }}\n            ${{env.REGISTRY_GITHUB}}/${{ env.IMAGE_NAME_GITHUB }}\n\n      - name: Build and push Docker images\n        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc\n        with:\n          context: .\n          push: true\n          tags: ${{steps.meta.outputs.tags}}\n          labels: ${{steps.meta.outputs.labels}}\n\n      - name: Docker Hub Description\n        uses: peter-evans/dockerhub-description@v3\n        with:\n          username: ${{secrets.DOCKER_USERNAME}}\n          password: ${{secrets.DOCKER_PASSWORD}}\n          repository: ${{env.REGISTRY_DOCKERHUB}}/${{ steps.repo-name.outputs.repository-name }}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u51fa\u6574\u4f53\u7684\u5de5\u4f5c\u6d41\u5206\u4e3a\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Check out the repo"}),"\n",(0,i.jsx)(n.li,{children:"Log in to Docker Hub"}),"\n",(0,i.jsxs)(n.li,{children:["Log into registry ",(0,i.jsx)(n.code,{children:"${{env.7*7}}"})]}),"\n",(0,i.jsx)(n.li,{children:"Get repository name"}),"\n",(0,i.jsx)(n.li,{children:"Extract metadata (tags, labels) for Docker"}),"\n",(0,i.jsx)(n.li,{children:"Build and push Docker images"}),"\n",(0,i.jsx)(n.li,{children:"Docker Hub Description"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u81ea\u52a8\u5904\u7406\u9879\u76ee\u6570\u636e\u5e76\u63a8\u9001\u5230-github-release",children:"\u81ea\u52a8\u5904\u7406\u9879\u76ee\u6570\u636e\uff0c\u5e76\u63a8\u9001\u5230 Github Release"}),"\n",(0,i.jsx)(n.p,{children:"test"})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var i=s(7294);const t={},c=i.createContext(t);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);