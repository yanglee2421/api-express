import{d as x,r as c,a as y,c as N,b as t,w as n,e as u,o as V,f as C,g as F,h as m,u as E,_ as b}from"./index.7f29c988.js";const A={class:"div-bg h-100 flex center-center clearfix"},B={class:"w-100 flex center-center"},k=x({__name:"Login",setup(D){const p=E(),s=c({userName:"",pwd:""}),i=c({userName:[{required:!0,message:"\u4E0D\u5F97\u4E3A\u7A7A",trigger:"blur"}],pwd:[{required:!0,message:"\u4E0D\u5F97\u4E3A\u7A7A",trigger:"blur"}]}),l=y(),a=()=>{l.value.validate(d=>{if(d){const e=JSON.stringify(s);localStorage.setItem("token",e),p.replace("/")}else return!1})};return(d,e)=>{const f=u("swz-input-num"),r=u("el-form-item"),g=u("el-input"),_=u("el-button"),v=u("el-form"),w=u("el-card");return V(),N("div",A,[t(w,{class:"m-center"},{default:n(()=>[t(v,{model:s,ref:o=>l.value=o,rules:i},{default:n(()=>[t(r,{prop:"userName"},{default:n(()=>[t(f,{modelValue:s.userName,"onUpdate:modelValue":e[0]||(e[0]=o=>s.userName=o),maxlength:"20","prefix-icon":"User",placeholder:"\u8D26\u53F7\uFF08\u4EC5\u6570\u5B57\uFF09"},null,8,["modelValue"])]),_:1}),t(r,{prop:"pwd"},{default:n(()=>[t(g,{modelValue:s.pwd,"onUpdate:modelValue":e[1]||(e[1]=o=>s.pwd=o),onKeydown:e[2]||(e[2]=C(o=>a(),["enter"])),maxlength:"20",type:"password","prefix-icon":"Lock",placeholder:"\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),t(r,null,{default:n(()=>[F("div",B,[t(_,{type:"success"},{default:n(()=>[m("\u6CE8\u518C")]),_:1}),t(_,{onClick:e[3]||(e[3]=o=>a()),type:"primary"},{default:n(()=>[m("\u767B\u5F55")]),_:1})])]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}});const h=b(k,[["__scopeId","data-v-36fae767"]]);export{h as default};
