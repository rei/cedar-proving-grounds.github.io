webpackJsonp([13],{"070n":function(e,t,r){"use strict";var n=r("jslJ");r.n(n);t.a={name:"SimpleCard",components:n.CdrCard}},"4iz+":function(e,t,r){"use strict";var n=r("BbYR"),i=r("7YgM").dependencies;t.a={name:"Cards",components:{simpleCard:n.a},data:function(){return{version:i["@rei/cdr-card"]}}}},"7YgM":function(e,t){e.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt",build:"cross-env NODE_ENV=production nuxt build",start:"cross-env NODE_ENV=production nuxt start",generate:"cross-env NODE_ENV=production nuxt generate"},dependencies:{"@rei/cdr-accordion":"^1.0.1","@rei/cdr-assets":"^0.3.0","@rei/cdr-breadcrumb":"1.0.0","@rei/cdr-button":"^1.0.1","@rei/cdr-caption":"^1.0.0","@rei/cdr-card":"^0.2.0","@rei/cdr-checkbox":"^1.0.0","@rei/cdr-cta":"1.0.3-alpha.2","@rei/cdr-grid":"^1.0.0","@rei/cdr-icon":"^1.0.0","@rei/cdr-input":"^0.1.2","@rei/cdr-img":"^1.0.1","@rei/cdr-link":"^1.0.0","@rei/cdr-list":"^1.0.1","@rei/cdr-media-object":"^0.1.3","@rei/cdr-quote":"^1.0.0","@rei/cdr-radio":"1.0.0","@rei/cdr-rating":"0.1.1","@rei/cdr-select":"0.1.1","@rei/cdr-tabs":"1.0.0-alpha.60","@rei/cdr-text":"^1.0.1",lodash:"^4.17.11",nuxt:"^1.0.0"},devDependencies:{"cross-env":"^5.0.1","node-sass":"^4.9.3","sass-loader":"^7.1.0"}}},BbYR:function(e,t,r){"use strict";var n=r("070n"),i=r("TlPP"),s=r("VU/8")(n.a,i.a,!1,null,null,null);t.a=s.exports},RXqA:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("4iz+"),i=r("lpQq"),s=r("VU/8")(n.a,i.a,!1,null,null,null);t.default=s.exports},TlPP:function(e,t,r){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("cdr-card",[t("p",[this._v("A simple card")])])],1)},staticRenderFns:[]};t.a=n},jslJ:function(e,t,r){!function(t,r){e.exports=r()}("undefined"!=typeof self&&self,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=3)}([function(e,t,r){"use strict";var n=r(1);t.a=n.a},function(e,t,r){"use strict";var n=r(7);t.a={name:"CdrCard",mixins:[n.a],computed:{baseClass:function(){return"cdr-card"}}}},function(e,t){e.exports={"cdr-card":"cdr-card_0.2.0"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4);r.d(t,"CdrCard",function(){return n.a})},function(e,t,r){"use strict";var n=r(5),i=r(0),s=r(8),c=r(9),o=Object(c.a)(i.a,n.a,n.b,!1,function(e){this.$style=s.default.locals||s.default},null,null);t.a=o.exports},function(e,t,r){"use strict";var n=r(6);r.d(t,"a",function(){return n.a}),r.d(t,"b",function(){return n.b})},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this.$createElement;return(this._self._c||e)("article",{class:this.modifierClass},[this._t("default")],2)},i=[]},function(e,t,r){"use strict";t.a={props:{modifier:String},computed:{modifierClass:function(){var e=this,t=this.baseClass,r=this.modifier?this.modifier.split(" "):[],n=[];return this.$style?(n.push(this.moduleClass(t)),n=n.concat(r.map(function(r){return e.modifyClassName(t,r)}))):(n.push(""+t),n=n.concat(r.map(function(r){return e.modifyClassName(t,r)}))),n.join(" ")}},methods:{moduleClass:function(e){return this.$style[""+e]},modifyClassName:function(e,t){return this.$style?this.moduleClass(e+"--"+t):e+"--"+t}}}},function(e,t,r){"use strict";var n=r(2),i=r.n(n);t.default=i.a},function(e,t,r){"use strict";t.a=function(e,t,r,n,i,s,c,o){var a,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),c?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},u._ssrRegister=a):i&&(a=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),a)if(u.functional){u._injectStyles=a;var d=u.render;u.render=function(e,t){return a.call(t),d(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,a):[a]}return{exports:e,options:u}}}])})},lpQq:function(e,t,r){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("Card version: "+this._s(this.version))]),t("div",[t("simple-card")],1)])},staticRenderFns:[]};t.a=n}});