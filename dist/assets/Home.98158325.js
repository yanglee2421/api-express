import{d as m,r as l,h as d,i as f,b as r,o as p,c as v,e,w as o,f as h,g as n,j as x,n as w}from"./index.4f9def36.js";const A={class:"h-100 flex-column"},B=n("\u4F20\u53C2"),C=n("\u8868\u683C"),b=n("\u8F6E\u64AD\u56FE"),E=n("123"),k={class:"flex-1-auto p-1",style:{overflow:"overlay"}},N=m({__name:"Home",setup(y){const u=x(),a=l({currentActive:""});return d(()=>{a.currentActive=u.name}),f((c,_)=>{a.currentActive=c.name,w(()=>{document.querySelectorAll(".el-menu-item").forEach(s=>{s.blur()})})}),(c,_)=>{const t=r("el-menu-item"),s=r("el-menu"),i=r("router-view");return p(),v("div",A,[e(s,{mode:"horizontal","default-active":a.currentActive,router:""},{default:o(()=>[e(t,{index:"param",route:{name:"param"}},{default:o(()=>[B]),_:1}),e(t,{index:"table",route:{name:"table"}},{default:o(()=>[C]),_:1}),e(t,{index:"swiper",route:{name:"swiper"}},{default:o(()=>[b]),_:1}),e(t,{index:"4"},{default:o(()=>[E]),_:1})]),_:1},8,["default-active"]),h("main",k,[e(i)])])}}});export{N as default};
