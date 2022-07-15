"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8271],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s=void 0,u={unversionedId:"language/functions/network_of",id:"version-v1.1.0/language/functions/network_of",title:"network_of",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/network_of.md",sourceDirName:"language/functions",slug:"/language/functions/network_of",permalink:"/docs/v1.1.0/language/functions/network_of",editUrl:"https://github.com/brimdata/zed/tree/main/versioned_docs/version-v1.1.0/language/functions/network_of.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nest_dotted",permalink:"/docs/v1.1.0/language/functions/nest_dotted"},next:{title:"now",permalink:"/docs/v1.1.0/language/functions/now"}},p={},c=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"function"},"Function"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("strong",{parentName:"p"},"network_of")," ","\u2014"," the network of an IP"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"network_of(val: ip [, mask: net|int|uint]) -> net\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"network_of")," function returns the network of the IP address given\nby ",(0,a.kt)("inlineCode",{parentName:"p"},"val")," as determined by the optional ",(0,a.kt)("inlineCode",{parentName:"p"},"mask"),".  If ",(0,a.kt)("inlineCode",{parentName:"p"},"mask")," is an integer rather\nthan a net, it is presumed to be a network prefix of the indicated length.\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"mask")," is ommited, then a class A (8 bit), B (16 bit), or C (24 bit)\nnetwork is inferred from ",(0,a.kt)("inlineCode",{parentName:"p"},"val"),", which in this case, must be an IPv4 address."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Compute the network address of an IP given a network mask argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '10.1.2.129' | zq -z 'yield network_of(this, 255.255.255.128/25)' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"10.1.2.128/25\n")),(0,a.kt)("p",null,"Compute the network address of an IP given an integer prefix argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '10.1.2.129' | zq -z 'yield network_of(this, 25)' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"10.1.2.128/25\n")),(0,a.kt)("p",null,"Compute the network address implied by IP classful addressing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '10.1.2.129' | zq -z 'yield network_of(this)' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"10.0.0.0/8\n")),(0,a.kt)("p",null,"The network of a value that is not an IP is an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo 1 | zq -z 'yield network_of(this)' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'error("network_of: not an IP")\n')))}m.isMDXComponent=!0}}]);