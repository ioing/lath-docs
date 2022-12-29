export default {
  title: 'Title',
  content: [
    [
      {
        type: 'title',
        value: 'Title'
      },
      {
        type: 'sub',
        value: 'AppletConfig > title'
      },
      {
        type: 'text',
        value: '程序卡标题，主要用于浏览器窗口标题的显示。'
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
              title?: string
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
        value: '当窗口切换时，该配置项相当于页面中的 "Title" 标签的作用。'
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
                    title: 'Home Page'
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
        type: 'tips',
        value: '当 system 程序卡、 frameworks 程序卡 以及首页程序卡同时设置 title 时，它们的显示权重是： 首页程序卡 > frameworks 程序卡 > system 程序卡。而实际上 system 类型程序卡的此选项是不必要的，因为它从不会生效。'
      }
    ]
  ]
}