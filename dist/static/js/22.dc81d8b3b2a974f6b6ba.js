webpackJsonp([22,73],{85:function(t,r,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(r,"__esModule",{value:!0});var s=e(145),n=o(s);r.default={data:function(){return{hasBorrow:!0,hasMore:!0,borrowMsg:"没有任何借款记录",borrowCls:"error-txt",list:[]}},mounted:function(){void 0===n.default.totalSize?this.hasBorrow=!1:this.list=n.default.data}}},145:function(t,r){t.exports={data:[],success:!0}},228:function(t,r,e){var o,s;o=e(85);var n=e(302);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,t.exports=o},302:function(t,r){t.exports={render:function(){var t=this,r=t.$createElement;return r("div",{staticClass:"userBorrow"},[r("borrowTitle",{attrs:{idx:3}})," ",t.hasBorrow?r("borrowList",{attrs:{items:t.list}}):t._e()," ",t.hasBorrow?t._e():r("pageError",{class:t.borrowCls,attrs:{msg:t.borrowMsg}})," ",t.hasMore?t._e():r("noMore")])},staticRenderFns:[]}}});