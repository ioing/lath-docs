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
        value: '设定应用的全局 CSS 变量。（frameworks 程序卡专属配置）'
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
        value: '与 [safeArea] 相似，同样只能在同域程序卡页面下生效。'
      },
      {
        type: 'text',
        value: '如果需要动态的修改或增加这个值则可以通过 “API-updateGlobalCSSVariables” 事件来进行更新'
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
        value: '配合 “API-updateGlobalCSSVariables” 使用，可创造出丝滑的主题切换效果。'
      }
    ]
  ]
}