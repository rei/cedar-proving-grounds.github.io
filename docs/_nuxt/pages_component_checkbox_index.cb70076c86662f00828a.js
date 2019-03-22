webpackJsonp([31],{"399A":function(e,c,t){var r=t("Tmkt");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("rjj0")("5ca1730c",r,!0,{sourceMap:!1})},"7YgM":function(e,c){e.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt --hostname 0.0.0.0","dev-ssr":"cross-env NODE_ENV=dev nuxt generate && nuxt start",build:"cross-env NODE_ENV=production nuxt build",start:"nuxt start",generate:"cross-env NODE_ENV=production nuxt generate","multi-version":"node ./multi-version"},dependencies:{"@nuxtjs/axios":"^5.3.2","@nuxtjs/proxy":"^1.1.2","@rei/cdr-accordion":"1.0.2","@rei/cdr-activity-card":"0.1.4","@rei/cdr-assets":"0.3.0","@rei/cdr-breadcrumb":"1.0.1-alpha.0","@rei/cdr-button":"2.0.0","@rei/cdr-caption":"1.0.0","@rei/cdr-card":"0.2.0","@rei/cdr-checkbox":"1.0.2","@rei/cdr-cta":"1.0.4-alpha.1","@rei/cdr-data-table":"1.1.0-alpha.4","@rei/cdr-grid":"1.0.0","@rei/cdr-icon":"2.0.1","@rei/cdr-img":"1.0.1","@rei/cdr-input":"1.0.0-alpha.5","@rei/cdr-link":"1.1.0-alpha.2","@rei/cdr-list":"^1.0.1","@rei/cdr-media-object":"0.1.4","@rei/cdr-pagination":"0.1.2-alpha.6","@rei/cdr-popover":"0.1.0-alpha.1","@rei/cdr-quote":"1.0.0","@rei/cdr-radio":"1.0.0","@rei/cdr-rating":"1.0.0","@rei/cdr-search":"0.1.3-alpha.0","@rei/cdr-select":"0.1.4","@rei/cdr-tabs":"1.0.0-alpha.64","@rei/cdr-text":"1.0.2-alpha.0",nuxt:"^1.0.0",underscore:"^1.9.1","vue-js-toggle-button":"^1.3.0",vuex:"^3.0.1"},devDependencies:{"@rei/cdr-tokens":"0.1.8","babel-preset-stage-2":"^6.24.1","cross-env":"^5.0.1","download-npm-package":"^3.1.12","fs-extra":"^7.0.0",lodash:"^4.17.11","node-sass":"^4.9.3","sass-loader":"^7.1.0",semver:"^5.5.1"}}},BN3x:function(e,c,t){!function(c,t){e.exports=t()}(0,function(){return function(e){var c={};function t(r){if(c[r])return c[r].exports;var o=c[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=c,t.d=function(e,c,r){t.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,c){if(1&c&&(e=t(e)),8&c)return e;if(4&c&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var o in e)t.d(r,o,function(c){return e[c]}.bind(null,o));return r},t.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(c,"a",c),c},t.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},t.p="/",t(t.s=2)}([function(e,c,t){e.exports={"cdr-checkbox":"cdr-checkbox_1.0.2","cdr-checkbox__wrap":"cdr-checkbox__wrap_1.0.2","cdr-checkbox__input":"cdr-checkbox__input_1.0.2","cdr-checkbox__figure":"cdr-checkbox__figure_1.0.2","cdr-checkbox__content":"cdr-checkbox__content_1.0.2","cdr-checkbox--compact":"cdr-checkbox--compact_1.0.2","cdr-checkbox--hide-figure":"cdr-checkbox--hide-figure_1.0.2"}},function(e,c,t){"use strict";var r=t(0),o=t.n(r);c.default=o.a},function(e,c,t){"use strict";t.r(c);var r={name:"CdrCheckbox",mixins:[{mixins:[{methods:{buildClass(e){let c="cdr";this.baseClass&&(c=this.baseClass);const t=c,r=this[e]?this[e].split(" "):[];let o=[];return this.$style?(o.push(this.moduleClass(t)),o=o.concat(r.map(e=>this.modifyClassName(t,e)))):(o.push(`${t}`),o=o.concat(r.map(e=>this.modifyClassName(t,e)))),o.join(" ")},moduleClass(e){return this.$style[`${e}`]},modifyClassName(e,c){return this.$style?this.moduleClass(`${e}--${c}`):`${e}--${c}`}}}],props:{modifier:String},computed:{modifierClass(){return this.buildClass("modifier")}}}],inheritAttrs:!1,props:{labelClass:String,inputClass:String,contentClass:String,indeterminate:{type:Boolean,default:!1},trueValue:{type:[String,Number,Boolean,Object,Array,Symbol,Function],default:!0},falseValue:{type:[String,Number,Boolean,Object,Array,Symbol,Function],default:!1},customValue:[String,Number,Boolean,Object,Array,Symbol,Function],value:{type:[String,Number,Boolean,Object,Array,Symbol,Function]}},data(){return{newValue:this.value}},computed:{baseClass:()=>"cdr-checkbox"},watch:{value(e){this.newValue=e},newValue(e){this.$emit("input",e)}},methods:{updateValue(e,c){this.newValue=e,this.$emit("change",e,c)}}},o=t(1);var a=function(e,c,t,r,o,a,n,s){var i,l="function"==typeof e?e.options:e;if(c&&(l.render=c,l.staticRenderFns=t,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),n?(i=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},l._ssrRegister=i):o&&(i=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),i)if(l.functional){l._injectStyles=i;var u=l.render;l.render=function(e,c){return i.call(c),u(e,c)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,i):[i]}return{exports:e,options:l}}(r,function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{class:e.$style["cdr-checkbox__wrap"]},[t("label",{ref:"label",class:[e.modifierClass,e.labelClass]},[t("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.newValue,expression:"newValue"}],ref:"checkbox",class:[e.$style["cdr-checkbox__input"],e.inputClass],attrs:{type:"checkbox","true-value":e.customValue?null:e.trueValue,"false-value":e.customValue?null:e.falseValue,indeterminate:e.indeterminate},domProps:{value:e.customValue,checked:Array.isArray(e.newValue)?e._i(e.newValue,e.customValue)>-1:e._q(e.newValue,e.customValue?null:e.trueValue)},on:{change:[function(c){var t=e.newValue,r=c.target,o=r.checked?e.customValue?null:e.trueValue:e.customValue?null:e.falseValue;if(Array.isArray(t)){var a=e.customValue,n=e._i(t,a);r.checked?n<0&&(e.newValue=t.concat([a])):n>-1&&(e.newValue=t.slice(0,n).concat(t.slice(n+1)))}else e.newValue=o},function(c){e.updateValue(e.newValue,c)}]}},"input",e.$attrs,!1)),e._v(" "),t("span",{class:e.$style["cdr-checkbox__figure"]}),e._v(" "),t("div",{class:[e.$style["cdr-checkbox__content"],e.contentClass]},[e._t("default")],2)])])},[],!1,function(e){this.$style=o.default.locals||o.default},null,null).exports;t.d(c,"CdrCheckbox",function(){return a})}])})},COhB:function(e,c,t){"use strict";var r={render:function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",[t("h2",[e._v("Checkboxes version: "+e._s(e.version)+" ")]),t("cdr-checkbox",{attrs:{"data-backstop":"checkbox-focus"},on:{change:e.logChange},model:{value:e.ex1,callback:function(c){e.ex1=c},expression:"ex1"}},[e._v("single")]),t("cdr-checkbox",{attrs:{modifier:"compact"},model:{value:e.ex1,callback:function(c){e.ex1=c},expression:"ex1"}},[e._v("single compact")]),t("p",[e._v("single: "+e._s(e.ex1))]),t("span",{attrs:{"data-backstop":"checkbox-checked"}},[t("cdr-checkbox",{attrs:{"true-value":"checked","false-value":"unchecked"},model:{value:e.ex2,callback:function(c){e.ex2=c},expression:"ex2"}},[e._v("checked")]),t("cdr-checkbox",{attrs:{modifier:"compact","true-value":"checked","false-value":"unchecked"},model:{value:e.ex2,callback:function(c){e.ex2=c},expression:"ex2"}},[e._v("checked compact")])],1),t("p",[e._v("checked: "+e._s(e.ex2))]),t("cdr-checkbox",{attrs:{"true-value":"checked"},model:{value:e.ex3,callback:function(c){e.ex3=c},expression:"ex3"}},[e._v("custom true")]),t("p",[e._v("custom true: "+e._s(e.ex3))]),t("cdr-checkbox",{attrs:{"custom-value":"A"},model:{value:e.exGroup,callback:function(c){e.exGroup=c},expression:"exGroup"}},[e._v("A")]),t("cdr-checkbox",{attrs:{"custom-value":"B"},model:{value:e.exGroup,callback:function(c){e.exGroup=c},expression:"exGroup"}},[e._v("B")]),t("cdr-checkbox",{attrs:{"custom-value":"C"},model:{value:e.exGroup,callback:function(c){e.exGroup=c},expression:"exGroup"}},[e._v("C")]),t("cdr-checkbox",{attrs:{"custom-value":{value:"D"}},model:{value:e.exGroup,callback:function(c){e.exGroup=c},expression:"exGroup"}},[e._v("D")]),t("cdr-checkbox",{attrs:{"custom-value":e.testVal},model:{value:e.exGroup,callback:function(c){e.exGroup=c},expression:"exGroup"}},[e._v("E")]),t("cdr-checkbox",{attrs:{"custom-value":e.testVal2},model:{value:e.exGroup,callback:function(c){e.exGroup=c},expression:"exGroup"}},[e._v("F")]),t("cdr-checkbox",{attrs:{"custom-value":"A",modifier:"compact"},model:{value:e.exGroup,callback:function(c){e.exGroup=c},expression:"exGroup"}},[e._v("A compact")]),t("cdr-checkbox",{attrs:{"custom-value":"B",modifier:"compact"},model:{value:e.exGroup,callback:function(c){e.exGroup=c},expression:"exGroup"}},[e._v("B compact")]),t("cdr-checkbox",{attrs:{"custom-value":"C",modifier:"compact"},model:{value:e.exGroup,callback:function(c){e.exGroup=c},expression:"exGroup"}},[e._v("C compact")]),t("p",[e._v("group: "+e._s(e.exGroup))]),t("cdr-checkbox",{attrs:{disabled:""}},[e._v("disabled checkbox")]),t("cdr-checkbox",{attrs:{disabled:""},model:{value:e.checked,callback:function(c){e.checked=c},expression:"checked"}},[e._v("disabled and checked checkbox")]),t("cdr-checkbox",{attrs:{disabled:"",modifier:"compact"}},[e._v("disabled checkbox compact")]),t("cdr-checkbox",{attrs:{disabled:"",modifier:"compact"},model:{value:e.checked,callback:function(c){e.checked=c},expression:"checked"}},[e._v("disabled and checked checkbox compact")]),t("div",{staticClass:"wrap"},[t("cdr-checkbox",{attrs:{name:"complex1"},model:{value:e.complex1,callback:function(c){e.complex1=c},expression:"complex1"}},[e._v("A longer label text to make things wrap for testing\n    ")])],1),t("cdr-checkbox",{attrs:{indeterminate:""}},[e._v("indeterminate")]),t("cdr-checkbox",{attrs:{indeterminate:"",disabled:""}},[e._v("indeterminate")]),t("cdr-checkbox",{attrs:{indeterminate:"",modifier:"compact"}},[e._v("indeterminate compact")]),t("cdr-checkbox",{attrs:{indeterminate:"",disabled:"",modifier:"compact"}},[e._v("indeterminate compact")]),t("cdr-checkbox",{attrs:{modifier:"hide-figure"}},[e._v("Hidden box")]),t("cdr-checkbox",{attrs:{modifier:"hide-figure","input-class":"no-box","content-class":"no-box__content"},model:{value:e.complex2,callback:function(c){e.complex2=c},expression:"complex2"}},[e._v("Hidden box + custom checked state\n  ")])],1)},staticRenderFns:[]};c.a=r},Tmkt:function(e,c,t){(e.exports=t("FZ+f")(!1)).push([e.i,'.wrap{width:180px}.no-box:checked~.no-box__content{color:green}.no-box:checked~.no-box__content:after{content:"(checked)"}',""])},"fy/k":function(e,c,t){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var r=t("BN3x"),o=t("7YgM").dependencies;c.default={name:"Checkboxes",components:{CdrCheckbox:r.CdrCheckbox},data:function(){return{checked:!0,ex1:!1,ex2:"checked",ex3:"checked",exGroup:["A",{value:"D"},[9,8]],testVal:{value:"X",more:{things:[1,2,3]}},testVal2:[9,8],complex1:!1,complex2:!0,version:o["@rei/cdr-checkbox"]}},methods:{logChange:function(e,c){console.log("log",e,c)}}}},la1d:function(e,c,t){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var r=t("fy/k"),o=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(c,e,function(){return r[e]})}(a);var n=t("COhB");var s=function(e){t("399A")},i=t("VU/8")(o.a,n.a,!1,s,null,null);c.default=i.exports}});