"use strict";
(self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || []).push([["Lath_app_index-94842793_js"],{

/***/ "../Lath/app/index-94842793.js":
/*!*************************************!*\
  !*** ../Lath/app/index-94842793.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capture": () => (/* binding */ capture)
/* harmony export */ });
/* harmony import */ var _index_a9d2e24e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a9d2e24e.js */ "../Lath/app/index-a9d2e24e.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "../Lath/node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
const capture=a=>(0,_index_a9d2e24e_js__WEBPACK_IMPORTED_MODULE_0__._)(void 0,void 0,void 0,function*(){var t=a.contentWindow&&a.sameOrigin?a.contentWindow.document.documentElement:a.view||document.createElement("div"),e=a.viewport;if(!e)throw"Capture Shot: The applet has not been initialized!";var o=e.offsetWidth,e=e.offsetHeight;const i=yield html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(t,{backgroundColor:a.color,useCORS:!0,width:o,height:e,windowWidth:o,windowHeight:e,x:t.scrollLeft,y:t.scrollTop,imageTimeout:2e3});return i.style.cssText=`
    width: 100% !important;
    height: auto !important;
    transition: all .4s ease;
    border-radius: 16px;
  `,i});

/***/ })

}]);
//# sourceMappingURL=Lath_app_index-94842793_js.js.map