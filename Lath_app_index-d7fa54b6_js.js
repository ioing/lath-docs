"use strict";
(self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || []).push([["Lath_app_index-d7fa54b6_js"],{

/***/ "../Lath/app/index-d7fa54b6.js":
/*!*************************************!*\
  !*** ../Lath/app/index-d7fa54b6.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capture": () => (/* binding */ capture)
/* harmony export */ });
/* harmony import */ var _index_c8265763_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c8265763.js */ "../Lath/app/index-c8265763.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "../Lath/node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
const capture=n=>(0,_index_c8265763_js__WEBPACK_IMPORTED_MODULE_0__._)(void 0,void 0,void 0,function*(){var t=n.contentWindow&&n.sameOrigin?n.contentWindow.document.documentElement:n.view||document.createElement("div"),e=n.viewport;if(!e)throw"Capture Shot: The applet has not been initialized!";var o=e.offsetWidth,e=e.offsetHeight;const i=yield html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(t,{backgroundColor:n.color,useCORS:!0,width:o,height:e,windowWidth:o,windowHeight:e,x:t.scrollLeft,y:t.scrollTop,imageTimeout:15e3});return i.style.cssText=`
    width: 100% !important;
    height: auto !important;
    transition: all .4s ease;
    border-radius: 16px;
  `,i});

/***/ })

}]);
//# sourceMappingURL=Lath_app_index-d7fa54b6_js.js.map