import{d as _,o as r,c,g as a,E as $,r as v,e as p,b as u,G as i,a as x,H as b,I as m,J as g,L as V,M as F,N as D,_ as S,w as h,h as E}from"./index.dc996552.js";const U=a("h3",null,"\u7236\u5411\u5B50\uFF1A\u5B50",-1),y=_({__name:"Son",props:{value:{type:String,default:""}},setup(o){return(e,s)=>(r(),c("div",null,[U,a("span",null,"\u513F\u5B50\u6536\u5230\u7684\uFF1A"+$(o.value),1)]))}}),A=a("h3",null,"\u7236\u5411\u5B50\uFF1A\u7236",-1),N={class:"p-1 mt-1 b"},C=_({__name:"Father",setup(o){const e=v({value:""});return(s,t)=>{const n=p("el-input");return r(),c("div",null,[A,u(n,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l)},null,8,["modelValue"]),a("div",N,[u(y,{value:e.value},null,8,["value"])])])}}}),j=a("h3",null,"\u513F\u5B50\u4E2D",-1),k=_({__name:"Son",props:{value:{type:String,default:""}},emits:["update"],setup(o,{emit:e}){const s=o,t=v({});return t.value=i({get(){return s.value},set(n){e("update",n)}}),(n,l)=>{const d=p("el-input");return r(),c("div",null,[j,u(d,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=f=>t.value=f)},null,8,["modelValue"])])}}}),w=a("h3",null,"\u7236\u4EB2\u4E2D",-1),I={class:"p-1 mt-1 b"},L=_({__name:"Father",setup(o){const e=x("\u7236\u4EB2\u7ED9\u513F\u5B50\u7684");return(s,t)=>(r(),c("div",null,[a("div",null,[w,a("span",null,"\u7236\u4EB2\u6536\u5230\u7684\uFF1A"+$(e.value),1),a("div",I,[u(k,{value:e.value,onUpdate:t[0]||(t[0]=n=>e.value=n)},null,8,["value"])])])]))}}),O=a("h3",null,"\u540E\u4EE3\u4E2D",-1),R=_({__name:"Offspring",setup(o){const e=b("state");return(s,t)=>{const n=p("el-input");return r(),c("div",null,[O,u(n,{modelValue:m(e).value,"onUpdate:modelValue":t[0]||(t[0]=l=>m(e).value=l)},null,8,["modelValue"])])}}}),G=a("h3",null,"\u7956\u5148\u7684",-1),H={class:"p-1 mt-1 b"},J=_({__name:"Ancestor",setup(o){const e=v({value:""});return g("state",e),(s,t)=>{const n=p("el-input");return r(),c("div",null,[G,u(n,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l)},null,8,["modelValue"]),a("div",H,[u(R)])])}}}),M={class:"b p-1"},T=a("b",null,"\u5DE6",-1),q=_({__name:"Left",setup(o){const e=V(),s=i({get(){return e.state.mod1.value},set(t){e.dispatch("mod1/value",t)}});return(t,n)=>{const l=p("el-input");return r(),c("div",M,[T,u(l,{modelValue:m(s),"onUpdate:modelValue":n[0]||(n[0]=d=>F(s)?s.value=d:null)},null,8,["modelValue"])])}}}),z={class:"b p-1"},K=a("b",null,"\u53F3",-1),P=_({__name:"Right",setup(o){const e=V(),s=D({mes:"aaa"}),t=v({});Object.keys(s).forEach(l=>{t[l]=i(s[l].bind({$store:e}))});const n=i({get(){return e.state.mod1.value},set(l){e.dispatch("mod1/value",l)}});return(l,d)=>{const f=p("el-input");return r(),c("div",z,[K,u(f,{modelValue:m(n),"onUpdate:modelValue":d[0]||(d[0]=B=>F(n)?n.value=B:null)},null,8,["modelValue"])])}}}),Q={class:"box"},W=_({__name:"Father",setup(o){return(e,s)=>(r(),c("div",Q,[u(q),u(P)]))}});const X=S(W,[["__scopeId","data-v-de90bb48"]]),Z=_({__name:"param",setup(o){return(e,s)=>{const t=p("el-divider");return r(),c("div",null,[u(C),u(t,null,{default:h(()=>[E("\u534E\u4E3D\u7684\u5206\u9694\u7EBF")]),_:1}),u(L),u(t,null,{default:h(()=>[E("\u534E\u4E3D\u7684\u5206\u9694\u7EBF")]),_:1}),u(J),u(t,null,{default:h(()=>[E("\u534E\u4E3D\u7684\u5206\u9694\u7EBF")]),_:1}),u(X)])}}});export{Z as default};