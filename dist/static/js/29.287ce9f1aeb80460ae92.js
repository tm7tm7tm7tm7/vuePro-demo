webpackJsonp([29,73],{11:function(t,a){t.exports=[{cls:"bank10",name:"招商银行",id:1},{cls:"bank20",name:"工商银行"},{cls:"bank30",name:"农业银行"},{cls:"bank40",name:"中国银行"},{cls:"bank50",name:"浦发银行"},{cls:"bank60",name:"建设银行"},{cls:"bank70",name:"邮政储蓄银行"},{cls:"bank80",name:"交通银行"},{cls:"bank90",name:"北京银行"},{cls:"bank100",name:"光大银行"},{cls:"bank110",name:"兴业银行"},{cls:"bank120",name:"民生银行"},{cls:"bank130",name:"中信银行"},{cls:"bank140",name:"平安银行"},{cls:"bank150",name:"广发银行"},{cls:"bank160",name:"华夏银行"},{cls:"bank170",name:"深圳农村商业银行"},{cls:"bank180",name:"上海银行"},{cls:"bank190",name:"重庆农村商业银行"}]},61:function(t,a,n){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var s=n(11),l=e(s);a.default={data:function(){return{bank:""}},methods:{},mounted:function(){this.bank=l.default[this.$route.params.index].name}}},201:function(t,a,n){var e,s;e=n(61);var l=n(333);s=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(s=e=e.default),"function"==typeof s&&(s=s.options),s.render=l.render,s.staticRenderFns=l.staticRenderFns,t.exports=e},333:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return a("div",{staticClass:"container"},[a("topComponent",{attrs:{title:t.bank}})," ",t._m(0)," ",t._m(1)," ",a("p",{staticClass:"formTips"},["温馨提示：请确认您填写的信息为本人所有，填写他人信息可能出现授权失败"])])},staticRenderFns:[function(){var t=this,a=t.$createElement;return a("ul",{staticClass:"formCom form-fund mt20"},[a("li",[a("label",[a("span",["银行卡"])," ",a("input",{attrs:{type:"text",placeholder:"请输入银行卡号"}})])])," ",a("li",[a("label",[a("span",["账号"])," ",a("input",{attrs:{type:"text",placeholder:"请输入身份证号/用户名"}})," ",a("p",{staticClass:"tips-bg"},["注意：必须先开通网银，如未开通，请在官网开通网银功能"])])])," ",a("li",[a("label",[a("span",["密码"])," ",a("input",{attrs:{type:"text",placeholder:"请输入登录密码"}})," ",a("p",{staticClass:"tips-nobg"},["如忘记密码请登录官网找回"])])])," ",a("li",[a("label",[a("span",["验证码"])," ",a("input",{attrs:{type:"text",placeholder:"请输入右侧验证码"}})])," ",a("div",{staticClass:"code-img"},[a("img",{attrs:{src:"https://cgtzfiles.b0.upaiyun.com/style3/bbs/cgtz/images/adv_2.jpg"}})])])])},function(){var t=this,a=t.$createElement;return a("div",{staticClass:"btnWarp"},[a("span",{staticClass:"subBtn"},["确认提交"])])}]}}});