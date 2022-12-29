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
        value: '程序坞的控制对象（Applet Snap 效果的模块切换器对象）。'
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
            interface SlideView {
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
        value: '“to” 函数能够接受一个序列（对应配置项 defaultSlideViewApplets 中的模块序列）/模块 id。'
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
        value: 'SlideView 对象，即程序坞，关于他的创建请参照配置项：DefaultSlideViewApplets。'
      }
    ]
  ]
}