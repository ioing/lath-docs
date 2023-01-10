import Prism from './Prism'
import template from './template.html'

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
    new(): HTMLElement
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
    'HTMLElement': /** @this {!Object} */ function HTMLElement() {
      return Reflect.construct(BuiltInHTMLElement, [], /** @type {!Function} */((this as any).constructor))
    }
  }
  window.HTMLElement = wrapperForTheName['HTMLElement'] as unknown as IBuiltInHTMLElement
  HTMLElement.prototype = BuiltInHTMLElement.prototype
  HTMLElement.prototype.constructor = HTMLElement
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement)
})()

const tmpl = document.createElement('template')
tmpl.innerHTML = `${template}`

export const ScopeCodeHighlighter = (w): CustomElementConstructor => {
  class CodeHighlighter extends w.HTMLElement {
    constructor() {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      shadowRoot.appendChild(tmpl.content.cloneNode(true))
      const ele = shadowRoot.getElementById('code')
      const lang = this.getAttribute('type')
      let codeText = this.childNodes[0]?.wholeText ?? ''
      const trimstr = /^\s+/.exec(codeText)?.[0] || ''
      const trimlength = trimstr.length
      codeText = codeText.replace(/\n\s+/g, function (trims) {
        trims = trims.substr(trimlength)
        return trims
      })
      codeText = codeText.trim()
      // if (this.offsetTop === 0) {
      //   setTimeout(() => {
      //     Prism.highlightCode(ele, codeText, lang ?? 'js')
      //   }, 100)
      //   return
      // }
      // Prism.highlightCode(ele, codeText, lang ?? 'js')
      const html = Prism.highlight(codeText, Prism.languages[lang], lang);
      ele.innerHTML = html;
    }

    connectedCallback() {
      //
    }

    static get observedAttributes() {
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
