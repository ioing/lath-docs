export default {
  title: 'Capture',
  content: [
    [
      {
        type: 'title',
        value: 'Capture'
      },
      {
        type: 'sub',
        value: 'AppletConfig > capture'
      },
      {
        type: 'text',
        value: 'Capture jump links in other Applets, and jump to this Applet if they match.'
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
              capture?: string | ((resolve: {
                pathname: string
                origin: string
                host: string
                hash: string
                href: string
                search: string
                port: string
                searchParams: URLSearchParams
              }, url: string) => boolean)
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
        value: 'Capture can accept a \'url path\', or a capture function, which can be captured when jumping behavior is performed in other Applets.'
      },
      {
        type: 'text',
        value: 'When the capture function returns true, it means that the jump link is matched, and the link target will be replaced by the Applet.'
      },
      {
        type: 'text',
        value: 'After capture, if the jump link carries parameters, the carried parameters will be passed to the capture Applet together.'
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
                    capture: (resolve) => {
                      return resolve.path === '/abc/abc'
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
        value: 'Whether the Applet is loaded in advance is an important prerequisite for the capture program to work. Therefore, in order to ensure that the capture  Applet has been loaded in advance, it is necessary to include the dependency Applet in the previous Applet configuration option [prerender].'
      },
      {
        type: 'text',
        value: 'When this option is turned on, all link jump behavior that can be captured will be handed over to this option to determine whether to open a new window in the application, which means that your rules need to strictly protect the security of the application.'
      },
      {
        type: 'text',
        value: 'If the frameworks Applet enables this option, all Applets do not set this option will be handled by the frameworks Applet by default, and it should be noted that the configuration time [allowHost] will be invalid, because capture will be processed first.'
      },
      {
        type: 'tips',
        value: 'The capturer Applet can be captured normally only when the current Applet is opened with proxy-link in [apply], otherwise it will not enter the capture logic, but this option is enabled by default unless you turn it off.'
      }
    ]
  ]
}