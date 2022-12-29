export default {
  title: 'Index',
  content: [
    [
      {
        type: 'title',
        value: 'Index'
      },
      {
        type: 'sub',
        value: 'AppletConfig > index'
      },
      {
        type: 'text',
        value: 'Define the applet as default entrance for an App. (frameworks Applet exclusive configuration)'
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
              index?: string
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
        value: 'When starting the Lath application, it will first start the frameworks applet, and then start the home page applet according to the "index" configuration.'
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
                frameworks: {
                  config: {
                    index: 'home'
                  }
                }
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: ' The applet named \'home\' will firstly be initialized when the app starts.'
      }
    ]
  ]
}