parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{}],"FPPp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.headerUser=exports.list=exports.users=exports.wrapper=exports.main=void 0;var e="#main";exports.main=e;var r="#wrapper";exports.wrapper=r;var s="#users";exports.users=s;var t='[data-type="list"]';exports.list=t;var p='[data-type="header-list"]';exports.headerUser=p;
},{}],"e6J1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){return document.querySelector(e)};exports.default=e;
},{}],"TOFG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./findElement"));function t(e){return e&&e.__esModule?e:{default:e}}var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";return(0,e.default)(t).insertAdjacentHTML(d,r)};exports.default=r;
},{"./findElement":"e6J1"}],"WL3l":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("."),t=function(t,r){return(0,e.findElement)(t).removeChild((0,e.findElement)(r))};exports.default=t;
},{".":"xjDE"}],"yKPk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e,t){return e.sort(function(e,o){return e[t].toLowerCase().localeCompare(o[t].toLowerCase())})};exports.default=e;
},{}],"xBsT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(t,e){return e.then(function(e){return e.find(function(e){return e.id===Number(t)})}).catch(function(t){throw t})};exports.default=t;
},{}],"xjDE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"addElement",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"findElement",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"removeElement",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"sortUser",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"getUserById",{enumerable:!0,get:function(){return u.default}});var e=o(require("./addElement")),r=o(require("./findElement")),t=o(require("./removeElement")),n=o(require("./sortUser")),u=o(require("./getUserById"));function o(e){return e&&e.__esModule?e:{default:e}}
},{"./addElement":"TOFG","./findElement":"e6J1","./removeElement":"WL3l","./sortUser":"yKPk","./getUserById":"xBsT"}],"AUv9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){return'\n<div id="users">\n    <ul class="list" data-type="list"></ul>\n</div>\n'};exports.default=e;
},{}],"kmus":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../dom/refs"),r=require("../helpers"),t=u(require("../templates/table"));function u(e){return e&&e.__esModule?e:{default:e}}var a=function(){return(0,r.addElement)(e.main,(0,t.default)())};exports.default=a;
},{"../dom/refs":"FPPp","../helpers":"xjDE","../templates/table":"AUv9"}],"ZqY7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(a){var e=a.email,t=a.id,n=a.name,c=a.phone,l=a.username,o=a.website;return'\n  <li class="user" data-item="'.concat(t,'">\n      <span data-label="Nickname:">').concat(l,'</span>\n      <span data-label="Full Name:">').concat(n,'</span>\n      <a href="mailto:').concat(e,'" data-label="Email:"> ').concat(e,'</a>\n      <a href="tel:+').concat(c,'" data-label="Phone:">+').concat(c,'</a>\n      <a href="http://').concat(o,'" data-label="Website:" >').concat(o,"</a>\n  </li>")};exports.default=a;
},{}],"Da2F":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../helpers"),t=require("../dom/refs"),r=u(require("../templates/item"));function u(e){return e&&e.__esModule?e:{default:e}}var n=function(u){return u.then(function(u){u.map(function(u){(0,e.addElement)(t.list,(0,r.default)(u))})}).catch(function(e){throw e})};exports.default=n;
},{"../helpers":"xjDE","../dom/refs":"FPPp","../templates/item":"ZqY7"}],"vjCC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(a){var n=a.email,s=a.id,c=a.name,t=a.phone,p=a.username,e=a.website,o=a.company,d=a.address;return'\n  <div id="wrapper">\n    <div class="modal" data-item="'.concat(s,'">\n        <button class="btn" type="submit" data-type="btn" ></button>\n\n        <h3 class="modal-nick">').concat(p,'</h3>\n\n        <div class="modal-info">\n            <p class="modal-name">Name:<span>').concat(c,'</span></p>\n            <a href="mailto:').concat(n,'" class="modal-info__email "><span> ').concat(n,'</span></a>\n            <a href="tel:+').concat(t,'" class="modal-info__phone"><span> +').concat(t,'</span></a>\n            <a href="http://').concat(e,'" class="modal-info__website"><span> ').concat(e,'</span></a>\n        </div>\n        <div class="modal-address ">\n            <h3 class="modal-name" > Address</h3>\n            <p>Street:<span>').concat(d.street,"</span> </p>\n            <p>Suite:<span>").concat(d.suite,"</span></p>\n            <p>City:<span>").concat(d.city,"</span></p>\n            <p>Zipcode:<span>").concat(d.zipcode,'</span></p>\n        </div>\n\n        <div class="modal-company">\n            <h3 class="modal-name" > Company </h3>\n            <p>Name:<span>').concat(o.name,"</span></p>\n            <p>BS:<span>").concat(o.bs,"</span></p>\n            <p>CatchPhrase:<span>").concat(o.catchPhrase,"</span></p>\n        </div>\n    </div>\n\n  </div>")};exports.default=a;
},{}],"Oh5k":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../helpers"),r=require("../dom/refs"),t=u(require("../templates/userModel"));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(u){return(0,e.addElement)(r.main,(0,t.default)(u))};exports.default=d;
},{"../helpers":"xjDE","../dom/refs":"FPPp","../templates/userModel":"vjCC"}],"oSq8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){return'\n      <div class="header-list" data-type="header-list">\n        <span id="username">Nickname</span>\n        <span id="name">Ful Name</span>\n        <span id="email">Email</span>\n        <span id="phone">Phone</span>\n        <span id="website">Website</span>\n      </div>\n'};exports.default=e;
},{}],"YRwc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../helpers"),r=require("../dom/refs"),t=u(require("../templates/headerList"));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(){return(0,e.addElement)(r.users,(0,t.default)(),"afterbegin")};exports.default=s;
},{"../helpers":"xjDE","../dom/refs":"FPPp","../templates/headerList":"oSq8"}],"SGWa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Users",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"UsersList",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"ModalWindow",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"HeaderList",{enumerable:!0,get:function(){return u.default}});var e=n(require("./Users")),r=n(require("./UsersList")),t=n(require("./ModalWindow")),u=n(require("./HeaderList"));function n(e){return e&&e.__esModule?e:{default:e}}
},{"./Users":"kmus","./UsersList":"Da2F","./ModalWindow":"Oh5k","./HeaderList":"YRwc"}],"CtEX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../helpers"),r=require("../components"),t=require("../dom/refs"),n=function(r){return(0,e.findElement)(t.headerUser).addEventListener("click",function(e){return i(e,r)})},i=function(r,t){console.dir(r.target.id);var n=t.then(function(t){return(0,e.sortUser)(t,r.target.id)}).catch(function(e){throw e});o(n)},o=function(n){(0,e.findElement)(t.list).innerHTML="",(0,r.UsersList)(n)},u=function(e){return n(e)};exports.default=u;
},{"../helpers":"xjDE","../components":"SGWa","../dom/refs":"FPPp"}],"UA13":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../dom/refs"),r=require("../helpers"),t=function(t){var a=(0,r.findElement)(e.wrapper);a.addEventListener("click",function(e){var r=e.target;"wrapper"!==r.id&&"btn"!==r.className||t.removeChild(a)})};exports.default=t;
},{"../dom/refs":"FPPp","../helpers":"xjDE"}],"NleZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=d(require("../components/ModalWindow")),t=require("../dom/refs"),r=require("../helpers"),n=d(require("./closeModalWindow"));function d(e){return e&&e.__esModule?e:{default:e}}var i=function(d){(0,r.findElement)(t.list).addEventListener("click",function(i){if(i.target.parentNode.dataset.item){var o=i.target.parentNode.dataset.item;(0,r.getUserById)(o,d).then(function(d){(0,e.default)(d),(0,n.default)((0,r.findElement)(t.main))}).catch(function(e){throw e})}})};exports.default=i;
},{"../components/ModalWindow":"Oh5k","../dom/refs":"FPPp","../helpers":"xjDE","./closeModalWindow":"UA13"}],"QdeU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./components"),t=r(require("./handlers/eventHeader")),n=r(require("./handlers/openModalWindow"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function r(s){var o=this;i(this,r),a(this,"event",function(){(0,t.default)(o.DB),(0,n.default)(o.DB)}),a(this,"page",function(){(0,e.Users)(),(0,e.HeaderList)(),(0,e.UsersList)(o.DB)}),this.DB=s(),this.page(),this.event()};exports.default=s;
},{"./components":"SGWa","./handlers/eventHeader":"CtEX","./handlers/openModalWindow":"NleZ"}],"msjO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(){return fetch("https://jsonplaceholder.typicode.com/users").then(function(t){return t.json()}).then(function(t){if(!t.length)throw new Error("DB not responding");return t}).catch(function(t){throw t})};exports.default=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./scss/main.scss");var e=r(require("./js/app")),s=r(require("./js/db/getUsers"));function r(e){return e&&e.__esModule?e:{default:e}}new e.default(s.default);
},{"./scss/main.scss":"fx60","./js/app":"QdeU","./js/db/getUsers":"msjO"}]},{},["Focm"], null)
//# sourceMappingURL=/src.dd810905.js.map