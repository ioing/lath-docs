import { createApplication } from 'lath'
import frameworksManifest from './applets/frameworks/manifest'
import home from './applets/home/manifest'
import directory from './applets/directory/manifest'
import tutorial from './applets/tutorial/manifest'
import api from './applets/api/manifest'
import docs from './applets/docs/manifest'
import weChatQrCode from './applets/weChatQrCode/manifest'
import empty from './applets/empty/manifest'
import system from './applets/system/manifest'
import support from './applets/support/manifest'
import weChatPay from './applets/wechatPay/manifest'
import './webComponents'
import mainHTML from './mainHTML'
import { Application } from 'lath/app/typings/types'

document.body.innerHTML = mainHTML

// 设置浏览器默认语言为文档语言
try {
  if (!localStorage.getItem('__lang__')) {
    localStorage.setItem('__lang__', navigator.language)
  }
} catch (error) {
  //
}

createApplication({
  zIndex: 1,
  applets: {
    home,
    directory,
    tutorial,
    frameworks: frameworksManifest,
    docs,
    api,
    empty,
    system,
    support,
    weChatQrCode,
    weChatPay,
    demo1: {
      config: {
        title: 'demo',
        free: true,
        animation: 'slide',
        source: {
          src: './Exp/def/index.html'
        },
        apply: []
      }
    }
  }
}).then((application: any) => {
  window.lathApp = application
  // try {
  //   if ("ontouchstart" in document.documentElement && !sessionStorage.getItem('firstVisit')) {
  //     setTimeout(() => {
  //       if (confirm('Check out the latest progress of the project now?')) {
  //         application.to('support')
  //       }
  //     }, 6000)
  //   }
  // } catch (error) {
  //   //
  // }
})

// Registering Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', {
    updateViaCache: 'all'
  })
  // Chrome Dev Tools - Update on Reload
  let refreshing = false
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) {
      return
    }
    refreshing = true
    window.location.reload()
  })
}

// ;(function () { const script = document.createElement('script'); script.src = '//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { window['eruda'].init() } })();
