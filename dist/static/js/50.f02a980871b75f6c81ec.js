webpackJsonp([50,73],{53:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name:"",sid:"",code:""}},methods:{goNext:function(){console.log("未发开，直接跳路由"),this.$router.push("regStep2")}}}},194:function(t,e,s){var i,a;i=s(53);var r=s(293);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=i},293:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"container"},[e("topComponent",{attrs:{title:"注册征信查询账号"}})," ",t._m(0)," ",e("ul",{staticClass:"formCom form-report mt20"},[e("li",{staticClass:"user"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入登录名"},domProps:{value:t._s(t.name)},on:{input:function(e){e.target.composing||(t.name=e.target.value.trim())}}})])])," ",e("li",{staticClass:"uid"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.sid,expression:"sid",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入身份证号"},domProps:{value:t._s(t.sid)},on:{input:function(e){e.target.composing||(t.sid=e.target.value.trim())}}})])])," ",e("li",{staticClass:"safe"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.code,expression:"code",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t._s(t.code)},on:{input:function(e){e.target.composing||(t.code=e.target.value.trim())}}})])," ",t._m(1)])])," ",e("div",{staticClass:"btnWarp"},[e("span",{staticClass:"subBtn",on:{click:t.goNext}},["下一步"])])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"reportStepTit"},[e("ul",[e("li",{staticClass:"step01 ok"},[e("i",["1"]),"填写信息"])," ",e("li",{staticClass:"step02"},[e("i",["2"]),"补充信息"])," ",e("li",{staticClass:"step03"},[e("i",["3"]),"完成注册"])])])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"code-img"},[e("img",{attrs:{src:"https://cgtzfiles.b0.upaiyun.com/style3/bbs/cgtz/images/adv_2.jpg"}})])}]}}});