# PullToRefresh

<small>AppletConfig > pullToRefresh</small>

开启后，在主滚动容器持续下拉手势时将会触发页面无缝刷新。

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

开启该选项的前提是“FrameworksApplet”也开启了该选项，否则将无法生效。

下拉刷新将关联一个滚动容器，可通过“pullToRefreshTargetScrollId”指定容器“id”。

若未指定容器，则会默认关联主滚动容器，主滚动条请参考配置项“mainScrollId”，默认主滚动关联为程序卡的 &lt;define-applet> 容器。

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

注意指定的滚动容器“id”不可存在于 ShadowDom 中。
