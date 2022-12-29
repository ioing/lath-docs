# Free

<small>AppletConfig > free</small>

定义程序卡的窗口展示类型。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  free?: boolean
}
```

---

<h3>Details</h3>

free 等于 true 时，程序卡以“全屏模式”运行，即不受框架程序卡（Applets[id = frameworks]）的约束。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        free: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

假设 frameworks 程序卡是一个带有 tabBar 功能的模块，此时程序卡将直接覆盖整个框架程序卡运行，反之程序卡则会在框架程序卡之内运行（即表现为 tabBar 覆盖在程序卡之上）。
