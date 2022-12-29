export default {
  title: 'Prerender',
  content: [
    [
      {
        type: 'title',
        value: 'Prerender'
      },
      {
        type: 'sub',
        value: 'AppletConfig > prerender'
      },
      {
        type: 'text',
        value: '程序卡的预加载&预渲染。'
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
            interface AppletBaseConfig {
              prerender?: Array&lt;string>
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
        value: '当前程序卡中如果存在链接到其它程序卡，且希望能预先载入这些程序卡时，则可进行设置该属性。页面会在空闲时对依赖的程序卡进行后台的预加载，包括文档中的 css 以及 js 等静态资源的预加载。'
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
            createApplication({
              applets: {
                home: {
                  prerender: [\${AppletName}, \${AppletName}]
                }
              }
            })
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
        value: '当预载执行时，用户访问该程序卡时将节省内链静态资源的加载，但是对于脚本的动态数据请求并不会有所提前，如果想提前数据的加载，则需配合前一个程序卡使用[inject]能力或“postMessage”能力进行前置。'
      },
      {
        type: 'tips',
        value: 'prerender 目前浏览器尚无法完成预渲染工作，其当前阶段的能力表述更接近“prefetch”，尽管如此，但我们希望在未来能预留预渲染的能力，因此它依旧保留该选项为“prerender”的称呼。'
      }
    ]
  ]
}