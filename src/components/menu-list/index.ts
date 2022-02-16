import template from './template.html'

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template')
tmpl.innerHTML = template

export class MenuList extends HTMLElement {
  public _menuButton: HTMLElement | null
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(tmpl.content.cloneNode(true))

    /** @type {HTMLElement | null} */
    this._menuButton = shadowRoot.getElementById('m')
  }

  connectedCallback () {
    if (this._menuButton !== null) {
      this._menuButton.addEventListener('click', this.handleMenuButtonClick)
    }

    this.upgradeProperty('open')
  }

  // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
  /**
   * @param {string} prop
   *
   * @memberOf WcMenuButton
   */
  upgradeProperty (prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop]
      delete this[prop]
      this[prop] = value
    }
  }

  get open () {
    return this.hasAttribute('open')
  }

  set open (isOpen) {
    if (isOpen) {
      if (!this.hasAttribute('open')) {
        this.setAttribute('open', '')
      }
    } else {
      if (this.hasAttribute('open')) {
        this.removeAttribute('open')
      }
    }
  }

  static get observedAttributes () {
    return ['open']
  }

  /**
   * @param {string} _name
   * @param {any} _oldValue
   * @param {any} _newValue
   * @memberof WcMenuButton
   */
  attributeChangedCallback (name, _oldValue, _newValue) {
    if (name === 'open') {
      if (!this.open) {
        this.dispatchEvent(
          new CustomEvent('closed', {
            bubbles: true
          })
        )
      } else {
        this.dispatchEvent(
          new CustomEvent('opened', {
            bubbles: true
          })
        )
      }
    }
  }

  handleMenuButtonClick = () => {
    this.open = !this.open
  }
}

customElements.define('menu-list', MenuList)
