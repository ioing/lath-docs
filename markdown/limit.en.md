# Limit

<small>frameworksAppletConfig > limit</small>

Define the maximum number of Applet that the App can cache in the background. (Frameworks Applet exclusive configuration).

---

<h3>Types</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        limit: 10,
      },
    },
  },
})
```

---

<h3>Details</h3>

Default is 5, maximum is 100. It is expressed as the Applet that can be cached in the background at most at the same time in the application. When it exceeds, the modules accessed firstly will be destroyed in turn according to the order of access. If the module is configured with background running (background=true), it will not be affected by this rule.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        limit: 10,
      },
    },
  },
})
```

---

<h3>Notes</h3>

The number of limits will affect the memory usage of the application when it is running, and it is generally recommended to be 5-20.
