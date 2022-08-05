"use strict";
(self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || []).push([["Lath_app_index-f45b69a7_js"],{

/***/ "../Lath/app/index-f45b69a7.js":
/*!*************************************!*\
  !*** ../Lath/app/index-f45b69a7.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSwitcher": () => (/* binding */ AppSwitcher)
/* harmony export */ });
/* harmony import */ var _index_4ea029a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4ea029a7.js */ "../Lath/app/index-4ea029a7.js");
/* harmony import */ var _index_87beeef8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-87beeef8.js */ "../Lath/app/index-87beeef8.js");
class AppSwitcher{constructor(e){this.inProgress=!1;var{relativeViewport:t,absoluteViewport:i,fixedViewport:s}=e.segue;this.relativeViewport=t,this.absoluteViewport=i,this.fixedViewport=s,this.application=e,this.delayDynamicImport()}delayDynamicImport(){Promise.all(/*! import() */[__webpack_require__.e("vendors-Lath_node_modules_html2canvas_dist_html2canvas_js"), __webpack_require__.e("Lath_app_index-6e7f62f8_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./index-6e7f62f8.js */ "../Lath/app/index-6e7f62f8.js")).catch(e=>{console.warn(e)})}getActiveApplet(){var e=this.application.activityApplet;return null!=e&&e.slide?this.application.applets[e.slide.activeId]:e}blurBackgroundImage(){this.relativeViewport.style.filter="blur(20px)",this.absoluteViewport.style.filter="blur(20px)"}focusBackgroundImage(){this.relativeViewport.style.filter="none",this.absoluteViewport.style.filter="none"}open(){return (0,_index_4ea029a7_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){!0!==this.inProgress&&(this.inProgress=!0,yield this.createAppSwitcher(),this.blurBackgroundImage(),this.switcher.style.opacity="1",this.inProgress=!1)})}close(){this.inProgress=!0,this.focusBackgroundImage(),this.switcher.style.opacity="0",(0,_index_87beeef8_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{this.fixedViewport.removeChild(this.switcher)},400),this.inProgress=!1}createAppSwitcher(){return (0,_index_4ea029a7_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){this.switcher=document.createElement("applet-switcher"),this.switcher.style.cssText=`
      display: grid;
      box-sizing: border-box;
      position: absolute;
      inset: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      padding: 10px;
      padding-top: constant(safe-area-inset-top);
      padding-top: env(safe-area-inset-top);
      overflow-y: scroll !important;
      scroll-padding: 12px;
      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;
      grid-template-columns: 50% 50%;
      grid-auto-rows: max-content;
      background: rgb(128 128 128 / 50%);
      opacity: 0;
      transition: opacity .6s ease;
    `;var e=this.relativeViewport.offsetWidth,t=e/2-30,i=this.relativeViewport.offsetHeight*t/e,s=this.application.applets,o=this.getActiveApplet();for(const a in s){const n=s[a],p=n.color;if("applet"===n.rel&&!n.isModality&&n.view){const l=document.createElement("applet-switcher-item"),d=document.createElement("div"),c=document.createElement("div"),h=document.createElement("div"),x=document.createElement("div"),f=document.createElement("div");l.style.cssText=`
          width: 100%;
          height: ${50+i}px;
          padding: 0 10px;
          box-sizing: border-box;
          scroll-snap-align: start;
          cursor: pointer;
        `;var r=n.config.poster?`
          background-image: url(${n.config.poster});
          background-size: cover;
        `:"";d.style.cssText=`
          display: block;
          margin: 20px 0 4px;
          width: ${t}px;
          height: ${i}px;
          background: ${p};
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
          ${r}
        `,c.style.cssText=`
          display: block;
          width: ${t}px;
          height: ${i}px;
          background: ${p};
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
        `,x.style.cssText=`
          display: flex;
          margin: 0 auto;
          width: ${t}px;
          align-items: center;
        `,h.style.cssText=n.config.icon?`
          width: 16px;
          height: 16px;
          background-image: url(${n.config.icon});
        `:"display: none;",f.style.cssText=`
          font-size: 16px;
          color: #fff;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica Neue","Helvetica","Arial",sans-serif;
        `,f.innerText=n.config.title||n.id,x.appendChild(h),x.appendChild(f),d.appendChild(c),l.appendChild(d),l.appendChild(x),this.switcher.appendChild(l),this.fixedViewport.appendChild(this.switcher);const u=c.offsetTop,g=c.offsetLeft,m=c.offsetWidth/this.switcher.offsetWidth;if(n.id===(null==o?void 0:o.id)){const w=c.style.cssText;c.style.cssText=`
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            transform-origin: top left;
            transform: translate3d(0px, 0px, 0px);
            transition: all .4s ease;
            background: ${p};
            border-radius: ${16/m}px;
            overflow: hidden;
          `,(0,_index_87beeef8_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{c.style.transform=`translate3d(${g}px, ${u}px, 0px) scale(${m})`,(0,_index_87beeef8_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{c.style.cssText=w},600)},200),c.appendChild(yield n.captureShot())}else n.captureShot().then(e=>c.appendChild(e)).catch(e=>{console.warn(e)});l.addEventListener("click",()=>{c.style.cssText=`
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            transform-origin: top left;
            transform: translate3d(${g}px, ${u}px, 0px) scale(${m});
            background: ${p};
            border-radius: ${16/m}px;
            overflow: hidden;
          `,(0,_index_87beeef8_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{const i=c.querySelector("canvas");c.style.transition="all .4s ease",i.style.transition="all .4s ease",(0,_index_87beeef8_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{c.style.transform="translate3d(0px, 0px, 0px) scale(1)";const t=Date.now();this.application.to(n.id,n.param).then(()=>{var e=Date.now()-t;(0,_index_87beeef8_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{c.style.borderRadius="0px",i.style.borderRadius="0px",this.close()},200<e?0:400-e)})})})})}}})}}

/***/ })

}]);
//# sourceMappingURL=Lath_app_index-f45b69a7_js.js.map