export default {
  title: 'Application.updateSafeArea',
  content: [
    [
      {
        type: 'title',
        value: 'Application.updateSafeArea'
      },
      {
        type: 'sub',
        value: 'Application.updateSafeArea'
      },
      {
        type: 'text',
        value: 'Update the security margins of an App (subject to the same-origin policy).'
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
            type ApplicationSafeAreaValue = string | Array<string>
            type safeArea = (data: ApplicationSafeAreaValue) => void 
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
        value: 'For its initial value, refer to the module configuration item [safeArea].'
      },
      {
        type: 'text',
        value: 'The \'updateSafeArea\' parameter is an array expressed in clockwise enumeration like \'CSS Margin\'.'
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
            application.updateSafeArea(['48px', 0, '60px', 0])
            application.updateSafeArea(['48px', 0, '60px'])
            application.updateSafeArea(['60px', 0])
            application.updateSafeArea(['48px'])
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
        value: 'In the application, the safety distance does not necessarily refer to the system default notch screen, but the safety area superimposed by the framework Applet, and when the framework interaction changes the safety margin, the display logic of each Applet can be controlled by this method.'
      },
      {
        type: 'text',
        value: 'Non-homology card pages are not under this control, but you can synchronize secondary operations by creating your own \'postMessage\'. In addition, "on/one" can be used to listen for "safeAreaChange" events on the Application object.'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            application.on('safeAreaChange', (data) => {
              console.log(data)
              // Applet is a cross-domain page module
              // applet.view is a cross-domain page iframe
              applet.view.postMessage({
                action: 'safeAreaChange',
                data
              }, '*')
            }
          </code-highlight>
        `
      },
      {
        type: 'tips',
        value: 'The target Applet object can be obtained directly in the \'events\' definition function in the configuration and through methods such as \'Application.get\'.'
      }
    ]
  ]
}