# Applet.refresh

<small>Applet.refresh</small>

The view object of the Applet.

---

<h3>Types</h3>

```ts
type refresh = () => Promise<void>
```

---

<h3>Details</h3>

Smooth refresh of the page, and return a 'Promise' object.

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
applet.refresh()
```
