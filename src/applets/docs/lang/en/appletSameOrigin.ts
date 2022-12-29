export default {
  title: 'Applet.sameOrigin',
  content: [
    [
      {
        type: 'title',
        value: 'Applet.sameOrigin'
      },
      {
        type: 'sub',
        value: 'Applet.sameOrigin'
      },
      {
        type: 'text',
        value: 'Whether the Applet pages are same origin.'
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
            type sameOrigin = boolean
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
        value: 'The Applet configured by \'source.src\' that returns \'true\' if it is homologous.'
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
            console.log(applet.sameOrigin)
          </code-highlight>
        `
      }
    ]
  ]
}