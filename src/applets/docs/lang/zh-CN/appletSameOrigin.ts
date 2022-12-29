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
        value: '程序卡页面是否同源。'
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
        value: '由 source.src 所配置的程序卡，若为同源返回 true。'
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