# Applet.refresh

<small>Applet.refresh</small>

程序卡的视图对象。

---

<h3>Types</h3>

```ts
type refresh = () => Promise<void>
```

---

<h3>Details</h3>

平滑页面刷新，返回一个 Promise 对象。

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
applet.refresh()
```
