"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
                value: "\n          <ul>\n            <li><b>Application</b>: \u4E00\u4E2A Lath \u5E94\u7528\u662F\u7531\u82E5\u5E72\u4E2A\u7A0B\u5E8F\u5361\uFF08Applet\uFF09\u7EC4\u6210\u7684\u3002</li>\n            <li><b>Applet</b>: \u4E00\u4E2A\u7A0B\u5E8F\u5361\u662F\u7531\u4E00\u4E2A\u9875\u9762\u6216\u4E00\u4E2A View\u3001\u4EE5\u53CA\u5176\u6709\u5173\u914D\u7F6E\u6587\u4EF6\u6240\u7EC4\u6210\u7684\u3002</li>\n            <li><b>FrameworksApplet</b>: \u6BCF\u4E2A Lath \u5E94\u7528\u5FC5\u6709\u4E00\u4E2A\u6846\u67B6\u7C7B\u578B\u7684\u7A0B\u5E8F\u5361\uFF0C\u5176\u4E3B\u8981\u627F\u8F7D\u516C\u5171\u80FD\u529B\uFF0C\u6BD4\u5982\u5BFC\u822A\u680F\u7B49\u7B49\u3002</li>\n          </ul>\n        "
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
                value: "\n          <code-highlight type='html'>\n            &lt;body>\n              &lt;define-application default-applet=\"appletA\">\n                &lt;define-applet applet-id=\"appletA\">\n                  &lt;div>\n                    This is the content of 'appletA'\n                  &lt;/div>\n                &lt;/define-applet>\n                &lt;define-applet applet-id=\"appletB\">\n                  &lt;div>\n                    This is the content of 'appletB'\n                  &lt;/div>\n                &lt;/define-applet>\n              &lt;/define-application>\n            &lt;/body>\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: "\n          <ul>\n            <li>&lt;define-application> \u4E0A\u7684\u5C5E\u6027 <b>\u201Cdefault-applet\u201D</b> \u53EF\u6307\u5B9A\u4E00\u4E2A Applet \u540D\uFF0C\u505A\u4E3A\u521D\u59CB\u5316\u5E94\u7528\u65F6\u7684\u9ED8\u8BA4\u89C6\u56FE\uFF0C\u5373\u7528\u6237\u6700\u65E9\u53EF\u89C1\u7684\u89C6\u56FE\u3002</li>\n            <li>&lt;define-applet> \u4E0A\u7684\u5C5E\u6027 <b>\u201Capplet-id\u201D</b> \u4E3A\u58F0\u660E\u7684 Applet \u540D\u3002</li>\n          </ul>\n        "
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
                value: "\n          <code-highlight type=\"ts\">\n            import { createApplication } from 'lath'\n            createApplication({\n              applets: {\n                frameworks: {\n                  config: {\n                    title: 'Lath Demo'\n                  }\n                },\n                appletA: {\n                  config: {\n                    title: 'Page A'\n                  }\n                },\n                appletB: {\n                  config: {\n                    title: 'Page B'\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: '我们使用 &lt;define-application> 容器是为了声明应用，但要真正启动应用还需要执行 <a to-applet="doc?id=install" clone-as="popDoc">createApplication</a> 方法，并传入 Applet 相关配置。'
            },
            {
                type: 'text',
                value: '不出意外我们将得到一个“施了魔法”的页面，此时我们可以通过 A 链接或 <a to-applet="doc?id=applicationTo" clone-as="popDoc">Application.to</a> 等方法路由到已定义的程序卡视图上。'
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
                value: "\n          <code-highlight type=\"ts\">\n            import { createApplication } from 'lath'\n            createApplication({\n              applets: {\n                frameworks: {\n                  config: {\n                    title: 'Lath Demo'\n                  }\n                },\n                home: {\n                  config: {\n                    title: 'home',\n                    source: {\n                      src: 'https://www.yoursite.com/home.html' \n                    }\n                  }\n                }\n              }\n            }).then((application) => {\n              // \u8FD4\u56DE application \u5BF9\u8C61\n              console.log(application)\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: 'Applet 的视图不光可以通过 &lt;define-applet> 进行声明，也可以通过配置项  <a to-applet="doc?id=source" clone-as="popDoc">source</a> 进行声明。'
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
                value: '当使用 source 声明 Applet 的视图，若其 src 页面指向为一个跨域页面，则该页面中的被代理类型的能力将会受到限制，若要解决此问题可在引用页面中同样引入 Lath 并开启选项 <a to-applet="doc?id=tunneling" clone-as="popDoc">PresetConfig > tunneling</a> 来解除一些限制。'
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
                value: "\n          <code-highlight type='ts'>\n            // type.d.ts\n            import 'lath'\n            declare namespace JSX {\n              interface IntrinsicElements {\n                'define-applet': {\n                  children: Element\n                  'applet-id': string\n                }\n                'define-application': {\n                  children: Element\n                  'default-applet': string\n                }\n              }\n            }\n          </code-highlight>\n        "
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
};
