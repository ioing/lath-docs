# Index

<small>AppletConfig > index</small>

Define the applet as default entrance for an App. (frameworks Applet exclusive configuration)

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  index?: string
}
```

---

<h3>Details</h3>

When starting the Lath application, it will first start the frameworks applet, and then start the home page applet according to the "index" configuration.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    frameworks: {
      config: {
        index: 'home',
      },
    },
  },
})
```

The applet named 'home' will firstly be initialized when the app starts.
