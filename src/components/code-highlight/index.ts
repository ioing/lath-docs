import Prism from './Prism'
import template from './template.html'

const tmpl = document.createElement('template')
tmpl.innerHTML = `${template}`

export const ScopeCodeHighlighter = (w): CustomElementConstructor => {
  class CodeHighlighter extends w.HTMLElement {
    constructor () {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      shadowRoot.appendChild(tmpl.content.cloneNode(true))
      const ele = shadowRoot.getElementById('code')
      const lang = this.getAttribute('type')
      let codeText = this.childNodes[0]?.wholeText ?? ''
      const trimstr = /^\s+/.exec(codeText)?.[0] || ''
      const trimlength = trimstr.length
      codeText = codeText.replace(/\n\s+/g, function (trims) {
        trims = '\n' + trims.substr(trimlength)
        return trims
      })
      codeText = codeText.trim()
      if (this.offsetTop === 0) {
        setTimeout(() => {
          Prism.highlightCode(ele, codeText, lang ?? 'js')
        }, 100)
        return
      }
      Prism.highlightCode(ele, codeText, lang ?? 'js')
    }

    connectedCallback () {
      //
    }

    static get observedAttributes () {
      return ['']
    }

    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    // attributeChangedCallback (name: string, _oldValue, _newValue) {
    // }
  }

  return CodeHighlighter as unknown as CustomElementConstructor
}

// customElements.define('code-highlight', CodeHighlighter)
