import{d as i,r as l,h as d,i as f,b as r,o as p,c as v,e,w as o,f as h,g as n,j as x,n as w}from"./index.ad5229da.js";const B={class:"h-100 flex-column"},A=n("\u5DE5\u4F5C\u533A"),k=n("\u6D4B\u8BD5"),C=n("\u4F20\u53C2"),y=n("123"),D={class:"flex-1-auto",style:{overflow:"overlay"}},V=i({__name:"Home",setup(E){const u=x(),a=l({currentActive:""});return d(()=>{a.currentActive=u.name}),f((c,_)=>{a.currentActive=c.name,w(()=>{document.querySelectorAll(".el-menu-item").forEach(s=>{s.blur()})})}),(c,_)=>{const t=r("el-menu-item"),s=r("el-menu"),m=r("router-view");return p(),v("div",B,[e(s,{mode:"horizontal","default-active":a.currentActive,router:""},{default:o(()=>[e(t,{index:"work",route:{name:"work"}},{default:o(()=>[A]),_:1}),e(t,{index:"test",route:{name:"test"}},{default:o(()=>[k]),_:1}),e(t,{index:"param",route:{name:"param"}},{default:o(()=>[C]),_:1}),e(t,{index:"4"},{default:o(()=>[y]),_:1})]),_:1},8,["default-active"]),h("main",D,[e(m)])])}}});export{V as default};
