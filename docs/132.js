"use strict";(self.webpackChunklath_docs=self.webpackChunklath_docs||[]).push([[132],{8132:(e,t,n)=>{n.r(t),n.d(t,{createPullToRefreshHolder:()=>a,registerPullDownEvent:()=>o});var r=n(3446);n(7314);const a=(e,t)=>{var n=document.createElement("applet-refresh-hold"),r=null==(r=(a=document.createElement("applet-pull-refresh")).attachShadow)?void 0:r.call(a,{mode:"open"}),a=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),s=document.createElement("style");return s.innerHTML=(e=>`\n    .applet-loading {\n      position: fixed;\n      z-index: 1;\n      height: 2em;\n      width: 2em;\n      overflow: visible;\n      margin: auto;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      font: 0/0 a;\n      color: transparent;\n      text-shadow: none;\n      background-color: transparent;\n      border: 0;\n      transform: translate3d(0, 0, 0) scale(.6);\n    }\n\n    .applet-spinner {\n      content: ' ';\n      display: block;\n      font-size: 10px;\n      width: 1em;\n      height: 1em;\n      margin-top: -7em;\n      border-radius: 0.5em;\n      transform: translate3d(0, 0, 0) rotate(0deg);\n      animation-duration: 16ms;\n      box-shadow: rgba(${e=e?"30, 30, 30":"255, 255, 255"}, 0.75) 1.5em 0 0 0, rgba(${e}, 0.75) 1.1em 1.1em 0 0, rgba(${e}, 0.75) 0 1.5em 0 0, rgba(${e}, 0.75) -1.1em 1.1em 0 0, rgba(${e}, 0.75) -1.5em 0 0 0, rgba(${e}, 0.75) -1.1em -1.1em 0 0, rgba(${e}, 0.75) 0 -1.5em 0 0, rgba(${e}, 0.75) 1.1em -1.1em 0 0;\n    }\n    @keyframes applet-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n      }\n    }\n  `)(e),a.style.cssText=(e=>`\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 200px;\n    z-index: 999999;\n    background: ${e?"rgba(255, 255, 255, .5)":"rgba(0, 0, 0, .5)"};\n    transform: translate3d(0, -100%, 0);\n    transition-property: transform;\n    border-radius: 0 0 50% 50%;\n    backdrop-filter: saturate(180%) blur(20px);\n    -webkit-backdrop-filter: saturate(180%) blur(20px);\n  `)(e),n.style.cssText="\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 7;\n  display: none;\n",r.appendChild(s),o.className="applet-loading",o.appendChild(l),l.className="applet-spinner",a.appendChild(o),r.appendChild(a),t.appendChild(r),t.appendChild(n),(()=>{var e=document.createElement("style");e.innerHTML="\n    body {\n      overscroll-behavior-y: none;\n    }\n  ",document.getElementsByTagName("head")[0].appendChild(e)})(),{holder:a,spinner:l,holdLayer:n}},o=(e,t,n,a,o)=>{if(t&&n&&a&&o){const s=e=>[(e=(e=e.changedTouches)[e.length-1]).clientX,e.clientY],i={startY:0,y:0,scrollStartY:0,hasTouchStart:!1,triggered:!1};var l=()=>{i.hasTouchStart=!1,a.style.filter="blur(0px)",n.style.transitionDuration=".4s",i.triggered?(a.style.animation="applet-spinner 1000ms infinite linear",o.style.display="block",(0,r.s)((()=>{n.style.transform="translate3d(0, -100%, 0)",(0,r.s)((()=>{if(e.config.forcedToRefresh)return location.reload();e.refresh().then((()=>{o.style.display="none",a.style.animation="none",i.triggered=!1})).catch((()=>{location.reload()}))}),400)}),800),e.trigger("pullToRefreshRelease")):(n.style.transform="translate3d(0, -100%, 0)",e.trigger("pullToRefreshCancel"))};t.addEventListener("touchstart",(e=>{var r,a;i.triggered||(a="BODY"===t.tagName,r=null==t?void 0:t.scrollTop,100<(a=null!=(a=a?null==(a=e.view)?void 0:a.scrollY:r)?a:r))||(n.style.transitionDuration="0s",i.scrollStartY=a,i.startY=s(e)[1],i.hasTouchStart=!0)})),t.addEventListener("touchend",l),t.addEventListener("touchcancel",l),t.addEventListener("touchmove",(r=>{var o,l;!1===i.hasTouchStart||100<i.scrollStartY||([r,o]=s(r),i.y=o-i.startY,i.y<10)||i.y<i.scrollStartY+50||(o=t.offsetWidth,r=50-(50-Math.max(Math.min(r/o*100,100),0))/3,l=.6*(o=Math.max(Math.min((i.y-50)/300*100,100),0)),n.style.borderBottomLeftRadius=r+"%",n.style.borderBottomRightRadius=100-r+"%",n.style.transform=`translate3d(0, -${100-l}%, 0)`,a.style.transform=`translate3d(0, 0, 0) rotate(${1.2*i.y%360}deg)`,100===o?(i.triggered=!0,a.style.filter="blur(2px)",e.trigger("pullToRefreshReady")):(i.triggered=!1,a.style.filter="blur(0px)",e.trigger("pullToRefreshRequest")))}))}}}}]);