export default {
  title: 'SingleFlow',
  content: [
    [
      {
        type: 'title',
        value: 'SingleFlow'
      },
      {
        type: 'sub',
        value: 'FrameworksAppletConfig > singleFlow'
      },
      {
        type: 'text',
        value: 'Turn on historical hierarchical flow direction control. (Frameworks Applet exclusive configuration)'
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
            interface FrameworksAppletConfig {
              singleFlow?: boolean
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
        value: 'Only the historical fallback direction of the Applet is allowed to fall back to the Applet with a smaller level, if the returned Applet level is greater than or equal to the current Applet level, the Applet is directly skipped and continues to return to the earlier Applet in the history until the conditions are met.'
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
                    singleFlow: true
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
        value: 'For example, from the Applet that generates the order function to the  Applet that pays the order, after the successful payment enters the \'My Order Module Applet\', when it is completed to roll back, it can be returned directly to the order card by opening the configuration item and combining the Applet level rules, so that it can directly return to the order to generate the Applet, without going through the various Applets in the order completion process.'
      }
    ]
  ]
}