# MainScrollId

<small>AppletConfig > mainScrollId</small>

指定 Applet 的主滚动容器，其与 [tapStatusBarToScrollToTop] 和 [pullToRefresh] 能够联合使用。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  mainScrollId?: string
}
```

---

<h3>Details</h3>

如果没有指定主滚动容器，则默认 &lt;define-applet> 元素为主滚动。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        mainScrollId: 'root',
      },
    },
  },
})
```

---

<h3>Notes</h3>

注意指定的滚动容器“id”不可存在于 ShadowDom 中。
