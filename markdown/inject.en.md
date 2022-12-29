# Inject

<small>AppletConfig > inject</small>

When it is a same-origin Applet page, the set global varialbles and methods can be injected into the Applet page before the Applet page is loaded, such as injecting some 'JSBridge', common variables or rewriting global objects.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  inject?: (w: Window, m: Applet) => void
}
```

---

<h3>Details</h3>

For example, the link jump in the Applet is carried out through 'JSBridge', so Lath cannot automatically capture it, so now you want to rewrite the logic, then you can use this option to rewrite it.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        inject: (appletWindow, applet) => {
          appletWindow.open = (url) => {
            return applet.application.pushWindow(url).catch(() => {
              window.open(url)
            })
          }
        },
      },
    },
  },
})
```

---

<h3>Notes</h3>

It should be noted that the 'inject' option is restricted by the same domain, so it cannot be used in cross-domain scenarios.

'injcect' is a powerful capability, and you can develop incredible capabilities based on it.
