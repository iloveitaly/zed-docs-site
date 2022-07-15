"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[1710],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),l=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,u=e.originalType,g=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(a),f=r,m=p["".concat(g,".").concat(f)]||p[f]||s[f]||u;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=a.length,o=new Array(u);o[0]=p;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<u;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6401:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return g},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=a(7462),r=a(3366),u=(a(7294),a(3905)),o=["components"],i={},g="Aggregate Functions",l={unversionedId:"language/aggregates/README",id:"version-v1.1.0/language/aggregates/README",title:"Aggregate Functions",description:"---",source:"@site/versioned_docs/version-v1.1.0/language/aggregates/README.md",sourceDirName:"language/aggregates",slug:"/language/aggregates/",permalink:"/docs/v1.1.0/language/aggregates/",editUrl:"https://github.com/brimdata/zed/tree/main/versioned_docs/version-v1.1.0/language/aggregates/README.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"upper",permalink:"/docs/v1.1.0/language/functions/upper"},next:{title:"and",permalink:"/docs/v1.1.0/language/aggregates/and"}},c={},s=[],p={toc:s};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"aggregate-functions"},"Aggregate Functions"),(0,u.kt)("hr",null),(0,u.kt)("p",null,"Aggregate functions appear in either summarization\nor expression context and produce an aggregate value for a sequence of inputs values."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/and"},"and")," - logical AND of input values"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/any"},"any")," - select an arbitrary value from its input"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/avg"},"avg")," - average value"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/collect"},"collect")," - aggregate values into array"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/count"},"count")," - count input values"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/count"},"countdistinct")," - count distinct input values"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/fuse"},"fuse")," - compute a fused type of input values"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/max"},"max")," - maximum value of input values"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/min"},"min")," - minimum value of input values"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/or"},"or")," - logical OR of input values"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/sum"},"sum")," - sum of input values"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/aggregates/union"},"union")," - set union of input values")))}f.isMDXComponent=!0}}]);