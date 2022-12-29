export default {
  title: 'Components',
  content: [
    [
      {
        type: 'title',
        value: 'Components'
      },
      {
        type: 'sub',
        value: 'AppletManifest > components'
      },
      {
        type: 'text',
        value: '属于同源的程序卡页面可与主程序卡页面共享 Web Components。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Types</h3>'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            interface AppletManifest {
              components?: ((w: Window) => CustomElementConstructor)[]
            }
          </code-highlight>
        `
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Details</h3>'
      },
      {
        type: 'text',
        value: 'Web Components 作为面向未来的组件标准，不仅易于共享也能极大程度上提升页面的体验性能。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Example</h3>'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            export const getCodeHighlighter = (shadowWindow): CustomElementConstructor => {
              class CodeHighlighter extends shadowWindow.HTMLElement {
                constructor () {
                  super()
                  const shadowRoot = this.attachShadow({ mode: 'open' })
                  shadowRoot.appendChild(tmpl.content.cloneNode(true))
                  ...
                }
              }
      
              return CodeHighlighter as unknown as CustomElementConstructor
            }
            createApplication({
              applets: {
                home: {
                  config: {
                    title: 'Home Page'
                  },
                  components: [getCodeHighlighter]
                }
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Notes</h3>'
      },
      {
        type: 'text',
        value: '由于 Web Components 是要共享到各个程序卡容器内，因此我们封装组件时需要将组件注册到该程序卡的 window 变量中。'
      }
    ]
  ]
}