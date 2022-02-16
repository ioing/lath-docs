"use strict";
(self["webpackChunklath"] = self["webpackChunklath"] || []).push([["src_Transform_animation_preset_fade_ts"],{

/***/ "./src/Transform/animation/preset/fade.ts":
/*!************************************************!*\
  !*** ./src/Transform/animation/preset/fade.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((type) => {
    return (e) => {
        let inO, outO, inV, outV;
        switch (type) {
            case 0:
                inO = 1;
                outO = 0;
                inV = e.in;
                outV = e.out;
                break;
            case 1:
            default:
                inO = 0;
                outO = 1;
                inV = outV = e.in;
        }
        inV.duration(0).ease('ease-out-expo').to(0, 0, 0).opacity(inO).end(function () {
            outV.duration(767).opacity(outO).end(function () {
                e.callback(false);
            });
        });
        setTimeout(() => {
            e.callback(false);
        }, 1200);
    };
});


/***/ })

}]);
//# sourceMappingURL=src_Transform_animation_preset_fade_ts.js.map