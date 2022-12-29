# PullToRefresh

<small>AppletConfig > pullToRefresh</small>

When enabled, a seamless page refresh will be triggered when the main scroll container continues to pull down gestures.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  pullToRefresh?: boolean
  pullToRefreshTargetScrollId?: string
}
```

---

<h3>Details</h3>

The premise of enabling this option is that "FrameworksApplet" also enables this option, otherwise it will not take effect.

Pull-to-refresh will be associated with a scroll container, the container "id" can be specified by "pullToRefreshTargetScrollId".

If no container is specified, it will be associated with the main scroll container by default. For the main scroll bar, please refer to the configuration item "mainScrollID".By default, the main scroll is associated with the &lt;define-applet> container of the Applet.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        pullToRefresh: true,
        pullToRefreshTargetScrollId: 'root',
      },
    },
  },
})
```

---

<h3>Notes</h3>

Note the specified scroll container "id" cannot exist in ShadowDom.
