# SingleFlow

<small>FrameworksAppletConfig > singleFlow</small>

Turn on historical hierarchical flow direction control. (Frameworks Applet exclusive configuration)

---

<h3>Types</h3>

```ts
interface FrameworksAppletConfig {
  singleFlow?: boolean
}
```

---

<h3>Details</h3>

Only the historical fallback direction of the Applet is allowed to fall back to the Applet with a smaller level, if the returned Applet level is greater than or equal to the current Applet level, the Applet is directly skipped and continues to return to the earlier Applet in the history until the conditions are met.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    frameworks: {
      config: {
        singleFlow: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

For example, from the Applet that generates the order function to the Applet that pays the order, after the successful payment enters the 'My Order Module Applet', when it is completed to roll back, it can be returned directly to the order card by opening the configuration item and combining the Applet level rules, so that it can directly return to the order to generate the Applet, without going through the various Applets in the order completion process.
