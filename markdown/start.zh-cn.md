# 为什么用？

如果你想用 WEB 技术创建令人愉悦的 APP 体验，**通常你会面临以下问题**：

- 将不同技术类型的页面组装到一起，并确保互不干扰
- 页面之间进行路由需要具备流畅的转场效果和手势操作，尤其是在性能方面会是一个挑战
- 需要自行完成页面的预载加速以及生命周期管理等复杂的系统设计
- 创建良好的配置化与自动化系统

在实际操作中你可能会面临更多的困难和挑战。现在，这一切都将变得更加简单，你只需使用 Lath。

# 概念

快速入门前，让我们先了解一下基本概念和名词。

- **Lath**: Lath (中文名：板条) 是一个体验增强容器，首次依赖仅有 <b>5kb</b> 左右。其原子化的核心能力能够自动按需载入。
- **Application**: 一个 Lath 应用是由若干个程序卡（Applet）组成的。
- **Applet**: 一个程序卡是由一个页面或一个 View、以及其有关配置文件所组成的。
- **FrameworksApplet**: 每个 Lath 应用必有一个框架类型的程序卡，其主要承载公共能力，比如导航栏等等。

> Lath 应用是一个单页面应用（SPA），由若干个 Applet 组成。每个 Applet 都可以通过&lt;define-applet>定义一个内部区块视图，或者通过 config.source 定义一个外部页面视图。

# 使用

使用 **npm / yarn** 安装

```bash
$ npm install lath --save
// or
$ yarn add lath
```

---

假使我们现在要制作一个单页应用 (SPA)，并且我们已经制作好应用对应的每一个路由页面(Applet)，那么我们只需要通过下面的方式将其组装：
使用 **&lt;define-application>** 容器作为根节点来包裹页整个面内容，使页面被声明为一个 Lath 应用，然后在其内部使用 **&lt;define-applet>** 容器包裹具体的路由视图（我们可以理解为传统 SPA 应用中的一个页面）使包裹视图被声明为一个 Applet 实体的视图。

```html
<body>
  <define-application default-applet="appletA">
    <define-applet applet-id="appletA">
      <div>This is the content of 'appletA'</div>
    </define-applet>
    <define-applet applet-id="appletB">
      <div>This is the content of 'appletB'</div>
    </define-applet>
  </define-application>
</body>
```

- &lt;define-application> 上的属性 <b>“default-applet”</b> 可指定一个 Applet 名，做为初始化应用时的默认视图，即希望第一时间让用户可见的视图。
- &lt;define-applet> 上的属性 <b>“applet-id”</b> 为声明的 Applet 名。

> “default-applet” 为 &lt;define-application> 包裹中已经通过 &lt;define-applet> 所声明的 Applet，当页面在浏览器中打开时仅该指定的 Applet 视图是可见的，其余视图则不可见。

使用标签包裹是创建 Lath 应用的第一步，下面我们还要为每个已声明的 Applet 进行特性配置，比如为每个 Applet 设定一个标题。

```ts
import { createApplication } from 'lath'
createApplication({
  applets: {
    frameworks: {
      config: {
        title: 'Lath Demo',
      },
    },
    appletA: {
      config: {
        title: 'Page A',
      },
    },
    appletB: {
      config: {
        title: 'Page B',
      },
    },
  },
})
```

我们使用 &lt;define-application> 容器是为了声明应用，但要真正启动应用还需要执行 **createApplication** 方法，并传入 Applet 相关配置。

不出意外我们将得到一个“施了魔法”的页面，此时我们可以通过 A 链接或 <a to-applet="docs?id=apiApplicationTo" clone-as="popDoc">Application.to</a> 等方法路由到已定义的程序卡视图上。

一般情况下我们不会将应用中所有可能被加载的路由页面都一次性集成在一个页面中，而是希望能按需载入，那我们只需通过配置信息来表达即可：

```ts
import { createApplication } from 'lath'
createApplication({
  applets: {
    frameworks: {
      config: {
        title: 'Lath Demo',
      },
    },
    home: {
      config: {
        title: 'home',
        source: {
          src: 'https://www.yoursite.com/home.html',
        },
      },
    },
  },
}).then((application) => {
  // 返回 application 对象
  console.log(application)
})
```

Applet 的视图不光可以通过 &lt;define-applet> 进行声明，也可以通过配置项 <a to-applet="docs?id=source" clone-as="popDoc">source</a> 进行声明。
当使用 source 定义 Applet 视图时则无需再使用 &lt;define-applet> 进行声明。
一般我们会将 frameworks 程序卡和首屏程序卡通过 &lt;define-applet> 的方式进行声明，其余程序卡则通过配置 source 的方式进行声明，这样可以保证最大程度的首屏加载速度。
