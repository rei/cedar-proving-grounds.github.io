webpackJsonp([5],{"+ExZ":function(t,e,i){var r=i("LNO9");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("5711be18",r,!0,{sourceMap:!1})},"1JYE":function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("cdr-text",{attrs:{tag:"h3",modifier:"heading-medium"}},[t._v("\n    Unordered list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{modifier:"unordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text\n          "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1)])],1),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Compact Unordered list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{modifier:"unordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Inline unordered list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{modifier:"inline unordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text")]),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Inline compact unordered list\n  ")]),i("cdr-list",{attrs:{modifier:"inline compact unordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1)},staticRenderFns:[]};e.a=r},"7ir+":function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,function(){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=3)}([function(t,e,i){"use strict";var r=i(1);e.a=r.a},function(t,e,i){"use strict";var r=i(7);e.a={name:"CdrList",mixins:[r.a],props:{tag:{type:String,default:"ul",validator:function(t){return["ul","ol"].indexOf(t)>=0||!1}}},computed:{baseClass:function(){return"cdr-list"}}}},function(t,e){t.exports={"cdr-list":"cdr-list_1.0.1","cdr-list--compact":"cdr-list--compact_1.0.1","cdr-list--ordered":"cdr-list--ordered_1.0.1","cdr-list--unordered":"cdr-list--unordered_1.0.1","cdr-list--inline":"cdr-list--inline_1.0.1"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(4);i.d(e,"CdrList",function(){return r.a})},function(t,e,i){"use strict";var r=i(5),n=i(0),s=i(8),o=i(9),a=Object(o.a)(n.a,r.a,r.b,!1,function(t){this.$style=s.default.locals||s.default},null,null);e.a=a.exports},function(t,e,i){"use strict";var r=i(6);i.d(e,"a",function(){return r.a}),i.d(e,"b",function(){return r.b})},function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return n});var r=function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.modifierClass},[this._t("default")],2)},n=[]},function(t,e,i){"use strict";e.a={props:{modifier:String},computed:{modifierClass:function(){var t=this,e=this.baseClass,i=this.modifier?this.modifier.split(" "):[],r=[];return this.$style?(r.push(this.moduleClass(e)),r=r.concat(i.map(function(i){return t.modifyClassName(e,i)}))):(r.push(""+e),r=r.concat(i.map(function(i){return t.modifyClassName(e,i)}))),r.join(" ")}},methods:{moduleClass:function(t){return this.$style[""+t]},modifyClassName:function(t,e){return this.$style?this.moduleClass(t+"--"+e):t+"--"+e}}}},function(t,e,i){"use strict";var r=i(2),n=i.n(r);e.default=n.a},function(t,e,i){"use strict";e.a=function(t,e,i,r,n,s,o,a){var d,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):n&&(d=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),d)if(c.functional){c._injectStyles=d;var u=c.render;c.render=function(t,e){return d.call(e),u(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,d):[d]}return{exports:t,options:c}}}])})},"KAC+":function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("cdr-text",{attrs:{tag:"h3",modifier:"heading-medium"}},[t._v("\n    Ordered list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{tag:"ol",modifier:"ordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",{attrs:{tag:"ol",modifier:"ordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text\n          "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text\n              "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1)])],1)])],1),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Compact ordered list\n  ")]),i("cdr-list",{attrs:{tag:"ol",modifier:"ordered compact"}},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",{attrs:{tag:"ol",modifier:"ordered"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1),i("li",[t._v("List item text")])])],1)},staticRenderFns:[]};e.a=r},LNO9:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},"O+Zu":function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("cdr-text",{attrs:{tag:"h2",modifier:"heading-large"}},[this._v("\n    List version: "+this._s(this.version)+"\n  ")]),e("unordered-list",{staticClass:"cdr-stack--xl"}),e("ordered-list",{staticClass:"cdr-stack--xl"}),e("bare-list",{staticClass:"cdr-stack--xl"})],1)},staticRenderFns:[]};e.a=r},Py5H:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("7ir+");e.default={name:"OrderedList",components:{CdrText:r.CdrText,CdrList:r.CdrList}}},"W/Qc":function(t,e,i){var r=i("eZJR");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("c82fb0d6",r,!0,{sourceMap:!1})},XnJy:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("s5Xf"),n=a(i("iRkc")),s=a(i("qaM5")),o=a(i("sKes"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={name:"Lists",components:{unorderedList:n.default,orderedList:s.default,bareList:o.default,CdrText:r.CdrText}}},chmo:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},eZJR:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},h3Vd:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("XnJy"),n=i.n(r);for(var s in r)"default"!==s&&function(t){i.d(e,t,function(){return r[t]})}(s);var o=i("O+Zu"),a=i("VU/8")(n.a,o.a,!1,null,null,null);e.default=a.exports},hAPa:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("7ir+");e.default={name:"UnorderedList",components:{CdrText:r.CdrText,CdrList:r.CdrList}}},hK2j:function(t,e,i){"use strict";var r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("cdr-text",{attrs:{tag:"h3",modifier:"heading-medium"}},[t._v("\n    Bare list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg"},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Compact bare list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{modifier:"compact"}},[i("li",[t._v("List item text")]),i("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered\n      "),i("cdr-list",[i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Inline bare list\n  ")]),i("cdr-list",{staticClass:"cdr-stack--lg",attrs:{modifier:"inline"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text")]),i("li",[t._v("List item text")])]),i("cdr-text",{attrs:{tag:"h4",modifier:"heading-medium"}},[t._v("\n    Inline compact bare list\n  ")]),i("cdr-list",{attrs:{modifier:"inline compact"}},[i("li",[t._v("List item text")]),i("li",[t._v("List item text")]),i("li",[t._v("List item text")])])],1)},staticRenderFns:[]};e.a=r},iRkc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("hAPa"),n=i.n(r);for(var s in r)"default"!==s&&function(t){i.d(e,t,function(){return r[t]})}(s);var o=i("1JYE");var a=function(t){i("W/Qc")},d=i("VU/8")(n.a,o.a,!1,a,null,null);e.default=d.exports},ldvZ:function(t,e,i){var r=i("chmo");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("67f8eae9",r,!0,{sourceMap:!1})},mmOi:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("7ir+");e.default={name:"BareList",components:{CdrText:r.CdrText,CdrList:r.CdrList}}},qaM5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("Py5H"),n=i.n(r);for(var s in r)"default"!==s&&function(t){i.d(e,t,function(){return r[t]})}(s);var o=i("KAC+");var a=function(t){i("+ExZ")},d=i("VU/8")(n.a,o.a,!1,a,null,null);e.default=d.exports},s5Xf:function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,function(){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=2)}([function(t,e,i){"use strict";var r=i(1);e.a=r.a},function(t,e,i){"use strict";var r=i(6);e.a={name:"CdrText",mixins:[r.a],props:{tag:{type:String,default:"p"}},computed:{baseClass:function(){return"cdr-text"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(3);i.d(e,"CdrText",function(){return r.a})},function(t,e,i){"use strict";var r=i(4),n=i(0),s=i(7),o=Object(s.a)(n.a,r.a,r.b,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var r=i(5);i.d(e,"a",function(){return r.a}),i.d(e,"b",function(){return r.b})},function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return n});var r=function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:[this.modifierClass]},[this._t("default")],2)},n=[]},function(t,e,i){"use strict";e.a={props:{modifier:String},computed:{modifierClass:function(){var t=this,e=this.baseClass,i=this.modifier?this.modifier.split(" "):[],r=[];return this.$style?(r.push(this.moduleClass(e)),r=r.concat(i.map(function(i){return t.modifyClassName(e,i)}))):(r.push(""+e),r=r.concat(i.map(function(i){return t.modifyClassName(e,i)}))),r.join(" ")}},methods:{moduleClass:function(t){return this.$style[""+t]},modifyClassName:function(t,e){return this.$style?this.moduleClass(t+"--"+e):t+"--"+e}}}},function(t,e,i){"use strict";e.a=function(t,e,i,r,n,s,o,a){var d,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):n&&(d=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),d)if(c.functional){c._injectStyles=d;var u=c.render;c.render=function(t,e){return d.call(e),u(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,d):[d]}return{exports:t,options:c}}}])})},sKes:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("mmOi"),n=i.n(r);for(var s in r)"default"!==s&&function(t){i.d(e,t,function(){return r[t]})}(s);var o=i("hK2j");var a=function(t){i("ldvZ")},d=i("VU/8")(n.a,o.a,!1,a,null,null);e.default=d.exports}});