"use strict";
(self["webpackChunklath"] = self["webpackChunklath"] || []).push([["src_Animate_index_ts"],{

/***/ "./src/Animate/ease.ts":
/*!*****************************!*\
  !*** ./src/Animate/ease.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    'in': 'ease-in',
    'out': 'ease-out',
    'in-out': 'ease-in-out',
    'snap': 'cubic-bezier(0, 1, .5, 1)',
    'linear': 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
    'ease-in-quad': 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
    'ease-in-cubic': 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
    'ease-in-quart': 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
    'ease-in-quint': 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
    'ease-in-sine': 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
    'ease-in-expo': 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
    'ease-in-circ': 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
    'ease-in-back': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
    'ease-out-quad': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    'ease-out-cubic': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    'ease-out-quart': 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    'ease-out-quint': 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
    'ease-out-sine': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    'ease-out-expo': 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
    'ease-out-circ': 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
    'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    'ease-in-out-quad': 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    'ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    'ease-in-out-quart': 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
    'ease-in-out-quint': 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
    'ease-in-out-sine': 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
    'ease-in-out-expo': 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
    'ease-in-out-circ': 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
    'ease-in-out-back': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
});


/***/ }),

/***/ "./src/Animate/index.ts":
/*!******************************!*\
  !*** ./src/Animate/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animate": () => (/* binding */ Animate)
/* harmony export */ });
/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ease */ "./src/Animate/ease.ts");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Event */ "./src/Event/index.ts");


const rAF = requestAnimationFrame !== null && requestAnimationFrame !== void 0 ? requestAnimationFrame : setTimeout;
const gCS = getComputedStyle;
class Animate extends _Event__WEBPACK_IMPORTED_MODULE_1__.EventProvider {
    constructor(el) {
        super();
        this._props = {};
        this._transforms = {};
        this._transforming = false;
        this._proper = [];
        this._caller = [];
        this._transitionProps = [];
        this.translate = this.to;
        this.translate3d = this.to;
        this.translateX = this.x;
        this.translateY = this.y;
        this.translateZ = this.z;
        if (!el)
            return;
        this.el = el;
        this.el.style.setProperty('transition-duration', '0ms');
    }
    transform(transform) {
        this.transition('transform');
        const propName = (transform.match(/\w+\b/) || [])[0];
        if (propName)
            this._transforms[propName] = transform;
        return this;
    }
    skew(x, y) {
        return this.transform('skew(' + x + 'deg, ' + (y || 0) + 'deg)');
    }
    skewX(n) {
        return this.transform('skewX(' + n + 'deg)');
    }
    skewY(n) {
        return this.transform('skewY(' + n + 'deg)');
    }
    to(x = 0, y = 0, z = 0) {
        this.transform('translate3d(' + (x ? x + 'px' : 0) + ',' + (y ? y + 'px' : 0) + ',' + (z ? z + 'px' : 0) + ')');
        return this;
    }
    x(n) {
        return this.transform('translateX(' + n + 'px)');
    }
    y(n) {
        return this.transform('translateY(' + n + 'px)');
    }
    z(z) {
        return this.transform('translateZ(' + z + 'px)');
    }
    scale(x, y = x) {
        return this.transform('scale(' +
            x + ', ' +
            (y || x) +
            ')');
    }
    opacity(o) {
        this.transition('opacity');
        return this.style('opacity', o);
    }
    scaleX(n) {
        return this.transform('scaleX(' + n + ')');
    }
    matrix(m11, m12, m21, m22, m31, m32) {
        return this.transform('matrix(' + [m11, m12, m21, m22, m31, m32].join(',') + ')');
    }
    scaleY(n) {
        return this.transform('scaleY(' + n + ')');
    }
    rotate(n) {
        return this.transform('rotate(' + n + 'deg)');
    }
    rotateX(n) {
        return this.transform('rotateX(' + n + 'deg)');
    }
    rotateY(n) {
        return this.transform('rotateY(' + n + 'deg)');
    }
    rotateZ(n) {
        return this.transform('rotateZ(' + n + 'deg)');
    }
    rotate3d(x, y, z, d) {
        return this.transform('rotate3d(' + x + ', ' + y + ',' + z + ',' + d + 'deg)');
    }
    perspective(z) {
        const box = this.el.parentElement;
        if (box) {
            box.style.setProperty('transform-style', 'preserve-3d');
            box.style.setProperty('perspective', z + 'px');
        }
        return this;
    }
    backface(visibility = true) {
        return this.style('backface-visibility', visibility ? 'visible' : 'hidden');
    }
    ease(s) {
        s = _ease__WEBPACK_IMPORTED_MODULE_0__["default"][s] || s || 'ease';
        return this.style('transition-timing-function', s);
    }
    animate(name, props) {
        for (const i in props) {
            if (props.hasOwnProperty(i)) {
                this.style('animation-' + i, props[i]);
            }
        }
        return this.style('animation-name', name);
    }
    duration(n) {
        n = 'string' === typeof n ?
            parseFloat(n) * 1000 :
            n;
        return this.style('transition-duration', n + 'ms');
    }
    getDuration() {
        return !!parseFloat(gCS(this.el).transitionDuration);
    }
    delay(n) {
        n = 'string' === typeof n ?
            parseFloat(n) * 1000 :
            n;
        return this.style('transition-delay', n + 'ms');
    }
    transformOrigin(x, y = 0) {
        let n = 'center';
        if (Array.isArray(x)) {
            y = x[1] || 0;
            x = x[0] || 0;
        }
        if (typeof x === 'string') {
            n = x;
        }
        else if (typeof x === 'number') {
            n = x + 'px' + ' ' + y + 'px';
        }
        return this.style('transform-origin', n);
    }
    width(val) {
        this.transition('width');
        return this.style('width', val === undefined ? '' : val + 'px');
    }
    height(val) {
        this.transition('height');
        return this.style('height', val === undefined ? '' : val + 'px');
    }
    add(prop, val) {
        return this.on('start', () => {
            const curr = parseInt(this.current(prop), 10);
            this.style(prop, curr + val + 'px');
        });
    }
    subc(prop, val) {
        return this.on('start', () => {
            const curr = parseInt(this.current(prop), 10);
            this.style(prop, curr - val + 'px');
        });
    }
    current(prop) {
        return gCS(this.el).getPropertyValue(prop);
    }
    transition(prop) {
        if (this._transitionProps.indexOf(prop) === -1)
            this._transitionProps.push(prop);
        return this;
    }
    filter(val) {
        this.style('filter', val);
        this.transition('filter');
        return this;
    }
    style(prop, val) {
        this._props[prop] = val === undefined ? '' : val;
        return this;
    }
    onceTransitionend(fn) {
        if (!this.getDuration())
            return setTimeout(fn, 0);
        const onec = (e) => {
            if (e.target !== this.el)
                return false;
            fn();
            this.el.removeEventListener('transitionend', onec, false);
        };
        this.el.addEventListener('transitionend', onec, false);
    }
    applyTransform() {
        const transform = [];
        if (!this._transforms['translate3d'] && !this._transforms['translateZ']) {
            this._transforms['translateZ'] = 'translateZ(0)';
        }
        for (const i in this._transforms) {
            transform.push(this._transforms[i]);
        }
        if (transform.length) {
            this.style('transform', transform.join(' '));
        }
        return this;
    }
    applyProperties() {
        const prop = this._proper.shift();
        this._transforming = true;
        for (const name in prop) {
            if (this.el.style['-webkit-' + name] !== undefined) {
                this.el.style.setProperty('-webkit-' + name, prop[name]);
            }
            this.el.style.setProperty(name, prop[name]);
        }
        this.onceTransitionend(() => {
            this.clear();
            this.next();
        });
        return this;
    }
    next() {
        if (this._caller.length) {
            const fn = this._caller.shift();
            fn === null || fn === void 0 ? void 0 : fn();
        }
        if (this._caller.length === 0) {
            this.init();
        }
        else {
            rAF(() => { this.applyProperties(); });
        }
    }
    clear() {
        this._transforms = {};
    }
    init() {
        if (this.getDuration()) {
            this.el.style.setProperty('transition-duration', '0ms');
        }
        this.clear();
        this._transforming = false;
        return this;
    }
    then(fn = () => undefined) {
        this.applyTransform();
        this.style('transition-property', this._transitionProps.join(', '));
        this._proper.push(this._props);
        this._props = {};
        this._caller.push(() => fn === null || fn === void 0 ? void 0 : fn.call(this));
        return this;
    }
    and(fn = () => undefined) {
        this.then(fn);
        if (this._transforming)
            return this;
        rAF(() => { this.applyProperties(); });
    }
    end(fn) {
        return new Promise((resolve) => {
            fn = fn !== null && fn !== void 0 ? fn : (() => resolve());
            this.then(fn);
            if (this._transforming)
                return;
            rAF(() => { this.applyProperties(); });
        });
    }
}



/***/ })

}]);
//# sourceMappingURL=src_Animate_index_ts.js.map