export default {
  title: 'Inject',
  content: [
    [
      {
        type: 'title',
        value: 'Inject'
      },
      {
        type: 'sub',
        value: 'AppletConfig > inject'
      },
      {
        type: 'text',
        value: 'When it is a same-origin Applet page, the set global varialbles and methods can be injected into the Applet page before the Applet page is loaded, such as injecting some \'JSBridge\', common variables or rewriting global objects.'
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
            interface AppletBaseConfig {
              inject?: (w: Window, m: Applet) => void
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
        value: 'For example, the link jump in the Applet is carried out through \'JSBridge\', so Lath cannot automatically capture it, so now you want to rewrite the logic, then you can use this option to rewrite it.'
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
                    inject: (appletWindow, applet) => {
                      appletWindow.open = (url) => {
                        return applet.application.pushWindow(url).catch(() => {
                          window.open(url)
                        })
                      }
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
        value: 'It should be noted that the \'inject\' option is restricted by the same domain, so it cannot be used in cross-domain scenarios.'
      },
      {
        type: 'text',
        value: '\'injcect\' is a powerful capability, and you can develop incredible capabilities based on it.'
      }
    ]
  ]
}