export default {
  title: 'Timeout',
  content: [
    [
      {
        type: 'title',
        value: 'Timeout'
      },
      {
        type: 'sub',
        value: 'AppletConfig > timeout'
      },
      {
        type: 'text',
        value: '程序卡生命周期的有效时长，单位为毫秒。'
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
              timeout?: number
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
        value: '程序卡符合缓存条件或设置为允许背景运行(background=true)时，程序卡在二次进入前会检查过期情况，当检查到程序卡已过期时将会进行更新操作。'
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
                    timeout: 36000
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
        value: '若该值设置为 0 时，则背景运行(background=true)将不会生效。'
      }
    ]
  ]
}