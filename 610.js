"use strict";(self.webpackChunklath_docs=self.webpackChunklath_docs||[]).push([[610],{1780:(e,i,a)=>{a.d(i,{E:()=>t});var t={ease:"ease","ease-in":"ease-in","ease-out":"ease-out","ease-in-out":"ease-in-out","ease-snap":"cubic-bezier(0, 1, .5, 1)",linear:"cubic-bezier(0.250, 0.250, 0.750, 0.750)","ease-in-quad":"cubic-bezier(0.550, 0.085, 0.680, 0.530)","ease-in-cubic":"cubic-bezier(0.550, 0.055, 0.675, 0.190)","ease-in-quart":"cubic-bezier(0.895, 0.030, 0.685, 0.220)","ease-in-quint":"cubic-bezier(0.755, 0.050, 0.855, 0.060)","ease-in-sine":"cubic-bezier(0.470, 0.000, 0.745, 0.715)","ease-in-expo":"cubic-bezier(0.950, 0.050, 0.795, 0.035)","ease-in-circ":"cubic-bezier(0.600, 0.040, 0.980, 0.335)","ease-in-back":"cubic-bezier(0.600, -0.280, 0.735, 0.045)","ease-out-quad":"cubic-bezier(0.250, 0.460, 0.450, 0.940)","ease-out-cubic":"cubic-bezier(0.215, 0.610, 0.355, 1.000)","ease-out-quart":"cubic-bezier(0.165, 0.840, 0.440, 1.000)","ease-out-quint":"cubic-bezier(0.230, 1.000, 0.320, 1.000)","ease-out-sine":"cubic-bezier(0.390, 0.575, 0.565, 1.000)","ease-out-expo":"cubic-bezier(0.190, 1.000, 0.220, 1.000)","ease-out-circ":"cubic-bezier(0.075, 0.820, 0.165, 1.000)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1.275)","ease-in-out-quad":"cubic-bezier(0.455, 0.030, 0.515, 0.955)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1.000)","ease-in-out-quart":"cubic-bezier(0.770, 0.000, 0.175, 1.000)","ease-in-out-quint":"cubic-bezier(0.860, 0.000, 0.070, 1.000)","ease-in-out-sine":"cubic-bezier(0.445, 0.050, 0.550, 0.950)","ease-in-out-expo":"cubic-bezier(1.000, 0.000, 0.000, 1.000)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.150, 0.860)","ease-in-out-back":"cubic-bezier(0.680, -0.550, 0.265, 1.550)"}},9610:(e,i,a)=>{a.r(i),a.d(i,{default:()=>u});var t=a(4447),n=a(1780),u=e=>(0,t._)(void 0,void 0,void 0,(function*(){var i=e.applets[e.reverse?1:0],a=i.modality,t="string"==typeof(t=(null==(t=i.config.paperOptions)?void 0:t.clipTop)||"0px")?t:t+"px",u=((null==(o=null==(o=null==(o=e.touches)?void 0:o.target)?void 0:o.getBoundingClientRect())?void 0:o.x)||0)+"px",c=`calc(${((null==o?void 0:o.y)||0)+"px"} - ${t})`,r=void 0!==(null==o?void 0:o.width)?(null==o?void 0:o.width)+"px":"100%",o=`calc(${null==o?void 0:o.height}px + ${t})`||"100%";return t="IFRAME"===(null==(t=i.view)?void 0:t.tagName)?i.view:null,a&&(e.reverse?!0===(null==a?void 0:a.visibility)&&(yield null==a?void 0:a.fall()):(t&&(t.style.willChange="min-width, min-height, width, height"),e.view[0].style.willChange="transform, min-width, min-height, width, height, opacity",a.freezeSnap(),yield e.view[0].animate({transform:`translate3d(${u}, ${c}, 500px)`,transformOrigin:"center",backfaceVisibility:"hidden",width:r,height:o,minWidth:"0px",minHeight:"0px",boxShadow:"2px 4px 20px rgb(0, 0, 0, .2)",borderRadius:"16px",opacity:0},{duration:0,fill:"forwards"}).finished,e.view[0].animate({opacity:1},{duration:100,easing:n.E["ease-out-expo"],fill:"forwards"}).play(),yield e.view[0].animate({transform:"translate3d(0px, 0px, 500px)",width:"100%",height:"100%",borderRadius:"0px"},{duration:600,easing:n.E["ease-out-expo"],fill:"forwards"}).finished,yield a.rise(),yield e.view[0].animate({minWidth:"100%",minHeight:"100%",boxShadow:"none",borderRadius:"0px"},{duration:100,easing:n.E["ease-out-expo"],fill:"forwards"}).finished,t&&(t.style.willChange="none"),e.view[0].style.willChange="none",a.activateSnap())),Promise.resolve(!1)}))}}]);