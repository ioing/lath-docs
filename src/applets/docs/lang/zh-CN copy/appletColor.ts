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
        value: '程序卡的背景色。'
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
        value: 'color 来自于 config中配置，若未配置则返回 frameworks Applet 的 color 设置，若依然未配置或使用继承，则根据浏览器是否为 dark模式分别返回黑白两色。'
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