"use strict";(self.webpackChunklath_docs=self.webpackChunklath_docs||[]).push([[973],{5973:(e,a,r)=>{r.r(a),r.d(a,{default:()=>o});var t=r(9709),o=e=>a=>(0,t._)(void 0,void 0,void 0,(function*(){var r;let t="center",o=.3,s=150,c=1200,i=c/8,n=0,d=1;var l=a.direction*(a.reverse?-1:1),u=a.applets[1===a.historyDirection?1:0];switch(e){case 0:t="top",n=1,d=0,c=1400,i=c/8;break;case 1:t="right";break;case 2:t="bottom",n=1,d=0,c=1400,i=c/8;break;case 3:s=-150,t="left";break;case 4:t="center",s=180,o=.7,c=1200,i=0}return null!=(r=u.controls)&&r.prepare(!0),yield a.in.duration(0).ease("ease-out-expo").perspective(1e3).transformOrigin(t).to(0,0,0).backface(!1).rotate3d(n,d,0,s*l).scale(o).end(),yield Promise.all([a.in.delay(i).duration(c).backface(!1).rotate3d(n,d,0,0).scale(1).end(),a.out.duration(c).ease("ease-out-expo").perspective(1e3).transformOrigin(t).backface(!1).rotate3d(n,d,0,-s*l).scale(o).end()]),yield a.out.duration(0).backface(!1).rotate3d(n,d,0,-s*l).end(),null!=(r=u.controls)&&r.prepare(),Promise.resolve(!1)}))}}]);