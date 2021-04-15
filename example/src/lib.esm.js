/*eslint-disable*/
import e from"react";import t from"react-dom";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e){var t={exports:{}};return e(t,t.exports),t.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var a="function"==typeof Symbol&&Symbol.for,i=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,u=a?Symbol.for("react.fragment"):60107,f=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.profiler"):60114,l=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,y=a?Symbol.for("react.async_mode"):60111,d=a?Symbol.for("react.concurrent_mode"):60111,m=a?Symbol.for("react.forward_ref"):60112,v=a?Symbol.for("react.suspense"):60113,b=a?Symbol.for("react.suspense_list"):60120,h=a?Symbol.for("react.memo"):60115,g=a?Symbol.for("react.lazy"):60116,E=a?Symbol.for("react.block"):60121,O=a?Symbol.for("react.fundamental"):60117,S=a?Symbol.for("react.responder"):60118,w=a?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case y:case d:case u:case s:case f:case v:return e;default:switch(e=e&&e.$$typeof){case p:case m:case g:case h:case l:return e;default:return t}}case c:return t}}}function j(e){return x(e)===d}var $={AsyncMode:y,ConcurrentMode:d,ContextConsumer:p,ContextProvider:l,Element:i,ForwardRef:m,Fragment:u,Lazy:g,Memo:h,Portal:c,Profiler:s,StrictMode:f,Suspense:v,isAsyncMode:function(e){return j(e)||x(e)===y},isConcurrentMode:j,isContextConsumer:function(e){return x(e)===p},isContextProvider:function(e){return x(e)===l},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},isForwardRef:function(e){return x(e)===m},isFragment:function(e){return x(e)===u},isLazy:function(e){return x(e)===g},isMemo:function(e){return x(e)===h},isPortal:function(e){return x(e)===c},isProfiler:function(e){return x(e)===s},isStrictMode:function(e){return x(e)===f},isSuspense:function(e){return x(e)===v},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===u||e===d||e===s||e===f||e===v||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===l||e.$$typeof===p||e.$$typeof===m||e.$$typeof===O||e.$$typeof===S||e.$$typeof===w||e.$$typeof===E)},typeOf:x},_=o((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var y=e.type;switch(y){case f:case s:case o:case i:case a:case p:return y;default:var v=y&&y.$$typeof;switch(v){case u:case l:case m:case d:case c:return v;default:return t}}case n:return t}}}var O=f,S=s,w=u,x=c,j=r,$=l,_=o,C=m,P=d,T=n,N=i,I=a,k=p,M=!1;function R(e){return E(e)===s}t.AsyncMode=O,t.ConcurrentMode=S,t.ContextConsumer=w,t.ContextProvider=x,t.Element=j,t.ForwardRef=$,t.Fragment=_,t.Lazy=C,t.Memo=P,t.Portal=T,t.Profiler=N,t.StrictMode=I,t.Suspense=k,t.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||E(e)===f},t.isConcurrentMode=R,t.isContextConsumer=function(e){return E(e)===u},t.isContextProvider=function(e){return E(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return E(e)===l},t.isFragment=function(e){return E(e)===o},t.isLazy=function(e){return E(e)===m},t.isMemo=function(e){return E(e)===d},t.isPortal=function(e){return E(e)===n},t.isProfiler=function(e){return E(e)===i},t.isStrictMode=function(e){return E(e)===a},t.isSuspense=function(e){return E(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===i||e===a||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===c||e.$$typeof===u||e.$$typeof===l||e.$$typeof===b||e.$$typeof===h||e.$$typeof===g||e.$$typeof===v)},t.typeOf=E}()})),C=o((function(e){"production"===process.env.NODE_ENV?e.exports=$:e.exports=_})),P=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;function I(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var k=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,o=I(e),a=1;a<arguments.length;a++){for(var i in r=Object(arguments[a]))T.call(r,i)&&(o[i]=r[i]);if(P){n=P(r);for(var c=0;c<n.length;c++)N.call(r,n[c])&&(o[n[c]]=r[n[c]])}}return o},M="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R=function(){};if("production"!==process.env.NODE_ENV){var A=M,V={},L=Function.call.bind(Object.prototype.hasOwnProperty);R=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function D(e,t,r,n,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(L(e,a)){var i;try{if("function"!=typeof e[a]){var c=Error((n||"React class")+": "+r+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw c.name="Invariant Violation",c}i=e[a](t,a,n,r,null,A)}catch(e){i=e}if(!i||i instanceof Error||R((n||"React class")+": type specification of "+r+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in V)){V[i.message]=!0;var u=o?o():"";R("Failed "+r+" type: "+i.message+(null!=u?u:""))}}}D.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(V={})};var F=D,z=Function.call.bind(Object.prototype.hasOwnProperty),W=function(){};function q(){return null}"production"!==process.env.NODE_ENV&&(W=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}});var U=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator;var n="<<anonymous>>",o={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:c(q),arrayOf:function(e){return c((function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var c=t[r];if(!Array.isArray(c))return new i("Invalid "+o+" `"+a+"` of type `"+s(c)+"` supplied to `"+n+"`, expected an array.");for(var u=0;u<c.length;u++){var f=e(c,u,n,o,a+"["+u+"]",M);if(f instanceof Error)return f}return null}))},element:c((function(t,r,n,o,a){var c=t[r];return e(c)?null:new i("Invalid "+o+" `"+a+"` of type `"+s(c)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:c((function(e,t,r,n,o){var a=e[t];return C.isValidElementType(a)?null:new i("Invalid "+n+" `"+o+"` of type `"+s(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return c((function(t,r,o,a,c){if(!(t[r]instanceof e)){var u=e.name||n;return new i("Invalid "+a+" `"+c+"` of type `"+(((f=t[r]).constructor&&f.constructor.name?f.constructor.name:n)+"` supplied to `")+o+"`, expected instance of `"+u+"`.")}var f;return null}))},node:c((function(e,t,r,n,o){return f(e[t])?null:new i("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return c((function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=t[r],u=s(c);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected an object.");for(var f in c)if(z(c,f)){var l=e(c,f,n,o,a+"."+f,M);if(l instanceof Error)return l}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&W(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),q;function t(t,r,n,o,c){for(var u=t[r],f=0;f<e.length;f++)if(a(u,e[f]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===l(t)?String(t):t}));return new i("Invalid "+o+" `"+c+"` of value `"+String(u)+"` supplied to `"+n+"`, expected one of "+s+".")}return c(t)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&W("Invalid argument supplied to oneOfType, expected an instance of array."),q;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return W("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(r)+" at index "+t+"."),q}return c((function(t,r,n,o,a){for(var c=0;c<e.length;c++)if(null==(0,e[c])(t,r,n,o,a,M))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")}))},shape:function(e){return c((function(t,r,n,o,a){var c=t[r],u=s(c);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");for(var f in e){var l=e[f];if(l){var p=l(c,f,n,o,a+"."+f,M);if(p)return p}}return null}))},exact:function(e){return c((function(t,r,n,o,a){var c=t[r],u=s(c);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var f=k({},t[r],e);for(var l in f){var p=e[l];if(!p)return new i("Invalid "+o+" `"+a+"` key `"+l+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(c,l,n,o,a+"."+l,M);if(y)return y}return null}))}};function a(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function i(e){this.message=e,this.stack=""}function c(e){if("production"!==process.env.NODE_ENV)var r={},o=0;function a(a,c,u,f,s,l,p){if(f=f||n,l=l||u,p!==M){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var d=f+":"+u;!r[d]&&o<3&&(W("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[d]=!0,o++)}}return null==c[u]?a?null===c[u]?new i("The "+s+" `"+l+"` is marked as required in `"+f+"`, but its value is `null`."):new i("The "+s+" `"+l+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(c,u,f,s,l)}var c=a.bind(null,!1);return c.isRequired=a.bind(null,!0),c}function u(e){return c((function(t,r,n,o,a,c){var u=t[r];return s(u)!==e?new i("Invalid "+o+" `"+a+"` of type `"+l(u)+"` supplied to `"+n+"`, expected `"+e+"`."):null}))}function f(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(f);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,a=n.call(t);if(n!==t.entries){for(;!(o=a.next()).done;)if(!f(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!f(i[1]))return!1}return!0;default:return!1}}function s(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function l(e){if(null==e)return""+e;var t=s(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function p(e){var t=l(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,o.checkPropTypes=F,o.resetWarningCache=F.resetWarningCache,o.PropTypes=o,o};function Y(){}function H(){}H.resetWarningCache=Y;var J=o((function(e){if("production"!==process.env.NODE_ENV){var t=C;e.exports=U(t.isElement,!0)}else e.exports=function(){function e(e,t,r,n,o,a){if(a!==M){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:H,resetWarningCache:Y};return r.PropTypes=r,r}()})),B=function(o){function a(){return null!==o&&o.apply(this,arguments)||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(a,o),a.init=function(e){a.maxCount=e.maxCount||1,a.exampleList=[],a.duration=e.duration||2e3,a.rootEl=e.rootEl},a.judegMaxCount=function(){return a.exampleList.length<this.maxCount},a.createEl=function(){return document.createElement("div")},a.render=function(r,o){a.rootEl.appendChild(r),t.render(e.createElement(a,n({},o)),r)},a.info=function(e){var t=a.createEl();a.judegMaxCount()&&(a.exampleList.push(t),a.render(t,e),setTimeout((function(){a.hide()}),a.duration))},a.error=function(e){var t=a.createEl();a.judegMaxCount()&&(a.exampleList.push(t),e.type="error",a.render(t,e),setTimeout((function(){a.hide()}),e.duration||a.duration))},a.hide=function(){a.rootEl.removeChild(a.exampleList[0]),a.exampleList.shift()},a.prototype.getContent=function(){switch(this.props.type){case"error":return e.createElement(e.Fragment,null,e.createElement("span",{className:"icon iconfont icon-failure_toast"}),e.createElement("span",{className:"iconfont"},"3"),e.createElement("div",{className:"error",dangerouslySetInnerHTML:{__html:this.props.text}}));default:return e.createElement(e.Fragment,null,e.createElement("span",{className:"icon iconfont icon-checked_toast"}),e.createElement("div",{className:"info",dangerouslySetInnerHTML:{__html:this.props.text}}))}},a.prototype.render=function(){return e.createElement("div",{className:"contianer"},this.getContent())},a.exampleList=[],a.duration=2e3,a.rootEl=null,a.propTypes={text:J.string,type:J.string,duration:J.number},a}(e.Component);export{B as Toast};
