export default {
  title: 'PullToRefresh',
  content: [
    [
      {
        type: 'title',
        value: 'PullToRefresh'
      },
      {
        type: 'sub',
        value: 'AppletConfig > pullToRefresh'
      },
      {
        type: 'text',
        value: 'When enabled, a seamless page refresh will be triggered when the main scroll container continues to pull down gestures.'
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
              pullToRefresh?: boolean
              pullToRefreshTargetScrollId?: string
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
        value: 'The premise of enabling this option is that "FrameworksApplet" also enables this option, otherwise it will not take effect.'
      },
      {
        type: 'text',
        value: 'Pull-to-refresh will be associated with a scroll container, the container "id" can be specified by "pullToRefreshTargetScrollId".'
      },
      {
        type: 'text',
        value: 'If no container is specified, it will be associated with the main scroll container by default. For the main scroll bar, please refer to the configuration item "mainScrollID".By default, the main scroll is associated with the &lt;define-applet> container of the Applet.'
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
                    pullToRefresh: true,
                    pullToRefreshTargetScrollId: 'root'
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
        value: 'Note the specified scroll container "id" cannot exist in ShadowDom.'
      }
    ]
  ]
}