# Applet.sameOrigin

<small>Applet.sameOrigin</small>

Whether the Applet pages are same origin.

---

<h3>Types</h3>

```ts
type sameOrigin = boolean
```

---

<h3>Details</h3>

The Applet configured by 'source.src' that returns 'true' if it is homologous.

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
console.log(applet.sameOrigin)
```
