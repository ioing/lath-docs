# TapStatusBarToScrollToTop

<small>AppletConfig > tapStatusBarToScrollToTop</small>

When turned on, when you click on the status bar at the top of the window, the main scroll container scrolls to the top.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  tapStatusBarToScrollToTop?: boolean
}
```

---

<h3>Details</h3>

This option will be reflected on the main scroll, the main scroll bar refers to the configuration item "mainScrollID", the default main scroll is associated as the 'body' container of the Applet.

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

The launch of this option depends on the configuration item "mainScrollID".
