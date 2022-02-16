"use strict";
(self["webpackChunklath"] = self["webpackChunklath"] || []).push([["src_Transform_animation_preset_slide_ts"],{

/***/ "./src/Transform/animation/preset/slide.ts":
/*!*************************************************!*\
  !*** ./src/Transform/animation/preset/slide.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((type) => {
    return (e) => {
        let inX = 0;
        let outX = 0;
        let inY = 0;
        let outY = 0;
        let duration = 767;
        switch (type) {
            case 0:
                outY = e.height;
                inY = -outY;
                inX = outX = 0;
                break;
            case 1:
                inX = e.width;
                outX = -inX;
                inY = outY = 0;
                break;
            case 2:
                inY = e.height;
                outY = -inY;
                inX = outX = 0;
                break;
            case 3:
                outX = e.width;
                inX = -outX;
                inY = outY = 0;
                break;
        }
        if (e.reverse) {
            e.in.duration(0).filter('brightness(0.3)').to(inX * .1, inY * .1, 0).end(() => {
                e.out.duration(duration).ease('ease-out-expo').to(outX, outY, 0).end();
                e.in.duration(duration).ease('ease-out-expo').filter('brightness(1)').to(0, 0, 0).end(() => {
                    e.callback(false);
                });
            });
        }
        else {
            e.in.duration(0).to(inX, inY, 0).end(() => {
                e.in.duration(duration).ease('ease-out-expo').to(0, 0, 0).end(() => {
                    e.callback(false);
                });
                e.out.duration(duration).ease('ease-out-expo').filter('brightness(0.3)').to(outX * .5, outY * .5, 0).end();
            });
        }
        setTimeout(() => {
            e.callback(false);
        }, duration * 2);
    };
});


/***/ })

}]);
//# sourceMappingURL=src_Transform_animation_preset_slide_ts.js.map