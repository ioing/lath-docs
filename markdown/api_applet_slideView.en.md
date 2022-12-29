# Applet.slide

<small>Applet.slide</small>

The control object of the swipe applet (similar to the Snap effect).

---

<h3>Types</h3>

```ts
interface Slide {
  to: (id: number | string) => Promise<unknown>
  index: number
}
```

---

<h3>Details</h3>

The "to" function can accept a sequence (corresponding to the applet index in the configuration item defaultSlideViewApplets) / applet id.

The "index" property gets the index of applets on the current SlideView.

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
await applet.slide.to('pageA')
console.log(applet.slide.index)
```

---

<h3>Notes</h3>

For its creation, please refer to the configuration item: DefaultSlideViewAppts.
