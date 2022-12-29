export default {
  title: 'Applet.slide',
  content: [
    [
      {
        type: 'title',
        value: 'Applet.slide'
      },
      {
        type: 'sub',
        value: 'Applet.slide'
      },
      {
        type: 'text',
        value: 'The control object of the swipe applet (similar to the Snap effect).'
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
            interface Slide {
              to: (id: number | string) => Promise&lt;unknown> 
              index: number
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
        value: 'The "to" function can accept a sequence (corresponding to the applet index in the configuration item defaultSlideViewApplets) / applet id.'
      },
      {
        type: 'text',
        value: 'The "index" property gets the index of applets on the current SlideView.'
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
            await applet.slide.to('pageA')
            console.log(applet.slide.index)
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
        value: 'For its creation, please refer to the configuration item: DefaultSlideViewAppts.'
      }
    ]
  ]
}