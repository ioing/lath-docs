export default {
  title: 'AppletManifestProcess',
  content: [
    [
      {
        type: 'title',
        value: 'AppletManifestProcess'
      },
      {
        type: 'sub',
        value: 'frameworlksAppletConfig > appletManifestProcess'
      },
      {
        type: 'text',
        value: 'When the Applet is loaded, its configuration file will be processed by this function before returning. (Frameworks Applet exclusive configuration)'
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
              appletManifestProcess?: (config: AppletManifest) => AppletManifest
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
        value: 'The handler function will be passed the current handler card configuration and receive a new one.'
      },
      {
        type: 'text',
        value: 'All Applet configuration can be rewritten through this configuration, such as setting uniform animation effects or verifying some security options.'
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
                    appletManifestProcess: (manify) => {
                      ... process
                      return newManify
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
        value: 'There are some complex options in the Applet configuration, such as \'inject\', \'components\', etc., through which the reusable configuration can be managed uniformly.'
      }
    ]
  ]
}