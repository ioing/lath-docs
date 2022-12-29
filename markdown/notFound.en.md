# NotFound

<small>FrameworksAppletConfig > notFound</small>

404 Applet (frameworks Applet exclusive configuration)

---

<h3>Types</h3>

```ts
interface FrameworksAppletConfig {
  notFound?: string
}
```

---

<h3>Details</h3>

If the requested Applet page does not exist, it will be automatically routed to the Applet, and if it is not configured, it will automatically jump to the Apple whose "id" is "404".

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    frameworks: {
      config: {
        notFound: 'home',
      },
    },
  },
})
```

The 404 module is mainly used for the acceptance and statistics of abnormal access to the application.
