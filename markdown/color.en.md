# Color

<small>AppletConfig > color</small>

Define the initial window background color of the Applets.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  color?: string
}
```

---

<h3>Details</h3>

The default background color can present a good visual transition when the Applet is not loaded.

The default value automatically fills in black/white based on whether the browser is in 'Dark Mode'.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        color: '#000',
      },
    },
  },
})
```

---

<h3>Notes</h3>

Please choose an appropriate background color to fill the Applet window to ensure visual consistency.

> When the background color does not match the Applet content, the user is likely to see a flicker.
