# GlobalCSSVariables

<small>FrameworksAppletConfig > globalCSSVariables</small>

Set global CSS variables for the application. (Frameworks Applet exclusive configuration)

---

<h3>Types</h3>

```ts
type GlobalCSSVariables = { [key: string]: string }
interface AppletBaseConfig {
  globalCSSVariables?: GlobalCSSVariables | (() => GlobalCSSVariables)
}
```

---

<h3>Details</h3>

Similar to [safeArea], it can only take effect under the same domain Applet page.

If you need to dynamically modify or increase this value, you can update it through the "API-updateGlobalCSSVariables" event.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        globalCSSVariables: {
          '--main-color': '#fff',
          '--title-font-size': '28px',
        },
      },
    },
  },
})
```

---

<h3>Notes</h3>

Use with "API-updateGlobalCSSVariables" to create a smooth theme transition effect.
