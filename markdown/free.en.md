# Free

<small>AppletConfig > free</small>

Define the window display type of the APPLETS.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  free?: boolean
}
```

---

<h3>Details</h3>

When free equals true, the APPLET runs in 'full-screen mode', that is, it's not bound by the framework card.(Applets[id = frameworks]).

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        free: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

Suppose the framework card is a module with tabBar function, at this time the applet will directly cover the entire framework card to run, otherwise the applet will run inside the framework card. (That is, the tabBar is overridden on the framework card).
