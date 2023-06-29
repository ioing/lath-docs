import { FrameworksAppletManifest, FrameworksAppletConfig } from 'lath/app/typings/types'
import { lightTheme, darkTheme, defTheme } from './theme'

let updateThemeEvent: (event: MessageEvent) => void
export default {
  config: {
    index: 'home',
    title: 'LATH',
    level: 0,
    free: false,
    prerender: ['home', 'directory', 'empty', 'docs', 'support', 'weChatQrCode', 'weChatPay', 'demo1'],
    // swipeModel: true, // 默认 android 以及 pc 和 不支持 touch 的设备为关闭
    pullToRefresh: true,
    animation: 'slide' as 'slide',
    appSwitcher: true,
    background: true,
    untouchableSegueType: 'fade',
    color: 'var(--background)',
    safeArea: ['38px', '0px', '0px', '0px'],
    inject: (_shadowWindow, applet) => {
      /**
       * 订阅主题切换按钮发出的更新主题事件
       */
      updateThemeEvent = (e: MessageEvent) => {
        if (e.data !== 'dark-switch') return
        const config = applet.config as FrameworksAppletConfig
        const curTheme = config.globalCSSVariables === darkTheme ? lightTheme : darkTheme
        applet.application.updateGlobalCSSVariables(curTheme)
        config.globalCSSVariables = curTheme
      }
      window.addEventListener('message', updateThemeEvent)
    },
    injectToDocument: (shadowWindow) => {
      try {
        const isShowSupported = localStorage.getItem('isShowSupported')
        if (isShowSupported) return
        const supportModal = shadowWindow.document.getElementById('supportModal')
        setTimeout(() => {
          if (supportModal) {
            supportModal.style.display = 'block'
            setTimeout(() => {
              supportModal.style.opacity = '1'
            }, 100)
            const closeModal = shadowWindow.document.getElementById('closeModal')
            if (closeModal) {
              closeModal.addEventListener('click', () => {
                supportModal.style.opacity = '0'
                setTimeout(() => {
                  supportModal.style.display = 'none'
                }, 400)
                localStorage.setItem('isShowSupported', 'true')
              })
            }
          }
        }, 4000)
      } catch (error) {
        //
      }
    },
    transfer: (url) => {
      if (url.indexOf('#empty') !== -1) {
        return 'empty'
      }
      return url.indexOf('#docs') !== -1 ? 'docs' : ''
    },
    globalCSSVariables: defTheme
  },
  events: {
    destroy: () => {
      window.removeEventListener('message', updateThemeEvent)
    }
  }
}
