!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("array-from"),require("classnames"),require("object-assign"),require("react-append-to-document"),require("react-visible")):"function"==typeof define&&define.amd?define(["react","array-from","classnames","object-assign","react-append-to-document","react-visible"],t):"object"==typeof exports?exports.ReactBackdrop=t(require("react"),require("array-from"),require("classnames"),require("object-assign"),require("react-append-to-document"),require("react-visible")):e.ReactBackdrop=t(e.react,e["array-from"],e.classnames,e["object-assign"],e["react-append-to-document"],e["react-visible"])}(this,function(e,t,r,n,o,a){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(1),a=n(o),i=r(3),u=n(i);e.exports={ReactBackdrop:a.default,ReactBackdropCtrl:u.default}},function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return(0,f.default)(e)}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(8),f=n(s),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(7);var d=(r(2),r(12)),v=n(d),h=r(11),b=n(h),y=r(9),m=n(y),g=r(10),x=n(g),j=function(t){function r(){return i(this,r),u(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return c(r,t),p(r,[{key:"render",value:function(){var t=this.props,r=t.className,n=a(t,["className"]),o=(0,m.default)("react-backdrop",r);return e.createElement(v.default,l({className:o},n))}}],[{key:"newInstance",value:function(e){var t=e.className,r=(a(e,["className"]),(0,m.default)("react-backdrop",t)),n=x.default.apply(void 0,o(e).concat([{className:r}]));return(0,b.default)(v.default,n,{className:"react-backdrop-container"})}}]),r}(v.default);t.default=j}).call(t,r(2))},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),u=n(i),c=void 0,s=function(){function e(){o(this,e)}return a(e,null,[{key:"createInstance",value:function(e){return c=c||u.default.newInstance(e)}},{key:"show",value:function(e){c.component.show(e)}},{key:"hide",value:function(e){c.component.hide(e)}},{key:"destroy",value:function(){c.destroy(),c=null}}]),e}();t.default=s},function(e,t,r){t=e.exports=r(5)(),t.push([e.id,".react-backdrop{left:0;top:0;bottom:0;right:0;background:#000;opacity:.3;position:absolute;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.react-backdrop[hidden]{display:none}.react-backdrop[data-visible=false]{opacity:.01!important}.react-backdrop[data-visible=true]{opacity:.3}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(s(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(s(n.parts[a],t));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],a=o[0],i=o[1],u=o[2],c=o[3],s={css:i,media:u,sourceMap:c};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function a(e,t){var r=b(),n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function s(e,t){var r,n,o;if(t.singleton){var a=m++;r=y||(y=u(t)),n=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(t),n=p.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=u(t),n=l.bind(null,r),o=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function f(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function l(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=v(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=v(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var u=r[i],c=d[u.id];c.refs--,a.push(c)}if(e){var s=o(e);n(s,t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete d[c.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.id,n,""]]);r(6)(n,{});n.locals&&(e.exports=n.locals)},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-backdrop.js.map