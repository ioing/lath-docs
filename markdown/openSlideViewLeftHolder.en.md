# OpenSlideViewLeftHolder

<small>AppletConfig > openSlideViewLeftHolder</small>

开启后，在 SlideView 效果下（defaultSlideViewApplets 配置时），最左侧边缘滑动时会允许退出应用。'When enabled, under the 'SlideView' effect (when 'defaultSlideViewApplets' is configured), the leftmost edge will allow to exist the application when swiping.

> This configuration is mainly used to unblock the exit under the first history record. If the browsing history is greater than 1, there is no edge sliding blockage in most cases. If it is not enabled, the edge elasticity may occur in iOS devices when edge sliding without falling back to the previous level.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  openSlideViewLeftHolder?: boolean
}
```

---

<h3>Details</h3>

该值默认为 false。

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

When this option is turned on, it should be noted that a 20px non-feedback area will be generated on the left edge of the Applet, and this safe operating distance should be reserved during development.
