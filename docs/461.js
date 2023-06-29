/*! For license information please see 461.js.LICENSE.txt */
(self.webpackChunklath_docs=self.webpackChunklath_docs||[]).push([[461],{8461:(t,e,i)=>{var n;((n=i(2309))&&"object"==typeof n&&"default"in n?n:{default:n}).default()},2309:(t,e,i)=>{"use strict";function n(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function s(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function r(t,e){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var i=getComputedStyle(t,null);return s(i.overflowY,e)||s(i.overflowX,e)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function o(t,e,i,n,s,r,o,l){return r<t&&o>e||r>t&&o<e?0:r<=t&&l<=i||o>=e&&l>=i?r-t-n:o>e&&l<i||r<t&&l>i?o-e+s:0}function l(t,e){if(!t)throw new Error(e)}function c(t,e){return null!=t?t:e}i.r(e),i.d(e,{default:()=>W,scroll:()=>M,scrollBy:()=>A,scrollIntoView:()=>E,scrollTo:()=>b});class a{constructor(t={}){this._listeners=[],this._currentAnimationStep=0,this._currentTime=0,this._springTime=0,this._currentValue=0,this._currentVelocity=0,this._isAnimating=!1,this._oscillationVelocityPairs=[],this._config={fromValue:c(t.fromValue,0),toValue:c(t.toValue,1),stiffness:c(t.stiffness,100),damping:c(t.damping,10),mass:c(t.mass,1),initialVelocity:c(t.initialVelocity,0),overshootClamping:c(t.overshootClamping,!1),allowsOverdamping:c(t.allowsOverdamping,!1),restVelocityThreshold:c(t.restVelocityThreshold,.001),restDisplacementThreshold:c(t.restDisplacementThreshold,.001)},this._currentValue=this._config.fromValue,this._currentVelocity=this._config.initialVelocity}start(){const{fromValue:t,toValue:e,initialVelocity:i}=this._config;return t===e&&0===i||(this._reset(),this._isAnimating=!0,this._currentAnimationStep||(this._notifyListeners("onStart"),this._currentAnimationStep=requestAnimationFrame((t=>{this._step(Date.now())})))),this}stop(){return this._isAnimating?(this._isAnimating=!1,this._notifyListeners("onStop"),this._currentAnimationStep&&(cancelAnimationFrame(this._currentAnimationStep),this._currentAnimationStep=0),this):this}get currentValue(){return this._currentValue}get currentVelocity(){return this._currentVelocity}get isAtRest(){return this._isSpringAtRest()}get isAnimating(){return this._isAnimating}updateConfig(t){this._advanceSpringToTime(Date.now());const e={fromValue:this._currentValue,initialVelocity:this._currentVelocity};return this._config=Object.assign({},this._config,e,t),this._reset(),this}onStart(t){return this._listeners.push({onStart:t}),this}onUpdate(t){return this._listeners.push({onUpdate:t}),this}onStop(t){return this._listeners.push({onStop:t}),this}removeListener(t){return this._listeners=this._listeners.reduce(((e,i)=>(-1!==Object.values(i).indexOf(t)||e.push(i),e)),[]),this}removeAllListeners(){return this._listeners=[],this}_reset(){this._currentTime=Date.now(),this._springTime=0,this._currentValue=this._config.fromValue,this._currentVelocity=this._config.initialVelocity}_notifyListeners(t){this._listeners.forEach((e=>{const i=e[t];"function"==typeof i&&i(this)}))}_step(t){this._advanceSpringToTime(t,!0),this._isAnimating&&(this._currentAnimationStep=requestAnimationFrame((t=>this._step(Date.now()))))}_advanceSpringToTime(t,e=!1){if(!this._isAnimating)return;let i=t-this._currentTime;i>a.MAX_DELTA_TIME_MS&&(i=a.MAX_DELTA_TIME_MS),this._springTime+=i;const n=this._config.damping,s=this._config.mass,r=this._config.stiffness,o=this._config.fromValue,c=this._config.toValue,h=-this._config.initialVelocity;l(s>0,"Mass value must be greater than 0"),l(r>0,"Stiffness value must be greater than 0"),l(n>0,"Damping value must be greater than 0");let u=n/(2*Math.sqrt(r*s));const f=Math.sqrt(r/s)/1e3,m=f*Math.sqrt(1-u*u),p=f*Math.sqrt(u*u-1),d=c-o;u>1&&!this._config.allowsOverdamping&&(u=1);let g=0,_=0;const V=this._springTime;if(u<1){const t=Math.exp(-u*f*V);g=c-t*((h+u*f*d)/m*Math.sin(m*V)+d*Math.cos(m*V)),_=u*f*t*(Math.sin(m*V)*(h+u*f*d)/m+d*Math.cos(m*V))-t*(Math.cos(m*V)*(h+u*f*d)-m*d*Math.sin(m*V))}else if(1===u){const t=Math.exp(-f*V);g=c-t*(d+(h+f*d)*V),_=t*(h*(V*f-1)+V*d*(f*f))}else{const t=Math.exp(-u*f*V);g=c-t*((h+u*f*d)*Math.sinh(p*V)+p*d*Math.cosh(p*V))/p,_=t*u*f*(Math.sinh(p*V)*(h+u*f*d)+d*p*Math.cosh(p*V))/p-t*(p*Math.cosh(p*V)*(h+u*f*d)+p*p*d*Math.sinh(p*V))/p}return this._currentTime=t,this._currentValue=g,this._currentVelocity=_,e&&(this._notifyListeners("onUpdate"),this._isAnimating)&&(this._isSpringOvershooting()||this._isSpringAtRest())?(0!==r&&(this._currentValue=c,this._currentVelocity=0,this._notifyListeners("onUpdate")),void this.stop()):void 0}_isSpringOvershooting(){const{stiffness:t,fromValue:e,toValue:i,overshootClamping:n}=this._config;let s=!1;return n&&0!==t&&(s=e<i?this._currentValue>i:this._currentValue<i),s}_isSpringAtRest(){const{stiffness:t,toValue:e,restDisplacementThreshold:i,restVelocityThreshold:n}=this._config,s=Math.abs(this._currentVelocity)<=n;return 0!==t&&Math.abs(e-this._currentValue)<=i&&s}}a.MAX_DELTA_TIME_MS=1/60*1e3*4;const h={behavior:"auto",left:void 0,top:void 0},u={behavior:"auto",block:"start",inline:"nearest"},f=(t,e,i,n)=>{if("smooth"===n)return d(t,e,i);isNaN(e)||(t.scrollLeft=e),isNaN(i)||(t.scrollTop=i)},m={stiffness:170,damping:26,mass:1,restVelocityThreshold:.01,restDisplacementThreshold:.1},p=(t,e,i)=>new Promise((n=>new a(Object.assign(Object.assign({},m),{fromValue:t,toValue:e})).onUpdate((t=>i(t.currentValue))).onStop((()=>n(void 0))).start())),d=(t,e,i)=>Promise.all([(()=>{if(isNaN(e))return;const i=t.scrollLeft;return i!==e?p(i,e,(e=>t.scrollLeft=e)):void 0})(),(()=>{if(isNaN(i))return;const e=t.scrollTop;return e!==i?p(e,i,(e=>t.scrollTop=e)):void 0})()]),g=(t,e,i)=>Math.min(Math.max(t,e),i),_=t=>{const e=typeof t;return"object"===e&&null!=t||"function"===e},V=t=>t.window===t,w=t=>t.scrollingElement||t.documentElement,y=t=>V(t)?w(t.document):t,v=t=>!(t&&t.ownerDocument.documentElement.contains(t)),T=(t,e)=>(i,n)=>{if(null==n)return;if(((t,e,i)=>{if(!_(t)){const t=V(e)?"Window":"Element";throw new TypeError(`Failed to execute '${i}' on '${t}': parameter 1 ('options') is not an object.`)}})(n,i,t),i=y(i),v(i))return;const s=Object.assign(Object.assign({},h),n),r=e?e(s,i):s,{left:o,top:l}=((t,{left:e,top:i})=>{const n=t===w(t.ownerDocument);return{left:(()=>{if(isNaN(e))return;const i=n?t.ownerDocument.documentElement.clientWidth:t.clientWidth,s=t.scrollWidth-i;return g(e,0,s)})(),top:(()=>{if(isNaN(i))return;const e=n?t.ownerDocument.documentElement.clientHeight:t.clientHeight,s=t.scrollHeight-e;return g(i,0,s)})()}})(i,r);return f(i,o,l,r.behavior)},b=T("scrollTo"),M=T("scroll"),A=T("scrollBy",((t,e)=>(isNaN(t.left)||(t.left+=e.scrollLeft),isNaN(t.top)||(t.top+=e.scrollTop),t))),E=(t,e)=>{if(t=y(t),v(t))return;const i=Object.assign(Object.assign({},u),_(e)?e:!(null==e||Boolean(e))&&{block:"end"});return Promise.all(function(t,e){var i=window,s=e.scrollMode,l=e.block,c=e.inline,a=e.boundary,h=e.skipOverflowHiddenElements,u="function"==typeof a?a:function(t){return t!==a};if(!n(t))throw new TypeError("Invalid target");for(var f,m,p=document.scrollingElement||document.documentElement,d=[],g=t;n(g)&&u(g);){if((g=null==(m=(f=g).parentElement)?f.getRootNode().host||null:m)===p){d.push(g);break}null!=g&&g===document.body&&r(g)&&!r(document.documentElement)||null!=g&&r(g,h)&&d.push(g)}for(var _=i.visualViewport?i.visualViewport.width:innerWidth,V=i.visualViewport?i.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,v=t.getBoundingClientRect(),T=v.height,b=v.width,M=v.top,A=v.right,E=v.bottom,S=v.left,N="start"===l||"nearest"===l?M:"end"===l?E:M+T/2,W="center"===c?S+b/2:"end"===c?A:S,D=[],O=0;O<d.length;O++){var H=d[O],L=H.getBoundingClientRect(),j=L.height,I=L.width,x=L.top,B=L.right,C=L.bottom,k=L.left;if("if-needed"===s&&M>=0&&S>=0&&E<=V&&A<=_&&M>=x&&E<=C&&S>=k&&A<=B)return D;var R=getComputedStyle(H),q=parseInt(R.borderLeftWidth,10),X=parseInt(R.borderTopWidth,10),U=parseInt(R.borderRightWidth,10),F=parseInt(R.borderBottomWidth,10),P=0,Y=0,$="offsetWidth"in H?H.offsetWidth-H.clientWidth-q-U:0,z="offsetHeight"in H?H.offsetHeight-H.clientHeight-X-F:0,G="offsetWidth"in H?0===H.offsetWidth?0:I/H.offsetWidth:0,J="offsetHeight"in H?0===H.offsetHeight?0:j/H.offsetHeight:0;if(p===H)P="start"===l?N:"end"===l?N-V:"nearest"===l?o(y,y+V,V,X,F,y+N,y+N+T,T):N-V/2,Y="start"===c?W:"center"===c?W-_/2:"end"===c?W-_:o(w,w+_,_,q,U,w+W,w+W+b,b),P=Math.max(0,P+y),Y=Math.max(0,Y+w);else{P="start"===l?N-x-X:"end"===l?N-C+F+z:"nearest"===l?o(x,C,j,X,F+z,N,N+T,T):N-(x+j/2)+z/2,Y="start"===c?W-k-q:"center"===c?W-(k+I/2)+$/2:"end"===c?W-B+U+$:o(k,B,I,q,U+$,W,W+b,b);var K=H.scrollLeft,Q=H.scrollTop;N+=Q-(P=Math.max(0,Math.min(Q+P/J,H.scrollHeight-j/J+z))),W+=K-(Y=Math.max(0,Math.min(K+Y/G,H.scrollWidth-I/G+$)))}D.push({el:H,top:P,left:Y})}return D}(t,i).map((({el:t,top:e,left:n})=>f(t,n,e,i.behavior)))).then((()=>{}))},S=(t,e)=>{const i=t[e],n="scrollBy"===e,s=n?function(t,e){A(this,{left:isNaN(t)?void 0:Number(t),top:isNaN(e)?void 0:Number(e)})}:function(t,e){b(this,{left:Number(t)||0,top:Number(e)||0})};return t[e]=function(){return 1===arguments.length?(n?A:b)(this,arguments[0]):(i||s).apply(this,arguments)},()=>{t[e]=i}},N=()=>{const t=Element.prototype.scrollIntoView,e=function(t){return E(this,t)};return Element.prototype.scrollIntoView=function(){const i=arguments[0];return _(i)?E(this,i):(t||e).apply(this,arguments)},()=>{Element.prototype.scrollIntoView=t}},W=({force:t=!1}={})=>{if("undefined"!=typeof document&&(t||!("scrollBehavior"in document.documentElement.style))){const t=[S(window,"scroll"),S(window,"scrollBy"),S(window,"scrollTo"),S(Element.prototype,"scroll"),S(Element.prototype,"scrollBy"),S(Element.prototype,"scrollTo"),N()];return()=>{t.forEach((t=>t()))}}return()=>{}}}}]);