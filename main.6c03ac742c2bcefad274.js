!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);n(4);new(n(7));localStorage?console.log("We can continue"):console.log("This isn't going to work out")},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){"use strict";var r,o={},s=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function a(e,t){for(var n=[],r={},o=0;o<e.length;o++){var s=e[o],i=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],s=o[r.id],i=0;if(s){for(s.refs++;i<s.parts.length;i++)s.parts[i](r.parts[i]);for(;i<r.parts.length;i++)s.parts.push(g(r.parts[i],t))}else{for(var a=[];i<r.parts.length;i++)a.push(g(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,f=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function p(e,t,n){var r=n.css,o=n.media,s=n.sourceMap;if(o&&e.setAttribute("media",o),s&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function g(e,t){var n,r,o;if(t.singleton){var s=v++;n=h||(h=u(t)),r=d.bind(null,n,s,!1),o=d.bind(null,n,s,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s());var n=a(e,t);return l(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var i=n[s],u=o[i.id];u&&(u.refs--,r.push(u))}e&&l(a(e,t),t);for(var c=0;c<r.length;c++){var f=r[c];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},function(e,t,n){var r={"./clouds.svg":5,"./favicon.ico":6};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=4},function(e,t,n){e.exports=n.p+"./assets/clouds.svg?19461b5bfc69ee6c637d55f7f5932a4f"},function(e,t,n){e.exports=n.p+"favicon.ico"},function(e,t,n){const r=n(8),o=n(9);e.exports=class{constructor(){this.clock=new r,this.entries=new o}}},function(e,t){e.exports=class{constructor(){this.displaySlots={hours:document.getElementById("hours"),minutes:document.getElementById("minutes"),seconds:document.getElementById("seconds")},console.log(this.displaySlots),this.updateDisplay(),setTimeout(()=>this.updateDisplay(),1e3)}get time(){let e=Date.now(),t=e-86400*Math.floor(e/86400),n=Math.floor(t/60);return{seconds:t-60*n,minutes:Math.floor(n-60*currentHours),hours:Math.floor(n/60)}}updateDisplay(){let e=this.time;Object.keys(this.displaySlots).forEach(t=>this.displaySlots[t].innerHtml=e[t])}}},function(e,t,n){const r=n(10);e.exports=class{constructor(){localStorage.entries||(localStorage.entries={}),this.fieldValidation={lat:r.lat,lng:r.lng,dateInfo:r.date}}get entries(){return localStorage.entries}set entries(e){localStorage.entries={}}newEntry(e){if(e instanceof Object){let t={},n=!0;Object.keys(this.fieldValidation).forEach(r=>{e[r]&&this.fieldValidation[r](e[r])?t[r]=e[r]:n=!1}),n&&this.all.push(t)}return!1}}},function(e,t){const n=e=>"number"==typeof userLat&&!isNaN(e)&&!Number.isInteger(userLat);e.exports.coord=n;e.exports.lat=e=>n(userlat)&&(e<=90||e>=-90);e.exports.lng=e=>n(e)&&(e<=180||e>=-180);e.exports.date=e=>e instanceof Date&&!isNaN(e.valueOf())}]);