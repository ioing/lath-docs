# title

<small>AppletConfig > title</small>

Applet titles, mainly used for the display of browser window titles.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  title?: string
}
```

---

<h3>Details</h3>

When the window is switched, the configuration item acts as the Title tab in the page.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        title: 'Home Page',
      },
    },
  },
})
```

---

<h3>Notes</h3>

> When the system Applets, framework Applets and home page Applets are set to title at the same time, their display weights are: home page > framework > system. In fact, this option for the system type Applet is unnecessary because it never takes effect.
