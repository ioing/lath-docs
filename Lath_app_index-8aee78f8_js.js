"use strict";
(self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || []).push([["Lath_app_index-8aee78f8_js"],{

/***/ "../Lath/app/index-8aee78f8.js":
/*!*************************************!*\
  !*** ../Lath/app/index-8aee78f8.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSwitcher": () => (/* binding */ AppSwitcher)
/* harmony export */ });
/* harmony import */ var _index_37b822be_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-37b822be.js */ "../Lath/app/index-37b822be.js");
/* harmony import */ var _index_12f72558_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-12f72558.js */ "../Lath/app/index-12f72558.js");
class AppSwitcher{constructor(e){this.inProgress=!1;var{relativeViewport:t,absoluteViewport:i,fixedViewport:s}=e.segue;this.relativeViewport=t,this.absoluteViewport=i,this.fixedViewport=s,this.application=e,this.delayDynamicImport()}delayDynamicImport(){Promise.all(/*! import() */[__webpack_require__.e("vendors-Lath_node_modules_html2canvas_dist_html2canvas_js"), __webpack_require__.e("Lath_app_index-8e5e5162_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./index-8e5e5162.js */ "../Lath/app/index-8e5e5162.js")).catch(e=>{console.warn(e)})}getActiveApplet(){var e=this.application.activityApplet;return null!=e&&e.slide?this.application.applets[e.slide.activeId]:e}blurBackgroundImage(){this.relativeViewport.style.filter="blur(20px)",this.absoluteViewport.style.filter="blur(20px)"}focusBackgroundImage(){this.relativeViewport.style.filter="none",this.absoluteViewport.style.filter="none"}open(){return (0,_index_37b822be_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){!0!==this.inProgress&&(this.inProgress=!0,yield this.createAppSwitcher(),this.blurBackgroundImage(),this.switcher.style.opacity="1",(0,_index_12f72558_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{this.inProgress=!1},400))})}close(){this.inProgress=!0,this.focusBackgroundImage(),this.switcher.style.opacity="0",(0,_index_12f72558_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{this.fixedViewport.removeChild(this.switcher),this.inProgress=!1},400)}createAppSwitcher(){return (0,_index_37b822be_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){this.switcher=document.createElement("applet-switcher"),this.switcher.style.cssText=`
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
      transition: opacity .4s ease;
    `,this.scroll=new _index_12f72558_js__WEBPACK_IMPORTED_MODULE_1__.S(this.switcher);var e=this.relativeViewport.offsetWidth,t=e/2-30,i=this.relativeViewport.offsetHeight*t/e,s=this.application.applets,o=this.getActiveApplet();let r=0;for(const n in s){r++;const l=s[n],p=l.color;if("applet"===l.rel&&!l.isModality&&l.view){const c=document.createElement("applet-switcher-item"),d=document.createElement("div"),h=document.createElement("div"),x=document.createElement("div"),f=document.createElement("div"),m=document.createElement("div");c.style.cssText=`
          width: 100%;
          height: ${50+i}px;
          padding: 0 10px;
          box-sizing: border-box;
          scroll-snap-align: start;
          cursor: pointer;
        `;var a=l.config.poster?`
          background-image: url(${l.config.poster});
          background-size: cover;
        `:"";d.style.cssText=`
          display: block;
          margin-top: 20px;
          width: ${t}px;
          height: ${i}px;
          background: ${p};
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
          ${a}
        `,h.style.cssText=`
          position: absolute;
          z-index: 1;
          display: block;
          width: ${t}px;
          height: ${i}px;
          background: ${p};
          border-radius: 16px;
          overflow: hidden;
        `,f.style.cssText=`
          display: flex;
          margin: 0 auto;
          width: ${t}px;
          align-items: center;
        `,x.style.cssText=l.config.icon?`
          width: 16px;
          height: 16px;
          background-image: url(${l.config.icon});
        `:"display: none;",m.style.cssText=`
          margin-top: 4px;
          font-size: 16px;
          color: #fff;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica","Arial",sans-serif;
        `,m.innerText=l.config.title||l.id,f.appendChild(x),f.appendChild(m),d.appendChild(h),c.appendChild(d),c.appendChild(f),this.switcher.appendChild(c),this.fixedViewport.appendChild(this.switcher);const u=h.offsetTop,g=h.offsetLeft,w=h.offsetWidth/this.switcher.offsetWidth;if(l.id===(null==o?void 0:o.id)){const y=h.style.cssText;h.style.cssText=`
            position: fixed;
            top: 0;
            ${r%2==0?`
              left: 0;
            `:`
              right: 0;
            `}
            transform-origin: top left;
            transform: translate3d(0px, 0px, 0px);
            background: ${p};
            border-radius: ${16/w}px;
            width: ${t/w}px;
            height: ${i/w}px;
            overflow: hidden;
          `,h.appendChild(yield l.captureShot()),4<r&&this.scroll.snapTo(0,this.switcher.offsetHeight*(r-4)/4),(0,_index_12f72558_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{h.style.transition="all .4s ease",(0,_index_12f72558_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{h.style.zIndex="3",h.style.transform=`translate3d(${g}px, ${u}px, 0px) scale(${w})`,(0,_index_12f72558_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{h.style.cssText=y},600)})})}else d.style.opacity="0",d.style.transition="opacity .4s ease",l.captureShot().then(e=>{h.appendChild(e),d.style.opacity="1"}).catch(e=>{console.warn(e)});c.addEventListener("click",()=>{this.inProgress||(this.inProgress=!0,h.style.cssText=`
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 5;
            transform-origin: top left;
            transform: translate3d(${g}px, ${u}px, 0px) scale(${w});
            background: ${p};
            border-radius: ${16/w}px;
            overflow: hidden;
          `,(0,_index_12f72558_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{const i=h.querySelector("canvas");h.style.transition="all .4s ease",i.style.transition="all .4s ease",(0,_index_12f72558_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{h.style.transform="translate3d(0px, 0px, 0px) scale(1)";const t=Date.now();this.application.to(l.id,l.param).then(()=>{var e=Date.now()-t;(0,_index_12f72558_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{h.style.borderRadius="0px",i.style.borderRadius="0px",this.close()},200<e?0:400-e)})})}))})}}})}}

/***/ })

}]);
//# sourceMappingURL=Lath_app_index-8aee78f8_js.js.map