"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8117],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4196:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},p=void 0,l={unversionedId:"zq/functions/split",id:"zq/functions/split",title:"split",description:"Function",source:"@site/docs/zq/functions/split.md",sourceDirName:"zq/functions",slug:"/zq/functions/split",permalink:"/docs/zq/functions/split",editUrl:"https://github.com/brimdata/zed-docs/tree/main/docs/zq/functions/split.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"shape",permalink:"/docs/zq/functions/shape"},next:{title:"sqrt",permalink:"/docs/zq/functions/sqrt"}},c={},u=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("p",null,"\u2003"," ",(0,i.kt)("strong",{parentName:"p"},"split")," ","\u2014"," slice a string into an array of strings"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"split(s: string, sep: string) -> [string]\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"split")," function slices string ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," into all substrings separated by the\nstring",(0,i.kt)("inlineCode",{parentName:"p"},"sep")," appearing in ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," and returns an array of the substrings\nspanning those separators."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Split a semi-colon delimited list of fruits:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '\"apple;banana;pear;peach\"' | zq -z 'yield split(this,\";\")' -\n")),(0,i.kt)("p",null,"=>"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'["apple","banana","pear","peach"]\n')),(0,i.kt)("p",null,"Split a comma-separated list of IPs and cast the array of strings to an\narray of IPs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '\"10.0.0.1,10.0.0.2,10.0.0.3\"' | zq -z 'yield cast(split(this,\",\"),<[ip]>)' -\n")),(0,i.kt)("p",null,"=>"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"[10.0.0.1,10.0.0.2,10.0.0.3]\n")))}f.isMDXComponent=!0}}]);