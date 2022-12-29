export default {
  title: 'Applet.color',
  content: [
    [
      {
        type: 'title',
        value: 'Applet.color'
      },
      {
        type: 'sub',
        value: 'Applet.color'
      },
      {
        type: 'text',
        value: 'The background color of the Applet.'
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
            type color = string
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
        value: '\'Color\' comes from config configuration, returns the color setting of \'frameworks Applet\' if not configured; and returns black and white according to whether the browser is in the dark mode if it is still not configured or inherited.'
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
            console.log(applet.color)
          </code-highlight>
        `
      }
    ]
  ]
}