export default {
  title: 'Application.pushWindow',
  content: [
    [
      {
        type: 'Application.pushWindow',
        value: 'Level'
      },
      {
        type: 'sub',
        value: 'Application.pushWindow'
      },
      {
        type: 'text',
        value: '转场到指定程序卡或 url 的页面。'
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
            declare interface TransformActionOrigin {
              x: number,
              y: number
            }
            type PushWindowOptions = [
              url: string,
              title: string,
              preset: string,
              cloneAs?: string,
              touches?: TouchEvent | TransformActionOrigin
            ]
            type pushWindow = (url: string, title = '', preset = 'slide', cloneAs?: string, touches?: TouchEvent | TransformActionOrigin) => Promise<void>
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
        value: '同 <a href="?id=applicationTo#docs" preset-effect="slide" clone-as="doc-newWindow-applicationTo">Application.to</a> 相似，pushWindow 的第一个参数不仅可以传入一个程序卡 id，还可以传入一个页面 URL，以此来打开一个新生成的程序卡页面。'
      },
      {
        type: 'text',
        value: '<b>cloneAs</b>'
      },
      {
        type: 'text',
        value: '定义将该程序卡新克隆副本的名称，此时该克隆副本不会替换原有程序卡实例，而是作为一个新的程序卡独立存在。'
      },
      {
        type: 'text',
        value: '<b>preset</b>'
      },
      {
        type: 'text',
        value: '定义该程序卡被打开时所使用的内置的动画效果，其值为内置动画名。'
      },
      {
        type: 'text',
        value: '<b>title</b>'
      },
      {
        type: 'text',
        value: '定义打开程序卡的 title 标题。'
      },
      {
        type: 'text',
        value: '<b>touches</b>'
      },
      {
        type: 'text',
        value: '同 Application.to 中 touches 的部分。'
      },
      {
        type: 'text',
        value: '<b>url</b>'
      },
      {
        type: 'text',
        value: '打开新页面的 url（目标页面将会受到捕捉[capture]逻辑的影响）。'
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
            application.pushWindow('http://www.xxxxx.com/index.html', '首页', 'zoom', 'newHome')
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '若在iframe 页面中想要调用该能力时，可使用 postMessage 发送请求。'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            parent.postMessage({
              action: 'pushWindow',
              data: ['https://xxx.com/', 'title']
            })
          </code-highlight>
        `
      }
    ]
  ]
}