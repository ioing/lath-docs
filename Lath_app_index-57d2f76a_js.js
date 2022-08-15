"use strict";
(self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || []).push([["Lath_app_index-57d2f76a_js"],{

/***/ "../Lath/app/index-57d2f76a.js":
/*!*************************************!*\
  !*** ../Lath/app/index-57d2f76a.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSwitcher": () => (/* binding */ AppSwitcher)
/* harmony export */ });
/* harmony import */ var _index_7b5e58cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7b5e58cc.js */ "../Lath/app/index-7b5e58cc.js");
/* harmony import */ var _index_a10091d3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-a10091d3.js */ "../Lath/app/index-a10091d3.js");
class AppSwitcher{constructor(e){this.inProgress=!1;var{relativeViewport:t,absoluteViewport:i,fixedViewport:s}=e.segue;this.relativeViewport=t,this.absoluteViewport=i,this.fixedViewport=s,this.application=e,this.delayDynamicImport()}open(){return (0,_index_7b5e58cc_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){!0!==this.inProgress&&(this.inProgress=!0,yield this.createAppSwitcher(),this.blurBackgroundImage(),this.switcher.style.opacity="1",(0,_index_a10091d3_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{this.inProgress=!1},400))})}close(){this.inProgress=!0,this.focusBackgroundImage(),this.switcher.style.opacity="0",(0,_index_a10091d3_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{this.fixedViewport.removeChild(this.switcher),this.inProgress=!1},400)}createAppSwitcher(){return (0,_index_7b5e58cc_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){this.switcher=document.createElement("applet-switcher"),this.switcher.style.cssText=`
      box-sizing: border-box;
      position: absolute;
      inset: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      padding: 10px;
      padding-top: constant(safe-area-inset-top);
      padding-top: env(safe-area-inset-top);
      background: rgb(128 128 128 / 50%);
      opacity: 0;
      transition: opacity .4s ease;
    `,this.snapWrapper=document.createElement("applet-switcher-snap"),this.snapWrapper.style.cssText=`
      display: grid;
      box-sizing: border-box;
      position: absolute;
      inset: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      padding: 10px;
      overflow-y: scroll !important;
      scroll-padding: 12px;
      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;
      grid-template-columns: 50% 50%;
      grid-auto-rows: max-content;
    `,this.scroll=new _index_a10091d3_js__WEBPACK_IMPORTED_MODULE_1__.S(this.snapWrapper);var e=this.relativeViewport.offsetWidth,t=e/2-30,i=this.relativeViewport.offsetHeight*t/e,s=this.application.applets,r=this.getActiveApplet();let o=0;for(const n in s){o++;const p=s[n],l=p.color;if("applet"===p.rel&&!p.isModality&&p.view){const d=document.createElement("applet-switcher-item"),c=document.createElement("div"),h=document.createElement("div"),x=document.createElement("div"),m=document.createElement("div"),u=document.createElement("div");d.style.cssText=`
          width: 100%;
          height: ${50+i}px;
          padding: 0 10px;
          box-sizing: border-box;
          scroll-snap-align: start;
          cursor: pointer;
        `;var a=p.config.poster?`
          background-image: url(${p.config.poster});
          background-size: cover;
        `:"";c.style.cssText=`
          display: block;
          margin-top: 20px;
          width: ${t}px;
          height: ${i}px;
          background: ${l};
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
          background: ${l};
          border-radius: 16px;
          overflow: hidden;
        `,m.style.cssText=`
          display: flex;
          margin: 0 auto;
          width: ${t}px;
          align-items: center;
        `,x.style.cssText=p.config.icon?`
          width: 16px;
          height: 16px;
          background-image: url(${p.config.icon});
        `:"display: none;",u.style.cssText=`
          margin-top: 4px;
          font-size: 16px;
          color: #fff;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica","Arial",sans-serif;
        `,u.innerText=p.config.title||p.id,m.appendChild(x),m.appendChild(u),c.appendChild(h),d.appendChild(c),d.appendChild(m),this.snapWrapper.appendChild(d),this.switcher.appendChild(this.snapWrapper),this.fixedViewport.appendChild(this.switcher);const f=h.offsetTop,g=h.offsetLeft,y=h.offsetWidth/this.switcher.offsetWidth;if(p.id===(null==r?void 0:r.id)){const w=h.style.cssText;h.style.cssText=`
            position: fixed;
            top: 0;
            ${o%2==0?`
              left: 0;
            `:`
              right: 0;
            `}
            transform-origin: top left;
            transform: translate3d(0px, 0px, 0px);
            background: ${l};
            border-radius: ${16/y}px;
            width: ${t/y}px;
            height: ${i/y}px;
            overflow: hidden;
          `,this.switcher.appendChild(h),h.appendChild(yield p.captureShot()),4<o&&this.scroll.snapTo(0,this.switcher.offsetHeight*(o-4)/4),(0,_index_a10091d3_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{h.style.transition="all .4s ease",(0,_index_a10091d3_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{h.style.zIndex="3",h.style.transform=`translate3d(${g}px, ${f}px, 0px) scale(${y})`,(0,_index_a10091d3_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{h.style.cssText=w,c.appendChild(h)},600)})})}else h.style.opacity="0",p.captureShot(Date.now()-p.visitTime<=12e4).then(e=>{h.appendChild(e),h.style.transition="opacity .2s ease",h.style.opacity="1"}).catch(e=>{console.warn(e)});d.addEventListener("click",()=>{this.inProgress||(this.inProgress=!0,this.switcher.appendChild(h),h.style.cssText=`
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 5;
            transform-origin: top left;
            transform: translate3d(${g}px, ${f}px, 0px) scale(${y});
            background: ${l};
            border-radius: ${16/y}px;
            overflow: hidden;
          `,(0,_index_a10091d3_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{const i=h.querySelector("canvas");h.style.transition="all .4s ease",i.style.transition="all .4s ease",(0,_index_a10091d3_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{h.style.transform="translate3d(0px, 0px, 0px) scale(1)";const t=Date.now();this.application.to(p.id,p.param).then(()=>{var e=Date.now()-t;(0,_index_a10091d3_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{h.style.borderRadius="0px",i.style.borderRadius="0px",this.close()},200<e?0:400-e)}),this.snapWrapper.style.transition="all .4s ease-out",this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(.9)"})}))})}}this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(.9)",(0,_index_a10091d3_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{this.snapWrapper.style.transition="all .4s ease-out",this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(1)"},100)})}delayDynamicImport(){Promise.all(/*! import() */[__webpack_require__.e("vendors-Lath_node_modules_html2canvas_dist_html2canvas_js"), __webpack_require__.e("Lath_app_index-28713b12_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./index-28713b12.js */ "../Lath/app/index-28713b12.js")).catch(e=>{console.warn(e)})}getActiveApplet(){var e=this.application.activityApplet;return null!=e&&e.slide?this.application.applets[e.slide.activeId]:e}blurBackgroundImage(){this.relativeViewport.style.filter="blur(20px)",this.absoluteViewport.style.filter="blur(20px)"}focusBackgroundImage(){this.relativeViewport.style.filter="none",this.absoluteViewport.style.filter="none"}}

/***/ })

}]);
//# sourceMappingURL=Lath_app_index-57d2f76a_js.js.map