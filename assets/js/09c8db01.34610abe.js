"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[4314],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>y});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,y=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return r?t.createElement(y,a(a({ref:n},s),{},{components:r})):t.createElement(y,a({ref:n},s))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5909:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=r(7462),o=(r(7294),r(3905));const i={},a="USB \u952e\u76d8\u6d41\u91cf\u5206\u6790",c={unversionedId:"Forensic/Traffic-Forensic/Keyboard",id:"Forensic/Traffic-Forensic/Keyboard",title:"USB \u952e\u76d8\u6d41\u91cf\u5206\u6790",description:"\u9996\u5148\u5bf9\u6d41\u91cf\u5305\u5185\u7684\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u4f7f\u7528 usbhid.data \u4f5c\u4e3a\u7b5b\u9009\u5668\u8fdb\u884c\u6570\u636e\u7b5b\u9009\uff0c\u5c06 hid \u6570\u636e\u6d41\u63d0\u53d6\u51fa\u6765",source:"@site/docs/Forensic/Traffic-Forensic/Keyboard.md",sourceDirName:"Forensic/Traffic-Forensic",slug:"/Forensic/Traffic-Forensic/Keyboard",permalink:"/docs/Forensic/Traffic-Forensic/Keyboard",draft:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Forensic/Traffic-Forensic/Keyboard.md",tags:[],version:"current",frontMatter:{},sidebar:"Forensic_Sidebar",previous:{title:"\u6d41\u91cf\u5206\u6790",permalink:"/docs/Forensic/Traffic-Forensic/"}},l={},u=[],s={toc:u},p="wrapper";function f(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usb-\u952e\u76d8\u6d41\u91cf\u5206\u6790"},"USB \u952e\u76d8\u6d41\u91cf\u5206\u6790"),(0,o.kt)("p",null,"\u9996\u5148\u5bf9\u6d41\u91cf\u5305\u5185\u7684\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"usbhid.data")," \u4f5c\u4e3a\u7b5b\u9009\u5668\u8fdb\u884c\u6570\u636e\u7b5b\u9009\uff0c\u5c06 hid \u6570\u636e\u6d41\u63d0\u53d6\u51fa\u6765"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tshark -r keyboard.pcapng -T fields -e usbhid.data | sed '/^\\s*$/d' > usbdata.txt\n")),(0,o.kt)("p",null,"\u7136\u540e\u4f7f\u7528 Python \u811a\u672c\u5bf9 hid \u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u901a\u8fc7\u5b57\u5178\u6620\u5c04\u5c06 hid \u6570\u636e\u8f6c\u6362\u4e3a\u952e\u76d8\u8f93\u5165\u7684\u5b9e\u9645\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'normalKeys = {"04": "a", "05": "b", "06": "c", "07": "d", "08": "e", "09": "f", "0a": "g", "0b": "h", "0c": "i", "0d": "j", "0e": "k", "0f": "l", "10": "m", "11": "n", "12": "o", "13": "p", "14": "q", "15": "r", "16": "s", "17": "t", "18": "u", "19": "v", "1a": "w", "1b": "x", "1c": "y", "1d": "z", "1e": "1", "1f": "2", "20": "3", "21": "4", "22": "5", "23": "6", "24": "7", "25": "8", "26": "9", "27": "0",\n              "28": "<RET>", "29": "<ESC>", "2a": "<DEL>", "2b": "\\t", "2c": "<SPACE>", "2d": "-", "2e": "=", "2f": "[", "30": "]", "31": "\\\\", "32": "<NON>", "33": ";", "34": "\'","35":"<GA>","36":",","37":".","38":"/","39":"<CAP>","3a":"<F1>","3b":"<F2>","3c":"<F3>","3d":"<F4>","3e":"<F5>","3f":"<F6>","40":"<F7>","41":"<F8>","42":"<F9>","43":"<F10>","44":"<F11>","45":"<F12>"}\nshiftKeys = {"04": "A", "05": "B", "06": "C", "07": "D", "08": "E", "09": "F", "0a": "G", "0b": "H", "0c": "I", "0d": "J", "0e": "K", "0f": "L", "10": "M", "11": "N", "12": "O", "13": "P", "14": "Q", "15": "R", "16": "S", "17": "T", "18": "U", "19": "V", "1a": "W", "1b": "X", "1c": "Y", "1d": "Z", "1e": "!", "1f": "@", "20": "#", "21": "$", "22": "%", "23": "^", "24": "&", "25": "*",\n             "26": "(", "27": ")", "28": "<RET>", "29": "<ESC>", "2a": "<DEL>", "2b": "\\t", "2c": "<SPACE>", "2d": "_", "2e": "+", "2f": "{", "30": "}", "31": "|", "32": "<NON>", "33": "\\"", "34": ":", "35": "<GA>", "36": "<", "37": ">", "38": "?", "39": "<CAP>", "3a": "<F1>", "3b": "<F2>", "3c": "<F3>", "3d": "<F4>", "3e": "<F5>", "3f": "<F6>", "40": "<F7>", "41": "<F8>", "42": "<F9>", "43": "<F10>", "44": "<F11>", "45": "<F12>"}\noutput = []\nkeys = open(\'usbdata.txt\')\nfor line in keys:\n    import re\n    b = re.findall(r\'.{2}\', line)\n    line = \'-\'.join(b)\n    try:\n        if line[0] != \'0\' or (line[1] != \'0\' and line[1] != \'2\') or line[3] != \'0\' or line[4] != \'0\' or line[9] != \'0\' or line[10] != \'0\' or line[12] != \'0\' or line[13] != \'0\' or line[15] != \'0\' or line[16] != \'0\' or line[18] != \'0\' or line[19] != \'0\' or line[21] != \'0\' or line[22] != \'0\' or line[6:8] == "00":\n            continue\n        if line[6:8] in normalKeys.keys():\n            output += [[normalKeys[line[6:8]]],[shiftKeys[line[6:8]]]][line[1] == \'2\']\n        else:\n            output += [\'[unknown]\']\n    except:\n        pass\nkeys.close()\n')),(0,o.kt)("p",null,"\u7528\u6237\u8f93\u5165\u7684\u539f\u59cb\u884c\u4e3a\u5c31\u88ab\u8f6c\u5316\u5e76\u50a8\u5b58\u5728 output \u53d8\u91cf\u4e2d, \u8fdb\u4e00\u6b65\u5206\u6790\u5927\u5199\u952e\u548c\u5220\u9664\u952e\u7684\u884c\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'flag = 0\nprint("".join(output))\nfor i in range(len(output)):\n    try:\n        a = output.index(\'<DEL>\')\n        del output[a]\n        del output[a-1]\n    except:\n        pass\nfor i in range(len(output)):\n    try:\n        if output[i] == "<CAP>":\n            flag += 1\n            output.pop(i)\n            if flag == 2:\n                flag = 0\n        if flag != 0:\n            output[i] = output[i].upper()\n    except:\n        pass\nprint(\'output :\' + "".join(output))\n')))}f.isMDXComponent=!0}}]);