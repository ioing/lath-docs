export default {
  title: 'NotFound',
  content: [
    [
      {
        type: 'title',
        value: 'NotFound'
      },
      {
        type: 'sub',
        value: 'FrameworksAppletConfig > notFound'
      },
      {
        type: 'text',
        value: '404 程序卡。（frameworks 程序卡专属配置）'
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
            interface FrameworksAppletConfig {
              notFound?: string
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
        value: '若所请求的程序卡页面不存在时，则自动路由到该程序卡，若未配置时则会自动跳转到“id”为“404”的程序卡。'
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
                frameworks: {
                  config: {
                    notFound: 'home'
                  }
                }
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '404 模块主要用于对应用异常访问时的承接及统计等。'
      }
    ]
  ]
}