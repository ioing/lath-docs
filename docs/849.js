"use strict";(self.webpackChunklath_docs=self.webpackChunklath_docs||[]).push([[849],{849:(e,t,i)=>{i.r(t),i.d(t,{AppSwitcher:()=>l});var s=i(3047),n=i(5124);const r="\n  display: grid;\n  box-sizing: border-box;\n  position: fixed;\n  inset: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  padding: 20px 10px;\n  padding-top: calc(20px + constant(safe-area-inset-top));\n  padding-top: calc(20px + env(safe-area-inset-top));\n  scroll-padding-top: calc(20px + constant(safe-area-inset-top));\n  scroll-padding-top: calc(20px + env(safe-area-inset-top));\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n",o=`\n  ${r}\n  grid-template-columns: 50% 50%;\n  grid-template-rows: repeat(30, 40%);\n  row-gap: 15px;\n`,a=`\n  ${r}\n  grid-template-columns: repeat(3, 33.33%);\n  grid-template-rows: repeat(30, 50%);\n  row-gap: 15px;\n`,p="\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  transform-origin: top left;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  overflow: hidden;\n",c=`\n  position: fixed;\n  top: 0;\n  left: 0;\n  ${p}\n`;class l{constructor(e){this.progressName="";var{relativeViewport:t,absoluteViewport:i,fixedViewport:s}=e.segue;this.relativeViewport=t,this.absoluteViewport=i,this.fixedViewport=s,this.application=e,this.delayDynamicImport()}bindResize(){const e=()=>{this.close(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)};window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}open(){return(0,s._)(this,void 0,void 0,(function*(){"open"!==this.progressName&&(this.progressName="open",yield this.createAppSwitcher(),this.blurBackgroundImage(),this.switcher.style.opacity="1",this.bindResize(),(0,n.s)((()=>{"close"!==this.progressName&&(this.progressName="")}),400))}))}close(){"close"!==this.progressName&&(this.progressName="close",this.focusBackgroundImage(),this.switcher.style.opacity="0",(0,n.s)((()=>{"open"!==this.progressName&&(this.progressName="",this.switcher.parentElement===this.fixedViewport)&&this.fixedViewport.removeChild(this.switcher)}),400))}createAppSwitcher(){return(0,s._)(this,void 0,void 0,(function*(){this.switcher=document.createElement("applet-switcher"),this.switcher.style.cssText="\n  box-sizing: border-box;\n  position: fixed;\n  inset: 0;\n  z-index: 102;\n  width: 100%;\n  height: 100%;\n  background: rgb(70 70 70 / 50%);\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  transition: opacity .4s ease;\n",this.snapWrapper=document.createElement("applet-switcher-snap"),this.snapWrapper.style.cssText=800<this.switcher.offsetWidth?a:o,this.scroll=new n.S(this.snapWrapper);var e=this.application.applets,t=this.getActiveApplet();for(const o in e){const a=e[o];var i=a.color;if("applet"===a.rel&&!a.isModality&&!a.slide&&a.view){var s=document.createElement("applet-switcher-item");const e=document.createElement("div"),o=document.createElement("div");var r=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),d=(s.style.cssText="\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  scroll-snap-align: start;\n  cursor: pointer;\n  margin: 0 10px;\n",a.config.poster?`\n          background-image: url(${a.config.poster});\n          background-size: cover;\n        `:"");if(e.style.cssText=`\n          \n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 30%);\n\n          background: ${i};\n          ${d}\n        `,o.style.cssText=`\n          ${p}\n          background: ${i};\n        `,c.style.cssText="\n  display: flex;\n  margin: 0 auto;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n",r.style.cssText=a.config.icon?`\n          width: 16px;\n          height: 16px;\n          background-image: url(${a.config.icon});\n        `:"display: none;",l.style.cssText='\n  margin-top: 4px;\n  font-size: 16px;\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica","Arial",sans-serif;\n',l.innerText=a.config.title||a.id,c.appendChild(r),c.appendChild(l),e.appendChild(o),s.appendChild(e),s.appendChild(c),this.snapWrapper.appendChild(s),this.switcher.appendChild(this.snapWrapper),this.fixedViewport.appendChild(this.switcher),a.id===(null==t?void 0:t.id))yield this.setActivityItem(a,e,o);else{const t=()=>{(0,n.a)((()=>{this.setNormalItem(a,o)}))},i=new IntersectionObserver((function(s){s[0].intersectionRatio<0||(i.unobserve(e),t())}));i.observe(e)}this.bindItemClick(a,e,o)}}this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(.9)",this.snapWrapper.style.opacity=".5",(0,n.s)((()=>{"close"!==this.progressName&&(this.snapWrapper.style.transition="transform .44s cubic-bezier(0.52, 0.16, 0.24, 1), opacity .36s cubic-bezier(0.52, 0.16, 0.24, 1)",this.snapWrapper.style.transform="translate3d(0, 0, 0) scale(1)",this.snapWrapper.style.opacity="1")}),100)}))}bindItemClick(e,t,i){i.addEventListener("click",(()=>{"close"!==this.progressName&&(this.progressName="close",this.restoreToItem(e,t,i))}))}setNormalItem(e,t){return(0,s._)(this,void 0,void 0,(function*(){e.captureShot(12e4<=Date.now()-e.visitTime).then((e=>{t.appendChild(e),e.style.opacity=".1",(0,n.r)((()=>{e.style.transition="opacity .3s cubic-bezier(0.52, 0.16, 0.24, 1)",e.style.opacity="1"}))})).catch((e=>{console.warn(e)}))}))}setActivityItem(e,t,r){return(0,s._)(this,void 0,void 0,(function*(){var s=e.color,o=t.offsetWidth/this.switcher.offsetWidth;const a=r.style.cssText;var p=t.offsetHeight;const l=t.offsetTop;var d=t.offsetLeft,h=new(h=(yield i.e(745).then(i.bind(i,6745))).Animate)(r);r.style.cssText=`\n      ${c}\n      z-index: 3;\n      background: ${s};\n      border-radius: ${16/o}px;\n      transition: height .46s cubic-bezier(0.52, 0.16, 0.24, 1), transform .36s cubic-bezier(0.32, 0.08, 0.24, 1), border-radius .2s cubic-bezier(0.52, 0.16, 0.24, 1)\n    `,this.switcher.appendChild(r),r.appendChild(yield e.captureShot()),"close"!==this.progressName&&h.height(p/o).to(d,l,0).scale(o).end((()=>{"close"!==this.progressName&&(r.style.cssText=a,t.appendChild(r),this.snapWrapper.style.overflowY="scroll",this.snapWrapper.style.scrollSnapType="y mandatory",this.snapWrapper.offsetHeight<=l)&&(0,n.a)((()=>{this.scroll.snapTo(0,l)}))}))}))}restoreToItem(e,t,r){return(0,s._)(this,void 0,void 0,(function*(){var s=t.offsetTop,o=t.offsetLeft,a=t.offsetWidth,p=t.offsetHeight,l=(a/=this.switcher.offsetWidth,e.color),d=new(h=(yield i.e(745).then(i.bind(i,6745))).Animate)(r),h=new h(this.snapWrapper);if(this.switcher.appendChild(r),r.style.cssText=`\n      ${c}\n      z-index: 5;\n      height: ${p/a}px;\n      background: ${l};\n      border-radius: ${16/a}px;\n      transform: translate3d(${o}px, ${s}px, 0px) scale(${a});\n      transition: transform .4s cubic-bezier(0.32, 0.08, 0.24, 1), height .1s cubic-bezier(0.52, 0.16, 0.24, 1), border-radius .8s cubic-bezier(0.52, 0.16, 0.24, 1);\n    `,this.snapWrapper.style.transition="transform .44s cubic-bezier(0.52, 0.16, 0.24, 1), opacity .2s cubic-bezier(0.52, 0.16, 0.24, 1)","open"!==this.progressName){yield Promise.all([h.to(0,0,0).scale(.9).opacity(.5).end(),d.to(0,0,0).scale(1).height(this.switcher.offsetHeight).borderRadius("0px").end()]);const t=Date.now();this.application.to(e.id,e.param,void 0,void 0,!0).then((()=>{var e=Date.now()-t;(0,n.s)((()=>{this.progressName="",this.close()}),200<e?0:400-e)}))}}))}getActiveApplet(){var e=this.application.activityApplet;return null!=e&&e.slide?e.subApplet:e}blurBackgroundImage(){this.relativeViewport.style.filter="blur(20px)",this.absoluteViewport.style.filter="blur(20px)"}focusBackgroundImage(){this.relativeViewport.style.filter="none",this.absoluteViewport.style.filter="none"}delayDynamicImport(){Promise.all([i.e(377),i.e(131)]).then(i.bind(i,1131)).catch((e=>{console.warn(e)})),i.e(745).then(i.bind(i,6745)).catch((e=>{console.warn(e)}))}}}}]);