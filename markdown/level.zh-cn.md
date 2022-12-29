# Level

<small>AppletConfig > level</small>

程序卡视图窗口显示层级。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  level?: number
}
```

---

<h3>Details</h3>

一般首屏程序卡的层级为 0，根据访问深度而逐级增大。

程序卡层级关系还将反应在转场动画的效果上，从小到大为正向动画，反之从大到小时为逆向动画。

当历史回退到层级为 0 的程序卡时，会触发 singleLock 事件，具体可查看 [singleLock] 配置中的相关描述。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        level: 1,
      },
    },
  },
})
```

---

<h3>Notes</h3>

若跳转的两个模块是为同层级模块，则转场动画效果会被自动关闭。

> 为什么同级模块动画关闭？：同级模块动画关闭主要场景是用于 tab 切换，一般 tab 切换时不需要一个窗口动画效果，但是从其它层级的窗口切换过来时可能又是需要动画效果的。
