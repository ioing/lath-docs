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
        value: 'Define the initial window background color of the Applets.'
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
        value: 'The default background color can present a good visual transition when the Applet is not loaded.'
      },
      {
        type: 'text',
        value: 'The default value automatically fills in black/white based on whether the browser is in \'Dark Mode\'.'
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
        value: 'Please choose an appropriate background color to fill the Applet window to ensure visual consistency.'
      },
      {
        type: 'tips',
        value: 'When the background color does not match the Applet content, the user is likely to see a flicker.'
      }
    ]
  ]
}