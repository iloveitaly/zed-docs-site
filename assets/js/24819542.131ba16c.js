"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[2474],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},819:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],p={},i=void 0,c={unversionedId:"zq/operators/rename",id:"zq/operators/rename",title:"rename",description:"Operator",source:"@site/docs/zq/operators/rename.md",sourceDirName:"zq/operators",slug:"/zq/operators/rename",permalink:"/docs/zq/operators/rename",editUrl:"https://github.com/brimdata/zed-docs/tree/main/docs/zq/operators/rename.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"put",permalink:"/docs/zq/operators/put"},next:{title:"sample",permalink:"/docs/zq/operators/sample"}},s={},m=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],u={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"rename")," ","\u2014"," change the name of record fields"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rename <newfield>:=<oldfield> [, <newfield>:=<oldfield> ...]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rename")," operator changes the names of one or more fields\nin the input records from the right-hand side name to the left-hand side name\nfor each assignment listed.  When ",(0,o.kt)("inlineCode",{parentName:"p"},"<oldfield>")," references a field that does not\nexist, there is no effect and the input is copied to the output."),(0,o.kt)("p",null,"Non-record inputs are copied to the output without modification."),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"<field>")," must be a field reference as a dotted path and the old name\nand new name must refer to the same record in the case of nested records.\nThat is, the dotted path prefix before the final field name must be the\nsame on the left- and right-hand sides.  To perform more sophisticated\nrenaming of fields, you can use cut/put or record literals."),(0,o.kt)("p",null,"If a rename operation conflicts with an existing field name, then the\noffending record is wrapped in a structured error along with an error message\nand the error is emitted."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"A simple rename")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2}' | zq -z 'rename c:=b' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,c:2}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Nested rename")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,r:{b:2,c:3}}' | zq -z 'rename r.a:=r.b' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,r:{a:2,c:3}}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Trying to mutate records with rename produces a compile-time error")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command",metastring:"fails",fails:!0},"echo '{a:1,r:{b:2,c:3}}' | zq -z 'rename w:=r.b' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"cannot rename r.b to w\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Record literals can be used instead of rename for mutation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,r:{b:2,c:3}}' | zq -z 'yield {a,r:{c:r.c},w:r.b}' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,r:{c:3},w:2}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Alternatively, mutations can be more generic and use drop")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,r:{b:2,c:3}}' | zq -z 'yield {a,r,w:r.b} | drop r.b' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,r:{c:3},w:2}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Duplicate fields create structured errors")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{b:1} {a:1,b:1} {c:1}' | zq -z 'rename a:=b' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:1}\nerror({message:"rename: duplicate field: \\"a\\"",on:{a:1,b:1}})\n{c:1}\n')))}d.isMDXComponent=!0}}]);