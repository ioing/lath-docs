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
        value: '程序卡视图的类型。'
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
        value: '根据配置项 source 和 render 生成的程序卡分别对应 “iframe” 和 “shadow” 两种类型，而同时配有 source 和 portal 属性的程序卡则为 “portal” 类型。'
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