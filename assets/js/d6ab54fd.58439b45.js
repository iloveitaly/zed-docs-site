"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[5540],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7621:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],i={},l=void 0,s={unversionedId:"zq/operators/from",id:"zq/operators/from",title:"from",description:"Operator",source:"@site/docs/zq/operators/from.md",sourceDirName:"zq/operators",slug:"/zq/operators/from",permalink:"/docs/zq/operators/from",editUrl:"https://github.com/brimdata/zed-docs/tree/main/docs/zq/operators/from.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fork",permalink:"/docs/zq/operators/fork"},next:{title:"fuse",permalink:"/docs/zq/operators/fuse"}},c={},u=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"operator"},"Operator"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("strong",{parentName:"p"},"from")," ","\u2014"," source data from pools, URIs, or connectors"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from <pool>[@<tag>] [range <start>] [to <end>] [ => <leg> ]\nget <uri>\nfile <path>\nfrom (\n   pool <pool>[@<tag>] [range <start>] [to <end>] [ => <leg> ]\n   get <uri> [ => <leg> ]\n   file <path> [ => <leg> ]\n   ...\n)\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," operator identifies data from a source ",(0,a.kt)("inlineCode",{parentName:"p"},"<src>")," and logically\ntransmits the data to its output.  A ",(0,a.kt)("inlineCode",{parentName:"p"},"<src>")," is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a URI representing and HTTP endpoint, S3 endoint, or file; or,"),(0,a.kt)("li",{parentName:"ul"},"the name of a data pool in a Zed lake.")),(0,a.kt)("p",null,"In the first form, a single source is connected to a single output.\nIn the second form, multiple sources are accessed in parallel and may be\n",(0,a.kt)("a",{parentName:"p",href:"/docs/zq/operators/join"},"joined"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/zq/operators/combine"},"combined"),", or ",(0,a.kt)("a",{parentName:"p",href:"/docs/zq/operators/merge"},"merged"),"."),(0,a.kt)("p",null,"In the examples above, the data source is implied.  For example, the\n",(0,a.kt)("inlineCode",{parentName:"p"},"zed query")," command takes a list of files and the concatenated files\nare the implied input.\nLikewise, in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/brimdata/brim"},"Brim app"),",\nthe UI allows for the selection of a data source and key range."),(0,a.kt)("p",null,"Data sources can also be explicitly specified using the ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," keyword.\nDepending on the operating context, ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," may take a file system path,\nan HTTP URL, an S3 URL, or in the\ncontext of a Zed lake, the name of a data pool."),(0,a.kt)("p",null,"A data path can be split with the ",(0,a.kt)("inlineCode",{parentName:"p"},"fork")," operator as in"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from PoolOne | fork (\n  => op1 | op2 | ...\n  => op1 | op2 | ...\n) | merge ts | ...\n")),(0,a.kt)("p",null,"Or multiple pools can be accessed and, for example, joined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from (\n  pool PoolOne => op1 | op2 | ...\n  pool PoolTwo => op1 | op2 | ...\n) | join on key=key | ...\n")),(0,a.kt)("p",null,"Similarly, data can be routed to different paths with replication\nusing ",(0,a.kt)("inlineCode",{parentName:"p"},"switch"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from ... | switch color (\n  case "red" => op1 | op2 | ...\n  case "blue" => op1 | op2 | ...\n  default => op1 | op2 | ...\n) | ...\n')),(0,a.kt)("p",null,"The output of a fork consists of multiple legs that must be merged.\nIf the downstream operator expects a single input, then the output legs are\nmerged with an automatically inserted ",(0,a.kt)("a",{parentName:"p",href:"/docs/zq/operators/combine"},"combine operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Copy input to two paths and merge")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2' | zq -z 'fork (=>pass =>pass) | sort this' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n1\n2\n2\n")))}d.isMDXComponent=!0}}]);