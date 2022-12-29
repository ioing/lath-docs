# Application.preActivityApplet

<small>Application.preActivityApplet</small>

Applet of the previous activity.

---

<h3>Types</h3>

```ts
preActivityApplet: Applet
```

---

<h3>Details</h3>

Returns the previous Applet.

---

<h3>Example</h3>

```ts
const { application } = await createApplication({
  applets: {
    ...
  }
})
console.log(application.preActivityApplet)

```

---

<h3>Notes</h3>

The acquisition logic of the program card is consistent with <a href="?id=applicationActivityApplet#docs" preset-effect="slide" clone-as="doc-newWindow-applicationActivityApplet">Application.activeApplet</a>.
