"use strict";(self.webpackChunklath_docs=self.webpackChunklath_docs||[]).push([[982],{982:(e,t,i)=>{i.r(t),i.d(t,{AppSwitcher:()=>f});var n=i(8943),s=i(3314);const r="\n  display: grid;\n  box-sizing: border-box;\n  position: fixed;\n  inset: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  padding: 20px 10px;\n  padding-top: calc(20px + constant(safe-area-inset-top));\n  padding-top: calc(20px + env(safe-area-inset-top));\n  scroll-padding-top: calc(20px + constant(safe-area-inset-top));\n  scroll-padding-top: calc(20px + env(safe-area-inset-top));\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n",o=`\n  ${r}\n  grid-template-columns: 50% 50%;\n  grid-template-rows: repeat(30, 40%);\n  row-gap: 15px;\n`,a=`\n  ${r}\n  grid-template-columns: repeat(3, 33.33%);\n  grid-template-rows: repeat(30, 50%);\n  row-gap: 15px;\n`,p="\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  transform-origin: top left;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  overflow: hidden;\n",l=`\n  position: fixed;\n  top: 0;\n  left: 0;\n  ${p}\n`,c="\n  position: absolute;\n  height: 2px;\n  width: 60%;\n  background: #fff;\n  border-radius: 1px;\n",d=`\n  ${c}\n  transform: rotate(-45deg);\n`,h=`\n  ${c}\n  transform: rotate(45deg);\n`;class f{constructor(e){this.progressName="",this.deleteMap={},this.options={readonly:!1};var{relativeViewport:t,absoluteViewport:i,fixedViewport:n}=e.segue;this.relativeViewport=t,this.absoluteViewport=i,this.fixedViewport=n,this.application=e,this.delayDynamicImport()}bindResize(){const e=()=>{this.close(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)};window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}open(e){return(0,n._)(this,void 0,void 0,(function*(){"open"!==this.progressName&&(this.progressName="open",e&&(this.options=e),yield this.createAppSwitcher(),this.blurBackgroundImage(),this.switcher.style.opacity="1",this.bindResize(),(0,s.s)((()=>{"close"!==this.progressName&&(this.progressName="")}),400))}))}close(){"close"!==this.progressName&&(this.progressName="close",this.focusBackgroundImage(),this.switcher.style.opacity="0",(0,s.s)((()=>{"open"!==this.progressName&&(this.progressName="",this.switcher.parentElement===this.fixedViewport)&&this.fixedViewport.removeChild(this.switcher)}),400))}createAppSwitcher(){var e;return(0,n._)(this,void 0,void 0,(function*(){this.switcher=document.createElement("applet-switcher"),this.switcher.style.cssText="\n  box-sizing: border-box;\n  position: fixed;\n  inset: 0;\n  z-index: 102;\n  width: 100%;\n  height: 100%;\n  background: rgb(70 70 70 / 50%);\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  transition: opacity .4s ease;\n",this.snapWrapper=document.createElement("applet-switcher-snap"),this.snapWrapper.style.cssText=800<this.switcher.offsetWidth?a:o,this.scroll=new s.S(this.snapWrapper);var t=this.application.applets,i=this.getActiveApplet(),n=null==(e=null==i?void 0:i.parentApplet)?void 0:e.allSubAppletIds;for(const e in t){const o=t[e];var r=o.color,l=null==n?void 0:n.includes(e);if(this.deleteMap[o.id]!==o.createTime&&"applet"===o.rel&&!o.isModality&&!o.slide&&o.view){const e=document.createElement("applet-switcher-item"),t=document.createElement("div"),n=document.createElement("div");var c=document.createElement("div"),f=document.createElement("div"),u=document.createElement("div"),m=(e.style.cssText="\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  scroll-snap-align: start;\n  cursor: pointer;\n  margin: 0 10px;\n  transition: filter .3s ease;\n",o.config.poster?`\n          background-image: url(${o.config.poster});\n          background-size: cover;\n        `:"");if(t.style.cssText=`\n          \n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 30%);\n\n          background: ${r};\n          ${m}\n        `,n.style.cssText=`\n          ${p}\n          background: ${r};\n        `,f.style.cssText="\n  display: flex;\n  margin: 0 auto;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n",c.style.cssText=o.config.icon?`\n          width: 16px;\n          height: 16px;\n          background-image: url(${o.config.icon});\n        `:"display: none;",u.style.cssText='\n  margin-top: 4px;\n  font-size: 16px;\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica","Arial",sans-serif;\n',u.innerText=o.config.title||o.id,f.appendChild(c),f.appendChild(u),t.appendChild(n),e.appendChild(t),e.appendChild(f),this.snapWrapper.appendChild(e),this.switcher.appendChild(this.snapWrapper),this.fixedViewport.appendChild(this.switcher),o.id===(null==i?void 0:i.id))yield this.setActivityItem(o,t,n);else{this.options.readonly||l||!0===o.config.background||o.isPresetAppletsView||(m=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),m.style.cssText="\n  display: grid;\n  place-items: center;\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  width: 22px;\n  height: 22px;\n  border-radius: 11px;\n  background-color: #666;\n  opacity: .7\n",r.style.cssText=d,c.style.cssText=h,m.appendChild(r),m.appendChild(c),t.appendChild(m),m.addEventListener("click",(()=>{var t;if(o.parentApplet){for(const e of o.parentApplet.allSubAppletIds)null!=(t=this.application.applets[e])&&t.destroy();o.parentApplet.destroy()}else o.destroy();e.style.filter="blur(90px)",(0,s.s)((()=>{e.style.display="none"}),300),this.deleteMap[o.id]=o.createTime}),!1));const i=()=>{(0,s.a)((()=>{this.setNormalItem(o,n)}))},a=new IntersectionObserver((function(e){e[0].intersectionRatio<0||(a.unobserve(t),i())}));a.observe(t)}this.bindItemClick(o,t,n)}}}))}bindItemClick(e,t,i){i.addEventListener("click",(()=>{"close"!==this.progressName&&(this.progressName="close",this.restoreToItem(e,t,i))}))}setNormalItem(e,t){return(0,n._)(this,void 0,void 0,(function*(){e.captureShot(12e4<=Date.now()-e.visitTime).then((e=>{t.appendChild(e),e.style.opacity=".1",(0,s.r)((()=>{e.style.transition="opacity .3s cubic-bezier(0.52, 0.16, 0.24, 1)",e.style.opacity="1"}))})).catch((e=>{console.warn(e)}))}))}setActivityItem(e,t,r){return(0,n._)(this,void 0,void 0,(function*(){var o=e.color;const a=t.offsetWidth/this.switcher.offsetWidth,p=r.style.cssText,c=t.offsetHeight,d=t.offsetTop,h=t.offsetLeft;var f=(yield i.e(941).then(i.bind(i,6941))).Animate;const u=new f(r),m=new f(this.snapWrapper);r.style.cssText=`\n      ${l}\n      z-index: 3;\n      background: ${o};\n      border-radius: ${16/a}px;\n      transition: height .46s cubic-bezier(0.52, 0.16, 0.24, 1), transform .36s cubic-bezier(0.32, 0.08, 0.24, 1), border-radius .2s cubic-bezier(0.52, 0.16, 0.24, 1)\n    `,this.switcher.appendChild(r),r.appendChild(yield e.captureShot()),"close"!==this.progressName&&m.duration(0).to(0,0,0).scale(.9).opacity(.5).end().then((()=>(0,n._)(this,void 0,void 0,(function*(){yield Promise.all([u.height(c/a).to(h,d,0).scale(a).end(),m.to(0,0,0).scale(1).opacity(1).style("transition","transform .44s cubic-bezier(0.52, 0.16, 0.24, 1), opacity .36s cubic-bezier(0.52, 0.16, 0.24, 1)").end()]),"close"!==this.progressName&&(r.style.cssText=p,t.appendChild(r),this.snapWrapper.style.overflowY="scroll",this.snapWrapper.style.scrollSnapType="y mandatory",this.snapWrapper.offsetHeight<=d)&&(0,s.a)((()=>{this.scroll.snapTo(0,d)}))}))))}))}restoreToItem(e,t,r){return(0,n._)(this,void 0,void 0,(function*(){var n=t.offsetTop,o=t.offsetLeft,a=t.offsetWidth,p=t.offsetHeight,c=(a/=this.switcher.offsetWidth,e.color),d=new(h=(yield i.e(941).then(i.bind(i,6941))).Animate)(r),h=new h(this.snapWrapper);if(this.switcher.appendChild(r),r.style.cssText=`\n      ${l}\n      z-index: 5;\n      height: ${p/a}px;\n      background: ${c};\n      border-radius: ${16/a}px;\n      transform: translate3d(${o}px, ${n}px, 0px) scale(${a});\n      transition: transform .4s cubic-bezier(0.32, 0.08, 0.24, 1), height .1s cubic-bezier(0.52, 0.16, 0.24, 1), border-radius .8s cubic-bezier(0.52, 0.16, 0.24, 1);\n    `,this.snapWrapper.style.transition="transform .44s cubic-bezier(0.52, 0.16, 0.24, 1), opacity .2s cubic-bezier(0.52, 0.16, 0.24, 1)","open"!==this.progressName){yield Promise.all([h.to(0,0,0).scale(.9).opacity(.5).end(),d.to(0,0,0).scale(1).height(this.switcher.offsetHeight).borderRadius("0px").end()]);const t=Date.now();this.application.to(e.id,e.param,void 0,void 0,!0).then((()=>{var e=Date.now()-t;(0,s.s)((()=>{this.progressName="",this.close()}),200<e?0:400-e)}))}}))}getActiveApplet(){var e=this.application.activityApplet;return null!=e&&e.slide?e.subApplet:e}blurBackgroundImage(){this.relativeViewport.style.filter="blur(20px)",this.absoluteViewport.style.filter="blur(20px)"}focusBackgroundImage(){this.relativeViewport.style.filter="none",this.absoluteViewport.style.filter="none"}delayDynamicImport(){Promise.all([i.e(377),i.e(870)]).then(i.bind(i,2870)).catch((e=>{console.warn(e)})),i.e(941).then(i.bind(i,6941)).catch((e=>{console.warn(e)}))}}}}]);