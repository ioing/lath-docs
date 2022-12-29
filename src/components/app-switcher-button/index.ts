import template from './template.html'

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template')
tmpl.innerHTML = template

export class AppSwitcherButton extends HTMLElement {
  public button: any | null
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(tmpl.content.cloneNode(true))

    /** @type {HTMLElement | null} */
    this.button = shadowRoot.getElementById('app-switcher-button')
  }

  connectedCallback() {
    if (this.button !== null) {
      this.button.addEventListener('click', this.handleMenuButtonClick)
    }
  }

  disconnectedCallback() {
    if (this.button !== null) {
      this.button.removeEventListener('click', this.handleMenuButtonClick)
    }
  }

  handleMenuButtonClick = () => {
    window.lathApp.appSwitcher.open()
  }
}

customElements.define('app-switcher-button', AppSwitcherButton)
