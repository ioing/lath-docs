export default {
  title: 'Application.get/add/del',
  content: [
    [
      {
        type: 'title',
        value: 'Application.get'
      },
      {
        type: 'sub',
        value: 'Application.get'
      },
      {
        type: 'text',
        value: '获得程序卡对象 Applet。'
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
            type get = (id: string) => Promise&lt;Applet>
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
        value: '“id”为要获取的程序卡名。'
      },
      {
        type: 'text',
        value: '其返回为一个 Promise。'
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
            const home = await application.get('home')
          </code-highlight>
        `
      }
    ],
    [
      {
        type: 'title',
        value: 'Application.del'
      },
      {
        type: 'sub',
        value: 'Application.del'
      },
      {
        type: 'text',
        value: '删除一个程序卡对象 Applet。'
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
            type del = (id: string) => Promise&lt;boolean>
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
        value: '“id”为要删除的程序卡名。'
      },
      {
        type: 'text',
        value: '其返回为一个 Promise，删除成功你将获得 true。'
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
            const isDel = await application.del('demo')
          </code-highlight>
        `
      }
    ],
    [
      {
        type: 'title',
        value: 'Application.add'
      },
      {
        type: 'sub',
        value: 'Application.add'
      },
      {
        type: 'text',
        value: '增加一个程序卡对象 Applet。'
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
            declare interface AppletManifest {
              config: AppletConfig
              resources?: AppletResources
              components?: ((w: Window) => CustomElementConstructor)[]
              events?: Partial<AppletEvents>
            }
            type add = (id: string, manifest: AppletManifest) => Applet
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
        value: '“id”为要新增的程序卡名。'
      },
      {
        type: 'text',
        value: '其返回为新程序卡对象 Applet。'
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
            const newApplet = await application.add('demo', {
              config: {
                title: 'title',
                ...
              }
            })
          </code-highlight>
        `
      }
    ]
  ]
}