webpackJsonp([8],{"3E4A":function(e,i,t){"use strict";var s={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",[i("h2",[this._v("Pullquote")]),i("cdr-text",{attrs:{modifier:"body"}},[this._v("\n    Body paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    "),i("cdr-quote",{attrs:{tag:"aside",modifier:"pull",summary:"Aside Pullquote Summary: Nested in body paragraph.\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores\n    odio fuga reiciendis blanditiis magni?"}}),this._v("\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n  ")],1),i("cdr-text",[this._v("\n    Default paragraph: Lorem ipsum dolor sit amet\n    consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n  ")]),i("cdr-quote",{attrs:{tag:"aside",modifier:"pull",summary:"Aside Pullquote Summary:\n    Wrapped by to default paragraphs\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores\n    odio fuga reiciendis blanditiis magni?"}}),i("cdr-text",[this._v("\n    Default paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n  ")])],1)},staticRenderFns:[]};i.a=s},"6z+w":function(e,i,t){"use strict";var s=t("ZzDQ"),r=t("quA/"),n=t("7YgM").dependencies;i.a={name:"Quotes",components:{Blockquotes:s.a,Pullquotes:r.a},data:function(){return{version:n["@rei/cdr-quote"]}}}},"7YgM":function(e,i){e.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt --hostname 0.0.0.0","dev-ssr":"cross-env NODE_ENV=dev nuxt generate && nuxt start",build:"cross-env NODE_ENV=production nuxt build",start:"nuxt start",generate:"cross-env NODE_ENV=production nuxt generate","multi-version":"node ./multi-version"},dependencies:{"@nuxtjs/axios":"^5.3.2","@rei/cdr-assets":"0.3.0","@rei/cdr-accordion":"1.0.5-alpha.0","@rei/cdr-activity-card":"0.1.5-alpha.0","@rei/cdr-breadcrumb":"1.0.3-alpha.0","@rei/cdr-button":"2.0.2-alpha.1","@rei/cdr-caption":"1.0.2-alpha.0","@rei/cdr-card":"0.2.4-alpha.0","@rei/cdr-checkbox":"1.0.3-alpha.0","@rei/cdr-cta":"1.1.2-alpha.0","@rei/cdr-data-table":"1.1.2-alpha.0","@rei/cdr-grid":"1.0.4-alpha.0","@rei/cdr-icon":"2.0.2-alpha.0","@rei/cdr-img":"1.0.3-alpha.0","@rei/cdr-input":"1.0.2-alpha.0","@rei/cdr-link":"1.0.5-alpha.2","@rei/cdr-list":"1.0.3-alpha.0","@rei/cdr-media-object":"0.1.5-alpha.0","@rei/cdr-pagination":"1.0.2-alpha.0","@rei/cdr-quote":"1.0.2-alpha.0","@rei/cdr-radio":"1.0.3-alpha.0","@rei/cdr-rating":"1.0.2-alpha.0","@rei/cdr-search":"1.0.2-alpha.0","@rei/cdr-select":"0.1.5-alpha.0","@rei/cdr-tabs":"1.0.2-alpha.0","@rei/cdr-text":"1.0.3-alpha.0","es6-promise":"^4.2.6","isomorphic-fetch":"^2.2.1",nuxt:"^1.0.0",underscore:"^1.9.1","vue-js-toggle-button":"^1.3.0",vuex:"^3.0.1"},devDependencies:{"@rei/cdr-tokens":"0.1.8","babel-polyfill":"^6.8.0","eventsource-polyfill":"^0.9.6","babel-preset-stage-2":"^6.24.1","cross-env":"^5.0.1","download-npm-package":"^3.1.12","fs-extra":"^7.0.0",lodash:"^4.17.11","node-sass":"^4.9.3","sass-loader":"^7.1.0",semver:"^5.5.1"}}},KBQ7:function(e,i,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])},LNRu:function(e,i,t){var s=t("MCB3");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("b8944268",s,!0,{sourceMap:!1})},MCB3:function(e,i,t){(e.exports=t("FZ+f")(!1)).push([e.i,".quotes{padding:50px}",""])},TwVt:function(e,i,t){"use strict";var s=t("s5Xf"),r=(t.n(s),t("YHLp"));t.n(r);i.a={name:"PullquoteDemo",components:{CdrText:s.CdrText,CdrQuote:r.CdrQuote}}},UHjV:function(e,i,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])},YHLp:function(e,i,t){!function(i,s){e.exports=s(t("s5Xf"))}("undefined"!=typeof self&&self,function(e){return function(e){var i={};function t(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=i,t.d=function(e,i,s){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="/",t(t.s=3)}([function(e,i,t){"use strict";var s=t(1);i.a=s.a},function(e,i,t){"use strict";var s=t(7),r=(t.n(s),t(8));i.a={name:"CdrQuote",components:{CdrText:s.CdrText},mixins:[r.a],props:{tag:{type:String,default:"blockquote",validator:function(e){return["blockquote","aside","q","div"].indexOf(e)>=0||!1}},summary:String,citation:String},computed:{baseClass:function(){return"cdr-quote"}}}},function(e,i){e.exports={"cdr-quote":"cdr-quote_1.0.2-alpha.0","cdr-quote__summary":"cdr-quote__summary_1.0.2-alpha.0","cdr-quote__citation":"cdr-quote__citation_1.0.2-alpha.0","cdr-quote--pull":"cdr-quote--pull_1.0.2-alpha.0"}},function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t(4);t.d(i,"CdrQuote",function(){return s.a})},function(e,i,t){"use strict";var s=t(5),r=t(0),n=t(10),a=t(11),o=Object(a.a)(r.a,s.a,s.b,!1,function(e){this.$style=n.default.locals||n.default},null,null);i.a=o.exports},function(e,i,t){"use strict";var s=t(6);t.d(i,"a",function(){return s.a}),t.d(i,"b",function(){return s.b})},function(e,i,t){"use strict";t.d(i,"a",function(){return s}),t.d(i,"b",function(){return r});var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t(e.tag,{tag:"component",class:[e.modifierClass]},[e.summary?t("p",{class:e.$style["cdr-quote__summary"]},[e._v("\n    "+e._s(e.summary)+"\n  ")]):e._e(),e._v(" "),e._t("default"),e._v(" "),e.citation?t("cdr-text",{class:e.$style["cdr-quote__citation"],attrs:{tag:"cite",modifier:"citation"}},[e._v("\n    "+e._s(e.citation)+"\n  ")]):e._e()],2)},r=[]},function(i,t){i.exports=e},function(e,i,t){"use strict";var s=t(9);i.a={mixins:[s.a],props:{modifier:String},computed:{modifierClass:function(){return this.buildClass("modifier")}}}},function(e,i,t){"use strict";i.a={methods:{buildClass:function(e){var i=this,t="cdr";this.baseClass&&(t=this.baseClass);var s=t,r=this[e]?this[e].split(" "):[],n=[];return this.$style?(n.push(this.moduleClass(s)),n=n.concat(r.map(function(e){return i.modifyClassName(s,e)}))):(n.push(""+s),n=n.concat(r.map(function(e){return i.modifyClassName(s,e)}))),n.join(" ")},moduleClass:function(e){return this.$style[""+e]},modifyClassName:function(e,i){return this.$style?this.moduleClass(e+"--"+i):e+"--"+i}}}},function(e,i,t){"use strict";var s=t(2),r=t.n(s);i.default=r.a},function(e,i,t){"use strict";i.a=function(e,i,t,s,r,n,a,o){var u,c="function"==typeof e?e.options:e;if(i&&(c.render=i,c.staticRenderFns=t,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):r&&(u=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(e,i){return u.call(i),d(e,i)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}}])})},ZzDQ:function(e,i,t){"use strict";var s=t("yd/g"),r=t("fYK6");var n=function(e){t("bqKC")},a=t("VU/8")(s.a,r.a,!1,n,null,null);i.a=a.exports},bqKC:function(e,i,t){var s=t("KBQ7");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("4f57c148",s,!0,{sourceMap:!1})},fYK6:function(e,i,t){"use strict";var s={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",[i("h2",[this._v("Blockquote")]),i("cdr-quote",{attrs:{modifier:"block",cite:"http://github.com/rei/rei-cedar",summary:"Blockquote Summary:\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?",citation:"Blockquote Citation: Lorem ipsum dolor sit"}}),i("h3",[this._v("Summary only")]),i("cdr-quote",{attrs:{modifier:"block",summary:"Blockquote Summary:\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores\n    odio fuga reiciendis blanditiis magni?"}}),i("h3",[this._v("citation only")]),i("cdr-quote",{attrs:{modifier:"block",citation:"Citation: Lorem ipsum dolor sit"}}),i("h3",[this._v("Nested blockquote")]),i("cdr-quote",{attrs:{modifier:"block",summary:"Blockquote Summary:\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores\n    odio fuga reiciendis blanditiis magni?"}},[i("cdr-quote",{attrs:{modifier:"block",citation:"bob"}},[i("cdr-text",[this._v("\n        consectetur adipisicing elit. At perferendis reiciendis\n        sapiente delectus commodi eaque sunt aperiam ex aliquam.\n        Temporibus, veritatis laudantium molestiae accusamus asperiores\n        odio fuga reiciendis blanditiis magni?\n      ")])],1)],1)],1)},staticRenderFns:[]};i.a=s},lpHA:function(e,i,t){var s=t("UHjV");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("1dc2013a",s,!0,{sourceMap:!1})},nDmG:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("6z+w"),r=t("tb1i");var n=function(e){t("LNRu")},a=t("VU/8")(s.a,r.a,!1,n,null,null);i.default=a.exports},"quA/":function(e,i,t){"use strict";var s=t("TwVt"),r=t("3E4A");var n=function(e){t("lpHA")},a=t("VU/8")(s.a,r.a,!1,n,null,null);i.a=a.exports},s5Xf:function(e,i,t){!function(i,t){e.exports=t()}("undefined"!=typeof self&&self,function(){return function(e){var i={};function t(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=i,t.d=function(e,i,s){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="/",t(t.s=2)}([function(e,i,t){"use strict";var s=t(1);i.a=s.a},function(e,i,t){"use strict";var s=t(6);i.a={name:"CdrText",mixins:[s.a],props:{tag:{type:String,default:"p"}},computed:{baseClass:function(){return"cdr-text"}}}},function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t(3);t.d(i,"CdrText",function(){return s.a})},function(e,i,t){"use strict";var s=t(4),r=t(0),n=t(8),a=Object(n.a)(r.a,s.a,s.b,!1,null,null,null);i.a=a.exports},function(e,i,t){"use strict";var s=t(5);t.d(i,"a",function(){return s.a}),t.d(i,"b",function(){return s.b})},function(e,i,t){"use strict";t.d(i,"a",function(){return s}),t.d(i,"b",function(){return r});var s=function(){var e=this.$createElement;return(this._self._c||e)(this.tag,{tag:"component",class:[this.modifierClass]},[this._t("default")],2)},r=[]},function(e,i,t){"use strict";var s=t(7);i.a={mixins:[s.a],props:{modifier:String},computed:{modifierClass:function(){return this.buildClass("modifier")}}}},function(e,i,t){"use strict";i.a={methods:{buildClass:function(e){var i=this,t="cdr";this.baseClass&&(t=this.baseClass);var s=t,r=this[e]?this[e].split(" "):[],n=[];return this.$style?(n.push(this.moduleClass(s)),n=n.concat(r.map(function(e){return i.modifyClassName(s,e)}))):(n.push(""+s),n=n.concat(r.map(function(e){return i.modifyClassName(s,e)}))),n.join(" ")},moduleClass:function(e){return this.$style[""+e]},modifyClassName:function(e,i){return this.$style?this.moduleClass(e+"--"+i):e+"--"+i}}}},function(e,i,t){"use strict";i.a=function(e,i,t,s,r,n,a,o){var u,c="function"==typeof e?e.options:e;if(i&&(c.render=i,c.staticRenderFns=t,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):r&&(u=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(e,i){return u.call(i),d(e,i)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}}])})},tb1i:function(e,i,t){"use strict";var s={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",[i("h2",[this._v("Quote version: "+this._s(this.version))]),i("div",{staticClass:"quotes-examples"},[i("blockquotes"),i("pullquotes")],1)])},staticRenderFns:[]};i.a=s},"yd/g":function(e,i,t){"use strict";var s=t("s5Xf"),r=(t.n(s),t("YHLp"));t.n(r);i.a={name:"BlockquoteDemo",components:{CdrText:s.CdrText,CdrQuote:r.CdrQuote}}}});