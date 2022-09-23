"use strict";(self.webpackChunklath_docs=self.webpackChunklath_docs||[]).push([[13],{13:(e,t,i)=>{i.r(t),i.d(t,{AppSwitcher:()=>l});var s=i(124),n=i(266);const r="\n  display: grid;\n  box-sizing: border-box;\n  position: fixed;\n  inset: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  overflow-y: scroll !important;\n  scroll-padding: 12px;\n  scroll-behavior: smooth;\n  scroll-snap-type: y mandatory;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n",o=`\n  ${r}\n  grid-template-columns: 50% 50%;\n  grid-template-rows: repeat(2, 40%);\n  row-gap: 15px;\n`,a=`\n  ${r}\n  grid-template-columns: repeat(3, 33.33%);\n  grid-template-rows: repeat(2, 50%);\n  row-gap: 15px;\n`,p="\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  transform-origin: top left;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  overflow: hidden;\n",c=`\n  position: fixed;\n  top: 0;\n  left: 0;\n  ${p}\n`;class l{constructor(e){this.progressName="";var{relativeViewport:t,absoluteViewport:i,fixedViewport:s}=e.segue;this.relativeViewport=t,this.absoluteViewport=i,this.fixedViewport=s,this.application=e,this.delayDynamicImport()}bindResize(){const e=()=>{this.close(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)};window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}open(){return(0,s._)(this,void 0,void 0,(function*(){"open"!==this.progressName&&(this.progressName="open",yield this.createAppSwitcher(),this.blurBackgroundImage(),this.switcher.style.opacity="1",this.bindResize(),(0,n.s)((()=>{"close"!==this.progressName&&(this.progressName="")}),400))}))}close(){"close"!==this.progressName&&(this.progressName="close",this.focusBackgroundImage(),this.switcher.style.opacity="0",(0,n.s)((()=>{"open"!==this.progressName&&(this.progressName="",this.switcher.parentElement===this.fixedViewport&&this.fixedViewport.removeChild(this.switcher))}),400))}createAppSwitcher(){return(0,s._)(this,void 0,void 0,(function*(){this.switcher=document.createElement("applet-switcher"),this.switcher.style.cssText="\n  box-sizing: border-box;\n  position: fixed;\n  inset: 0;\n  z-index: 102;\n  width: 100%;\n  height: 100%;\n  padding-top: constant(safe-area-inset-top);\n  padding-top: env(safe-area-inset-top);\n  background: rgb(70 70 70 / 50%);\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  transition: opacity .4s ease;\n",this.snapWrapper=document.createElement("applet-switcher-snap"),this.snapWrapper.style.cssText=800<this.switcher.offsetWidth?a:o,this.scroll=new n.S(this.snapWrapper);var e=this.application.applets,t=this.getActiveApplet();for(const n in e){var i,s,r,c,l,h,d,f=e[n],m=f.color;"applet"!==f.rel||f.isModality||f.view&&(i=document.createElement("applet-switcher-item"),s=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),h=document.createElement("div"),i.style.cssText="\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  scroll-snap-align: start;\n  cursor: pointer;\n  margin: 0 10px;\n",d=f.config.poster?`\n          background-image: url(${f.config.poster});\n          background-size: cover;\n        `:"",s.style.cssText=`\n          \n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 30%);\n\n          background: ${m};\n          ${d}\n        `,r.style.cssText=`\n          ${p}\n          background: ${m};\n        `,l.style.cssText="\n  display: flex;\n  margin: 0 auto;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n",c.style.cssText=f.config.icon?`\n          width: 16px;\n          height: 16px;\n          background-image: url(${f.config.icon});\n        `:"display: none;",h.style.cssText='\n  margin-top: 4px;\n  font-size: 16px;\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica","Arial",sans-serif;\n',h.innerText=f.config.title||f.id,l.appendChild(c),l.appendChild(h),s.appendChild(r),i.appendChild(s),i.appendChild(l),this.snapWrapper.appendChild(i),this.switcher.appendChild(this.snapWrapper),this.fixedViewport.appendChild(this.switcher),f.id===(null==t?void 0:t.id)?yield this.setActivityItem(f,s,r):this.setNormalItem(f,r),this.bindItemClick(f,s,r))}this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(.9)",this.snapWrapper.style.opacity=".5",(0,n.s)((()=>{"close"!==this.progressName&&(this.snapWrapper.style.transition="transform .44s cubic-bezier(0.52, 0.16, 0.24, 1), opacity .36s cubic-bezier(0.52, 0.16, 0.24, 1)",this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(1)",this.snapWrapper.style.opacity="1")}),100)}))}bindItemClick(e,t,i){i.addEventListener("click",(()=>{"close"!==this.progressName&&(this.progressName="close",this.restoreToItem(e,t,i))}))}setNormalItem(e,t){return(0,s._)(this,void 0,void 0,(function*(){e.captureShot(Date.now()-e.visitTime<=12e4).then((e=>{t.appendChild(e),e.style.opacity=".1",(0,n.r)((()=>{e.style.transition="opacity .2s cubic-bezier(0.52, 0.16, 0.24, 1)",e.style.opacity="1"}))})).catch((e=>{console.warn(e)}))}))}setActivityItem(e,t,i){return(0,s._)(this,void 0,void 0,(function*(){const s=t.offsetTop;var n=e.color,r=t.offsetWidth/this.switcher.offsetWidth;const o=i.style.cssText;i.style.cssText=`\n      ${c}\n      z-index: 3;\n      background: ${n};\n      border-radius: ${16/r}px;\n      transition: transform .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .56s cubic-bezier(0.52, 0.16, 0.24, 1), border-radius .2s cubic-bezier(0.52, 0.16, 0.24, 1);\n    `,this.switcher.appendChild(i),i.appendChild(yield e.captureShot()),this.shrinkToItem(t,i).then((()=>{"close"!==this.progressName&&(i.style.cssText=o,t.appendChild(i),this.snapWrapper.offsetHeight<=s&&this.scroll.snapTo(0,s))}))}))}restoreToItem(e,t,i){return(0,s._)(this,void 0,void 0,(function*(){var s=t.offsetTop,r=t.offsetLeft,o=t.offsetWidth,a=t.offsetHeight,p=(o/=this.switcher.offsetWidth,e.color);if(this.switcher.appendChild(i),i.style.cssText=`\n      ${c}\n      z-index: 5;\n      height: ${a/o}px;\n      background: ${p};\n      border-radius: ${16/o}px;\n      transform: translate3d(${r}px, ${s}px, 0px) scale(${o});\n      transition: transform .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .2s cubic-bezier(0.52, 0.16, 0.24, 1), border-radius .6s cubic-bezier(0.52, 0.16, 0.24, 1);\n    `,yield this.stretchToItem(i),"open"!==this.progressName){const t=Date.now();this.application.to(e.id,e.param).then((()=>{var e=Date.now()-t;(0,n.s)((()=>{this.progressName="",this.close()}),200<e?0:400-e)}))}}))}stretchToItem(e){return(0,s._)(this,void 0,void 0,(function*(){return new Promise((t=>{(0,n.r)((()=>{"open"!==this.progressName&&(e.style.height=this.switcher.offsetHeight+"px",e.style.transform="translate3d(0px, 0px, 0px) scale(1)",e.style.borderRadius="0",this.snapWrapper.style.transition="transform .44s cubic-bezier(0.52, 0.16, 0.24, 1), opacity .2s cubic-bezier(0.52, 0.16, 0.24, 1)",this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(.9)",this.snapWrapper.style.opacity="0.5",(0,n.s)(t,200))}))}))}))}shrinkToItem(e,t){return(0,s._)(this,void 0,void 0,(function*(){const i=e.offsetHeight,s=e.offsetTop,r=e.offsetLeft,o=e.offsetWidth/this.switcher.offsetWidth;return new Promise((e=>{(0,n.r)((()=>{"close"!==this.progressName&&(t.style.height=i/o+"px",t.style.transform=`translate3d(${r}px, ${s}px, 0px) scale(${o})`,(0,n.s)(e,600))}))}))}))}getActiveApplet(){var e=this.application.activityApplet;return null!=e&&e.slide?this.application.applets[e.slide.activeId]:e}blurBackgroundImage(){this.relativeViewport.style.filter="blur(20px)",this.absoluteViewport.style.filter="blur(20px)"}focusBackgroundImage(){this.relativeViewport.style.filter="none",this.absoluteViewport.style.filter="none"}delayDynamicImport(){Promise.all([i.e(730),i.e(930)]).then(i.bind(i,930)).catch((e=>{console.warn(e)}))}}}}]);