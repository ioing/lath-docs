(function () {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined ||
    // The webcomponentsjs custom elements polyfill doesn't require
    // ES2015-compatible construction (`super()` or `Reflect.construct`).
    window.customElements['polyfillWrapFlushCallback']
  ) return
  interface IBuiltInHTMLElement {
    new (): HTMLElement
    prototype: HTMLElement
  }
  const BuiltInHTMLElement = HTMLElement
  /**
   * With jscompiler's RECOMMENDED_FLAGS the function name will be optimized away.
   * However, if we declare the function as a property on an object literal, and
   * use quotes for the property name, then closure will leave that much intact,
   * which is enough for the JS VM to correctly set Function.prototype.name.
   */
  const wrapperForTheName = {
    'HTMLElement': /** @this {!Object} */ function HTMLElement () {
      return Reflect.construct(BuiltInHTMLElement, [], /** @type {!Function} */ ((this as any).constructor))
    }
  }
  window.HTMLElement = wrapperForTheName['HTMLElement'] as unknown as IBuiltInHTMLElement
  HTMLElement.prototype = BuiltInHTMLElement.prototype
  HTMLElement.prototype.constructor = HTMLElement
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement)
})()

import template from './template.html'

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template')
tmpl.innerHTML = template

export class MenuIcon extends HTMLElement {
  public _menuButton: any | null
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
  attributeChangedCallback (_name, _oldValue, _newValue) {
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
  }
}

customElements.define('menu-icon', MenuIcon)
