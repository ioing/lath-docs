export default {
  title: 'Applet.refresh',
  content: [
    [
      {
        type: 'title',
        value: 'Applet.refresh'
      },
      {
        type: 'sub',
        value: 'Applet.refresh'
      },
      {
        type: 'text',
        value: 'The view object of the Applet.'
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
            type refresh = () => Promise<void>
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
        value: 'Smooth refresh of the page, and return a \'Promise\' object.'
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
            const applet = await application.get('home')
            applet.refresh()
          </code-highlight>
        `
      }
    ]
  ]
}