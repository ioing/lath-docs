# Render

<small>AppletConfig > render</small>

除了通过配置项[source]定义程序卡视图，还可以通过 render 方法来直接渲染元素到程序卡内。

render 进行定义的程序卡将使用 shadowDom 模式。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  render?: (target: HTMLElement) => void
}
```

---

<h3>Details</h3>

render 函数将程序卡的根节点传入，开发者可将渲染视图直接插入到节点内。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        render: (target) => {
          target.innerHTML = `
              <p>Hello World</p>
            `
        },
      },
    },
  },
})
```

---

<h3>Notes</h3>

使用 render 函数的最佳实践方案是把业务逻辑与模块配置进行分离，可使用动态 import 来引入业务逻辑的部分。
