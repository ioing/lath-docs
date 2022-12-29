export default {
  title: 'Background',
  content: [
    [
      {
        type: 'title',
        value: 'Background'
      },
      {
        type: 'sub',
        value: 'AppletConfig > background'
      },
      {
        type: 'text',
        value: 'Whether the Applet is allowed to run in the background.'
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
              background?: boolean | 'auto'
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
        value: '<b>value = false</b>'
      },
      {
        type: 'text',
        value: 'Module transitions are destroyed immediately after the transition animation ends.'
      },
      {
        type: 'text',
        value: '<b>value = true</b>'
      },
      {
        type: 'text',
        value: 'Modules are not destroyed (only if the page load succeeds); the exception is when \'timeout\' times out, before startup.'
      },
      {
        type: 'text',
        value: '<b>value = \'auto\'</b>'
      },
      {
        type: 'text',
        value: 'When Automatic Mode is set, the module would intelligently determine whether to destroy, and is destroyed when the following conditions are triggered:'
      },
      {
        type: 'text',
        value: `
          <ul>
            <li>When the page is set with SRC and the source is different</li>
            <li>When the page contains objects such as \'embed, applet, iframe\'</li>
            <li>When the page contains video or audio tags, and there is an error in automatically pausing playback when mediaGuard is enabled</li>
            <li>There are node churn operations in the page that occur more than 10 times in 3 seconds</li>
            <li>When the total node operations in the page run more than 1000 times in the background</li>
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
                home: {
                  config: {
                    background: true
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
        value: ' If an Applet enters the Modality type non-full-screen Applet such as \'Pop Sheet\', it will not be executed even if it meets the destruction conditions.'
      }
    ]
  ]
}