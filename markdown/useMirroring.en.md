# UseMirroring

<small>AppletConfig > useMirroring</small>

Persists the last accessed image file for quick rendering on the next access.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  useMirroring?: boolean
}
```

---

<h3>Details</h3>

When an Applet page is destroyed, its internal HTML is localized and persistently stored, and the last access result is rendered immediately on the next visit until the new content is loaded and disappears.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        useMirroring: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

When the local storage overflows, all localStorage local data is cleared, which is generally used in some scenarios with low frequency of change, so please fully consider the rationality of the logic before use.

> Mirror restore cannot store and restore 'Web Components', 'ShadowDom', and embedded media such as 'iframe', 'canvases', 'objects', etc. in pages, and should be considered when using this option.
