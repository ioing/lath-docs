# PreIndex

<small>FrameworksAppletConfig > preIndex</small>

通过链接访问某个程序卡时，可在之前插入一个前置的程序卡。（frameworks 程序卡专属配置）

---

<h3>Types</h3>

```ts
interface FrameworksAppletConfig {
  preIndex?: string
}
```

---

<h3>Details</h3>

当通过访问页面 url 锚定到某个程序卡时，可以通过此配置项设置一个前置程序卡，此时访问该 url 链接时依然会优先访问锚定的程序卡，但当点击浏览器返回时并不会立刻退出，而是从锚定程序卡回退到通过该配置项插入的前置程序卡。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    frameworks: {
      config: {
        preIndex: 'home',
      },
    },
  },
})
```

当访问链接所锚定的程序卡和 [preIndex] 或 [index] 相等时则不会在之前再次插入前置程序卡。
