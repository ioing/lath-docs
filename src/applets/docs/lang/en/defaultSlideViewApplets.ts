export default {
  title: 'DefaultSlideViewApplets',
  content: [
    [
      {
        type: 'title',
        value: 'DefaultSlideViewApplets'
      },
      {
        type: 'sub',
        value: 'AppletConfig > defaultSlideViewApplets'
      },
      {
        type: 'text',
        value: 'The slideView for the Snap transition effect, we call it SlideView.'
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
            type SlideViewApplets = Array<{
              id: string,
              activate: 'lazy' | 'instant' | 'passive'
            }>
            interface AppletBaseConfig {
              defaultSlideViewApplets?: SlideViewApplets
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
        value: '\'id\' indicates the name of the Applet to be loaded.'
      },
      {
        type: 'text',
        value: '\'activate\' indicates the activation type of the Applet, which is divided into the following three types:'
      },
      {
        type: 'text',
        value: `
          <ul>
            <li>lazy: Load Applet page content when the browser is idle.</li>
            <li>instant: Instantly loads the Applet page content.</li>
            <li>passive: Load the Applet page content when activated.</li>
          </ul>
        `
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
                  defaultSlideViewApplets: [
                    {
                      id: "appletA",
                      activate: 'instant'
                    },
                    {
                      id: "appletB",
                      activate: 'lazy'
                    }
                  ]
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
        value: 'Applet with \'defaultSlideViewApplets\' will no longer have their own views (except frameworks Applet), but other Applet views are nested within them, so this configuration conflicts with [source] and should not be set at the same time.'
      },
      {
        type: 'tips',
        value: 'In addition, use "API-Applet.slide.to" to slide the slideView to the specified Applet position.'
      }
    ],
    [
      {
        type: 'title',
        value: 'OpenSlideViewLeftHolder'
      },
      {
        type: 'sub',
        value: 'AppletConfig > openSlideViewLeftHolder'
      },
      {
        type: 'text',
        value: 'When enabled, under the \'SlideView\' effect (when \'defaultSlideViewApplets\' is configured), the leftmost edge will allow to exit the application when swiping.'
      },
      {
        type: 'tips',
        value: 'This configuration is mainly used to unblock the exit under the first history record. If the browsing history is greater than 1, there is no edge sliding blockage in most cases. If it is not enabled, only edge elasticity is triggered and it will not go back to the previous level when edge sliding may occur in iOS devices.'
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
              openSlideViewLeftHolder?: boolean
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
        value: 'The default value is false.'
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
                    defaultSlideViewApplets: [
                      {
                        id: "appletA",
                        activate: 'instant'
                      },
                      {
                        id: "appletB",
                        activate: 'lazy'
                      }
                    ],
                    openSlideViewLeftHolder: true
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
        value: 'When this option is turned on ,it should be noted that a 20px non-feedback area will be generated on the left edge of the Applet, and this safe operating distance should be reserved during development.'
      }
    ]
  ]
}