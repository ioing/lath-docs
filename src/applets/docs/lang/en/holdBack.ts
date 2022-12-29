export default {
  title: 'HoldBack',
  content: [
    [
      {
        type: 'title',
        value: 'HoldBack'
      },
      {
        type: 'sub',
        value: 'FrameworksAppletConfig > holdBack'
      },
      {
        type: 'text',
        value: 'Prevent the main program from exiting. (Frameworks Applet exclusive configuration)'
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
              holdBack?: (backoutCount: number) => boolean
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
        value: 'It is valid when [singleLock] is turned on. When the user performs a return operation and the page is about to exit, it will be verified through this function (if it is blocked, \'backCount\' is the number of clicks to return). When it returns \'true\', it prevents the application page from exiting. Otherwise, the direct exit of the application will be allowed.'
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
                      // decide whether to quit
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
        value: 'As configured above, when jumping from other pages to enter the application, when you click the browser back button, you will not exit the application page, but will judge whether it should be exited through the [holdBack] configuration in the \'Frameworks Applet\', and return the back button clicked times to the user at the same time.'
      }
    ]
  ]
}