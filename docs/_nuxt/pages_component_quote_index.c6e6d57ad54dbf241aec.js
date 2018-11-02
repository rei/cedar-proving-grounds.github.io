webpackJsonp([6],{"4xTD":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("YHLp");t.default={name:"PullquoteDemo",components:{CdrText:r.CdrText,CdrQuote:r.CdrQuote}}},"7YgM":function(e,t){e.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt","dev-ssr":"cross-env NODE_ENV=dev nuxt generate && nuxt start",build:"cross-env NODE_ENV=production nuxt build",start:"nuxt start",generate:"cross-env NODE_ENV=production nuxt generate","multi-version":"node ./multi-version"},dependencies:{"@nuxtjs/axios":"^5.3.2","@nuxtjs/proxy":"^1.1.2","@rei/cdr-accordion":"^1.0.2-alpha.0","@rei/cdr-activity-card":"0.1.3","@rei/cdr-assets":"0.3.0","@rei/cdr-breadcrumb":"1.0.1-alpha.0","@rei/cdr-button":"^1.0.3-alpha.0","@rei/cdr-caption":"^1.0.0","@rei/cdr-card":"^0.2.0","@rei/cdr-checkbox":"^1.0.0","@rei/cdr-cta":"1.0.3-alpha.4","@rei/cdr-data-table":"0.1.0-alpha.3","@rei/cdr-grid":"1.0.0","@rei/cdr-icon":"^1.0.0","@rei/cdr-img":"^1.0.1","@rei/cdr-input":"1.0.0-alpha.0","@rei/cdr-link":"^1.0.0","@rei/cdr-list":"^1.0.1","@rei/cdr-media-object":"^0.1.3","@rei/cdr-pagination":"0.1.2-alpha.2","@rei/cdr-quote":"^1.0.0","@rei/cdr-radio":"1.0.0","@rei/cdr-rating":"1.0.0-alpha.3","@rei/cdr-select":"^0.1.3","@rei/cdr-tabs":"1.0.0-alpha.63","@rei/cdr-text":"^1.0.1",nuxt:"^1.0.0","vue-js-toggle-button":"^1.3.0",vuex:"^3.0.1"},devDependencies:{"babel-preset-stage-2":"^6.24.1","cross-env":"^5.0.1","download-npm-package":"^3.1.12","fs-extra":"^7.0.0",lodash:"^4.17.11","node-sass":"^4.9.3","sass-loader":"^7.1.0",semver:"^5.5.1"}}},"DHW+":function(e,t,i){var r=i("j94O");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i("rjj0")("32bef78d",r,!0,{sourceMap:!1})},JhbW:function(e,t,i){var r=i("d+Qz");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i("rjj0")("20827bbc",r,!0,{sourceMap:!1})},"KD/z":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(i("ZzDQ")),n=s(i("quA/"));function s(e){return e&&e.__esModule?e:{default:e}}var a=i("7YgM").dependencies;t.default={name:"Quotes",components:{Blockquotes:r.default,Pullquotes:n.default},data:function(){return{version:a["@rei/cdr-quote"]}}}},WGay:function(e,t,i){var r=i("zA9/");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i("rjj0")("9bffadb6",r,!0,{sourceMap:!1})},YGqj:function(e,t,i){"use strict";var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Blockquote")]),t("cdr-quote",{attrs:{modifier:"block",cite:"http://github.com/rei/rei-cedar",summary:"Blockquote Summary:\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?",citation:"Blockquote Citation: Lorem ipsum dolor sit"}}),t("h3",[this._v("Summary only")]),t("cdr-quote",{attrs:{modifier:"block",summary:"Blockquote Summary:\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores\n    odio fuga reiciendis blanditiis magni?"}}),t("h3",[this._v("citation only")]),t("cdr-quote",{attrs:{modifier:"block",citation:"Citation: Lorem ipsum dolor sit"}}),t("h3",[this._v("Nested blockquote")]),t("cdr-quote",{attrs:{modifier:"block",summary:"Blockquote Summary:\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores\n    odio fuga reiciendis blanditiis magni?"}},[t("cdr-quote",{attrs:{modifier:"block",citation:"bob"}},[t("cdr-text",[this._v("\n        consectetur adipisicing elit. At perferendis reiciendis\n        sapiente delectus commodi eaque sunt aperiam ex aliquam.\n        Temporibus, veritatis laudantium molestiae accusamus asperiores\n        odio fuga reiciendis blanditiis magni?\n      ")])],1)],1)],1)},staticRenderFns:[]};t.a=r},YHLp:function(e,t,i){!function(t,r){e.exports=r(i("s5Xf"))}("undefined"!=typeof self&&self,function(e){return function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=3)}([function(e,t,i){"use strict";var r=i(1);t.a=r.a},function(e,t,i){"use strict";var r=i(7),n=(i.n(r),i(8));t.a={name:"CdrQuote",components:{CdrText:r.CdrText},mixins:[n.a],props:{tag:{type:String,default:"blockquote",validator:function(e){return["blockquote","aside","q","div"].indexOf(e)>=0||!1}},summary:String,citation:String},computed:{baseClass:function(){return"cdr-quote"}}}},function(e,t){e.exports={"cdr-quote":"cdr-quote_1.0.0","cdr-quote__summary":"cdr-quote__summary_1.0.0","cdr-quote__citation":"cdr-quote__citation_1.0.0","cdr-quote--pull":"cdr-quote--pull_1.0.0"}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(4);i.d(t,"CdrQuote",function(){return r.a})},function(e,t,i){"use strict";var r=i(5),n=i(0),s=i(9),a=i(10),o=Object(a.a)(n.a,r.a,r.b,!1,function(e){this.$style=s.default.locals||s.default},null,null);t.a=o.exports},function(e,t,i){"use strict";var r=i(6);i.d(t,"a",function(){return r.a}),i.d(t,"b",function(){return r.b})},function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return n});var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i(e.tag,{tag:"component",class:[e.modifierClass]},[e.summary?i("p",{class:e.$style["cdr-quote__summary"]},[e._v("\n    "+e._s(e.summary)+"\n  ")]):e._e(),e._v(" "),e._t("default"),e._v(" "),e.citation?i("cdr-text",{class:e.$style["cdr-quote__citation"],attrs:{tag:"cite",modifier:"citation"}},[e._v("\n    "+e._s(e.citation)+"\n  ")]):e._e()],2)},n=[]},function(t,i){t.exports=e},function(e,t,i){"use strict";t.a={props:{modifier:String},computed:{modifierClass:function(){var e=this,t=this.baseClass,i=this.modifier?this.modifier.split(" "):[],r=[];return this.$style?(r.push(this.moduleClass(t)),r=r.concat(i.map(function(i){return e.modifyClassName(t,i)}))):(r.push(""+t),r=r.concat(i.map(function(i){return e.modifyClassName(t,i)}))),r.join(" ")}},methods:{moduleClass:function(e){return this.$style[""+e]},modifyClassName:function(e,t){return this.$style?this.moduleClass(e+"--"+t):e+"--"+t}}}},function(e,t,i){"use strict";var r=i(2),n=i.n(r);t.default=n.a},function(e,t,i){"use strict";t.a=function(e,t,i,r,n,s,a,o){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):n&&(u=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(e,t){return u.call(t),d(e,t)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}}])})},ZzDQ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("tQC9"),n=i.n(r);for(var s in r)"default"!==s&&function(e){i.d(t,e,function(){return r[e]})}(s);var a=i("YGqj");var o=function(e){i("DHW+")},u=i("VU/8")(n.a,a.a,!1,o,null,null);t.default=u.exports},"d+Qz":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,".quotes{padding:50px}",""])},j94O:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"",""])},nDmG:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("KD/z"),n=i.n(r);for(var s in r)"default"!==s&&function(e){i.d(t,e,function(){return r[e]})}(s);var a=i("tb1i");var o=function(e){i("JhbW")},u=i("VU/8")(n.a,a.a,!1,o,null,null);t.default=u.exports},"quA/":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("4xTD"),n=i.n(r);for(var s in r)"default"!==s&&function(e){i.d(t,e,function(){return r[e]})}(s);var a=i("zfFb");var o=function(e){i("WGay")},u=i("VU/8")(n.a,a.a,!1,o,null,null);t.default=u.exports},s5Xf:function(e,t,i){!function(t,i){e.exports=i()}("undefined"!=typeof self&&self,function(){return function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=2)}([function(e,t,i){"use strict";var r=i(1);t.a=r.a},function(e,t,i){"use strict";var r=i(6);t.a={name:"CdrText",mixins:[r.a],props:{tag:{type:String,default:"p"}},computed:{baseClass:function(){return"cdr-text"}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(3);i.d(t,"CdrText",function(){return r.a})},function(e,t,i){"use strict";var r=i(4),n=i(0),s=i(7),a=Object(s.a)(n.a,r.a,r.b,!1,null,null,null);t.a=a.exports},function(e,t,i){"use strict";var r=i(5);i.d(t,"a",function(){return r.a}),i.d(t,"b",function(){return r.b})},function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return n});var r=function(){var e=this.$createElement;return(this._self._c||e)(this.tag,{tag:"component",class:[this.modifierClass]},[this._t("default")],2)},n=[]},function(e,t,i){"use strict";t.a={props:{modifier:String},computed:{modifierClass:function(){var e=this,t=this.baseClass,i=this.modifier?this.modifier.split(" "):[],r=[];return this.$style?(r.push(this.moduleClass(t)),r=r.concat(i.map(function(i){return e.modifyClassName(t,i)}))):(r.push(""+t),r=r.concat(i.map(function(i){return e.modifyClassName(t,i)}))),r.join(" ")}},methods:{moduleClass:function(e){return this.$style[""+e]},modifyClassName:function(e,t){return this.$style?this.moduleClass(e+"--"+t):e+"--"+t}}}},function(e,t,i){"use strict";t.a=function(e,t,i,r,n,s,a,o){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):n&&(u=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(e,t){return u.call(t),d(e,t)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}}])})},tQC9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("YHLp");t.default={name:"BlockquoteDemo",components:{CdrText:r.CdrText,CdrQuote:r.CdrQuote}}},tb1i:function(e,t,i){"use strict";var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Quote version: "+this._s(this.version))]),t("div",{staticClass:"quotes-examples"},[t("blockquotes"),t("pullquotes")],1)])},staticRenderFns:[]};t.a=r},"zA9/":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"",""])},zfFb:function(e,t,i){"use strict";var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Pullquote")]),t("cdr-text",{attrs:{modifier:"body"}},[this._v("\n    Body paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    "),t("cdr-quote",{attrs:{tag:"aside",modifier:"pull",summary:"Aside Pullquote Summary: Nested in body paragraph.\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores\n    odio fuga reiciendis blanditiis magni?"}}),this._v("\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n  ")],1),t("cdr-text",[this._v("\n    Default paragraph: Lorem ipsum dolor sit amet\n    consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n  ")]),t("cdr-quote",{attrs:{tag:"aside",modifier:"pull",summary:"Aside Pullquote Summary:\n    Wrapped by to default paragraphs\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores\n    odio fuga reiciendis blanditiis magni?"}}),t("cdr-text",[this._v("\n    Default paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n    Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam\n    ex aliquam. Temporibus, veritatis laudantium molestiae accusamus\n    asperiores odio fuga reiciendis blanditiis magni?\n  ")])],1)},staticRenderFns:[]};t.a=r}});