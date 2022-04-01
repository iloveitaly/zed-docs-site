"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[6766],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return l}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=p(r),l=o,d=u["".concat(s,".").concat(l)]||u[l]||m[l]||a;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function l(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6456:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={},s="ZNG Compression Format Specification",p={unversionedId:"formats/compression-spec",id:"formats/compression-spec",title:"ZNG Compression Format Specification",description:"This document specifies values for the `` field of a",source:"@site/docs/formats/compression-spec.md",sourceDirName:"formats",slug:"/formats/compression-spec",permalink:"/docs/formats/compression-spec",editUrl:"https://github.com/brimdata/zed-docs/tree/main/docs/formats/compression-spec.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Zed Formats for Super-structured Data",permalink:"/docs/formats/"},next:{title:"The Zed Data Model Specification",permalink:"/docs/formats/zed"}},f={},m=[],u={toc:m};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zng-compression-format-specification"},"ZNG Compression Format Specification"),(0,a.kt)("p",null,"This document specifies values for the ",(0,a.kt)("inlineCode",{parentName:"p"},"<format>")," field of a\n",(0,a.kt)("a",{parentName:"p",href:"/docs/formats/zng#312-compressed-value-message-block"},"ZNG compressed value message block"),"\nand the corresponding algorithms for the ",(0,a.kt)("inlineCode",{parentName:"p"},"<compressed-messages>")," field."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"<format>")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," specifies that ",(0,a.kt)("inlineCode",{parentName:"p"},"<compressed-messages>")," contains an\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lz4/lz4/blob/master/doc/lz4_Block_format.md"},"LZ4 block"),"."))}l.isMDXComponent=!0}}]);