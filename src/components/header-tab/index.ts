import template from './template.html'
import { Applet } from 'lath/app/typings/types'

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template')
tmpl.innerHTML = template

export class HeaderTab extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(tmpl.content.cloneNode(true))

    const homeBtn = shadowRoot.getElementById('home-btn')
    const apiBtn = shadowRoot.getElementById('api-btn')
    const tab = shadowRoot.getElementById('tab')
    window.addEventListener('lathApplicationReady', (event) => {
      const { detail } = event as CustomEvent
      detail.application.get('home').then((homeApplet: Applet) => {
        homeApplet.on('slideEnter', (applet) => {
          if (applet.id === 'directory') {
            homeBtn?.setAttribute('class', 'word active')
            apiBtn?.setAttribute('class', 'word')
            tab!.style.transform = 'translate(-50%, -50%)'
          } else {
            apiBtn?.setAttribute('class', 'word active')
            homeBtn?.setAttribute('class', 'word')
            tab!.style.transform = 'translate(-100%, -50%)'
          }
        })
      })
    })
  }
}

customElements.get('header-tab') || customElements.define('header-tab', HeaderTab)
