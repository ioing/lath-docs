# Title

<small>AppletConfig > title</small>

程序卡标题，主要用于浏览器窗口标题的显示。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  title?: string
}
```

---

<h3>Details</h3>

当窗口切换时，该配置项相当于页面中的 "Title" 标签的作用。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        title: 'Home Page',
      },
    },
  },
})
```

---

<h3>Notes</h3>

> 当 system 程序卡、 frameworks 程序卡 以及首页程序卡同时设置 title 时，它们的显示权重是： 首页程序卡 > frameworks 程序卡 > system 程序卡。而实际上 system 类型程序卡的此选项是不必要的，因为它从不会生效。
