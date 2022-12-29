# Portal

<small>AppletConfig > portal</small>

When the Applet with this property is enabled, when the browser supports the portal feature, the activation operation of the portal will be performed after the transition animation ends, and the Applet page will run in a new context after activation.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  portal?: boolean
}
```

---

<h3>Details</h3>

The source configuration of the Applet should be in link mode and in the same domain as the main application.

For an Applet set to portal, is [free] option should generally also be set to true.

When the browser dose not support the portal capability, it will automatically downgrade to the general container mode.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        portal: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

This option is suitable for Applets with independent functions and no connection with the main application (such as apply, inject, etc.), otherwise, the configuration of these dependent contexts will be invalid.
