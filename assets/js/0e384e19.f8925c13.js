"use strict";(self.webpackChunkdbt_osmosis=self.webpackChunkdbt_osmosis||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="dbt-osmosis Intro",s={unversionedId:"intro",id:"intro",title:"dbt-osmosis Intro",description:"Let's discover dbt-osmosis in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/dbt-osmosis/docs/intro",draft:!1,editUrl:"https://github.com/z3z1ma/dbt-osmosis/tree/main/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"dbt-osmosis - Basics",permalink:"/dbt-osmosis/docs/category/dbt-osmosis---basics"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Configure dbt-osmosis",id:"configure-dbt-osmosis",level:2},{value:"Run dbt-osmosis",id:"run-dbt-osmosis",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dbt-osmosis-intro"},"dbt-osmosis Intro"),(0,o.kt)("p",null,"Let's discover ",(0,o.kt)("strong",{parentName:"p"},"dbt-osmosis in less than 5 minutes"),"."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("strong",{parentName:"p"},"running dbt-osmosis"),"."),(0,o.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python")," (3.7+)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/core/installation"},"dbt")," (1.0.0+)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pypa.github.io/pipx/installation/"},"pipx")),(0,o.kt)("li",{parentName:"ul"},"An existing dbt project (or you can play with it using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dbt-labs/jaffle_shop_duckdb"},"jaffle shop"),")")),(0,o.kt)("h2",{id:"configure-dbt-osmosis"},"Configure dbt-osmosis"),(0,o.kt)("p",null,"Add the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," file. This example configuration tells dbt-osmosis that for every model in your project, there should exist a YAML file in the same directory with the same name as the model prefixed with an underscore. For example, if you have a model named ",(0,o.kt)("inlineCode",{parentName:"p"},"my_model")," then there should exist a YAML file named ",(0,o.kt)("inlineCode",{parentName:"p"},"_my_model.yml")," in the same directory as the model. The configuration is extremely flexible and can be used to declaratively organize your YAML files in any way you want as you will see later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="dbt_project.yml"',title:'"dbt_project.yml"'},'models:\n  your_project_name:\n    +dbt-osmosis: "_{model}.yml"\n')),(0,o.kt)("h2",{id:"run-dbt-osmosis"},"Run dbt-osmosis"),(0,o.kt)("p",null,"Run dbt-osmosis with the following command to automatically perform a refactoring of your dbt project YAML files. Run this command from the root of your dbt project. Ensure your git repository is clean before running this command. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<adapter>")," with the name of your dbt adapter (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"snowflake"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bigquery"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"redshift"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"postgres"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"athena"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"spark"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"trino"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"duckdb"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"oracle"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlserver"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pipx run --pip-args="dbt-<adapter>" dbt-osmosis yaml refactor\n')),(0,o.kt)("p",null,"Watch the magic unfold. \u2728"))}c.isMDXComponent=!0}}]);