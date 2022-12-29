export default {
  title: 'SingleLock',
  content: [
    [
      {
        type: 'title',
        value: 'SingleLock'
      },
      {
        type: 'sub',
        value: 'FrameworksAppletConfig > singleLock'
      },
      {
        type: 'text',
        value: 'When an Applet falls back to the program exit (level === 0 Applet),the organization history continues to fallback when the return operation is performed.'
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
              singleLock?: boolean
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
        value: 'When a fallback is locked, continuing to fallback begins recording the number of fallbacks and can be used to decide whether the Applet is allowed to exit through the [holdBack] configuration in \'frameworks Applets\'.'
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
                    singleLock: true,
                    holdBack: (event) => {
                      // Determine whether to exit
                      return true
                    }
                  }
                }
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: 'As configured above, when jumping from other pages to the application, when the browser back button is clicked, it will not exit the application page, but will be judged whether it should be exited through the [holdBack] configuration in frameworks applet, and the number of times the user clicks the back button is returned.'
      }
    ]
  ]
}