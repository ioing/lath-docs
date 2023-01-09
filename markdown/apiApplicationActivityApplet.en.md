# Application.activityApplet

<small>Application.activityApplet</small>

The currently active Applet.

---

<h3>Types</h3>

```ts
activityApplet: Applet
```

---

<h3>Details</h3>

If the Applet['home'] in the current viewport, accessing this value returns the Applet['home'].

---

<h3>Example</h3>

```ts
const application = await createApplication({
  applets: {
    ...
  }
})
console.log(application.activityApplet)

```

---

<h3>Notes</h3>

If the Applet in the current viewport is a Applet[type = SlideView], the returned value is the Applet[type = SlideView], not the sub Applet in the SlideView view.

> If you want to get the sub Applet in the active program card, see the SlideView introduction.
