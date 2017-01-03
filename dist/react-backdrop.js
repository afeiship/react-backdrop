!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","classnames","react-dom"],t):"object"==typeof exports?exports.ReactBackdrop=t(require("react"),require("classnames"),require("react-dom")):e.ReactBackdrop=t(e.react,e.classnames,e["react-dom"])}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),i=r(o),s=n(3),a=r(s);e.exports={ReactBackdrop:i.default,ReactBackdropCtrl:a.default}},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(8);var u=n(6),c=r(u),l=n(9),f=r(l),p=function(t){function n(e){o(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={visible:e.visible,animating:!1},t}return s(n,t),a(n,null,[{key:"newInstance",value:function(e){return(0,c.default)(n,e,{className:"backdrop-wrapper"})}}]),a(n,[{key:"componentWillReceiveProps",value:function(e,t){this.setState(e)}},{key:"show",value:function(){this.state.visible||this._setVisible(!0)}},{key:"hide",value:function(){this.state.visible&&this._setVisible(!1)}},{key:"_setVisible",value:function(e){var t=this;this.setState({animating:!0}),setTimeout(function(){t.setState({visible:e})})}},{key:"_onTransitionEnd",value:function(){this.setState({animating:!1}),this.props.onAnimatingEnd&&this.props.onAnimatingEnd(this.state)}},{key:"render",value:function(){return e.createElement("div",{style:this.props.style,hidden:!this.state.visible&&!this.state.animating,"data-visible":this.state.visible,onClick:this.props.onClick,onTransitionEnd:this._onTransitionEnd.bind(this),className:(0,f.default)("react-backdrop",this.props.cssClass)})}}]),n}(e.Component);p.propTypes={visible:e.PropTypes.bool,style:e.PropTypes.object,cssClass:e.PropTypes.string,onAnimatingEnd:e.PropTypes.func},p.defaultProps={visible:!1,cssClass:"",style:{}},t.default=p}).call(t,n(2))},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),a=r(s),u=void 0,c=function(){function e(){o(this,e)}return i(e,null,[{key:"createInstance",value:function(e){return u=u||a.default.newInstance(e)}},{key:"show",value:function(){u.component.show()}},{key:"hide",value:function(){u.component.hide()}}]),e}();t.default=c},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".react-backdrop{left:0;top:0;bottom:0;right:0;background:#000;opacity:.3;position:absolute;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.react-backdrop[hidden]{display:none}.react-backdrop[data-visible=false]{position:absolute;opacity:0!important}.react-backdrop[data-visible=true]{position:fixed;opacity:.3}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){(function(t,n){e.exports=function(e,r,o){var i=document.createElement("div"),s=document.body;for(var a in o)o.hasOwnProperty(a)&&(i[a]=o[a]);s.appendChild(i);const u=t.render(n.createElement(e,r),i);return{component:u,destroy:function(){t.unmountComponentAtNode(i),s.removeChild(i)}}}}).call(t,n(10),n(2))},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(c(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:s}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],s=o[1],a=o[2],u=o[3],c={css:s,media:a,sourceMap:u};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=m++;n=y||(y=a(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=f.bind(null,n),o=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],u=d[a.id];u.refs--,i.push(u)}if(e){var c=o(e);r(c,t)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete d[u.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.id,r,""]]);n(7)(r,{});r.locals&&(e.exports=r.locals)},function(e,n){e.exports=t},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-backdrop.js.map