"use strict";
(self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || []).push([["Lath_app_index-5c6730af_js"],{

/***/ "../Lath/app/index-5c6730af.js":
/*!*************************************!*\
  !*** ../Lath/app/index-5c6730af.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSwitcher": () => (/* binding */ AppSwitcher)
/* harmony export */ });
/* harmony import */ var _index_3d1239de_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d1239de.js */ "../Lath/app/index-3d1239de.js");
/* harmony import */ var _index_d27948d9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-d27948d9.js */ "../Lath/app/index-d27948d9.js");
const switcherStyle=`
  box-sizing: border-box;
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
  background: rgb(128 128 128 / 50%);
  opacity: 0;
  transition: opacity .4s ease;
`,snapWrapperStyle=`
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
`,snapWrapper2Style=`
  ${snapWrapperStyle}
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(2, 40%);
  row-gap: 15px;
`,snapWrapper3Style=`
  ${snapWrapperStyle}
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(2, 50%);
  row-gap: 15px;
`,itemImgWrapperStyle=`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgb(0 0 0 / 30%);
`,itemViewStyle=`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  scroll-snap-align: start;
  cursor: pointer;
  margin: 0 10px;
`,itemImgStyle=`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  transform-origin: top left;
  transform: translate3d(0, 0, 0);
  overflow: hidden;
`,itemImgCoverStyle=`
  position: fixed;
  top: 0;
  left: 0;
  ${itemImgStyle}
`,itemInfoStyle=`
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
`,itemTitleStyle=`
  margin-top: 4px;
  font-size: 16px;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica","Arial",sans-serif;
`;class AppSwitcher{constructor(e){this.inProgress=!1;var{relativeViewport:t,absoluteViewport:i,fixedViewport:s}=e.segue;this.relativeViewport=t,this.absoluteViewport=i,this.fixedViewport=s,this.application=e,this.delayDynamicImport()}bindResize(){const e=()=>{this.close(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)};window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}open(){return (0,_index_3d1239de_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){!0!==this.inProgress&&(this.inProgress=!0,yield this.createAppSwitcher(),this.blurBackgroundImage(),this.switcher.style.opacity="1",this.bindResize(),(0,_index_d27948d9_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{this.inProgress=!1},400))})}close(){this.inProgress=!0,this.focusBackgroundImage(),this.switcher.style.opacity="0",(0,_index_d27948d9_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{this.inProgress=!1,this.switcher.parentElement===this.fixedViewport&&this.fixedViewport.removeChild(this.switcher)},400)}createAppSwitcher(){return (0,_index_3d1239de_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){this.switcher=document.createElement("applet-switcher"),this.switcher.style.cssText=switcherStyle,this.snapWrapper=document.createElement("applet-switcher-snap"),this.snapWrapper.style.cssText=800<this.switcher.offsetWidth?snapWrapper3Style:snapWrapper2Style,this.scroll=new _index_d27948d9_js__WEBPACK_IMPORTED_MODULE_1__.S(this.snapWrapper);var e=this.application.applets,t=this.getActiveApplet();for(const o in e){var i=e[o],s=i.color;if("applet"===i.rel&&!i.isModality&&i.view){const a=document.createElement("applet-switcher-item"),n=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div");a.style.cssText=itemViewStyle;var r=i.config.poster?`
          background-image: url(${i.config.poster});
          background-size: cover;
        `:"";n.style.cssText=`
          ${itemImgWrapperStyle}
          background: ${s};
          ${r}
        `,l.style.cssText=`
          ${itemImgStyle}
          background: ${s};
        `,d.style.cssText=itemInfoStyle,p.style.cssText=i.config.icon?`
          width: 16px;
          height: 16px;
          background-image: url(${i.config.icon});
        `:"display: none;",c.style.cssText=itemTitleStyle,c.innerText=i.config.title||i.id,d.appendChild(p),d.appendChild(c),n.appendChild(l),a.appendChild(n),a.appendChild(d),this.snapWrapper.appendChild(a),this.switcher.appendChild(this.snapWrapper),this.fixedViewport.appendChild(this.switcher),i.id===(null==t?void 0:t.id)?yield this.setActivityItem(i,n,l):this.setNormalItem(i,l),this.bindItemClick(i,a,n,l)}}this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(.9)",(0,_index_d27948d9_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{this.snapWrapper.style.transition="all .4s ease-out",this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(1)"},100)})}bindItemClick(e,t,i,s){t.addEventListener("click",()=>{this.inProgress||(this.inProgress=!0,this.restoreToItem(e,i,s))})}setNormalItem(e,t){return (0,_index_3d1239de_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){t.style.opacity="0",e.captureShot(Date.now()-e.visitTime<=12e4).then(e=>{t.appendChild(e),t.style.transition="opacity .2s ease",t.style.opacity="1"}).catch(e=>{console.warn(e)})})}setActivityItem(r,o,a){return (0,_index_3d1239de_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){var e=o.offsetTop,t=r.color,i=o.offsetWidth/this.switcher.offsetWidth;const s=a.style.cssText;a.style.cssText=`
      ${itemImgCoverStyle}
      z-index: 3;
      background: ${t};
      border-radius: ${16/i}px;
    `,this.switcher.appendChild(a),a.appendChild(yield r.captureShot()),this.scroll.snapTo(0,e),this.shrinkToItem(o,a).then(()=>{a.style.cssText=s,o.appendChild(a)})})}restoreToItem(o,a,n){return (0,_index_3d1239de_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){var e=a.offsetTop,t=a.offsetLeft,i=a.offsetWidth/this.switcher.offsetWidth,s=o.color;this.switcher.appendChild(n),n.style.cssText=`
      ${itemImgCoverStyle}
      z-index: 5;
      height: 100%;
      transform: translate3d(${t}px, ${e}px, 0px) scale(${i});
      background: ${s};
      border-radius: ${16/i}px;
      overflow: hidden;
    `,yield this.stretchToItem(n);const r=Date.now();this.application.to(o.id,o.param).then(()=>{var e=Date.now()-r;(0,_index_d27948d9_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{n.style.borderRadius="0px",this.close()},200<e?0:400-e)})})}stretchToItem(i){return (0,_index_3d1239de_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){return new Promise(t=>{(0,_index_d27948d9_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{const e=i.querySelector("canvas");i.style.transition="all .4s ease",e.style.transition="all .4s ease",(0,_index_d27948d9_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{i.style.transform="translate3d(0px, 0px, 0px) scale(1)",this.snapWrapper.style.transition="all .4s ease-out",this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(.9)",t()})})})})}shrinkToItem(e,o){return (0,_index_3d1239de_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){const t=e.offsetHeight,i=e.offsetTop,s=e.offsetLeft;const r=e.offsetWidth/this.switcher.offsetWidth;return new Promise(e=>{(0,_index_d27948d9_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{o.style.transition="all .4s ease",(0,_index_d27948d9_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{o.style.zIndex="3",o.style.height=t/r+"px",o.style.transform=`translate3d(${s}px, ${i}px, 0px) scale(${r})`,(0,_index_d27948d9_js__WEBPACK_IMPORTED_MODULE_1__.s)(e,600)})})})})}getActiveApplet(){var e=this.application.activityApplet;return null!=e&&e.slide?this.application.applets[e.slide.activeId]:e}blurBackgroundImage(){this.relativeViewport.style.filter="blur(20px)",this.absoluteViewport.style.filter="blur(20px)"}focusBackgroundImage(){this.relativeViewport.style.filter="none",this.absoluteViewport.style.filter="none"}delayDynamicImport(){Promise.all(/*! import() */[__webpack_require__.e("vendors-Lath_node_modules_html2canvas_dist_html2canvas_js"), __webpack_require__.e("Lath_app_index-06261d37_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./index-06261d37.js */ "../Lath/app/index-06261d37.js")).catch(e=>{console.warn(e)})}}

/***/ })

}]);
//# sourceMappingURL=Lath_app_index-5c6730af_js.js.map