!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);n(4);new(n(7));localStorage&&window.navigator.geolocation||(window.alert("Please use a more modern browser for this app"),window.location="https://www.clicktime.com/")},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(3)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){"use strict";var r,i={},s=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function a(e,t){for(var n=[],r={},i=0;i<e.length;i++){var s=e[i],o=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(a):n.push(r[o]={id:o,parts:[a]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],s=i[r.id],o=0;if(s){for(s.refs++;o<s.parts.length;o++)s.parts[o](r.parts[o]);for(;o<r.parts.length;o++)s.parts.push(p(r.parts[o],t))}else{for(var a=[];o<r.parts.length;o++)a.push(p(r.parts[o],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function m(e,t,n){var r=n.css,i=n.media,s=n.sourceMap;if(i&&e.setAttribute("media",i),s&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,g=0;function p(e,t){var n,r,i;if(t.singleton){var s=g++;n=h||(h=c(t)),r=f.bind(null,n,s,!1),i=f.bind(null,n,s,!0)}else n=c(t),r=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s());var n=a(e,t);return l(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var o=n[s],c=i[o.id];c&&(c.refs--,r.push(c))}e&&l(a(e,t),t);for(var u=0;u<r.length;u++){var d=r[u];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete i[d.id]}}}}},function(e,t,n){var r={"./clouds.svg":5,"./favicon.ico":6};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=s,e.exports=i,i.id=4},function(e,t,n){e.exports=n.p+"./assets/clouds.svg?19461b5bfc69ee6c637d55f7f5932a4f"},function(e,t,n){e.exports=n.p+"favicon.ico"},function(e,t,n){const r=n(8),i=n(9),s=n(11);e.exports=class{constructor(){this.historyTable=document.getElementById("history-table"),this.clock=new r(this),this.entries=new i(this),document.getElementById("start-timer").addEventListener("click",()=>this.clock.start()),document.getElementById("stop-timer").addEventListener("click",()=>{let e=this.clock.stop();s.data(e,this)}),document.getElementById("history-reset-button").addEventListener("click",()=>this.reset()),this.entries.all.forEach(e=>this.historyTable.appendChild(s.dom(e)))}newEntry(e){this.entries.newEntry(e),this.historyTable.appendChild(s.dom(e))}reset(){this.entries.reset();let e=document.getElementById("history-headers");this.historyTable.removeChild(e),this.historyTable.innerHTML="",this.historyTable.appendChild(e)}}},function(e,t){e.exports=class{constructor(){if(this.currentTimeInfo,this.startingTimeInfo,localStorage.startingTime){let e=new Date(Number.parseInt(localStorage.startingTime));e instanceof Date?this.startingTimeInfo=e:delete localStorage.startingTime}this.displaySlots={starting:{hours:document.getElementById("starting-hours"),minutes:document.getElementById("starting-minutes"),seconds:document.getElementById("starting-seconds")},current:{hours:document.getElementById("current-hours"),minutes:document.getElementById("current-minutes"),seconds:document.getElementById("current-seconds")},elapsed:{hours:document.getElementById("elapsed-hours"),minutes:document.getElementById("elapsed-minutes"),seconds:document.getElementById("elapsed-seconds")}},this.nullTime={hours:"--",minutes:"--",seconds:"--"},this.updateDisplay()}get currentTime(){return this.currentTimeInfo=new Date,this.formattedTime(this.currentTimeInfo)}get startingTime(){return this.startingTimeInfo?this.formattedTime(this.startingTimeInfo):void 0}formattedTime(e){console.log(e);let t={seconds:e.getSeconds(),minutes:e.getMinutes(),hours:e.getHours()};return Object.keys(t).forEach(e=>{let n=t[e].toString();n=2==n.length?n:"0"+n,t[e]=n}),t}get elapsedTime(){if(!this.startingTimeInfo||!this.startingTimeInfo.getTime)return;let e=(this.currentTimeInfo.getTime()-this.startingTimeInfo.getTime())/1e3,t=Number.parseInt(e/3600),n={getHours:()=>t,getMinutes:()=>Number.parseInt(Number.parseInt((e-3600*t)/60)),getSeconds:()=>Number.parseInt(e%60)};return this.formattedTime(n)}get timezone(){if(!localStorage.startingTime)return;let e=this.startingTimeInfo.getTimezoneOffset();return"UTC "+(e=0-e==0- -e?"+ ":"- "+e)}updateDisplay(){let e={starting:this.startingTime,current:this.currentTime,elapsed:this.elapsedTime};Object.keys(e).forEach(t=>{void 0===e[t]&&(e[t]=this.nullTime);let n=this.displaySlots[t];Object.keys(n).forEach(r=>n[r].innerHTML=e[t][r])}),setTimeout(()=>this.updateDisplay(),1e3)}start(){this.startingTimeInfo||(this.startingTimeInfo=new Date,localStorage.setItem("startingTime",this.currentTimeInfo.valueOf()))}stop(){let e;return this.startingTimeInfo&&(e={starting:this.startingTimeInfo,ending:this.currentTimeInfo,elapsed:this.elapsedTime},delete localStorage.startingTime,delete this.startingTimeInfo),e}}},function(e,t,n){const r=n(10);e.exports=class{constructor(){if(this.all=[],localStorage.entries)try{this.all=JSON.parse(localStorage.entries)}catch(e){delete localStorage.entries}this.all.forEach(e=>{e.starting=new Date(e.starting),e.ending=new Date(e.ending)}),this.fieldValidation={userLat:r.lat,userLng:r.lng,starting:r.date,ending:r.date,elapsed:r.time}}newEntry(e){if(e instanceof Object){let t={},n=!0;Object.keys(this.fieldValidation).forEach(r=>{e[r]&&this.fieldValidation[r](e[r])?t[r]=e[r]:n=!1}),n&&(this.all.push(t),localStorage.setItem("entries",JSON.stringify(this.all)))}return!1}reset(){this.all=[],delete localStorage.entries}}},function(e,t){const n=e=>!Number.isNaN(e)||!1===e;e.exports.lat=e=>n(e)||e<=90&&e>=-90;e.exports.lng=e=>n(e)||e<=180&&e>=-180;e.exports.date=e=>e instanceof Date&&!isNaN(e.valueOf());e.exports.time=e=>e instanceof Object},function(e,t){e.exports.data=(e,t)=>{if(!(!e instanceof Object)){if(e.userLat=!0,e.userLng=!0,navigator.geolocation){let n=n=>{e.userLat=n.coords.latitude,e.userLng=n.coords.longitude,t.newEntry(e)},r=()=>{window.alert("Couldn't access your location to complete the entry"),t.newEntry(e)};pos=navigator.geolocation.getCurrentPosition(n,r)}else t.newEntry(e);return e}};let n=(e,t)=>(e.forEach(e=>{e=(e=e.toString()).length>1?e:"0"+e}),e.join(t)),r=e=>{if(e&&!(!e instanceof Date))return dateMembers=[e.getMonth(),e.getDate(),e.getFullYear().toString().substr(-2)],timeMembers=[e.getHours(),e.getMinutes(),e.getSeconds()],n(dateMembers,"/")+" - "+n(timeMembers,":")};e.exports.dom=e=>{if(!e instanceof Object)return;let t=document.createElement("li");t.class="time-entry";let i=document.createElement("h5");return i.innerHTML=n(Object.values(e.elapsed),":"),t.appendChild(i),(i=document.createElement("h5")).innerHTML=r(e.starting),t.appendChild(i),(i=document.createElement("h5")).innerHTML=r(e.ending),t.appendChild(i),(i=document.createElement("h5")).innerHTML=(e=>{if(!e||!e instanceof Object)return;let t=document.createElement("h1");if(Number.isFinite(e.userLat)&&Number.isFinite(e.userLng)){let n=document.createElement("a");n.href="https://google.com/maps/place/"+e.userLat+","+e.userLng,n.target="_blank",n.innerHTML=e.userLat.toPrecision(7)+", "+e.userLng.toPrecision(7),t.appendChild(n)}else t.innerHTML="No Data";return t.innerHTML})(e),t.appendChild(i),t}}]);