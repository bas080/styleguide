!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"),require("classnames"));else if("function"==typeof define&&define.amd)define(["react","prop-types","classnames"],t);else{var r="object"==typeof exports?t(require("react"),require("prop-types"),require("classnames")):t(e.react,e["prop-types"],e.classnames);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=350)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},12:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),f=n(i),p=r(1),y=n(p),d=r(2),b=n(d),h=r(13),v=n(h);r(15);var m=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.source,n=e.animation,a=o(e,["className","source","animation"]);return(0,v.default)(r)?f.default.createElement("span",u({className:(0,b.default)("Van-Icon",t),dangerouslySetInnerHTML:{__html:""===n?r:r.replace("<svg ",'<svg class="Van-u-animation--'+n+'" ')}},a)):null}}]),t}(i.PureComponent);m.defaultProps={className:"",source:"",animation:""},m.propTypes={className:y.default.string,source:y.default.string,animation:y.default.oneOf(["","spin","pulse"])},t.default=m},13:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(14),o=/^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i;t.default=function(e){return o.test(e.toString().replace(n,""))}},14:function(e,t,r){"use strict";e.exports=/<!--([\s\S]*?)-->/g},15:function(e,t){},2:function(e,t){e.exports=r},350:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),f=n(i),p=r(1),y=n(p),d=r(2),b=n(d),h=r(12),v=n(h),m=r(87),O=n(m);r(351);var g=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,n=e.type,a=o(e,["className","children","type"]);return f.default.createElement("span",u({className:(0,b.default)("Van-Sticker",{"Van-Sticker--circle":"circle"===n,"Van-Sticker--splash":"splash"===n},t)},a),"splash"===n&&f.default.createElement(v.default,{source:O.default,className:"Van-Sticker-icon Van-u-color-yellow-primary"}),"string"==typeof r?f.default.createElement("span",null,r):r)}}]),t}(i.PureComponent);g.defaultProps={className:"",children:"",type:"circle"},g.propTypes={className:y.default.string,children:y.default.node,type:y.default.oneOf(["circle","splash"])},t.default=g},351:function(e,t){},87:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481 512"><path d="M223.309 12.221c9.439-16.295 24.912-16.295 34.382 0l22.004 37.948c9.439 16.279 31.163 23.45 48.229 15.904l39.789-17.56c17.065-7.53 29.567 1.703 27.787 20.513l-4.157 43.854c-1.75 18.81 11.658 37.558 29.818 41.651l42.353 9.545c18.19 4.093 22.974 19.029 10.627 33.183l-28.725 32.996c-12.346 14.17-12.346 37.324 0 51.495l28.725 32.98c12.347 14.186 7.563 29.12-10.627 33.183l-42.353 9.561c-18.16 4.095-31.568 22.842-29.818 41.651l4.157 43.839c1.78 18.81-10.722 28.058-27.787 20.528l-39.789-17.561c-17.065-7.53-38.789-.375-48.229 15.904l-22.004 37.933c-9.471 16.311-24.943 16.311-34.382 0l-22.004-37.933c-9.471-16.279-31.163-23.435-48.229-15.904l-39.789 17.561c-17.066 7.529-29.6-1.719-27.818-20.528l4.157-43.839c1.781-18.81-11.628-37.557-29.787-41.651l-42.353-9.561C-.705 343.85-5.487 328.916 6.859 314.73l28.725-32.98c12.346-14.171 12.346-37.324 0-51.495L6.859 197.259c-12.346-14.154-7.563-29.09 10.627-33.183l42.353-9.545c18.159-4.093 31.568-22.841 29.787-41.651l-4.157-43.854c-1.782-18.81 10.752-28.042 27.818-20.513l39.789 17.56c17.066 7.546 38.758.375 48.229-15.904l22.004-37.948z"></path></svg>'}})});