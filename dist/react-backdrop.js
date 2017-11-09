!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("prop-types"),require("react"),require("react-append-to-document"),require("react-visible")):"function"==typeof define&&define.amd?define(["classnames","prop-types","react","react-append-to-document","react-visible"],t):"object"==typeof exports?exports.ReactBackdrop=t(require("classnames"),require("prop-types"),require("react"),require("react-append-to-document"),require("react-visible")):e.ReactBackdrop=t(e.classnames,e["prop-types"],e.react,e["react-append-to-document"],e["react-visible"])}(this,function(e,t,n,r,o){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),a=r(o),i=n(2),u=r(i);e.exports={ReactBackdrop:a.default,ReactBackdropCtrl:u.default}},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function c(e){var t=e.className,n=u(e,["className"]),r=(0,b.default)("react-backdrop",t);return f({className:r},n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n(6);var l=n(8),p=(r(l),n(11)),d=r(p),v=n(10),h=r(v),y=n(7),b=r(y),m=function(t){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),s(n,[{key:"render",value:function(){var t=c(this.props);return e.createElement(d.default,t)}}],[{key:"newInstance",value:function(e){return(0,h.default)(d.default,c(e),{className:"react-backdrop-container"})}}]),n}(d.default);t.default=m}).call(t,n(9))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=r(i),c=void 0,s=function(){function e(){o(this,e)}return a(e,null,[{key:"createInstance",value:function(e){return c=c||u.default.newInstance(e)}},{key:"show",value:function(e){c.component.show(e)}},{key:"hide",value:function(e){c.component.hide(e)}},{key:"destroy",value:function(){c&&(c.destroy(),c=null)}}]),e}();t.default=s},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".react-backdrop{left:0;top:0;bottom:0;right:0;background:#000;opacity:.3;position:absolute;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.react-backdrop[hidden]{display:none!important}.react-backdrop[data-visible=false]{opacity:.01!important}.react-backdrop[data-visible=true]{opacity:.3}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(s(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(s(r.parts[a],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],u=o[2],c=o[3],s={css:i,media:u,sourceMap:c};n[a]?n[a].parts.push(s):t.push(n[a]={id:a,parts:[s]})}return t}function a(e,t){var n=y(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function s(e,t){var n,r,o;if(t.singleton){var a=m++;n=b||(b=u(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=l.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function l(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=v(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),y=v(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var u=n[i],c=d[u.id];c.refs--,a.push(c)}if(e){var s=o(e);r(s,t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete d[c.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o}])});
//# sourceMappingURL=react-backdrop.js.map