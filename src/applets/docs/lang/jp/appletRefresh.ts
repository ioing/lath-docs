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
        value: '程序卡的视图对象。'
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
        value: '平滑页面刷新，返回一个 Promise 对象。'
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