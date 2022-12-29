export default {
  title: 'Application.activityApplet',
  content: [
    [
      {
        type: 'title',
        value: 'Application.activityApplet'
      },
      {
        type: 'sub',
        value: 'Application.activityApplet'
      },
      {
        type: 'text',
        value: 'The currently active Applet.'
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
            activityApplet: Applet
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
        value: 'If the Applet[\'home\'] in the current viewport, accessing this value returns the Applet[\'home\'].'
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
            const application = await createApplication({
              applets: {
                ...
              }
            })
            console.log(application.activityApplet)
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
        value: 'If the Applet in the current viewport is a Applet[type = SlideView], the returned value is the Applet[type = SlideView], not the sub Applet in the SlideView view.'
      },
      {
        type: 'tips',
        value: 'If you want to get the sub Applet in the active program card, see the SlideView introduction.'
      }
    ]
  ]
}