import{d as x,r as i,a as w,c as y,b as t,w as r,e as l,u as N,o as V,f as C,g as b,h as _,_ as A}from"./index.dc996552.js";const E={class:"div-bg h-100 flex center-center clearfix"},k={class:"w-100 flex center-center"},B=x({__name:"Login",setup(D){const p=N(),s=i({userName:"",pwd:""}),f=i({userName:[{required:!0,message:"\u4E0D\u5F97\u4E3A\u7A7A",trigger:"blur"}],pwd:[{required:!0,message:"\u4E0D\u5F97\u4E3A\u7A7A",trigger:"blur"}]}),n=w(),u=()=>{n.value.validate(d=>{if(d){const e=JSON.stringify(s);localStorage.setItem("token",e),p.replace("/")}else return!1})};return(d,e)=>{const m=l("el-input"),a=l("el-form-item"),c=l("el-button"),g=l("el-form"),v=l("el-card");return V(),y("div",E,[t(v,{class:"m-center"},{default:r(()=>[t(g,{model:s,ref:o=>n.value=o,rules:f},{default:r(()=>[t(a,{prop:"userName"},{default:r(()=>[t(m,{modelValue:s.userName,"onUpdate:modelValue":e[0]||(e[0]=o=>s.userName=o),modelModifiers:{trim:!0},maxlength:"20","prefix-icon":"User",placeholder:"\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),t(a,{prop:"pwd"},{default:r(()=>[t(m,{modelValue:s.pwd,"onUpdate:modelValue":e[1]||(e[1]=o=>s.pwd=o),modelModifiers:{trim:!0},onKeydown:e[2]||(e[2]=C(o=>u(),["enter"])),maxlength:"20",type:"password","prefix-icon":"Lock",placeholder:"\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),t(a,null,{default:r(()=>[b("div",k,[t(c,{type:"success"},{default:r(()=>[_("\u6CE8\u518C")]),_:1}),t(c,{onClick:e[3]||(e[3]=o=>u()),type:"primary"},{default:r(()=>[_("\u767B\u5F55")]),_:1})])]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}});const h=A(B,[["__scopeId","data-v-a0aa4629"]]);export{h as default};