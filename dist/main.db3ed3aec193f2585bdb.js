!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);n(4);new(n(7));localStorage?console.log("We can continue"):console.log("This isn't going to work out")},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){"use strict";var r,o={},s=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function a(e,t){for(var n=[],r={},o=0;o<e.length;o++){var s=e[o],i=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],s=o[r.id],i=0;if(s){for(s.refs++;i<s.parts.length;i++)s.parts[i](r.parts[i]);for(;i<r.parts.length;i++)s.parts.push(g(r.parts[i],t))}else{for(var a=[];i<r.parts.length;i++)a.push(g(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function m(e,t,n){var r=n.css,o=n.media,s=n.sourceMap;if(o&&e.setAttribute("media",o),s&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,p=0;function g(e,t){var n,r,o;if(t.singleton){var s=p++;n=h||(h=u(t)),r=f.bind(null,n,s,!1),o=f.bind(null,n,s,!0)}else n=u(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s());var n=a(e,t);return c(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var i=n[s],u=o[i.id];u&&(u.refs--,r.push(u))}e&&c(a(e,t),t);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}},function(e,t,n){var r={"./clouds.svg":5,"./favicon.ico":6};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=4},function(e,t,n){e.exports=n.p+"./assets/clouds.svg?19461b5bfc69ee6c637d55f7f5932a4f"},function(e,t,n){e.exports=n.p+"favicon.ico"},function(e,t,n){const r=n(8),o=n(9),s=n(11);e.exports=class{constructor(){this.clock=new r(this),this.entries=new o(this),document.getElementById("start-timer").addEventListener("click",()=>this.clock.start()),document.getElementById("stop-timer").addEventListener("click",()=>{let e=this.clock.stop();s.data(e,this.entries);s.dom(e);this.entries.newEntry(data)})}newEntry(){clock.stop()}}},function(e,t){e.exports=class{constructor(e){this.coordinator=e,this.startingTimeInfo,this.currentTimeInfo=this.startingTime,this.displaySlots={starting:{hours:document.getElementById("starting-hours"),minutes:document.getElementById("starting-minutes"),seconds:document.getElementById("starting-seconds")},current:{hours:document.getElementById("current-hours"),minutes:document.getElementById("current-minutes"),seconds:document.getElementById("current-seconds")},elapsed:{hours:document.getElementById("elapsed-hours"),minutes:document.getElementById("elapsed-minutes"),seconds:document.getElementById("elapsed-seconds")}},this.pastElapses=[],this.updateDisplay()}get currentTime(){this.currentTimeInfo=new Date;let e={seconds:this.currentTimeInfo.getSeconds(),minutes:this.currentTimeInfo.getMinutes(),hours:this.currentTimeInfo.getHours()};return Object.keys(e).forEach(t=>{let n=e[t].toString();n=2==n.length?n:"0"+n,e[t]=n}),e}get startingTime(){return this.startingTimeInfo?this.formattedTime(this.startingTimeInfo):this.nullTime}formattedTime(e){let t={seconds:e.getSeconds(),minutes:e.getMinutes(),hours:e.getHours()};return Object.keys(t).forEach(e=>{let n=t[e].toString();n=2==n.length?n:"0"+n,t[e]=n}),t}get elaspedTime(){if(!this.startingTimeInfo)return this.nullTime;let e=(this.currentTimeInfo.getTime()-this.startingTimeInfo.getTime())/1e3,t=Number.parseInt(e/3600),n={hours:t,minutes:Number.parseInt(Number.parseInt((e-3600*t)/60)),seconds:Number.parseInt(e%60)};return Object.keys(n).forEach(t=>{e=n[t].toString(),console.log(e.length),n[t]=e.length>=2?e:"0"+e}),n}get timezone(){let e=this.startingTimeInfo.getTimezoneOffset();return"UTC "+(e=0-e==0- -e?"+ ":"- "+e)}get nullTime(){return{hours:"--",minutes:"--",seconds:"--"}}updateDisplay(){let e={starting:this.startingTime,current:this.currentTime,elapsed:this.elaspedTime};Object.keys(e).forEach(t=>{let n=this.displaySlots[t];Object.keys(n).forEach(r=>n[r].innerHTML=e[t][r])}),setTimeout(()=>this.updateDisplay(),1e3)}start(){this.startingTimeInfo||(this.startingTimeInfo=new Date)}stop(){let e;return this.startingTimeInfo&&(e={starting:this.startingTimeInfo,current:this.currentTimeInfo,elapsed:this.elapsedTime},this.pastElapses.push(e),this.startingTimeInfo=void 0),e}}},function(e,t,n){const r=n(10);e.exports=class{constructor(e){localStorage.entries||(localStorage.entries={}),this.coordinator=e,this.fieldValidation={lat:r.lat,lng:r.lng,dateInfo:r.date}}get entries(){return localStorage.entries}set entries(e){localStorage.entries={}}newEntry(e){if(e instanceof Object){let t={},n=!0;e=entryMaker.compose(e),Object.keys(this.fieldValidation).forEach(r=>{e[r]&&this.fieldValidation[r](e[r])?t[r]=e[r]:n=!1}),n&&this.all.push(t)}return!1}}},function(e,t){const n=e=>"number"==typeof userLat&&!isNaN(e)&&!Number.isInteger(userLat);e.exports.coord=n;e.exports.lat=e=>n(userlat)&&(e<=90||e>=-90);e.exports.lng=e=>n(e)&&(e<=180||e>=-180);e.exports.date=e=>e instanceof Date&&!isNaN(e.valueOf())},function(e,t){e.exports.data=(e,t)=>{if(!e instanceof Object)return;if(!navigator.geolocation)return!1;pos=navigator.geolocation.getCurrentPosition(n=>{e.lat=n.coords.latitude,e.lng=n.coords.longitude,console.log(e),t.newEntry(e)},()=>{window.alert("Sorry, we couldn't access your location to complete the entry")})};e.exports.dom=e=>{if(!e instanceof Object)return;let t=document.createElement("li");return t.class="time-entry",t}}]);