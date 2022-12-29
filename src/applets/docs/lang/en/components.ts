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
        value: 'Applet pages that belong to the same origin can share Web Components with the main Applet page.'
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
        value: 'As a future-oriented component standard, Web Components are not only easy to share, but also can greatly improve the experience performance of the page.'
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
        value: 'Since Web Components are to be shared into each Applet Container, we need to register the component in the window variable of the Applet when we encapsulate the component.'
      }
    ]
  ]
}