"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[2324],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5552:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={},u=void 0,p={unversionedId:"language/operators/uniq",id:"language/operators/uniq",title:"uniq",description:"Operator",source:"@site/docs/language/operators/uniq.md",sourceDirName:"language/operators",slug:"/language/operators/uniq",permalink:"/docs/next/language/operators/uniq",draft:!1,editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/operators/uniq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tail",permalink:"/docs/next/language/operators/tail"},next:{title:"where",permalink:"/docs/next/language/operators/where"}},c={},s=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"uniq")," ","\u2014"," deduplicate adjacent values"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"uniq [-c]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"Inspired by the traditional Unix shell command of the same name,\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"uniq")," operator copies its input to its output but removes duplicate values\nthat are adjacent to one another.  "),(0,o.kt)("p",null,"This operator is most often used with ",(0,o.kt)("inlineCode",{parentName:"p"},"cut")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sort")," to find and eliminate\nduplicate values."),(0,o.kt)("p",null,"When run with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," option, each value is output as a record with the\ntype signature ",(0,o.kt)("inlineCode",{parentName:"p"},"{value:any,count:uint64}"),", where the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," field contains the\nunique value and the ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," field indicates the number of consecutive duplicates\nthat occurred in the input for that output value."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Simple deduplication")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 2 3' | zq -z uniq -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n2\n3\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Simple deduplication with -c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 2 3' | zq -z 'uniq -c' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{value:1,count:1(uint64)}\n{value:2,count:2(uint64)}\n{value:3,count:1(uint64)}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Use sort to deduplicate non-adjacent values")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'"hello" "world" "goodbye" "world" "hello" "again"\' | zq -z \'sort | uniq\' -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'"again"\n"goodbye"\n"hello"\n"world"\n')))}m.isMDXComponent=!0}}]);