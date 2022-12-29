# Level

<small>AppletConfig > level</small>

The Applet View Window displays the hierarchy.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  level?: number
}
```

---

<h3>Details</h3>

Generally, the level of the above-the-fold Applet is 0, and it increases gradually according to the access depth.

The Applet hierarchy will also reflect the effect of the transition animation: from small to large, it is a forward animation； and vice versa, from large to small, it is a reverse animation.

When the history rolls back to the Applet with level 0, the singleLock event will be triggered. For details, please refer to the relevant description in the [singleLock] configuration.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        level: 1,
      },
    },
  },
})
```

---

<h3>Notes</h3>

If the two modules to be jumped are modules of the same level, the transition animation effect will be automatically turned off.

> Why are sibling module animations turned off? The main scene when the animation of the same level module is turned off is for tab switching. Generally, a window animation effect is not required for tab switching, but animation effects may be required when switching from windows at other level.
