(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VTabBar=e():t.VTabBar=e()})(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports=function(t,e,n,r){var o,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,a=t.default);var u="function"==typeof a?a.options:a;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var i=u.computed||(u.computed={});Object.keys(r).forEach(function(t){var e=r[t];i[t]=function(){return e}})}return{esModule:o,exports:a,options:u}}},function(t,e,n){var r=n(6),o=n(7);r.install=function(t){t.component(o.name,o),t.component(r.name,r)},r.version="1.0.7",t.exports=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"v-tab-bar"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"v-tab-bar-item",props:{label:String,exact:Boolean,to:{required:!0}}}},function(t,e){},function(t,e){},function(t,e,n){n(4);var r=n(0)(n(2),n(8),null,null);t.exports=r.exports},function(t,e,n){n(5);var r=n(0)(n(3),n(9),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"v-tab-bar"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"v-tab-bar-item",class:{"with-label":t.label},attrs:{to:t.to,exact:t.exact},on:{click:function(e){t.$emit("click")}}},[t._t("default"),t.label?n("div",{staticClass:"v-tab-bar-item-label"},[t._v(t._s(t.label))]):t._e()],2)},staticRenderFns:[]}},function(t,e,n){t.exports=n(1)}])});