!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(8),a={},s=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,u=0,c=!1,d=function(){},f=null,l="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(m(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:s}}}}function h(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+l+'~="'+e.id+'"]');if(r){if(c)return d;r.parentNode.removeChild(r)}if(p){var o=u++;r=i||(i=h()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=h(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);f.ssrId&&e.setAttribute(l,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){c=n,f=r||{};var s=o(e,t);return v(s),function(t){for(var n=[],r=0;r<s.length;r++){var i=s[r];(u=a[i.id]).refs--,n.push(u)}t?v(s=o(e,t)):s=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}};var g,_=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e,t,n,r,o,a){var s,i=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,i=e.default);var c,d="function"==typeof i?i.options:i;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=c):r&&(c=r),c){var f=d.functional,l=f?d.render:d.beforeCreate;f?(d._injectStyles=c,d.render=function(e,t){return c.call(t),l(e,t)}):d.beforeCreate=l?[].concat(l,c):[c]}return{esModule:s,exports:i,options:d}}},function(e,t,n){n(4),e.exports=n(16)},function(e,t,n){Nova.booting(function(e,t,r){e.component("custom-dashboard-header",n(5))})},function(e,t,n){var r=n(2)(n(9),n(15),!1,function(e){n(6)},null,null);e.exports=r.exports},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("330fd964",r,!0,{})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".dashboard-navigation{padding:0 10rem}.dashboard-navigation a.card.router-link-active{background:var(--success-light)}.dashboard-navigation+h1{display:none}",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],s=a[0],i={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(i):n.push(r[s]={id:s,parts:[i]})}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),o=n.n(r);t.default={components:{Navigation:o.a},props:["dashboardName"],mounted:function(){},computed:{cards:function(){return window.Nova.config.quick_theme.cards},dashboards:function(){return window.Nova.config.quick_theme.dashboards},isMainDashboard:function(){return"main"==this.dashboardName}}}},function(e,t,n){var r=n(2)(n(13),n(14),!1,function(e){n(11)},"data-v-132961d0",null);e.exports=r.exports},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("2f964dd8",r,!0,{})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".icon[data-v-132961d0] svg{fill:var(--info)}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){},computed:{groupedNavigations:function(){return window.Nova.config.quick_theme.navigations}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return Object.keys(e.groupedNavigations).length?n("div",{staticClass:"flex flex-wrap py-3 w-full"},e._l(e.groupedNavigations,function(t,r){return n("div",{key:r,staticClass:"flex flex-wrap w-1/3 p-4 border-40 border-r"},[n("div",{staticClass:"icon w-1/3 p-4",domProps:{innerHTML:e._s(r)}}),e._v(" "),n("div",{staticClass:"flex flex-col justify-center w-2/3"},e._l(t,function(t,r){return n("router-link",{key:r,staticClass:"pb-1 text-90 text-justify no-underline dim",attrs:{to:{name:t.name,params:t.params}}},[e._v(e._s(e.__(t.label)))])}),1)])}),0):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard-navigation"},[n("div",{staticClass:"flex justify-arround"},e._l(e.dashboards,function(t){return n("router-link",{key:t.key,staticClass:"card p-3 rounded-full mr-1 text-black no-underline dim",attrs:{to:{name:"dashboard.custom",params:{name:t.key},query:t.meta},exact:""}},[e._v(e._s(e.__(t.label)))])}),1),e._v(" "),e.cards.length>0?n("cards",{staticClass:"mt-6 felx",attrs:{cards:e.cards,size:"large"}}):e._e(),e._v(" "),e.isMainDashboard?n("navigation",{staticClass:"card mt-8"}):e._e()],1)},staticRenderFns:[]}},function(e,t){}]);