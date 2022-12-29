export default {
  title: 'Limit',
  content: [
    [
      {
        type: 'title',
        value: 'Limit'
      },
      {
        type: 'sub',
        value: 'frameworksAppletConfig > limit'
      },
      {
        type: 'text',
        value: '定义应用最大可缓存在后台的程序卡数量。（frameworks 程序卡专属配置）'
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
              limit?: number
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
        value: '默认为 5, 最大值为 100。其表示为应用中所允许的最多可同时缓存在后台的程序卡，当超过时会根据访问的顺序，对先访问的模块进行依次销毁，若模块配置了背景运行(background = true)时则不受此规则的影响。'
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
                  config: {
                    limit: 10
                  }
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
        value: 'limit 数量将影响应用运行时的内存占用，一般建议在 5-20。'
      }
    ]
  ]
}