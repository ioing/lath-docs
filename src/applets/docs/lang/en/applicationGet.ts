export default {
  title: 'Application.get/add/del',
  content: [
    [
      {
        type: 'title',
        value: 'Application.get'
      },
      {
        type: 'sub',
        value: 'Application.get'
      },
      {
        type: 'text',
        value: 'Obtain the Applet Object.'
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
            type get = (id: string) => Promise&lt;Applet>
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
        value: '\"id\" is the Applet name to be obtained.'
      },
      {
        type: 'text',
        value: '\'Promise\' returned.'
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
            const home = await application.get('home')
          </code-highlight>
        `
      }
    ],
    [
      {
        type: 'title',
        value: 'Application.del'
      },
      {
        type: 'sub',
        value: 'Application.del'
      },
      {
        type: 'text',
        value: 'Delete an Applet object.'
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
            type del = (id: string) => Promise&lt;boolean>
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
        value: '\"id\" is the name of the Applet to be removed.'
      },
      {
        type: 'text',
        value: '\'Promise\' is returned, and you will get \'true\' if the deletion is successful.'
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
            const isDel = await application.del('demo')
          </code-highlight>
        `
      }
    ],
    [
      {
        type: 'title',
        value: 'Application.add'
      },
      {
        type: 'sub',
        value: 'Application.add'
      },
      {
        type: 'text',
        value: 'Add an Applet object.'
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
            declare interface AppletManifest {
              config: AppletConfig
              resources?: AppletResources
              components?: ((w: Window) => CustomElementConstructor)[]
              events?: Partial<AppletEvents>
            }
            type add = (id: string, manifest: AppletManifest) => Applet
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
        value: '\"id\" is the new Applet name.'
      },
      {
        type: 'text',
        value: 'New Applet object returned.'
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
            const newApplet = await application.add('demo', {
              config: {
                title: 'title',
                ...
              }
            })
          </code-highlight>
        `
      }
    ]
  ]
}