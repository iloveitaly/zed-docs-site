"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[7847],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"language/operators/fuse",id:"version-v1.2.0/language/operators/fuse",title:"fuse",description:"Operator",source:"@site/versioned_docs/version-v1.2.0/language/operators/fuse.md",sourceDirName:"language/operators",slug:"/language/operators/fuse",permalink:"/docs/language/operators/fuse",draft:!1,editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/operators/fuse.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"from",permalink:"/docs/language/operators/from"},next:{title:"head",permalink:"/docs/language/operators/head"}},p={},c=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"fuse")," ","\u2014"," coerce all input values into a merged type"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fuse\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fuse"),' operator reads all of its input, computes an "intelligent merge"\nof varied types in the input, then adjusts each output value\nto conform to the merged type.'),(0,o.kt)("p",null,"The merged type is constructed intelligently in the sense that type\n",(0,o.kt)("inlineCode",{parentName:"p"},"{a:string}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"{b:string}")," is fused into type ",(0,o.kt)("inlineCode",{parentName:"p"},"{a:string,b:string}"),"\ninstead of the Zed union type ",(0,o.kt)("inlineCode",{parentName:"p"},"({a:string},{b:string})"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TBD: document the algorithm here in more detail.\nThe operator takes no paramters but we are experimenting with ways to\ncontrol how field with the same name but different types are merged\nespecially in light of complex types like arrays, sets, and so forth.")),(0,o.kt)("p",null,"Because all values of the input must be read to compute the union,\n",(0,o.kt)("inlineCode",{parentName:"p"},"fuse")," may spill its input to disk when memory limits are exceeded."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Fuse")," is not normally needed for Zed data as the Zed data model supports\nheterogenous sequences of values.  However, ",(0,o.kt)("inlineCode",{parentName:"p"},"fuse")," can be quite useful\nduring data exploration when sampling or filtering data to look at\nslices of raw data that are fused together.  ",(0,o.kt)("inlineCode",{parentName:"p"},"Fuse")," is also useful for\ntransforming arbitrary Zed data to prepare it for formats that require\na uniform schema like Parquet or a tabular structure like CSV.\nUnfortunately, when data leaves the Zed format using ",(0,o.kt)("inlineCode",{parentName:"p"},"fuse")," to accomplish this,\nthe original data must be altered to fit into the rigid structure of\nthese output formats."),(0,o.kt)("p",null,"A fused type over many heterogeneous values also represents a typical\ndesign pattern of a data warehouse where a single very-wide schema\ndefines slots for all possible input values where the columns are\nsparsely populated by each row value as the missing columns are set to null.\nZed data is super-structured, and fortunately, does not require such a structure."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fuse two records")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1}{b:2}' | zq -z fuse -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,b:null(int64)}\n{a:null(int64),b:2}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fuse records with type variation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1}{a:\"foo\"}' | zq -z fuse -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:1((int64,string))}\n{a:"foo"((int64,string))}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fuse records with complex type variation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'{a:[1,2]}{a:["foo","bar"],b:10.0.0.1}\' | zq -z fuse -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:[1,2]([(int64,string)]),b:null(ip)}\n{a:["foo","bar"]([(int64,string)]),b:10.0.0.1}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The table format clarifies what fuse does")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1}{b:2}{a:3}' | zq -f table fuse -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"a b\n1 -\n- 2\n3 -\n")))}m.isMDXComponent=!0}}]);