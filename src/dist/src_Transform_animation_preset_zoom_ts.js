"use strict";
(self["webpackChunklath"] = self["webpackChunklath"] || []).push([["src_Transform_animation_preset_zoom_ts"],{

/***/ "./src/Transform/animation/preset/zoom.ts":
/*!************************************************!*\
  !*** ./src/Transform/animation/preset/zoom.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((type) => {
    return (e) => {
        switch (type) {
            case 0:
                const actionOrigin = e.modules[1].getActionOrigin();
                const origin = actionOrigin ? [actionOrigin.x, actionOrigin.y] : e.origin;
                e.in.transformOrigin(e.attach).filter('brightness(0.5)').ease('ease-out-expo').duration(0).to(0, 0, 0).scale(2.5).end(() => {
                    e.out.transformOrigin(origin).ease('ease-out-expo').duration(767).scale(0.0001).end(() => {
                        e.out.transformOrigin(origin).ease('ease').duration(10).scale(0.0001).opacity(0).end(() => {
                            e.callback(false);
                        });
                    });
                    e.in.duration(767).filter('brightness(1)').to(0, 0, 0).scale(1).end();
                });
                break;
            case 1:
                e.in.transformOrigin(e.origin).ease('ease-out-expo').duration(0).to(0, 0, 0).scale(0).end(() => {
                    e.out.transformOrigin(e.attach).ease('ease-out-expo').filter('brightness(1)').duration(0).to(0, 0, 0).scale(1).end(() => {
                        e.in.duration(767).to(0, 0, 0).scale(1).end();
                        e.out.duration(767).scale(2.5).filter('brightness(0.5)').end(() => {
                            e.callback(false);
                        });
                    });
                });
                break;
        }
        setTimeout(() => {
            e.callback(false);
        }, 1200);
    };
});


/***/ })

}]);
//# sourceMappingURL=src_Transform_animation_preset_zoom_ts.js.map