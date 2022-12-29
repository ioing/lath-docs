# Color

<small>AppletConfig > color</small>

定义程序卡的初始窗口背景色。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  color?: string
}
```

---

<h3>Details</h3>

默认背景色可以在程序卡未加载完成时呈现良好的视觉过渡。

默认值会根据浏览器是否为“Dark 模式”来自动填充黑色/白色。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        color: '#000',
      },
    },
  },
})
```

---

<h3>Notes</h3>

请选用合适的背景色来填充程序卡窗口，以确保视觉效果的连贯性。

> 当背景色与程序卡内容不一致时，用户很有可能见到一个闪烁。
