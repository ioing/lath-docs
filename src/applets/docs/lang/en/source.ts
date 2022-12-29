export default {
  title: 'Source',
  content: [
    [
      {
        type: 'title',
        value: 'Source'
      },
      {
        type: 'sub',
        value: 'AppletConfig > source'
      },
      {
        type: 'text',
        value: 'Define the HTML source code for the applet, which will run inside the container created by Lath.'
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
              source?: EitherOr<{
                src?: string
                html?: string | (() => Promise<string> | string)
              }, 'src', 'html'>,
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
        value: 'Can be divided into Source Mode and Link Mode.'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Example</h3>'
      },
      {
        type: 'text',
        value: '<b>Source Mode</b>'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            createApplication({
              applets: {
                home: {
                  config: {
                    title: 'Home Page',
                    source: {
                      html: \`
                        &lt;html lang="en">
                        &lt;head>&lt;/head>
                        &lt;body>
                          Hello World!
                        &lt;/body>
                        &lt;/html>
                        \`
                    }
                  }
                }
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '<b>Link Mode</b>'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="js">
            export default {
              config: {
                  title: 'Home Page',
                  source: {
                  src: 'http://yoursite.com'
                }
              }
            }
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: 'Choose one of the two modes. And if they coexist, the src Link Mode will take precedence.'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Notes</h3>'
      },
      {
        type: 'tips',
        value: 'When using Link Mode, you need to comply with the same-origin policy, otherwise some capabilities will not be enabled, such as Capture, Apply, Inject, etc. If you need to use these features, you need to also connect the target page to Lath and turn on the \'tunneling\' mode, which can be referred to "PresetConfig > tunneling".'
      }
    ]
  ]
}