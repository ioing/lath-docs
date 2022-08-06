"use strict";
(self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || []).push([["Lath_app_flip-745680c8_js"],{

/***/ "../Lath/app/flip-745680c8.js":
/*!************************************!*\
  !*** ../Lath/app/flip-745680c8.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ flip)
/* harmony export */ });
var flip=d=>e=>{let a="center",t=.3,c=150,r=1300,o=r/4,i=0,s=1;const n=e.direction*e.historyDirection;switch(d){case 0:a="top",i=1,s=0,r=1600,o=r/4;break;case 1:a="right";break;case 2:a="bottom",i=1,s=0,r=1600,o=r/4;break;case 3:c=-150,a="left";break;case 4:a="center",c=90,t=.9,r=600,o=r}e.in.duration(0).ease("ease-out-expo").perspective(1e3).transformOrigin(a).to(0,0,0).backface(!1).opacity(1).rotate3d(i,s,0,c*n).scale(t).end(()=>{e.in.delay(o).duration(r).backface(!1).rotate3d(i,s,0,0).scale(1).end(()=>{e.callback(!1)}),e.out.duration(r).ease("ease-out-expo").perspective(1e3).transformOrigin(a).backface(!1).rotate3d(i,s,0,-c*n).scale(t).end(()=>{e.out.duration(0).backface(!1).rotate3d(i,s,0,-c*n).opacity(0).end()})})};

/***/ })

}]);
//# sourceMappingURL=Lath_app_flip-745680c8_js.js.map