"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[6962],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(i,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2361:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),p=["components"],l={},i=void 0,s={unversionedId:"language/operators/from",id:"version-v1.1.0/language/operators/from",title:"from",description:"Operator",source:"@site/versioned_docs/version-v1.1.0/language/operators/from.md",sourceDirName:"language/operators",slug:"/language/operators/from",permalink:"/docs/v1.1.0/language/operators/from",editUrl:"https://github.com/brimdata/zed/tree/main/versioned_docs/version-v1.1.0/language/operators/from.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fork",permalink:"/docs/v1.1.0/language/operators/fork"},next:{title:"fuse",permalink:"/docs/v1.1.0/language/operators/fuse"}},u={},c=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"operator"},"Operator"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("strong",{parentName:"p"},"from")," ","\u2014"," source data from pools, files, or URIs"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from <pool>[@<tag>] [range <start>] [to <end>] [ => <leg> ]\nfile <path> [format <format>]\nget <uri> [format <format>]\nfrom (\n   pool <pool>[@<tag>] [range <start>] [to <end>] [ => <leg> ]\n   file <path> [format <format>] [ => <leg> ]\n   get <uri> [format <format>] [ => <leg> ]\n   ...\n)\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," operator identifies one or more data sources and transmits\ntheir data to its output.  A data source can be"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the name of a data pool in a Zed lake;"),(0,a.kt)("li",{parentName:"ul"},"a path to a file; or"),(0,a.kt)("li",{parentName:"ul"},"an HTTP, HTTPS, or S3 URI.\nPaths and URIs may be followed by an optional format specifier.")),(0,a.kt)("p",null,"In the first three forms, a single source is connected to a single output.\nIn the fourth form, multiple sources are accessed in parallel and may be\n",(0,a.kt)("a",{parentName:"p",href:"/docs/v1.1.0/language/operators/join"},"joined"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1.1.0/language/operators/combine"},"combined"),", or ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1.1.0/language/operators/merge"},"merged"),"."),(0,a.kt)("p",null,"A data path can be split with the ",(0,a.kt)("inlineCode",{parentName:"p"},"fork")," operator as in"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from PoolOne | fork (\n  => op1 | op2 | ...\n  => op1 | op2 | ...\n) | merge ts | ...\n")),(0,a.kt)("p",null,"Or multiple pools can be accessed and, for example, joined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from (\n  pool PoolOne => op1 | op2 | ...\n  pool PoolTwo => op1 | op2 | ...\n) | join on key=key | ...\n")),(0,a.kt)("p",null,"Similarly, data can be routed to different paths with replication\nusing ",(0,a.kt)("inlineCode",{parentName:"p"},"switch"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from ... | switch color (\n  case "red" => op1 | op2 | ...\n  case "blue" => op1 | op2 | ...\n  default => op1 | op2 | ...\n) | ...\n')),(0,a.kt)("p",null,"The output of a fork consists of multiple legs that must be merged.\nIf the downstream operator expects a single input, then the output legs are\nmerged with an automatically inserted ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1.1.0/language/operators/combine"},"combine operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Copy input to two paths and merge")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2' | zq -z 'fork (=>pass =>pass) | sort this' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n1\n2\n2\n")))}f.isMDXComponent=!0}}]);