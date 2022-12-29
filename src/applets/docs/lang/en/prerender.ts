export default {
  title: 'Prerender',
  content: [
    [
      {
        type: 'title',
        value: 'Prerender'
      },
      {
        type: 'sub',
        value: 'AppletConfig > prerender'
      },
      {
        type: 'text',
        value: 'Preloading & pre-rendering of Applets.'
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
              prerender?: Array&lt;string>
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
        value: 'If there are links to other Applet in the current Applet, and you want to preload these Applets, you can set this property. The page will preload the dependent Applet in the background when it is idle, including the preloading of static resources such as CSS and JS in the document.'
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
                  prerender: [\${AppletName}, \${AppletName}]
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
        value: 'When the preload is executed, the loading of the static resources of the internal link will be saved when the user accesses the Applet, but the dynamic data request of the script will not be advanced. If you want to load the data in advance, you need to use it with the previous Applet. The [inject] capability or the  \'postMessage\' capability is prepended.'
      },
      {
        type: 'tips',
        value: 'Under \'prerender\' condition, the browser cannot complete the pre-rendering work, and its current capability expression is closer to \'prefetch\'. However, we hope to reserve the pre-rendering capability in the future, so it still retains this option as \'prerender\'.'
      }
    ]
  ]
}