export default {
  title: 'Install & Preface',
  content: [
    [
      {
        type: 'title',
        value: '简单的'
      },
      {
        type: 'text',
        value: '我想让页面中的 A 链接，点击打开时展示华丽的转场特效？'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            import { createApplication } from 'lath'
            // 将你的 web 页面自动生成为一个 Lath 应用
            createApplication()
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '您无需任何配置即可一键启动。'
      },
      {
        type: 'tips',
        value: '如果你未能如愿看到一个施过魔法的页面，那么有可能是你的页面结构特殊导致的，你应该继续下面的步骤。'
      }
    ],
    [
      {
        type: 'title',
        value: '基础的'
      },
      {
        type: 'text',
        value: '通过配置文件指定首页的程序卡。'
      },
      {
        type: 'text',
        value: '空配置情况下，Lath 会寻找 body 中拥有最多大尺寸的节点作为程序卡的视图内容，并将其默认命名为“home”。现在我们通过配置文件修改此项。'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            import { createApplication } from 'lath'
            createApplication({
              index: {
                id: 'home',
                target: 'root',
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '该配置告诉 Lath，将当前 HTML 页面中 id 为 “root” 的 DOM 节点定义为一个程序卡，并将其命名为 “home”。'
      },
      {
        type: 'tips',
        value: '现在我们将多个 HTML 页面合并为一个应用程序，每个页面我们称呼它为“程序卡（Applet）”，每个程序卡都有着自己的定制化配置，您接入 Lath 的当前页面也不例外是一个程序卡，因此你需要告诉容器将页面中的哪一部分内容归属于该程序卡。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '现在我们可以继续为该程序卡增加额外的设定，比如定义程序卡的标题。'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            import { createApplication } from 'lath'
            createApplication({
              index: {
                id: 'home',
                target: 'root',
              },
              applets: {
                frameworks: {
                  index: "home",
                  config: {
                    animation: 'slide'
                  }
                },
                home: {
                  config: {
                    title: '首页'
                  }
                }
              }
            }).then({ application } => {
              console.log(application)
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '<a to-applet="typesDoc?AppConfigApplets">applets</a> 中描述了 Lath 应用中每个程序卡的配置设定。'
      },
      {
        type: 'tips',
        value: '关于程序卡的配置设定的内容在后面章节中会具体提到。'
      },
    ],
    [
      {
        type: 'title',
        value: '进阶的'
      },
      {
        type: 'text',
        value: '这是我们推荐的最佳实践，如果你的页面之间保持同源或多个程序卡呈现在同一个文档中，那这是极好的，一切就像你开发 SPA 应用那样简单，现在你只需使用 &lt;define-applet>来嵌套你的页面切片，即可定义应用中的程序卡视图，比如你有这样一段代码：'
      },
      {
        type: 'code',
        value: `
          <code-highlight type='html'>
            &lt;!--页面A，初使时可见-->
            &lt;div>
              &lt;PageA>
                ...
              &lt;/PageA>
            &lt;/div>
            &lt;!--页面B，初使时不可见-->
            &lt;div style="display: none;">
              &lt;PageB>
                ...
              &lt;/PageB>
            &lt;/div>
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '此时你通过某种机制控制两个页面的可见切换，而现在你可以将两个页面变为两个程序卡，你只需要像下面这样嵌套即可：'
      },
      {
        type: 'code',
        value: `
          <code-highlight type='html'>
            &lt;div>
              &lt;define-applet id="pageA">
                &lt;div slot="applet">
                  &lt;PageA>
                      ...
                  &lt;/PageA>
                &lt;/div>
              &lt;/define-applet>
            &lt;/div>
            &lt;!--页面B，初使时不可见-->
            &lt;div style="display: none;">
              &lt;define-applet id="pageB">
                &lt;div slot="applet">
                  &lt;PageB>
                    ...
                  &lt;/PageB>
                &lt;/div>
              &lt;/define-applet>
            &lt;/div>
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '使用 &lt;define-applet> 可定义一个程序卡，"id" 属性为该程序卡的命名，嵌套的内容中 slot="applet" 的元素即为该程序卡的内容。'
      },
      {
        type: 'text',
        value: '这意味着一切都变的简单了，当你有框架的部分，比如通用导航栏，你只需使用 &lt;define-applet>包裹，并命名为“frameworks”即可将其中的 slot="applet" 元素被渲染到框架层，其它的工作就只需要在配置中进行声明即可。'
      },
      {
        type: 'tips',
        value: '&lt;define-applet>是一个 Web Components 组件，当你 “import lath” 时即被注册到浏览器，你完全可以忽略它的作用，并仅把它看作是一个普通的“div”标签的存在，你可以在任何框架中使用它，比如 React、Vue、Angular 等。使用 &lt;define-applet> 与预配置项“index”是存在交集的，即使用两种方法都可以定义首页程序卡，但是“index”配置仅能定义首页的程序卡，而“define-applet”则可以定义任何的程序卡，并且他需要修改你的代码使其包裹。'
      }
    ],
    [
      {
        type: 'title',
        value: '扩展的'
      },
      {
        type: 'text',
        value: 'Lath 为开发者提供了细致的配置选项，可根据使用场景来提供专用的配置生成器，比如页面中使用 jsbridge 来代替 A 链接打开新窗口时，则可借助 inject 配置将能力进行代理。'
      },
      {
        type: 'code',
        value: `
          <code-highlight type='ts'>
            import getApplicationConfig from './getApplicationConfig'
            export default async () => {
              const defaultConfig = getApplicationConfig()
              const application = await createApplication(defaultConfig)
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '“getApplicationConfig” 为一个演示的配置生成器，其返回封装好的场景配置，此时使用者即可一键接入，而无需了解更多的配置信息。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '在多页面应用中需要为每个页面都接入 Lath，比如你有 A、B、C 三个页面，分别从 A 页面链接到 B 页面，从 B 页面会链接到 C 页面，那此时应该在 A 页面中接入 Lath，并配置 A 页面为 A 程序卡，配置 B 页面为 B 程序卡，以此类推，B 页面需要配置 B&C 程序卡。即该页面引用了哪个页面则需分别将该页面和所链接的依赖页面配置为程序卡。'
      },
      {
        type: 'tips',
        value: '多页面中，如果可能从该程序卡产生外链到其它程序卡，则就可能需要你在该页面中描述其它程序卡的相关设定配置，若不设置时则会使用默认配置，比如打开程序卡的动画和默认背景色等。'
      },
      {
        type: 'text',
        value: '多页面应用的好处是访问任何一个页面的 URL 都能得到一个完整的 Lath 应用，而 Lath 也支持单页应用模式，即应用只有一个访问入口，其余页面则通过路由方式进行访问。'
      },
      {
        type: 'text',
        value: '你可以直接使用 new Application 创建单页面应用：'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="js">
            import { Application } from 'lath/app'
            const application = new Application()
            application.setting({
              applets: {
                home: {
                  config: {
                    title: '首页',
                    source: {
                      src: 'https//yoursite.com/home'
                    },
                    animation: 'slide'
                  }
                },
                about: {
                  config: {
                    title: '关于',
                    source: {
                      src: 'https//yoursite.com/about'
                    },
                    animation: 'slide'
                  }
                }
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: 'Application 为 Lath 的核心类，在创建应用前我们需要通过 new 将其实例化操作。'
      }
    ],
    [
      {
        type: 'title',
        value: '注意事项'
      },
      {
        type: 'text',
        value: '<b>多页面模式的一些限制</b>'
      },
      {
        type: 'text',
        value: '多页面模式时，需要注意页面所有元素都需要保持在 "root 节点" 之内，同理依赖在 body 上的滚动事件，也需要转移到 "root 的 parentElement" 上。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<b>跨域页面指引</b>'
      },
      {
        type: 'text',
        value: '非同源页面的程序卡会在一些能力上有所受限，但可使用（Preset Config）：[Tunneling] 来解除一些限制。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<b>Lath 接入的执行时机？</b>'
      },
      {
        type: 'text',
        value: '当页面接入 Lath 时，我们只需要在页面的核心逻辑之行完之后再执行 Lath 创建方法即可。'
      },
    ]
  ]
}