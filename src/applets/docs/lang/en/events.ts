export default {
  title: 'Events',
  content: [
    [
      {
        type: 'title',
        value: 'Events'
      },
      {
        type: 'sub',
        value: 'AppletManifest > events'
      },
      {
        type: 'text',
        value: 'Register event callbacks for Applets.'
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
            declare interface AppletEvents {
              transformStart: (applet: Applet) => undefined | 'break'
              transformEnd: (applet: Applet) => void
              boot: (applet: Applet) => void
              load: (applet: Applet) => void
              loadError: (applet: Applet) => void
              preload: (applet: Applet) => void
              destroy: (applet: Applet) => void
            }
            declare interface AppletManifest {
              events?: Partial<AppletEvents>
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
        value: 'Register the event callback function in the life cycle in the Applet.'
      },
      {
        type: 'text',
        value: `
          <ul>
            <li><b>transformStart</b> Applet transition animation start event. Note that \'transformStart\' can optionally return a string \'break\', at which point the block transition will be terminated.</li>
            <li><b>transformEnd</b> Applet transition animation end event.</li>
            <li><b>boot</b> Applet start event (only once per lifetime).</li>
            <li><b>load</b> The source code loading completion event of \'source\' type Applet.</li>
            <li><b>loadError</b> The source code loading error event of \'source\' type Applet.</li>
            <li><b>preload</b> Applet preload finished event.</li>
            <li><b>destroy</b> Applet destroyed event.</li>
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
                    title: 'home'
                  },
                  events: {
                    transformEnd: (applet) => {
                      // ...
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
        value: 'Only the necessary events are provided in the Applet registration event, you can use the listener function on the Applet object to cover more events. Please refer to \'API-Application Events\'.'
      },
      {
        type: 'tips',
        value: 'The events in the Applet configuration all run outside the Applet container. When the Applet is destroyed, the environment variables in the configuration will not disappear. Therefore, you must be responsible for the quality of the logic in the configuration file, avoid side effects, and be reasonable. Controls the logic size (complex logic is not recommended here).'
      }
    ]
  ]
}