export default {
  title: 'Color',
  content: [
    [
      {
        type: 'title',
        value: 'Color'
      },
      {
        type: 'sub',
        value: 'AppletConfig > color'
      },
      {
        type: 'text',
        value: '定义程序卡的初始窗口背景色。'
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
              color?: string
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
        value: '默认背景色可以在程序卡未加载完成时呈现良好的视觉过渡。'
      },
      {
        type: 'text',
        value: '默认值会根据浏览器是否为“Dark 模式”来自动填充黑色/白色。'
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
                    color: '#000'
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
        value: '请选用合适的背景色来填充程序卡窗口，以确保视觉效果的连贯性。'
      },
      {
        type: 'tips',
        value: '当背景色与程序卡内容不一致时，用户很有可能见到一个闪烁。'
      }
    ]
  ]
}