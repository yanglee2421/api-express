import{d as F,r as i,b as a,o as r,c as m,e as o,w as l,F as B,l as E,g as u,f as c}from"./index.d0e77d4a.js";const z={class:"h-100"},A=u(" 1234 "),I=c("template",null,null,-1),S=u(" 123456 "),V=c("div",null,null,-1),k=u(" 45646 "),w=u("\u65B0\u589E"),D={inheritAttrs:!1},h=F({...D,__name:"Test",setup(v){const s=i({input:"",data:[]}),n=i({PageIndex:1,PageSize:10}),p=d=>{d&&Object.assign(n,s),console.log("\u53D1\u4E2A\u8BF7\u6C42",d,n)};return(d,t)=>{const g=a("el-date-picker"),_=a("el-form-item"),f=a("el-input"),b=a("el-button"),P=a("el-table-column"),x=a("fw-table");return r(),m("div",z,[o(x,{model:s,data:[{title:"123"},{}],onFwQuery:t[1]||(t[1]=e=>p(e)),PageIndex:n.PageIndex,"onUpdate:PageIndex":t[2]||(t[2]=e=>n.PageIndex=e),PageSize:n.PageSize,"onUpdate:PageSize":t[3]||(t[3]=e=>n.PageSize=e),total:100,border:"",index:""},{form:l(()=>[A,I,S,V,k,o(_,{label:"\u8DDF\u8FDB\u65E5\u671F\uFF1A"},{default:l(()=>[o(g,{modelValue:s.data,"onUpdate:modelValue":t[0]||(t[0]=e=>s.data=e),type:"daterange"},null,8,["modelValue"])]),_:1}),(r(),m(B,null,E(4,e=>o(_,{label:"\u901A\u5E38\u4E94\u4E2A\u5B57\uFF1A",key:e},{default:l(()=>[o(f)]),_:2},1024)),64))]),"tool-bar":l(()=>[o(b,null,{default:l(()=>[w]),_:1})]),default:l(()=>[o(P,{label:"\u6807\u9898",prop:"title"})]),_:1},8,["model","PageIndex","PageSize"])])}}});export{h as default};