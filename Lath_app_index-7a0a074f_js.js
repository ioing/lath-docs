"use strict";
(self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || []).push([["Lath_app_index-7a0a074f_js"],{

/***/ "../Lath/app/index-7a0a074f.js":
/*!*************************************!*\
  !*** ../Lath/app/index-7a0a074f.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSwitcher": () => (/* binding */ AppSwitcher)
/* harmony export */ });
/* harmony import */ var _index_6c99c76a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-6c99c76a.js */ "../Lath/app/index-6c99c76a.js");
/* harmony import */ var _index_4bf0daa3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-4bf0daa3.js */ "../Lath/app/index-4bf0daa3.js");
const switcherStyle=`
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 102;
  width: 100%;
  height: 100%;
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
  background: rgb(70 70 70 / 50%);
  opacity: 0;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition: opacity .4s ease;
`,snapWrapperStyle=`
  display: grid;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-y: scroll !important;
  scroll-padding: 12px;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
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
  backface-visibility: hidden;
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
`;class AppSwitcher{constructor(e){this.progressName="";var{relativeViewport:t,absoluteViewport:i,fixedViewport:s}=e.segue;this.relativeViewport=t,this.absoluteViewport=i,this.fixedViewport=s,this.application=e,this.delayDynamicImport()}bindResize(){const e=()=>{this.close(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)};window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}open(){return (0,_index_6c99c76a_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){"open"!==this.progressName&&(this.progressName="open",yield this.createAppSwitcher(),this.blurBackgroundImage(),this.switcher.style.opacity="1",this.bindResize(),(0,_index_4bf0daa3_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{"close"!==this.progressName&&(this.progressName="")},400))})}close(){"close"!==this.progressName&&(this.progressName="close",this.focusBackgroundImage(),this.switcher.style.opacity="0",(0,_index_4bf0daa3_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{"open"!==this.progressName&&(this.progressName="",this.switcher.parentElement===this.fixedViewport&&this.fixedViewport.removeChild(this.switcher))},400))}createAppSwitcher(){return (0,_index_6c99c76a_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){this.switcher=document.createElement("applet-switcher"),this.switcher.style.cssText=switcherStyle,this.snapWrapper=document.createElement("applet-switcher-snap"),this.snapWrapper.style.cssText=800<this.switcher.offsetWidth?snapWrapper3Style:snapWrapper2Style,this.scroll=new _index_4bf0daa3_js__WEBPACK_IMPORTED_MODULE_1__.S(this.snapWrapper);var e=this.application.applets,t=this.getActiveApplet();for(const o in e){var i=e[o],s=i.color;if("applet"===i.rel&&!i.isModality&&i.view){const a=document.createElement("applet-switcher-item"),n=document.createElement("div"),p=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div");a.style.cssText=itemViewStyle;var r=i.config.poster?`
          background-image: url(${i.config.poster});
          background-size: cover;
        `:"";n.style.cssText=`
          ${itemImgWrapperStyle}
          background: ${s};
          ${r}
        `,p.style.cssText=`
          ${itemImgStyle}
          background: ${s};
        `,c.style.cssText=itemInfoStyle,l.style.cssText=i.config.icon?`
          width: 16px;
          height: 16px;
          background-image: url(${i.config.icon});
        `:"display: none;",d.style.cssText=itemTitleStyle,d.innerText=i.config.title||i.id,c.appendChild(l),c.appendChild(d),n.appendChild(p),a.appendChild(n),a.appendChild(c),this.snapWrapper.appendChild(a),this.switcher.appendChild(this.snapWrapper),this.fixedViewport.appendChild(this.switcher),i.id===(null==t?void 0:t.id)?yield this.setActivityItem(i,n,p):this.setNormalItem(i,p),this.bindItemClick(i,n,p)}}this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(.9)",this.snapWrapper.style.opacity=".5",(0,_index_4bf0daa3_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{"close"!==this.progressName&&(this.snapWrapper.style.transition="transform .44s cubic-bezier(0.52, 0.16, 0.24, 1), opacity .36s cubic-bezier(0.52, 0.16, 0.24, 1)",this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(1)",this.snapWrapper.style.opacity="1")},100)})}bindItemClick(e,t,i){i.addEventListener("click",()=>{"close"!==this.progressName&&(this.progressName="close",this.restoreToItem(e,t,i))})}setNormalItem(e,t){return (0,_index_6c99c76a_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){e.captureShot(Date.now()-e.visitTime<=12e4).then(e=>{t.appendChild(e),e.style.opacity=".1",(0,_index_4bf0daa3_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{e.style.transition="opacity .2s cubic-bezier(0.52, 0.16, 0.24, 1)",e.style.opacity="1"})}).catch(e=>{console.warn(e)})})}setActivityItem(r,o,a){return (0,_index_6c99c76a_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){const e=o.offsetTop;var t=r.color,i=o.offsetWidth/this.switcher.offsetWidth;const s=a.style.cssText;a.style.cssText=`
      ${itemImgCoverStyle}
      z-index: 3;
      background: ${t};
      border-radius: ${16/i}px;
      transition: transform .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .56s cubic-bezier(0.52, 0.16, 0.24, 1), border-radius .2s cubic-bezier(0.52, 0.16, 0.24, 1);
    `,this.switcher.appendChild(a),a.appendChild(yield r.captureShot()),this.shrinkToItem(o,a).then(()=>{"close"!==this.progressName&&(a.style.cssText=s,o.appendChild(a),this.scroll.snapTo(0,e))})})}restoreToItem(a,n,p){return (0,_index_6c99c76a_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){var e=n.offsetTop,t=n.offsetLeft,i=n.offsetWidth,s=n.offsetHeight,i=i/this.switcher.offsetWidth,r=a.color;if(this.switcher.appendChild(p),p.style.cssText=`
      ${itemImgCoverStyle}
      z-index: 5;
      height: ${s/i}px;
      background: ${r};
      border-radius: ${16/i}px;
      transform: translate3d(${t}px, ${e}px, 0px) scale(${i});
      transition: transform .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .2s cubic-bezier(0.52, 0.16, 0.24, 1), border-radius .6s cubic-bezier(0.52, 0.16, 0.24, 1);
    `,yield this.stretchToItem(p),"open"!==this.progressName){const o=Date.now();this.application.to(a.id,a.param).then(()=>{var e=Date.now()-o;(0,_index_4bf0daa3_js__WEBPACK_IMPORTED_MODULE_1__.s)(()=>{this.progressName="",this.close()},200<e?0:400-e)})}})}stretchToItem(t){return (0,_index_6c99c76a_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){return new Promise(e=>{(0,_index_4bf0daa3_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{"open"!==this.progressName&&(t.style.height=this.switcher.offsetHeight+"px",t.style.transform="translate3d(0px, 0px, 0px) scale(1)",t.style.borderRadius="0",this.snapWrapper.style.transition="transform .44s cubic-bezier(0.52, 0.16, 0.24, 1), opacity .2s cubic-bezier(0.52, 0.16, 0.24, 1)",this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(.9)",this.snapWrapper.style.opacity="0.5",(0,_index_4bf0daa3_js__WEBPACK_IMPORTED_MODULE_1__.s)(e,200))})})})}shrinkToItem(e,o){return (0,_index_6c99c76a_js__WEBPACK_IMPORTED_MODULE_0__._)(this,void 0,void 0,function*(){const t=e.offsetHeight,i=e.offsetTop,s=e.offsetLeft;const r=e.offsetWidth/this.switcher.offsetWidth;return new Promise(e=>{(0,_index_4bf0daa3_js__WEBPACK_IMPORTED_MODULE_1__.r)(()=>{"close"!==this.progressName&&(o.style.height=t/r+"px",o.style.transform=`translate3d(${s}px, ${i}px, 0px) scale(${r})`,(0,_index_4bf0daa3_js__WEBPACK_IMPORTED_MODULE_1__.s)(e,600))})})})}getActiveApplet(){var e=this.application.activityApplet;return null!=e&&e.slide?this.application.applets[e.slide.activeId]:e}blurBackgroundImage(){this.relativeViewport.style.filter="blur(20px)",this.absoluteViewport.style.filter="blur(20px)"}focusBackgroundImage(){this.relativeViewport.style.filter="none",this.absoluteViewport.style.filter="none"}delayDynamicImport(){Promise.all(/*! import() */[__webpack_require__.e("vendors-Lath_node_modules_html2canvas_dist_html2canvas_js"), __webpack_require__.e("Lath_app_index-18160a84_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./index-18160a84.js */ "../Lath/app/index-18160a84.js")).catch(e=>{console.warn(e)})}}

/***/ })

}]);
//# sourceMappingURL=Lath_app_index-7a0a074f_js.js.map