# Events

<small>AppletManifest > events</small>

注册程序卡的事件回调。

---

<h3>Types</h3>

```ts
declare interface AppletEvents {
  transformStart: (applet: Applet) => undefined | 'break'
  transformEnd: (applet: Applet) => void
  boot: (applet: Applet) => void
  load: (applet: Applet) => void
  loadError: (applet: Applet) => void
  preload: (applet: Applet) => void
  destroy: (applet: Applet) => void
}
declare interface AppletManifest {
  events?: Partial<AppletEvents>
}
```

---

<h3>Details</h3>

在程序卡中注册生命周期中的事件回调函数。

- **transformStart** 程序卡转场动画开始事件。需要注意的是 transformStart 可选择返回一个字符串‘break’，此时模块转场将被终止执行。
- **transformEnd** 程序卡转场动画结束事件。
- **boot** 程序卡启动事件（每个生命周期内仅一次）。
- **load** source 类型程序卡的源代码加载完成事件。
- **loadError** source 类型程序卡的源代码加载错误事件。
- **preload** 程序卡预加载完事件。
- **destroy** 程序卡被销毁事件。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        title: 'home',
      },
      events: {
        transformEnd: (applet) => {
          // ...
        },
      },
    },
  },
})
```

---

<h3>Notes</h3>

在程序卡注册事件中仅提供必要的事件，如需更多事件则可以使用 Applet 对象上的监听函数，请参照 API - Application Events。

> 程序卡配置中的事件都是运行在程序卡容器外的，当程序卡销毁时配置中的环境变量并不会随之消失，因此必须对配置文件中的逻辑质量负责，避免产生副作用，并且合理控制逻辑大小（不建议在此处处理复杂逻辑）。
