"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[9652],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7626:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={},u=void 0,c={unversionedId:"zq/functions/parse_uri",id:"zq/functions/parse_uri",title:"parse_uri",description:"Function",source:"@site/docs/zq/functions/parse_uri.md",sourceDirName:"zq/functions",slug:"/zq/functions/parse_uri",permalink:"/docs/zq/functions/parse_uri",editUrl:"https://github.com/brimdata/zed/tree/main/docs/zq/functions/parse_uri.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"order",permalink:"/docs/zq/functions/order"},next:{title:"parse_zson",permalink:"/docs/zq/functions/parse_zson"}},p={},l=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("p",null,"\u2003"," ",(0,i.kt)("strong",{parentName:"p"},"parse_uri")," ","\u2014"," parse a string URI into a structured record"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"parse_uri(uri: string) -> record\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"parse_uri")," function parses the ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," argument that must have the form of a\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"Universal Resource Identifier"),"\ninto a structured URI comprising the parsed components as a Zed record\nwith the following type signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n  scheme: string,\n  opaque: string,\n  user: string,\n  password: string,\n  host: string,\n  port: uint16,\n  path: string,\n  query: |{string:[string]}|,\n  fragment: string\n}\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '\"scheme://user:password@host:12345/path?a=1&a=2&b=3&c=#fragment\"' | zq -Z 'yield parse_uri(this)' -\n")),(0,i.kt)("p",null,"=>"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{\n    scheme: "scheme",\n    opaque: null (string),\n    user: "user",\n    password: "password",\n    host: "host",\n    port: 12345 (uint16),\n    path: "/path",\n    query: |{\n        "a": [\n            "1",\n            "2"\n        ],\n        "b": [\n            "3"\n        ],\n        "c": [\n            ""\n        ]\n    }|,\n    fragment: "fragment"\n}\n')))}d.isMDXComponent=!0}}]);