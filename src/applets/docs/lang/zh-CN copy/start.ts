export default {
  title: 'Install & Preface',
  content: [
    [
      {
        type: 'title',
        value: '概念'
      },
      {
        type: 'text',
        value: '快速入门前，让我们先了解一下基本概念。'
      },
      {
        type: 'text',
        value: `
          <ul>
            <li><b>Application</b>: 一个 Lath 应用是由若干个程序卡（Applet）组成的。</li>
            <li><b>Applet</b>: 一个程序卡是由一个页面或一个 View、以及其有关配置文件所组成的。</li>
            <li><b>FrameworksApplet</b>: 每个 Lath 应用必有一个框架类型的程序卡，其主要承载公共能力，比如导航栏等等。</li>
          </ul>
        `
      },
      {
        type: 'tips',
        value: 'Lath应用是一个单页面应用（SPA），由若干个Applet组成。每个Applet都可以通过&lt;define-applet>定义一个内部区块视图，或者通过config.source定义一个外部页面视图。'
      },
    ],
    [
      {
        type: 'title',
        value: '使用'
      },
      {
        type: 'text',
        value: '假使我们现在要制作一个 SPA（单页面）应用，并且我们已经制作好应用对应的每一个路由页面，那么我们只需要通过下面的方式将其组装：'
      },
      {
        type: 'text',
        value: '使用 <b>&lt;define-application></b> 容器作为根节点来包裹页整个面内容，使页面被声明为一个 Lath 应用，然后在其内部使用 <b>&lt;define-applet></b> 容器包裹具体的路由视图（我们可以理解为传统 SPA 应用中的一个页面）使包裹视图被声明为一个 Applet 实体的视图。'
      },
      {
        type: 'code',
        value: `
          <code-highlight type='html'>
            &lt;body>
              &lt;define-application default-applet="appletA">
                &lt;define-applet applet-id="appletA">
                  &lt;div>
                    This is the content of 'appletA'
                  &lt;/div>
                &lt;/define-applet>
                &lt;define-applet applet-id="appletB">
                  &lt;div>
                    This is the content of 'appletB'
                  &lt;/div>
                &lt;/define-applet>
              &lt;/define-application>
            &lt;/body>
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: `
          <ul>
            <li>&lt;define-application> 上的属性 <b>“default-applet”</b> 可指定一个 Applet 名，做为初始化应用时的默认视图，即用户最早可见的视图。</li>
            <li>&lt;define-applet> 上的属性 <b>“applet-id”</b> 为声明的 Applet 名。</li>
          </ul>
        `
      },
      {
        type: 'tips',
        value: '“default-applet” 为 &lt;define-application> 包裹中已经通过 &lt;define-applet> 所声明的 Applet，当页面在浏览器中打开时仅该指定的 Applet 视图是可见的，其余视图则不可见。'
      },
      {
        type: 'text',
        value: '使用标签包裹是创建 Lath 应用的第一步，下面我们还要为每个已声明的 Applet 进行特性配置，比如为每个 Applet 设定一个标题。'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            import { createApplication } from 'lath'
            createApplication({
              applets: {
                frameworks: {
                  config: {
                    title: 'Lath Demo'
                  }
                },
                appletA: {
                  config: {
                    title: 'Page A'
                  }
                },
                appletB: {
                  config: {
                    title: 'Page B'
                  }
                }
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '我们使用 &lt;define-application> 容器是为了声明应用，但要真正启动应用还需要执行 <a to-applet="docs?id=install" clone-as="popDoc">createApplication</a> 方法，并传入 Applet 相关配置。'
      },
      {
        type: 'text',
        value: '不出意外我们将得到一个“施了魔法”的页面，此时我们可以通过 A 链接或 <a to-applet="docs?id=applicationTo" clone-as="popDoc">Application.to</a> 等方法路由到已定义的程序卡视图上。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '一般情况下我们不会将应用中所有可能被加载的路由页面都一次性集成在一个页面中，而是希望能按需载入，那我们只需通过配置信息来表达即可：'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            import { createApplication } from 'lath'
            createApplication({
              applets: {
                frameworks: {
                  config: {
                    title: 'Lath Demo'
                  }
                },
                home: {
                  config: {
                    title: 'home',
                    source: {
                      src: 'https://www.yoursite.com/home.html' 
                    }
                  }
                }
              }
            }).then((application) => {
              // 返回 application 对象
              console.log(application)
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: 'Applet 的视图不光可以通过 &lt;define-applet> 进行声明，也可以通过配置项  <a to-applet="docs?id=source" clone-as="popDoc">source</a> 进行声明。'
      },
      {
        type: 'text',
        value: '当使用 source 定义 Applet 视图时则无需再使用 &lt;define-applet> 进行声明。'
      },
      {
        type: 'tips',
        value: '一般我们会将 frameworks 程序卡和首屏程序卡通过 &lt;define-applet> 的方式进行声明，其余程序卡则通过配置 source 的方式进行声明，这样可以保证最大程度的首屏加载速度。'
      },
    ],
    [
      {
        type: 'title',
        value: '常见问题'
      },
      {
        type: 'text',
        value: '<b>使用 &lt;define-applet> 声明后滚动事件去哪了？</b>'
      },
      {
        type: 'text',
        value: '每一个 Applet 视图都相当于是一个完整的页面内容，其都应具有自身的滚动容器，因此当使用 &lt;define-applet> 进行声明后，其内部和滚动事件相关的逻辑需要从“body”中移除，修改绑定到自身的 &lt;define-applet> 标签元素上。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<b>如何引入跨域的页面视图？</b>'
      },
      {
        type: 'text',
        value: '当使用 source 声明 Applet 的视图，若其 src 页面指向为一个跨域页面，则该页面中的被代理类型的能力将会受到限制，若要解决此问题可在引用页面中同样引入 Lath 并开启选项 <a to-applet="docs?id=tunneling" clone-as="popDoc">PresetConfig > tunneling</a> 来解除一些限制。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<b>Lath 对执行时机有要求吗？</b>'
      },
      {
        type: 'text',
        value: 'Lath 作为体验加强容器并非是首屏上所必须的，因此我们建议在首屏加载完成后再执行 createApplication 方法，不阻塞首屏内容呈现。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<b>Typescript&JSX 警告？</b>'
      },
      {
        type: 'text',
        value: '当使用 Typescript 在 React 环境时，我们需要对容器的标签进行类型定义，否则 ts 将会产生警告，此时在项目中添加该 type.d.ts 文件即可。'
      },
      {
        type: 'code',
        value: `
          <code-highlight type='ts'>
            // type.d.ts
            import 'lath'
            declare namespace JSX {
              interface IntrinsicElements {
                'define-applet': {
                  children: Element
                  'applet-id': string
                }
                'define-application': {
                  children: Element
                  'default-applet': string
                }
              }
            }
          </code-highlight>
        `
      },
    ],
    [
      {
        type: 'title',
        value: '相关链接'
      },
      {
        type: 'text',
        value: '<a href="https://github.com/ioing/lath-vue-example">一个在 Vue 项目中使用 Lath 进行开发的代码示例</a>'
      },
    ]
  ]
}