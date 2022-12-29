# MainScrollId

<small>AppletConfig > mainScrollId</small>

Specify the main scroll container for the Applet, which can be used in conjunction with [tapStatusBarToScrollToTop] and [pullToRefresh].

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  mainScrollId?: string
}
```

---

<h3>Details</h3>

If no main scroll container is specified, the default &lt;define-applet> is the main scroll.

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

Note that the specified scroll container "id" cannot exist in the 'ShadowDom'.
