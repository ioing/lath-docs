"use strict";(self.webpackChunklath_docs=self.webpackChunklath_docs||[]).push([[699],{9699:(t,e,r)=>{r.r(e),r.d(e,{Animate:()=>h});var s=r(6454),i=(r(1923),{in:"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0, 1, .5, 1)",linear:"cubic-bezier(0.250, 0.250, 0.750, 0.750)","ease-in-quad":"cubic-bezier(0.550, 0.085, 0.680, 0.530)","ease-in-cubic":"cubic-bezier(0.550, 0.055, 0.675, 0.190)","ease-in-quart":"cubic-bezier(0.895, 0.030, 0.685, 0.220)","ease-in-quint":"cubic-bezier(0.755, 0.050, 0.855, 0.060)","ease-in-sine":"cubic-bezier(0.470, 0.000, 0.745, 0.715)","ease-in-expo":"cubic-bezier(0.950, 0.050, 0.795, 0.035)","ease-in-circ":"cubic-bezier(0.600, 0.040, 0.980, 0.335)","ease-in-back":"cubic-bezier(0.600, -0.280, 0.735, 0.045)","ease-out-quad":"cubic-bezier(0.250, 0.460, 0.450, 0.940)","ease-out-cubic":"cubic-bezier(0.215, 0.610, 0.355, 1.000)","ease-out-quart":"cubic-bezier(0.165, 0.840, 0.440, 1.000)","ease-out-quint":"cubic-bezier(0.230, 1.000, 0.320, 1.000)","ease-out-sine":"cubic-bezier(0.390, 0.575, 0.565, 1.000)","ease-out-expo":"cubic-bezier(0.190, 1.000, 0.220, 1.000)","ease-out-circ":"cubic-bezier(0.075, 0.820, 0.165, 1.000)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1.275)","ease-in-out-quad":"cubic-bezier(0.455, 0.030, 0.515, 0.955)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1.000)","ease-in-out-quart":"cubic-bezier(0.770, 0.000, 0.175, 1.000)","ease-in-out-quint":"cubic-bezier(0.860, 0.000, 0.070, 1.000)","ease-in-out-sine":"cubic-bezier(0.445, 0.050, 0.550, 0.950)","ease-in-out-expo":"cubic-bezier(1.000, 0.000, 0.000, 1.000)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.150, 0.860)","ease-in-out-back":"cubic-bezier(0.680, -0.550, 0.265, 1.550)"});const n=window.getComputedStyle;class a extends s.E{constructor(t){super(),this.properties={},this.transforms={},this.transforming=!1,this.propertiesGroup=[],this.scene=[],this.transitionProps=[],this.el=t,this.resetTransitionDuration()}isSubPropertyName(t,e){return"all"===e||(-1===e.indexOf("-")?0===t.indexOf(e):(t=e.split("-"),e=e.split("-"),t[0]===e[0]&&t[t.length-1]===e[e.length-1]))}onceTransitionend(t){if(this.getDuration()){const e=this.getMaxDurationPropertyName(),r=s=>{s.target===this.el&&this.isSubPropertyName(s.propertyName,e)&&(t(),this.el.removeEventListener("transitionend",r,!1))};this.el.addEventListener("transitionend",r,!1)}else(0,s.s)(t,0)}applySegue(){var t=[];this.transforms.translate3d||this.transforms.translateZ||(this.transforms.translateZ="translateZ(0)");for(const e in this.transforms)t.push(this.transforms[e]);return t.length&&this.style("transform",t.join(" ")),this}applyProperties(){var t=this.propertiesGroup.shift();this.transforming=!0;for(const e in t)this.setElementProperty(this.el,e,t[e]);return this.onceTransitionend((()=>{this.clear(),this.next()})),this}resetTransitionDuration(){this.setElementProperty(this.el,"transition-duration","0ms")}setElementProperty(t,e,r){void 0!==t.style.getPropertyValue("-webkit-"+e)&&t.style.setProperty("-webkit-"+e,r),t.style.setProperty(e,r)}style(t,e,r=!1){return r&&-1===t.indexOf("transition")&&-1===t.indexOf("animation")&&this.setTransitionProps(t),this.properties[t]=void 0===e?"":e,this}current(t){return n(this.el).getPropertyValue(t)}getDuration(){return parseFloat(n(this.el).transitionDuration)}getMaxDurationPropertyName(){var t=n(this.el).transitionDuration.split(",").map((t=>parseFloat(t)));return n(this.el).transitionProperty.split(",")[t.indexOf(Math.max(...t))].trim()}transform(t){this.setTransitionProps("transform");var e=null==(e=t.match(/\w+\b/))?void 0:e[0];return e&&(this.transforms[e]=t),this}setTransitionProps(t){return 0===this.transitionProps.length&&(this.transitionProps=n(this.el).transitionProperty.split(",").map((t=>t.trim()))),-1===this.transitionProps.indexOf(t)&&this.transitionProps.push(t),this}calc(t,e=(t=>t)){var r=parseInt(this.current(t),10);return this.style(t,e(r)+"px")}add(t,e){return this.calc(t,(t=>t+e))}subc(t,e){return this.calc(t,(t=>t-e))}next(){var t;return this.scene.length&&null!=(t=this.scene.shift())&&t(),0===this.scene.length?this.init():(0,s.r)((()=>{this.applyProperties()})),this}clear(){return this.transforms={},this}init(){return this.getDuration()&&this.resetTransitionDuration(),this.clear(),this.transforming=!1,this}then(t=(()=>{})){return this.applySegue(),this.style("transition-property",this.transitionProps.join(", ")),this.propertiesGroup.push(this.properties),this.properties={},this.scene.push((()=>null==t?void 0:t.call(this))),this}end(t){return new Promise((e=>{t=null!=t?t:()=>e(),this.then(t),this.transforming||(0,s.r)((()=>{this.applyProperties()}))}))}}class o extends a{constructor(t){super(t),this.translate=this.to,this.translate3d=this.to,this.translateX=this.x,this.translateY=this.y,this.translateZ=this.z}to(t=0,e=0,r=0){return t=isNaN(t)?t:t+"px",e=isNaN(e)?e:e+"px",r=isNaN(r)?r:r+"px",this.transform("translate3d("+t+","+e+","+r+")"),this}x(t=0){return t=isNaN(t)?t:t+"px",this.transform("translateX("+t+")")}y(t=0){return t=isNaN(t)?t:t+"px",this.transform("translateY("+t+"px)")}z(t=0){return t=isNaN(t)?t:t+"px",this.transform("translateZ("+t+"px)")}scale(t,e=t){return this.transform("scale("+t+", "+(e||t)+")")}transformOrigin(t,e=0){let r="center";return Array.isArray(t)&&(e=t[1]||0,t=t[0]||0),"string"==typeof t?r=t:"number"==typeof t&&(r=t+"px "+e+"px"),this.style("transform-origin",r)}skew(t,e){return this.transform("skew("+t+"deg, "+(e||0)+"deg)")}skewX(t){return this.transform("skewX("+t+"deg)")}skewY(t){return this.transform("skewY("+t+"deg)")}scaleX(t){return this.transform("scaleX("+t+")")}matrix(t,e,r,s,i,n){return this.transform("matrix("+[t,e,r,s,i,n].join(",")+")")}scaleY(t){return this.transform("scaleY("+t+")")}rotate(t){return this.transform("rotate("+t+"deg)")}rotateX(t){return this.transform("rotateX("+t+"deg)")}rotateY(t){return this.transform("rotateY("+t+"deg)")}rotateZ(t){return this.transform("rotateZ("+t+"deg)")}rotate3d(t,e,r,s){return this.transform("rotate3d("+t+", "+e+","+r+","+s+"deg)")}perspective(t,e=!1){var r=(e?this.el.parentElement:this.el)||this.el;return t="string"==typeof t?t:t+"px",e&&r!==this.el?(this.setElementProperty(r,"transform-style","preserve-3d"),this.setElementProperty(r,"perspective",t)):this.transform("perspective("+t+")"),this}backface(t=!0){return this.style("backface-visibility",t?"visible":"hidden")}animate(t,e){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&this.style("animation-"+t,e[t]);return this.style("animation-name",t)}duration(t){return this.style("transition-duration",t="string"==typeof t?t:t+"ms")}ease(t){return t=i[t]||t||"ease",this.style("transition-timing-function",t)}delay(t){return this.style("transition-delay",t="string"==typeof t?t:t+"ms")}opacity(t){return this.setTransitionProps("opacity"),this.style("opacity",t+"",!0)}filter(t){return this.style("filter",t,!0),this.setTransitionProps("filter"),this}width(t){return t="string"==typeof t?t:t+"px",this.setTransitionProps("width"),this.style("width",t,!0)}height(t){return t="string"==typeof t?t:t+"px",this.setTransitionProps("height"),this.style("height",t,!0)}borderRadius(t){return t="string"==typeof t?t:t+"px",this.setTransitionProps("border-radius"),this.style("border-radius",t,!0)}}class h extends o{constructor(t){super(t)}}}}]);