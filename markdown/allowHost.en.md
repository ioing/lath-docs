# AllowHost

<small>frameworksAppletConfig > allowHost</small>

When [capture] is not set, insecure host addresses can be filtered out by this configuration, and vice versa. （frameworks Applet exclusive configuration)

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  allowHost?: Array<string>
}
```

---

<h3>Details</h3>

This configuration is mainly used to prevent the application from accessing foreign websites as expected by splicing url parameters to prevent harm.

This configuration is ignored when the frameworks module has [capture] set.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    frameworks: {
      allowHost: ['aaa.com', 'bbb.com', 'ccc.com'],
    },
  },
})
```

---

<h3>Notes</h3>

Generally, the jump behavior of A link in the Applet page will be automatically captured as a new window in the application to open, but sometimes this is not expected in all cases, so this option can be used to control an effective domain, when the domain does not match, it will not open a new window in the application, but directly open a new browser window for access.

> If your application may have accessible addresses entered by the user, you will most likely need this configuration to force new pages to be accessed as a new browser window.
