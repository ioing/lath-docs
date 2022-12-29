import template from './template.html'

const tmpl = document.createElement('template')
tmpl.innerHTML = `${template}`

export class DarkSwitch extends HTMLElement {
  public _menuButton: any | null
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(tmpl.content.cloneNode(true))

    /** @type {HTMLElement | null} */
    this._menuButton = shadowRoot.getElementById('m')
  }

  connectedCallback() {
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
  upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop]
      delete this[prop]
      this[prop] = value
    }
  }

  get open() {
    return this.hasAttribute('open')
  }

  set open(isOpen) {
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

  static get observedAttributes() {
    return ['open']
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
    parent.postMessage('dark-switch', '*')
  }
}

customElements.define('dark-switch', DarkSwitch)
