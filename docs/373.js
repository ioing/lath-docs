"use strict";(self.webpackChunklath_docs=self.webpackChunklath_docs||[]).push([[373],{373:(e,i,l)=>{l.r(i),l.d(i,{default:()=>n});var t=l(9709),n=e=>(0,t._)(void 0,void 0,void 0,(function*(){var i=e.applets[e.reverse?1:0],l=e.applets[e.reverse?0:1],t=i.modality,n="string"==typeof(n=(null==(n=i.config.paperOptions)?void 0:n.clipTop)||"0px")?n:n+"px",o=(null==(s=null==(s=null==(s=e.touches)?void 0:s.target)?void 0:s.getBoundingClientRect())?void 0:s.x)||0,d=`calc(${((null==s?void 0:s.y)||0)+"px"} - ${n})`,a=(null==s?void 0:s.width)||"100%",s=`calc(${null==s?void 0:s.height}px + ${n})`||"100%";return n="IFRAME"===(null==(n=i.view)?void 0:n.tagName)?i.view:null,t&&(l.modality&&!1!==(null==(i=null==(i=l.config)?void 0:i.sheetOptions)?void 0:i.alwaysPopUp)&&(yield l.modality.fall()),e.reverse?!0===(null==t?void 0:t.visibility)&&(yield null==t?void 0:t.fall()):(n&&(n.style.willChange="min-width, min-height, width, height"),t.freezeSnap(),yield e.in.duration(0).to(o,d,500).transformOrigin("center").width(a).height(s).style("min-width","0px").style("min-height","0px").style("box-shadow","2px 4px 20px rgb(0, 0, 0, .2)").style("will-change","transform, min-width, min-height, width, height, opacity").borderRadius("16px").opacity(0).end(),yield e.in.duration(100).ease("ease-out-expo").to(o,d,500).opacity(1).end(),yield e.in.duration(600).ease("ease-out-expo").to(0,0,500).width("100%").height("100%").borderRadius("0px").end(),yield t.rise(),yield e.in.duration(100).to(0,0,500).style("min-width","100%").style("min-height","100%").style("box-shadow","none").style("will-change","none").end(),n&&(n.style.willChange="none"),t.activateSnap())),Promise.resolve(!1)}))}}]);