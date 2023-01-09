# Applet.viewType

<small>Applet.viewType</small>

The type of Applet view.

---

<h3>Types</h3>

```ts
type viewType = 'portal' | 'iframe' | 'shadow'
```

---

<h3>Details</h3>

The Applets generated from the configuration item 'source' and 'render' correspond to the "iframe" and "shadow" types respectively, while the Applets with both 'source' and 'portal' properties are of type "portal".

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
console.log(applet.viewType)
```
