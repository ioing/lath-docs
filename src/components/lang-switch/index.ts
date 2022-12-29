import template from './template.html'

const tmpl = document.createElement('template')
tmpl.innerHTML = `${template}`

export class LangSwitch extends HTMLElement {
  public menuButton: any | null
  public popoverLayer: HTMLElement | null
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(tmpl.content.cloneNode(true))

    /** @type {HTMLElement | null} */
    this.menuButton = shadowRoot.getElementById('m')
    this.popoverLayer = shadowRoot.getElementById('popoverLayer')
    console.log(this.menuButton, this.popoverLayer)
  }

  connectedCallback() {
    if (this.menuButton !== null) {
      this.menuButton.addEventListener('click', this.handleMenuButtonClick.bind(this))
    }
    if (this.popoverLayer !== null) {
      this.popoverLayer.addEventListener('click', this.handlePopoverLayerClick.bind(this))
    }

    this.upgradeProperty('open')
  }

  upgradeProperty(prop: string) {
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

  attributeChangedCallback() {
    if (this.open) {
      this.popoverLayer!.style.display = 'block'
    } else {
      this.popoverLayer!.style.display = 'none'
    }
  }

  handleMenuButtonClick() {
    if (!this.popoverLayer) return
    this.open = !this.open
    if (this.open) {
      this.popoverLayer.style.display = 'block'
    } else {
      this.popoverLayer.style.display = 'none'
    }
  }

  handlePopoverLayerClick(event: Event) {
    const path = event.composedPath()
    const target = path[0] as HTMLElement
    if (target === this.popoverLayer) {
      this.open = false
    }
    if (target.tagName === 'LI') {
      const lang = target.getAttribute('data-lang')
      if (lang) {
        try {
          localStorage.setItem('__lang__', lang)
        } catch (e) {
        }
        window['lathApp'].refresh()
      }
      this.open = false
    }
  }
}

customElements.define('lang-switch', LangSwitch)
