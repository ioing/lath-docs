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
        value: 'When turned on, when you click on the status bar at the top of the window, the main scroll container scrolls to the top.'
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
        value: 'This option will be reflected on the main scroll, the main scroll bar refers to the configuration item "mainScrollID", the default main scroll is associated as the \'body\' container of the Applet.'
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
        value: 'The launch of this option depends on the configuration item "mainScrollID".'
      }
    ]
  ]
}