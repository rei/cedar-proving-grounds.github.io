webpackJsonp([26],{"399A":function(e,t,n){var r=n("Tmkt");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("5ca1730c",r,!0,{sourceMap:!1})},"7YgM":function(e,t){e.exports={name:"cdr-hw",version:"1.0.1-0",description:"Cedar Proving Grounds",author:"Zach Folwick <zfolwic@rei.com>",private:!0,scripts:{dev:"cross-env NODE_ENV=dev nuxt","dev-ssr":"cross-env NODE_ENV=dev nuxt generate && nuxt start",build:"cross-env NODE_ENV=production nuxt build",start:"nuxt start",generate:"cross-env NODE_ENV=production nuxt generate","multi-version":"node ./multi-version"},dependencies:{"@nuxtjs/axios":"^5.3.2","@nuxtjs/proxy":"^1.1.2","@rei/cdr-accordion":"^1.0.2-alpha.0","@rei/cdr-activity-card":"0.1.3","@rei/cdr-assets":"^0.3.0","@rei/cdr-breadcrumb":"1.0.1-alpha.0","@rei/cdr-button":"^1.0.3-alpha.0","@rei/cdr-caption":"^1.0.0","@rei/cdr-card":"^0.2.0","@rei/cdr-checkbox":"^1.0.0","@rei/cdr-cta":"1.0.3-alpha.4","@rei/cdr-data-table":"0.1.0-alpha.2","@rei/cdr-grid":"1.0.0","@rei/cdr-icon":"^1.0.0","@rei/cdr-img":"^1.0.1","@rei/cdr-input":"0.1.2","@rei/cdr-link":"^1.0.0","@rei/cdr-list":"^1.0.1","@rei/cdr-media-object":"^0.1.3","@rei/cdr-pagination":"0.1.2-alpha.2","@rei/cdr-quote":"^1.0.0","@rei/cdr-radio":"1.0.0","@rei/cdr-rating":"1.0.0-alpha.3","@rei/cdr-select":"^0.1.3","@rei/cdr-tabs":"1.0.0-alpha.63","@rei/cdr-text":"^1.0.1",nuxt:"^1.0.0","vue-js-toggle-button":"^1.3.0",vuex:"^3.0.1"},devDependencies:{"babel-preset-stage-2":"^6.24.1","cross-env":"^5.0.1","download-npm-package":"^3.1.12","fs-extra":"^7.0.0",lodash:"^4.17.11","node-sass":"^4.9.3","sass-loader":"^7.1.0",semver:"^5.5.1"}}},BN3x:function(e,t,n){!function(t,n){e.exports=n()}("undefined"!=typeof self&&self,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=32)}([function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){e.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(8),o=n(22),c=n(11),i=Object.defineProperty;t.f=n(2)?Object.defineProperty:function(e,t,n){if(r(e),t=c(t,!0),r(n),o)try{return i(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(46),o=n(47);e.exports=function(e){return r(o(e))}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(4);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(3),o=n(12);e.exports=n(2)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(4);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(7),o=n(0),c=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return c[e]||(c[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(14)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!0},function(e,t,n){var r=n(13)("wks"),o=n(9),c=n(0).Symbol,i="function"==typeof c;(e.exports=function(e){return r[e]||(r[e]=i&&c[e]||(i?c:o)("Symbol."+e))}).store=r},function(e,t,n){var r=n(0),o=n(7),c=n(14),i=n(24),u=n(3).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=c?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||u(t,e,{value:i.f(e)})}},function(e,t,n){var r=n(25),o=n(18);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){"use strict";var r=n(21);t.a=r.a},function(e,t,n){"use strict";var r=n(36),o=n.n(r),c=n(60);t.a={name:"CdrCheckbox",mixins:[c.a],inheritAttrs:!1,props:{labelClass:String,inputClass:String,contentClass:String,indeterminate:{type:Boolean,default:!1},trueValue:{type:[String,Number,Boolean,Object,Array,o.a,Function],default:!0},falseValue:{type:[String,Number,Boolean,Object,Array,o.a,Function],default:!1},customValue:[String,Number,Boolean,Object,Array,o.a,Function],value:{type:[String,Number,Boolean,Object,Array,o.a,Function]}},data:function(){return{newValue:this.value}},computed:{baseClass:function(){return"cdr-checkbox"}},watch:{value:function(e){this.newValue=e},newValue:function(e){this.$emit("input",e)}},methods:{updateValue:function(e,t){this.newValue=e,this.$emit("change",e,t)}}}},function(e,t,n){e.exports=!n(2)&&!n(6)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(4),o=n(0).document,c=r(o)&&r(o.createElement);e.exports=function(e){return c?o.createElement(e):{}}},function(e,t,n){t.f=n(15)},function(e,t,n){var r=n(1),o=n(5),c=n(48)(!1),i=n(28)("IE_PROTO");e.exports=function(e,t){var n,u=o(e),a=0,s=[];for(n in u)n!=i&&r(u,n)&&s.push(n);for(;t.length>a;)r(u,n=t[a++])&&(~c(s,n)||s.push(n));return s}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(13)("keys"),o=n(9);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(25),o=n(18).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},function(e,t){e.exports={"cdr-checkbox":"cdr-checkbox_1.0.0","cdr-checkbox__wrap":"cdr-checkbox__wrap_1.0.0","cdr-checkbox__input":"cdr-checkbox__input_1.0.0","cdr-checkbox__figure":"cdr-checkbox__figure_1.0.0","cdr-checkbox__content":"cdr-checkbox__content_1.0.0","cdr-checkbox--compact":"cdr-checkbox--compact_1.0.0","cdr-checkbox--hide-figure":"cdr-checkbox--hide-figure_1.0.0"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(33);n.d(t,"CdrCheckbox",function(){return r.a})},function(e,t,n){"use strict";var r=n(34),o=n(20),c=n(61),i=n(62),u=Object(i.a)(o.a,r.a,r.b,!1,function(e){this.$style=c.default.locals||c.default},null,null);t.a=u.exports},function(e,t,n){"use strict";var r=n(35);n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return r.b})},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style["cdr-checkbox__wrap"]},[n("label",{ref:"label",class:[e.modifierClass,e.labelClass]},[n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.newValue,expression:"newValue"}],ref:"checkbox",class:[e.$style["cdr-checkbox__input"],e.inputClass],attrs:{type:"checkbox","true-value":e.customValue?null:e.trueValue,"false-value":e.customValue?null:e.falseValue,indeterminate:e.indeterminate},domProps:{value:e.customValue,checked:Array.isArray(e.newValue)?e._i(e.newValue,e.customValue)>-1:e._q(e.newValue,e.customValue?null:e.trueValue)},on:{change:[function(t){var n=e.newValue,r=t.target,o=r.checked?e.customValue?null:e.trueValue:e.customValue?null:e.falseValue;if(Array.isArray(n)){var c=e.customValue,i=e._i(n,c);r.checked?i<0&&(e.newValue=n.concat([c])):i>-1&&(e.newValue=n.slice(0,i).concat(n.slice(i+1)))}else e.newValue=o},function(t){e.updateValue(e.newValue,t)}]}},"input",e.$attrs,!1)),e._v(" "),n("span",{class:e.$style["cdr-checkbox__figure"]}),e._v(" "),n("div",{class:[e.$style["cdr-checkbox__content"],e.contentClass]},[e._t("default")],2)])])},o=[]},function(e,t,n){e.exports={default:n(37),__esModule:!0}},function(e,t,n){n(38),n(57),n(58),n(59),e.exports=n(7).Symbol},function(e,t,n){"use strict";var r=n(0),o=n(1),c=n(2),i=n(39),u=n(42),a=n(43).KEY,s=n(6),l=n(13),f=n(44),p=n(9),d=n(15),v=n(24),h=n(16),x=n(45),b=n(51),m=n(8),y=n(4),_=n(5),k=n(11),g=n(12),w=n(52),O=n(55),S=n(56),C=n(3),j=n(17),V=S.f,E=C.f,G=O.f,P=r.Symbol,N=r.JSON,A=N&&N.stringify,F=d("_hidden"),M=d("toPrimitive"),$={}.propertyIsEnumerable,T=l("symbol-registry"),B=l("symbols"),D=l("op-symbols"),I=Object.prototype,R="function"==typeof P,W=r.QObject,J=!W||!W.prototype||!W.prototype.findChild,z=c&&s(function(){return 7!=w(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=V(I,t);r&&delete I[t],E(e,t,n),r&&e!==I&&E(I,t,r)}:E,U=function(e){var t=B[e]=w(P.prototype);return t._k=e,t},Y=R&&"symbol"==typeof P.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof P},K=function(e,t,n){return e===I&&K(D,t,n),m(e),t=k(t,!0),m(n),o(B,t)?(n.enumerable?(o(e,F)&&e[F][t]&&(e[F][t]=!1),n=w(n,{enumerable:g(0,!1)})):(o(e,F)||E(e,F,g(1,{})),e[F][t]=!0),z(e,t,n)):E(e,t,n)},X=function(e,t){m(e);for(var n,r=x(t=_(t)),o=0,c=r.length;c>o;)K(e,n=r[o++],t[n]);return e},q=function(e){var t=$.call(this,e=k(e,!0));return!(this===I&&o(B,e)&&!o(D,e))&&(!(t||!o(this,e)||!o(B,e)||o(this,F)&&this[F][e])||t)},H=function(e,t){if(e=_(e),t=k(t,!0),e!==I||!o(B,t)||o(D,t)){var n=V(e,t);return!n||!o(B,t)||o(e,F)&&e[F][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=G(_(e)),r=[],c=0;n.length>c;)o(B,t=n[c++])||t==F||t==a||r.push(t);return r},L=function(e){for(var t,n=e===I,r=G(n?D:_(e)),c=[],i=0;r.length>i;)!o(B,t=r[i++])||n&&!o(I,t)||c.push(B[t]);return c};R||(u((P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(n){this===I&&t.call(D,n),o(this,F)&&o(this[F],e)&&(this[F][e]=!1),z(this,e,g(1,n))};return c&&J&&z(I,e,{configurable:!0,set:t}),U(e)}).prototype,"toString",function(){return this._k}),S.f=H,C.f=K,n(30).f=O.f=Z,n(19).f=q,n(29).f=L,c&&!n(14)&&u(I,"propertyIsEnumerable",q,!0),v.f=function(e){return U(d(e))}),i(i.G+i.W+i.F*!R,{Symbol:P});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;Q.length>ee;)d(Q[ee++]);for(var te=j(d.store),ne=0;te.length>ne;)h(te[ne++]);i(i.S+i.F*!R,"Symbol",{for:function(e){return o(T,e+="")?T[e]:T[e]=P(e)},keyFor:function(e){if(!Y(e))throw TypeError(e+" is not a symbol!");for(var t in T)if(T[t]===e)return t},useSetter:function(){J=!0},useSimple:function(){J=!1}}),i(i.S+i.F*!R,"Object",{create:function(e,t){return void 0===t?w(e):X(w(e),t)},defineProperty:K,defineProperties:X,getOwnPropertyDescriptor:H,getOwnPropertyNames:Z,getOwnPropertySymbols:L}),N&&i(i.S+i.F*(!R||s(function(){var e=P();return"[null]"!=A([e])||"{}"!=A({a:e})||"{}"!=A(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=t=r[1],(y(t)||void 0!==e)&&!Y(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Y(t))return t}),r[1]=t,A.apply(N,r)}}),P.prototype[M]||n(10)(P.prototype,M,P.prototype.valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(e,t,n){var r=n(0),o=n(7),c=n(40),i=n(10),u=n(1),a=function(e,t,n){var s,l,f,p=e&a.F,d=e&a.G,v=e&a.S,h=e&a.P,x=e&a.B,b=e&a.W,m=d?o:o[t]||(o[t]={}),y=m.prototype,_=d?r:v?r[t]:(r[t]||{}).prototype;for(s in d&&(n=t),n)(l=!p&&_&&void 0!==_[s])&&u(m,s)||(f=l?_[s]:n[s],m[s]=d&&"function"!=typeof _[s]?n[s]:x&&l?c(f,r):b&&_[s]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):h&&"function"==typeof f?c(Function.call,f):f,h&&((m.virtual||(m.virtual={}))[s]=f,e&a.R&&y&&!y[s]&&i(y,s,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},function(e,t,n){var r=n(41);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){e.exports=n(10)},function(e,t,n){var r=n(9)("meta"),o=n(4),c=n(1),i=n(3).f,u=0,a=Object.isExtensible||function(){return!0},s=!n(6)(function(){return a(Object.preventExtensions({}))}),l=function(e){i(e,r,{value:{i:"O"+ ++u,w:{}}})},f=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!c(e,r)){if(!a(e))return"F";if(!t)return"E";l(e)}return e[r].i},getWeak:function(e,t){if(!c(e,r)){if(!a(e))return!0;if(!t)return!1;l(e)}return e[r].w},onFreeze:function(e){return s&&f.NEED&&a(e)&&!c(e,r)&&l(e),e}}},function(e,t,n){var r=n(3).f,o=n(1),c=n(15)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,c)&&r(e,c,{configurable:!0,value:t})}},function(e,t,n){var r=n(17),o=n(29),c=n(19);e.exports=function(e){var t=r(e),n=o.f;if(n)for(var i,u=n(e),a=c.f,s=0;u.length>s;)a.call(e,i=u[s++])&&t.push(i);return t}},function(e,t,n){var r=n(26);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var r=n(5),o=n(49),c=n(50);e.exports=function(e){return function(t,n,i){var u,a=r(t),s=o(a.length),l=c(i,s);if(e&&n!=n){for(;s>l;)if((u=a[l++])!=u)return!0}else for(;s>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var r=n(27),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){var r=n(27),o=Math.max,c=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):c(e,t)}},function(e,t,n){var r=n(26);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(8),o=n(53),c=n(18),i=n(28)("IE_PROTO"),u=function(){},a=function(){var e,t=n(23)("iframe"),r=c.length;for(t.style.display="none",n(54).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),a=e.F;r--;)delete a.prototype[c[r]];return a()};e.exports=Object.create||function(e,t){var n;return null!==e?(u.prototype=r(e),n=new u,u.prototype=null,n[i]=e):n=a(),void 0===t?n:o(n,t)}},function(e,t,n){var r=n(3),o=n(8),c=n(17);e.exports=n(2)?Object.defineProperties:function(e,t){o(e);for(var n,i=c(t),u=i.length,a=0;u>a;)r.f(e,n=i[a++],t[n]);return e}},function(e,t,n){var r=n(0).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(5),o=n(30).f,c={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==c.call(e)?function(e){try{return o(e)}catch(e){return i.slice()}}(e):o(r(e))}},function(e,t,n){var r=n(19),o=n(12),c=n(5),i=n(11),u=n(1),a=n(22),s=Object.getOwnPropertyDescriptor;t.f=n(2)?s:function(e,t){if(e=c(e),t=i(t,!0),a)try{return s(e,t)}catch(e){}if(u(e,t))return o(!r.f.call(e,t),e[t])}},function(e,t){},function(e,t,n){n(16)("asyncIterator")},function(e,t,n){n(16)("observable")},function(e,t,n){"use strict";t.a={props:{modifier:String},computed:{modifierClass:function(){var e=this,t=this.baseClass,n=this.modifier?this.modifier.split(" "):[],r=[];return this.$style?(r.push(this.moduleClass(t)),r=r.concat(n.map(function(n){return e.modifyClassName(t,n)}))):(r.push(""+t),r=r.concat(n.map(function(n){return e.modifyClassName(t,n)}))),r.join(" ")}},methods:{moduleClass:function(e){return this.$style[""+e]},modifyClassName:function(e,t){return this.$style?this.moduleClass(e+"--"+t):e+"--"+t}}}},function(e,t,n){"use strict";var r=n(31),o=n.n(r);t.default=o.a},function(e,t,n){"use strict";t.a=function(e,t,n,r,o,c,i,u){var a,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),c&&(s._scopeId="data-v-"+c),i?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=a):o&&(a=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var l=s.render;s.render=function(e,t){return a.call(t),l(e,t)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,a):[a]}return{exports:e,options:s}}}])})},COhB:function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Checkboxes version: "+e._s(e.version)+" ")]),n("cdr-checkbox",{attrs:{"data-backstop":"checkbox-focus"},on:{change:e.logChange},model:{value:e.ex1,callback:function(t){e.ex1=t},expression:"ex1"}},[e._v("single")]),n("cdr-checkbox",{attrs:{modifier:"compact"},model:{value:e.ex1,callback:function(t){e.ex1=t},expression:"ex1"}},[e._v("single compact")]),n("p",[e._v("single: "+e._s(e.ex1))]),n("span",{attrs:{"data-backstop":"checkbox-checked"}},[n("cdr-checkbox",{attrs:{"true-value":"checked","false-value":"unchecked"},model:{value:e.ex2,callback:function(t){e.ex2=t},expression:"ex2"}},[e._v("checked")]),n("cdr-checkbox",{attrs:{modifier:"compact","true-value":"checked","false-value":"unchecked"},model:{value:e.ex2,callback:function(t){e.ex2=t},expression:"ex2"}},[e._v("checked compact")])],1),n("p",[e._v("checked: "+e._s(e.ex2))]),n("cdr-checkbox",{attrs:{"true-value":"checked"},model:{value:e.ex3,callback:function(t){e.ex3=t},expression:"ex3"}},[e._v("custom true")]),n("p",[e._v("custom true: "+e._s(e.ex3))]),n("cdr-checkbox",{attrs:{"custom-value":"A"},model:{value:e.exGroup,callback:function(t){e.exGroup=t},expression:"exGroup"}},[e._v("A")]),n("cdr-checkbox",{attrs:{"custom-value":"B"},model:{value:e.exGroup,callback:function(t){e.exGroup=t},expression:"exGroup"}},[e._v("B")]),n("cdr-checkbox",{attrs:{"custom-value":"C"},model:{value:e.exGroup,callback:function(t){e.exGroup=t},expression:"exGroup"}},[e._v("C")]),n("cdr-checkbox",{attrs:{"custom-value":{value:"D"}},model:{value:e.exGroup,callback:function(t){e.exGroup=t},expression:"exGroup"}},[e._v("D")]),n("cdr-checkbox",{attrs:{"custom-value":e.testVal},model:{value:e.exGroup,callback:function(t){e.exGroup=t},expression:"exGroup"}},[e._v("E")]),n("cdr-checkbox",{attrs:{"custom-value":e.testVal2},model:{value:e.exGroup,callback:function(t){e.exGroup=t},expression:"exGroup"}},[e._v("F")]),n("cdr-checkbox",{attrs:{"custom-value":"A",modifier:"compact"},model:{value:e.exGroup,callback:function(t){e.exGroup=t},expression:"exGroup"}},[e._v("A compact")]),n("cdr-checkbox",{attrs:{"custom-value":"B",modifier:"compact"},model:{value:e.exGroup,callback:function(t){e.exGroup=t},expression:"exGroup"}},[e._v("B compact")]),n("cdr-checkbox",{attrs:{"custom-value":"C",modifier:"compact"},model:{value:e.exGroup,callback:function(t){e.exGroup=t},expression:"exGroup"}},[e._v("C compact")]),n("p",[e._v("group: "+e._s(e.exGroup))]),n("cdr-checkbox",{attrs:{disabled:""}},[e._v("disabled checkbox")]),n("cdr-checkbox",{attrs:{disabled:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("disabled and checked checkbox")]),n("cdr-checkbox",{attrs:{disabled:"",modifier:"compact"}},[e._v("disabled checkbox compact")]),n("cdr-checkbox",{attrs:{disabled:"",modifier:"compact"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("disabled and checked checkbox compact")]),n("div",{staticClass:"wrap"},[n("cdr-checkbox",{attrs:{name:"complex1"},model:{value:e.complex1,callback:function(t){e.complex1=t},expression:"complex1"}},[e._v("A longer label text to make things wrap for testing\n    ")])],1),n("cdr-checkbox",{attrs:{indeterminate:""}},[e._v("indeterminate")]),n("cdr-checkbox",{attrs:{indeterminate:"",disabled:""}},[e._v("indeterminate")]),n("cdr-checkbox",{attrs:{indeterminate:"",modifier:"compact"}},[e._v("indeterminate compact")]),n("cdr-checkbox",{attrs:{indeterminate:"",disabled:"",modifier:"compact"}},[e._v("indeterminate compact")]),n("cdr-checkbox",{attrs:{modifier:"hide-figure"}},[e._v("Hidden box")]),n("cdr-checkbox",{attrs:{modifier:"hide-figure","input-class":"no-box","content-class":"no-box__content"},model:{value:e.complex2,callback:function(t){e.complex2=t},expression:"complex2"}},[e._v("Hidden box + custom checked state\n  ")])],1)},staticRenderFns:[]};t.a=r},Tmkt:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,'.wrap{width:180px}.no-box:checked~.no-box__content{color:green}.no-box:checked~.no-box__content:after{content:"(checked)"}',""])},"fy/k":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("BN3x"),o=n("7YgM").dependencies;t.default={name:"Checkboxes",components:{CdrCheckbox:r.CdrCheckbox},data:function(){return{checked:!0,ex1:!1,ex2:"checked",ex3:"checked",exGroup:["A",{value:"D"},[9,8]],testVal:{value:"X",more:{things:[1,2,3]}},testVal2:[9,8],complex1:!1,complex2:!0,version:o["@rei/cdr-checkbox"]}},methods:{logChange:function(e,t){console.log("log",e,t)}}}},la1d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("fy/k"),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);var i=n("COhB");var u=function(e){n("399A")},a=n("VU/8")(o.a,i.a,!1,u,null,null);t.default=a.exports}});