import{d as v,r as _,a as w,b as l,o as N,c as V,e,w as o,f as y,g as m,u as C,_ as b}from"./index.d5427a90.js";const A={class:"div-bg h-100 flex center-center clearfix"},E={class:"w-100 flex center-center"},h=m("\u6CE8\u518C"),k=m("\u767B\u5F55"),B=v({__name:"Login",setup(D){const i=C(),r=_({userName:"",pwd:""}),p=_({userName:[{required:!0,message:"\u4E0D\u5F97\u4E3A\u7A7A",trigger:"blur"}],pwd:[{required:!0,message:"\u4E0D\u5F97\u4E3A\u7A7A",trigger:"blur"}]}),u=w(),f=()=>{u.value.validate(a=>{if(a){const t=JSON.stringify(r);localStorage.setItem("token",t),i.replace("/")}else return!1})};return(a,t)=>{const d=l("el-input"),n=l("el-form-item"),c=l("el-button"),g=l("el-form"),x=l("el-card");return N(),V("div",A,[e(x,{class:"m-center"},{default:o(()=>[e(g,{model:r,ref:s=>u.value=s,rules:p},{default:o(()=>[e(n,{prop:"userName"},{default:o(()=>[e(d,{modelValue:r.userName,"onUpdate:modelValue":t[0]||(t[0]=s=>r.userName=s),modelModifiers:{trim:!0},maxlength:"20","prefix-icon":"User",placeholder:"\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),e(n,{prop:"pwd"},{default:o(()=>[e(d,{modelValue:r.pwd,"onUpdate:modelValue":t[1]||(t[1]=s=>r.pwd=s),modelModifiers:{trim:!0},maxlength:"20",type:"password","prefix-icon":"Lock",placeholder:"\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(n,null,{default:o(()=>[y("div",E,[e(c,{type:"success"},{default:o(()=>[h]),_:1}),e(c,{onClick:t[2]||(t[2]=s=>f()),type:"primary"},{default:o(()=>[k]),_:1})])]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}});const F=b(B,[["__scopeId","data-v-8526d716"]]);export{F as default};
