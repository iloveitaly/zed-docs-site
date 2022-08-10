"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[5582],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},166:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={},u=void 0,p={unversionedId:"language/functions/order",id:"version-v1.1.0/language/functions/order",title:"order",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/order.md",sourceDirName:"language/functions",slug:"/language/functions/order",permalink:"/docs/v1.1.0/language/functions/order",draft:!1,editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/functions/order.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"now",permalink:"/docs/v1.1.0/language/functions/now"},next:{title:"parse_uri",permalink:"/docs/v1.1.0/language/functions/parse_uri"}},c={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"order")," ","\u2014"," reorder record fields"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"order(val: any, t: type) -> any\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"order")," function changes the order of fields in the input value ",(0,o.kt)("inlineCode",{parentName:"p"},"val"),"\nto match the order of records in type ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),". Ordering is useful when the\ninput is in an unordered format (such as JSON), to ensure that all records\nhave the same known order."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," is a record (or if any of its nested values is a record):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'order passes through "extra" fields not present in the type value,'),(0,o.kt)("li",{parentName:"ul"},"extra fields in the input are added to the right-hand side, ordered lexicographically,"),(0,o.kt)("li",{parentName:"ul"},"missing fields are ignored, and"),(0,o.kt)("li",{parentName:"ul"},"types of leaf values are ignored, i.e., there is no casting.")),(0,o.kt)("p",null,"Note that lexicographic order for fields in a record can be achieved with\nthe empty record type, i.e.,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"order(val, <{}>)\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Order a record")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{b:\"foo\", a:1}' | zq -z 'order(this, <{a:int64,b:string}>)' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:1,b:"foo"}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Order fields lexicographically")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{c:0, a:1, b:\"foo\"}' | zq -z 'order(this, <{}>)' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:1,b:"foo",c:0}\n')),(0,o.kt)("p",null,"TBD: fix this bug or remove example..."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Order an array of records")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command-skip"},"echo '[{b:1,a:1},{a:2,b:2}]' | zq -z 'order(this, <[{a:int64,b:int64}]>)' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output-skip"},"[{a:1,b:1},{a:2,b:2}]\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Non-records are returned unmodified")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '10.0.0.1 1 \"foo\"' | zq -z 'fill(this, <{a:int64,b:int64}>)' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'10.0.0.1\n1\n"foo"\n')))}m.isMDXComponent=!0}}]);