# Applet.view

<small>Applet.view</small>

The view object of the Applet.

---

<h3>Types</h3>

```ts
type view = HTMLElement | HTMLPortalElement | HTMLIFrameElement | null
```

---

<h3>Details</h3>

The different element types of a view are determined by the 'viewType'.

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
console.log(applet.view)
```
