# Applet.viewType

<small>Applet.viewType</small>

程序卡视图的类型。

---

<h3>Types</h3>

```ts
type viewType = 'portal' | 'iframe' | 'shadow'
```

---

<h3>Details</h3>

根据配置项 source 和 render 生成的程序卡分别对应 “iframe” 和 “shadow” 两种类型，而同时配有 source 和 portal 属性的程序卡则为 “portal” 类型。

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
console.log(applet.viewType)
```
