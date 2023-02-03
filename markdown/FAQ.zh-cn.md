# FAQ

**Lath 带来了什么？**

它能让你的页面体验更加极致，实现媲美原生 Apps 的效果，比如<a to-applet="docs?id=prerender" clone-as="popDoc">预载二级页面</a>，<a to-applet="docs?id=modality" clone-as="popDoc">Pop Sheet</a> 交互效果，<a to-applet="docs?id=pullToRefresh" clone-as="popDoc">平滑无闪烁下拉刷新</a>，实现无缝的<a to-applet="docs?id=segueEffect" clone-as="popDoc">页面转场效果</a>以及流畅的<a to-applet="docs?id=defaultSlideViewApplets" clone-as="popDoc">页面横滑效果</a>等等诸多实现方案。

当你要获得这一切时并无需对原有逻辑和框架做出改变，甚至在初始页面的加载时也不会有对页面性能产生阻塞。

Lath 在窗口管理上有着非常优秀的设计，不仅能自动帮你进行资源回收，还能对页面间的事件进程进行自动管控，用它创建的应用是真正能达到媲美 Native Apps 的 Web App。
接下来就开始上手吧！

---

**使用成本如何？**

Lath 是一个容器，因此它对你的 web 程序使用什么框架是没有要求的，甚至你无需修改你的程序逻辑，仅通过一些简单的配置和约定即可完成到 Lath 的改造，例如你可以使用 React、VueJs、等等。

---

**使用 &lt;define-applet> 声明后滚动事件去哪了？**

每一个 Applet 视图都相当于是一个完整的页面内容，其都应具有自身的滚动容器，因此当使用 &lt;define-applet> 进行声明后，其内部和滚动事件相关的逻辑需要从“body”中移除，修改绑定到自身的 &lt;define-applet> 标签元素上。

---

**如何引入跨域的页面视图？**

当使用 source 声明 Applet 的视图，若其 src 页面指向为一个跨域页面，则该页面中的被代理类型的能力将会受到限制，若要解决此问题可在引用页面中同样引入 Lath 并开启选项 <a to-applet="docs?id=tunneling" clone-as="popDoc">PresetConfig > tunneling</a> 来解除一些限制。

---

**Lath 对执行时机有要求吗？**

Lath 作为体验加强容器并非是首屏上所必须的，因此我们建议在首屏加载完成后再执行 createApplication 方法，不阻塞首屏内容呈现。

---

**Typescript&JSX 警告？**

当使用 Typescript 在 React 环境时，我们需要对容器的标签进行类型定义，否则 ts 将会产生警告，此时在项目中添加该 type.d.ts 文件即可。

```ts
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
```

# 相关链接

一个在 Vue 项目中使用 Lath 进行开发的代码示例[https://github.com/ioing/lath-vue-example]
