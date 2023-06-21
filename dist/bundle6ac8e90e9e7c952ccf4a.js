/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/DOMstuff.js":
/*!************************************!*\
  !*** ./src/components/DOMstuff.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "createTaskCard": () => (/* binding */ createTaskCard),
/* harmony export */   "formValidation": () => (/* binding */ formValidation),
/* harmony export */   "pushTask": () => (/* binding */ pushTask)
/* harmony export */ });
const title = document.querySelector('#title');
const desc = document.querySelector('#description');
const date = document.querySelector('#duedate');
const priority = document.querySelector('#priority');
const notes = document.querySelector('#notes');
const cardContainer = document.querySelector('.taskcard-cont');
class Task {
  constructor(title, desc, date, priority, notes) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.notes = notes;
    this.priority = priority;
  }
}
function addTask(btn, modal) {
  btn.addEventListener('click', () => {
    modal.showModal();
  });
}
function createTaskCard() {
  const newTaskCard = document.createElement('div');
  newTaskCard.classList.add('taskcard');
  cardContainer.appendChild(newTaskCard);
}
function closeModal(btn, modal) {
  btn.addEventListener('click', () => {
    modal.close();
  });
}
function pushTask() {
  return new Task(title.value, desc.value, date.value, priority.value, notes.value);
}
function formValidation() {
  if (title.reportValidity() && desc.reportValidity() && date.reportValidity() && priority.reportValidity()) {
    return true;
  }
  return false;
}

/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOMstuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMstuff */ "./src/components/DOMstuff.js");

const startTodo = (() => {
  const myTasks = [];
  const index = 0;
  const newTask = document.querySelector('.task-btn');
  const btnArr = document.querySelectorAll('.btn');
  const form = document.querySelector('form');
  const modal = document.querySelector('.card');
  (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_0__.addTask)(newTask, modal);
  btnArr.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.classList.contains('add')) {
        if ((0,_DOMstuff__WEBPACK_IMPORTED_MODULE_0__.formValidation)()) {
          myTasks.push((0,_DOMstuff__WEBPACK_IMPORTED_MODULE_0__.pushTask)());
          modal.close();
          form.reset();
          (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_0__.createTaskCard)();
          console.log(myTasks[0]);
          console.log(myTasks[1]);
        } else {
          alert('invalid details');
        }
      }
      if (event.target.classList.contains('cancel')) {
        modal.close();
        form.reset();
      }
    });
  });
})();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* shades of black */\n/* shades of white */\n.main {\n  flex: 1;\n}\n.main .taskcard-cont {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));\n}\n.main .task-btn, .main .card form .form-cont .btn, .main .taskcard {\n  background-color: rgba(0, 0, 0, 0.6);\n  color: rgb(255, 255, 255);\n  font-size: 5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1rem;\n  border-radius: 10px;\n  border-style: none;\n  padding: 10rem 8rem;\n}\n.main .task-btn:hover, .main .card form .form-cont .btn:hover, .main .taskcard:hover {\n  background-color: rgb(8, 8, 8);\n}\n.main .card {\n  position: absolute;\n  inset: 50% auto auto 50%;\n  transform: translate(-50%, -50%);\n  border: none;\n  border-radius: 10px;\n  background-color: rgb(48, 48, 48);\n  color: rgb(255, 255, 255);\n}\n.main .card form .form-cont {\n  padding: 1rem;\n}\n.main .card form .form-cont .form-elem {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n}\n.main .card form .form-cont .form-elem label {\n  flex: 1;\n  margin-bottom: 0.25rem;\n}\n.main .card form .form-cont .form-elem input,\n.main .card form .form-cont .form-elem textarea,\n.main .card form .form-cont .form-elem select {\n  width: 200px;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 0.25rem;\n  background-color: rgba(255, 255, 255, 0.4);\n  background-color: rgb(240, 240, 240);\n  color: rgb(0, 0, 0);\n}\n.main .card form .form-cont .form-elem textarea {\n  resize: none;\n}\n.main .card form .form-cont .btn-cont {\n  display: flex;\n  justify-content: center;\n}\n.main .card form .form-cont .btn {\n  font-size: 14px;\n  border-radius: 5px;\n  padding: 0.75rem 1.5rem;\n  margin: 0.5rem 0 0 0;\n  background-color: rgb(24, 24, 24);\n}\n.main .card form .form-cont .btn:hover {\n  background-color: rgb(48, 48, 48);\n}\n.main .card form .form-cont .btn + .btn {\n  margin-left: 0.25rem;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n}\n.main-container .heading, .main-container .footer {\n  background-color: rgba(0, 0, 0, 0.9);\n  color: rgb(255, 255, 255);\n  font-size: 2rem;\n  font-weight: 700;\n  padding: 1rem;\n}\n.main-container .footer {\n  font-size: 14px;\n  font-weight: 400;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/_variables.scss","webpack://./src/styles/_content.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_mixins.scss"],"names":[],"mappings":"AAAA,oBAAA;AAYA,oBAAA;ACTA;EACE,OAAA;ACAF;ADEE;EACE,aAAA;EACA,4DAAA;EACA,yDAAA;ACAJ;ADGE;EACE,oCDRW;ECSX,yBDQQ;ECPR,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;ACDJ;ACpBE;EAMA,8BAAA;ADiBF;ADME;EACE,kBAAA;EACA,wBAAA;EACA,gCAAA;EACA,YAAA;EACA,mBAAA;EE5BF,iCAAA;EF8BE,yBDfQ;AEWZ;ADOM;EACE,aAAA;ACLR;ADOQ;EACE,aAAA;EACA,sBAAA;EACA,qBAAA;ACLV;ADOU;EACE,OAAA;EACA,sBAAA;ACLZ;ADQU;;;EAGE,YAAA;EACA,kBAAA;EACA,oCAAA;EACA,gBAAA;EACA,0CD5CG;EGTb,oCAAA;EFuDU,mBD7DA;AEuDZ;ADQU;EACE,YAAA;ACNZ;ADUQ;EACE,aAAA;EACA,uBAAA;ACRV;ADUQ;EAEE,eAAA;EACA,kBAAA;EACA,uBAAA;EACA,oBAAA;EEvER,iCAAA;AD+DF;ACrEE;EAMA,iCAAA;ADkEF;ADUQ;EACE,oBAAA;ACRV;;AAzEA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AA4EF;;AAzEA;EACE,iCAAA;AA4EF;;AAzEA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AA4EF;AA1EE;EACE,oCFlBW;EEmBX,yBFCQ;EEAR,eAAA;EACA,gBAAA;EACA,aAAA;AA4EJ;AAzEE;EAEE,eAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AA0EJ","sourcesContent":["/* shades of black */\n$black-col: rgba(0, 0, 0, 1);\n$black-shade9: rgba(0, 0, 0, 0.9);\n$black-shade8: rgba(0, 0, 0, 0.8);\n$black-shade7: rgba(0, 0, 0, 0.7);\n$black-shade6: rgba(0, 0, 0, 0.6);\n$black-shade5: rgba(0, 0, 0, 0.5);\n$black-shade4: rgba(0, 0, 0, 0.4);\n$black-shade3: rgba(0, 0, 0, 0.3);\n$black-shade2: rgba(0, 0, 0, 0.2);\n$black-shade1: rgba(0, 0, 0, 0.1);\n\n/* shades of white */\n$white-shade1: rgba(255, 255, 255, 0.1);\n$white-shade2: rgba(255, 255, 255, 0.2);\n$white-shade3: rgba(255, 255, 255, 0.3);\n$white-shade4: rgba(255, 255, 255, 0.4);\n$white-shade5: rgba(255, 255, 255, 0.5);\n$white-shade6: rgba(255, 255, 255, 0.6);\n$white-shade7: rgba(255, 255, 255, 0.7);\n$white-shade8: rgba(255, 255, 255, 0.8);\n$white-shade9: rgba(255, 255, 255, 0.9);\n$white-col: rgba(255, 255, 255, 1);\n","@use 'variables' as v;\n@use 'mixins';\n\n.main {\n  flex: 1;\n\n  .taskcard-cont {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));\n  }\n\n  .task-btn {\n    background-color: v.$black-shade6;\n    color: v.$white-col;\n    font-size: 5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 1rem;\n    border-radius: 10px;\n    border-style: none;\n    padding: 10rem 8rem;\n    @include mixins.hoverEffect(8);\n  }\n\n  .taskcard {\n    @extend .task-btn;\n  }\n\n  .card {\n    position: absolute;\n    inset: 50% auto auto 50%;\n    transform: translate(-50%, -50%);\n    border: none;\n    border-radius: 10px;\n    @include mixins.shadeCol(48);\n    color: v.$white-col;\n\n    form {\n      .form-cont {\n        padding: 1rem;\n\n        .form-elem {\n          display: flex;\n          flex-direction: column;\n          margin-bottom: 0.5rem;\n\n          label {\n            flex: 1;\n            margin-bottom: 0.25rem;\n          }\n\n          input,\n          textarea,\n          select {\n            width: 200px;\n            border-radius: 4px;\n            border: 1px solid v.$black-shade3;\n            padding: 0.25rem;\n            background-color: v.$white-shade4;\n            @include mixins.shadeCol(240);\n            color: v.$black-col;\n          }\n          textarea {\n            resize: none;\n          }\n        }\n\n        .btn-cont {\n          display: flex;\n          justify-content: center;\n        }\n        .btn {\n          @extend .task-btn;\n          font-size: 14px;\n          border-radius: 5px;\n          padding: 0.75rem 1.5rem;\n          margin: 0.5rem 0 0 0;\n          @include mixins.shadeCol(24);\n          @include mixins.hoverEffect(48);\n        }\n\n        .btn + .btn {\n          margin-left: 0.25rem;\n        }\n      }\n    }\n  }\n}\n","@use 'variables' as v;\n@use 'content';\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n\n  .heading {\n    background-color: v.$black-shade9;\n    color: v.$white-col;\n    font-size: 2rem;\n    font-weight: 700;\n    padding: 1rem;\n  }\n\n  .footer {\n    @extend .heading;\n    font-size: 14px;\n    font-weight: 400;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n","@mixin hoverEffect($color) {\n  &:hover {\n    @include shadeCol($color);\n  }\n}\n\n@mixin shadeCol($col) {\n  background-color: rgba($col, $col, $col, 1);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/task */ "./src/components/task.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvRE9Nc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvdGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxuY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpXG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUnKVxuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKVxuY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKVxuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrY2FyZC1jb250JylcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB0aGlzLmRlc2MgPSBkZXNjXG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKGJ0biwgbW9kYWwpIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsLnNob3dNb2RhbCgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZCgpIHtcbiAgY29uc3QgbmV3VGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBuZXdUYXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrY2FyZCcpXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0NhcmQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKGJ0biwgbW9kYWwpIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsLmNsb3NlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hUYXNrKCkge1xuICByZXR1cm4gbmV3IFRhc2soXG4gICAgdGl0bGUudmFsdWUsXG4gICAgZGVzYy52YWx1ZSxcbiAgICBkYXRlLnZhbHVlLFxuICAgIHByaW9yaXR5LnZhbHVlLFxuICAgIG5vdGVzLnZhbHVlXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1WYWxpZGF0aW9uKCkge1xuICBpZiAoXG4gICAgdGl0bGUucmVwb3J0VmFsaWRpdHkoKSAmJlxuICAgIGRlc2MucmVwb3J0VmFsaWRpdHkoKSAmJlxuICAgIGRhdGUucmVwb3J0VmFsaWRpdHkoKSAmJlxuICAgIHByaW9yaXR5LnJlcG9ydFZhbGlkaXR5KClcbiAgKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cbiIsImltcG9ydCB7IGFkZFRhc2ssIGNyZWF0ZVRhc2tDYXJkLCBmb3JtVmFsaWRhdGlvbiwgcHVzaFRhc2sgfSBmcm9tICcuL0RPTXN0dWZmJ1xuXG5jb25zdCBzdGFydFRvZG8gPSAoKCkgPT4ge1xuICBjb25zdCBteVRhc2tzID0gW11cbiAgY29uc3QgaW5kZXggPSAwXG5cbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWJ0bicpXG4gIGNvbnN0IGJ0bkFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKVxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKVxuXG4gIGFkZFRhc2sobmV3VGFzaywgbW9kYWwpXG5cbiAgYnRuQXJyLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZCcpKSB7XG4gICAgICAgIGlmIChmb3JtVmFsaWRhdGlvbigpKSB7XG4gICAgICAgICAgbXlUYXNrcy5wdXNoKHB1c2hUYXNrKCkpXG4gICAgICAgICAgbW9kYWwuY2xvc2UoKVxuICAgICAgICAgIGZvcm0ucmVzZXQoKVxuICAgICAgICAgIGNyZWF0ZVRhc2tDYXJkKClcbiAgICAgICAgICBjb25zb2xlLmxvZyhteVRhc2tzWzBdKVxuICAgICAgICAgIGNvbnNvbGUubG9nKG15VGFza3NbMV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoJ2ludmFsaWQgZGV0YWlscycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWwnKSkge1xuICAgICAgICBtb2RhbC5jbG9zZSgpXG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KSgpXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHNoYWRlcyBvZiBibGFjayAqL1xcbi8qIHNoYWRlcyBvZiB3aGl0ZSAqL1xcbi5tYWluIHtcXG4gIGZsZXg6IDE7XFxufVxcbi5tYWluIC50YXNrY2FyZC1jb250IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxufVxcbi5tYWluIC50YXNrLWJ0biwgLm1haW4gLmNhcmQgZm9ybSAuZm9ybS1jb250IC5idG4sIC5tYWluIC50YXNrY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHJlbSA4cmVtO1xcbn1cXG4ubWFpbiAudGFzay1idG46aG92ZXIsIC5tYWluIC5jYXJkIGZvcm0gLmZvcm0tY29udCAuYnRuOmhvdmVyLCAubWFpbiAudGFza2NhcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDgsIDgpO1xcbn1cXG4ubWFpbiAuY2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbnNldDogNTAlIGF1dG8gYXV0byA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4ubWFpbiAuY2FyZCBmb3JtIC5mb3JtLWNvbnQge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLm1haW4gLmNhcmQgZm9ybSAuZm9ybS1jb250IC5mb3JtLWVsZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5tYWluIC5jYXJkIGZvcm0gLmZvcm0tY29udCAuZm9ybS1lbGVtIGxhYmVsIHtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4ubWFpbiAuY2FyZCBmb3JtIC5mb3JtLWNvbnQgLmZvcm0tZWxlbSBpbnB1dCxcXG4ubWFpbiAuY2FyZCBmb3JtIC5mb3JtLWNvbnQgLmZvcm0tZWxlbSB0ZXh0YXJlYSxcXG4ubWFpbiAuY2FyZCBmb3JtIC5mb3JtLWNvbnQgLmZvcm0tZWxlbSBzZWxlY3Qge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxufVxcbi5tYWluIC5jYXJkIGZvcm0gLmZvcm0tY29udCAuZm9ybS1lbGVtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLm1haW4gLmNhcmQgZm9ybSAuZm9ybS1jb250IC5idG4tY29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tYWluIC5jYXJkIGZvcm0gLmZvcm0tY29udCAuYnRuIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xcbiAgbWFyZ2luOiAwLjVyZW0gMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XFxufVxcbi5tYWluIC5jYXJkIGZvcm0gLmZvcm0tY29udCAuYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDgsIDQ4KTtcXG59XFxuLm1haW4gLmNhcmQgZm9ybSAuZm9ybS1jb250IC5idG4gKyAuYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1haW4tY29udGFpbmVyIC5oZWFkaW5nLCAubWFpbi1jb250YWluZXIgLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5tYWluLWNvbnRhaW5lciAuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fY29udGVudC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0JBQUE7QUFZQSxvQkFBQTtBQ1RBO0VBQ0UsT0FBQTtBQ0FGO0FERUU7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSx5REFBQTtBQ0FKO0FER0U7RUFDRSxvQ0RSVztFQ1NYLHlCRFFRO0VDUFIsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FDcEJFO0VBTUEsOEJBQUE7QURpQkY7QURNRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFRTVCRixpQ0FBQTtFRjhCRSx5QkRmUTtBRVdaO0FET007RUFDRSxhQUFBO0FDTFI7QURPUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDTFY7QURPVTtFQUNFLE9BQUE7RUFDQSxzQkFBQTtBQ0xaO0FEUVU7OztFQUdFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0Q1Q0c7RUdUYixvQ0FBQTtFRnVEVSxtQkQ3REE7QUV1RFo7QURRVTtFQUNFLFlBQUE7QUNOWjtBRFVRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDUlY7QURVUTtFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUV2RVIsaUNBQUE7QUQrREY7QUNyRUU7RUFNQSxpQ0FBQTtBRGtFRjtBRFVRO0VBQ0Usb0JBQUE7QUNSVjs7QUF6RUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBNEVGOztBQXpFQTtFQUNFLGlDQUFBO0FBNEVGOztBQXpFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQTRFRjtBQTFFRTtFQUNFLG9DRmxCVztFRW1CWCx5QkZDUTtFRUFSLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUE0RUo7QUF6RUU7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTBFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzaGFkZXMgb2YgYmxhY2sgKi9cXG4kYmxhY2stY29sOiByZ2JhKDAsIDAsIDAsIDEpO1xcbiRibGFjay1zaGFkZTk6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4kYmxhY2stc2hhZGU4OiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuJGJsYWNrLXNoYWRlNzogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiRibGFjay1zaGFkZTY6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4kYmxhY2stc2hhZGU1OiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuJGJsYWNrLXNoYWRlNDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiRibGFjay1zaGFkZTM6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4kYmxhY2stc2hhZGUyOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuJGJsYWNrLXNoYWRlMTogcmdiYSgwLCAwLCAwLCAwLjEpO1xcblxcbi8qIHNoYWRlcyBvZiB3aGl0ZSAqL1xcbiR3aGl0ZS1zaGFkZTE6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4kd2hpdGUtc2hhZGUyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuJHdoaXRlLXNoYWRlMzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiR3aGl0ZS1zaGFkZTQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4kd2hpdGUtc2hhZGU1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuJHdoaXRlLXNoYWRlNjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiR3aGl0ZS1zaGFkZTc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4kd2hpdGUtc2hhZGU4OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuJHdoaXRlLXNoYWRlOTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiR3aGl0ZS1jb2w6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuXCIsXCJAdXNlICd2YXJpYWJsZXMnIGFzIHY7XFxuQHVzZSAnbWl4aW5zJztcXG5cXG4ubWFpbiB7XFxuICBmbGV4OiAxO1xcblxcbiAgLnRhc2tjYXJkLWNvbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIH1cXG5cXG4gIC50YXNrLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHYuJGJsYWNrLXNoYWRlNjtcXG4gICAgY29sb3I6IHYuJHdoaXRlLWNvbDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcmVtIDhyZW07XFxuICAgIEBpbmNsdWRlIG1peGlucy5ob3ZlckVmZmVjdCg4KTtcXG4gIH1cXG5cXG4gIC50YXNrY2FyZCB7XFxuICAgIEBleHRlbmQgLnRhc2stYnRuO1xcbiAgfVxcblxcbiAgLmNhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiA1MCUgYXV0byBhdXRvIDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgQGluY2x1ZGUgbWl4aW5zLnNoYWRlQ29sKDQ4KTtcXG4gICAgY29sb3I6IHYuJHdoaXRlLWNvbDtcXG5cXG4gICAgZm9ybSB7XFxuICAgICAgLmZvcm0tY29udCB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICAgICAgLmZvcm0tZWxlbSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG5cXG4gICAgICAgICAgbGFiZWwge1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBpbnB1dCxcXG4gICAgICAgICAgdGV4dGFyZWEsXFxuICAgICAgICAgIHNlbGVjdCB7XFxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2LiRibGFjay1zaGFkZTM7XFxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiR3aGl0ZS1zaGFkZTQ7XFxuICAgICAgICAgICAgQGluY2x1ZGUgbWl4aW5zLnNoYWRlQ29sKDI0MCk7XFxuICAgICAgICAgICAgY29sb3I6IHYuJGJsYWNrLWNvbDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICB0ZXh0YXJlYSB7XFxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnRuLWNvbnQge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgIC5idG4ge1xcbiAgICAgICAgICBAZXh0ZW5kIC50YXNrLWJ0bjtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwIDAgMDtcXG4gICAgICAgICAgQGluY2x1ZGUgbWl4aW5zLnNoYWRlQ29sKDI0KTtcXG4gICAgICAgICAgQGluY2x1ZGUgbWl4aW5zLmhvdmVyRWZmZWN0KDQ4KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5idG4gKyAuYnRuIHtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQHVzZSAndmFyaWFibGVzJyBhcyB2O1xcbkB1c2UgJ2NvbnRlbnQnO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgLmhlYWRpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRibGFjay1zaGFkZTk7XFxuICAgIGNvbG9yOiB2LiR3aGl0ZS1jb2w7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBAZXh0ZW5kIC5oZWFkaW5nO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cIixcIkBtaXhpbiBob3ZlckVmZmVjdCgkY29sb3IpIHtcXG4gICY6aG92ZXIge1xcbiAgICBAaW5jbHVkZSBzaGFkZUNvbCgkY29sb3IpO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gc2hhZGVDb2woJGNvbCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sLCAkY29sLCAkY29sLCAxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3Rhc2snXG4iXSwibmFtZXMiOlsidGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXNjIiwiZGF0ZSIsInByaW9yaXR5Iiwibm90ZXMiLCJjYXJkQ29udGFpbmVyIiwiVGFzayIsImNvbnN0cnVjdG9yIiwiYWRkVGFzayIsImJ0biIsIm1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dNb2RhbCIsImNyZWF0ZVRhc2tDYXJkIiwibmV3VGFza0NhcmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJjbG9zZU1vZGFsIiwiY2xvc2UiLCJwdXNoVGFzayIsInZhbHVlIiwiZm9ybVZhbGlkYXRpb24iLCJyZXBvcnRWYWxpZGl0eSIsInN0YXJ0VG9kbyIsIm15VGFza3MiLCJpbmRleCIsIm5ld1Rhc2siLCJidG5BcnIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybSIsImZvckVhY2giLCJidXR0b24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJwdXNoIiwicmVzZXQiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9