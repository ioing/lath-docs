"use strict";
(self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || []).push([["Lath_app_index-d8757979_js"],{

/***/ "../Lath/app/index-d8757979.js":
/*!*************************************!*\
  !*** ../Lath/app/index-d8757979.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPullToRefreshHolder": () => (/* binding */ createPullToRefreshHolder),
/* harmony export */   "registerPullDownEvent": () => (/* binding */ registerPullDownEvent)
/* harmony export */ });
/* harmony import */ var _index_d19691e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-d19691e3.js */ "../Lath/app/index-d19691e3.js");
/* harmony import */ var _index_42b7502e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-42b7502e.js */ "../Lath/app/index-42b7502e.js");
const setBaseCss=()=>{const e=document.createElement("style");e.innerHTML=`
    body {
      overscroll-behavior-y: none;
    }
  `,document.getElementsByTagName("head")[0].appendChild(e)},createPullToRefreshHolder=(e,t)=>{const r=document.createElement("applet-refresh-hold");var a=document.createElement("applet-pull-refresh");const o=null==(d=a.attachShadow)?void 0:d.call(a,{mode:"open"}),n=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div"),i=document.createElement("style");var d=e?"30, 30, 30":"255, 255, 255";return i.innerHTML=`
    .applet-loading {
      position: fixed;
      z-index: 1;
      height: 2em;
      width: 2em;
      overflow: visible;
      margin: auto;
      right: 0;
      bottom: 0;
      left: 0;
      font: 0/0 a;
      color: transparent;
      text-shadow: none;
      background-color: transparent;
      border: 0;
      transform: translate3d(0, 0, 0) scale(.6);
    }
    
    .applet-spinner {
      content: ' ';
      display: block;
      font-size: 10px;
      width: 1em;
      height: 1em;
      margin-top: -7em;
      border-radius: 0.5em;
      transform: translate3d(0, 0, 0) rotate(0deg);
      box-shadow: rgba(${d}, 0.75) 1.5em 0 0 0, rgba(${d}, 0.75) 1.1em 1.1em 0 0, rgba(${d}, 0.75) 0 1.5em 0 0, rgba(${d}, 0.75) -1.1em 1.1em 0 0, rgba(${d}, 0.75) -1.5em 0 0 0, rgba(${d}, 0.75) -1.1em -1.1em 0 0, rgba(${d}, 0.75) 0 -1.5em 0 0, rgba(${d}, 0.75) 1.1em -1.1em 0 0;
    }
    @keyframes applet-spinner {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `,n.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    z-index: 999999;
    background: ${e?"rgba(255, 255, 255, .5)":"rgba(0, 0, 0, .5)"};
    transform: translate3d(0, -100%, 0);
    transition-property: transform;
    border-radius: 0 0 50% 50%;
    backdrop-filter: blur(20px); 
    -webkit-backdrop-filter: blur(20px);
  `,r.style.cssText=`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 7;
    display: none;
  `,o.appendChild(i),l.className="applet-loading",l.appendChild(s),s.className="applet-spinner",n.appendChild(l),o.appendChild(n),t.appendChild(o),t.appendChild(r),setBaseCss(),{holder:n,spinner:s,holdLayer:r}},registerPullDownEvent=(a,o,n,l,e)=>{if(o&&n&&l&&e){const s=e=>{e=e.changedTouches,e=e[e.length-1];return[e.clientX,e.clientY]},i={startY:0,y:0,scrollStartY:0,hasTouchStart:!1,triggered:!1};o.addEventListener("touchstart",e=>{var t,r;i.triggered||(r="BODY"===o.tagName,t=null==o?void 0:o.scrollTop,100<(r=null!=(r=r?null==(r=e.view)?void 0:r.scrollY:t)?r:t)||(n.style.transitionDuration="0s",i.scrollStartY=r,i.startY=s(e)[1],i.hasTouchStart=!0))}),o.addEventListener("touchend",()=>{if(i.hasTouchStart=!1,l.style.filter="blur(0px)",n.style.transitionDuration=".4s",!i.triggered)return n.style.transform="translate3d(0, -100%, 0)",void a.trigger("pullToRefreshCancel");l.style.animation="applet-spinner 1000ms infinite linear",e.style.display="block",(0,_index_d19691e3_js__WEBPACK_IMPORTED_MODULE_0__.s)(()=>{n.style.transform="translate3d(0, -100%, 0)",(0,_index_d19691e3_js__WEBPACK_IMPORTED_MODULE_0__.s)(()=>{if(a.config.forcedToRefresh)return location.reload();a.refresh().then(()=>{e.style.display="none",l.style.animation="none",i.triggered=!1}).catch(()=>{location.reload()})},400)},800),a.trigger("pullToRefreshRelease")}),o.addEventListener("touchmove",e=>{var t,r;!1===i.hasTouchStart||100<i.scrollStartY||([e,t]=s(e),i.y=t-i.startY,i.y<10||i.y<i.scrollStartY+50||(t=o.offsetWidth,e=50-(50-Math.max(Math.min(e/t*100,100),0))/3,r=(t=Math.max(Math.min(i.y/400*100,100),0))/2,n.style.borderBottomLeftRadius=e+"%",n.style.borderBottomRightRadius=100-e+"%",n.style.transform=`translate3d(0, -${100-r}%, 0)`,l.style.transform=`translate3d(0, 0, 0) rotate(${i.y/2%360}deg)`,100===t?(i.triggered=!0,l.style.filter="blur(2px)",a.trigger("pullToRefreshReady")):(i.triggered=!1,l.style.filter="blur(0px)",a.trigger("pullToRefreshRequest"))))})}};

/***/ })

}]);
//# sourceMappingURL=Lath_app_index-d8757979_js.js.map