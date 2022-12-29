export default {
  title: 'Applet.dock',
  content: [
    [
      {
        type: 'title',
        value: 'Applet.dock'
      },
      {
        type: 'sub',
        value: 'Applet.dock'
      },
      {
        type: 'text',
        value: '程序坞的控制对象（Applet Snap 效果的模块切换器对象）。\'The dock\'s control object (the module switcher object for the Applet Snap effect).'
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
            interface Dock {
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
        value: 'The "to" function is capable of accepting a sequence (corresponding to the sequence of modules in the configuration item \'defaultDockApplets\') / module id.'
      },
      {
        type: 'text',
        value: 'The "index" property gets the sequence of Applets that are currently active on the Dock.'
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
            await applet.dock.to('pageA')
            console.log(applet.dock.index)
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
        value: 'Dock object, that is, the dock, for its creation refer to the configuration item:\'DefaultDockApplets\'.'
      }
    ]
  ]
}