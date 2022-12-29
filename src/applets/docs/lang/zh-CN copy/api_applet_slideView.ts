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
        value: '横滑程序卡的控制对象（类似 Snap 效果）。'
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
        value: '“to” 函数能够接受一个序列（对应配置项 defaultSlideViewApplets 中的 Applet 序列）/ Applet id。'
      },
      {
        type: 'text',
        value: '“index” 属性可获取当前 SlideView 上所处于激活状态的程序卡的序列。'
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
        value: '关于它的创建请参照配置项：DefaultSlideViewApplets。'
      }
    ]
  ]
}