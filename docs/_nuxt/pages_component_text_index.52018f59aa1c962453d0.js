webpackJsonp([7],{"35Q5":function(e,t,r){"use strict";var n=r("8XzR"),i=r("o3ML");var s=function(e){r("6DVg")},a=r("VU/8")(n.a,i.a,!1,s,null,null);t.a=a.exports},"6DVg":function(e,t,r){var n=r("Rzku");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r("rjj0")("16b4d03e",n,!0,{sourceMap:!1})},"7YgM":function(e,t){e.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt","dev-ssr":"cross-env NODE_ENV=dev nuxt generate && nuxt start",build:"cross-env NODE_ENV=production nuxt build",start:"nuxt start",generate:"cross-env NODE_ENV=production nuxt generate"},dependencies:{"@nuxtjs/axios":"^5.3.2","@nuxtjs/proxy":"^1.1.2","@rei/cdr-accordion":"^1.0.2-alpha.0","@rei/cdr-activity-card":"0.1.3","@rei/cdr-assets":"^0.3.0","@rei/cdr-breadcrumb":"1.0.0","@rei/cdr-button":"^1.0.3-alpha.0","@rei/cdr-caption":"^1.0.0","@rei/cdr-card":"^0.2.0","@rei/cdr-checkbox":"^1.0.0","@rei/cdr-cta":"1.0.3-alpha.4","@rei/cdr-grid":"1.0.0","@rei/cdr-icon":"^1.0.0","@rei/cdr-img":"^1.0.1","@rei/cdr-input":"^0.1.2","@rei/cdr-link":"^1.0.0","@rei/cdr-list":"^1.0.1","@rei/cdr-media-object":"^0.1.3","@rei/cdr-quote":"^1.0.0","@rei/cdr-radio":"1.0.0","@rei/cdr-rating":"0.1.1","@rei/cdr-select":"0.1.1","@rei/cdr-tabs":"1.0.0-alpha.60","@rei/cdr-text":"^1.0.1",lodash:"^4.17.11",nuxt:"^1.0.0",vuex:"^3.0.1"},devDependencies:{"cross-env":"^5.0.1","node-sass":"^4.9.3","sass-loader":"^7.1.0"}}},"8XzR":function(e,t,r){"use strict";var n=r("s5Xf");r.n(n);t.a={name:"headings",components:{CdrText:n.CdrText}}},KFd6:function(e,t,r){"use strict";var n=r("35Q5"),i=r("cLKw"),s=r("7YgM").dependencies;t.a={name:"Texts",components:{headings:n.a,paragraphs:i.a},data:function(){return{version:s["@rei/cdr-text"]}}}},O57E:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("KFd6"),i=r("nzs4"),s=r("VU/8")(n.a,i.a,!1,null,null,null);t.default=s.exports},Rzku:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},WqIF:function(e,t,r){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("cdr-text",{attrs:{tag:"h3",modifier:"heading-medium"}},[this._v("\n    Paragraphs\n  ")]),t("cdr-text",[this._v("\n    The default cdr-text component is a "),t("code",[this._v("p")]),this._v(" tag with the class of 'cdr-text'\n  ")]),t("cdr-text",[this._v("Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet\n  congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,\n  donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla\n  mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque\n  vestibulum.\n  ")]),t("cdr-text",{attrs:{modifier:"body"}},[this._v("\n    Some people consider articles longer than 700 words to be long-form, whereas others think\n    that articles have to be in excess of 1,800 words to be considered long-form. For the sake of argument,\n    let's assume that long-form content refers to articles of around 1,200 words or longer.\n  ")]),t("cdr-text",{attrs:{modifier:"body"}},[this._v("\n    Here’s a fun fact: Over the last 10 years,\n    our attention spans have decreased from 12 minutes to 5 minutes.\n    Our ability (and our desire) to read lots of content is clearly\n    impacted. So how do we rock some long form content and make it successful?\n  ")])],1)},staticRenderFns:[]};t.a=n},cLKw:function(e,t,r){"use strict";var n=r("ok+X"),i=r("WqIF");var s=function(e){r("v40N")},a=r("VU/8")(n.a,i.a,!1,s,null,null);t.a=a.exports},nzs4:function(e,t,r){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Text  version: "+this._s(this.version))]),t("headings"),t("paragraphs")],1)},staticRenderFns:[]};t.a=n},o3ML:function(e,t,r){"use strict";var n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Headings")]),e._l(6,function(t){return r("cdr-text",{key:"display-"+t,attrs:{tag:"h"+t,modifier:"display"}},[e._v("Display Heading h"+e._s(t))])}),r("cdr-text",{attrs:{modifier:"display-static"}},[e._v("Static display heading as p")]),e._l(6,function(t){return r("cdr-text",{key:"subheading-"+t,attrs:{tag:"h"+t,modifier:"subheading"}},[e._v("Subheading  h"+e._s(t))])}),e._l(6,function(t){return r("cdr-text",{key:"heading-large-"+t,attrs:{tag:"h"+t,modifier:"heading-large"}},[e._v("Heading-large  h"+e._s(t))])}),r("cdr-text",{attrs:{modifier:"heading-large-static"}},[e._v("Static heading-large as p")]),e._l(6,function(t){return r("cdr-text",{key:"heading-medium-"+t,attrs:{tag:"h"+t,modifier:"heading-medium"}},[e._v("Heading-medium  h"+e._s(t))])}),r("cdr-text",{attrs:{modifier:"heading-medium-static"}},[e._v("Static heading-medium as p")]),e._l(6,function(t){return r("cdr-text",{key:"heading-small-"+t,attrs:{tag:"h"+t,modifier:"heading-small"}},[e._v("Heading-small  h"+e._s(t))])}),r("cdr-text",{attrs:{modifier:"heading-small-static"}},[e._v("Static heading-small as p")])],2)},staticRenderFns:[]};t.a=n},"ok+X":function(e,t,r){"use strict";var n=r("s5Xf");r.n(n);t.a={name:"paragraphs",components:{CdrText:n.CdrText}}},rUxH:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},s5Xf:function(e,t,r){!function(t,r){e.exports=r()}("undefined"!=typeof self&&self,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=2)}([function(e,t,r){"use strict";var n=r(1);t.a=n.a},function(e,t,r){"use strict";var n=r(6);t.a={name:"CdrText",mixins:[n.a],props:{tag:{type:String,default:"p"}},computed:{baseClass:function(){return"cdr-text"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);r.d(t,"CdrText",function(){return n.a})},function(e,t,r){"use strict";var n=r(4),i=r(0),s=r(7),a=Object(s.a)(i.a,n.a,n.b,!1,null,null,null);t.a=a.exports},function(e,t,r){"use strict";var n=r(5);r.d(t,"a",function(){return n.a}),r.d(t,"b",function(){return n.b})},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this.$createElement;return(this._self._c||e)(this.tag,{tag:"component",class:[this.modifierClass]},[this._t("default")],2)},i=[]},function(e,t,r){"use strict";t.a={props:{modifier:String},computed:{modifierClass:function(){var e=this,t=this.baseClass,r=this.modifier?this.modifier.split(" "):[],n=[];return this.$style?(n.push(this.moduleClass(t)),n=n.concat(r.map(function(r){return e.modifyClassName(t,r)}))):(n.push(""+t),n=n.concat(r.map(function(r){return e.modifyClassName(t,r)}))),n.join(" ")}},methods:{moduleClass:function(e){return this.$style[""+e]},modifyClassName:function(e,t){return this.$style?this.moduleClass(e+"--"+t):e+"--"+t}}}},function(e,t,r){"use strict";t.a=function(e,t,r,n,i,s,a,o){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=r,d._compiled=!0),n&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=c):i&&(c=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(e,t){return c.call(t),u(e,t)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:d}}}])})},v40N:function(e,t,r){var n=r("rUxH");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r("rjj0")("7baac457",n,!0,{sourceMap:!1})}});