"use strict";(self.webpackChunklath_docs=self.webpackChunklath_docs||[]).push([[230],{570:(e,i,a)=>{a.d(i,{E:()=>s});var s={ease:"ease","ease-in":"ease-in","ease-out":"ease-out","ease-in-out":"ease-in-out","ease-snap":"cubic-bezier(0, 1, .5, 1)",linear:"cubic-bezier(0.250, 0.250, 0.750, 0.750)","ease-in-quad":"cubic-bezier(0.550, 0.085, 0.680, 0.530)","ease-in-cubic":"cubic-bezier(0.550, 0.055, 0.675, 0.190)","ease-in-quart":"cubic-bezier(0.895, 0.030, 0.685, 0.220)","ease-in-quint":"cubic-bezier(0.755, 0.050, 0.855, 0.060)","ease-in-sine":"cubic-bezier(0.470, 0.000, 0.745, 0.715)","ease-in-expo":"cubic-bezier(0.950, 0.050, 0.795, 0.035)","ease-in-circ":"cubic-bezier(0.600, 0.040, 0.980, 0.335)","ease-in-back":"cubic-bezier(0.600, -0.280, 0.735, 0.045)","ease-out-quad":"cubic-bezier(0.250, 0.460, 0.450, 0.940)","ease-out-cubic":"cubic-bezier(0.215, 0.610, 0.355, 1.000)","ease-out-quart":"cubic-bezier(0.165, 0.840, 0.440, 1.000)","ease-out-quint":"cubic-bezier(0.230, 1.000, 0.320, 1.000)","ease-out-sine":"cubic-bezier(0.390, 0.575, 0.565, 1.000)","ease-out-expo":"cubic-bezier(0.190, 1.000, 0.220, 1.000)","ease-out-circ":"cubic-bezier(0.075, 0.820, 0.165, 1.000)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1.275)","ease-in-out-quad":"cubic-bezier(0.455, 0.030, 0.515, 0.955)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1.000)","ease-in-out-quart":"cubic-bezier(0.770, 0.000, 0.175, 1.000)","ease-in-out-quint":"cubic-bezier(0.860, 0.000, 0.070, 1.000)","ease-in-out-sine":"cubic-bezier(0.445, 0.050, 0.550, 0.950)","ease-in-out-expo":"cubic-bezier(1.000, 0.000, 0.000, 1.000)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.150, 0.860)","ease-in-out-back":"cubic-bezier(0.680, -0.550, 0.265, 1.550)"}},5230:(e,i,a)=>{a.r(i),a.d(i,{default:()=>c});var s=a(9412),r=a(570),c=e=>i=>(0,s._)(void 0,void 0,void 0,(function*(){let a=0,s=0,c=0,t=0;var n=600,u=null!=(u=null==(u=i.applets[i.reverse?1:0].controls)?void 0:u.backdropReducedScale)?u:.03,b=i.swipeTransitionType;switch(e){case 0:t=i.height,c=-t,a=s=0;break;case 1:a=i.width,s=-a,c=t=0;break;case 2:c=i.height,t=-c,a=s=0;break;case 3:s=i.width,a=-s,c=t=0}return i.reverse?(yield i.view[0].animate([{filter:"brightness(0.9)",transform:"slide"===b?`translate3d(${.3*a}px, ${.3*c}px, 0)`:`scale(${1-u})`}],{duration:0,easing:"linear",fill:"forwards"}).finished,yield Promise.all([i.view[1].animate([{transform:`translate3d(${s}px, ${t}px, 0)`}],{duration:n,easing:r.E["ease-out-expo"],fill:"forwards"}).finished,i.view[0].animate([{filter:"brightness(1)",transform:"slide"===b?"translate3d(0, 0, 0)":"scale(1)"}],{duration:n,easing:r.E["ease-out-expo"],fill:"forwards"}).finished])):(yield i.view[0].animate([{transform:`translate3d(${a}px, ${c}px, 0)`}],{duration:0,easing:"linear",fill:"forwards"}).finished,yield Promise.all([i.view[0].animate([{transform:"translate3d(0, 0, 100px)"}],{duration:n,easing:r.E["ease-out-expo"],fill:"forwards"}).finished,i.view[1].animate([{filter:"brightness(0.9)",transform:"slide"===b?`translate3d(${.3*s}px, ${.3*t}px, 0)`:`scale(${1-u})`}],{duration:n,easing:r.E["ease-out-expo"],fill:"forwards"}).finished])),Promise.resolve(!1)}))}}]);