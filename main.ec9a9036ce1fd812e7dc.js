!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);n(4);new(n(7));localStorage?console.log("We can continue"):console.log("This isn't going to work out")},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var s={insert:"head",singleton:!1};n(3)(r,s);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){"use strict";var r,s={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function a(e,t){for(var n=[],r={},s=0;s<e.length;s++){var i=e[s],o=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(a):n.push(r[o]={id:o,parts:[a]})}return n}function u(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=s[r.id],o=0;if(i){for(i.refs++;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(g(r.parts[o],t))}else{for(var a=[];o<r.parts.length;o++)a.push(g(r.parts[o],t));s[r.id]={id:r.id,refs:1,parts:a}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,s);else{var i=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function m(e,t,n){var r=n.css,s=n.media,i=n.sourceMap;if(s&&e.setAttribute("media",s),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function g(e,t){var n,r,s;if(t.singleton){var i=h++;n=p||(p=c(t)),r=f.bind(null,n,i,!1),s=f.bind(null,n,i,!0)}else n=c(t),r=m.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=a(e,t);return u(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i],c=s[o.id];c&&(c.refs--,r.push(c))}e&&u(a(e,t),t);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete s[d.id]}}}}},function(e,t,n){var r={"./clouds.svg":5,"./favicon.ico":6};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id=4},function(e,t,n){e.exports=n.p+"./assets/clouds.svg?19461b5bfc69ee6c637d55f7f5932a4f"},function(e,t,n){e.exports=n.p+"favicon.ico"},function(e,t,n){const r=n(8),s=n(9);e.exports=class{constructor(){this.clock=new r,this.entries=new s}newEntry(){}}},function(e,t){e.exports=class{constructor(){this.startingTimeInfo,this.currentTimeInfo=this.startingTime,this.displaySlots={starting:{hours:document.getElementById("starting-hours"),minutes:document.getElementById("starting-minutes"),seconds:document.getElementById("starting-seconds")},current:{hours:document.getElementById("current-hours"),minutes:document.getElementById("current-minutes"),seconds:document.getElementById("current-seconds")},elapsed:{hours:document.getElementById("elapsed-hours"),minutes:document.getElementById("elapsed-minutes"),seconds:document.getElementById("elapsed-seconds")}},this.pastElapses=[],document.getElementById("stop-timer").addEventListener("click",()=>this.stop()),document.getElementById("start-timer").addEventListener("click",()=>this.start()),this.updateDisplay()}get currentTime(){this.currentTimeInfo=new Date;let e={seconds:this.currentTimeInfo.getSeconds(),minutes:this.currentTimeInfo.getMinutes(),hours:this.currentTimeInfo.getHours()};return Object.keys(e).forEach(t=>{let n=e[t].toString();n=2==n.length?n:"0"+n,e[t]=n}),e}get startingTime(){return this.startingTimeInfo?this.formattedTime(this.startingTimeInfo):this.nullTime}formattedTime(e){let t={seconds:e.getSeconds(),minutes:e.getMinutes(),hours:e.getHours()};return Object.keys(t).forEach(e=>{let n=t[e].toString();n=2==n.length?n:"0"+n,t[e]=n}),t}get elaspedTime(){if(!this.startingTimeInfo)return this.nullTime;let e=(this.currentTimeInfo.getTime()-this.startingTimeInfo.getTime())/1e3,t=Number.parseInt(e/3600),n={hours:t,minutes:Number.parseInt(Number.parseInt((e-3600*t)/60)),seconds:Number.parseInt(e%60)};return Object.keys(n).forEach(t=>{e=n[t].toString(),console.log(e.length),n[t]=e.length>=2?e:"0"+e}),n}get timezone(){let e=this.startingTimeInfo.getTimezoneOffset();return"UTC "+(e=0-e==0- -e?"+ ":"- "+e)}get nullTime(){return{hours:"--",minutes:"--",seconds:"--"}}updateDisplay(){let e={starting:this.startingTime,current:this.currentTime,elapsed:this.elaspedTime};Object.keys(e).forEach(t=>{let n=this.displaySlots[t];Object.keys(n).forEach(r=>n[r].innerHTML=e[t][r])}),setTimeout(()=>this.updateDisplay(),1e3)}start(){this.startingTimeInfo||(this.startingTimeInfo=new Date)}stop(){let e;return this.startingTimeInfo&&(e={starting:this.startingTimeInfo,current:this.currentTimeInfo,elapsed:this.elapsedTime},this.pastElapses.push(e),this.startingTimeInfo=void 0),e}}},function(e,t,n){const r=n(10);e.exports=class{constructor(){localStorage.entries||(localStorage.entries={}),this.fieldValidation={lat:r.lat,lng:r.lng,dateInfo:r.date}}get entries(){return localStorage.entries}set entries(e){localStorage.entries={}}newEntry(e){if(e instanceof Object){let t={},n=!0;Object.keys(this.fieldValidation).forEach(r=>{e[r]&&this.fieldValidation[r](e[r])?t[r]=e[r]:n=!1}),n&&this.all.push(t)}return!1}}},function(e,t){const n=e=>"number"==typeof userLat&&!isNaN(e)&&!Number.isInteger(userLat);e.exports.coord=n;e.exports.lat=e=>n(userlat)&&(e<=90||e>=-90);e.exports.lng=e=>n(e)&&(e<=180||e>=-180);e.exports.date=e=>e instanceof Date&&!isNaN(e.valueOf())}]);