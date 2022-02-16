/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/_lath@0.0.20@lath/app/index-58fdee3e.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lath@0.0.20@lath/app/index-58fdee3e.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Application),
/* harmony export */   "E": () => (/* binding */ EventProvider),
/* harmony export */   "_": () => (/* binding */ __awaiter)
/* harmony export */ });
function __awaiter(t,n,a,h){return new(a=a||Promise)(function(i,e){function s(t){try{r(h.next(t))}catch(t){e(t)}}function o(t){try{r(h.throw(t))}catch(t){e(t)}}function r(t){var e;t.done?i(t.value):((e=t.value)instanceof a?e:new a(function(t){t(e)})).then(s,o)}r((h=h.apply(t,n||[])).next())})}var windowOpen,tapHighlight,cssVar,inject,provider;class EventProvider{constructor(){this._events={}}on(t,e){const i=t.split(" ");return i.forEach(t=>{this._events[t]?this._events[t].push(e):this._events[t]=[e]}),this}one(e,i){const s=(...t)=>{i(...t),this.off(e,s)},t=e.split(" ");return t.forEach(t=>{this._events[t]?this._events[t].push(s):this._events[t]=[s]}),this}off(t,i){const e=t.split(" ");return e.forEach(t=>{var e;!this._events[t]||-1<(e=this._events[t].indexOf(i))&&this._events[t].splice(e,1)}),this}trigger(i,...t){if(this._events[i])return this._events[i].forEach(e=>{try{e(...t)}catch(t){this.off(i,e),this.trigger("error")}}),this}}class ModuleProptey extends EventProvider{constructor(t,e,i){super(),this.param={},this.view=null,this.events={transformStart:()=>{},transformEnd:()=>{},start:()=>{},load:()=>{},loadError:()=>{},preload:()=>{},destroy:()=>{}},this.darkTask=[],this.createTime=Date.now(),this.transient=!1,this.config={title:"",rel:"module",level:0,source:{},prerender:[],apply:["smart-setTimeout","smart-setInterval","link-in-new-window","tap-highlight"],free:!0,background:"auto"},this.components=[],this.resources={script:[],image:[],worker:[],video:[],audio:[],font:[],style:[]},this.elements={container:document.body},this.id=t,this.param={},this.model=e,this.application=i;var{config:t,resources:i,events:e,components:s}=this.setDefaultConfig(e);Object.assign(this.config,t),Object.assign(this.resources,i),Object.assign(this.events,e),s&&(this.components=s)}setDefaultConfig(t){var e;if("frameworks"===(null===(e=t.config)||void 0===e?void 0:e.rel)&&t.config.free&&console.error('[Type "frameworks" modules do not neeed to configured with [free].'),null!==(e=t.config)&&void 0!==e&&e.portal&&(t.config.free||console.error("[Module.config[free & portal]] conflit! [free] must be true when [portal] sets true")),1e4<(null!==(e=null===(e=t.config)||void 0===e?void 0:e.level)&&void 0!==e?e:0)&&console.error("[Module.config.level] needs to be less than 9999!"),null!==(e=null===(e=t.config)||void 0===e?void 0:e.unApply)&&void 0!==e&&e.length){const i=t.config.unApply;this.config.apply=null===(e=this.config.apply)||void 0===e?void 0:e.filter(t=>!i.includes(t))}return t}}class ModuleState extends ModuleProptey{constructor(t,e,i){super(t,e,i),this.viewTypeCache=null,this.visibility=!1,this.status={init:!1,preload:!1,prefetch:!1,prerender:!1,transforming:!1}}get sameOrigin(){return this.uri?new URL(this.uri,window.location.toString()).host===location.host:void 0===this.config.sandbox||!!this.config.sandbox.includes("allow-same-origin")}get level(){var t;return null!==(t=this.config.level)&&void 0!==t?t:0}get viewIndex(){var t;return null!==(t=this.level)&&void 0!==t?t:(null!==(t=null===(t=this.application.preActiveModule)||void 0===t?void 0:t.level)&&void 0!==t?t:0)+1}get rel(){return"system"===this.id?"system":"frameworks"===this.id?"frameworks":this.config.rel||"module"}get uri(){var t;return(null===(t=null===(t=this.config)||void 0===t?void 0:t.source)||void 0===t?void 0:t.src)||""}get viewType(){var t;return this.viewTypeCache||("module"!==this.rel?this.viewTypeCache="shadow":null!==(t=this.config)&&void 0!==t&&t.portal&&this.uri?this.viewTypeCache="HTMLPortalElement"in window&&this.sameOrigin?"portal":"iframe":this.viewTypeCache="iframe")}setActionOrigin(t){this.actionOriginMap=t}getActionOrigin(){return this.actionOriginMap}}class ModuleMount extends ModuleState{constructor(t,e,i){super(t,e,i)}timeTick(){Date.now()-this.createTime>(this.config.timeout||36e5)&&this.view&&this.destroy()}show(){var t;if("portal"!==this.viewType){if("iframe"===this.viewType){for(const e of this.darkTask)e();this.status.transforming=!1,this.darkTask=[],this.visibility=!0,this.trigger("visible"),this.triggerWindow("module-visible","moduleVisibilityState","visible")}}else null!==(t=this.view)&&void 0!==t&&t.activate()}hide(){this.status.transforming=!1,this.visibility=!1,this.trigger("hidden"),this.triggerWindow("module-hidden","moduleVisibilityState","hidden")}willShow(){this.status.transforming=!0,this.trigger("willShow"),this.triggerWindow("module-will-show","moduleVisibilityState","willVisible")}willHide(){this.status.transforming=!0,this.trigger("willHidden"),this.triggerWindow("module-will-hidden","moduleVisibilityState","willHidden")}triggerWindow(t,e,i){if("iframe"===this.viewType){var s=this.view;const o=null===(s=null==s?void 0:s.contentWindow)||void 0===s?void 0:s.window;o&&(o.postMessage({type:t,historyDirection:this.application.transform.historyDirection},"*"),this.sameOrigin&&e&&(o[e]=i))}}mediaGuard(){return new Promise((t,e)=>{var i;try{if("iframe"!==this.viewType)return t();if(void 0===this.sandbox)return t();const r=null===(i=this.view.contentDocument)||void 0===i?void 0:i.documentElement;if(!r)return e();if(r.getElementsByTagName("video")[0]){var s=r.querySelectorAll("video");for(const n in s){const a=s[n];null!==a&&void 0!==a&&a.paused||(a.pause(),this.darkTask.push(()=>{a.play()}))}}if(r.getElementsByTagName("audio")[0]){var o=r.querySelectorAll("audio");for(const h in o){const l=o[h];null!==l&&void 0!==l&&l.paused||(l.pause(),this.darkTask.push(()=>{l.play()}))}}}catch(t){e()}})}destroy(){return new Promise((t,e)=>{var i;return"module"!==this.rel||(null===(i=this.application.transform)||void 0===i?void 0:i.id)===this.id?e():("iframe"===this.viewType&&this.unload().catch(e),null!==(i=this.elements.container.parentElement)&&void 0!==i&&i.removeChild(this.elements.container),this.status.prefetch=this.status.preload=this.status.prerender=!1,this.view=null,this.status.init=!1,this.darkTask=[],null!==(e=this.events)&&void 0!==e&&e.destroy.bind(this)(),this.trigger("destroy"),void t())})}observer(e){var t=this.sandbox?null===(t=this.sandbox.contentDocument)||void 0===t?void 0:t.documentElement:this.view;if(t){const i=new MutationObserver(t=>{e(t)});return i.observe(t,{subtree:!0,attributes:!0,childList:!0,characterData:!0,attributeOldValue:!0,characterDataOldValue:!0}),i}}fate(){return new Promise(e=>{var t;if("module"!==this.rel)return e(!0);if(!0===this.config.background)return e(!0);if(!1===this.config.background)return e(!1);if("iframe"!==this.viewType)return e(!0);if(void 0===this.sandbox)return e(!0);if(!1===this.sameOrigin)return e(!1);var i=this.view;try{const o=null===(t=i.contentDocument)||void 0===t?void 0:t.documentElement;if(!o)return e(!0);if(!1!==this.config.mediaGuard&&this.mediaGuard().catch(e),o.getElementsByTagName("object")[0])return e(!1);if(o.getElementsByTagName("embed")[0])return e(!1);if(o.getElementsByTagName("applet")[0])return e(!1);if(o.getElementsByTagName("iframe")[0])return e(!1);if(o){const r={times:0};var s=this.observer(()=>{r.times++,1e3<r.times&&(e(!1),this.mutationObserver.disconnect())});if(!s)return;this.mutationObserver=s,setTimeout(()=>{10<r.times&&e(!1)},3e3)}else e(!0)}catch(t){e(!0)}})}unfate(){var t;null!==(t=this.mutationObserver)&&void 0!==t&&t.disconnect()}unload(){return new Promise((t,e)=>{var i;this.unfate();const s=this.view;if(!s)return t();s.style.display="none",s.src="about:blank";try{const o=null===(i=s.contentWindow)||void 0===i?void 0:i.window,r=s.contentDocument;null!==o&&void 0!==o&&o.location.reload(),null!==r&&void 0!==r&&r.open(),null!==r&&void 0!==r&&r.write(""),null!==r&&void 0!==r&&r.close()}catch(t){e()}null!==(i=s.parentElement)&&void 0!==i&&i.removeChild(s),t()})}}class Sandbox{constructor(t,e){const i=this.sandbox=document.createElement("iframe");return i.src=t||"about:blank",i.style.display="none",void 0!==e&&this.set(e),this}set src(t){this.sandbox.src=t}set unload(t){this.contentWindow.onbeforeunload=t}set onload(t){this.sandbox.onload=t}set onerror(t){this.sandbox.onerror=t}set(t){this.sandbox.setAttribute("sandbox",t)}reset(t){return this.exit(),this.set(t),this}open(){return this.contentDocument.open(),this}write(t='<head><meta charset="utf-8"></head>'){return this.contentDocument.write(t="<!DOCTYPE html>"+t),this}close(){return this.contentDocument.close(),this}append(t,e){this.enter(e),this.attach(),this.open(),this.write(t),this.close()}enter(t){t.appendChild(this.sandbox)}attach(){var t=this.sandbox.contentWindow,e=this.sandbox.contentDocument;this.contentWindow=t,this.contentDocument=e}exit(){const t=this.sandbox.parentNode;t&&t.removeChild(this.sandbox)}}class ModulePrefetch extends ModuleMount{constructor(t,e,i){super(t,e,i)}dependenciesLoad(o,r){return new Promise((e,i)=>{var t=document.head;const s=new Sandbox(o,"");s.onload=t=>{s.exit(),e(t)},s.onerror=t=>{s.exit(),i(t)},o?s.enter(t):r?s.append(r,t):i()})}preload(){return new Promise((i,t)=>{var e;this.dependenciesLoad(this.uri,null===(e=null===(e=this.config)||void 0===e?void 0:e.source)||void 0===e?void 0:e.html).then(t=>{var e;this.status.preload=!0,null!==(e=this.events)&&void 0!==e&&e.preload.bind(this)(),this.trigger("preload"),i(t)}).catch(t)})}prefetch(){return new Promise((t,e)=>{Promise.all([this.prefetchStatic(this.resources.script,"script"),this.prefetchStatic(this.resources.image,"image"),this.prefetchStatic(this.resources.worker,"worker"),this.prefetchStatic(this.resources.video,"video"),this.prefetchStatic(this.resources.audio,"audio"),this.prefetchStatic(this.resources.font,"font"),this.prefetchStatic(this.resources.style,"style"),this.prefetchStatic(this.resources.html,"document")]).then(()=>{this.status.prefetch=!0,this.trigger("prefetch"),t(!0)}).catch(e)})}prefetchStatic(i=[],s="script"){return new Promise((t,e)=>{Promise.all([].concat(i).map(t=>this.beforehandLink(t,"preload",s))).then(t).catch(e)})}beforehandLink(o,r="preload",n="worker | video | audio | font | script | style | image | document"){return o?new Promise((i,s)=>{var t=()=>{var t;const e=document.createElement("link");if(e.rel=r,e.href=o,e.as=n,e.onload=i,e.onerror=s,"preload"===r&&"document"===n&&this.dependenciesLoad(o),null===(t=e.relList)||void 0===t||!t.supports(r))return i();document.getElementsByTagName("head")[0].appendChild(e),i()};"function"==typeof requestIdleCallback?requestIdleCallback(t,{timeout:15e3}):setTimeout(t,1e3)}):Promise.resolve()}prerender(){return this.status.preload||this.status.prerender?Promise.resolve():new Promise((t,e)=>{this.preload().then(t).catch(e),this.prefetch(),this.beforehandLink(this.uri,"prerender","document")})}}class ModuleEventTarget extends ModulePrefetch{constructor(t,e,i){super(t,e,i),this.getTouchBorderType=t=>{var e=this.elements.container,i=e.offsetWidth,e=e.offsetHeight,t=t.touches[0],s=t.clientX,t=t.clientY;const o=[];return s<=100?o.push("left"):i-100<=s&&o.push("right"),t<=100?o.push("top"):e-100<=t&&o.push("bottom"),o}}subjoin(){this.registerBorderTouch(),this.bindOverscrollHistoryNavigatio()}bindOverscrollHistoryNavigatio(){this.on("touchborder",(t,e)=>{"touchmove"===e.type&&(t.includes("left")||t.includes("right")||t.includes("wipe"))&&(this.application.overscrollHistoryNavigatio.moment=Date.now(),this.application.overscrollHistoryNavigatio.type=t.join(" "))})}addBorderPanMoveHolder(t){const e=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div");var n="position: absolute; z-index: 3;";return e.style.cssText=n+" top: 0; right: 0; left: 0; height: 15px;",i.style.cssText=n+" top: 0; right: 0; bottom: 0; z-index: 3; width: 15px;",s.style.cssText=n+" right: 0; bottom: 0; left: 0; z-index: 3; height: 15px;",o.style.cssText=n+" top: 0; bottom: 0; left: 0; z-index: 3; width: 15px;",r.style.cssText=`display: none; ${n} top: 0; right: 0; bottom: 0; left: 0; z-index: 4;`,t.appendChild(e),t.appendChild(i),t.appendChild(s),t.appendChild(o),t.appendChild(r),[e,i,s,o,r]}registerBorderHolderTouch(){const[e,i,s,o,r]=this.addBorderPanMoveHolder(this.elements.container),n=[],a=r.addEventListener,t=r.removeEventListener,h=t=>{this.trigger("touchborder",n,t)},d=t=>{n.length=0,t.target===e?n.push("top"):t.target===i?n.push("right"):t.target===s?n.push("bottom"):t.target===o&&n.push("left"),r.style.display="block",a("touchmove",h),a("touchend",h),a("touchcancel",h)},c=()=>{r.style.display="none",t("touchmove",h),t("touchend",h),t("touchcancel",h)};var l=t=>{const e=t.addEventListener;e("touchstart",d),e("touchmove",d),e("touchcancel",c),e("touchend",c)};l(e),l(i),l(s),l(o)}registerBorderTouch(){if(this.sandbox&&!this.sameOrigin)return this.registerBorderHolderTouch();var t=(null===(t=this.sandbox)||void 0===t?void 0:t.contentWindow)||this.elements.container;const e=t.addEventListener,i=t.removeEventListener,s=[],o=t=>{this.trigger("touchborder",s,t),"touchend"!==t.type&&"touchcancel"!==t.type||(i("touchmove",o),i("touchend",o),i("touchcancel",o))};e("touchstart",t=>{s.length=0,s.push(...this.getTouchBorderType(t)),this.status.transforming&&s.push("wipe"),0<s.length&&(e("touchmove",o),e("touchend",o),e("touchcancel",o))},!1)}}windowOpen=(t,a)=>{const h=t.open;t.addEventListener("click",t=>{var e,i,s;const o=(t=t instanceof CustomEvent&&t.detail instanceof Event?t.detail:t).path||(null===(e=t.composedPath)||void 0===e?void 0:e.call(t))||[],r=(o.splice(-3),(()=>{for(const e of o){var t=null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"to-module");if(t)return a.to(t),null;if("A"===e.tagName)return e}})());if(!r)return!1;const n=r.href||String(r);return n&&"self"!==r.target&&(e=r.title||"",i=r.getAttribute("preset-effect"),s=r.getAttribute("clone-as"),t.stopPropagation(),t.preventDefault(),a.pushWindow(n,e,i,s,t).catch(()=>{h(n)})),!1}),t.open=(t,e,i)=>"string"!=typeof t||e||i?h(t,e,i):(a.pushWindow(t,"").catch(()=>{h(t)}),null)};const getTimerHandler=(s,o,t)=>(...e)=>{const i=()=>{if("function"==typeof s)s(...e);else if("string"==typeof s){const t=new o.Function("return "+s);t(...e)}};"visible"===o.moduleVisibilityState?i():t&&o.addEventListener("message",t=>{"module-visible"===(null===(t=t.data)||void 0===t?void 0:t.type)&&i()})},smartSetTimeout=s=>{const o=s.setTimeout;s.backgroundSetTimeout=o,s.setTimeout=(t,e,...i)=>{t=getTimerHandler(t,s,!0);return o(t,e,...i)}},smartSetInterval=s=>{const o=s.setInterval;s.backgroundSetInterval=o,s.setInterval=(t,e,...i)=>{t=getTimerHandler(t,s);return o(t,e,...i)}};tapHighlight=(t,i)=>{const s={element:null,oldStyle:""};const e=()=>{var t;null!==(t=null===(t=s.element)||void 0===t?void 0:t.style)&&void 0!==t&&t.filter&&(s.element.style.filter=s.oldStyle),s.element=null,s.oldStyle=""};t.addEventListener("touchstart",r=>{const n=i?"string"==typeof i?i.split(" "):i:null,a=r.path||r.composedPath()||[],e=(a.splice(-3),(()=>{var t,e,i;for(const s of a){if("A"===s.tagName)return s;if(null!==(t=s.children)&&void 0!==t&&t.length&&n)for(const o of n){if(0===o.indexOf("#")&&"#"+s.id===o)return s;if(0===o.indexOf(".")&&s.classList.length&&Object.values(s.classList).includes(o.slice(1)))return s;if(null!==(e=s.getAttribute)&&void 0!==e&&e.call(s,o))return s}}return(null!==(i=null===(i=a[0])||void 0===i?void 0:i.children)&&void 0!==i&&i.length?a[0]:a[1])||r.target})());e&&(s.element=e,s.oldStyle=e.style.filter,setTimeout(()=>{if(s.element===e){if(9e4<e.offsetWidth*e.offsetHeight)return;e.style.filter=s.oldStyle+" brightness(.8)"}const t=()=>{setTimeout(()=>{s.element!==e?e.style.filter=s.oldStyle:t()},600)};t()},60))}),t.addEventListener("touchmove",e),t.addEventListener("touchcancel",e),t.addEventListener("touchend",()=>{setTimeout(()=>{e()},600)})},cssVar=(t,e)=>{const{config:i,application:s}=e;e=s.config.globalCSSVariables;const o=t.document.documentElement.style,r=t=>{for(const e in t)o.setProperty(e,t[e])},n=t=>{var e;r({"--application-safe-area-top":null!==(e=t[0])&&void 0!==e?e:t,"--application-safe-area-right":null!==(e=t[1])&&void 0!==e?e:t,"--application-safe-area-bottom":null!==(e=null!==(e=t[2])&&void 0!==e?e:t[0])&&void 0!==e?e:t,"--application-safe-area-left":null!==(e=null!==(e=t[3])&&void 0!==e?e:t[1])&&void 0!==e?e:t})};i.safeArea?n(i.safeArea):s.config.safeArea&&n(s.config.safeArea),e&&r(e);s.on("safeAreaChange",t=>{n(t)}),s.on("globalCSSVariablesChange",t=>{r(t)})},inject=(t,e)=>{const{config:i,application:s}=e;var o,r=i.apply||[],n=i.applyOptions||{};if(Array.isArray(r))for(const a of r)switch(a){case"link-in-new-window":windowOpen(t,s);break;case"smart-setTimeout":"module"===e.rel&&smartSetTimeout(t);break;case"smart-setInterval":"module"===e.rel&&smartSetInterval(t);break;case"tap-highlight":n[a]&&(o=null!==(o=null===(o=n[a])||void 0===o?void 0:o.selector)&&void 0!==o?o:"tap-highlight",tapHighlight(t,o))}if("function"==typeof i.inject&&i.inject(t,e),e.components)for(const h of e.components)t.customElements.define("code-highlight",h(t));cssVar(t,e),t.__LATH_APPLICATION__=!0};class ModuleView extends ModuleEventTarget{constructor(t,e,i){super(t,e,i)}attach(t){t&&(this.status.init=!0,this.elements.container=t)}createSandbox(t,e){return this.sandbox=new Sandbox(t,e),this.sandbox.sandbox}createShadowbox(t){const e=document.createElement("shadow-view");var i=document.createElement("shadow-inner");null!==e&&void 0!==e&&e.attachShadow({mode:"open"});const s=e.shadowRoot||e;return s.appendChild(i),t(i),this.elements.container.appendChild(e),e}createPortal(t){const e=document.createElement("portal");return e.src=t,e}createView(){return this.view||(this.config.render?this.view=this.createShadowbox(this.config.render):"module"!==this.rel?this.view=document.createElement("div"):"portal"===this.viewType?this.view=this.createPortal(this.uri):this.view=this.createSandbox(this.uri,this.config.sandbox))}loadContent(){const t=this.elements.container;var e=this.view;if(e)if("portal"===this.viewType)t.appendChild(e);else if(this.sandbox)if(this.uri){this.sandbox.enter(t);const i=e.contentWindow;i&&this.sameOrigin&&(inject(null===i||void 0===i?void 0:i.window,this),null!==i&&void 0!==i&&i.window.postMessage({type:"container-ready"},"*"))}else{this.sandbox.append(null===(e=null===(e=this.config)||void 0===e?void 0:e.source)||void 0===e?void 0:e.html,t);var e=this.loadContent.bind(this);this.sandbox.unload=e,inject(null===(e=this.sandbox.contentWindow)||void 0===e?void 0:e.window,this)}else"frameworks"===this.rel&&inject(window,this)}mountPresetView(){var t=null===(t=this.application.presetModulesElements)||void 0===t?void 0:t[this.id];t&&!this.view&&(this.view=t,this.elements.container.appendChild(t),this.status.prerender=!0,null===(t=this.application.presetModulesElements)||void 0===t||delete t[this.id])}create(e=!0){return this.unfate(),this.timeTick(),this.mountPresetView(),this.status.prerender?Promise.resolve("prerender"):new Promise((i,s)=>{this.createTime=Date.now();const t=this.createView();return"shadow"===this.viewType?("frameworks"===this.rel&&inject(window,this),i("shadow")):(t.style.cssText=`
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        border: 0;
        transform: translate3d(0, 0, 0);
      `,t.onload=t=>{var e;this.status.prerender=!0,null!==(e=this.events)&&void 0!==e&&e.load.bind(this)(),this.trigger("load"),setTimeout(()=>{i(t)},50)},t.onerror=t=>{var e;null!==(e=this.events)&&void 0!==e&&e.loadError.bind(this)(),this.trigger("loadError"),s(t)},this.loadContent(),this.subjoin(),!1===e||!1===this.config.animation?i("instant"):void setTimeout(()=>{i("timeout")},this.status.preload?800:200))})}}class Module extends ModuleView{constructor(t,e,i){super(t,e,i),this.events.start.bind(this)()}}class TransformProptey{constructor(t,e){this.id="",this.od="",this.ids=[],this.zIndex=0,this.param="",this.unuseShadowDom=!1,this.relativeViewport=document.createElement("relative-windows"),this.absoluteViewport=document.createElement("absolute-windows"),this.fixedViewport=document.createElement("fixed-windows"),this.target=this.relativeViewport,this.app=t,this.zIndex=null!==(t=null==e?void 0:e.zIndex)&&void 0!==t?t:0,this.unuseShadowDom=!(null==e||!e.unuseShadowDom),this.setupViewport()}setupViewport(){var t;this.relativeViewport.id="relative-viewport",this.absoluteViewport.id="absolute-viewport",this.unuseShadowDom||(null!==(t=this.relativeViewport)&&void 0!==t&&t.attachShadow({mode:"open"}),null!==(t=this.absoluteViewport)&&void 0!==t&&t.attachShadow({mode:"open"})),this.resetViewport(),this.fixedViewport.id="fixed-viewport",this.fixedViewport.style.position="fixed",this.fixedViewport.style.zIndex=String(this.zIndex+3),this.fixedViewport.style.width="100%",this.fixedViewport.style.height="0",this.fixedViewport.style.contain="strict",this.fixedViewport.style.overflow="visible",document.body.appendChild(this.relativeViewport),document.body.appendChild(this.absoluteViewport),document.body.appendChild(this.fixedViewport)}resetViewport(){this.relativeViewport.style.cssText="",this.relativeViewport.style.position="fixed",this.relativeViewport.style.zIndex=String(this.zIndex+1),this.relativeViewport.style.width=this.relativeViewport.style.height="100%",this.relativeViewport.style.overflow="hidden",this.relativeViewport.style.contain="strict",this.absoluteViewport.style.cssText="",this.absoluteViewport.style.position="fixed",this.absoluteViewport.style.zIndex=String(this.zIndex+2),this.absoluteViewport.style.width=this.absoluteViewport.style.height="100%",this.absoluteViewport.style.overflow="visible",this.absoluteViewport.style.contain="strict"}}class TransformHistory extends TransformProptey{constructor(t,e){super(t,e),this.history=0,this.historyIndex=history.length,this.historyDirection=0,this.backoutCount=0,this.silentObserver=void 0,this.historyBreakCallback=null,this.bindHistoryState()}get isForward(){return-1===this.history&&1===this.historyDirection}get isBack(){return-1===this.history&&-1===this.historyDirection}get isOverscrollHistoryNavigatio(){if(!this.isBack&&!this.isForward)return!1;const t=this.app.overscrollHistoryNavigatio;var e=-1!==t.type.indexOf("wipe")?400:300;return!(Date.now()-t.moment>e)}bindHistoryState(){addEventListener("popstate",t=>{this.popstate(t.state),clearInterval(this.silentObserver)},!1)}obserSilent(){this.silentObserver=setInterval(()=>{var t;(null===(t=history.state)||void 0===t?void 0:t.id)!==this.id&&this.popstate(history.state)},100)}popstate(t){var{historyIndex:e=0}=null!=t?t:{};e===this.historyIndex?this.historyDirection=0:e>this.historyIndex?this.historyDirection=1:this.historyDirection=-1,this.historyIndex=e,this.back(t)}pushState(t="",e="",i=location.search,s=""){t=encodeURIComponent(t);var o=history.length;history.pushState({id:t,title:e,time:Date.now(),search:i,historyIndex:o},e,location.pathname+i+"#"+t+"/"+s),this.historyIndex=o+1,this.historyDirection=1,void 0===this.silentObserver&&this.obserSilent()}replaceState(t="",e="",i=location.search,s=""){t=encodeURIComponent(t);var o=history.length;history.replaceState({id:t,title:e,time:Date.now(),search:i,historyIndex:o},e,location.pathname+i+"#"+t+"/"+s),this.historyIndex=o,this.historyDirection=1}back(n){var a,h,l;return __awaiter(this,void 0,void 0,function*(){var t=this.options,e=n||history.state||this.app.route,i=decodeURIComponent(e.id)||t.index||"frameworks",e=e.search,s=yield this.app.get(i);if(s){if(this.checkSingleLock())return this.backoutCount++,void(!0===(null===(a=(h=this.options).holdBack)||void 0===a?void 0:a.call(h,this.backoutCount))&&(this.pushState(i,s.config.title,e),this.app.trigger("exit",{backoutCount:this.backoutCount})));this.backoutCount=0;var o=null!==(a=s.config.level)&&void 0!==a?a:0,r=null!==(h=this.module.config.level)&&void 0!==h?h:0;if(t.singleFlow&&0!==s.config.level&&r<=o)return history.back();this.history=-1,this.isOverscrollHistoryNavigatio&&null!==(l=this.historyBreakCallback)&&void 0!==l&&l.call(this),this.app.transform.to(i,e,-1),this.app.trigger("back",{id:i,module:s})}})}checkSingleLock(){return!(!this.options.singleLock||0!==this.module.config.level||-1!==this.historyDirection)}bindHistoryBreak(t){this.historyBreakCallback=t}}class TransformAnimation extends TransformHistory{constructor(t,e){super(t,e)}checkAnimationNamed(){return!!this.getAnimationNames()}getAnimationNames(){if(!this.modulu||"module"!==this.modulu.rel)return!1;if(this.isOverscrollHistoryNavigatio)return!1;var t=this[1!==this.history&&-1===this.historyDirection?"modulu":"module"].config.animation;return!0===t||"inherit"===t?this.options.defaultAnimation:t}getAnimationGroup(){return __awaiter(this,void 0,void 0,function*(){let t;var e=this.getAnimationNames();if("string"==typeof e)t=yield this.getAnimationByName(e);else if("function"==typeof(null==e?void 0:e[0]))return e;return"function"==typeof(null===t||void 0===t?void 0:t[0])&&t})}getAnimationOneSide(e){return __awaiter(this,void 0,void 0,function*(){var t=yield this.getAnimationGroup();if(0<=e)switch(typeof t){case"function":return t;case"object":return t[2===t.length?e:0];default:return}})}getAnimationByName(t){return __awaiter(this,void 0,void 0,function*(){switch(t){case"flip":return new Promise(i=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_flip-61938f95_js").then(__webpack_require__.bind(__webpack_require__, /*! ./flip-61938f95.js */ "./node_modules/_lath@0.0.20@lath/app/flip-61938f95.js")).then(t=>{const e=t.default;i([e(4),e(4)])})});case"flipLeft":case"flip-left":return new Promise(i=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_flip-61938f95_js").then(__webpack_require__.bind(__webpack_require__, /*! ./flip-61938f95.js */ "./node_modules/_lath@0.0.20@lath/app/flip-61938f95.js")).then(t=>{const e=t.default;i([e(3),e(3)])})});case"flipDown":case"flip-down":return new Promise(i=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_flip-61938f95_js").then(__webpack_require__.bind(__webpack_require__, /*! ./flip-61938f95.js */ "./node_modules/_lath@0.0.20@lath/app/flip-61938f95.js")).then(t=>{const e=t.default;i([e(2),e(2)])})});case"flipRight":case"flip-right":return new Promise(i=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_flip-61938f95_js").then(__webpack_require__.bind(__webpack_require__, /*! ./flip-61938f95.js */ "./node_modules/_lath@0.0.20@lath/app/flip-61938f95.js")).then(t=>{const e=t.default;i([e(2),e(2)])})});case"flipUp":case"flip-up":return new Promise(i=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_flip-61938f95_js").then(__webpack_require__.bind(__webpack_require__, /*! ./flip-61938f95.js */ "./node_modules/_lath@0.0.20@lath/app/flip-61938f95.js")).then(t=>{const e=t.default;i([e(0),e(0)])})});case"fade":return new Promise(i=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_fade-87814f44_js").then(__webpack_require__.bind(__webpack_require__, /*! ./fade-87814f44.js */ "./node_modules/_lath@0.0.20@lath/app/fade-87814f44.js")).then(t=>{const e=t.default;i([e(1),e(0)])})});case"zoom":return new Promise(i=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_zoom-f1050045_js").then(__webpack_require__.bind(__webpack_require__, /*! ./zoom-f1050045.js */ "./node_modules/_lath@0.0.20@lath/app/zoom-f1050045.js")).then(t=>{const e=t.default;i([e(1),e(0)])})});case"slide":case"slideLeft":case"slideleft":case"slide-left":return new Promise(i=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_slide-b9f40878_js").then(__webpack_require__.bind(__webpack_require__, /*! ./slide-b9f40878.js */ "./node_modules/_lath@0.0.20@lath/app/slide-b9f40878.js")).then(t=>{const e=t.default;i([e(1),e(3)])})});case"slideRight":case"slideright":case"slide-right":return new Promise(i=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_slide-b9f40878_js").then(__webpack_require__.bind(__webpack_require__, /*! ./slide-b9f40878.js */ "./node_modules/_lath@0.0.20@lath/app/slide-b9f40878.js")).then(t=>{const e=t.default;i([e(3),e(1)])})});case"slideUp":case"slideup":case"slide-up":return new Promise(i=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_slide-b9f40878_js").then(__webpack_require__.bind(__webpack_require__, /*! ./slide-b9f40878.js */ "./node_modules/_lath@0.0.20@lath/app/slide-b9f40878.js")).then(t=>{const e=t.default;i([e(2),e(0)])})});case"slideDown":case"slidedown":case"slide-down":return new Promise(i=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_slide-b9f40878_js").then(__webpack_require__.bind(__webpack_require__, /*! ./slide-b9f40878.js */ "./node_modules/_lath@0.0.20@lath/app/slide-b9f40878.js")).then(t=>{const e=t.default;i([e(0),e(2)])})});default:return Promise.resolve(void 0)}})}}class TransformSwitch extends TransformAnimation{constructor(t,e){super(t,e),this.hasAnimation=!1,this.switchover=!1,this.windowSet=[],this.promiseQueue=[],this.promiseParamQueue=[],this.delayDynamicImport()}delayDynamicImport(){__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_index-9a983786_js").then(__webpack_require__.bind(__webpack_require__, /*! ./index-9a983786.js */ "./node_modules/_lath@0.0.20@lath/app/index-9a983786.js"))}createContainer(t){if(!t.status.init){const e=document.createElement("module-container");e.setAttribute("name",this.id),e.setAttribute("type",-1!==["frameworks","system"].indexOf(this.id)?this.id:"module"),t.attach(e),this.resetContainer(t,this.switchover||!this.hasAnimation),this.getViewport(t).appendChild(e)}}resetContainer(t,e=!1){var i=t.config;const s=t.elements.container;var o=["frameworks","system"].includes(t.rel),r=this.app.properties.darkTheme;s.style.cssText="",o||(s.style.cssText=`
        position: absolute;
        z-index: ${(Number(t.viewIndex)||0)+1};
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        inset: 0;
        background: ${i.color||(r?"#000":"#fff")};
        transform: ${e?"translate3d(0, 0, 0)":"translate3d(200%, 200%, 0)"};
        contain: strict;
      `)}getViewport(t=this.module){return"system"===t.rel?this.fixedViewport:!1===t.config.free?this.relativeViewport.shadowRoot||this.relativeViewport:this.absoluteViewport.shadowRoot||this.absoluteViewport}checkSwitchover(t=this.modulu,e=this.module){return"module"===(null==t?void 0:t.rel)&&e.config.free!==t.config.free}to(...e){return __awaiter(this,void 0,void 0,function*(){const t=this.next()||this.promise(...e);return t.then(()=>{this.shiftPromise()}),this.pushPromise(t,e)})}prev(){return this.promiseQueue[0]}next(){const i=this.prev();if(i)return new Promise((t,e)=>{i.then(()=>{this.promiseParamQueue[0]&&this.promise(...this.promiseParamQueue[0]).then(t).catch(e)})})}pushPromise(t,e){return this.promiseParamQueue.push(e),this.promiseQueue.push(t),t}shiftPromise(){this.promiseParamQueue.shift(),this.promiseQueue.shift()}limit(t){var e,i=Math.max((null===(i=null==this?void 0:this.options)||void 0===i?void 0:i.limit)||3,2),s=this.windowSet.indexOf(t);"module"===this.module.rel&&!0!==this.module.config.background&&(-1!==s&&this.windowSet.splice(s,1),this.windowSet.push(t),this.windowSet.length>i&&null!==(e=this.app.modules[this.windowSet.splice(0,1)[0]])&&void 0!==e&&e.destroy())}destroy(e){e.transient&&-1===this.history?this.app.del(e).then(()=>{var t=this.windowSet.indexOf(e.id);this.windowSet.splice(t,1)}):e.fate().then(t=>{t||e.destroy().then(()=>{var t=this.windowSet.indexOf(e.id);this.windowSet.splice(t,1)})})}checkPushState(){return-1!==this.history&&"portal"!==this.module.viewType}getActionPosition(t){let e=0,i=0;t=t?t.srcEvent||t:{};return i=t.changedTouches?(e=t.changedTouches[0].pageX,t.changedTouches[0].pageY):(e=t.x,t.y),{x:e,y:i}}promise(n,a=location.search,h=1,l){return __awaiter(this,void 0,void 0,function*(){return n===this.id?Promise.resolve():new Promise((e,t)=>{var i=this.od,s=i?[n,i]:[n];const o=this.app.modules[n];var r=this.app.modules[i],i=i?[o,r]:[o];if(!o)return this.app.get(n).then(()=>{this.promise(n,a,h).then(()=>{e()}).catch(()=>{t()})});this.id=n,this.ids=s,this.param=a,this.module=o,this.modulu=r,this.moduli=i,this.history=h,this.touches=this.getActionPosition(l),this.hasAnimation=this.checkAnimationNamed(),this.switchover=this.checkSwitchover(),this.target=this.getViewport(),this.createContainer(o),this.start().then(()=>{this.hintWillTrans(this.viewport),!0===this.checkPushState()&&this.pushState(n,o.config.title,a),this.touches&&o.setActionOrigin(this.touches),o.create(!!this.hasAnimation).then(()=>{var t;document.title=null!==(t=o.config.title)&&void 0!==t?t:"",this.transform().then(t=>{this.od=n,this.end(t),this.limit(this.id),e()}),this.app.beforehandDependencies(null===(t=o.config)||void 0===t?void 0:t.prerender).then(()=>{this.app.trigger("prerenderComplete")})})})})})}pos(){let t=(null===(o=this.touches)||void 0===o?void 0:o.x)||0,e=(null===(o=this.touches)||void 0===o?void 0:o.y)||0,i="center",s="center";var o=this.relativeViewport.offsetWidth,r=this.relativeViewport.offsetHeight;return t&&e&&(s=[t,e],t<o/4?t=0:t>3*o/4&&(t=o),e<r/4?e=0:e>3*r/4&&(e=r),i=[t,e]),{x:t,y:e,width:o,height:r,attach:i,origin:s}}get backsetState(){return 1===this.moduli.length?-1:this.module.level>=this.modulu.level?0:1}get viewport(){var t;return this.switchover?[!1===this.module.config.free?this.relativeViewport:this.absoluteViewport,!1===(null===(t=this.modulu)||void 0===t?void 0:t.config.free)?this.relativeViewport:this.absoluteViewport]:[this.module.elements.container,null===(t=this.modulu)||void 0===t?void 0:t.elements.container]}modulation(s){const o=this.viewport,r=this.backsetState,n=0!==r,a=this.pos();return new Promise((i,t)=>{__webpack_require__.e(/*! import() */ "node_modules__lath_0_0_20_lath_app_index-9a983786_js").then(__webpack_require__.bind(__webpack_require__, /*! ./index-9a983786.js */ "./node_modules/_lath@0.0.20@lath/app/index-9a983786.js")).then(t=>{const e=t["Animate"];t={x:a.x,y:a.y,in:new e(o[0]),out:new e(o[1]),view:o,width:a.width,height:a.height,viewport:[this.relativeViewport,this.absoluteViewport],modules:this.moduli,reverse:n,direction:n?-1:1,backset:r,historyDirection:this.historyDirection,origin:a.origin,attach:a.attach,touches:this.touches,callback:s};i(t)}).catch(()=>{t()})})}transform(){return __awaiter(this,void 0,void 0,function*(){return new Promise(s=>{if(!this.hasAnimation)return this.switchViewport(),void s(!1);var t=this.backsetState;this.getAnimationOneSide(t).then(i=>{this.bindHistoryBreak(()=>s(!1)),this.modulation(s).then(t=>{if(!i)return s(!1);const e=i(t);e instanceof Promise&&e.then(s)}).catch(()=>{s(!1)})}).catch(()=>s(!1))}),new Promise(s=>__awaiter(this,void 0,void 0,function*(){if(!this.hasAnimation)return this.switchViewport(),void s(!1);var t=this.backsetState;const i=yield this.getAnimationOneSide(t);if(!i)return s(!1);this.bindHistoryBreak(()=>s(!1)),this.modulation(s).then(t=>{const e=i(t);e instanceof Promise&&e.then(s)}).catch(()=>{s(!1)})}))})}hintWillTrans(t){t[0].style.willChange="transform, opacity",t[1]&&(t[1].style.willChange="transform, opacity")}removeTransHint(t){t[0].style.willChange="auto",t[1]&&(t[1].style.willChange="auto")}start(){return new Promise((t,e)=>{this.app.trigger("transformStart",this.moduli);const i=this.module.events.transformStart;if("function"==typeof i&&!1===i.call(this.module))return e();this.hasAnimation&&!this.switchover||(this.module.elements.container.style.transform="translate3d(0, 0, 0)"),this.module.willShow(),this.modulu&&this.modulu.willHide(),t()})}end(t=!1){const e=this.module.events.transformEnd;this.removeTransHint(this.viewport),this.switchover&&this.switchViewport(),this.modulu&&(t||("module"===this.modulu.rel&&(this.modulu.elements.container.style.transform="translate3d(200%, 200%, 0)"),this.resetContainer(this.module,!0)),this.modulu.elements.container.style.transitionDuration="0ms",!0===this.modulu.config.background?this.modulu.hide():this.destroy(this.modulu)),this.module.show(),"function"==typeof e&&e.call(this.module),this.app.trigger("transformEnd",this.moduli)}switchViewport(){var t;this.resetViewport(),!1===(null===(t=null===(t=this.module)||void 0===t?void 0:t.config)||void 0===t?void 0:t.free)?(this.absoluteViewport.style.transform="translate3d(200%, 200%, 0)",this.relativeViewport.style.transform="translate3d(0, 0, 0)"):(this.relativeViewport.style.transform="translate3d(200%, 200%, 0)",this.absoluteViewport.style.transform="translate3d(0, 0, 0)")}}class Transform extends TransformSwitch{constructor(t,e={}){super(t,e)}setup(t){this.options=t}}class ApplicationProptey extends EventProvider{constructor(){super(),this.modules={},this.presetModulesElements={},this.historyNodeLocation=history.length,this.routerRegExp=/([^#/]+)(.+)?/,this.options={modules:{}}}setting(t){this.options=t}}const BASE_CSS=`
* { box-sizing: border-box; margin: 0; padding: 0; text-size-adjust: 100%; tap-highlight-color: rgba(0, 0, 0, 0)  } 

html, body { position: absolute; width: 100vw; height: 100vh; background: #fff; overflow: hidden; overscroll-behavior: none } 

module-mask, module-view { position: absolute; width: 100%; height: 100%; overflow: hidden } 

module-container[type=module] { display: block; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100% } 

iframe { width: 100%; height: 100%; border: 0 } 

`;class ApplicationBase extends ApplicationProptey{constructor(){var t;super(),this.overscrollHistoryNavigatio={moment:0,type:""},this.properties={darkTheme:null===(t=null===(t=window.matchMedia)||void 0===t?void 0:t.call(window,"(prefers-color-scheme: dark)"))||void 0===t?void 0:t.matches},this.console={echo:(t,e,i,s)=>{console[t]("%c "+(e[0]?e[0]+" ":"")+"%c "+(i[0]?i[0]+" ":"")+"%c "+(s[0]?s[0]+" ":""),"color: #ffffff; background:"+e[1],"color: #ffffff; background:"+i[1],"color: #ffffff; background:"+(s[0]?s:i)[1])},log:(t,e,i)=>{this.console.echo("log",[e,"#999"],[t,"#333"],[i,"#666"])},info:(t,e,i)=>{this.console.echo("info",[e,"#0cf"],[t,"#06c"],[i,"#0c0"])},warn:(t,e,i)=>{this.console.echo("warn",[e,"#f60"],[t,"#f30"],[i,"#f90"])},error:(t,e,i)=>{this.console.echo("warn",[e,"#f06"],[t,"#903"],[i,"#993"])}},this.setBaseCSS()}get route(){var t=this.routerRegExp.exec(location.hash)||[],e=t[1],t=t[2],i=location.search;return{id:e?decodeURIComponent(e):"",param:t?decodeURIComponent(t):"",search:i}}get exists(){try{return parseInt(sessionStorage.getItem(location.pathname+"__EXISTS")||"-1",10)===history.length}catch(t){return!1}}setBaseCSS(){const t=document.createElement("style");t.innerHTML=BASE_CSS,document.getElementsByTagName("head")[0].appendChild(t)}resolveURL(t){t=new URL(t,window.location.toString());const e=t;return void 0===t.href&&(e.href=String(t)),e}promiseModule(t){return Promise.resolve(t())}urlVerify(t){var t="string"==typeof t?this.resolveURL(t):t,e=null==t?void 0:t.protocol;return(e===location.protocol||"https:"===e)&&(null===(e=this.config.pushWindow)||void 0===e||!e.sameOrigin||t.origin===location.origin)}moduleSrcVerify(t){if(!this.urlVerify(t))return!1;var e=this.config.capture;if(e)return this.moduleSrcCapture(t,e);e=this.config.allowHosts;if(!Array.isArray(e))return this.console.warn("[Module.config.allowHosts] is not defined!","Security risks exist: ",""),!0;var i=new URL(decodeURIComponent(t),window.location.toString()).host;for(const s of e)if(i===s)return!0;return!1}moduleSrcCapture(t,e=this.config.capture){var i=this.resolveURL(t),s=i.origin+i.pathname;if("string"==typeof e){if(e===s)return!0}else if("function"==typeof e&&e(i,t))return!0;return!1}getModuleByURL(t){var e=this.modules,i=this.resolveURL(t),s=i.origin+i.pathname;for(const n in e){var o=e[n],r=o.config.capture;if(this.moduleSrcCapture(t,r))return o;if(o.uri===s)return o}}setExists(){return new Promise((t,e)=>{try{sessionStorage.setItem(location.pathname+"__EXISTS",String(history.length)),t()}catch(t){e()}})}}provider=i=>{window.addEventListener("message",t=>{var{action:t,data:e}=t.data;switch(t){case"to":i.transform.to(e.module,e.query,e.history);break;case"back":history.back();break;case"forward":history.forward();break;case"pushWindow":i.pushWindow(...e)}})};class Application extends ApplicationBase{constructor(t={}){super(),this.tunneling=!1,this.tunneling=parent&&!!t.tunneling,this.transform=new Transform(this,t),this.to=this.transform.to.bind(this.transform),provider(this)}get activeModule(){var t=this.transform.id;return this.modules[t]}get preActiveModule(){var t=this.transform.od;return this.modules[t]}add(t,e){var i;if(this.modules[t])return this.modules[t];const s=null===(i=this.config)||void 0===i?void 0:i.moduleManifestProcess;return s&&(e=s(e)||e),this.modules[t]=new Module(t,e,this)}del(i){return new Promise((t,e)=>{delete this.modules[i.id],i.status.init?i.destroy().then(t).catch(e):t()})}get(o){return new Promise((e,t)=>{if("object"==typeof this.modules[o])return e(this.modules[o]);var i,s=this.options.modules[o];switch(typeof s){case"function":this.promiseModule(s).then(t=>{e(this.add(o,t))}).catch(t);break;case"object":e(this.add(o,s));break;default:this.moduleSrcVerify(o)&&(i=this.createModuleByURL(o,{},o))?e(i):t()}})}cloneAsNewModule(t,e,i={}){if(!e)return t;i=Object.assign({},t.model.config,i);return this.add(e,Object.assign({},t.model,{config:i}))}createModuleByURL(t,e,i){var s=decodeURIComponent(t),o=null!==(o=this.modules[s])&&void 0!==o?o:this.getModuleByURL(t);if(o)return i?this.cloneAsNewModule(o,i,e):o;i=!0!==this.config.disableTransient;return this.add(s,{config:Object.assign({title:"",rel:"module",level:(null!==(s=null===(o=this.activeModule)||void 0===o?void 0:o.config.level)&&void 0!==s?s:0)+1,free:!0,source:{src:t},background:"auto",timeout:i?0:null!==(o=this.config.transientTimeout)&&void 0!==o?o:6e4,animation:"inherit",transient:i},e)})}pushWindow(s,o="",r="slide",n,a){if(!this.moduleSrcVerify(s))return Promise.reject("Illegal");if(this.tunneling)return parent.postMessage({action:"pushWindow",data:[s,o,r,n,a]},"*"),Promise.resolve();const h=this.resolveURL(s).search;return new Promise((t,e)=>{var i=this.createModuleByURL(s,{title:o,animation:r},n);i&&this.transform.to(i.id,null!==(i=null===(i=i.config)||void 0===i?void 0:i.source)&&void 0!==i&&i.html?h:"",1,a).then(t).catch(e)})}beforehandDependencies(t=[],i=!0){const s=[];for(const o of t)s.push(new Promise((e,t)=>{this.get(o).then(t=>{i?t.prerender().then(e).catch(e):e("")}).catch(t)}));return new Promise((t,e)=>{Promise.all(s).then(t).catch(e)})}updateSafeArea(t){this.trigger("safeAreaChange",t)}updateGlobalCSSVariables(t){this.trigger("globalCSSVariablesChange",t)}install(t,s){const{swPathUrl:o,scope:r="",source:n=[]}=t;return o||n?new Promise((e,i)=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(o||this.createWorkerURL(n,s),{scope:r}).then(t=>{t.installing?console.log("Service worker installing"):t.waiting?console.log("Service worker installed"):t.active&&console.log("Service worker active"),e(t)}).catch(t=>{i(t)})}):Promise.reject()}createWorkerURL(t,e){t=`
      this.addEventListener('install', function(event) {
        event.waitUntil(
          caches.open('v_${e}').then(function(cache) {
            return cache.addAll(["${t.join('","')}"])
          })
        )
      })
      this.addEventListener('fetch', function(event) {
        event.respondWith(
          caches.match(event.request).then(function() {
            return fetch(event.request).then(function(response) {
              return caches.open('v_${e}').then(function(cache) {
                cache.put(event.request, response.clone())
                return response
              })
            })
          })
        )
      })
      self.addEventListener('activate', function(event) {
        event.waitUntil(
          caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
              if (['v_${e}'].indexOf(key) === -1) {
                return caches.delete(key)
              }
            }))
          })
        )
      })
    `;return URL.createObjectURL(new Blob([t],{type:"text/html"}))}mountSystem(){this.options.modules.system&&this.get("system").then(()=>{this.transform.to("system",void 0,-1).then(()=>{this.trigger("systemDidMount")})})}mountFramework(){this.get("frameworks").then(t=>{var e=this.route,t=t.config,i=t.index||"",s=t.preindex,e=e.id||i;if(this.config=t,this.transform.setup({singleFlow:t.singleFlow,singleLock:t.singleLock,index:i,defaultIndex:e,notFound:t.notFind,limit:Math.max(t.limit||7,2),defaultAnimation:t.animation,holdBack:t.holdBack}),this.transform.to("frameworks",void 0,-1).then(()=>{this.trigger("frameworksDidMount")}),e!==i&&e!==s)return s&&this.transform.pushState(s),void(e&&this.transform.to(e,void 0,this.exists?-1:1));e&&this.transform.to(e,void 0,-1)}).catch(()=>{this.console.error("Module frameworks must be included!","Serious!","")})}start(){if(!this.options.modules)return this.console.error("Please configure the module first!","Serious!","");this.setExists(),this.mountFramework(),this.mountSystem()}}

/***/ }),

/***/ "./node_modules/_lath@0.0.20@lath/app/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/_lath@0.0.20@lath/app/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Application": () => (/* reexport safe */ _index_58fdee3e_js__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _index_58fdee3e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-58fdee3e.js */ "./node_modules/_lath@0.0.20@lath/app/index-58fdee3e.js");


/***/ }),

/***/ "./src/components/app-logo/template.html":
/*!***********************************************!*\
  !*** ./src/components/app-logo/template.html ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<style>\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  .g-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    margin-top: 10px;\n  }\n\n  .word {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: \"Montserrat\", sans-serif;\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 18px;\n    font-weight: bold;\n    -webkit-font-smoothing: antialiased;\n  }\n</style>\n\n<div class=\"g-container\">\n  <div class=\"word\">Lath</div>\n</div>"

/***/ }),

/***/ "./src/components/app-nav/template.html":
/*!**********************************************!*\
  !*** ./src/components/app-nav/template.html ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<style>\n  #header {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 48px;\n    z-index: 9999999;\n    box-sizing: border-box;\n    padding: 15px;\n    background: var(--background, rgba(0, 0, 0, 0.8));\n    -webkit-backdrop-filter: saturate(180%) blur(20px);\n    backdrop-filter: saturate(180%) blur(20px);\n    display: flex;\n  }\n  .header-container {\n    display: flex;\n    max-width: 500px;\n    width: 100%;\n    margin: auto;\n  }\n  #logo {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    text-align: center;\n    color: var(--mainColor, #fff);\n  }\n  h2 {\n    color: var(--mainColor, #fff);\n    margin-top: 0;\n  }\n  h4 {\n    color: var(--mainColor, #fff);\n  }\n  .menu-list {\n    padding: 80px 30px;\n    max-width: 500px;\n    margin: 0 auto;\n  }\n  .item-list {\n    padding: 0;\n  }\n  .item-list li {\n    transition: opacity .3091s cubic-bezier(0.32, 0.08, 0.24, 1) .03s,transform .3455s cubic-bezier(0.32, 0.08, 0.24, 1) .02s,-webkit-transform .3455s cubic-bezier(0.32, 0.08, 0.24, 1) .02s;\n  }\n  .item-list a {\n    color: #f5f5f7;\n    font-size: 17px;\n    line-height: 2.7;\n    font-weight: 400;\n    letter-spacing: -.022em;\n    font-family: \"SF Pro Text\",\"Myriad Set Pro\",\"SF Pro Icons\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;\n    height: 44px;\n    opacity: .8;\n    text-decoration: none;\n    white-space: nowrap;\n    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n    font-synthesis: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    direction: ltr;\n    text-align: left;\n    border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);\n    display: block;\n    width: 100%;\n  }\n</style>\n\n<div id=\"header\">\n  <div class=\"header-container\">\n    <menu-icon id=\"menu-icon\"></menu-icon>\n    <div id=\"logo\"><app-logo></app-logo></div>\n  </div>\n</div>\n<menu-list id=\"menu-list\">\n  <div slot=\"list\">\n    <div class=\"menu-list\">\n      <h2>Application API</h2>\n      <ul class=\"item-list\">\n        <li>\n          <a href=\"?id=applicationTo#doc\">to</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationPushWindow#doc\">pushWindow</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationStart#doc\">start</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationInstall#doc\">install</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationActiveModule#doc\">activeModule</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationPreActiveModule#doc\">preActiveModule</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationEvents#doc\">Events</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationGet#doc\">get & del & add</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationExists#doc\">exists</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationUpdateSafeArea#doc\">updateSafeArea</a>\n        </li>\n        <li>\n          <a href=\"?id=applicationUpdateGlobalCSSVariables#doc\">updateGlobalCSSVariables</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</menu-list>\n"

/***/ }),

/***/ "./src/components/code-highlight/template.html":
/*!*****************************************************!*\
  !*** ./src/components/code-highlight/template.html ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<style>\n  .code-block {\n    overflow: auto;\n    filter: invert(1);\n  }\n  /* prism.css 未加在完的预览样式 */\n  :not(pre)>code[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    min-height: 23px;\n    background: #f8f8f8;\n  }\n  code[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    color: #333;\n    background: none;\n    font-family: Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n    text-align: left;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 20px;\n    font-size: 13px;\n    font-weight: normal;\n    tab-size: 4;\n    hyphens: none;\n    max-height: 99999px;\n  }\n\n  pre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\n  code[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n    background: #ddd;\n  }\n\n  /* Code blocks */\n  pre[class*=\"language-\"] {\n    display: inline-block;\n    padding: 6px 12px;\n  }\n\n  :not(pre) > code[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    background: none;\n  }\n\n  /* Inline code */\n  :not(pre) > code[class*=\"language-\"] {\n    padding: 1px;\n    border-radius: 4px;\n    white-space: normal;\n  }\n\n  .token.script.language-javascript {\n    tab-size: 4;\n  }\n  .token.tag {\n    tab-size: 0;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: slategray;\n  }\n\n  .namespace {\n    opacity: .7;\n  }\n\n  .token.property,\n  .token.operator,\n  .token.tag,\n  .token.constant,\n  .token.symbol,\n  .token.deleted {\n    color: #003399;\n  }\n\n  .token.punctuation {\n    color: #333;\n  }\n\n  .token.tag > .token.punctuation {\n    color: #003399;\n  }\n\n  .token.number,\n  .token.boolean {\n    color: #ed143d;\n  }\n\n  .token.selector,\n  .token.attr-name,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #009999;\n  }\n\n  .token.string,\n  .token.entity,\n  .token.url,\n  .language-css .token.string,\n  .style .token.string {\n    color: #ed143d;\n  }\n\n  .token.atrule,\n  .token.attr-value,\n  .token.keyword {\n    color: #ed143d;\n  }\n\n  .token.attr-value .punctuation.sign {\n    color: #009999;\n  }\n\n  .token.attr-value .punctuation.quotes {\n    color: #ed143d;\n  }\n\n  .token.function {\n    color: #003399;\n  }\n\n  .token.regex,\n  .token.important,\n  .token.variable {\n    color: #fb2a70;\n  }\n\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n</style>\n\n<div class=\"code-block\">\n  <pre id=\"code\" class=\"language-js\">\n  </pre>\n</div>\n"

/***/ }),

/***/ "./src/components/menu-icon/template.html":
/*!************************************************!*\
  !*** ./src/components/menu-icon/template.html ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<style>\n:host {\n  width: 15px;\n}\n\n#m {\n  margin: 0;\n  width: inherit;\n  position: relative;\n  display: inline-block;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  -o-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n  cursor: var(--menu-button-cursor, default);\n  transition: all 0.2s ease-in-out;\n  -webkit-tap-highlight-color: transparent;\n  --menu-button-color: #fff;\n  opacity: 0.8;\n}\n\n/* this trick makes the height 75% of the width (4:3 ratio) */\n#m:after {\n  padding-top: 75%;\n  display: block;\n  content: \"\";\n}\n\n@media (hover: hover) {\n  :host(:hover) {\n    opacity: 0.75;\n  }\n}\n\n#m span {\n  display: block;\n  position: absolute;\n  height: 1px;\n  width: 100%;\n  background: var(--menu-button-color, #000000);\n  border-radius: 0.5px;\n  opacity: 1;\n  left: 0;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96), -webkit-transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n  -moz-transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n  -o-transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n  transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n\n}\n\n#m span:nth-child(1) {\n  top: 0%;\n}\n\n#m span:nth-child(2),\n#m span:nth-child(3) {\n  top: 40%;\n}\n\n#m span:nth-child(4) {\n  top: 80%;\n}\n\n:host([open]) #m span:nth-child(1) {\n  top: 40%;\n  width: 0%;\n  left: 50%;\n}\n\n:host([open]) #m span:nth-child(2) {\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n:host([open]) #m span:nth-child(3) {\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n:host([open]) #m span:nth-child(4) {\n  top: 40%;\n  width: 0%;\n  left: 50%;\n}\n</style>\n\n<div id='m'>\n  <span></span>\n  <span></span>\n  <span></span>\n  <span></span>\n</div>\n"

/***/ }),

/***/ "./src/components/menu-list/template.html":
/*!************************************************!*\
  !*** ./src/components/menu-list/template.html ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<style>\n:host {\n  width: 100%;\n}\n\n#wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 999999;\n  transition: background .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .56s cubic-bezier(0.52, 0.16, 0.24, 1);\n  overflow-y: auto;\n}\n\n/* @media (prefers-color-scheme: dark) {\n  #wrapper {\n    background: rgba(0, 0, 0, 0.8);\n  }\n} */\n\n:host([open]) #wrapper {\n  background: rgba(0, 0, 0, 1);\n  height: 100vh;\n}\n</style>\n\n<div id='wrapper'>\n  <slot name='list'></slot>\n</div>\n"

/***/ }),

/***/ "./src/doc/html.html":
/*!***************************!*\
  !*** ./src/doc/html.html ***!
  \***************************/
/***/ ((module) => {

module.exports = "<style>\n  #header {\n    position: fixed;\n    height: 40px;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding-top: calc(20px + constant(safe-area-inset-top));\n    padding-top: calc(20px + env(safe-area-inset-top));\n    background-color: rgba(0, 0, 0, .5);\n    backdrop-filter: saturate(180%) blur(20px);\n    z-index: 99;\n    opacity: 0;\n    transition: opacity .1s ease;\n  }\n  .header-inner {\n    display: flex;\n    max-width: 500px;\n    margin: 0 auto;\n    padding: 0 20px;\n  }\n  .placeholder {\n    width: 100%;\n    height: calc(50px + constant(safe-area-inset-top));\n    height: calc(50px + env(safe-area-inset-top));\n  }\n  .back-btn {\n    display: flex;\n    height: 21px;\n    cursor: pointer;\n  }\n  .back-icon {\n    width: 21px;\n    height: 21px;\n    background-image: url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMTJweCcgaGVpZ2h0PScyMnB4JyB2aWV3Qm94PScwIDAgMTIgMjInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PHRpdGxlPlBhdGg8L3RpdGxlPjxnIGlkPSdTeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz48ZyBpZD0nT3ZlcnJpZGVzL05hdmlnYXRpb24tQmFyL0xlZnQvQmFjay1CdXR0b24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC05LjAwMDAwMCwgLTExLjAwMDAwMCknIGZpbGw9JyMwMDdBRkYnIGZpbGwtcnVsZT0nbm9uemVybyc+PGcgaWQ9J1Bpbi1MZWZ0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg5LjAwMDAwMCwgMTEuNTAwMDAwKSc+PHBhdGggZD0nTTMuNjIxMzIwMzQsMTAuNSBMMTEuNTYwNjYwMiwyLjU2MDY2MDE3IEMxMi4xNDY0NDY2LDEuOTc0ODczNzMgMTIuMTQ2NDQ2NiwxLjAyNTEyNjI3IDExLjU2MDY2MDIsMC40MzkzMzk4MjggQzEwLjk3NDg3MzcsLTAuMTQ2NDQ2NjA5IDEwLjAyNTEyNjMsLTAuMTQ2NDQ2NjA5IDkuNDM5MzM5ODMsMC40MzkzMzk4MjggTDAuNDM5MzM5ODI4LDkuNDM5MzM5ODMgQy0wLjE0NjQ0NjYwOSwxMC4wMjUxMjYzIC0wLjE0NjQ0NjYwOSwxMC45NzQ4NzM3IDAuNDM5MzM5ODI4LDExLjU2MDY2MDIgTDkuNDM5MzM5ODMsMjAuNTYwNjYwMiBDMTAuMDI1MTI2MywyMS4xNDY0NDY2IDEwLjk3NDg3MzcsMjEuMTQ2NDQ2NiAxMS41NjA2NjAyLDIwLjU2MDY2MDIgQzEyLjE0NjQ0NjYsMTkuOTc0ODczNyAxMi4xNDY0NDY2LDE5LjAyNTEyNjMgMTEuNTYwNjYwMiwxOC40MzkzMzk4IEwzLjYyMTMyMDM0LDEwLjUgWicgaWQ9J1BhdGgnPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=\");\n    background-size: contain;\n    background-repeat: no-repeat;\n    cursor: pointer;\n  }\n  .back-text {\n    line-height: 23px;\n    font-size: 17px;\n    color: #007AFF;\n  }\n  .doc {\n    margin: 0 auto;\n    padding: 0 20px;\n    max-width: 500px;\n    color: var(--mainColor, #fff);\n  }\n  .doc-title {\n    font-size: 17px;\n    margin-bottom: 20px;\n    position: fixed;\n    font-weight: bold;\n    top: calc(20px + constant(safe-area-inset-top));\n    top: calc(20px + env(safe-area-inset-top));\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 110;\n    max-width: 50%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .doc-text {\n    color: color(--mainColor .5);\n  }\n  .doc-code {\n    margin: 12px 0;\n    padding: 4px 12px;\n    border-radius: 10px;\n    background-color:rgba(255, 255, 255, 0.15);\n  }\n  p {\n    color: #999;\n    font-size: 15px;\n  }\n  small {\n    color: #555;\n  }\n  b {\n    border-radius: 4px;\n    padding: 0 7px;\n    color: #fff;\n    font-size: 13px;\n    font-weight: 600;\n    background: rgba(255, 255, 255, .25);\n    margin-right: 7px;\n  }\n  b.excl {\n    background: #ed143d;\n  }\n  hr {\n    border: 0;\n    background:rgba(255, 255, 255, 0.3);\n    height: 1px;\n    margin: 25px 0;\n  }\n  li {\n    font-size: 14px;\n    color: #999;\n  }\n</style>\n<div class=\"placeholder\"></div>\n<div class=\"doc\">\n  <div id=\"header\">\n    <div class=\"header-inner\">\n      <div class=\"back-btn\" onclick=\"javascript: history.back()\">\n        <div class=\"back-icon\"></div>\n        <span class=\"back-text\">列表</span>\n      </div>\n    </div>\n  </div>\n\n  <section id=\"page-content\"></section>\n\n  <template id=\"types\">\n    <div class=\"doc-title\">Types</div>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"install\">\n    <div class=\"doc-title\">Install & Preface</div>\n    <p>使用 npm 安装</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"bash\">\n        $ npm install lath --save\n      </code-highlight>\n    </div>\n    <br />\n    <p>\n      Lath 是一个渐进式前端容器，其初始依赖非常小，仅有 1kb。\n    </p>\n    <p>\n      它能够以按需加载的方式运行在所有现有 Web 页面中，通过核心的容器能力将该页面与关联页面进行无缝连接。\n    </p>\n    <hr />\n    <h4>主要亮点</h4>\n    <ul>\n      <li><b>页面转场</b> 让你的页面域页面之间增加多种预设的转场效果</li>\n      <li><b>无侵入</b> 在现有页面中异步引入，不阻塞原页面的加载逻辑</li>\n      <li><b>Prefetch</b> 可预加载页面资源</li>\n      <li><b>窗口管理</b> 复杂窗口管理，支持非同源“隧穿”</li>\n      <li><b>历史管控</b> 自动规划历史记录</li>\n      <li><b>自动内存管理</b> 智能管控，自动释放</li>\n    </ul>\n    <p><small>包括但不限于以上特点</small></p>\n    <hr />\n    <p>现在就让我们开始上手吧！</p>\n    <p><small>荐：使用 Typescript 进行开发可查看类型提示。</small></p>\n  </template>\n\n  <template id=\"start\">\n    <div class=\"doc-title\">Start</div>\n    <p>将普一个通页面变为单页应用就像下面这样：</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        import { createApplication } from 'lath'\n\n        /**\n         * \"home\": moduleName\n         * \"root\": target element id\n         */\n        createApplication('home', 'root').then(application => {\n          application.setting({\n            modules: {\n              frameworks: {...}, // sync config\n              home: () => { // async config\n                return new Promise(async (resolve, reject) => {\n                  import('../home').then(resolve).catch(reject)\n                })\n              }\n            }\n          })\n\n          // start app\n          application.start()\n        })\n      </code-highlight>\n    </div>\n    <br />\n    <p>我们可以简单的理解为每一个模块都是一个完整的页面，我们现在需要把这些页面的基本信息记录到这里，Lath 才能帮你完成无缝连接的体验。</p>\n    <p>现在，在你的现有页面中引入 lath。使用 createApplication 方法定义当前页面为一个应用，第一个参数作为将此页面元素定义为该应用首页模块的唯一命名，第二个参数为定义元素的具体元素 id 或 目标元素本身。</p>\n    <p>通过 createApplication 进行命名的模块，同时需要在 modules 配置中进行模块特性的配置。</p>\n    <hr />\n    <p>createApplication 实际上是一个加载器，工作完成后异步返回 Application。同时你也可以采用同步方法进行载入 Application。如下：</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        import { Application } from 'lath/app'\n        const application = new Application()\n        application.setting({\n          modules: {\n            ...\n          }\n        })\n      </code-highlight>\n    </div>\n    <hr />\n    <p>Application 为 Lath 的核心类，在创建应用前我们需要通过 new 将其实力化操作，之后我们需要设置该应用所包含的模块配置信息。通过配置信息中的 “modules” 属性来依次表达其包含模块的具体属性。</p>\n    <hr />\n    <p>关于非同源页面的无缝连接体验请参考应用预配置章节（Preset Config）：[Tunneling] 中的配置。</p>\n    <hr />\n    <p>另，本文档后续将主要对应用启动时的预配置项，加载的模块配置，以及和新 API，主要三个方面展开介绍，在查看文档时请注意区分。</p>\n  </template>\n\n  <template id=\"title\">\n    <div class=\"doc-title\">Title</div>\n    <p>模块的标题，主要用于浏览器的窗口展示上。</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: 'Home Page'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p><small>注：frameworks 与 system 类型模块可无需定义此项。</small></p>\n    <br />\n    <p>在单页应用中，页面标题会随着窗口模块发上改变，因此你需要一个名字以便告知浏览器如何称呼它。</p>\n  </template>\n\n  <template id=\"source\">\n    <div class=\"doc-title\">Source</div>\n    <p>定义模块的 HTML 源代码，该源代码将在容器内运行。</p>\n    <p>有以下两种定义方式，选其中一种即可:</p>\n    <p><small>1. 源码模式</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: 'Home Page',\n            source: {\n              html: `\n                &lt;html lang=\"en\">\n                  &lt;head>&lt;/head>\n                  &lt;body>\n                    { anything }\n                  &lt;/body>\n                &lt;/html>\n              `\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p><small>2. 链接模式</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: 'Home Page',\n            source: {\n              src: 'http://yoursite.com'\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>使用链接模式时需符合同源策略，否者某些能力将无法开启，比如 Capture、Apply、Inject 等。</p>\n    <p>若需要将非同源页面纳入模块体系，则需要将目标页面同样接入 lath，并开启“隧穿”模式，可参考Application 初始化的预配置项中的“tunneling”</p>\n  </template>\n\n  <template id=\"index\">\n    <div class=\"doc-title\">Index</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>定义应用的默认入口模块。</p>\n    <p><small>*value: string</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            index: 'home'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>当应用启动时将首先初始化模块名为 “home” 的模块内容。</p>\n    <p><small>注：在框架模块 (即 [rel = frameworks]) 中必须指定 index 首页模块，除非你期望由框架模块来承载首屏内容。</small></p>\n  </template>\n\n  <template id=\"rel\">\n    <div class=\"doc-title\">Rel</div>\n    <p>用作定义模块的类型。</p>\n    <p>Lath 具备窗口管理的能力，为满足复杂窗口交互的场景，我们将其共分为三种类型，普通模块类型：“module”、框架类型：“framework”、系统类型：“system”</p>\n    <p><small>*value: 'module' | 'frameworks' | 'system'</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            rel: 'module'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>1. “system” 类型的模块是放置在 Main Tree 下的，切不随着任何的模块路由而改变的，比如 app 中的辅助浮标、日期/信号头部栏、系统下拉通知等等。比如下面视频中的 AssistiveTouch 功能就是一个“system” 类型的模块的功能。</p>\n    <p>2. “framework” 类型则一般是具有框架模式的模块，比如淘宝首页中包含底部导航栏的部分，该导航栏是多个页面所共有的，所以它可以是一个框架层的模块，框架层的模块相对系统层的模块的区别是有着更低层的级别，比如窗口切换的时候框架层可以随之切换，而系统层则不会随之切换。</p>\n    <p>3. “module” 类型则是最常见的类型，我们可以理解为一个纯粹的页面，同时模块类型还分为自由类型和嵌入类型，后面的 [free] 配置中会讲到。</p>\n    <p><small>注：“framework” 框架类型的模块是唯一的。未定义该值时默认为 module 类型。</small></p>\n  </template>\n\n  <template id=\"free\">\n    <div class=\"doc-title\">Free</div>\n    <p>定义模块的窗口展示类型。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            free: true\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>该设置下模块以“全屏模式”运行，即不受框架模块的约束，假设框架模块是一个带有 tabBar 功能的模块，当该模块设置 free 为 true，此时模块将直接覆盖整个框架层运行，反之模块则会在框架层之内运行（即表现为 tabBar 覆盖在模块之上，如果你需要表现 tabBar，那你也许就应该这样做）。</p>\n  </template>\n\n  <template id=\"level\">\n    <div class=\"doc-title\">Level</div>\n    <p>对模块的显示层级的定义。</p>\n    <p><small>value: number</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            level: 1\n          }\n        }\n      </code-highlight>\n    </div>\n    <hr />\n    <p>一般首页模块的层级为 0，根据页面访问层级逐渐增大。</p>\n    <p>模块层级关系还将反应在转场动画上，从小到大为正向动画，反之从大到小时是逆向动画。</p>\n    <p>当历史回退到层级为 0 的模块时，会触发 singleLock 事件，具体可查看 singleLock 配置中的相关描述。</p>\n    <hr />\n    <p>注意：若跳转的两个模块是为同层级模块，则转场动画效果会被自动关闭。</p>\n    <p><small>为什么同级模块动画关闭？：同级模块动画关闭主要场景是用于 tab 切换，一般 tab 切换时不需要一个窗口动画效果，但是从其它层级的窗口切换过来时可能又是需要动画效果的。</small></p>\n  </template>\n\n  <template id=\"color\">\n    <div class=\"doc-title\">Color</div>\n    <p>定义模块的初始窗口背景色。</p>\n    <p><small>value: string</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            color: '#bd243f'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>默认背景色可以在模块尚未加载完成时提供良好的视觉过渡。</p>\n    <p>请选用合适的背景色来填充模块窗口，以确保动画效果的平滑度。</p>\n    <p><small>注：请确保背景色与模块主色一致。未设置时，默认值会根据浏览器设置的颜色模式自动填充 黑色/白色。</small></p>\n    <br />\n    <p>点击按钮查看效果 <button onclick=\"javascript: window.parent.postMessage({ action: 'to', data: { module: 'empty' }})\">Preview</button></p>\n  </template>\n\n  <template id=\"preset\">\n    <div class=\"doc-title\">Animate Effect</div>\n    <p>定义模块的窗口动画效果为预置的动画效果。</p>\n    <p>Lath 提供了常见的动画效果选项，只需指定你的效果名称即可实现流畅的窗口动画。</p>\n    <p><small>value: 'slide' ｜ 'slide-left' | 'slideLeft' | 'slideRight' | 'slide-right' | 'slideUp' | 'slide-up' | 'slideDown' | 'slide-down' | 'flip' | 'flipDown' | 'flip-down' | 'flip-up' | 'flipUp' | 'flipRight' | 'flip-right' | 'flipLeft' | 'flip-left' | 'zoom'</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            color: '#000',\n            animation: 'slide'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>与‘slide’等效的动画名称： 'slide' ｜ 'slide-left' | 'slideLeft'。其他动画效果书写形式等同。</p>\n    <hr />\n    <p>模块未设置动画效果时会默认继承 frameworks 配置中的动画效果。</p>\n    <p><small>注：新开窗口时的默认窗口效果为 slide。</small></p>\n  </template>\n\n  <template id=\"customEffect\">\n    <div class=\"doc-title\">Custom Effect</div>\n    <p>自定义模块的窗口动画效果。</p>\n    <p><small>value: (e: TransformAnimateEvent) => void | Promise<boolean> ｜ </boolean> [(e: TransformAnimateEvent) => void | Promise<boolean>, (e: TransformAnimateEvent) => void | Promise<boolean></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        const getAnimate = (type: number) => {\n          return (e: TransformAnimateEvent) => {\n            let inO: number, outO: number, inV: Animate, outV: Animate\n            switch (type) {\n              case 0:\n                inO = 1\n                outO = 0\n                inV = e.in\n                outV = e.out\n                break\n              case 1:\n              default:\n                inO = 0\n                outO = 1\n                inV = outV = e.in\n            }\n            inV.duration(0).ease('ease-out-expo').to(0, 0, 0).opacity(inO).end(function () {\n              outV.duration(767).opacity(outO).end(function () {\n                e.callback(false)\n              })\n            })\n\n            setTimeout(() => {\n              e.callback(false)\n            }, 1200)\n          }\n        }\n        export default {\n          config: {\n            title: '',\n            free: true,\n            color: '#000',\n            animation: [getAnimate(0), getAnimate(1)]\n          }\n        }\n      </code-highlight>\n      <p><small>TransformAnimateEvent 为自定义动画中提供的可用对象</small></p>\n      <code-highlight type=\"js\">\n        interface TransformAnimateEvent {\n          x: number\n          y: number\n          in: Animate // 切入模块动画类\n          out: Animate // 切出模块动画类\n          view: Array&lt;HTMLElement> // 视图数组\n          width: number\n          height: number\n          viewport: Array&lt;HTMLElement> // 视窗数组\n          modules: Array&lt;Module> // 切换模块数组\n          reverse: boolean // 是否反向流动\n          direction: number // 流动方向，1前进，-1后退\n          backset: number // 流动状态，1前进，-1后退， 0替换\n          origin: string | Array&lt;number> // 触发位置\n          attach: string | Array&lt;number> // 相轴\n          touches: TransformActionOrigin | undefined // 触发 touch 事件\n          historyDirection: number // 浏览器前进后退方向\n          callback: Function // 结束回掉函数，Promise 模式下不需要用到\n        }\n        interface TransformActionOrigin {\n          x: number,\n          y: number\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>数组中的第一个函数为正向动画，第二个函数为逆向动画。如果值为函数，则可通过参数进行动画控制，比如 direction、historyDirection 等。</p>\n    <br />\n    <p>以下为 Slide 动画的源码实现：</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default (type: number) => {\n          return (e: TransformAnimateEvent) => {\n            let inX = 0\n            let outX = 0\n            let inY = 0\n            let outY = 0\n            const duration = 767\n\n            switch (type) {\n              case 0:\n                outY = e.height\n                inY = -outY\n                inX = outX = 0\n                break\n              case 1:\n                inX = e.width\n                outX = -inX\n                inY = outY = 0\n                break\n              case 2:\n                inY = e.height\n                outY = -inY\n                inX = outX = 0\n                break\n              case 3:\n                outX = e.width\n                inX = -outX\n                inY = outY = 0\n                break\n            }\n\n            if (e.reverse) {\n              e.in.duration(0).filter('brightness(0.3)').to(inX * .1, inY * .1, 0).end(() => {\n                e.out.duration(duration).ease('ease-out-expo').to(outX, outY, 0).end()\n                e.in.duration(duration).ease('ease-out-expo').filter('brightness(1)').to(0, 0, 0).end(() => {\n                  e.callback(false)\n                })\n              })\n            } else {\n              e.in.duration(0).to(inX, inY, 0).end(() => {\n                e.in.duration(duration).ease('ease-out-expo').to(0, 0, 0).end(() => {\n                  e.callback(false)\n                })\n                e.out.duration(duration).ease('ease-out-expo').filter('brightness(0.3)').to(outX * .5, outY * .5, 0).end()\n              })\n            }\n\n            setTimeout(() => {\n              e.callback(false)\n            }, duration * 2)\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>我们可以看到通过使用 TransformAnimateEvent 中提供的信息，即可完成 slide 的四个方位的动画效果。</p>\n  </template>\n\n  <template id=\"background\">\n    <div class=\"doc-title\">Background</div>\n    <p>定义模块是否被允许在后台运行。</p>\n    <p><small>value: boolean ｜ 'auto'</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            background: true\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p><b>value = false</b>模块切换动画结束后会被立即销毁。</p>\n    <hr />\n    <p><b>value = true</b>模块不会被销毁（仅当页面 load 成功时）；例外情况是当 timeout 超时时，在启动前会被销毁。</p>\n    <hr />\n    <p><b>value = 'auto'</b>当设置成自动时模块会进行智能的判断是否销毁，当触发以下几种情况时则会被销毁：</p>\n    <ul>\n      <li>页面设置了 src，且不同源时</li>\n      <li>页面中包含了 object、embed、applet、iframe 对象时</li>\n      <li>页面中包含了 video、audio 标签时，且开启智能媒体管理（mediaGuard）时进行自动暂停播放出错时</li>\n      <li>页面中存在节点变动操作在 3 秒钟内超过 10 次时</li>\n      <li>页面中总的节点操作在后台运行超过 1000 次时</li>\n    </ul>\n\n  </template>\n\n  <template id=\"timeout\">\n    <div class=\"doc-title\">Timeout</div>\n    <p>定义模块的有效时常，单位毫秒。</p>\n    <p><small>value: number</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            timeout: 36000\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>页面生命周期的倒计时，页面符合缓存条件或设置为背景运行时，页面在退出并二次进入前会检查过期情况，当检测到模块过期时将会自动进行模块的更新操作。</p>\n    <p><small>注：若该值设置为 0 时，则背景运行（background）将不会生效。</small></p>\n  </template>\n\n  <template id=\"limit\">\n    <div class=\"doc-title\">Limit</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>定义应用最大可缓存在后台的模块数量。</p>\n    <p><small>value: number</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            limit: 7\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>默认为 5, 最大值为 100。其表示为应用中所允许的最多同时后台运行的页面，当超过时会根据访问的先后顺序，对最先访问的模块进行销毁，若模块配置了 background = true 时则不受此影响。</p>\n    <p><small>注：limit 数量将影响应用运行时的内存占用。</small></p>\n  </template>\n\n  <template id=\"resource\">\n    <div class=\"doc-title\">Resource</div>\n    <p>根据资源类型配置资源 url 数组，在预载入时会根据该配置做预载。</p>\n    <p><small>value: number</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        interface ModuleResources {\n          script?: Array&lt;string>\n          image?: Array&lt;string>\n          worker?: Array&lt;string>\n          video?: Array&lt;string>\n          audio?: Array&lt;string>\n          font?: Array&lt;string>\n          style?: Array&lt;string>\n        }\n        export default {\n          config: {\n            title: '',\n            free: true\n          },\n          resource: {\n            script: [\n              'http://xxx.com/js/index.js',\n            ],\n            image: [\n              'http://xxx.com/img/background.jpg',\n            ]\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>Lath 在模块加载前能够根据 prerender 进行静态资源的预载入（如 html 中的 script、css 标签等），但是对于页面后期通过脚本动态加载的内容（如 css 中的 font 字体，某场景的主题素材等）并不能完成预先的载入，此时可通过 resource 选项将可能发生加载的资源进行预载。</p>\n    <p>预载工作并不是立刻执行的，而是在浏览器空闲时按顺序依次载入。</p>\n    <p><small>注：非 ModuleResources 中可匹配的未知类型可尝试使用 script 类型进行预载。</small></p>\n  </template>\n\n  <template id=\"prerender\">\n    <div class=\"doc-title\">Prerender</div>\n    <p>进行模块的预加载&预渲染。</p>\n    <p>当前模块中如果存在链接到其他模块，且希望能预先载入这些模块时，则可进行设置该属性。页面会在空闲时对该属性中配置的模块列表进行后台的预加载，包括文档中的 css 以及 js 等静态资源的预加载。</p>\n    <p><small>value: Array&lt;string></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            prerender: ['module1', 'module2', 'module3']\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>预加载模块一般为当前页面的二级模块页面或相关模块页面，是对用户可能会访问这些预载模块页面的一种预判。</p>\n    <p>当预载执行时，用户点击到该模块的访问时长将大步消减。</p>\n    <p><small>注：prerender 目前在所有浏览器下并无法完成预渲染工作，其当前阶段的能力表述更靠近 “prefetch”，尽管如此，但我们希望在未来能够达到预渲染的能力，因此它依旧保留该选项为 “prerender” 的称呼。</small></p>\n  </template>\n\n  <template id=\"components\">\n    <div class=\"doc-title\">Components</div>\n    <p><b class=\"excl\">受同源策略限制</b></p>\n    <p>属于同源策略的模块页面可与主页面共享 Web Components。</p>\n    <p>Web Components 作为面向未来的组件标准，不仅易于共享也能极大程度上提升页面的体验性能。</p>\n    <p><small>value: ((w: Window) => CustomElementConstructor)[]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            ...\n          },\n          components: [getComponents1, getComponents2, getComponents3]\n        }\n      </code-highlight>\n    </div>\n    <p><small>组件例子</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export const getCodeHighlighter = (shadowWindow): CustomElementConstructor => {\n          class CodeHighlighter extends shadowWindow.HTMLElement {\n            constructor () {\n              super()\n              const shadowRoot = this.attachShadow({ mode: 'open' })\n              shadowRoot.appendChild(tmpl.content.cloneNode(true))\n              ...\n            }\n          }\n\n          return CodeHighlighter as unknown as CustomElementConstructor\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>由于 Web Components 是要共享到各个模块容器内，因此我们封装组件时需要定于组建注册的 window 上下文环境，以便组件能正确的定义在各个容器环境内。</p>\n    <p>\n      <small>注：模块初始化时将进行调用获取组件函数，同时会将注册上下文 Window 传入，同时返回组件对象 CustomElementConstructor 用于在上下文中进行注册。</small>\n    </p>\n  </template>\n\n  <template id=\"mediaGuard\">\n    <div class=\"doc-title\">MediaGuard</div>\n    <p><b class=\"excl\">受同源策略限制</b></p>\n    <p>该设置开启时，会对同源页面中的视频和音频进行智能的管理，当模块隐藏时则自动暂停正在播放的音视频，反之模块可见时则恢复暂停的音视频。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            mediaGuard: true\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>一般场景下，自动媒体管控能帮你自动处理媒体状态，若自动处理失败则会触发 background 失效，将会强制终止模块执行。</p>\n    <hr />\n    <p>不开启此选项，你同样可以通过窗口可见事件进行手动管理 - 请参考 API - Application - Events。</p>\n  </template>\n\n  <template id=\"portal\">\n    <div class=\"doc-title\">Portal</div>\n    <p><b class=\"excl\">受同源策略限制</b></p>\n    <p>设置为 portal 的模块， 其 [free] 选项也应设置为 true。开启该属性的页面在浏览器支持 portal 特性时，在转场动画结束后会执行 portal 的激活操作，激活后页面会转移至全新的浏览器上下文中运行。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            portal: true\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>当浏览器不支持 portal 能力时会自动降级为一般容器模式。</p>\n  </template>\n\n  <template id=\"allowHost\">\n    <div class=\"doc-title\">AllowHost</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>当没有设置 [capture] 时，可通过该配置来过滤掉不需要捕获的 host 地址，反之则会自动进行捕获。</p>\n    <p>该配置主要用于防止通过 url 参数拼接的方式使应用不按预期的访问外域网站，以防止被钓鱼页面寄生。</p>\n    <p>当 frameworks 模块设置了 [capture] 时，则会忽略该配置。</p>\n    <p><small>value: Array&lt;string></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            allowHost: [\n              'aaa.com',\n              'bbb.com',\n              'ccc.com'\n            ]\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>一般模页面中的 A 链接跳转行为会被自动捕获为应用内的新窗口打开，但有时并不希望所有的情况都是如此，因此可通过该选项进行一个有效域的管控，当域不匹配时则不会进行应用内的新窗口打开。</p>\n  </template>\n\n  <template id=\"sandbox\">\n    <div class=\"doc-title\">Sandbox</div>\n    <p>设置容器的沙盒限制。</p>\n    <p><small>value: 'allow-same-origin' | 'allow-scripts' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-popups' | 'allow-pointer-lock' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation' | 'allow-downloads-without-user-activation' | 'allow-storage-access-by-user-activation' | 'allow-top-navigation-by-user-activation'</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            sandbox: 'allow-same-origin allow-top-navigation allow-modals'\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>关于 Sandbox 的更多信息，请参照 W3C 定义。</p>\n  </template>\n\n  <template id=\"capture\">\n    <div class=\"doc-title\">Capture</div>\n    <p>可接受一个 url path，当其他页面中存在跳转地址匹配时会被捕获，并按照该模块配置运行新窗口页面。另外也可接受一个函数，resolve 为捕获的 url 信息，当返回 true 时则表示需要捕获该链接并以新窗口打开。\n      注意：该能力需要在 [apply] 中开启了 link-in-new-window 时有效（默认开启）</p>\n    <p>被捕捉页面需要与主页面保持同源，或被捕捉页接入 Lath，且配置预置参数遂穿模式（tunneling）。</p>\n    <p><small>value: string | ((resolve: { path: string; origin: string; host: string; search: string }, url: string) => boolean]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            capture: (resolve) => {\n              return resolve.path === '/abc/abc'\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>capture 返回 true 时则代表某项链接点击被匹配到该模块上，此时不会打开该链接，而是直接映射为该模块的打开，此时链接参数将映射到应用地址栏中。</p>\n    <p>capture 的前提是在点击前该模块配置已载入，因此若要 capture 能够生效，需要在点击链接前，在上游模块预先设置 prerender 以便在点击前将该模块配置优先载入。亦或者不采用异步方式载入该模块配置。</p>\n  </template>\n\n  <template id=\"apply\">\n    <div class=\"doc-title\">Apply&UnApply</div>\n    <p><b class=\"excl\">受同源策略限制</b></p>\n    <p>在同源模块中将自动执行这些预置的应用：</p>\n    <ul>\n      <li><b>smart-setTimeout</b> 当模块不可见或动画过程中时，所有 setTimeout 会停止执行，相反当模块恢复可见时 setTimeout 也将恢复工作</li>\n      <li><b>smart-setInterval</b> 同 smart-setTimeout</li>\n      <li><b>link-in-new-window</b> 当页面中有 a链接，或 open 方法打开页面时 会自动进行捕捉拦截，并将页面内容生成新模块的形式并进行加载展示；若设置 target='self' 时则会忽略此逻辑；同时可以设置 preset-effect=\"预置动画名\"，clone-as=\"新模块名\"</li>\n      <li><b>tap-highlight</b> 所有 a链接 在点击时会自动添加半透明蒙层高亮提示效果</li>\n      <li><b>['tap-highlight', string]</b> 同 tap-highlight，参数为 attr 的匹配，仅匹配元素才增加高亮效果</li>\n    </ul>\n    <p><small>value: Array&lt;'smart-setTimeout' | 'smart-setInterval' | 'link-in-new-window' | 'tap-highlight' | ['tap-highlight', string]>]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            apply: ['smart-setTimeout', 'link-in-new-window']\n          }\n        }\n      </code-highlight>\n    </div>\n    <hr />\n    <h4>unApply</h4>\n    <p>以上选项默认均开启，若不想开启可使用 unApply 配置项。</p>\n    <p>unApply 同 Apply 选项相对，它将禁止配置中的预置能力。</p>\n  </template>\n\n  <template id=\"events\">\n    <div class=\"doc-title\">Events</div>\n    <p>定义模块事件监听</p>\n    <p><small>value: Array&lt;string></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true\n          },\n          // 注意该项同 config 配置为同级配置，不要混淆\n          events: {\n            transformEnd: () => {\n              // ...\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>通过以下行为事件，可在模块生命周期内进行事件的预先干预：</p>\n    <ul>\n      <li><b>[transformStart: () => void | boolean]</b>  模块转场动画开始， 返回值会停止转场操作</li>\n      <li><b>[transformEnd: () => void]</b> 模块动画转场结束</li>\n      <li><b>[start: () =>void]</b> 配置启动事件</li>\n      <li><b>[load: () =>void]</b> 模块加载事件</li>\n      <li><b>[loadError: () =>void]</b> 模块加载错误事件</li>\n      <li><b>[preload: () =>void]</b> 模块预载事件</li>\n      <li><b>[destroy: () =>void]</b> 模块销毁事件</li>\n    </ul>\n    <p>需要注意的是 transformStart 可选择返回一个布尔值，当为 true 时，模块转场将被终止。</p>\n    <hr />\n    <p>注意：模块配置中的事件都是运行在容器外的，因此也需要对逻辑质量（避免产生副作用）和大小（不建议在此处处理复杂逻辑）进行把控。</p>\n  </template>\n\n  <template id=\"preindex\">\n    <div class=\"doc-title\">Preindex</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>通过链接访问某个模块时，可在之前插入一个前置模块。</p>\n    <p>当页面 url 参数锚定到某个模块时，可以通过该配置设置一个前置模块名，此时访问该 url 链接时会优先在锚定模块前插入该 preindex 配置所前置的模块，当点击浏览器返回时不会立刻退出，而是从锚定模块回退转场到该插入的前置模块。</p>\n    <p><small>value: string | ((resolve: { path: string; origin: string; host: string; search: string }, url: string) => boolean]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            preindex: 'mainPage'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>当访问链接的锚定模块和 [preindex] 或 [index] 相等时则不会在之前再次插入前置模块。</p>\n  </template>\n\n  <template id=\"notFind\">\n    <div class=\"doc-title\">NotFind</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>404 模块，所请求的模块页面不存在时会自动路由到该模块，若未配置时则会自动跳转到名为 404 的模块。</p>\n    <p><small>value: string</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            notFind: 'fund'\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>404 模块主要用于对应用异常访问时的承接及统计等。</p>\n  </template>\n\n  <template id=\"singleFlow\">\n    <div class=\"doc-title\">SingleFlow</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>开启历史层级流向控制。</p>\n    <p>只允许页面的历史方向往 level 较小的模块回退，当进行返回操作时，返回的历史模块的 level 层级若大于或等于当前模块层级，则直接进行历史跳过，再次进入到前一个历史的回退，直至条件符合。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            singleFlow: true\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>例如：从生成订单模块的到支付订单模块再到我的订单模块，其在完成后进行回退时可选择直接回到订单生成前页面，而无需经过订单完成过程中的各个模块页面。</p>\n  </template>\n\n  <template id=\"singleLock\">\n    <div class=\"doc-title\">SingleLock</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>当页面回退到程序出口（level === 0 的模块）时，进行返回操作时不会继续回退，而是会开始记录回退次数，并 trigger 给 frameworks 中的 [holdBack] 事件来决定是否允许退出。</p>\n    <p>需要注意的是，如果用户访问 lath 容器页时没有进行任何点击跳转操作则将直接退出应用，除非页面设置了[preindex] 配置，且配置有效。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            singleLock: true,\n            holdBack: (event) => {\n              // 判断是否退出\n              return true\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>如上配置，从其他页面跳转进入到应用时，当点击浏览器返回按钮是并不会退出应用页面，而是会通过 [holdBack] 配置进行判断是否应该被退出，并同时返回用户点击返回按钮的次。</p>\n  </template>\n\n  <template id=\"holdBack\">\n    <div class=\"doc-title\">HoldBack</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>需配合 [singleLock] 开启时有效，当用户进行返回操作，且页面即将退出时，会通过该函数（如果被阻止，backCount 为点击返回的次数）进行校验，返回 true 时为阻止应用页面退出，否则会允许应用的直接退出。</p>\n    <p><small>value: (backCount： number) => boolean]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            singleLock: true,\n            holdBack: (event) => {\n              // 判断是否退出\n              return true\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>如上配置，从其他页面跳转进入到应用时，当直接点击浏览器返回按钮时，则会直接退回到点击来源页，但是若进入应用后未直接返回而是进行了二级页面跳转，此时再继续点击返回时，多次返回则并不会直接退出应用页面，而是会通过 [holdBack] 配置进行判断是否应该被退出，并同时返回用户点击返回按钮的次。</p>\n  </template>\n\n  <template id=\"transient\">\n    <div class=\"doc-title\">Transient</div>\n    <p>标记该模块为临时模块，在切换到后台时，模块不仅会被销毁，同时模块配置数据也将一并被删除，无特殊情况下一般无需单独配置。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            free: true,\n            transient: true\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>通过新窗口打开（A链接 或 API - pushWindow）的 url 类型模块（即无自定义配置的临时模块），会被自动进行该标记。</p>\n    <hr />\n    <p>通过 pushWindow 而打开的模块一般都是没有进行模块配置定义的，因此容器将会为其生成一个临时配置，同时在销毁时对该配也一并销毁。若有特殊需求对某模块销毁时希望一并销毁其配置时则可进行该标记。（比如广告模块）</p>\n    <h4>DisableTransient</h4>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>DisableTransient 和 Transient 相呼应，可通过此参数来关闭默认的 Transient 行为。</p>\n    <p>这是因为在某些情况下，模块不需要定义任何配置（或开发者懒于设置），因此 pushWindow 内容并不非是一个临时模块，因此无需控制被无限枚举的情况，所以可无需自动删除生成的模块配置。</p>\n  </template>\n\n  <template id=\"moduleManifestProcess\">\n    <div class=\"doc-title\">ModuleManifestProcess</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>当模块载入时，模块配置会先经此函数处理再返回。</p>\n    <p><small>value: (config：ModuleManifest)=> ModuleManifest]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            moduleManifestProcess: (manify) => {\n              ... 处理\n              return newManify\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>\n      由于模块配置是可异步载入的，对于模块中配置的规范性可能不便处理，此时可通过该配置对所有模块配置进行一个统一的重定义。\n    </p>\n  </template>\n\n  <template id=\"touchBorder\">\n    <div class=\"doc-title\">TouchBorder</div>\n    <p>设置时模块的边缘触摸事件会得到监听，比如双击模最块顶部执行回到顶部的操作，触摸模块的最左侧可用来执行模块的跟手动画等等。</p>\n    <p><small>value: (types: string[], event: TouchEvent) => void</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            touchBorder: (types, event) => {\n              ... 处理模块跟手效果/或点击顶部回到顶部效果\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>事件回调的 types 表示 TouchBorder 事件开始的起始位置，其为一个数组，包含 'top','right','bottom','left','wipe'等 5 个方位的触发位置。</p>\n  </template>\n\n  <template id=\"inject\">\n    <div class=\"doc-title\">Inject</div>\n    <p><b class=\"excl\">受同源策略限制</b></p>\n    <p>当同源模块时可在页面载入前对页面注入默认的功能和方法，比如提前注入一些 bridge 方法，通用变量，改写一些全局对象等等。</p>\n    <p><small>value: (w: Window, m: Module) => void]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            inject: (moduleWindow, module) => {\n              ...\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>可在容器运行前对一些基础环境变量和方法做前置操作。</p>\n    <hr />\n    <p>同时也可以自制插件和解决方案来对特定场景页面定制专属容器。</p>\n  </template>\n\n  <template id=\"render\">\n    <div class=\"doc-title\">Render</div>\n    <p>除了 source 模式外还可以通过 render 方法来渲染元素到对应的节点上，可供系统模块和框架模块使用。</p>\n    <p><small>value: (target: HTMLElement) => void]</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            render: (target) => {\n              ...\n              target.appendChild(...)\n              // or ReactDOM.render(&lt;App />, target)\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>此渲染方案不推荐普通模块使用。</p>\n  </template>\n\n  <template id=\"safeArea\">\n    <div class=\"doc-title\">SafeArea</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>设定应用的安全边距。</p>\n    <p><small>value: string | Array&lt;string></small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            safeArea: ['44px', '0px', '0px', '0px']\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>值为数字时，分别按顺序表示 顶部、右侧、底部、左侧 的安全边距。</p>\n    <p>设置该值后将会在符合同域原则下的模块中注入 CSS 全局变量：--application-safe-area-top、--application-safe-area-right、--application-safe-area-bottom、--application-safe-area-left 四个对应的安全边际值。</p>\n    <p>如果需要动态的修改这个值则可以通过发送 “safeAreaChange” 事件来进行更新。</p>\n    <p><small>例如:</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.trigger('safeAreaChange'，['88px', '0px', '0px', '0px'])\n      </code-highlight>\n    </div>\n    <p>该配置能对刘海屏设备能够进行一个统一的边距控制。</p>\n  </template>\n\n  <template id=\"globalCSSVariables\">\n    <div class=\"doc-title\">GlobalCSSVariables</div>\n    <p><b class=\"excl\">frameworks 类型专有</b></p>\n    <p>设定应用的全局 CSS 变量。</p>\n    <p><small>value: { [key: string]: string }</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        export default {\n          config: {\n            title: '',\n            globalCSSVariables: {\n              '---common-background-color': '#fff',\n              '---common-button-color': 'blue',\n            }\n          }\n        }\n      </code-highlight>\n    </div>\n    <p>与 [safeArea] 类似，同样只能在同域原则下有效，与其相比具有能力覆盖的效果。</p>\n    <p>如果需要动态的修改或增加这个值则可以通过发送 “globalCSSVariablesChange” 事件来进行更新。</p>\n    <p><small>例如:</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.trigger('globalCSSVariablesChange'，{\n          '---common-button-color': 'red'\n        })\n      </code-highlight>\n    </div>\n    <p>当动态变量发生变化时仅对新执行模块有效。</p>\n  </template>\n\n  <template id=\"tunneling\">\n    <div class=\"doc-title\">Tunneling</div>\n    <p><b class=\"excl\">应用的预配置专项</b></p>\n    <p>设定应用为“隧穿模式”。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        new Application({\n          tunneling: true\n        })\n      </code-highlight>\n    </div>\n    <br/>\n    <p>若在 A 域下访问 B 域下的模块页面，此时会因同源策略将导致 B 域页面无法实现 [Apply] 新开窗口等能力。因此可通过将 B 页面也同样接入 Lath，并开启 [tunneling] 来解决无法在跨域页面新开窗口的问题。 </p>\n    <hr />\n    <p>当页面接入 Lath 且开启 [tunneling] 时，页面本身即为一个单独应用，但当该页面在另一个 Lath 应用被访问时，其通过 A链接（即 pushWindow）打开的页面将不在本应用内打开，而是将跳出该跨域页，上升到父级 Lath 应用进行打开。若父级应用也是被访问的 Lath 应用，且也开启了 [tunneling] 则会继续向上“隧穿”。</p>\n    <hr />\n    <p>注意：该选项是在应用启动时的初始化前配置，请注意和其他章节中的模块配置进行区分。</p>\n  </template>\n\n  <template id=\"zIndex\">\n    <div class=\"doc-title\">ZIndex</div>\n    <p><b class=\"excl\">应用的预配置专项</b></p>\n    <p>框架默认起始显示层级。</p>\n    <p><small>value: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        new Application({\n          zIndex: 1000\n        })\n      </code-highlight>\n    </div>\n    <br/>\n    <p>当使用 [unuseShadowDom] 禁用 ShadowDom 模式时，你的模块可能会受到未进行 ShadowDom 化的层级元素影响。为避免遮盖可通过设置初始层级来解决这个问题。</p>\n    <p>注意：该选项是在应用启动时的初始化前配置，请注意和其他章节中的模块配置进行区分。</p>\n  </template>\n\n  <template id=\"unuseShadowDom\">\n    <div class=\"doc-title\">UnuseShadowDom</div>\n    <p><b class=\"excl\">应用的预配置专项</b></p>\n    <p>框架默认不使用 ShadowDom 模式。</p>\n    <p>关于 ShadowDom 的更多信息，请查看 W3C 的介绍。</p>\n    <p><small>unuseShadowDom: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        new Application({\n          unuseShadowDom: true\n        })\n      </code-highlight>\n    </div>\n    <br/>\n    <p>默认情况下 ShadowDom 模式是自动开启的，若你通过 createApplication 进行预置的模块节点直接移动到 ShadowDom 中会难免的缺失某些依赖时（比如一些全局的脚本操作和动态注入的全局样式等），此时可通过此选项关闭 ShadowDom 来解决此问题。</p>\n    <p>注意：该选项是在应用启动时的初始化前配置，请注意和其他章节中的模块配置进行区分。</p>\n  </template>\n\n  <!-- API exists -->\n  <template id=\"applicationExists\">\n    <div class=\"doc-title\">Application.exists</div>\n    <p>取得当前页面是否为首次载入的历史序列上。</p>\n    <p><small>return: boolean</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.start()\n        // 还包括任何可读取 application 实力的地方，比如 inject 中\n        console.log(application.exists)\n      </code-highlight>\n    </div>\n    <p>例如当你访问链接进去时，首次载入页面将会记录当前历史节点的位置，凡事发生页面活动后都可以检测当前位置是否发生变动，如果该值为 false，则表示历史已经发生变化。</p>\n    <p>该方法仅记录初次载入的节点位置，例如你在任何页面发生浏览器刷新都会导致该节点重新标记位置。</p>\n  </template>\n\n  <template id=\"applicationTo\">\n    <div class=\"doc-title\">Application.to</div>\n    <p>转场到指定模块页面</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        declare interface TransformActionOrigin {\n          x: number,\n          y: number\n        }\n        type TransformToOptions = [\n          id: string,\n          param?: string,\n          history?: -1 | 0 | 1,\n          touches?: TouchEvent | TransformActionOrigin\n        ]\n      </code-highlight>\n    </div>\n    <p><small>Arguments: TransformToOptions</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.to('home', '?id=100', 1)\n      </code-highlight>\n    </div>\n    <p>history 为 -1 时不推入或替换历史，为 0 时替换当前历史，为 1 时推入新的历史。</p>\n    <p>touches 为发生点击行为的元素点击的 TouchEvent 对象，或直接定义的发生事件 x, y 坐标值的 TransformActionOrigin 对象，用做某些需要根据起始位置而发生的转场动画。</p>\n  </template>\n\n  <template id=\"applicationPushWindow\">\n    <div class=\"doc-title\">Application.pushWindow</div>\n    <p>转场到指定模块或 url 的页面</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        type pushWindowOtions = [\n          url: string,\n          title = '',\n          preset = 'slide',\n          cloneAs?: string,\n          touches?: TouchEvent | TransformActionOrigin\n        ]\n      </code-highlight>\n    </div>\n    <p><small>Arguments: pushWindowOtions</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.pushWindow('home', '首页', 'zoom', 'newHome')\n      </code-highlight>\n    </div>\n    <br />\n    <p>同 Application.to 相似，pushWindow 的第一个参数依然可以传入一个模块名，以此来打开一个新的模块页面。</p>\n    <hr />\n    <p>不同的是 pushWindow 还可以接受一个 url 作为新窗口的参数，就像下面这样：</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.pushWindow('https://yoursite.com/newHome', '首页', 'zoom')\n      </code-highlight>\n    </div>\n    <br />\n    <p>可定义参数如下：</p>\n    <ul>\n      <li><b>cloneAs</b> 表示将该模块重新命名为一个新的副本，此时该新副本不会替换原有模块实例，而是作为一个新命名的模块存在。当页面链接映射到某个模块时，多个映射链接将根据映射模块的配置作为模板分别生成新的模块。</li>\n      <li><b>preset</b> 则表示该模块被打开时所执行的内置动画效果。</li>\n      <li><b>title</b> 为新页面的 title 名称。</li>\n      <li><b>touches</b> 同 Application.to 部分。</li>\n      <li><b>url</b> 打开新页面的 url。url 目标页面也将会受到捕捉[capture]逻辑的影响，弱被捕捉则执行打开匹配捕捉的模块 i，否则打开 url 页面。</li>\n    </ul>\n    <h4>容器内调用</h4>\n    <p>注意：pushWindow 是 Application 的方法，因此只能在一些可获得 Application 对象的场景下调用，若直接在容器内使用时，可直参照如下：</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        // 关于 Types 请参照 API - Types 描述\n        type PushWindowOptions = [\n          url: string,\n          title: string,\n          preset: string,\n          cloneAs?: string,\n          touches?: TouchEvent | TransformActionOrigin\n        ]\n        parent.postMessage({\n          action: 'pushWindow',\n          data: ['https://xxx.com/', 'title'] as PushWindowOptions\n        })\n      </code-highlight>\n    </div>\n  </template>\n\n  <template id=\"applicationUpdateSafeArea\">\n    <div class=\"doc-title\">Application.updateSafeArea</div>\n    <p><b class=\"excl\">受同源策略限制</b></p>\n    <p>更新应用的安全边距</p>\n    <p>其初始值请参照模块配置项 [safeArea]</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.updateSafeArea(['48px', 0, '60px', 0])\n      </code-highlight>\n    </div>\n    <br />\n    <p>执行更新时，所有生命周期内的模块都将进行实时的更新渲染。</p>\n    <hr />\n    <p>updateSafeArea 参数为一个数组，同 CSS Margin 一样通过顺时针枚举表达，如以下几种写法均可：</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.updateSafeArea(['48px', 0, '60px', 0])\n        application.updateSafeArea(['48px', 0, '60px'])\n        application.updateSafeArea(['60px', 0])\n        application.updateSafeArea(['48px'])\n      </code-highlight>\n    </div>\n    <br />\n    <p>在应用中安全距离并不一定指系统默认刘海屏等，比如有时候框架设计的头部导航区域也希望作为模块的安全避让，当框架交互发生变化时，可通过该方法控制各容器的显示逻辑。</p>\n    <hr />\n    <h4>非同源页面</h4>\n    <p>\n      非同源页面不受此控制，但可通过自行建立 postMessage 来同步次操作。另外，在 Application 可通过监听 “safeAreaChange” 事件来监测改变。\n    </p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.on('safeAreaChange', (data) => {\n          console.log(data)\n          // module 为跨域页面模块\n          // module.view 为跨域页面 iframe\n          module.view.postMessage({\n            action: 'safeAreaChange',\n            data\n          }, '*')\n        }\n      </code-highlight>\n    </div>\n    <br />\n    <p>\n      <small>注：在配置中的 events 定义函数中以及通过 Application.get 等方法都可直接获取指定模块对象 Module。</small>\n    </p>\n  </template>\n\n  <template id=\"applicationUpdateGlobalCSSVariables\">\n    <div class=\"doc-title\">Application.updateGlobalCSSVariables</div>\n    <p><b class=\"excl\">受同源策略限制</b></p>\n    <p>更新应用的全局 CSS 变量</p>\n    <p>其初始值请参照模块配置项 [globalCSSVariables]</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.updateGlobalCSSVariables({\n          '---common-button-color': '#000000',\n          '---common-button-width': '100%',\n        })\n      </code-highlight>\n    </div>\n    <br />\n    <p>执行更新时，所有生命周期内的模块都将进行实时的更新渲染。</p>\n    <hr />\n    <h4>非同源页面</h4>\n    <p>跨域模块页面需要自行处理，处理方法请参考 Application.updateSafeArea 相关介绍。</p>\n  </template>\n\n  <template id=\"applicationStart\">\n    <div class=\"doc-title\">Application.start</div>\n    <p><b class=\"excl\">受同源策略限制</b></p>\n    <p>启动应用</p>\n    <p>在 start 章节已有描述，该方法没有任何入参，执行次函数即意味着立刻初始化所有配置，并启动应用。</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.start()\n      </code-highlight>\n    </div>\n    <br />\n    <p><small>注：这意味着你的应用也可以选择在合适的时机才开始启动。</small></p>\n  </template>\n\n  <template id=\"applicationEvents\">\n    <div class=\"doc-title\">Application Events</div>\n    <p>常用事件监听</p>\n    <p>此处为应用事件监听，请注意同模块配置项 [events] 配置进行区分。</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.on('eventName', (...args) => {\n          console.log(...args)\n        })\n      </code-highlight>\n    </div>\n    <br />\n    <p>\n      常用事件有：\n    </p>\n    <ul>\n      <li><b>systemDidMount</b> 系统模块初始化已完成</li>\n      <li><b>frameworksDidMount</b> 框架模块初始化已完成</li>\n      <li><b>globalCSSVariablesChange</b> 全局样式变量更新事件</li>\n      <li><b>safeAreaChange</b> 安全边界更新事件</li>\n    </ul>\n  </template>\n\n  <!-- activeModule -->\n  <template id=\"applicationActiveModule\">\n    <div class=\"doc-title\">Application.activeModule</div>\n    <p>获取当前活动模块对象 Module</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        console.log(app.activeModule)\n      </code-highlight>\n    </div>\n    <p>例如当前页面为 home 模块，那么执行后将获得 home 模块的 Module 对象。</p>\n  </template>\n\n  <template id=\"applicationPreActiveModule\">\n    <div class=\"doc-title\">Application.preActiveModule</div>\n    <p>获取一个活动模块对象 Module</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        console.log(app.preActiveModule)\n      </code-highlight>\n    </div>\n    <p>例如现在页面为 home 模块，然后我点击进入了 detail 模块，那么此时执行后将获得 home 模块的 Module 对象。</p>\n  </template>\n\n  <template id=\"applicationGet\">\n    <div class=\"doc-title\">Application.get</div>\n    <p>获得一个指定 id 的模块对象 Module</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.get('home').then((module) => {\n          console.log(module)\n        }).catch((error) => {\n          console.error(error)\n        })\n      </code-highlight>\n    </div>\n    <br />\n    <p>该方法返回一个 Promise 对象。</p>\n    <hr />\n    <h4>add</h4>\n    <p>通过 add 方法你也可以增加模块配置信息，如下：</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.add('home', {\n          config: {\n            ...\n          }\n        })\n      </code-highlight>\n    </div>\n    <br />\n    <p>第一个参数为模块名，第二个参数为模块配置 Manifest 描述。</p>\n    <p>注：当添加的模块名冲突时，添加不会生效，并返回冲突模块对象。</p>\n    <hr />\n    <h4>del</h4>\n    <p>通过 del 方法你也可以从应用中删除某个模块配置信息，如下：</p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        application.del('home')\n      </code-highlight>\n    </div>\n    <br />\n    <p>该方法返回一个 Promise 对象。</p>\n    <p>若模块已完成初始化，del 方法同时也将对模块进行销毁回收，并返回操作结果。</p>\n  </template>\n\n  <template id=\"applicationInstall\">\n    <div class=\"doc-title\">Application.install</div>\n    <p>通过 ServiceWorker 安装应用。</p>\n    <p>ServiceWorker 能加速你应用的二次访问速度，并在弱网甚至无网环境下可打开。</p>\n    <p><small>(options: ServiceWorkerInstallConfig, version: string) => void</small></p>\n    <div class=\"doc-code\">\n      <code-highlight type=\"js\">\n        declare interface ServiceWorkerInstallConfig {\n          swPathUrl?: string\n          scope?: string\n          source?: Array&lt;string>\n        }\n        const options:ServiceWorkerInstallConfig = {}\n        application.install(options)\n      </code-highlight>\n    </div>\n    <br />\n    <p>关于 ServiceWorker 请参照 W3C 介绍。</p>\n  </template>\n\n</div>\n\n<script>\n  const header = document.getElementById('header')\n  const page = document.getElementById('page-content')\n  const show = () => {\n    const id = /id\\=(\\w+)/.exec(parent.location.search)?.[1]\n    const currentEl = document.getElementById(id)\n    if (page && currentEl) {\n      page.innerHTML = currentEl.innerHTML\n    }\n    header.style.opacity = '1'\n  }\n  window.addEventListener('message', (e) => {\n    if (e.data.type === 'module-will-show') {\n      show()\n    } else if (e.data.type === 'module-will-hidden') {\n      header.style.opacity = '0'\n    }\n  })\n  show()\n</script>\n"

/***/ }),

/***/ "./src/empty/html.html":
/*!*****************************!*\
  !*** ./src/empty/html.html ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<style>\nhtml {\n  font-size: 1vmin;\n  background: radial-gradient(#bd243f, #190d23);\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  padding-top: calc(20px + constant(safe-area-inset-top));\n  padding-top: calc(20px + env(safe-area-inset-top));\n}\n.header-inner {\n  display: flex;\n  max-width: 500px;\n  padding: 0 20px;\n}\n.placeholder {\n  width: 100%;\n  height: calc(50px + constant(safe-area-inset-top));\n  height: calc(50px + env(safe-area-inset-top));\n}\n.back-btn {\n  display: flex;\n  height: 21px;\n  cursor: pointer;\n}\n.back-icon {\n  width: 21px;\n  height: 21px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMTJweCcgaGVpZ2h0PScyMnB4JyB2aWV3Qm94PScwIDAgMTIgMjInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PHRpdGxlPlBhdGg8L3RpdGxlPjxnIGlkPSdTeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz48ZyBpZD0nT3ZlcnJpZGVzL05hdmlnYXRpb24tQmFyL0xlZnQvQmFjay1CdXR0b24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC05LjAwMDAwMCwgLTExLjAwMDAwMCknIGZpbGw9JyMwMDdBRkYnIGZpbGwtcnVsZT0nbm9uemVybyc+PGcgaWQ9J1Bpbi1MZWZ0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg5LjAwMDAwMCwgMTEuNTAwMDAwKSc+PHBhdGggZD0nTTMuNjIxMzIwMzQsMTAuNSBMMTEuNTYwNjYwMiwyLjU2MDY2MDE3IEMxMi4xNDY0NDY2LDEuOTc0ODczNzMgMTIuMTQ2NDQ2NiwxLjAyNTEyNjI3IDExLjU2MDY2MDIsMC40MzkzMzk4MjggQzEwLjk3NDg3MzcsLTAuMTQ2NDQ2NjA5IDEwLjAyNTEyNjMsLTAuMTQ2NDQ2NjA5IDkuNDM5MzM5ODMsMC40MzkzMzk4MjggTDAuNDM5MzM5ODI4LDkuNDM5MzM5ODMgQy0wLjE0NjQ0NjYwOSwxMC4wMjUxMjYzIC0wLjE0NjQ0NjYwOSwxMC45NzQ4NzM3IDAuNDM5MzM5ODI4LDExLjU2MDY2MDIgTDkuNDM5MzM5ODMsMjAuNTYwNjYwMiBDMTAuMDI1MTI2MywyMS4xNDY0NDY2IDEwLjk3NDg3MzcsMjEuMTQ2NDQ2NiAxMS41NjA2NjAyLDIwLjU2MDY2MDIgQzEyLjE0NjQ0NjYsMTkuOTc0ODczNyAxMi4xNDY0NDY2LDE5LjAyNTEyNjMgMTEuNTYwNjYwMiwxOC40MzkzMzk4IEwzLjYyMTMyMDM0LDEwLjUgWicgaWQ9J1BhdGgnPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.back-text {\n  line-height: 23px;\n  font-size: 17px;\n  color: #007AFF;\n}\n\n@media (min-width: 500px) {\n  html {\n    font-size: 5px;\n  }\n}\nbody {\n  color: #190d23;\n  font-size: 12rem;\n  padding: 1rem;\n  font-family: \"Courier New\";\n  overflow: hidden;\n  margin: 0;\n  padding-top: 20vh;\n}\n\nscreen,\nscreen *,\nscreen *:before,\nscreen *:after {\n  box-sizing: border-box;\n  content: \"\";\n  display: block;\n  transform-style: preserve-3d;\n  position: relative;\n  perspective: 200rem;\n}\n\ncard {\n  margin: auto;\n  height: 96rem;\n  width: 64.5rem;\n  background: #fff;\n  border-radius: 5rem;\n  transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0) rotate(1deg);\n  position: relative;\n  animation: rotate 3s linear;\n}\ncard *, card *:before, card *:after, card:before, card:after {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\ncard:before, card:after {\n  width: 100%;\n  height: 100%;\n  transform: translate3d(0, 0, -0.2rem) rotateY(180deg);\n  border-radius: 5rem;\n  animation: light 3s linear;\n  box-shadow: inset 0 0 1rem rgba(25, 13, 35, 0.5);\n  background-image: linear-gradient(to right bottom, rgba(25, 13, 35, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(25, 13, 35, 0.3));\n}\ncard:after {\n  transform: translate3d(0, 0, 0.2rem) rotateY(0deg);\n  animation: light 3s linear reverse;\n}\n\nback {\n  box-shadow: 0 0 0 1rem #302e9b, inset 0 0 0 1rem #302e9b, inset 0 0 0 2rem #f5e3e3;\n  border-radius: 1rem;\n  height: 93%;\n  width: 90%;\n  border: 2rem solid rgba(255, 255, 255, 0);\n  background-position: 0.9rem 0.99rem;\n  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 0.99rem, #302e9b 0.99rem, #302e9b 1.98rem), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 0.99rem, #302e9b 0.99rem, #302e9b 1.98rem);\n  transform: translate3d(0, 0, -0.1rem) rotateY(180deg);\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n\nshadow {\n  margin: auto;\n  height: 100rem;\n  width: 70rem;\n  background: radial-gradient(#190d23, rgba(255, 255, 255, 0));\n  background: #190d23;\n  border-radius: 10rem;\n  position: relative;\n  animation: shadow 3s linear;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(0deg) skewY(0) scale(1);\n  opacity: 0.2;\n  box-shadow: 0 0 2vmin #190d23, 0 0 5vmin #190d23;\n}\n\nhoverspace {\n  height: 100%;\n  width: 50rem;\n  position: absolute;\n  transform: translate3d(0, 0, 50rem);\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  cursor: grab;\n}\nhoverspace:hover ~ card {\n  animation: rotatehover 3s linear;\n}\nhoverspace:hover ~ card:before, hoverspace:hover ~ card:after {\n  animation: lighthover 3s linear;\n}\nhoverspace:hover ~ card:after {\n  animation: lighthover 3s linear reverse;\n}\nhoverspace:hover ~ shadow {\n  animation: shadowhover 3s linear;\n}\n\n@keyframes rotate {\n  100% {\n    transform: translate3d(0, 0, 0) rotate3d(1, 1, 0, -360deg) rotate(1deg);\n  }\n}\n@keyframes rotatehover {\n  100% {\n    transform: translate3d(0, 0, 0) rotate3d(1, 1, 0, -360deg) rotate(1deg);\n  }\n}\n@keyframes light {\n  0%, 100%, 50% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n  25% {\n    background-color: rgba(245, 227, 227, 0.7);\n  }\n  75% {\n    background-color: #190d23;\n  }\n}\n@keyframes lighthover {\n  0%, 100%, 50% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n  25% {\n    background-color: rgba(245, 227, 227, 0.7);\n  }\n  75% {\n    background-color: #190d23;\n  }\n}\n@keyframes shadow {\n  25% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(-90deg);\n    opacity: 0;\n  }\n  50% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(0);\n    opacity: 0.2;\n  }\n  75% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(90deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(180deg) skewY(0);\n    opacity: 0.2;\n  }\n}\n@keyframes shadowhover {\n  25% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(-90deg);\n    opacity: 0;\n  }\n  50% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(0);\n    opacity: 0.2;\n  }\n  75% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(90deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(180deg) skewY(0);\n    opacity: 0.2;\n  }\n}\nfront {\n  transform: translate3d(0, 0, 0.1rem) rotateY(0deg);\n  height: 100%;\n  width: 100%;\n}\nfront > * {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\nfront > * > *:nth-of-type(1) {\n  transform: translate3d(2rem, 13rem, 0) scaleX(0.7);\n  height: 4rem;\n  width: 4rem;\n  background: #b32b28;\n  border-radius: 50%;\n  box-shadow: 3.25rem 0 0 #b32b28;\n}\nfront > * > *:nth-of-type(1):before {\n  transform: translate3d(1.7rem, 1.7rem, 0) rotate(45deg);\n  background: #b32b28;\n  width: 4rem;\n  height: 4rem;\n}\nfront > * > *:nth-of-type(1):after {\n  content: \"K\";\n  color: #b32b28;\n  transform: translate3d(0, -12rem, 0);\n}\nfront > * > *:nth-of-type(2) {\n  border: 0.5rem solid #302e9b;\n  width: 68%;\n  height: 79.5%;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(6) {\n  background: #bdb725;\n  box-shadow: inset 0 0 0 0.1rem #fff, inset 0 0 0 0.6rem #302e9b;\n  width: 30rem;\n  height: 30rem;\n  transform: translate3d(7rem, -23rem, 0) rotate(37deg) skewY(20deg);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(6):after {\n  background: #fff;\n  width: 40rem;\n  height: 10rem;\n  border-radius: 50%;\n  transform: translate3d(4rem, 25.5rem, 0) rotate(-50deg);\n  box-shadow: 0 0 0 1.5rem #190d23;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(6):before {\n  width: 1.5rem;\n  height: 1.5rem;\n  transform: translate3d(16.5rem, 26.5rem, 0) rotate(-1deg);\n  background: #190d23;\n  box-shadow: 0 0 0 1.5rem #bdb725, 0 0 0 2rem #190d23, 5rem -5rem 0 #190d23, 5rem -5rem 0 1.5rem #bdb725, 5rem -5rem 0 2rem #190d23, 10rem -10rem 0 #190d23, 10rem -10rem 0 1.5rem #bdb725, 10rem -10rem 0 2rem #190d23;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(8) {\n  transform: translate3d(0.5rem, 2.5rem, 0) scaleX(0.7);\n  height: 8rem;\n  width: 8rem;\n  background: #b32b28;\n  border-radius: 50%;\n  box-shadow: 6.5rem 0 0 #b32b28;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(8):before {\n  transform: translate3d(3.25rem, 3.25rem, 0) rotate(45deg);\n  background: #b32b28;\n  width: 8rem;\n  height: 8rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) {\n  width: 40rem;\n  height: 20rem;\n  transform: translate3d(-0.5rem, 6.5rem, 0);\n  border-radius: 50%;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7):after {\n  width: 5rem;\n  height: 14rem;\n  border-radius: 3rem;\n  transform: translate3d(21.5rem, -1rem, 0) rotate(-20deg) skewY(-10deg);\n  box-shadow: 0.4rem 0.4rem 0 #302e9b, 1rem 0.8rem 0 #fff, 1.4rem 1.2rem 0 #302e9b, 2rem 1.6rem 0 #fff, 2.4rem 2rem 0 #302e9b, 3rem 2.4rem 0 #fff, 3.4rem 2.8rem 0 #302e9b, 4rem 3.2rem 0 #fff, 4.4rem 3.6rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7):before {\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  transform: translate3d(13.35rem, 7.85rem, 0);\n  border-radius: 50%;\n  box-shadow: 0.4rem 0 0 #302e9b, 0.4rem 0.4rem 0 0.3rem #fff, 0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(1) {\n  width: 3rem;\n  height: 14rem;\n  border-radius: 2rem;\n  transform: translate3d(15rem, -4rem, 0) rotate(25deg);\n  box-shadow: 0.4rem 0.4rem 0 #302e9b, 1rem 0.8rem 0 #fff, 1.4rem 1.2rem 0 #302e9b, 2rem 1.6rem 0 #fff, 2.4rem 2rem 0 #302e9b, 3rem 2.4rem 0 #fff, 3.4rem 2.8rem 0 #302e9b, 4rem 2.3rem 0 #fff, 4.4rem 2.6rem 0 #302e9b, 5rem 2rem 0 #fff, 5.4rem 2.1rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(1):after {\n  background: #fff;\n  width: 10.8rem;\n  height: 12rem;\n  border-radius: 5rem 0 60% 2rem/1.25rem 0 60% 5rem;\n  transform: translate3d(1.5rem, 1rem, 0) rotate(-29deg);\n  box-shadow: -0.4rem -0.3rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(1):before {\n  width: 7rem;\n  height: 10rem;\n  border-radius: 2.5rem;\n  transform: translate3d(6.5rem, 4rem, 0) rotate(-55deg);\n  border: 0.4rem solid #fff;\n  box-shadow: 0 0 0 0.4rem #302e9b, inset 0 0 0 0.4rem #302e9b, inset 0.5rem 0 0 0.4rem #fff, inset 0.9rem 0 0 0.4rem #302e9b, inset 1.4rem 0.2rem 0 0.4rem #fff, inset 1.8rem 0.2rem 0 0.4rem #302e9b, inset 2.3rem 0.4rem 0 0.4rem #fff, inset 2.7rem 0.4rem 0 0.4rem #302e9b, inset 3.2rem 0.8rem 0 0.4rem #fff, inset 3.6rem 0.8rem 0 0.4rem #302e9b, inset -0.5rem 0 0 0.4rem #fff, inset -0.9rem 0 0 0.4rem #302e9b, inset -1.4rem 0.2rem 0 0.4rem #fff, inset -1.8rem 0.2rem 0 0.4rem #302e9b, inset -2.3rem 0.4rem 0 0.4rem #fff, inset -2.7rem 0.4rem 0 0.4rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(2) {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #fff;\n  transform: translate3d(25rem, 10.65rem, 0);\n  border-radius: 50%;\n  box-shadow: 0.4rem 0 0 #302e9b, 0.4rem 0.4rem 0 0.4rem #fff, 0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(2):after {\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  transform: translate3d(-1.5rem, 1.2rem, 0) rotate(-70deg);\n  border-radius: 50%;\n  box-shadow: -0.4rem 0 0 #302e9b, -0.4rem 0.4rem 0 0.4rem #fff, -0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(2):before {\n  width: 0.75rem;\n  height: 0.75rem;\n  background: #fff;\n  transform: translate3d(-11.25rem, -7rem, 0) rotate(-50deg);\n  border-radius: 50%;\n  box-shadow: 0.4rem 0 0 #302e9b, 0.4rem 0.4rem 0 0.3rem #fff, 0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(4) {\n  width: 3rem;\n  height: 1rem;\n  border-radius: 50%;\n  border-top: 0.4rem solid #302e9b;\n  transform: translate3d(21rem, 1rem, 0);\n  box-shadow: -5rem 0.4rem 0 #fff, -5.5rem 0 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(4):after {\n  width: 0.3rem;\n  height: 2rem;\n  background: #302e9b;\n  transform: translate3d(-2.65rem, 0, 0) rotate(-15deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(4):before {\n  width: 2.5rem;\n  height: 5rem;\n  border-radius: 2rem;\n  transform: translate3d(-2.5rem, 1.25rem, 0) rotate(15deg) skewY(-10deg);\n  box-shadow: -0.2rem 0.3rem 0 #302e9b;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(5) {\n  width: 0.6rem;\n  height: 0.6rem;\n  background: #302e9b;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.5rem #fff, 0 0 0 0.8rem #302e9b;\n  transform: translate3d(21.5rem, 3rem, 0) rotate(5deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(5):before {\n  width: 3.5rem;\n  height: 3rem;\n  border-radius: 50%;\n  border-top: 0.4rem solid #302e9b;\n  transform: translate3d(-1rem, -0.4rem, 0);\n  box-shadow: 0 -0.8rem 0 -0.4rem #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(5):after {\n  width: 1.5rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  box-shadow: -0.2rem 0.2rem 0 0 #302e9b;\n  transform: translate3d(-0.75rem, 1rem, 0) rotate(20deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(6) {\n  width: 0.6rem;\n  height: 0.6rem;\n  background: #302e9b;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.5rem #fff, 0 0 0 0.8rem #302e9b;\n  transform: translate3d(16.6rem, 2.75rem, 0) rotate(5deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(6):before {\n  width: 3.5rem;\n  height: 3rem;\n  border-radius: 50%;\n  border-top: 0.4rem solid #302e9b;\n  transform: translate3d(-1rem, -0.4rem, 0);\n  box-shadow: 0 -0.8rem 0 -0.4rem #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(6):after {\n  width: 1rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  box-shadow: 0 0.2rem 0 0 #302e9b;\n  transform: translate3d(-0.75rem, 1rem, 0) rotate(30deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(3) {\n  width: 2rem;\n  height: 1.25rem;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0.3rem 0 0 0 #302e9b;\n  transform: translate3d(18.75rem, 6rem, 0) rotate(45deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(3):before {\n  width: 4rem;\n  height: 4rem;\n  transform: translate3d(0.25rem, 0.25rem, 0);\n  box-shadow: -0.2rem -0.2rem 0 #302e9b;\n  border-radius: 1rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(3):after {\n  width: 1rem;\n  height: 1rem;\n  box-shadow: 0 -0.4rem 0 #302e9b;\n  transform: translate3d(3.25rem, 3.25rem, 0) rotate(-45deg);\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(7) {\n  width: 0.6rem;\n  height: 0.6rem;\n  background: #302e9b;\n  border-radius: 50%;\n  box-shadow: 1rem 0 0 0 #302e9b, 0.5rem 0.3rem 0 0 #302e9b;\n  transform: translate3d(18.75rem, 8.5rem, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(7):after {\n  width: 3.2rem;\n  height: 0.5rem;\n  box-shadow: 0 -0.2rem 0 #302e9b;\n  transform: translate3d(-0.7rem, 0.4rem, 0);\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(5) {\n  transform: translate3d(36rem, 5rem, 0);\n  border: 0.3rem solid #302e9b;\n  width: 2rem;\n  height: 3.85rem;\n  border-radius: 1rem;\n  background: #fff;\n  box-shadow: 0.75rem 0.3rem 0 -0.3rem #fff, 0.75rem 0.3rem 0 #302e9b, 1.75rem 0.5rem 0 -0.5rem #fff, 1.75rem 0.5rem 0 -0.2rem #302e9b, 2.65rem 0.6rem 0 -0.8rem #fff, 2.65rem 0.6rem 0 -0.4rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(5):before {\n  transform: translate3d(-1rem, -0.75rem, 0);\n  border: 0.5rem solid #302e9b;\n  border-bottom: none;\n  width: 1.65rem;\n  height: 4rem;\n  border-radius: 1rem 1rem 0 0;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(5):after {\n  transform: translate3d(0, 3.5rem, 0);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0 100% 0 0;\n  box-shadow: 0.3rem -0.3rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(4) {\n  transform: translate3d(35.25rem, 6.5rem, 0);\n  border: 0.5rem solid #302e9b;\n  width: 4.75rem;\n  height: 5.5rem;\n  border-radius: 50%;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(4):before {\n  transform: translate3d(4rem, -0.1rem, 0);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 100%;\n  box-shadow: 0 0 0 0.5rem #302e9b, inset 0 -0.25rem 0 0.5rem #bdb725, inset 0 -0.5rem 0 1rem #302e9b;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(4):after {\n  transform: translate3d(-1.5rem, -3rem, 0);\n  width: 1rem;\n  height: 7rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 0 0 0.5rem #302e9b;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(3) {\n  transform: translate3d(31.25rem, 6rem, 0);\n  border: 0.5rem solid #302e9b;\n  width: 3rem;\n  height: 3rem;\n  box-shadow: inset 0 0 0 0.5rem #fff, inset 0 0 0 1rem #302e9b, -3rem 0 0 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(3):before {\n  transform: translate3d(4rem, 5rem, 0);\n  width: 3.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.5rem #302e9b;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) {\n  transform: translate3d(30rem, 13rem, 0);\n  height: 20rem;\n  width: 20rem;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1):before {\n  border-radius: 50%;\n  background: #fff;\n  width: 10rem;\n  height: 30rem;\n  box-shadow: -0.4rem 0.4rem 0 0 #302e9b, -12.5rem -1rem 0 0rem #fff, -12rem -1rem 0 0rem #302e9b;\n  transform: translate3d(9rem, -22rem, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1):after {\n  background: #fff;\n  width: 30rem;\n  height: 20rem;\n  transform: translate3d(0rem, -20rem, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1) {\n  background: #b32b28;\n  border: 0.5rem solid #302e9b;\n  transform: translate3d(5rem, 9rem, 0) rotate(-40deg) skewY(-30deg);\n  width: 10rem;\n  height: 10rem;\n  box-shadow: 0 0 0 1rem #bdb725, 0 0 0 1.5rem #302e9b;\n  z-index: -1;\n  border-radius: 50% 0;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):before {\n  background: #b32b28;\n  border: 0.5rem solid #302e9b;\n  transform: translate3d(-4rem, -5.5rem, 0) rotate(20deg) skewY(0deg);\n  width: 10rem;\n  height: 10rem;\n  box-shadow: 0 0 0 1rem #bdb725, 0 0 0 1.5rem #302e9b;\n  border-radius: 50% 0;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):after {\n  background: #302e9b;\n  transform: translate3d(11.75rem, -11.75rem, 0) rotate(15deg) skewY(0deg);\n  width: 10rem;\n  height: 10rem;\n  box-shadow: 0 0 0 0.5rem #bdb725, 0 0 0 1rem #302e9b;\n  border-radius: 50% 0;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) {\n  border: 0.5rem solid #302e9b;\n  transform: translate3d(-6.5rem, 16rem, 0);\n  width: 56rem;\n  height: 43rem;\n  border-radius: 50% 48%;\n  box-shadow: inset 0 0 0 1rem #bdb725, inset 0 0 0 4.5rem #302e9b, inset 0 0 0 5rem #bdb725, inset 0 0 0 5.5rem #302e9b;\n  background: linear-gradient(#b32b28, #b32b28 50%, #fff 50%, #fff);\n  background-size: 100% 1rem;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2):before {\n  width: 2rem;\n  height: 2rem;\n  background: #bdb725;\n  transform: translate3d(45.75rem, 31.4rem, 0);\n  box-shadow: -2.5rem 2rem 0 0 #bdb725, -5.5rem 4rem 0 0 #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2):after {\n  width: 2rem;\n  height: 2rem;\n  background: #190d23;\n  transform: translate3d(45.7rem, 31.3rem, 0) rotate(-45deg);\n  box-shadow: inset 0 0 0 0.55rem #bdb725, -3.25rem -0.25rem 0 -0.55rem #190d23, -3.25rem -0.25rem 0 0 #bdb725, -6.75rem -1rem 0 -0.55rem #190d23, -6.75rem -1rem 0 0 #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) {\n  width: 50rem;\n  height: 60rem;\n  border: 5rem solid #fff;\n  border-left-width: 3rem;\n  transform: translate3d(30rem, -9rem, 0);\n  box-shadow: inset 0 0 0 0.5rem #302e9b, 0 0 0 0.5rem #302e9b;\n  border-radius: 50%;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):before {\n  width: 40rem;\n  height: 31rem;\n  background: #b32b28;\n  box-shadow: inset 5rem 14rem 0 0 #302e9b, inset 0 14.9rem 0 0 #bdb725, inset 0 15.3rem 0 0 #302e9b;\n  transform: translate3d(0, 0, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):after {\n  width: 2rem;\n  background: #bdb725;\n  height: 30rem;\n  transform: translate3d(10.5rem, 0rem, 0);\n  border: solid 0.5rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) {\n  width: 24rem;\n  height: 24rem;\n  border: 1rem solid #190d23;\n  transform: translate3d(-15rem, 6rem, 0);\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 1rem #bdb725, inset 0 0 0 1.5rem #190d23, inset 0 0 0 3.5rem #fff, inset 0 0 0 4rem #190d23, inset 0 0 0 4.5rem #bdb725, inset 0 0 0 5rem #190d23;\n  background: linear-gradient(#b32b28, #b32b28 50%, #fff 50%, #fff);\n  background-size: 100% 1rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):before {\n  width: 18rem;\n  height: 18rem;\n  border: 1rem dotted #b32b28;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):after {\n  width: 5rem;\n  height: 5rem;\n  transform: translate3d(29rem, 5rem, 0) rotate(45deg);\n  background: #b32b28;\n  box-shadow: 0 0 0 0.4rem #302e9b, 0 0 0 0.9rem #bdb725, 0 0 0 1.1rem #302e9b, 0 0 0 1.6rem #bdb725, 0 0 0 2rem #302e9b, 4rem 4rem 0 0 #b32b28, 4rem 4rem 0 0.4rem #302e9b, 4rem 4rem 0 0.9rem #bdb725, 4rem 4rem 0 1.1rem #302e9b, 4rem 4rem 0 1.6rem #bdb725, 4rem 4rem 0 2rem #302e9b, 8rem 8rem 0 0 #b32b28, 8rem 8rem 0 0.4rem #302e9b, 8rem 8rem 0 0.9rem #bdb725, 8rem 8rem 0 1.1rem #302e9b, 8rem 8rem 0 1.6rem #bdb725, 8rem 8rem 0 2rem #302e9b, -4rem -4rem 0 0 #b32b28, -4rem -4rem 0 0.4rem #302e9b, -4rem -4rem 0 0.9rem #bdb725, -4rem -4rem 0 1.1rem #302e9b, -4rem -4rem 0 1.6rem #bdb725, -4rem -4rem 0 2rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) {\n  width: 16rem;\n  height: 53rem;\n  transform: translate3d(20rem, 0rem, 0);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):before {\n  height: 20rem;\n  width: 35rem;\n  background: #b32b28;\n  transform: translate3d(-10rem, -10rem, 0) rotate(-45deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):after {\n  height: 5rem;\n  width: 30rem;\n  background: #fff;\n  transform: translate3d(-10rem, 10rem, 0) rotate(-45deg);\n  border: 0.5rem solid #fff;\n  box-shadow: inset 0 0 0 0.4rem #302e9b, 0 0 0 0.4rem #302e9b;\n  background: #fff;\n  background-image: radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0), radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0);\n  background-size: 6rem 6rem;\n  background-position: 0 0, 3rem 3rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1) {\n  transform: translate3d(0rem, 18rem, 0);\n  background: #302e9b;\n  height: 5rem;\n  width: 20rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):before {\n  height: 20rem;\n  width: 35rem;\n  background: #b32b28;\n  transform: translate3d(-10rem, 15rem, 0) rotate(-45deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):after {\n  height: 5rem;\n  width: 30rem;\n  background: #fff;\n  transform: translate3d(-10rem, 12rem, 0) rotate(-45deg);\n  border: 0.5rem solid #fff;\n  box-shadow: inset 0 0 0 0.4rem #302e9b, 0 0 0 0.4rem #302e9b;\n  background: #fff;\n  background-image: radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0), radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0);\n  background-size: 6rem 6rem;\n  background-position: 0 0, 3rem 3rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(3) {\n  width: 50rem;\n  height: 60rem;\n  border: 2rem dotted #302e9b;\n  transform: translate3d(31rem, -9rem, 0);\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(9) {\n  width: 50rem;\n  height: 37rem;\n  transform: translate3d(25rem, 19rem, 0);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(9):after {\n  width: 50rem;\n  height: 53rem;\n  transform: translate3d(2rem, -8rem, 0);\n  box-shadow: inset 0 0 0 0.5rem #302e9b, 0 0 0 1rem #fff;\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(9):before {\n  width: 15rem;\n  background: #190d23;\n  height: 2rem;\n  transform: translate3d(8.5rem, 0, 0) skewX(-35deg);\n  box-shadow: 0 0 0 0.5rem #302e9b, 0 0 0 1rem #190d23, 0 0 0 1.5rem #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(12) {\n  transform: translate3d(-1rem, 21.5rem, 0);\n  width: 45rem;\n  height: 32rem;\n  border-radius: 50%;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(12):before {\n  width: 20rem;\n  height: 8rem;\n  background: repeating-linear-gradient(-45deg, #302e9b, #302e9b 0.2rem, rgba(255, 255, 255, 0) 0.2rem, rgba(255, 255, 255, 0) 1rem), #bdb725;\n  transform: translate3d(38rem, 19rem, 0);\n  border: 0.5rem solid #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(12):after {\n  width: 2.5rem;\n  height: 5rem;\n  transform: translate3d(33.5rem, 20.25rem, 0);\n  background: #bdb725;\n  border: 0.4rem solid #302e9b;\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(13) {\n  transform: translate3d(28.5rem, 46rem, 0);\n  border: 0.4rem solid #302e9b;\n  border-top: none;\n  width: 4.25rem;\n  height: 2rem;\n  border-radius: 1.5rem 0 100% 0.75rem;\n  background: #fff;\n  box-shadow: 0.75rem -1rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(13):before {\n  transform: translate3d(-4rem, -2rem, 0);\n  border: 0.4rem solid #302e9b;\n  border-right: none;\n  width: 5.5rem;\n  height: 1.8rem;\n  border-radius: 1rem 0 0 1rem;\n  background: #fff;\n  box-shadow: 0.7rem 1rem 0 -0.4rem #fff, 0.3rem 1.4rem 0 -0.4rem #302e9b, 0.8rem -1.3rem 0 -0.5rem #fff, 0.8rem -1.3rem 0 -0.1rem #302e9b, 1.8rem -2.3rem 0 -0.6rem #fff, 1.8rem -2.3rem 0 -0.2rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(13):after {\n  transform: translate3d(1rem, -4.2rem, 0);\n  width: 4rem;\n  height: 4.5rem;\n  border-radius: 0 100% 100% 0;\n  border: 0.4rem solid #302e9b;\n  border-left: none;\n  border-bottom: none;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(10) {\n  width: 10rem;\n  height: 8rem;\n  transform: translate3d(32.5rem, 40.5rem, 0);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(10):before {\n  border-radius: 50%;\n  transform: translate3d(-2.5rem, -2.5rem, 0);\n  width: 7.5rem;\n  height: 5rem;\n  border: 0.5rem solid #302e9b;\n  box-shadow: 0 0 0 1rem #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(10):after {\n  border-radius: 50%;\n  transform: translate3d(-2.5rem, 5rem, 0);\n  width: 7.5rem;\n  height: 6rem;\n  border: 0.5rem solid #302e9b;\n  box-shadow: 0 0 0 1rem #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(11) {\n  width: 10rem;\n  height: 4rem;\n  transform: translate3d(33.75rem, 42.2rem, 0) scaleY(0.7);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(11):after {\n  width: 2.5rem;\n  height: 2.5rem;\n  transform: translate3d(0rem, 0.5rem, 0) rotate(45deg);\n  background: #302e9b;\n  border: 0.75rem solid #bdb725;\n  box-shadow: 0 0 0 0.5rem #302e9b, 0 0 0 2rem #bdb725;\n}\nfront > *:nth-of-type(2) {\n  transform: rotate(180deg);\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) {\n  background: none;\n  border: none;\n  box-shadow: none;\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):before {\n  transform: translate3d(45.75rem, 32.4rem, 0);\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):after {\n  transform: translate3d(45.7rem, 32.3rem, 0) rotate(-45deg);\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) {\n  display: none;\n}\n</style>\n\n<div class=\"header\">\n  <div class=\"header-inner\">\n    <div class=\"back-btn\" onclick=\"javascript: history.back()\">\n      <div class=\"back-icon\"></div>\n      <span class=\"back-text\">返回</span>\n    </div>\n  </div>\n</div>\n<screen>\n  <hoverspace></hoverspace>\n  <shadow></shadow>\n  <card>\n      <back></back>\n      <front>\n          <!--up-->\n          <x>\n              <x></x>\n              <x>\n                  <x> <x></x> </x>\n                  <!--body-->\n                  <x>\n                      <!--shirt-->\n                      <x> <x></x> <x></x> </x>\n                      <!--coat-->\n                      <x> <x></x> </x>\n                      <x></x>\n                  </x>\n                  <x></x> <x></x> <x></x> <x></x>\n                  <x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> </x>\n                  <x></x> <x></x> <x></x> <x></x> <x></x> <x></x>\n              </x>\n          </x>\n          <!--down-->\n          <x>\n              <x></x>\n              <x>\n                  <x> <x></x> </x>\n                  <!--body-->\n                  <x>\n                      <!--shirt-->\n                      <x> <x></x> <x></x> </x>\n                      <!--coat-->\n                      <x> <x></x> </x> <x></x>\n                  </x>\n                  <x></x> <x></x> <x></x> <x></x>\n                  <x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> </x>\n                  <x></x> <x></x> <x></x> <x></x> <x></x> <x></x>\n              </x>\n          </x>\n      </front>\n  </card>\n</screen>"

/***/ }),

/***/ "./src/frameworks/html.html":
/*!**********************************!*\
  !*** ./src/frameworks/html.html ***!
  \**********************************/
/***/ ((module) => {

module.exports = "<app-nav></app-nav>\n"

/***/ }),

/***/ "./src/home/html.html":
/*!****************************!*\
  !*** ./src/home/html.html ***!
  \****************************/
/***/ ((module) => {

module.exports = "<html>\n  <head>\n    <style>\n      html, body {\n        margin: 0;\n        background: var(--background, #000);\n      }\n      body {\n        margin: 0 8px;\n      }\n      #figure {\n        margin: 0;\n        padding-bottom: 12px;\n        overflow: hidden;\n      }\n      @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n      #figure-container {\n        position: relative;\n        width: 100%;\n        margin: 60px 0;\n        font-family: \"Montserrat\", sans-serif;\n        color: var(--logoText, #fff);\n        font-size: 120px;\n        transition: transform 0.3s ease;\n      }\n\n      @media screen and (max-width: 700px) {\n        #figure-container {\n          zoom: .7;\n        }\n      }\n\n      @media screen and (max-width: 360px) {\n        #figure-container {\n          zoom: .6;\n        }\n      }\n      .subtitle {\n        position: relative;\n        margin-top: 20px;\n        width: 100%;\n        text-align: center;\n        z-index: 9;\n        color: rgba(255, 255, 255, .3);\n        font-size: 12px;\n        -webkit-font-smoothing: antialiased;\n      }\n      .placeholder {\n        height: var(--application-safe-area-top)\n      }\n      .card {\n        min-height: 100px;\n        max-width: 500px;\n        margin: auto;\n        margin-bottom: 12px;\n        border-radius: 16px;\n        border: 0.5px solid rgba(255, 255, 255, .05);\n        background: var(--cardbg, rgba(255, 255, 255, .1));\n      }\n      .card-title {\n        font-size: 28px;\n        padding: 5px 20px;\n        color: rgba(255, 255, 255, .3);\n        -webkit-font-smoothing: antialiased;\n      }\n      .card-list {\n        padding: 0;\n        margin: 0;\n      }\n      .card-list a {\n        display: block;\n        position: relative;\n        font-size: 18px;\n        padding: 15px 20px;\n        list-style: none;\n        font-weight: 400;\n        color: var(--cardTextColor, rgba(255, 255, 255, .92));\n        border-bottom: 0.5px solid rgba(255, 255, 255, .2);\n        align-content: space-between;\n        cursor: pointer;\n        text-decoration: none;\n      }\n\n      .card-list a:hover {\n        background: rgba(255, 255, 255, .1);\n      }\n\n      @media (pointer: coarse) {\n        .card-list a:hover {\n          background: none;\n        }\n      }\n      .card-list a:last-child {\n        border-bottom: 0;\n        border-bottom-left-radius: 12px;\n        border-bottom-right-radius: 12px;\n      }\n      .card-list a:after {\n        position: absolute;\n        right: 15px;\n        top: 50%;\n        content: ' ';\n        display: block;\n        width: 20px;\n        height: 20px;\n        margin-top: -10px;\n        background-image: url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBmaWxsPScjY2NjY2NjJyB2ZXJzaW9uPScxLjEnIGlkPSflm77lsYJfMScgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCA1NCA1NCcgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTQgNTQnIHhtbDpzcGFjZT0ncHJlc2VydmUnPjxzY3JpcHQgeG1sbnM9JycgdHlwZT0ndGV4dC9qYXZhc2NyaXB0JyBjcm9zc29yaWdpbj0nYW5vbnltb3VzJy8+PHBhdGggZD0nTTQ0LjYsMjguNWMwLTAuMSwwLjEtMC4xLDAuMS0wLjJjMC42LTEuMywwLjQtMi45LTAuNy0zLjlMMTkuMiwwLjljLTEuNC0xLjMtMy41LTEuMi00LjgsMC4xcy0xLjIsMy41LDAuMSw0LjhsMjIuMiwyMSBMMTQuNyw0OC4yYy0xLjMsMS4zLTEuNCwzLjQtMC4xLDQuOGMwLjcsMC43LDEuNSwxLDIuNCwxYzAuOCwwLDEuNy0wLjMsMi4zLTAuOWwyNC42LTIzLjdjMCwwLDAuMS0wLjEsMC4xLTAuMmMwLDAsMC4xLTAuMSwwLjEtMC4xIEM0NC4zLDI4LjksNDQuNCwyOC43LDQ0LjYsMjguNUw0NC42LDI4LjV6Jy8+PC9zdmc+\");\n      }\n      .card-list a span {\n        font-size: 13px;\n        color: rgba(255, 255, 255, .3);\n        -webkit-font-smoothing: antialiased;\n      }\n      @media screen and (max-width: 700px) {\n        .card-title {\n          font-size: 18px;\n        }\n        .card-list a {\n          font-size: 16px;\n        }\n        .card-list a:after {\n          width: 16px;\n          height: 16px;\n          margin-top: -8px;\n        }\n      }\n    </style>\n    <style>\n      body {\n        font-family: 'Lato', sans-serif;\n      }\n      h1 {\n        animation: glitch 3s steps(100) infinite;\n        color: #fff;\n        font-size: 150px;\n        text-align: center;\n        text-transform: uppercase;\n        line-height: 1;\n        margin: 0.5em 0;\n      }\n\n      @media (min-width: 480px) {\n        h1 {\n          font-size: 180px;\n        }\n      }\n\n      @keyframes glitch {\n        0% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        1% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        2% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        3% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        4% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        5% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        6% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        7% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        8% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        9% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        10% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        11% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        12% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        13% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        14% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        15% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        16% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        17% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        18% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        19% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        20% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        21% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        22% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        23% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        24% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        25% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        26% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0.5px);}\n        27% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0.5px);}\n        28% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        29% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        30% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        31% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        32% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        33% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        34% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        35% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0.5px);}\n        36% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0.5px);}\n        37% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0.5px);}\n        38% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        39% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        40% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        41% { text-shadow: 45px 0 0 #0c33f5, -45px 0 0 lime; filter: blur(0);}\n        42% { text-shadow: 0 0 0 #0c33f5, 0 0 0 lime; filter: blur(0);}\n        43% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        44% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        45% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        46% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        47% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0.5px);}\n        48% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        49% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        50% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        51% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        52% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        53% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        54% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        55% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0.5px);}\n        56% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0.5px);}\n        57% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0.5px);}\n        58% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        59% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        60% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        61% { text-shadow: 30px 0 0 red, -30px 0 0 lime; filter: blur(0);}\n        62% { text-shadow: 0 0 0 red, 0 0 0 lime; filter: blur(0);}\n        63% { text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5; filter: blur(0);}\n        64% { text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5; filter: blur(0);}\n        65% { text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5; filter: blur(0);}\n        66% { text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5; filter: blur(0.5px);}\n        67% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0.5px);}\n        68% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        69% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        70% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        71% { text-shadow: 50px 0 0 red, -50px 0 0 #0c33f5; filter: blur(0);}\n        72% { text-shadow: 0 0 0 red, 0 0 0 #0c33f5; filter: blur(0);}\n        73% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        74% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        75% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        76% { text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5; filter: blur(0);}\n        77% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        78% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        79% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        80% { text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5; filter: blur(0);}\n        81% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        82% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0);}\n        83% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        84% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        85% { text-shadow: 1px 0 0 red, -1px 0 0 lime; filter: blur(0.5px);}\n        86% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0.5px);}\n        87% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0.5px);}\n        88% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        89% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        90% { text-shadow: -3px 0 0 red, 3px 0 0 lime; filter: blur(0);}\n        91% { text-shadow: 60px 0 0 lime, -60px 0 0 #0c33f5; filter: blur(0);}\n        92% { text-shadow: 0 0 0 lime, 0 0 0 #0c33f5; filter: blur(0);}\n        92% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        93% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        94% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        95% { text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime; filter: blur(0);}\n        96% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        97% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        98% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        99% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n        100% { text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime; filter: blur(0);}\n      }\n\n    </style>\n    <script>\n      document.addEventListener(\"DOMContentLoaded\", () => {\n        const figure = document.getElementById(\"figure-container\");\n        window.addEventListener('scroll', (event) => {\n          figure.style.transform = `scale(${window.scrollY > 40 ? 1.3 : 1})`\n        })\n      })\n      const _to = (id) => {\n        window.parent.postMessage({ action: 'to', data: { module: id } }, '*')\n      }\n    </script>\n  </head>\n  <body>\n    <div class=\"placeholder\"></div>\n    <figure id=\"figure\">\n      <div id=\"figure-container\">\n        <h1>Lath</h1>\n      </div>\n      <div class=\"subtitle\">一个页面无缝连接容器</div>\n    </figure>\n    <div class=\"card\">\n      <div class=\"card-title\">Start</div>\n      <div class=\"card-list\">\n        <a href=\"?id=install#doc\">Install & Preface</a>\n        <a href=\"?id=start#doc\">Start</a>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Base</div>\n      <div class=\"card-list\">\n        <a href=\"?id=rel#doc\">Rel</a>\n        <a href=\"?id=title#doc\">Title</a>\n        <a href=\"?id=source#doc\">Source</a>\n        <a href=\"?id=index#doc\">Index</a>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Viewport</div>\n      <div class=\"card-list\">\n        <a href=\"?id=free#doc\">Free</a>\n        <a href=\"?id=level#doc\">Level</a>\n        <a href=\"?id=color#doc\">Color</a>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Animate Effect</div>\n      <div class=\"card-list\">\n        <a href=\"?id=preset#doc\">Slide</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"slide-right\" clone-as=\"doc-right\">SlideRight</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"slide-up\" clone-as=\"doc-up\">SlideUp</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"slide-down\" clone-as=\"doc-down\">SlideDown</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"zoom\" clone-as=\"doc-zoom\">Zoom</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"flip\" clone-as=\"doc-flip\">Flip</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"flip-left\" clone-as=\"doc-flip-left\">FlipLeft</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"flip-right\" clone-as=\"doc-flip-right\">FlipRight</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"flip-up\" clone-as=\"doc-flip-up\">FlipUp</a>\n        <a href=\"?id=preset#doc\" preset-effect=\"flip-down\" clone-as=\"doc-flip-down\">FlipDown</a>\n        <a href=\"?id=customEffect#doc\" preset-effect=\"slide\" clone-as=\"doc-flip-down\">Custom Effect</a>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Lifecycle</div>\n      <ul class=\"card-list\">\n        <a href=\"?id=background#doc\">Background</a>\n        <a href=\"?id=timeout#doc\">Timeout</a>\n        <a href=\"?id=limit#doc\">Limit</a>\n      </ul>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Performance</div>\n      <ul class=\"card-list\">\n        <a href=\"?id=resource#doc\">Resource</a>\n        <a href=\"?id=prerender#doc\">Prerender</a>\n        <a href=\"?id=components#doc\">Components</a>\n        <a href=\"?id=mediaGuard#doc\">MediaGuard</a>\n        <a href=\"?id=portal#doc\">Portal</a>\n      </ul>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Safest</div>\n      <ul class=\"card-list\">\n        <a href=\"?id=allowHost#doc\">AllowHost</a>\n        <a href=\"?id=sandbox#doc\">Sandbox</a>\n        <a href=\"?id=capture#doc\">Capture</a>\n      </ul>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Other</div>\n      <ul class=\"card-list\">\n        <a href=\"?id=apply#doc\">Apply & unApply</a>\n        <a href=\"?id=events#doc\">Events</a>\n        <a href=\"?id=preindex#doc\">Preindex</a>\n        <a href=\"?id=notFind#doc\">NotFind</a>\n        <a href=\"?id=singleFlow#doc\">SingleFlow</a>\n        <a href=\"?id=singleLock#doc\">SingleLock</a>\n        <a href=\"?id=holdBack#doc\">HoldBack</a>\n        <a href=\"?id=transient#doc\">Transient & DisableTransient</a>\n      </ul>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Advance</div>\n      <ul class=\"card-list\">\n        <a href=\"?id=moduleManifestProcess#doc\">ModuleManifestProcess</a>\n        <a href=\"?id=touchBorder#doc\">TouchBorder</a>\n        <a href=\"?id=inject#doc\">Inject</a>\n        <a href=\"?id=render#doc\">Render</a>\n        <a href=\"?id=safeArea#doc\">SafeArea</a>\n        <a href=\"?id=globalCSSVariables#doc\">GlobalCSSVariables</a>\n      </ul>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-title\">Preset Config</div>\n      <ul class=\"card-list\">\n        <a href=\"?id=tunneling#doc\">Tunneling</a>\n        <a href=\"?id=zIndex#doc\">ZIndex</a>\n        <a href=\"?id=unuseShadowDom#doc\">UnuseShadowDom</a>\n      </ul>\n    </div>\n    <br />\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/components/app-logo/index.ts":
/*!******************************************!*\
  !*** ./src/components/app-logo/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogo": () => (/* binding */ AppLogo)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/components/app-logo/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template');
tmpl.innerHTML = (_template_html__WEBPACK_IMPORTED_MODULE_0___default());
class AppLogo extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
}
customElements.define('app-logo', AppLogo);


/***/ }),

/***/ "./src/components/app-nav/index.ts":
/*!*****************************************!*\
  !*** ./src/components/app-nav/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppNav": () => (/* binding */ AppNav)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/components/app-nav/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);

const tmpl = document.createElement('template');
tmpl.innerHTML = `${(_template_html__WEBPACK_IMPORTED_MODULE_0___default())}`;
class AppNav extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        /** @type {HTMLElement | null} */
        this.header = shadowRoot.getElementById('header');
        this.menuIcon = shadowRoot.getElementById('menu-icon');
        this.menuList = shadowRoot.getElementById('menu-list');
    }
    connectedCallback() {
        var _a, _b, _c;
        if (this.header !== null) {
            // this.header.addEventListener('click', this.handleMenuButtonClick)
        }
        this.upgradeProperty('hidden');
        (_a = this.menuIcon) === null || _a === void 0 ? void 0 : _a.addEventListener('opened', () => {
            var _a;
            (_a = this.menuList) === null || _a === void 0 ? void 0 : _a.setAttribute('open', '');
        });
        (_b = this.menuIcon) === null || _b === void 0 ? void 0 : _b.addEventListener('closed', () => {
            var _a;
            (_a = this.menuList) === null || _a === void 0 ? void 0 : _a.removeAttribute('open');
        });
        (_c = this.menuList) === null || _c === void 0 ? void 0 : _c.addEventListener('click', (event) => {
            const e = new CustomEvent('click', {
                detail: event
            });
            window.dispatchEvent(new CustomEvent('click', e));
            event.preventDefault();
            event.stopPropagation();
        });
    }
    upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    get hidden() {
        return this.hasAttribute('hidden');
    }
    set hidden(isHidden) {
        if (isHidden) {
            if (!this.hasAttribute('hidden')) {
                this.setAttribute('hidden', '');
            }
        }
        else {
            if (this.hasAttribute('hidden')) {
                this.removeAttribute('hidden');
            }
        }
    }
    static get observedAttributes() {
        return ['hidden'];
    }
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(name, _oldValue, _newValue) {
        if (name === 'hidden') {
            if (!this.hidden) {
                this.dispatchEvent(new CustomEvent('hidden', {
                    bubbles: true
                }));
            }
            else {
                this.dispatchEvent(new CustomEvent('visible', {
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define('app-nav', AppNav);


/***/ }),

/***/ "./src/components/code-highlight/index.ts":
/*!************************************************!*\
  !*** ./src/components/code-highlight/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScopeCodeHighlighter": () => (/* binding */ ScopeCodeHighlighter)
/* harmony export */ });
/* harmony import */ var _Prism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prism */ "./src/components/code-highlight/Prism.js");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ "./src/components/code-highlight/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_1__);


const tmpl = document.createElement('template');
tmpl.innerHTML = `${(_template_html__WEBPACK_IMPORTED_MODULE_1___default())}`;
const ScopeCodeHighlighter = (w) => {
    class CodeHighlighter extends w.HTMLElement {
        constructor() {
            var _a, _b, _c;
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            const ele = shadowRoot.getElementById('code');
            const lang = this.getAttribute('type');
            let codeText = (_b = (_a = this.childNodes[0]) === null || _a === void 0 ? void 0 : _a.wholeText) !== null && _b !== void 0 ? _b : '';
            const trimstr = ((_c = /^\s+/.exec(codeText)) === null || _c === void 0 ? void 0 : _c[0]) || '';
            const trimlength = trimstr.length;
            codeText = codeText.replace(/\n\s+/g, function (trims) {
                trims = '\n' + trims.substr(trimlength);
                return trims;
            });
            codeText = codeText.trim();
            if (this.offsetTop === 0) {
                setTimeout(() => {
                    _Prism__WEBPACK_IMPORTED_MODULE_0__["default"].highlightCode(ele, codeText, lang !== null && lang !== void 0 ? lang : 'js');
                }, 100);
                return;
            }
            _Prism__WEBPACK_IMPORTED_MODULE_0__["default"].highlightCode(ele, codeText, lang !== null && lang !== void 0 ? lang : 'js');
        }
        connectedCallback() {
            //
        }
        static get observedAttributes() {
            return [''];
        }
    }
    return CodeHighlighter;
};
// customElements.define('code-highlight', CodeHighlighter)


/***/ }),

/***/ "./src/components/menu-icon/index.ts":
/*!*******************************************!*\
  !*** ./src/components/menu-icon/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuIcon": () => (/* binding */ MenuIcon)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/components/menu-icon/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);
(function () {
    if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
        window.customElements === undefined ||
        // The webcomponentsjs custom elements polyfill doesn't require
        // ES2015-compatible construction (`super()` or `Reflect.construct`).
        window.customElements['polyfillWrapFlushCallback'])
        return;
    const BuiltInHTMLElement = HTMLElement;
    /**
     * With jscompiler's RECOMMENDED_FLAGS the function name will be optimized away.
     * However, if we declare the function as a property on an object literal, and
     * use quotes for the property name, then closure will leave that much intact,
     * which is enough for the JS VM to correctly set Function.prototype.name.
     */
    const wrapperForTheName = {
        'HTMLElement': /** @this {!Object} */ function HTMLElement() {
            return Reflect.construct(BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
        }
    };
    window.HTMLElement = wrapperForTheName['HTMLElement'];
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template');
tmpl.innerHTML = (_template_html__WEBPACK_IMPORTED_MODULE_0___default());
class MenuIcon extends HTMLElement {
    constructor() {
        super();
        this.handleMenuButtonClick = () => {
            this.open = !this.open;
        };
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        /** @type {HTMLElement | null} */
        this._menuButton = shadowRoot.getElementById('m');
    }
    connectedCallback() {
        if (this._menuButton !== null) {
            this._menuButton.addEventListener('click', this.handleMenuButtonClick);
        }
        this.upgradeProperty('open');
    }
    // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
    /**
     * @param {string} prop
     *
     * @memberOf WcMenuButton
     */
    upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    get open() {
        return this.hasAttribute('open');
    }
    set open(isOpen) {
        if (isOpen) {
            if (!this.hasAttribute('open')) {
                this.setAttribute('open', '');
            }
        }
        else {
            if (this.hasAttribute('open')) {
                this.removeAttribute('open');
            }
        }
    }
    static get observedAttributes() {
        return ['open'];
    }
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(_name, _oldValue, _newValue) {
        if (_name === 'open') {
            if (!this.open) {
                this.dispatchEvent(new CustomEvent('closed', {
                    bubbles: true
                }));
            }
            else {
                this.dispatchEvent(new CustomEvent('opened', {
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define('menu-icon', MenuIcon);


/***/ }),

/***/ "./src/components/menu-list/index.ts":
/*!*******************************************!*\
  !*** ./src/components/menu-list/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuList": () => (/* binding */ MenuList)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/components/menu-list/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template');
tmpl.innerHTML = (_template_html__WEBPACK_IMPORTED_MODULE_0___default());
class MenuList extends HTMLElement {
    constructor() {
        super();
        this.handleMenuButtonClick = () => {
            this.open = !this.open;
        };
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        /** @type {HTMLElement | null} */
        this._menuButton = shadowRoot.getElementById('m');
    }
    connectedCallback() {
        if (this._menuButton !== null) {
            this._menuButton.addEventListener('click', this.handleMenuButtonClick);
        }
        this.upgradeProperty('open');
    }
    // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
    /**
     * @param {string} prop
     *
     * @memberOf WcMenuButton
     */
    upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    get open() {
        return this.hasAttribute('open');
    }
    set open(isOpen) {
        if (isOpen) {
            if (!this.hasAttribute('open')) {
                this.setAttribute('open', '');
            }
        }
        else {
            if (this.hasAttribute('open')) {
                this.removeAttribute('open');
            }
        }
    }
    static get observedAttributes() {
        return ['open'];
    }
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(name, _oldValue, _newValue) {
        if (name === 'open') {
            if (!this.open) {
                this.dispatchEvent(new CustomEvent('closed', {
                    bubbles: true
                }));
            }
            else {
                this.dispatchEvent(new CustomEvent('opened', {
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define('menu-list', MenuList);


/***/ }),

/***/ "./src/doc/minify.ts":
/*!***************************!*\
  !*** ./src/doc/minify.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./src/doc/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./src/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 2,
        title: '',
        free: true,
        source: {
            html: (_html_html__WEBPACK_IMPORTED_MODULE_0___default())
        },
        animation: 'slide',
        color: '#000',
        background: 'auto',
        capture: (e) => {
            var _a;
            return ((_a = e.href) !== null && _a !== void 0 ? _a : String(e)).indexOf('doc') !== -1;
        }
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./src/empty/minify.ts":
/*!*****************************!*\
  !*** ./src/empty/minify.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./src/empty/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./src/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 3,
        title: '',
        free: true,
        source: {
            html: (_html_html__WEBPACK_IMPORTED_MODULE_0___default())
        },
        animation: 'slideUp',
        color: '#bd243f',
        background: 'auto',
        capture: (e) => {
            var _a;
            return ((_a = e.href) !== null && _a !== void 0 ? _a : String(e)).indexOf('empty') !== -1;
        }
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./src/frameworks/minify.ts":
/*!**********************************!*\
  !*** ./src/frameworks/minify.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./src/frameworks/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        index: 'home',
        title: '',
        level: 0,
        free: false,
        prerender: ['home', 'empty', 'facebook', 'doc'],
        animation: 'slide',
        background: true,
        safeArea: ['48px', '0px', '0px', '0px'],
        render: (target) => {
            target.innerHTML = (_html_html__WEBPACK_IMPORTED_MODULE_0___default());
        },
        globalCSSVariables: {
            '--background': '#000',
            '--mainColor': '#fff'
        }
        // globalCSSVariables: {
        //   '--background': '#888',
        //   '--logoBg': '#fff',
        //   '--logoText': '#000',
        //   '--mainColor': '#000',
        //   '--cardbg': '#fff',
        //   '--cardTextColor': 'rgba(0, 0, 0, .92)'
        // }
    }
});


/***/ }),

/***/ "./src/home/minify.ts":
/*!****************************!*\
  !*** ./src/home/minify.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./src/home/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./src/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 1,
        title: '',
        free: false,
        source: {
            html: (_html_html__WEBPACK_IMPORTED_MODULE_0___default())
        },
        animation: 'slide',
        color: '#000',
        background: 'auto'
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lath_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lath/app */ "./node_modules/_lath@0.0.20@lath/app/index.js");
/* harmony import */ var _frameworks_minify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frameworks/minify */ "./src/frameworks/minify.ts");
/* harmony import */ var _home_minify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/minify */ "./src/home/minify.ts");
/* harmony import */ var _doc_minify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc/minify */ "./src/doc/minify.ts");
/* harmony import */ var _empty_minify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empty/minify */ "./src/empty/minify.ts");
/* harmony import */ var _components_menu_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-icon */ "./src/components/menu-icon/index.ts");
/* harmony import */ var _components_app_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app-nav */ "./src/components/app-nav/index.ts");
/* harmony import */ var _components_app_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app-logo */ "./src/components/app-logo/index.ts");
/* harmony import */ var _components_menu_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu-list */ "./src/components/menu-list/index.ts");









// docs
const app = new lath_app__WEBPACK_IMPORTED_MODULE_0__.Application();
app.setting({
    modules: {
        home: _home_minify__WEBPACK_IMPORTED_MODULE_2__["default"],
        frameworks: _frameworks_minify__WEBPACK_IMPORTED_MODULE_1__["default"],
        doc: _doc_minify__WEBPACK_IMPORTED_MODULE_3__["default"],
        empty: _empty_minify__WEBPACK_IMPORTED_MODULE_4__["default"]
    }
});
document.documentElement.style.background = '#000';
document.body.style.background = '#000';
app.start();
window['app'] = app;
// ;(function () { const script = document.createElement('script'); script.src = '//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { window['eruda'].init() } })();


/***/ }),

/***/ "./src/components/code-highlight/Prism.js":
/*!************************************************!*\
  !*** ./src/components/code-highlight/Prism.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = {};

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				// return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					// Check for existence for IE8
					return o.map && o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(root, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || root.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightCode: function (element, code, language, callback) {

		var grammar = _.languages[language]

		switch (language) {
			case 'html':
			case 'xml':
				code = code.replace(/\=\"\"/g, function () {
					return ''
				})

				break
		}

		element.innerHTML = _.highlight(code, grammar, language)

		callback && callback.call(element);
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1];
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		parent = element.parentNode;

		if (/pre/i.test(parent.nodeName)) {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		if (!code || !grammar) {
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		// if (async && _self.Worker) {
		// 	var worker = new Worker(_.filename);

		// 	worker.onmessage = function(evt) {
		// 		env.highlightedCode = evt.data;

		// 		_.hooks.run('before-insert', env);

		// 		env.element.innerHTML = env.highlightedCode;

		// 		callback && callback.call(env.element);
		// 		_.hooks.run('after-highlight', env);
		// 		_.hooks.run('complete', env);
		// 	};

		// 	worker.postMessage(JSON.stringify({
		// 		language: env.language,
		// 		code: env.code,
		// 		immediateClose: true
		// 	}));
		// }
		// else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		// }
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	tokenize: function(text, grammar, language) {
		var Token = _.Token;

		var strarr = [text];

		var rest = grammar ? grammar.rest : null;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		tokenloop: for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				pattern = pattern.pattern || pattern;

				for (var i=0; i<strarr.length; i++) { // Don’t cache length as it changes during the loop

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						break tokenloop;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						// Reconstruct the original text using the next two tokens
						var nextToken = strarr[i + 1].matchedStr || strarr[i + 1],
						    combStr = str + nextToken;

						if (i < strarr.length - 2) {
							combStr += strarr[i + 2].matchedStr || strarr[i + 2];
						}

						// Try the pattern again on the reconstructed text
						pattern.lastIndex = 0;
						match = pattern.exec(combStr);
						if (!match) {
							continue;
						}

						var from = match.index + (lookbehind ? match[1].length : 0);
						// To be a valid candidate, the new match has to start inside of str
						if (from >= str.length) {
							continue;
						}
						var to = match.index + match[0].length,
						    len = str.length + nextToken.length;

						// Number of tokens to delete and replace with the new match
						delNum = 3;

						if (to <= len) {
							if (strarr[i + 1].greedy) {
								continue;
							}
							delNum = 2;
							combStr = combStr.slice(0, len);
						}
						str = combStr;
					}

					if (!match) {
						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						args.push(before);
					}



					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);
				}
			}
		}

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.matchedStr = matchedStr || null;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (env.type == 'comment') {
		env.attributes['spellcheck'] = 'true';
	}

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = '';

	for (var name in env.attributes) {
		attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}
 	// In worker
	_self.addEventListener('message', function(evt) {
		var message = JSON.parse(evt.data),
		    lang = message.language,
		    code = message.code,
		    immediateClose = message.immediateClose;

		_self.postMessage(_.highlight(code, _.languages[lang], lang));
		if (immediateClose) {
			_self.close();
		}
	}, false);

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	// if (document.addEventListener && !script.hasAttribute('data-manual')) {
	// 	document.addEventListener('DOMContentLoaded', _.highlightAll);
	// }
}

return _self.Prism;

})();

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
	__webpack_require__.g.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\w\W]*?-->/,
	'prolog': /<\?[\w\W]+?\?>/,
	'doctype': /<!DOCTYPE[\w\W]+?>/,
	'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
				inside: {
					'punctuation sign': /[=]/,
					'punctuation quotes': /["']/,
					'punctuation': /[>]/,
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\w\W]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
	'property': /(\b|\B)[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css'
		}
	});

	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|').*?\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	}
});

Prism.languages.insertBefore('javascript', 'class-name', {
	'template-string': {
		pattern: /`(?:\\\\|\\?[^\\])*?`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
		}
	});
}

Prism.languages.js = Prism.languages.javascript;

/* **********************************************
     Begin prism-file-highlight.js
********************************************** */


(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function(pre) {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		var src = pre.getAttribute('data-src');

		var language, parent = pre;
		var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (pre.className.match(lang) || [, ''])[1];
		}

		if (!language) {
			var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
			language = Extensions[extension] || extension;
		}

		var code = document.createElement('code');
		code.className = 'language-' + language;

		pre.textContent = '';

		code.textContent = 'Loading…';

		pre.appendChild(code);

		var xhr = new XMLHttpRequest();

		xhr.open('GET', src, true);

		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {

				if (xhr.status < 400 && xhr.responseText) {
					code.textContent = xhr.responseText;

					Prism.highlightElement(code);
				}
				else if (xhr.status >= 400) {
					code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
				}
				else {
					code.textContent = '✖ Error: File does not exist or is empty';
				}
			}
		};

		xhr.send(null);

	};

})();


/* **********************************************
     extend more
********************************************** */

(function(Prism) {
	var insideString = {
		variable: [
			// Arithmetic Environment
			{
				pattern: /\$?\(\([\s\S]+?\)\)/,
				inside: {
					// If there is a $ sign at the beginning highlight $(( and )) as variable
					variable: [{
							pattern: /(^\$\(\([\s\S]+)\)\)/,
							lookbehind: true
						},
						/^\$\(\(/,
					],
					number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
					// Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
					operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
					// If there is no $ sign at the beginning highlight (( and )) as punctuation
					punctuation: /\(\(?|\)\)?|,|;/
				}
			},
			// Command Substitution
			{
				pattern: /\$\([^)]+\)|`[^`]+`/,
				inside: {
					variable: /^\$\(|^`|\)$|`$/
				}
			},
			/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i
		],
	};

	Prism.languages.bash = {
		'shebang': {
			pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
			alias: 'important'
		},
		'comment': {
			pattern: /(^|[^"{\\])#.*/,
			lookbehind: true
		},
		'string': [
			//Support for Here-Documents https://en.wikipedia.org/wiki/Here_document
			{
				pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			{
				pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g,
				greedy: true,
				inside: insideString
			}
		],
		'variable': insideString.variable,
		// Originally based on http://ss64.com/bash/
		'function': {
			pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gulp|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
			lookbehind: true
		},
		'keyword': {
			pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
			lookbehind: true
		},
		'boolean': {
			pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,
			lookbehind: true
		},
		'operator': /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
		'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
	};

	var inside = insideString.variable[1].inside;
	inside['function'] = Prism.languages.bash['function'];
	inside.keyword = Prism.languages.bash.keyword;
	inside.boolean = Prism.languages.bash.boolean;
	inside.operator = Prism.languages.bash.operator;
	inside.punctuation = Prism.languages.bash.punctuation;
})(Prism);

(function (Prism) {
	Prism.languages.markdown = Prism.languages.extend('markup', {});
	Prism.languages.insertBefore('markdown', 'prolog', {
		'blockquote': {
			// > ...
			pattern: /^>(?:[\t ]*>)*/m,
			alias: 'punctuation'
		},
		'code': [
			{
				// Prefixed by 4 spaces or 1 tab
				pattern: /^(?: {4}|\t).+/m,
				alias: 'keyword'
			},
			{
				// `code`
				// ``code``
				pattern: /``.+?``|`[^`\n]+`/,
				alias: 'keyword'
			}
		],
		'title': [
			{
				// title 1
				// =======

				// title 2
				// -------
				pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
				alias: 'important',
				inside: {
					punctuation: /==+$|--+$/
				}
			},
			{
				// # title 1
				// ###### title 6
				pattern: /(^\s*)#+.+/m,
				lookbehind: true,
				alias: 'important',
				inside: {
					punctuation: /^#+|#+$/
				}
			}
		],
		'hr': {
			// ***
			// ---
			// * * *
			// -----------
			pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
			lookbehind: true,
			alias: 'punctuation'
		},
		'list': {
			// * item
			// + item
			// - item
			// 1. item
			pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
			lookbehind: true,
			alias: 'punctuation'
		},
		'url-reference': {
			// [id]: http://example.com "Optional title"
			// [id]: http://example.com 'Optional title'
			// [id]: http://example.com (Optional title)
			// [id]: <http://example.com> "Optional title"
			pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
			inside: {
				'variable': {
					pattern: /^(!?\[)[^\]]+/,
					lookbehind: true
				},
				'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
				'punctuation': /^[\[\]!:]|[<>]/
			},
			alias: 'url'
		},
		'bold': {
			// **strong**
			// __strong__

			// Allow only one line break
			pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
			lookbehind: true,
			inside: {
				'punctuation': /^\*\*|^__|\*\*$|__$/
			}
		},
		'italic': {
			// *em*
			// _em_

			// Allow only one line break
			pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
			lookbehind: true,
			inside: {
				'punctuation': /^[*_]|[*_]$/
			}
		},
		'url': {
			// [example](http://example.com "Optional title")
			// [example] [id]
			pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
			inside: {
				'variable': {
					pattern: /(!?\[)[^\]]+(?=\]$)/,
					lookbehind: true
				},
				'string': {
					pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
				}
			}
		}
	});

	Prism.languages.markdown['bold'].inside['url'] = Prism.util.clone(Prism.languages.markdown['url']);
	Prism.languages.markdown['italic'].inside['url'] = Prism.util.clone(Prism.languages.markdown['url']);
	Prism.languages.markdown['bold'].inside['italic'] = Prism.util.clone(Prism.languages.markdown['italic']);
	Prism.languages.markdown['italic'].inside['bold'] = Prism.util.clone(Prism.languages.markdown['bold']);
})(Prism)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_self.Prism);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("9b888d7d8981570354e2")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "lath-docs:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatelath_docs"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map