import{p as S,q as z,s as V,t as h,i as M,v as F,d as T,r as P,x as U,c as v,b as l,w as u,e as c,u as $,y as L,o as r,z as m,F as E,A as y,l as b,h as k}from"./index.dc996552.js";const N=g=>{const n={meta:typeof g=="function"?g():g};let o=null,_=null;const t=()=>{n.beginTime=Date.now(),o==null||o.abort(),o=new AbortController,_=o.signal,window.addEventListener("unload",()=>{n.endTime=Date.now(),F.push(n),F.setItem()},{signal:_})},i=()=>{o==null||o.abort(),n.endTime=Date.now(),F.push(n)};return S(()=>{t()}),z(()=>{t()}),V((s,f)=>{n.toPath=s.fullPath}),h(()=>{i()}),M(()=>{i()}),s=>(n.meta=typeof s=="function"?s():s,F)},R={class:"h-100 p-1"},q={inheritAttrs:!0},O=T({...q,__name:"WorkSpace",setup(g){N("\u5DE5\u4F5C\u533A");const n=$(),o=()=>{localStorage.removeItem("token"),n.replace("/login")},_=()=>{n.push({name:"test04",state:{bb:{aaa:777}}})},t=P({PageIndex:1,PageSize:20,name:"",age:""}),i=P({data:[],total:0}),B=f=>{},s=P({tableData:[]});return U(()=>{const f=s.tableData,{PageIndex:a,PageSize:p}=t;i.data=f.slice((a-1)*p,a*p)}),(f,a)=>{const p=c("el-input"),w=c("el-form-item"),x=c("el-button"),D=c("el-table-column"),C=c("el-link"),A=c("fw-table"),d=L("track");return r(),v("div",R,[l(A,{model:t,data:i.data,border:"",PageIndex:t.PageIndex,"onUpdate:PageIndex":a[3]||(a[3]=e=>t.PageIndex=e),PageSize:t.PageSize,"onUpdate:PageSize":a[4]||(a[4]=e=>t.PageSize=e),onFwInitTable:B,total:i.total,"fw-index":""},{form:u(()=>[l(w,{label:"\u59D3\u540D\uFF1A"},{default:u(()=>[m(l(p,{modelValue:t.name,"onUpdate:modelValue":a[0]||(a[0]=e=>t.name=e),modelModifiers:{trim:!0}},null,8,["modelValue"]),[[d,e=>`\u59D3\u540D\u6846\u8F93\u5165\u4E86\uFF1A${e.target.value}`,"change"]])]),_:1}),(r(),v(E,null,y(10,e=>l(w,{label:"\u5E74\u9F84\uFF1A",key:e},{default:u(()=>[m(l(p,{modelValue:t.age,"onUpdate:modelValue":a[1]||(a[1]=I=>t.age=I),modelModifiers:{trim:!0}},null,8,["modelValue"]),[[d,()=>`\u5E74\u9F84\u6846\u8F93\u5165\u4E86\uFF1A${t.age}`,"change"]])]),_:2},1024)),64))]),"tool-bar":u(()=>[m((r(),b(x,{onClick:a[2]||(a[2]=e=>_()),type:"success"},{default:u(()=>[k("\u65B0\u589E")]),_:1})),[[d,"\u70B9\u51FB\u65B0\u589E","click"]]),m((r(),b(x,{onClick:o,type:"danger"},{default:u(()=>[k("\u767B\u51FA")]),_:1})),[[d,"\u6309\u94AE02","click"]])]),default:u(()=>[l(D,{label:"\u59D3\u540D",prop:"name",align:"center"}),(r(),v(E,null,y(6,e=>l(D,{key:e,label:"\u5E74\u9F84",prop:"age",align:"center"})),64)),l(D,{label:"\u64CD\u4F5C",align:"center",width:"100",fixed:"right"},{default:u(({$index:e})=>[m((r(),b(C,{"data-btn":"\u7F16\u8F91",type:"primary"},{default:u(()=>[k("\u7F16\u8F91")]),_:2},1024)),[[d,`\u70B9\u51FB\u7B2C${e+1}\u884C\u7684\u7F16\u8F91`,"click"]]),m((r(),b(C,{type:"danger",class:"ml-1"},{default:u(()=>[k("\u5220\u9664")]),_:2},1024)),[[d,`\u70B9\u51FB\u7B2C${e+1}\u884C\u7684\u5220\u9664`,"click"]])]),_:1})]),_:1},8,["model","data","PageIndex","PageSize","total"])])}}});export{O as default};