# DefaultSlideViewApplets

<small>AppletConfig > defaultSlideViewApplets</small>

The slideView for the Snap transition effect, we call it SlideView.

---

<h3>Types</h3>

```ts
type SlideViewApplets = Array<{
  id: string
  activate: 'lazy' | 'instant' | 'passive'
}>
interface AppletBaseConfig {
  defaultSlideViewApplets?: SlideViewApplets
}
```

---

<h3>Details</h3>

'id' indicates the name of the Applet to be loaded.
'activate' indicates the activation type of the Applet, which is divided into the following three types:

- lazy: Load Applet page content when the browser is idle.
- instant: Instantly loads the Applet page content.
- passive: Load the Applet page content when activated.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    frameworks: {
      config: {
        defaultSlideViewApplets: [
          {
            id: 'appletA',
            activate: 'instant',
          },
          {
            id: 'appletB',
            activate: 'lazy',
          },
        ],
      },
    },
  },
})
```

---

<h3>Notes</h3>

Applet with 'defaultSlideViewApplets' will no longer have their own views (except frameworks Applet), but other Applet views are nested within them, so this configuration conflicts with [source] and should not be set at the same time.

> In addition, use "API-Applet.slide.to" to slide the slideView to the specified Applet position.

# OpenSlideViewLeftHolder

<small>AppletConfig > openSlideViewLeftHolder</small>

When enabled, under the 'SlideView' effect (when 'defaultSlideViewApplets' is configured), the leftmost edge will allow to exit the application when swiping.

> This configuration is mainly used to unblock the exit under the first history record. If the browsing history is greater than 1, there is no edge sliding blockage in most cases. If it is not enabled, only edge elasticity is triggered and it will not go back to the previous level when edge sliding may occur in iOS devices.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  openSlideViewLeftHolder?: boolean
}
```

---

<h3>Details</h3>

The default value is false.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        defaultSlideViewApplets: [
          {
            id: 'appletA',
            activate: 'instant',
          },
          {
            id: 'appletB',
            activate: 'lazy',
          },
        ],
        openSlideViewLeftHolder: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

When this option is turned on ,it should be noted that a 20px non-feedback area will be generated on the left edge of the Applet, and this safe operating distance should be reserved during development.
