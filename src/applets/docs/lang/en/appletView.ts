export default {
  title: 'Applet.view',
  content: [
    [
      {
        type: 'title',
        value: 'Applet.view'
      },
      {
        type: 'sub',
        value: 'Applet.view'
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
            type view = HTMLElement | HTMLPortalElement | HTMLIFrameElement | null
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
        value: 'The different element types of a view are determined by the \'viewType\'.'
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
            console.log(applet.view)
          </code-highlight>
        `
      }
    ]
  ]
}