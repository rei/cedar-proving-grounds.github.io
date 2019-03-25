webpackJsonp([4],{"3IRH":function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"7YgM":function(t,n){t.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt --hostname 0.0.0.0","dev-ssr":"cross-env NODE_ENV=dev nuxt generate && nuxt start",build:"cross-env NODE_ENV=production nuxt build",start:"nuxt start",generate:"cross-env NODE_ENV=production nuxt generate","multi-version":"node ./multi-version"},dependencies:{"@nuxtjs/axios":"^5.3.2","@nuxtjs/proxy":"^1.1.2","@rei/cdr-accordion":"1.0.2","@rei/cdr-assets":"0.3.0",nuxt:"^1.0.0",underscore:"^1.9.1","vue-js-toggle-button":"^1.3.0",vuex:"^3.0.1"},devDependencies:{"@rei/cdr-tokens":"0.1.8","babel-preset-stage-2":"^6.24.1","cross-env":"^5.0.1","download-npm-package":"^3.1.12","fs-extra":"^7.0.0",lodash:"^4.17.11","node-sass":"^4.9.3","sass-loader":"^7.1.0",semver:"^5.5.1"}}},ObYY:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("rdoi"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,function(){return r[t]})}(o);var a=e("nbzT"),u=!1;var c=function(t){u||e("duSN")},s=e("VU/8")(i.a,a.a,!1,c,null,null);s.options.__file="pages/testcomponents/data-table/starwars/index.vue",n.default=s.exports},RfRi:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,".table-examples-wrapper{padding:10px}.table-examples-wrapper>div{margin-bottom:40px}",""])},duSN:function(t,n,e){var r=e("RfRi");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("22f7e40a",r,!1,{sourceMap:!1})},g0ZV:function(t,n,e){!function(n,e){t.exports=e()}("undefined"!=typeof self&&self,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=6)}([function(t,n,e){"use strict";var r=e(1);n.a=r.a},function(t,n,e){"use strict";var r=e(10),i=e(12),o=e.n(i);n.a={name:"CdrDataTable",mixins:[r.a],props:{id:{type:String,required:!1},colHeaders:{type:[Array,Boolean],default:!1},rowHeaders:{type:[Array,Boolean],default:!1},rowData:{type:Array,default:function(){return[]}},keyOrder:{type:Array,default:function(){return[]}},caption:{type:String,required:!1},constrainWidth:{type:Boolean,default:!0}},data:function(){return{cols:0,clientWidth:0,scrollWidth:0,hasColHeaders:!1,hasRowHeaders:!1,headerRowHeight:0,rowHeights:null}},computed:{baseClass:function(){return"cdr-data-table"},lockedCol:function(){return this.rowData.length>0&&this.cols>2&&this.hasRowHeaders},isScrolling:function(){return this.scrollWidth>this.clientWidth&&this.lockedCol},headerRowAlignHeight:function(){return this.headerRowHeight?this.headerRowHeight+1+"px":this.headerRowHeight}},mounted:function(){var t=this;this.hasColHeaders="boolean"==typeof this.colHeaders?this.colHeaders:this.colHeaders.length>0,this.hasRowHeaders="boolean"==typeof this.rowHeaders?this.rowHeaders:this.rowHeaders.length>0,this.rowData.length>0&&(this.cols=this.$refs["row-0"][0].children.length),this.lockedCol&&(window.addEventListener("resize",o()(function(){t.rowHeights=null,t.$nextTick(function(){t.checkScroll(),t.setRowsContentHeight()})},250)),this.$nextTick(function(){t.checkScroll(),t.setRowsContentHeight()}))},methods:{checkScroll:function(){var t=this.$refs["scroll-container"];void 0!==t&&(this.clientWidth=t.clientWidth,this.scrollWidth=t.scrollWidth)},getCellContent:function(t,n){return t[n]||""},setRowsContentHeight:function(){for(var t=[],n=0;n<this.rowData.length;n+=1){var e={th:this.$refs["row-"+n][0].children[0].offsetHeight||1,td:this.$refs["row-"+n][0].children[1].offsetHeight||0};t.push(e)}this.hasColHeaders&&(this.headerRowHeight=this.$refs["row-col-headers"].children[1].offsetHeight),this.rowHeights=t},getRowAlignHeight:function(t,n){if(null===this.rowHeights)return null;var e=this.rowHeights[n];if(!e||e.th-e.td==1)return null;var r=e.th>e.td?"td":"th";return t!==r?null:"td"===r?e.th-1+"px":e.td+1+"px"}}}},function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},function(t,n,e){var r=e(14),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,n,e){var r=e(3).Symbol;t.exports=r},function(t,n){t.exports={"cdr-data-table":"cdr-data-table_1.1.0-alpha.4","cdr-data-table__caption":"cdr-data-table__caption_1.1.0-alpha.4","cdr-data-table__scroll-container":"cdr-data-table__scroll-container_1.1.0-alpha.4","cdr-data-table__content":"cdr-data-table__content_1.1.0-alpha.4","align-row-header-content":"align-row-header-content_1.1.0-alpha.4","cdr-data-table--borderless":"cdr-data-table--borderless_1.1.0-alpha.4","cdr-data-table--compact":"cdr-data-table--compact_1.1.0-alpha.4"}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(7);e.d(n,"CdrDataTable",function(){return r.a})},function(t,n,e){"use strict";var r=e(8),i=e(0),o=e(22),a=e(23),u=Object(a.a)(i.a,r.a,r.b,!1,function(t){this.$style=o.default.locals||o.default},null,null);n.a=u.exports},function(t,n,e){"use strict";var r=e(9);e.d(n,"a",function(){return r.a}),e.d(n,"b",function(){return r.b})},function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i});var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:[t.modifierClass]},[t.caption?e("span",{class:t.$style["cdr-data-table__caption"],attrs:{"aria-hidden":"true"}},[t._v("\n    "+t._s(t.caption)+"\n  ")]):t._e(),t._v(" "),e("div",{ref:"scroll-container",class:[t.$style["cdr-data-table__scroll-container"],{"locked-col":t.lockedCol},{"is-scrolling":t.isScrolling}]},[e("table",{class:[t.$style["cdr-data-table__content"],{"constrain-width":t.constrainWidth}],attrs:{id:t.id?t.id:null}},[t.caption?e("caption",{staticClass:"cdr-sr-only"},[t._v("\n        "+t._s(t.caption)+"\n      ")]):t._e(),t._v(" "),t.hasColHeaders?e("thead",[t._t("thead",[e("tr",{ref:"row-col-headers"},[e("th",{directives:[{name:"show",rawName:"v-show",value:t.hasRowHeaders,expression:"hasRowHeaders"}],staticClass:"empty",style:{height:t.headerRowAlignHeight},attrs:{scope:"col"}}),t._v(" "),t._l(t.colHeaders,function(n,r){return e("th",{key:"header-row-col-"+r,attrs:{scope:"col"}},[t._v("\n              "+t._s(n)+"\n            ")])})],2)])],2):t._e(),t._v(" "),e("tbody",{ref:"table-body"},[t._t("tbody",t._l(t.rowData,function(n,r){return e("tr",{key:"row-"+r,ref:"row-"+r,refInFor:!0},[t.hasRowHeaders?e("th",{ref:"row-"+r+"-th",refInFor:!0,class:t.$style["align-row-header-content"],style:{height:t.getRowAlignHeight("th",r)},attrs:{scope:"row"}},[t._v("\n              "+t._s(t.rowHeaders[r])+"\n            ")]):t._e(),t._v(" "),t._l(t.keyOrder,function(i,o){return e("td",{key:"td-"+o+"-"+i,style:{height:t.getRowAlignHeight("td",r)}},[t._v("\n              "+t._s(t.getCellContent(n,i))+"\n            ")])})],2)}))],2)])])])},i=[]},function(t,n,e){"use strict";var r=e(11);n.a={mixins:[r.a],props:{modifier:String},computed:{modifierClass:function(){return this.buildClass("modifier")}}}},function(t,n,e){"use strict";n.a={methods:{buildClass:function(t){var n=this,e="cdr";this.baseClass&&(e=this.baseClass);var r=e,i=this[t]?this[t].split(" "):[],o=[];return this.$style?(o.push(this.moduleClass(r)),o=o.concat(i.map(function(t){return n.modifyClassName(r,t)}))):(o.push(""+r),o=o.concat(i.map(function(t){return n.modifyClassName(r,t)}))),o.join(" ")},moduleClass:function(t){return this.$style[""+t]},modifyClassName:function(t,n){return this.$style?this.moduleClass(t+"--"+n):t+"--"+n}}}},function(t,n,e){var r=e(2),i=e(13),o=e(16),a=Math.max,u=Math.min;t.exports=function(t,n,e){var c,s,l,f,d,p,h=0,v=!1,y=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=c,r=s;return c=s=void 0,h=n,f=t.apply(r,e)}function m(t){var e=t-p;return void 0===p||e>=n||e<0||y&&t-h>=l}function _(){var t=i();if(m(t))return w(t);d=setTimeout(_,function(t){var e=n-(t-p);return y?u(e,l-(t-h)):e}(t))}function w(t){return d=void 0,g&&c?b(t):(c=s=void 0,f)}function x(){var t=i(),e=m(t);if(c=arguments,s=this,p=t,e){if(void 0===d)return function(t){return h=t,d=setTimeout(_,n),v?b(t):f}(p);if(y)return d=setTimeout(_,n),b(p)}return void 0===d&&(d=setTimeout(_,n)),f}return n=o(n)||0,r(e)&&(v=!!e.leading,l=(y="maxWait"in e)?a(o(e.maxWait)||0,n):l,g="trailing"in e?!!e.trailing:g),x.cancel=function(){void 0!==d&&clearTimeout(d),h=0,c=p=s=d=void 0},x.flush=function(){return void 0===d?f:w(i())},x}},function(t,n,e){var r=e(3);t.exports=function(){return r.Date.now()}},function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(n,e(15))},function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(2),i=e(17),o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(r(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var e=u.test(t);return e||c.test(t)?s(t.slice(2),e?2:8):a.test(t)?NaN:+t}},function(t,n,e){var r=e(18),i=e(21);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},function(t,n,e){var r=e(4),i=e(19),o=e(20),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t)}},function(t,n,e){var r=e(4),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var n=o.call(t,u),e=t[u];try{t[u]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(n?t[u]=e:delete t[u]),i}},function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,n,e){"use strict";var r=e(5),i=e.n(r);n.default=i.a},function(t,n,e){"use strict";n.a=function(t,n,e,r,i,o,a,u){var c,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=c):i&&(c=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(s.functional){s._injectStyles=c;var l=s.render;s.render=function(t,n){return c.call(n),l(t,n)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:s}}}])})},nbzT:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("Star Wars API using DataTables version: "+t._s(t.version))]),e("cdr-data-table",{attrs:{"col-headers":!0,"row-headers":!0,caption:"Table with data fed from REST API using slots",id:"slots-example"}},[e("template",{slot:"thead"},[e("tr",[e("th",{staticClass:"empty",attrs:{scope:"col"}}),t._l(t.getColHeaders,function(n){return e("th",[t._v("\n            "+t._s(n)+"\n        ")])})],2)]),e("template",{slot:"tbody"},t._l(t.characters,function(n,r){return e("tr",{key:"tr_"+r},[e("th",[t._v(t._s(n.name))]),t._l(n,function(n,r,i){return e("td",{key:i},[t._v("\n          "+t._s(n)+"\n        ")])})],2)}))],2),e("cdr-data-table",{attrs:{"col-headers":t.getColHeaders,"row-headers":t.getRowHeaders,"row-data":t.characters,"key-order":t.getColHeaders,caption:"REST data fed using cdr api only",id:"cdr-data-table-api"}})],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};n.a=i},rdLu:function(t,n,e){(function(t,e){var r;!function(){var i="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t||this||{},o=i._,a=Array.prototype,u=Object.prototype,c="undefined"!=typeof Symbol?Symbol.prototype:null,s=a.push,l=a.slice,f=u.toString,d=u.hasOwnProperty,p=Array.isArray,h=Object.keys,v=Object.create,y=function(){},g=function(t){return t instanceof g?t:this instanceof g?void(this._wrapped=t):new g(t)};void 0===n||n.nodeType?i._=g:(void 0!==e&&!e.nodeType&&e.exports&&(n=e.exports=g),n._=g),g.VERSION="1.9.1";var b,m=function(t,n,e){if(void 0===n)return t;switch(null==e?3:e){case 1:return function(e){return t.call(n,e)};case 3:return function(e,r,i){return t.call(n,e,r,i)};case 4:return function(e,r,i,o){return t.call(n,e,r,i,o)}}return function(){return t.apply(n,arguments)}},_=function(t,n,e){return g.iteratee!==b?g.iteratee(t,n):null==t?g.identity:g.isFunction(t)?m(t,n,e):g.isObject(t)&&!g.isArray(t)?g.matcher(t):g.property(t)};g.iteratee=b=function(t,n){return _(t,n,1/0)};var w=function(t,n){return n=null==n?t.length-1:+n,function(){for(var e=Math.max(arguments.length-n,0),r=Array(e),i=0;i<e;i++)r[i]=arguments[i+n];switch(n){case 0:return t.call(this,r);case 1:return t.call(this,arguments[0],r);case 2:return t.call(this,arguments[0],arguments[1],r)}var o=Array(n+1);for(i=0;i<n;i++)o[i]=arguments[i];return o[n]=r,t.apply(this,o)}},x=function(t){if(!g.isObject(t))return{};if(v)return v(t);y.prototype=t;var n=new y;return y.prototype=null,n},j=function(t){return function(n){return null==n?void 0:n[t]}},O=function(t,n){return null!=t&&d.call(t,n)},k=function(t,n){for(var e=n.length,r=0;r<e;r++){if(null==t)return;t=t[n[r]]}return e?t:void 0},S=Math.pow(2,53)-1,C=j("length"),H=function(t){var n=C(t);return"number"==typeof n&&n>=0&&n<=S};g.each=g.forEach=function(t,n,e){var r,i;if(n=m(n,e),H(t))for(r=0,i=t.length;r<i;r++)n(t[r],r,t);else{var o=g.keys(t);for(r=0,i=o.length;r<i;r++)n(t[o[r]],o[r],t)}return t},g.map=g.collect=function(t,n,e){n=_(n,e);for(var r=!H(t)&&g.keys(t),i=(r||t).length,o=Array(i),a=0;a<i;a++){var u=r?r[a]:a;o[a]=n(t[u],u,t)}return o};var A=function(t){return function(n,e,r,i){var o=arguments.length>=3;return function(n,e,r,i){var o=!H(n)&&g.keys(n),a=(o||n).length,u=t>0?0:a-1;for(i||(r=n[o?o[u]:u],u+=t);u>=0&&u<a;u+=t){var c=o?o[u]:u;r=e(r,n[c],c,n)}return r}(n,m(e,i,4),r,o)}};g.reduce=g.foldl=g.inject=A(1),g.reduceRight=g.foldr=A(-1),g.find=g.detect=function(t,n,e){var r=(H(t)?g.findIndex:g.findKey)(t,n,e);if(void 0!==r&&-1!==r)return t[r]},g.filter=g.select=function(t,n,e){var r=[];return n=_(n,e),g.each(t,function(t,e,i){n(t,e,i)&&r.push(t)}),r},g.reject=function(t,n,e){return g.filter(t,g.negate(_(n)),e)},g.every=g.all=function(t,n,e){n=_(n,e);for(var r=!H(t)&&g.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(!n(t[a],a,t))return!1}return!0},g.some=g.any=function(t,n,e){n=_(n,e);for(var r=!H(t)&&g.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(n(t[a],a,t))return!0}return!1},g.contains=g.includes=g.include=function(t,n,e,r){return H(t)||(t=g.values(t)),("number"!=typeof e||r)&&(e=0),g.indexOf(t,n,e)>=0},g.invoke=w(function(t,n,e){var r,i;return g.isFunction(n)?i=n:g.isArray(n)&&(r=n.slice(0,-1),n=n[n.length-1]),g.map(t,function(t){var o=i;if(!o){if(r&&r.length&&(t=k(t,r)),null==t)return;o=t[n]}return null==o?o:o.apply(t,e)})}),g.pluck=function(t,n){return g.map(t,g.property(n))},g.where=function(t,n){return g.filter(t,g.matcher(n))},g.findWhere=function(t,n){return g.find(t,g.matcher(n))},g.max=function(t,n,e){var r,i,o=-1/0,a=-1/0;if(null==n||"number"==typeof n&&"object"!=typeof t[0]&&null!=t)for(var u=0,c=(t=H(t)?t:g.values(t)).length;u<c;u++)null!=(r=t[u])&&r>o&&(o=r);else n=_(n,e),g.each(t,function(t,e,r){((i=n(t,e,r))>a||i===-1/0&&o===-1/0)&&(o=t,a=i)});return o},g.min=function(t,n,e){var r,i,o=1/0,a=1/0;if(null==n||"number"==typeof n&&"object"!=typeof t[0]&&null!=t)for(var u=0,c=(t=H(t)?t:g.values(t)).length;u<c;u++)null!=(r=t[u])&&r<o&&(o=r);else n=_(n,e),g.each(t,function(t,e,r){((i=n(t,e,r))<a||i===1/0&&o===1/0)&&(o=t,a=i)});return o},g.shuffle=function(t){return g.sample(t,1/0)},g.sample=function(t,n,e){if(null==n||e)return H(t)||(t=g.values(t)),t[g.random(t.length-1)];var r=H(t)?g.clone(t):g.values(t),i=C(r);n=Math.max(Math.min(n,i),0);for(var o=i-1,a=0;a<n;a++){var u=g.random(a,o),c=r[a];r[a]=r[u],r[u]=c}return r.slice(0,n)},g.sortBy=function(t,n,e){var r=0;return n=_(n,e),g.pluck(g.map(t,function(t,e,i){return{value:t,index:r++,criteria:n(t,e,i)}}).sort(function(t,n){var e=t.criteria,r=n.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(e<r||void 0===r)return-1}return t.index-n.index}),"value")};var R=function(t,n){return function(e,r,i){var o=n?[[],[]]:{};return r=_(r,i),g.each(e,function(n,i){var a=r(n,i,e);t(o,n,a)}),o}};g.groupBy=R(function(t,n,e){O(t,e)?t[e].push(n):t[e]=[n]}),g.indexBy=R(function(t,n,e){t[e]=n}),g.countBy=R(function(t,n,e){O(t,e)?t[e]++:t[e]=1});var N=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;g.toArray=function(t){return t?g.isArray(t)?l.call(t):g.isString(t)?t.match(N):H(t)?g.map(t,g.identity):g.values(t):[]},g.size=function(t){return null==t?0:H(t)?t.length:g.keys(t).length},g.partition=R(function(t,n,e){t[e?0:1].push(n)},!0),g.first=g.head=g.take=function(t,n,e){return null==t||t.length<1?null==n?void 0:[]:null==n||e?t[0]:g.initial(t,t.length-n)},g.initial=function(t,n,e){return l.call(t,0,Math.max(0,t.length-(null==n||e?1:n)))},g.last=function(t,n,e){return null==t||t.length<1?null==n?void 0:[]:null==n||e?t[t.length-1]:g.rest(t,Math.max(0,t.length-n))},g.rest=g.tail=g.drop=function(t,n,e){return l.call(t,null==n||e?1:n)},g.compact=function(t){return g.filter(t,Boolean)};var T=function(t,n,e,r){for(var i=(r=r||[]).length,o=0,a=C(t);o<a;o++){var u=t[o];if(H(u)&&(g.isArray(u)||g.isArguments(u)))if(n)for(var c=0,s=u.length;c<s;)r[i++]=u[c++];else T(u,n,e,r),i=r.length;else e||(r[i++]=u)}return r};g.flatten=function(t,n){return T(t,n,!1)},g.without=w(function(t,n){return g.difference(t,n)}),g.uniq=g.unique=function(t,n,e,r){g.isBoolean(n)||(r=e,e=n,n=!1),null!=e&&(e=_(e,r));for(var i=[],o=[],a=0,u=C(t);a<u;a++){var c=t[a],s=e?e(c,a,t):c;n&&!e?(a&&o===s||i.push(c),o=s):e?g.contains(o,s)||(o.push(s),i.push(c)):g.contains(i,c)||i.push(c)}return i},g.union=w(function(t){return g.uniq(T(t,!0,!0))}),g.intersection=function(t){for(var n=[],e=arguments.length,r=0,i=C(t);r<i;r++){var o=t[r];if(!g.contains(n,o)){var a;for(a=1;a<e&&g.contains(arguments[a],o);a++);a===e&&n.push(o)}}return n},g.difference=w(function(t,n){return n=T(n,!0,!0),g.filter(t,function(t){return!g.contains(n,t)})}),g.unzip=function(t){for(var n=t&&g.max(t,C).length||0,e=Array(n),r=0;r<n;r++)e[r]=g.pluck(t,r);return e},g.zip=w(g.unzip),g.object=function(t,n){for(var e={},r=0,i=C(t);r<i;r++)n?e[t[r]]=n[r]:e[t[r][0]]=t[r][1];return e};var E=function(t){return function(n,e,r){e=_(e,r);for(var i=C(n),o=t>0?0:i-1;o>=0&&o<i;o+=t)if(e(n[o],o,n))return o;return-1}};g.findIndex=E(1),g.findLastIndex=E(-1),g.sortedIndex=function(t,n,e,r){for(var i=(e=_(e,r,1))(n),o=0,a=C(t);o<a;){var u=Math.floor((o+a)/2);e(t[u])<i?o=u+1:a=u}return o};var M=function(t,n,e){return function(r,i,o){var a=0,u=C(r);if("number"==typeof o)t>0?a=o>=0?o:Math.max(o+u,a):u=o>=0?Math.min(o+1,u):o+u+1;else if(e&&o&&u)return r[o=e(r,i)]===i?o:-1;if(i!=i)return(o=n(l.call(r,a,u),g.isNaN))>=0?o+a:-1;for(o=t>0?a:u-1;o>=0&&o<u;o+=t)if(r[o]===i)return o;return-1}};g.indexOf=M(1,g.findIndex,g.sortedIndex),g.lastIndexOf=M(-1,g.findLastIndex),g.range=function(t,n,e){null==n&&(n=t||0,t=0),e||(e=n<t?-1:1);for(var r=Math.max(Math.ceil((n-t)/e),0),i=Array(r),o=0;o<r;o++,t+=e)i[o]=t;return i},g.chunk=function(t,n){if(null==n||n<1)return[];for(var e=[],r=0,i=t.length;r<i;)e.push(l.call(t,r,r+=n));return e};var $=function(t,n,e,r,i){if(!(r instanceof n))return t.apply(e,i);var o=x(t.prototype),a=t.apply(o,i);return g.isObject(a)?a:o};g.bind=w(function(t,n,e){if(!g.isFunction(t))throw new TypeError("Bind must be called on a function");var r=w(function(i){return $(t,r,n,this,e.concat(i))});return r}),g.partial=w(function(t,n){var e=g.partial.placeholder,r=function(){for(var i=0,o=n.length,a=Array(o),u=0;u<o;u++)a[u]=n[u]===e?arguments[i++]:n[u];for(;i<arguments.length;)a.push(arguments[i++]);return $(t,r,this,this,a)};return r}),g.partial.placeholder=g,g.bindAll=w(function(t,n){var e=(n=T(n,!1,!1)).length;if(e<1)throw new Error("bindAll must be passed function names");for(;e--;){var r=n[e];t[r]=g.bind(t[r],t)}}),g.memoize=function(t,n){var e=function(r){var i=e.cache,o=""+(n?n.apply(this,arguments):r);return O(i,o)||(i[o]=t.apply(this,arguments)),i[o]};return e.cache={},e},g.delay=w(function(t,n,e){return setTimeout(function(){return t.apply(null,e)},n)}),g.defer=g.partial(g.delay,g,1),g.throttle=function(t,n,e){var r,i,o,a,u=0;e||(e={});var c=function(){u=!1===e.leading?0:g.now(),r=null,a=t.apply(i,o),r||(i=o=null)},s=function(){var s=g.now();u||!1!==e.leading||(u=s);var l=n-(s-u);return i=this,o=arguments,l<=0||l>n?(r&&(clearTimeout(r),r=null),u=s,a=t.apply(i,o),r||(i=o=null)):r||!1===e.trailing||(r=setTimeout(c,l)),a};return s.cancel=function(){clearTimeout(r),u=0,r=i=o=null},s},g.debounce=function(t,n,e){var r,i,o=function(n,e){r=null,e&&(i=t.apply(n,e))},a=w(function(a){if(r&&clearTimeout(r),e){var u=!r;r=setTimeout(o,n),u&&(i=t.apply(this,a))}else r=g.delay(o,n,this,a);return i});return a.cancel=function(){clearTimeout(r),r=null},a},g.wrap=function(t,n){return g.partial(n,t)},g.negate=function(t){return function(){return!t.apply(this,arguments)}},g.compose=function(){var t=arguments,n=t.length-1;return function(){for(var e=n,r=t[n].apply(this,arguments);e--;)r=t[e].call(this,r);return r}},g.after=function(t,n){return function(){if(--t<1)return n.apply(this,arguments)}},g.before=function(t,n){var e;return function(){return--t>0&&(e=n.apply(this,arguments)),t<=1&&(n=null),e}},g.once=g.partial(g.before,2),g.restArguments=w;var D=!{toString:null}.propertyIsEnumerable("toString"),F=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],I=function(t,n){var e=F.length,r=t.constructor,i=g.isFunction(r)&&r.prototype||u,o="constructor";for(O(t,o)&&!g.contains(n,o)&&n.push(o);e--;)(o=F[e])in t&&t[o]!==i[o]&&!g.contains(n,o)&&n.push(o)};g.keys=function(t){if(!g.isObject(t))return[];if(h)return h(t);var n=[];for(var e in t)O(t,e)&&n.push(e);return D&&I(t,n),n},g.allKeys=function(t){if(!g.isObject(t))return[];var n=[];for(var e in t)n.push(e);return D&&I(t,n),n},g.values=function(t){for(var n=g.keys(t),e=n.length,r=Array(e),i=0;i<e;i++)r[i]=t[n[i]];return r},g.mapObject=function(t,n,e){n=_(n,e);for(var r=g.keys(t),i=r.length,o={},a=0;a<i;a++){var u=r[a];o[u]=n(t[u],u,t)}return o},g.pairs=function(t){for(var n=g.keys(t),e=n.length,r=Array(e),i=0;i<e;i++)r[i]=[n[i],t[n[i]]];return r},g.invert=function(t){for(var n={},e=g.keys(t),r=0,i=e.length;r<i;r++)n[t[e[r]]]=e[r];return n},g.functions=g.methods=function(t){var n=[];for(var e in t)g.isFunction(t[e])&&n.push(e);return n.sort()};var W=function(t,n){return function(e){var r=arguments.length;if(n&&(e=Object(e)),r<2||null==e)return e;for(var i=1;i<r;i++)for(var o=arguments[i],a=t(o),u=a.length,c=0;c<u;c++){var s=a[c];n&&void 0!==e[s]||(e[s]=o[s])}return e}};g.extend=W(g.allKeys),g.extendOwn=g.assign=W(g.keys),g.findKey=function(t,n,e){n=_(n,e);for(var r,i=g.keys(t),o=0,a=i.length;o<a;o++)if(n(t[r=i[o]],r,t))return r};var P,B,V=function(t,n,e){return n in e};g.pick=w(function(t,n){var e={},r=n[0];if(null==t)return e;g.isFunction(r)?(n.length>1&&(r=m(r,n[1])),n=g.allKeys(t)):(r=V,n=T(n,!1,!1),t=Object(t));for(var i=0,o=n.length;i<o;i++){var a=n[i],u=t[a];r(u,a,t)&&(e[a]=u)}return e}),g.omit=w(function(t,n){var e,r=n[0];return g.isFunction(r)?(r=g.negate(r),n.length>1&&(e=n[1])):(n=g.map(T(n,!1,!1),String),r=function(t,e){return!g.contains(n,e)}),g.pick(t,r,e)}),g.defaults=W(g.allKeys,!0),g.create=function(t,n){var e=x(t);return n&&g.extendOwn(e,n),e},g.clone=function(t){return g.isObject(t)?g.isArray(t)?t.slice():g.extend({},t):t},g.tap=function(t,n){return n(t),t},g.isMatch=function(t,n){var e=g.keys(n),r=e.length;if(null==t)return!r;for(var i=Object(t),o=0;o<r;o++){var a=e[o];if(n[a]!==i[a]||!(a in i))return!1}return!0},P=function(t,n,e,r){if(t===n)return 0!==t||1/t==1/n;if(null==t||null==n)return!1;if(t!=t)return n!=n;var i=typeof t;return("function"===i||"object"===i||"object"==typeof n)&&B(t,n,e,r)},B=function(t,n,e,r){t instanceof g&&(t=t._wrapped),n instanceof g&&(n=n._wrapped);var i=f.call(t);if(i!==f.call(n))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+n;case"[object Number]":return+t!=+t?+n!=+n:0==+t?1/+t==1/n:+t==+n;case"[object Date]":case"[object Boolean]":return+t==+n;case"[object Symbol]":return c.valueOf.call(t)===c.valueOf.call(n)}var o="[object Array]"===i;if(!o){if("object"!=typeof t||"object"!=typeof n)return!1;var a=t.constructor,u=n.constructor;if(a!==u&&!(g.isFunction(a)&&a instanceof a&&g.isFunction(u)&&u instanceof u)&&"constructor"in t&&"constructor"in n)return!1}e=e||[],r=r||[];for(var s=e.length;s--;)if(e[s]===t)return r[s]===n;if(e.push(t),r.push(n),o){if((s=t.length)!==n.length)return!1;for(;s--;)if(!P(t[s],n[s],e,r))return!1}else{var l,d=g.keys(t);if(s=d.length,g.keys(n).length!==s)return!1;for(;s--;)if(l=d[s],!O(n,l)||!P(t[l],n[l],e,r))return!1}return e.pop(),r.pop(),!0},g.isEqual=function(t,n){return P(t,n)},g.isEmpty=function(t){return null==t||(H(t)&&(g.isArray(t)||g.isString(t)||g.isArguments(t))?0===t.length:0===g.keys(t).length)},g.isElement=function(t){return!(!t||1!==t.nodeType)},g.isArray=p||function(t){return"[object Array]"===f.call(t)},g.isObject=function(t){var n=typeof t;return"function"===n||"object"===n&&!!t},g.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(t){g["is"+t]=function(n){return f.call(n)==="[object "+t+"]"}}),g.isArguments(arguments)||(g.isArguments=function(t){return O(t,"callee")});var z=i.document&&i.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof z&&(g.isFunction=function(t){return"function"==typeof t||!1}),g.isFinite=function(t){return!g.isSymbol(t)&&isFinite(t)&&!isNaN(parseFloat(t))},g.isNaN=function(t){return g.isNumber(t)&&isNaN(t)},g.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===f.call(t)},g.isNull=function(t){return null===t},g.isUndefined=function(t){return void 0===t},g.has=function(t,n){if(!g.isArray(n))return O(t,n);for(var e=n.length,r=0;r<e;r++){var i=n[r];if(null==t||!d.call(t,i))return!1;t=t[i]}return!!e},g.noConflict=function(){return i._=o,this},g.identity=function(t){return t},g.constant=function(t){return function(){return t}},g.noop=function(){},g.property=function(t){return g.isArray(t)?function(n){return k(n,t)}:j(t)},g.propertyOf=function(t){return null==t?function(){}:function(n){return g.isArray(n)?k(t,n):t[n]}},g.matcher=g.matches=function(t){return t=g.extendOwn({},t),function(n){return g.isMatch(n,t)}},g.times=function(t,n,e){var r=Array(Math.max(0,t));n=m(n,e,1);for(var i=0;i<t;i++)r[i]=n(i);return r},g.random=function(t,n){return null==n&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))},g.now=Date.now||function(){return(new Date).getTime()};var q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},K=g.invert(q),L=function(t){var n=function(n){return t[n]},e="(?:"+g.keys(t).join("|")+")",r=RegExp(e),i=RegExp(e,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,n):t}};g.escape=L(q),g.unescape=L(K),g.result=function(t,n,e){g.isArray(n)||(n=[n]);var r=n.length;if(!r)return g.isFunction(e)?e.call(t):e;for(var i=0;i<r;i++){var o=null==t?void 0:t[n[i]];void 0===o&&(o=e,i=r),t=g.isFunction(o)?o.call(t):o}return t};var U=0;g.uniqueId=function(t){var n=++U+"";return t?t+n:n},g.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var Y=/(.)^/,Z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},J=/\\|'|\r|\n|\u2028|\u2029/g,X=function(t){return"\\"+Z[t]};g.template=function(t,n,e){!n&&e&&(n=e),n=g.defaults({},n,g.templateSettings);var r,i=RegExp([(n.escape||Y).source,(n.interpolate||Y).source,(n.evaluate||Y).source].join("|")+"|$","g"),o=0,a="__p+='";t.replace(i,function(n,e,r,i,u){return a+=t.slice(o,u).replace(J,X),o=u+n.length,e?a+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":i&&(a+="';\n"+i+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(n.variable||"obj","_",a)}catch(t){throw t.source=a,t}var u=function(t){return r.call(this,t,g)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},g.chain=function(t){var n=g(t);return n._chain=!0,n};var G=function(t,n){return t._chain?g(n).chain():n};g.mixin=function(t){return g.each(g.functions(t),function(n){var e=g[n]=t[n];g.prototype[n]=function(){var t=[this._wrapped];return s.apply(t,arguments),G(this,e.apply(g,t))}}),g},g.mixin(g),g.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=a[t];g.prototype[t]=function(){var e=this._wrapped;return n.apply(e,arguments),"shift"!==t&&"splice"!==t||0!==e.length||delete e[0],G(this,e)}}),g.each(["concat","join","slice"],function(t){var n=a[t];g.prototype[t]=function(){return G(this,n.apply(this._wrapped,arguments))}}),g.prototype.value=function(){return this._wrapped},g.prototype.valueOf=g.prototype.toJSON=g.prototype.value,g.prototype.toString=function(){return String(this._wrapped)},void 0===(r=function(){return g}.apply(n,[]))||(e.exports=r)}()}).call(n,e("DuR2"),e("3IRH")(t))},rdoi:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("g0ZV"),i=e("mtWM"),o=e("rdLu"),a=e("7YgM").dependencies;n.default={name:"swapi",components:{CdrDataTable:r.CdrDataTable},data:function(){return{version:a["@rei/cdr-data-table"],characters:[{}],hasData:!1}},computed:{getColHeaders:function(){return this.hasData?o.allKeys(this.characters[0]):[]},getRowHeaders:function(){return this.hasData?this.characters.map(function(t){return t.name}):[]}},mounted:function(){var t=this;i.get("https://swapi.co/api/people").then(function(n){return t.characters=n.data.results}).then(this.hasData=!0)}}}});