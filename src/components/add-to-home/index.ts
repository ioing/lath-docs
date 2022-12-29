declare global {
  interface Navigator {
    standalone: boolean
  }
}

import cssText from './style'
import intl from './lang'

// browser info and capability
const nav = window.navigator
const ua = nav.userAgent
const isIDevice = (/iphone|ipod|ipad/i).test(ua)
const deviceLang = nav.language && nav.language.toLowerCase().replace('-', '_') || ''
const isMobileChrome = ua.indexOf('Android') > -1 && (/Chrome\/[.0-9]*/).test(ua) && ua.indexOf("Version") == -1
const isMobileIE = ua.indexOf('Windows Phone') > -1
const language = deviceLang && deviceLang in intl ? deviceLang : 'en_us'
const isMobileSafari = isIDevice && ua.indexOf('Safari') > -1 && ua.indexOf('CriOS') < 0
const OS = isIDevice ? 'ios' : isMobileChrome ? 'android' : isMobileIE ? 'windows' : 'unsupported'
const OSVersionDes = ua.match(/(OS|Android) (\d+[_\.]\d+)/)
const OSVersion = OSVersionDes && OSVersionDes[2] ? + OSVersionDes[2].replace('_', '.') : 0
const isStandalone = 'standalone' in window.navigator && window.navigator.standalone
const isTablet = (isMobileSafari && ua.indexOf('iPad') > -1) || (isMobileChrome && ua.indexOf('Mobile') < 0)
const isCompatible = (isMobileSafari && OSVersion >= 6) || isMobileChrome

class AddToHome extends HTMLElement {
  public container: HTMLElement
  public viewport: HTMLElement
  public clickMaskKey = '__add_to_home_not_displayed_again'
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    const viewport = this.viewport = document.createElement('div')
    viewport.className = 'ath-viewport'
    viewport.style.display = 'none'
    const container = this.container = document.createElement('div')
    container.className = 'ath-container ath-icon ath-' + OS + ' ath-' + OS + (OSVersion || '') + ' ath-' + (isTablet ? 'tablet' : 'phone')
    container.style.cssText = '-webkit-transition-property: -webkit-transform, opacity; -webkit-transition-duration: 0s; -webkit-transition-timing-function: ease-out; transition-property: transform, opacity; transition-duration: 0s; transition-timing-function: ease-out;'
    const style = document.createElement('style')
    style.innerHTML = cssText
    shadowRoot.appendChild(style)
    viewport.appendChild(container)
    shadowRoot.appendChild(viewport)
    if (isStandalone || this.getMask()) return
    this.open()
    viewport.addEventListener('click', () => {
      this.close()
      this.setMask()
    })
  }
  public open() {
    let message = ''
    if (OS in intl[language]) {
      message = intl[language][OS]
    } else {
      message = intl[language]['android'] || intl['en_us']['android']
    }
    let applicationIcon: HTMLLinkElement | null = null
    if (OS == 'ios') {
      applicationIcon = document.querySelector('head link[rel^=apple-touch-icon][sizes="152x152"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon][sizes="120x120"],head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon]')
    } else {
      applicationIcon = document.querySelector('head link[rel^="shortcut icon"][sizes="196x196"],head link[rel^=apple-touch-icon]')
    }

    // add the application icon
    if (applicationIcon) {
      const icon = document.createElement('img')
      icon.className = 'ath-application-icon'
      icon.src = applicationIcon.href
      this.container.appendChild(icon)
    } else {
      const placeholder = document.createElement('div')
      placeholder.style.width = '20px'
      placeholder.style.height = '20px'
      this.container.appendChild(placeholder)
    }

    // add the action icon
    message = '<p>' + message.replace(/%icon(?:\[([^\]]+)\])?/gi, function (_matches, group1) {
      return '<span class="ath-action-icon">' + (!!group1 ? group1 : 'icon') + '</span>'
    }) + '</p>'

    this.container.innerHTML += message
    this.viewport.style.display = 'block'
  }
  public close() {
    this.viewport.style.display = 'none'
  }
  public setMask() {
    try {
      if (!localStorage) {
        throw new Error('localStorage is not defined');
      }

      return localStorage.setItem(this.clickMaskKey, '1');
    } catch (e) {
      return false
    }
  }
  public getMask() {
    try {
      if (!localStorage) {
        throw new Error('localStorage is not defined');
      }

      return localStorage.getItem(this.clickMaskKey);
    } catch (e) {
      return false
    }
  }
}

customElements.define('add-to-home', AddToHome)
