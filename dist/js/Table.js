!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"));else if("function"==typeof define&&define.amd)define(["react","prop-types"],t);else{var r="object"==typeof exports?t(require("react"),require("prop-types")):t(e.react,e["prop-types"]);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=348)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},348:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),s=n(c),p=r(1),i=n(p);r(349);var d=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),f(t,[{key:"getClass",value:function(){var e=["Van-Table"];return this.props.full&&e.push("Van-Table--full"),e.join(" ").trim()}},{key:"render",value:function(){return s.default.createElement("table",{className:this.getClass()},s.default.createElement("thead",{className:"Van-Table-head"},s.default.createElement("tr",null,this.props.columns.map(function(e){return s.default.createElement("th",u({key:e.value,className:"Van-Table-headCell"},e.props),e.value)}))),s.default.createElement("tbody",{className:"Van-Table-body"},this.props.rows.map(function(e){return s.default.createElement("tr",u({key:e,className:"Van-Table-row"},e.props),e.cells.map(function(e){return s.default.createElement("th",u({key:e.value,className:"Van-Table-cell"},e.props),e.value)}))})),s.default.createElement("tfoot",null,this.props.footer.map(function(e){return s.default.createElement("tr",u({key:e,className:"Van-Table-footerRow"},e.props),e.cells.map(function(e){return s.default.createElement("td",u({key:e.value,className:"Van-Table-footerCell"},e.props),e.value)}))})))}}]),t}(c.Component);d.defaultProps={columns:[],rows:[],footer:[],className:"",full:!1},d.propTypes={className:i.default.string,columns:i.default.arrayOf(i.default.object),rows:i.default.arrayOf(i.default.object),footer:i.default.arrayOf(i.default.object),full:i.default.bool},t.default=d},349:function(e,t){}})});