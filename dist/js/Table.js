!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r=t("object"==typeof exports?require("react"):e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=921)}({0:function(t,r){t.exports=e},1:function(e,t,r){e.exports=r(2)()},2:function(e,t,r){"use strict";var n=r(3),o=r(4),a=r(5);e.exports=function(){function e(e,t,r,n,u,l){l!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},3:function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},4:function(e,t,r){"use strict";function n(e,t,r,n,a,u,l,s){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,a,u,l,s],i=0;c=new Error(t.replace(/%s/g,function(){return f[i++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=n},5:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},921:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),f=n(c),i=r(1),p=n(i);r(922);var d=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"getClass",value:function(){var e=["Van-Table"];return this.props.full&&e.push("Van-Table--full"),e.join(" ").trim()}},{key:"render",value:function(){return f.default.createElement("table",{className:this.getClass()},f.default.createElement("thead",{className:"Van-Table-head"},f.default.createElement("tr",null,this.props.columns.map(function(e){return f.default.createElement("th",l({key:e.value,className:"Van-Table-headCell"},e.props),e.value)}))),f.default.createElement("tbody",{className:"Van-Table-body"},this.props.rows.map(function(e){return f.default.createElement("tr",l({key:e,className:"Van-Table-row"},e.props),e.cells.map(function(e){return f.default.createElement("th",l({key:e.value,className:"Van-Table-cell"},e.props),e.value)}))})),f.default.createElement("tfoot",null,this.props.footer.map(function(e){return f.default.createElement("tr",l({key:e,className:"Van-Table-footerRow"},e.props),e.cells.map(function(e){return f.default.createElement("td",l({key:e.value,className:"Van-Table-footerCell"},e.props),e.value)}))})))}}]),t}(c.Component);d.defaultProps={columns:[],rows:[],footer:[],className:"",full:!1},d.propTypes={className:p.default.string,columns:p.default.arrayOf(p.default.object),rows:p.default.arrayOf(p.default.object),footer:p.default.arrayOf(p.default.object),full:p.default.bool},t.default=d},922:function(e,t){}})});