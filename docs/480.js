"use strict";(self.webpackChunklath_docs=self.webpackChunklath_docs||[]).push([[480],{3480:(e,t,i)=>{i.r(t),i.d(t,{AppSwitcher:()=>u});var n=i(2108),s=i(9995);const r="\n  display: grid;\n  box-sizing: border-box;\n  position: fixed;\n  inset: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  padding: 20px 10px;\n  padding-top: calc(20px + constant(safe-area-inset-top));\n  padding-top: calc(20px + env(safe-area-inset-top));\n  scroll-padding-top: calc(20px + constant(safe-area-inset-top));\n  scroll-padding-top: calc(20px + env(safe-area-inset-top));\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n",a=`\n  ${r}\n  grid-template-columns: 50% 50%;\n  grid-template-rows: repeat(30, 40%);\n  row-gap: 15px;\n`,o=`\n  ${r}\n  grid-template-columns: repeat(3, 33.33%);\n  grid-template-rows: repeat(30, 50%);\n  row-gap: 15px;\n`,p="\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  transform-origin: top left;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  overflow: hidden;\n",l=`\n  position: fixed;\n  top: 0;\n  left: 0;\n  ${p}\n`,d="\n  position: absolute;\n  height: 2px;\n  width: 60%;\n  background: #fff;\n  border-radius: 1px;\n",c=`\n  ${d}\n  transform: rotate(-45deg);\n`,h=`\n  ${d}\n  transform: rotate(45deg);\n`,f="cubic-bezier(0.52, 0.16, 0.24, 1)",m="cubic-bezier(0.32, 0.08, 0.24, 1)";class u{constructor(e){this.progressName="",this.deleteMap={},this.options={readonly:!1};var{relativeViewport:t,absoluteViewport:i,fixedViewport:n}=e.segue;this.relativeViewport=t,this.absoluteViewport=i,this.fixedViewport=n,this.application=e,this.delayDynamicImport()}bindResize(){const e=()=>{this.close(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)};window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}open(e){return(0,n._)(this,void 0,void 0,(function*(){"open"!==this.progressName&&(this.progressName="open",e&&(this.options=e),yield(0,s.l)(),yield this.createAppSwitcher(),this.blurBackgroundImage(),this.switcher.style.opacity="1",this.bindResize(),(0,s.s)((()=>{"close"!==this.progressName&&(this.progressName="")}),400))}))}close(){"close"!==this.progressName&&(this.progressName="close",this.focusBackgroundImage(),this.switcher.style.opacity="0",(0,s.s)((()=>{"open"!==this.progressName&&(this.progressName="",this.switcher.parentElement===this.fixedViewport)&&this.fixedViewport.removeChild(this.switcher)}),400))}createAppSwitcher(){var e;return(0,n._)(this,void 0,void 0,(function*(){this.switcher=document.createElement("applet-switcher"),this.switcher.style.cssText="\n  box-sizing: border-box;\n  position: fixed;\n  inset: 0;\n  z-index: 102;\n  width: 100%;\n  height: 100%;\n  background: rgb(70 70 70 / 50%);\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  transition: opacity .4s ease;\n",this.snapWrapper=document.createElement("applet-switcher-snap"),this.snapWrapper.style.cssText=800<this.switcher.offsetWidth?o:a,this.scroll=new s.S(this.snapWrapper);var t=this.application.applets,i=this.getActiveApplet(),n=null==(e=null==i?void 0:i.parentApplet)?void 0:e.allSubAppletIds;for(const e in t){const a=t[e];var r=a.color,l=null==n?void 0:n.includes(e);if(this.deleteMap[a.id]!==a.createTime&&"applet"===a.rel&&!a.isModality&&!a.slide&&a.view){const e=document.createElement("applet-switcher-item"),t=document.createElement("div"),n=document.createElement("div");var d=document.createElement("div"),f=document.createElement("div"),m=document.createElement("div"),u=(e.style.cssText="\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  scroll-snap-align: start;\n  cursor: pointer;\n  margin: 0 10px;\n  transition: transform .4s ease;\n",a.config.poster?`\n          background-image: url(${a.config.poster});\n          background-size: cover;\n        `:"");if(t.style.cssText=`\n          \n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 30%);\n\n          background: ${r};\n          ${u}\n        `,n.style.cssText=`\n          ${p}\n          background: ${r};\n        `,f.style.cssText="\n  display: flex;\n  margin: 0 auto;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n",d.style.cssText=a.config.icon?`\n          width: 16px;\n          height: 16px;\n          background-image: url(${a.config.icon});\n        `:"display: none;",m.style.cssText='\n  margin-top: 4px;\n  font-size: 16px;\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica","Arial",sans-serif;\n',m.innerText=a.config.title||a.id,f.appendChild(d),f.appendChild(m),t.appendChild(n),e.appendChild(t),e.appendChild(f),this.snapWrapper.appendChild(e),this.switcher.appendChild(this.snapWrapper),this.fixedViewport.appendChild(this.switcher),a.id===(null==i?void 0:i.id))yield this.setActivityItem(a,t,n);else{this.options.readonly||l||!0===a.config.background||a.isPresetAppletsView||(u=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),u.style.cssText="\n  display: grid;\n  place-items: center;\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  width: 22px;\n  height: 22px;\n  border-radius: 11px;\n  background-color: #666;\n  opacity: .7\n",r.style.cssText=c,d.style.cssText=h,u.appendChild(r),u.appendChild(d),t.appendChild(u),u.addEventListener("click",(()=>{var t;if(a.parentApplet){for(const e of a.parentApplet.allSubAppletIds)null!=(t=this.application.applets[e])&&t.destroy();a.parentApplet.destroy()}else a.destroy();this.deleteItem(e),this.deleteMap[a.id]=a.createTime}),!1));const i=()=>{(0,s.r)((()=>{this.setNormalItem(a,n)}))},o=new IntersectionObserver((function(e){e[0].intersectionRatio<0||(o.unobserve(t),i())}));o.observe(t)}this.bindItemClick(a,t,n)}}}))}deleteItem(e){var t=[],i=Array.from(this.snapWrapper.children),n=i.indexOf(e),s=i.slice(n).filter((e=>!e.getAttribute("applet-to-delete")));for(let e=1;e<=s.length-1;e++){var r=s[e-1],a=s[e];r=r.getBoundingClientRect(),t.push({x:r.x-a.offsetLeft,y:r.y-a.offsetTop})}e.setAttribute("applet-to-delete","true"),e.style.transform="translate3d(-100vw, 0, 0)";for(let e=1;e<=s.length-1;e++){var o=s[e],p=t[e-1];o.style.transform=`translate3d(${p.x}px, ${p.y}px, 0)`}}bindItemClick(e,t,i){i.addEventListener("click",(()=>{"close"!==this.progressName&&(this.progressName="close",this.restoreToItem(e,t,i))}))}setNormalItem(e,t){return(0,n._)(this,void 0,void 0,(function*(){e.captureShot(12e4<=Date.now()-e.visitTime).then((e=>(0,n._)(this,void 0,void 0,(function*(){t.appendChild(e),yield e.animate([{opacity:0},{opacity:.1}],{duration:0,easing:f,fill:"forwards"}).finished,e.animate([{opacity:.1},{opacity:1}],{duration:300,easing:f,fill:"forwards"}).play()})))).catch((e=>{console.warn(e)}))}))}setActivityItem(e,t,i){return(0,n._)(this,void 0,void 0,(function*(){var r=e.color;const a=t.offsetWidth/this.switcher.offsetWidth,o=i.style.cssText,p=t.offsetHeight,d=t.offsetTop,c=t.offsetLeft;i.style.cssText=`\n      ${l}\n      z-index: 3;\n      background: ${r};\n      border-radius: ${16/a}px;\n    `,this.switcher.appendChild(i),i.appendChild(yield e.captureShot()),"close"!==this.progressName&&(yield i.animate([{opacity:0},{opacity:1}],{duration:100,easing:f,fill:"forwards"}).finished,this.snapWrapper.animate({transform:"translate3d(0, 0, 0) scale(.9)",opacity:.5},{duration:0,fill:"forwards"}).finished.then((()=>(0,n._)(this,void 0,void 0,(function*(){yield Promise.all([i.animate({height:p/a+"px"},{duration:460,easing:f,fill:"forwards"}).finished,i.animate({transform:`translate3d(${c}px, ${d}px, 0) scale(${a})`},{duration:360,easing:m,fill:"forwards"}).finished,this.snapWrapper.animate({transform:"translate3d(0, 0, 0) scale(1)"},{duration:440,easing:f,fill:"forwards"}).finished,this.snapWrapper.animate({opacity:1},{duration:360,easing:f,fill:"forwards"}).finished]),(0,s.c)(i),(0,s.c)(t),"close"!==this.progressName&&(i.style.cssText=o,t.appendChild(i),this.snapWrapper.style.overflowY="scroll",this.snapWrapper.style.scrollSnapType="y mandatory",this.snapWrapper.offsetHeight<=d)&&(0,s.r)((()=>{this.scroll.snapTo(0,d)}))})))))}))}restoreToItem(e,t,i){return(0,n._)(this,void 0,void 0,(function*(){var n=t.offsetTop,r=t.offsetLeft,a=t.offsetWidth,o=t.offsetHeight,p=(a/=this.switcher.offsetWidth,e.color);if(this.switcher.appendChild(i),i.style.cssText=`\n      ${l}\n      z-index: 5;\n      height: ${o/a}px;\n      background: ${p};\n      border-radius: ${16/a}px;\n      transform: translate3d(${r}px, ${n}px, 0px) scale(${a});\n    `,"open"!==this.progressName){yield Promise.all([i.animate({transform:"translate3d(0, 0, 0) scale(1)"},{duration:400,easing:m,fill:"forwards"}).finished,i.animate({height:this.switcher.offsetHeight+"px"},{duration:100,easing:f,fill:"forwards"}).finished,i.animate({borderRadius:"0px"},{duration:800,easing:f,fill:"forwards"}).finished,this.snapWrapper.animate({transform:"translate3d(0, 0, 0) scale(.9)"},{duration:440,easing:f,fill:"forwards"}).finished,this.snapWrapper.animate({opacity:.5},{duration:200,easing:f,fill:"forwards"}).finished]);const t=Date.now();this.application.to(e.id,e.param,void 0,void 0,!0).then((()=>{var e=Date.now()-t;(0,s.s)((()=>{this.progressName="",this.close()}),200<e?0:400-e)}))}}))}getActiveApplet(){var e=this.application.activityApplet;return null!=e&&e.slide?e.subApplet:e}blurBackgroundImage(){this.relativeViewport.animate([{filter:"blur(0px)"},{filter:"blur(20px)"}],{duration:0,fill:"forwards"}).play(),this.absoluteViewport.animate([{filter:"blur(0px)"},{filter:"blur(20px)"}],{duration:0,fill:"forwards"}).play()}focusBackgroundImage(){(0,s.c)(this.relativeViewport),(0,s.c)(this.absoluteViewport)}delayDynamicImport(){Promise.all([i.e(377),i.e(574)]).then(i.bind(i,6574)).catch((e=>{console.warn(e)}))}}}}]);