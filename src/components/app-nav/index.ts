import template from './template.html'

const tmpl = document.createElement('template')
tmpl.innerHTML = `${template}`

export class AppNav extends HTMLElement {
  public header: HTMLElement | null
  public menuIcon: HTMLElement | null
  public menuList: HTMLElement | null
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(tmpl.content.cloneNode(true))

    /** @type {HTMLElement | null} */
    this.header = shadowRoot.getElementById('header')
    this.menuIcon = shadowRoot.getElementById('menu-icon')
    this.menuList = shadowRoot.getElementById('menu-list')
  }

  connectedCallback () {
    if (this.header !== null) {
      // this.header.addEventListener('click', this.handleMenuButtonClick)
    }

    this.upgradeProperty('hidden')

    this.menuIcon?.addEventListener('opened', () => {
      this.menuList?.setAttribute('open', '')
    })
    this.menuIcon?.addEventListener('closed', () => {
      this.menuList?.removeAttribute('open')
    })
    this.menuList?.addEventListener('click', (event: MouseEvent) => {
      const e = new CustomEvent('click', {
        detail: event
      })
      window.dispatchEvent(
        new CustomEvent('click', e)
      )
      event.preventDefault()
      event.stopPropagation()
    })
  }

  upgradeProperty (prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop]
      delete this[prop]
      this[prop] = value
    }
  }

  get hidden () {
    return this.hasAttribute('hidden')
  }

  set hidden (isHidden) {
    if (isHidden) {
      if (!this.hasAttribute('hidden')) {
        this.setAttribute('hidden', '')
      }
    } else {
      if (this.hasAttribute('hidden')) {
        this.removeAttribute('hidden')
      }
    }
  }

  static get observedAttributes () {
    return ['hidden']
  }

  /**
   * @param {string} _name
   * @param {any} _oldValue
   * @param {any} _newValue
   * @memberof WcMenuButton
   */
  attributeChangedCallback (name: string, _oldValue, _newValue) {
    if (name === 'hidden') {
      if (!this.hidden) {
        this.dispatchEvent(
          new CustomEvent('hidden', {
            bubbles: true
          })
        )
      } else {
        this.dispatchEvent(
          new CustomEvent('visible', {
            bubbles: true
          })
        )
      }
    }
  }
}

customElements.define('app-nav', AppNav)
