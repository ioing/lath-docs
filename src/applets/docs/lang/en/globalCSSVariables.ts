export default {
  title: 'GlobalCSSVariables',
  content: [
    [
      {
        type: 'title',
        value: 'GlobalCSSVariables'
      },
      {
        type: 'sub',
        value: 'FrameworksAppletConfig > globalCSSVariables'
      },
      {
        type: 'text',
        value: 'Set global CSS variables for the application. (Frameworks Applet exclusive configuration)'
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
            type GlobalCSSVariables = { [key: string]: string }
            interface AppletBaseConfig {
              globalCSSVariables?: GlobalCSSVariables | (() => GlobalCSSVariables)
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
        value: 'Similar to [safeArea], it can only take effect under the same domain Applet page.'
      },
      {
        type: 'text',
        value: 'If you need to dynamically modify or increase this value, you can update it through the "API-updateGlobalCSSVariables" event.'
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
            createApplication({
              applets: {
                home: {
                  config: {
                    globalCSSVariables: {
                      '--main-color': '#fff',
                      '--title-font-size': '28px'
                    }
                  }
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
        value: 'Use with "API-updateGlobalCSSVariables" to create a smooth theme transition effect.'
      }
    ]
  ]
}