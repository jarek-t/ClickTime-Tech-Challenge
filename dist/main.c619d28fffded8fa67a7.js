!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);n(4);new(n(7));localStorage?console.log("We can continue"):console.log("This isn't going to work out")},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},function(t,e,n){"use strict";var r,o={},s=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function a(t,e){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=e.base?s[0]+e.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}function u(t,e){for(var n=0;n<t.length;n++){var r=t[n],s=o[r.id],i=0;if(s){for(s.refs++;i<s.parts.length;i++)s.parts[i](r.parts[i]);for(;i<r.parts.length;i++)s.parts.push(g(r.parts[i],e))}else{for(var a=[];i<r.parts.length;i++)a.push(g(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:a}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var s=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}function m(t,e,n){var r=n.css,o=n.media,s=n.sourceMap;if(o&&t.setAttribute("media",o),s&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,p=0;function g(t,e){var n,r,o;if(e.singleton){var s=p++;n=h||(h=c(e)),r=f.bind(null,n,s,!1),o=f.bind(null,n,s,!0)}else n=c(e),r=m.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s());var n=a(t,e);return u(n,e),function(t){for(var r=[],s=0;s<n.length;s++){var i=n[s],c=o[i.id];c&&(c.refs--,r.push(c))}t&&u(a(t,e),e);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}},function(t,e,n){var r={"./clouds.svg":5,"./favicon.ico":6};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id=4},function(t,e,n){t.exports=n.p+"./assets/clouds.svg?19461b5bfc69ee6c637d55f7f5932a4f"},function(t,e,n){t.exports=n.p+"favicon.ico"},function(t,e,n){const r=n(8),o=n(9),s=n(11);t.exports=class{constructor(){this.clock=new r(this),this.entries=new o(this),document.getElementById("start-timer").addEventListener("click",()=>this.clock.start()),document.getElementById("stop-timer").addEventListener("click",()=>{let t=this.clock.stop();s.data(t,this.entries);s.dom(t)})}newEntry(){clock.stop()}}},function(t,e){t.exports=class{constructor(t){this.coordinator=t,this.startingTimeInfo,this.currentTimeInfo=this.startingTime,this.displaySlots={starting:{hours:document.getElementById("starting-hours"),minutes:document.getElementById("starting-minutes"),seconds:document.getElementById("starting-seconds")},current:{hours:document.getElementById("current-hours"),minutes:document.getElementById("current-minutes"),seconds:document.getElementById("current-seconds")},elapsed:{hours:document.getElementById("elapsed-hours"),minutes:document.getElementById("elapsed-minutes"),seconds:document.getElementById("elapsed-seconds")}},this.pastElapses=[],this.updateDisplay()}get currentTime(){this.currentTimeInfo=new Date;let t={seconds:this.currentTimeInfo.getSeconds(),minutes:this.currentTimeInfo.getMinutes(),hours:this.currentTimeInfo.getHours()};return Object.keys(t).forEach(e=>{let n=t[e].toString();n=2==n.length?n:"0"+n,t[e]=n}),t}get startingTime(){return this.startingTimeInfo?this.formattedTime(this.startingTimeInfo):this.nullTime}formattedTime(t){let e={seconds:t.getSeconds(),minutes:t.getMinutes(),hours:t.getHours()};return Object.keys(e).forEach(t=>{let n=e[t].toString();n=2==n.length?n:"0"+n,e[t]=n}),e}get elaspedTime(){if(!this.startingTimeInfo)return this.nullTime;let t=(this.currentTimeInfo.getTime()-this.startingTimeInfo.getTime())/1e3,e=Number.parseInt(t/3600),n={hours:e,minutes:Number.parseInt(Number.parseInt((t-3600*e)/60)),seconds:Number.parseInt(t%60)};return Object.keys(n).forEach(e=>{t=n[e].toString(),console.log(t.length),n[e]=t.length>=2?t:"0"+t}),n}get timezone(){let t=this.startingTimeInfo.getTimezoneOffset();return"UTC "+(t=0-t==0- -t?"+ ":"- "+t)}get nullTime(){return{hours:"--",minutes:"--",seconds:"--"}}updateDisplay(){let t={starting:this.startingTime,current:this.currentTime,elapsed:this.elaspedTime};Object.keys(t).forEach(e=>{let n=this.displaySlots[e];Object.keys(n).forEach(r=>n[r].innerHTML=t[e][r])}),setTimeout(()=>this.updateDisplay(),1e3)}start(){this.startingTimeInfo||(this.startingTimeInfo=new Date)}stop(){let t;return this.startingTimeInfo&&(t={starting:this.startingTimeInfo,current:this.currentTimeInfo,elapsed:this.elapsedTime},this.pastElapses.push(t),this.startingTimeInfo=void 0),t}}},function(t,e,n){const r=n(10);t.exports=class{constructor(t){localStorage.entries||(localStorage.entries={}),this.coordinator=t,this.fieldValidation={lat:r.lat,lng:r.lng,dateInfo:r.date}}get entries(){return localStorage.entries}set entries(t){localStorage.entries={}}newEntry(t){if(t instanceof Object){let e={},n=!0;Object.keys(this.fieldValidation).forEach(r=>{t[r]&&this.fieldValidation[r](t[r])?e[r]=t[r]:n=!1}),n&&this.all.push(e)}return!1}}},function(t,e){const n=t=>"number"==typeof userLat&&!isNaN(t)&&!Number.isInteger(userLat);t.exports.coord=n;t.exports.lat=t=>n(userlat)&&(t<=90||t>=-90);t.exports.lng=t=>n(t)&&(t<=180||t>=-180);t.exports.date=t=>t instanceof Date&&!isNaN(t.valueOf())},function(t,e){t.exports.data=(t,e)=>{if(!t instanceof Object)return;if(!navigator.geolocation)return!1;pos=navigator.geolocation.getCurrentPosition(n=>{t.lat=n.coords.latitude,t.lng=n.coords.longitude,console.log(t),e.newEntry(t)},()=>{window.alert("Sorry, we couldn't access your location to complete the entry")})};t.exports.dom=t=>{if(!t instanceof Object)return;let e=document.createElement("li");return e.class="time-entry",e}}]);