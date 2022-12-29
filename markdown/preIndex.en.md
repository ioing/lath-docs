# PreIndex

<small>FrameworksAppletConfig > preIndex</small>

When accessing a Applet via a link, a pre-positioned Applet can be inserted before. (Frameworks Applet exclusive configuration)

---

<h3>Types</h3>

```ts
interface FrameworksAppletConfig {
  preIndex?: string
}
```

---

<h3>Details</h3>

When anchoring to a Applet by visiting the page url, you can set a pre-Applet through this configuration item. At this time, when accessing the url link, the anchored Applet will still be preferentially accessed, but when the browser is clicked to return, it does not exit immediately, but falls back from the anchor Applet to the front Applet inserted through this configuration item.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    frameworks: {
      config: {
        preIndex: 'home',
      },
    },
  },
})
```

When the Applet anchored by the access link is equal to [preIndex] or [index], the pre-Applet will not be inserted again before.
