export default {
  title: 'Application.updateSafeArea',
  content: [
    [
      {
        type: 'title',
        value: 'Application.updateSafeArea'
      },
      {
        type: 'sub',
        value: 'Application.updateSafeArea'
      },
      {
        type: 'text',
        value: '更新应用的安全边距（受同源策略限制）。'
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
            type ApplicationSafeAreaValue = string | Array<string>
            type safeArea = (data: ApplicationSafeAreaValue) => void 
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
        value: '其初始值请参照模块配置项 [safeArea]。'
      },
      {
        type: 'text',
        value: 'updateSafeArea 参数为一个数组，同 CSS Margin 一样通过顺时针枚举表达。'
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
            application.updateSafeArea(['48px', 0, '60px', 0])
            application.updateSafeArea(['48px', 0, '60px'])
            application.updateSafeArea(['60px', 0])
            application.updateSafeArea(['48px'])
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
        value: '在应用中安全距离并不一定指的是系统默认刘海屏，而是由框架程序卡所叠加的安全区域，而当框架交互发生安全边距变化时，则可通过该方法控制各程序卡的显示逻辑。'
      },
      {
        type: 'text',
        value: '非同源程序卡页面不受此控制，但可通过自行建立 postMessage 来同步次操作。另外，在 Application 对象上可通过 “on/one” 来监听 “safeAreaChange” 事件。'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            application.on('safeAreaChange', (data) => {
              console.log(data)
              // applet 为跨域页面模块
              // applet.view 为跨域页面 iframe
              applet.view.postMessage({
                action: 'safeAreaChange',
                data
              }, '*')
            }
          </code-highlight>
        `
      },
      {
        type: 'tips',
        value: '在配置中的 events 定义函数中以及通过 Application.get 等方法都可直接获取目标程序卡对象 Applet。'
      }
    ]
  ]
}