export default {
  title: 'MediaGuard',
  content: [
    [
      {
        type: 'title',
        value: 'MediaGuard'
      },
      {
        type: 'sub',
        value: 'AppletConfig > mediaGuard'
      },
      {
        type: 'text',
        value: 'When this setting is enabled, the video and audio in the same-origin Applet will be intelligently controlled. When the module is hidden, the audio/video being played will be automatically paused, otherwise, the paused audio/video will be resumed when module is visible.'
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
              mediaGuard?: boolean
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
        value: 'In general scenarios, automatic media control can help you automatically process the media status. If the automatic processing fails, the Applet will be forcibly destroyed, except for background running (background=true).'
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
                    mediaGuard: true
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
        value: 'Without this option, you can also manage manually via window visibility events - refer to API - Application - Events.'
      }
    ]
  ]
}