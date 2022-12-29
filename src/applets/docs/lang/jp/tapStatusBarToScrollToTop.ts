export default {
  title: 'TapStatusBarToScrollToTop',
  content: [
    [
      {
        type: 'title',
        value: 'TapStatusBarToScrollToTop'
      },
      {
        type: 'sub',
        value: 'AppletConfig > tapStatusBarToScrollToTop'
      },
      {
        type: 'text',
        value: '开启后，在点击窗口顶部状态栏时，主滚动容器将滚动到顶部。'
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
              tapStatusBarToScrollToTop?: boolean
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
        value: '该选项将将反映在主滚动上，主滚动条请参考配置项“mainScrollId”，默认主滚动关联为程序卡的 body 容器。'
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
                    tapStatusBarToScrollToTop: true
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
        value: '该选项的启动须依赖配置项“mainScrollId”。'
      }
    ]
  ]
}