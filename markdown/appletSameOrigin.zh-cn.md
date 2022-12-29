# Applet.sameOrigin

<small>Applet.sameOrigin</small>

程序卡页面是否同源。

---

<h3>Types</h3>

```ts
type sameOrigin = boolean
```

---

<h3>Details</h3>

由 source.src 所配置的程序卡，若为同源返回 true。

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
console.log(applet.sameOrigin)
```
