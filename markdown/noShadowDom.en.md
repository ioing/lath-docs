# UnusedShadowDom

<small>PresetConfig > noShadowDom</small>

Whether the framework uses ShadowDom mode. (Preconfigured items before the app starts)

---

<h3>Types</h3>

```ts
interface PresetConfig {
  noShadowDom?: boolean
}
```

---

<h3>Details</h3>

> For more information about ShadowDom, check out the introduction to W3C.

If you start the application by 'createApplication' to specify the "index" mode, the preset Applet node will be moved directly to ShadowDom, which will cause the absence of styles and dependencies outside the node (such as some dependent script event binding elements and dynamically injected global styles, etc.).

ShadowDom mode has been turned off by default, you do not need to set the change option, if you do not have the above problems, and there will be no interference between the Applets of the Slice, you can turn off the Change option, at this time the same page of the slice to produce the Applet is related to each other.

---

<h3>Example</h3>

```ts
createApplication({
  tunneling: true,
  applets: {
    ...
  }
})
```

---

<h3>Notes</h3>

This configuration is rarely used, but it would be better if you could use '&lt;define-applet>' instead.
