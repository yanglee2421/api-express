import{d as b,r as i,b as n,o as _,c as r,e as o,w as a,F as P,s as x,g as S}from"./index.542ded05.js";const I={class:"h-100"},z=S("\u65B0\u589E"),E={inheritAttrs:!1},F=b({...E,__name:"Test",setup(A){const u=i({input:""}),e=i({PageIndex:1,PageSize:10}),c=s=>{s&&Object.assign(e,u),console.log("\u53D1\u4E2A\u8BF7\u6C42",s,e)};return(s,l)=>{const d=n("el-input"),m=n("el-form-item"),p=n("el-button"),g=n("el-table-column"),f=n("fw-table");return _(),r("div",I,[o(f,{model:u,data:[{title:"123"},{}],onSubmit:c,PageIndex:e.PageIndex,"onUpdate:PageIndex":l[0]||(l[0]=t=>e.PageIndex=t),PageSize:e.PageSize,"onUpdate:PageSize":l[1]||(l[1]=t=>e.PageSize=t),total:100,Index:"",Selection:"",border:""},{"form-item":a(()=>[(_(),r(P,null,x(30,t=>o(m,{label:"\u901A\u5E38\u4E94\u4E2A\u5B57\uFF1A",key:t},{default:a(()=>[o(d)]),_:2},1024)),64))]),"tool-bar":a(()=>[o(p,null,{default:a(()=>[z]),_:1})]),default:a(()=>[o(g,{label:"\u6807\u9898",prop:"title"})]),_:1},8,["model","PageIndex","PageSize"])])}}});export{F as default};
