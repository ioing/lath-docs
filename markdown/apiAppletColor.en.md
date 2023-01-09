# Applet.color

<small>Applet.color</small>

The background color of the Applet.

---

<h3>Types</h3>

```ts
type color = string
```

---

<h3>Details</h3>

'Color' comes from config configuration, returns the color setting of 'frameworks Applet' if not configured; and returns black and white according to whether the browser is in the dark mode if it is still not configured or inherited.

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
console.log(applet.color)
```
