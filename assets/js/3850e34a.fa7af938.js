"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[2590],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8473:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={},l=void 0,u={unversionedId:"zq/functions/replace",id:"zq/functions/replace",title:"replace",description:"Function",source:"@site/docs/zq/functions/replace.md",sourceDirName:"zq/functions",slug:"/zq/functions/replace",permalink:"/docs/zq/functions/replace",editUrl:"https://github.com/brimdata/zed-docs/tree/main/docs/zq/functions/replace.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"quiet",permalink:"/docs/zq/functions/quiet"},next:{title:"round",permalink:"/docs/zq/functions/round"}},p={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Example:",id:"example",level:4}],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("p",null,"\u2003"," ",(0,i.kt)("strong",{parentName:"p"},"replace")," ","\u2014"," replace one string for another"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"replace(s: string, old: string, new: string) -> string\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"replace")," function substitutes all instances of the string ",(0,i.kt)("inlineCode",{parentName:"p"},"old"),"\nthat occur in string ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," with the string ",(0,i.kt)("inlineCode",{parentName:"p"},"new"),"."),(0,i.kt)("h4",{id:"example"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'"oink oink oink"\' | zq -z \'yield replace(this, "oink", "moo")\' -\n')),(0,i.kt)("p",null,"=>"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'"moo moo moo"\n')))}d.isMDXComponent=!0}}]);