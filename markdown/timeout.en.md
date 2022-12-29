# Timeout

<small>AppletConfig > timeout</small>

The valid duration of the Applet life cycle, in milliseconds.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  timeout?: number
}
```

---

<h3>Details</h3>

When the Applet meets the cache conditions or is set to allow background running (background=true), the Applet will check the expiration status before the second entry, and will perform an update operation when it is checked that the Applet has expired.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        timeout: 36000,
      },
    },
  },
})
```

---

<h3>Notes</h3>

If the value is set to 0, background running (background=true) will not take effect.
