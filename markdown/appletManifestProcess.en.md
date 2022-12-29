# AppletManifestProcess

<small>frameworlksAppletConfig > appletManifestProcess</small>

When the Applet is loaded, its configuration file will be processed by this function before returning. (Frameworks Applet exclusive configuration)

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  appletManifestProcess?: (config: AppletManifest) => AppletManifest
}
```

---

<h3>Details</h3>

The handler function will be passed the current handler card configuration and receive a new one.

All Applet configuration can be rewritten through this configuration, such as setting uniform animation effects or verifying some security options.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        appletManifestProcess: (manify) => {
          ... process
          return newManify
        }
      }
    }
  }
})

```

---

<h3>Notes</h3>

There are some complex options in the Applet configuration, such as 'inject', 'components', etc., through which the reusable configuration can be managed uniformly.
