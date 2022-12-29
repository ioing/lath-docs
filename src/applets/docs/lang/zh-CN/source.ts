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
        value: '定义程序卡的 HTML 源代码，该源代码将在 Lath 创建的容器内运行。'
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
        value: '可设置为源码模式与链接模式两种模式。'
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
        value: '<b>源码模式</b>'
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
                    },
                    ...
                  }
                },
                ...
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '<b>链接模式</b>'
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
        value: '两种模式选其一，若共存时将以 src 链接模式优先。'
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
        value: '使用链接模式时需符合同源策略，否者某些能力将无法开启，比如 Capture、Apply、Inject 等。若需要使用这些特性，则需要将目标页面也同样接入 lath，并开启“隧穿”模式，可参考“PresetConfig > tunneling”。'
      }
    ]
  ]
}