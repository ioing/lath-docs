export default {
  title: 'Free',
  content: [
    [
      {
        type: 'title',
        value: 'Free'
      },
      {
        type: 'sub',
        value: 'AppletConfig > free'
      },
      {
        type: 'text',
        value: '定义程序卡的窗口展示类型。'
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
              free?: boolean
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
        value: 'free 等于 true 时，程序卡以“全屏模式”运行，即不受框架程序卡（Applets[id = frameworks]）的约束。'
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
                    free: true
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
        value: '假设 frameworks 程序卡是一个带有 tabBar 功能的模块，此时程序卡将直接覆盖整个框架程序卡运行，反之程序卡则会在框架程序卡之内运行（即表现为 tabBar 覆盖在程序卡之上）。'
      }
    ]
  ]
}