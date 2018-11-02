webpackJsonp([8],{"0E73":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("4pC+"),n=r.n(a);for(var o in a)"default"!==o&&function(t){r.d(e,t,function(){return a[t]})}(o);var s=r("i7k+");var i=function(t){r("fe1z")},l=r("VU/8")(n.a,s.a,!1,i,null,null);e.default=l.exports},"4pC+":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("g0ZV"),n=function(t){return t&&t.__esModule?t:{default:t}}(r("fyqT"));e.default={name:"Auto",components:{CdrDataTable:a.CdrDataTable},data:function(){return n.default}}},"7YgM":function(t,e){t.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt","dev-ssr":"cross-env NODE_ENV=dev nuxt generate && nuxt start",build:"cross-env NODE_ENV=production nuxt build",start:"nuxt start",generate:"cross-env NODE_ENV=production nuxt generate","multi-version":"node ./multi-version"},dependencies:{"@nuxtjs/axios":"^5.3.2","@nuxtjs/proxy":"^1.1.2","@rei/cdr-accordion":"^1.0.2-alpha.0","@rei/cdr-activity-card":"0.1.3","@rei/cdr-assets":"1.0.0-alpha.0","@rei/cdr-breadcrumb":"1.0.1-alpha.0","@rei/cdr-button":"^1.0.3-alpha.0","@rei/cdr-caption":"^1.0.0","@rei/cdr-card":"^0.2.0","@rei/cdr-checkbox":"^1.0.0","@rei/cdr-cta":"1.0.3-alpha.4","@rei/cdr-data-table":"0.1.0-alpha.3","@rei/cdr-grid":"1.0.0","@rei/cdr-icon":"^1.0.0","@rei/cdr-img":"^1.0.1","@rei/cdr-input":"1.0.0-alpha.1","@rei/cdr-link":"^1.0.0","@rei/cdr-list":"^1.0.1","@rei/cdr-media-object":"^0.1.3","@rei/cdr-pagination":"0.1.2-alpha.2","@rei/cdr-quote":"^1.0.0","@rei/cdr-radio":"1.0.0","@rei/cdr-rating":"1.0.0-alpha.3","@rei/cdr-select":"^0.1.3","@rei/cdr-tabs":"1.0.0-alpha.63","@rei/cdr-text":"1.0.2-alpha.0",nuxt:"^1.0.0","vue-js-toggle-button":"^1.3.0",vuex:"^3.0.1"},devDependencies:{"babel-preset-stage-2":"^6.24.1","cross-env":"^5.0.1","download-npm-package":"^3.1.12","fs-extra":"^7.0.0",lodash:"^4.17.11","node-sass":"^4.9.3","sass-loader":"^7.1.0",semver:"^5.5.1"}}},"84Us":function(t,e,r){var a=r("LrXZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("56e20b7f",a,!0,{sourceMap:!1})},"9eDK":function(t,e,r){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("DataTables version "+this._s(this.version))]),e("div",{staticClass:"table-container"},[e("auto-table"),e("manual-table")],1)])},staticRenderFns:[]};e.a=a},"Av+r":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("qIjY"),n=r.n(a);for(var o in a)"default"!==o&&function(t){r.d(e,t,function(){return a[t]})}(o);var s=r("9eDK"),i=r("VU/8")(n.a,s.a,!1,null,null,null);e.default=i.exports},LrXZ:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".table-examples-wrapper{padding:10px}.table-examples-wrapper>div{margin-bottom:40px}",""])},URks:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("u47f"),n=r.n(a);for(var o in a)"default"!==o&&function(t){r.d(e,t,function(){return a[t]})}(o);var s=r("WZFg");var i=function(t){r("84Us")},l=r("VU/8")(n.a,s.a,!1,i,null,null);e.default=l.exports},WZFg:function(t,e,r){"use strict";var a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-examples-wrapper"},[r("cdr-data-table",{attrs:{"col-headers":!0,"row-headers":!0,caption:"Table with data fed in",id:"manual-3-col"}},[r("template",{slot:"thead"},[r("tr",[r("th",{staticClass:"empty",attrs:{scope:"col"}}),t._l(t.tableData.books.headers,function(e,a){return r("th",{key:a},[t._v("\n          "+t._s(e)+"\n        ")])})],2)]),r("template",{slot:"tbody"},t._l(t.tableData.books.records,function(e,a){return r("tr",{key:"tr_"+a},[r("th",[t._v(t._s(e.rowheader))]),t._l(e,function(e,a,n){return"rowheader"!==a?r("td",{key:n},[t._v("\n          "+t._s(e)+"\n        ")]):t._e()})],2)}))],2),r("cdr-data-table",{attrs:{caption:"Scroll example","row-headers":!0,id:"manual-scroll"}},[r("template",{slot:"tbody"},t._l(t.tableData.scroll.records,function(e,a,n){return r("tr",{key:n+"_"+a},[r("th",[t._v(t._s(e.rowheader))]),t._l(e,function(e,a,n){return"rowheader"!==a?r("td",{key:a+"_"+n},[t._v("\n          "+t._s(e)+"\n        ")]):t._e()})],2)}))],2),r("cdr-data-table",{attrs:{modifier:"compact borderless",caption:"Full Manual - Compact & Borderless with a cell with large data",summary:"Summary",id:"full-manual"}},[r("template",{slot:"tbody"},[r("tr",[r("th",[t._v("Best Use")]),r("td",[t._v("Casual")])]),r("tr",[r("th",[t._v("Fabric")]),r("td",[t._v("Cotton canvas")])]),r("tr",[r("th",[t._v("Lining Fabric")]),r("td",[t._v("Polyester microfleece/nylon")])]),r("tr",[r("th",[t._v("“We are three wise men.” ")]),r("td",[t._v("No")])]),r("tr",[r("th",[t._v("Black Length")]),r("td",[t._v("“Well, what are you doing creeping around a cow shed at two o’clock in the morning? That doesn’t sound very wise to me.”")])]),r("tr",[r("th",[t._v("Weight")]),r("td",[t._v("Unavailable")])]),r("tr",[r("th",[t._v("Gender")]),r("td",[t._v("Men's")])]),r("tr",[r("th",[t._v("Number")]),r("td",{staticClass:"content-align-right"},[t._v("25")])])])],2)],1)},staticRenderFns:[]};e.a=a},fe1z:function(t,e,r){var a=r("qiY5");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("67bf5bc2",a,!0,{sourceMap:!1})},fyqT:function(t,e,r){"use strict";for(var a=["a","b","c","d","e","f","g","h"],n=[],o=function(t){var e={};a.forEach(function(t){e[t]=t}),e.rowheader="Row header",n.push(e)},s=0;s<2;s+=1)o();var i={dataCaption:"caption from a data table",colHeaders:["XS","S","M","L","XL","XXL","XXXL"],rowHeaders:["Chest","Sleeve Length","Waist","Hip","Inseam"],rowData:[{xs:"31.5 - 33",s:"35 - 38",m:"38 - 41",l:"42 - 45",xl:"46 - 49",xxl:"50 - 53",xxxl:"54-57"},{s:"33",m:"34",l:"35",xl:"35.5",xxl:"36",xxxl:"36.6",xs:"N/A"},{xs:"26.5 - 27.5",s:"28 - 30",m:"32 - 34",l:"36 - 38",xl:"40 - 42",xxl:"44 - 46",xxxl:"48 - 50"},{xs:"N/A",s:"35 - 37",m:"38 - 40",l:"41 - 43",xl:"44 - 46",xxl:"47 - 49",xxxl:"51 - 54"},{xs:"31",s:"32",m:"32",l:"32",xl:"32",xxl:"32",xxxl:"32"}],books:{headers:["Title","Year","Author"],records:[{title:"Book A",year:1823,author:"Mikey",rowheader:"It is I, Arthur, son of Uther Pendragon, from the castle of Camelot. King of the Britons, defeater of the Saxons, Sovereign of all England!"},{title:"Mountaineers Books Dirty Gourmet: Food For Your Outdoor Adventures",year:1532,author:"Joey",rowheader:"row 2"},{title:"Book E",year:1253,author:"Scotty Fleschenberger",rowheader:"row 3"}]},scroll:{headers:a,records:n}};t.exports.tableData=i},g0ZV:function(t,e,r){!function(e,r){t.exports=r()}("undefined"!=typeof self&&self,function(){return function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=6)}([function(t,e,r){"use strict";var a=r(1);e.a=a.a},function(t,e,r){"use strict";var a=r(10),n=r(12),o=r.n(n);e.a={name:"CdrDataTable",mixins:[a.a],props:{id:{type:String,required:!0},colHeaders:{type:[Array,Boolean],default:!1},rowHeaders:{type:[Array,Boolean],default:!1},rowData:{type:Array,required:!1},keyOrder:{type:Array,default:function(){return[]}},caption:{type:String,required:!1}},data:function(){return{cols:0,clientWidth:0,scrollWidth:0,hasColHeaders:!1,hasRowHeaders:!1}},computed:{baseClass:function(){return"cdr-data-table"},fullScroll:function(){return this.cols<=2||!this.rowHeaders},isScrolling:function(){return this.scrollWidth>this.clientWidth&&!this.fullScroll}},mounted:function(){var t=this;this.hasColHeaders="boolean"==typeof this.colHeaders?this.colHeaders:this.colHeaders.length>0,this.hasRowHeaders="boolean"==typeof this.rowHeaders?this.rowHeaders:this.rowHeaders.length>0,this.cols=this.$refs["table-body"].querySelector("tr").children.length,this.checkScroll(),window.addEventListener("resize",o()(function(){t.checkScroll()},250))},methods:{checkScroll:function(){var t=this.$refs["scroll-container"];void 0!==t&&(this.clientWidth=t.clientWidth,this.scrollWidth=t.scrollWidth)},getCellContent:function(t,e){return t[e]||""}}}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){var a=r(14),n="object"==typeof self&&self&&self.Object===Object&&self,o=a||n||Function("return this")();t.exports=o},function(t,e,r){var a=r(3).Symbol;t.exports=a},function(t,e){t.exports={"cdr-data-table":"cdr-data-table_0.1.0-alpha.3","cdr-data-table__caption":"cdr-data-table__caption_0.1.0-alpha.3","cdr-data-table__scroll-container":"cdr-data-table__scroll-container_0.1.0-alpha.3","cdr-data-table__content":"cdr-data-table__content_0.1.0-alpha.3",empty:"empty_0.1.0-alpha.3","cdr-data-table--borderless":"cdr-data-table--borderless_0.1.0-alpha.3","cdr-data-table--compact":"cdr-data-table--compact_0.1.0-alpha.3"}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(7);r.d(e,"CdrDataTable",function(){return a.a})},function(t,e,r){"use strict";var a=r(8),n=r(0),o=r(22),s=r(23),i=Object(s.a)(n.a,a.a,a.b,!1,function(t){this.$style=o.default.locals||o.default},null,null);e.a=i.exports},function(t,e,r){"use strict";var a=r(9);r.d(e,"a",function(){return a.a}),r.d(e,"b",function(){return a.b})},function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return n});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:[t.modifierClass]},[t.caption?r("span",{class:t.$style["cdr-data-table__caption"],attrs:{"aria-hidden":"true"}},[t._v("\n    "+t._s(t.caption)+"\n  ")]):t._e(),t._v(" "),r("div",{ref:"scroll-container",class:[t.$style["cdr-data-table__scroll-container"],{"full-scroll":t.fullScroll},{"is-scrolling":t.isScrolling}]},[r("table",{class:t.$style["cdr-data-table__content"],attrs:{id:t.id}},[t.caption?r("caption",{staticClass:"cdr-sr-only"},[t._v("\n        "+t._s(t.caption)+"\n      ")]):t._e(),t._v(" "),t.hasColHeaders?r("thead",[t._t("thead",[r("tr",[r("th",{directives:[{name:"show",rawName:"v-show",value:t.hasRowHeaders,expression:"hasRowHeaders"}],staticClass:"empty",attrs:{scope:"col"}}),t._v(" "),t._l(t.colHeaders,function(e,a){return r("th",{key:t.id+"_col-head_"+a,attrs:{scope:"col"}},[t._v("\n              "+t._s(e)+"\n            ")])})],2)])],2):t._e(),t._v(" "),r("tbody",{ref:"table-body"},[t._t("tbody",t._l(t.rowData,function(e,a){return r("tr",{key:t.id+"_row_"+a},[t.hasRowHeaders?r("th",{attrs:{scope:"row"}},[t._v("\n              "+t._s(t.rowHeaders[a])+"\n            ")]):t._e(),t._v(" "),t._l(t.keyOrder,function(a,n){return r("td",{key:t.id+"_"+n+"_"+a},[t._v("\n              "+t._s(t.getCellContent(e,a))+"\n            ")])})],2)}))],2)])])])},n=[]},function(t,e,r){"use strict";var a=r(11);e.a={mixins:[a.a],props:{modifier:String},computed:{modifierClass:function(){return this.buildClass("modifier")}}}},function(t,e,r){"use strict";e.a={methods:{buildClass:function(t){var e=this,r="cdr";this.baseClass&&(r=this.baseClass);var a=r,n=this[t]?this[t].split(" "):[],o=[];return this.$style?(o.push(this.moduleClass(a)),o=o.concat(n.map(function(t){return e.modifyClassName(a,t)}))):(o.push(""+a),o=o.concat(n.map(function(t){return e.modifyClassName(a,t)}))),o.join(" ")},moduleClass:function(t){return this.$style[""+t]},modifyClassName:function(t,e){return this.$style?this.moduleClass(t+"--"+e):t+"--"+e}}}},function(t,e,r){var a=r(2),n=r(13),o=r(16),s=Math.max,i=Math.min;t.exports=function(t,e,r){var l,c,d,u,f,p,h=0,v=!1,b=!1,x=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function _(e){var r=l,a=c;return l=c=void 0,h=e,u=t.apply(a,r)}function m(t){var r=t-p;return void 0===p||r>=e||r<0||b&&t-h>=d}function y(){var t=n();if(m(t))return w(t);f=setTimeout(y,function(t){var r=e-(t-p);return b?i(r,d-(t-h)):r}(t))}function w(t){return f=void 0,x&&l?_(t):(l=c=void 0,u)}function g(){var t=n(),r=m(t);if(l=arguments,c=this,p=t,r){if(void 0===f)return function(t){return h=t,f=setTimeout(y,e),v?_(t):u}(p);if(b)return f=setTimeout(y,e),_(p)}return void 0===f&&(f=setTimeout(y,e)),u}return e=o(e)||0,a(r)&&(v=!!r.leading,d=(b="maxWait"in r)?s(o(r.maxWait)||0,e):d,x="trailing"in r?!!r.trailing:x),g.cancel=function(){void 0!==f&&clearTimeout(f),h=0,l=p=c=f=void 0},g.flush=function(){return void 0===f?u:w(n())},g}},function(t,e,r){var a=r(3);t.exports=function(){return a.Date.now()}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(e,r(15))},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var a=r(2),n=r(17),o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(n(t))return NaN;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=i.test(t);return r||l.test(t)?c(t.slice(2),r?2:8):s.test(t)?NaN:+t}},function(t,e,r){var a=r(18),n=r(21);t.exports=function(t){return"symbol"==typeof t||n(t)&&"[object Symbol]"==a(t)}},function(t,e,r){var a=r(4),n=r(19),o=r(20),s=a?a.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?n(t):o(t)}},function(t,e,r){var a=r(4),n=Object.prototype,o=n.hasOwnProperty,s=n.toString,i=a?a.toStringTag:void 0;t.exports=function(t){var e=o.call(t,i),r=t[i];try{t[i]=void 0;var a=!0}catch(t){}var n=s.call(t);return a&&(e?t[i]=r:delete t[i]),n}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){"use strict";var a=r(5),n=r.n(a);e.default=n.a},function(t,e,r){"use strict";e.a=function(t,e,r,a,n,o,s,i){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),a&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):n&&(l=i?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}}])})},"i7k+":function(t,e,r){"use strict";var a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-examples-wrapperxxx"},[r("cdr-data-table",{attrs:{"col-headers":t.tableData.colHeaders,"row-headers":t.tableData.rowHeaders,"row-data":t.tableData.rowData,caption:t.tableData.dataCaption,"key-order":["xs","s","m","l","xl","xxl","xxxl"],id:"auto-table-col-lock-scroll"}}),r("cdr-data-table",{attrs:{"col-headers":!1,"row-headers":t.tableData.rowHeaders,"row-data":t.tableData.rowData,"key-order":["xs","s","m","l","xl","xxl","xxxl"],id:"auto-table-no-col-headers"}}),r("cdr-data-table",{attrs:{"col-headers":!1,"row-headers":!1,"row-data":t.tableData.rowData,"key-order":["xs","s","m","l","xl","xxl","xxxl"],id:"auto-table-no-col-no-row-headers"}}),r("cdr-data-table",{attrs:{caption:"“Is it a boy or a girl?” \\n\n    “I think it’s a bit early to start imposing roles on it, don’t you?”","col-headers":!1,"row-headers":!1,"row-data":t.tableData.rowData,"key-order":["xs","s","m","l","xl","xxl","xxxl"],id:"auto-table-no-col-no-row-headersx"}}),r("div",{staticStyle:{"max-width":"500px"},attrs:{id:"scrollable-table"}},[r("cdr-data-table",{attrs:{caption:"Data Table that should be scrollable","col-headers":!1,"row-headers":!1,"row-data":t.tableData.rowData,"key-order":["xs","s","m","l","xl","xxl","xxxl"],id:"auto-table-no-col-no-row-headersx"}})],1)],1)},staticRenderFns:[]};e.a=a},qIjY:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(r("0E73")),n=o(r("URks"));function o(t){return t&&t.__esModule?t:{default:t}}var s=r("7YgM").dependencies;e.default={name:"Tables",components:{AutoTable:a.default,ManualTable:n.default},data:function(){return{version:s["@rei/cdr-data-table"]}}}},qiY5:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".table-examples-wrapperxxx{padding:10px}.table-examples-wrapperxxx>div{margin-bottom:40px}",""])},u47f:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("g0ZV"),n=function(t){return t&&t.__esModule?t:{default:t}}(r("fyqT"));e.default={name:"ManualTable",components:{CdrDataTable:a.CdrDataTable},data:function(){return n.default}}}});