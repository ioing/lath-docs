export default {
  title: 'Sandbox',
  content: [
    [
      {
        type: 'title',
        value: 'Sandbox'
      },
      {
        type: 'sub',
        value: 'AppletConfig > sandbox'
      },
      {
        type: 'text',
        value: 'Sandbox restrictions for Applet containers.'
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
            type SandboxOptions = Array&lt;'allow-same-origin' | 'allow-scripts' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-popups'
            | 'allow-pointer-lock' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation'
            | 'allow-downloads-without-user-activation' | 'allow-storage-access-by-user-activation' | 'allow-top-navigation-by-user-activation' | string>
            interface AppletBaseConfig {
              sandbox?: SandboxOptions
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
        value: 'This option is only available for Applets that have the [source] option set.'
      },
      {
        type: 'text',
        value: 'For more information on Sandbox, please refer to the W3C definition.'
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
                    sandbox: 'allow-modals'
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
        value: 'If your Applet page is a third-party link, you can use this option to restrict its unnecessary permissions for security reasons.'
      }
    ]
  ]
}