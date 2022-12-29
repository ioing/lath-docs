export default {
  title: 'UnuseShadowDom',
  content: [
    [
      {
        type: 'title',
        value: 'UnusedShadowDom'
      },
      {
        type: 'sub',
        value: 'PresetConfig > noShadowDom'
      },
      {
        type: 'text',
        value: 'Whether the framework uses ShadowDom mode. (Preconfigured items before the app starts)'
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
            interface PresetConfig {
              noShadowDom?: boolean
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
        type: 'tips',
        value: 'For more information about ShadowDom, check out the introduction to W3C.'
      },
      {
        type: 'text',
        value: 'If you start the application by \'createApplication\' to specify the "index" mode, the preset Applet node will be moved directly to ShadowDom, which will cause the absence of styles and dependencies outside the node (such as some dependent script event binding elements and dynamically injected global styles, etc.).'
      },
      {
        type: 'text',
        value: 'ShadowDom mode has been turned off by default, you do not need to set the change option, if you do not have the above problems, and there will be no interference between the Applets of the Slice, you can turn off the Change option, at this time the same page of the slice to produce the Applet is related to each other.'
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
              tunneling: true,
              applets: {
                ...
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
        value: 'This configuration is rarely used, but it would be better if you could use \'&lt;define-applet>\' instead.'
      }
    ]
  ]
}