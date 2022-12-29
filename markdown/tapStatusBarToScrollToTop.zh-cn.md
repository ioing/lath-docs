# TapStatusBarToScrollToTop

<small>AppletConfig > tapStatusBarToScrollToTop</small>

开启后，在点击窗口顶部状态栏时，主滚动容器将滚动到顶部。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  tapStatusBarToScrollToTop?: boolean
}
```

---

<h3>Details</h3>

该选项将将反映在主滚动上，主滚动条请参考配置项“mainScrollId”，默认主滚动关联为程序卡的 body 容器。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        tapStatusBarToScrollToTop: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

该选项的启动须依赖配置项“mainScrollId”。
