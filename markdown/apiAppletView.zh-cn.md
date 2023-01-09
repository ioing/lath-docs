# Applet.view

<small>Applet.view</small>

程序卡的视图对象。

---

<h3>Types</h3>

```ts
type view = HTMLElement | HTMLPortalElement | HTMLIFrameElement | null
```

---

<h3>Details</h3>

视图的不同的元素类型由 viewType 而决定。

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
console.log(applet.view)
```
