export default {
  title: 'Apply&UnApply',
  content: [
    [
      {
        type: 'title',
        value: 'Apply&UnApply'
      },
      {
        type: 'sub',
        value: 'AppletConfig > apply'
      },
      {
        type: 'text',
        value: '在同源程序卡中启用可预置的能力。'
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
            type AppletApplyMabyeOptions = 'smart-setTimeout' | 'proxy-link' | 'tap-highlight'
            type AppletApplyOptions = Array&lt;AppletApplyMabyeOptions>
            type AppletApplyOptionsParam = {
              'tap-highlight'?: {
                selector: string
              }
            }
            interface AppletBaseConfig {
              apply?: AppletApplyOptions
              applyOptions?: AppletApplyOptionsParam
              unApply?: AppletApplyOptions
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
        value: 'apply 预置了以下可用能力：'
      },
      {
        type: 'text',
        value: `
          <ul>
            <li><b>smart-setTimeout</b> 当程序卡窗口不可见时或正处于窗口动画过程中时，所有 setTimeout 会自动暂停执行，直到模块动画停止并可见时自动恢复执行。</li>
            <li><b>proxy-link</b> 当程序卡页面中有使用 a链接或 window.open 方法打开页面时，Lath 容器会自动进行捕捉拦截，并将页面内容生成新的程序卡，之后再进行加载展示。若 A链接设置 target='_parent' 或 target='_top' 时则不会进行捕获，以浏览器新开窗口打开。在 A链接中还可以设置动画效果和设置克隆为新模块 preset-effect="预置动画名"，clone-as="新模块名"</li>
            <li><b>tap-highlight</b> 所有 a链接 在点击时会自动添加半透明蒙层高亮提示效果</li>
          </ul>
        `
      },
      {
        type: 'tips',
        value: '在 A链接上使用 clone-as属性时，目的是为了让同一程序卡以多个分身打开，比如文章详情程序卡，当其参数不同时可同时以分身打开多篇文章，而不是在同一个实例中更新文章。'
      },
      {
        type: 'text',
        value: '以上选项默认均开启，若不想开启可使用 unApply 配置项。'
      },
      {
        type: 'text',
        value: 'unApply 同 apply 选项相背，它将禁止配置中的预置能力。'
      },
      {
        type: 'text',
        value: 'applyOptions 可针对每项能力增加可用参数，目前可为"tap-highlight"提供高亮选择器"selector"，当点击元素匹配时将增加高亮效果，同时会在元素上新增"tap-highlight"属性，可用作 CSS 样式自定义。'
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
                    unApply: ['proxy-link'],
                    applyOptions: {
                      'tap-highlight': {
                        selector: '.link'
                      }
                    }
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
        value: '注意，使用“proxy-link”时不能捕捉通过“location.href”方法实现的跳转行为。'
      }
    ]
  ]
}