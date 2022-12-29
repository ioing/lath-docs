export default {
  title: 'Applet.viewType',
  content: [
    [
      {
        type: 'title',
        value: 'Applet.viewType'
      },
      {
        type: 'sub',
        value: 'Applet.viewType'
      },
      {
        type: 'text',
        value: 'The type of Applet view.'
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
            type viewType = 'portal' | 'iframe' | 'shadow'
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
        value: 'The Applets generated from the configuration item \'source\' and \'render\' correspond to the "iframe" and "shadow" types respectively, while the Applets with both \'source\' and \'portal\' properties are of type "portal".'
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
            console.log(applet.viewType)
          </code-highlight>
        `
      }
    ]
  ]
}