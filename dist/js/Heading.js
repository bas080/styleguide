!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r=t("object"==typeof exports?require("react"):e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=893)}({0:function(t,r){t.exports=e},1:function(e,t,r){e.exports=r(2)()},2:function(e,t,r){"use strict";var n=r(3),o=r(4),a=r(5);e.exports=function(){function e(e,t,r,n,s,i){i!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},3:function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},4:function(e,t,r){"use strict";function n(e,t,r,n,a,s,i,u){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,a,s,i,u],p=0;c=new Error(t.replace(/%s/g,function(){return f[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=n},5:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},893:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(0),p=n(f),l=r(1),h=n(l);r(894);var d=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"getClass",value:function(e){var t=["Van-Heading"];return this.props.className&&t.push(this.props.className),t.push(e),t.join(" ")}},{key:"getMarkup",value:function(e){var t=p.default.createElement("h1",u({className:this.getClass("Van-Heading--h1")},e),this.props.children);return"h2"===this.props.size?t=p.default.createElement("h2",u({className:this.getClass("Van-Heading--h2")},e),this.props.children):"h3"===this.props.size?t=p.default.createElement("h3",u({className:this.getClass("Van-Heading--h3")},e),this.props.children):"h4"===this.props.size&&(t=p.default.createElement("h4",u({className:this.getClass("Van-Heading--h4")},e),this.props.children)),t}},{key:"render",value:function(){var e=this.props,t=(e.className,o(e,["className"]));return this.getMarkup(t)}}]),t}(f.PureComponent);d.defaultProps={className:"",size:"h1",children:""},d.propTypes={className:h.default.string,size:h.default.oneOf(["h1","h2","h3","h4"]),children:h.default.oneOfType([h.default.arrayOf(h.default.node),h.default.node])},t.default=d},894:function(e,t){}})});