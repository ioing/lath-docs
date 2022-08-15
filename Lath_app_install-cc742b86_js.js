"use strict";
(self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || []).push([["Lath_app_install-cc742b86_js"],{

/***/ "../Lath/app/install-cc742b86.js":
/*!***************************************!*\
  !*** ../Lath/app/install-cc742b86.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "install": () => (/* binding */ install)
/* harmony export */ });
const createWorkerURL=(e,t)=>{e=`
    this.addEventListener('install', function(event) {
      event.waitUntil(
        caches.open('v_${t}').then(function(cache) {
          return cache.addAll(["${e.join('","')}"])
        })
      )
    })
    this.addEventListener('fetch', function(event) {
      event.respondWith(
        caches.match(event.request).then(function() {
          return fetch(event.request).then(function(response) {
            return caches.open('v_${t}').then(function(cache) {
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
            if (['v_${t}'].indexOf(key) === -1) {
              return caches.delete(key)
            }
          }))
        })
      )
    })
  `;return URL.createObjectURL(new Blob([e],{type:"text/html"}))},install=(e,t)=>{var{swPathUrl:e,scope:n="",source:r=[]}=e,e=e||createWorkerURL(r,t);return e&&"serviceWorker"in navigator?navigator.serviceWorker.register(e,{scope:n}):Promise.reject()};

/***/ })

}]);
//# sourceMappingURL=Lath_app_install-cc742b86_js.js.map