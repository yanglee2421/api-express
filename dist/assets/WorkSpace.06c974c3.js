import{r as g,d as z,p as B,q as E,s as A,c as f,b as a,w as n,t as d,l as L,v as U,e as o,o as m,F as w,x as F,h as i,u as $}from"./index.7f29c988.js";const M=()=>g({isShow:!1,urlList:[]}),N={class:"h-100 p-1"},T={inheritAttrs:!0},q=z({...T,__name:"WorkSpace",setup(P){const b=$(),k=()=>{localStorage.removeItem("token"),b.replace("/login")},y=()=>{b.push({name:"test04",state:{bb:{aaa:777}}})},u=M();B(()=>{E({method:"get",url:"/bing",params:{idx:0,n:8}}).then(s=>{u.urlList=s})});const l=g({PageIndex:1,PageSize:20,name:"",age:""}),p=g({data:[],total:0}),C=s=>{},v=g({tableData:[]});return A(()=>{const s=v.tableData,{PageIndex:e,PageSize:r}=l;p.data=s.slice((e-1)*r,e*r)}),(s,e)=>{const r=o("el-input"),x=o("el-form-item"),c=o("el-button"),_=o("el-table-column"),S=o("el-link"),I=o("fw-table"),V=o("el-image-viewer");return m(),f("div",N,[a(I,{model:l,data:p.data,border:"",PageIndex:l.PageIndex,"onUpdate:PageIndex":e[4]||(e[4]=t=>l.PageIndex=t),PageSize:l.PageSize,"onUpdate:PageSize":e[5]||(e[5]=t=>l.PageSize=t),onFwInitTable:C,total:p.total,"fw-index":""},{form:n(()=>[a(x,{label:"\u59D3\u540D\uFF1A"},{default:n(()=>[a(r,{modelValue:l.name,"onUpdate:modelValue":e[0]||(e[0]=t=>l.name=t),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),(m(),f(w,null,F(4,t=>a(x,{label:"\u5E74\u9F84\uFF1A",key:t},{default:n(()=>[a(r,{modelValue:l.age,"onUpdate:modelValue":e[1]||(e[1]=D=>l.age=D),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:2},1024)),64))]),"btn-bar":n(()=>[a(c,{onClick:e[2]||(e[2]=t=>y()),type:"success"},{default:n(()=>[i("\u65B0\u589E")]),_:1}),a(c,{onClick:e[3]||(e[3]=t=>d(u).isShow=!0),type:"warning"},{default:n(()=>[i(" \u58C1\u7EB8 ")]),_:1}),a(c,{onClick:k,type:"danger"},{default:n(()=>[i("\u767B\u51FA")]),_:1})]),default:n(()=>[a(_,{label:"\u59D3\u540D",prop:"name",align:"center"}),(m(),f(w,null,F(6,t=>a(_,{key:t,label:"\u5E74\u9F84",prop:"age",align:"center"})),64)),a(_,{label:"\u64CD\u4F5C",align:"center",width:"100",fixed:"right"},{default:n(({$index:t})=>[a(S,{"data-btn":"\u7F16\u8F91",type:"primary"},{default:n(()=>[i("\u7F16\u8F91")]),_:1}),a(S,{type:"danger",class:"ml-1"},{default:n(()=>[i("\u5220\u9664")]),_:1})]),_:1})]),_:1},8,["model","data","PageIndex","PageSize","total"]),d(u).isShow?(m(),L(V,{key:0,"url-list":d(u).urlList,onClose:e[6]||(e[6]=t=>d(u).isShow=!1)},null,8,["url-list"])):U("",!0)])}}});export{q as default};
