webpackJsonp([18],{628:function(t,e,n){var o=n(65),r=n(629),i=n(212).PageRenderer;i.__esModule&&(i=i.default);var a=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(650)}},componentWillMount:function(){},render:function(){return o.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,t.exports=a},629:function(t,e,n){"use strict";var o=n(65),r=n(630);if("undefined"===typeof o)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var i=(new o.Component).updater;t.exports=r(o.Component,o.isValidElement,i)},630:function(t,e,n){"use strict";function o(t){return t}function r(t,e,n){function r(t,e){var n=N.hasOwnProperty(e)?N[e]:null;v.hasOwnProperty(e)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function c(t,n){if(n){s("function"!==typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=t.prototype,i=o.__reactAutoBindPairs;n.hasOwnProperty(p)&&_.mixins(t,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==p){var c=n[a],u=o.hasOwnProperty(a);if(r(u,a),_.hasOwnProperty(a))_[a](t,c);else{var l=N.hasOwnProperty(a),m="function"===typeof c,h=m&&!l&&!u&&!1!==n.autobind;if(h)i.push(a,c),o[a]=c;else if(u){var y=N[a];s(l&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,a),"DEFINE_MANY_MERGED"===y?o[a]=f(o[a],c):"DEFINE_MANY"===y&&(o[a]=d(o[a],c))}else o[a]=c}}}else;}function u(t,e){if(e)for(var n in e){var o=e[n];if(e.hasOwnProperty(n)){var r=n in _;s(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in t;s(!i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),t[n]=o}}}function l(t,e){s(t&&e&&"object"===typeof t&&"object"===typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(s(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),o=e.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return l(r,n),l(r,o),r}}function d(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function m(t,e){var n=e.bind(t);return n}function h(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var o=e[n],r=e[n+1];t[o]=m(t,r)}}function y(t){var e=o(function(t,o,r){this.__reactAutoBindPairs.length&&h(this),this.props=t,this.context=o,this.refs=a,this.updater=r||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;s("object"===typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=i});e.prototype=new I,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],E.forEach(c.bind(null,e)),c(e,D),c(e,t),c(e,g),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),s(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in N)e.prototype[r]||(e.prototype[r]=null);return e}var E=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},_={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)c(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=i({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=i({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=i({},t.propTypes,e)},statics:function(t,e){u(t,e)},autobind:function(){}},D={componentDidMount:function(){this.__isMounted=!0}},g={componentWillUnmount:function(){this.__isMounted=!1}},v={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},I=function(){};return i(I.prototype,t.prototype,v),y}var i=n(136),a=n(137),s=n(631),p="mixins";t.exports=r},631:function(t,e,n){"use strict";function o(t,e,n,o,i,a,s,p){if(r(e),!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,i,a,s,p],l=0;c=new Error(e.replace(/%s/g,function(){return u[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var r=function(t){};t.exports=o},650:function(t,e){t.exports='```react\n<PhoneCard\n  number="0 880 444 555"\n  description="Hulp nodig? We zijn vandaag bereikbaar tot 17.00"\n/>\n```\n\n\n### API\n\n```table\ncolumns:\n  - Property\n  - Description\n  - Type\n  - Default\nrows:\n  - Property: number\n    Description: phone number\n    Type: string\n  - Property: description\n    Description: text description\n    Type: string\n  - Property: className\n    Description: sdfdsf\n    Type: string\n```\n'}});
//# sourceMappingURL=18.ea3dcf39.chunk.js.map