!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);n(4);n(7);localStorage?console.log("We can continue"):console.log("This isn't going to work out")},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function u(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(b(r.parts[a],t))}else{for(var s=[];a<r.parts.length;a++)s.push(b(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var f,l=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function b(e,t){var n,r,o;if(t.singleton){var i=h++;n=v||(v=c(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e,t);return u(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i],c=o[a.id];c&&(c.refs--,r.push(c))}e&&u(s(e,t),t);for(var f=0;f<r.length;f++){var l=r[f];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete o[l.id]}}}}},function(e,t,n){var r={"./clouds.svg":5,"./favicon.ico":6};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=4},function(e,t,n){e.exports=n.p+"./assets/clouds.svg?19461b5bfc69ee6c637d55f7f5932a4f"},function(e,t,n){e.exports=n.p+"favicon.ico"},function(e,t,n){n(8),n(9);e.exports=class{constructor(){}}},function(e,t){},function(e,t){e.exports=entries}]);