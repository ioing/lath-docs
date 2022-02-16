"use strict";
(self["webpackChunklath"] = self["webpackChunklath"] || []).push([["src_Transform_animation_preset_flip_ts"],{

/***/ "./src/Transform/animation/preset/flip.ts":
/*!************************************************!*\
  !*** ./src/Transform/animation/preset/flip.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((type) => {
    return (e) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            let origin = 'center';
            let minScale = 0.3;
            let rotate = 150;
            let duration = 1300;
            let inDelay = duration / 4;
            let rx = 0;
            let ry = 1;
            const direction = e.direction * e.historyDirection;
            switch (type) {
                case 0:
                    origin = 'top';
                    rx = 1;
                    ry = 0;
                    duration = 1600;
                    inDelay = duration / 4;
                    break;
                case 1:
                    origin = 'right';
                    break;
                case 2:
                    origin = 'bottom';
                    rx = 1;
                    ry = 0;
                    duration = 1600;
                    inDelay = duration / 4;
                    break;
                case 3:
                    rotate = -150;
                    origin = 'left';
                    break;
                case 4:
                    origin = 'center';
                    rotate = 90;
                    minScale = 0.9;
                    duration = 600;
                    inDelay = duration;
                    break;
            }
            yield e.in.duration(0).ease('ease-out-expo').perspective(1000).transformOrigin(origin).to(0, 0, 0).backface(false).opacity(1).rotate3d(rx, ry, 0, rotate * direction).scale(minScale).end();
            e.in.delay(inDelay).duration(duration).backface(false).rotate3d(rx, ry, 0, 0).scale(1).end(() => {
                resolve(false);
            });
            e.out.duration(duration).ease('ease-out-expo').perspective(1000).transformOrigin(origin).backface(false).rotate3d(rx, ry, 0, -rotate * direction).scale(minScale).end(() => {
                e.out.duration(0).backface(false).rotate3d(rx, ry, 0, -rotate * direction).opacity(0).end();
            });
            setTimeout(() => {
                resolve(false);
            }, duration * 2);
        }));
    });
});


/***/ })

}]);
//# sourceMappingURL=src_Transform_animation_preset_flip_ts.js.map