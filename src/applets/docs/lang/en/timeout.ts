export default {
  title: 'Timeout',
  content: [
    [
      {
        type: 'title',
        value: 'Timeout'
      },
      {
        type: 'sub',
        value: 'AppletConfig > timeout'
      },
      {
        type: 'text',
        value: 'The valid duration of the Applet life cycle, in milliseconds.'
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
              timeout?: number
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
        value: 'When the Applet meets the cache conditions or is set to allow background running (background=true), the Applet will check the expiration status before the second entry, and will perform an update operation when it is checked that the Applet has expired.'
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
                    timeout: 36000
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
        value: 'If the value is set to 0, background running (background=true) will not take effect.'
      }
    ]
  ]
}