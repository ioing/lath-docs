# Application.updateGlobalCSSVariables

<small>Application.updateGlobalCSSVariables</small>

Update the app's global CSS variables (subject to the same-origin policy).

---

<h3>Types</h3>

```ts
type ApplicationSafeAreaValue = string | Array<string>
type updateSafeArea = (data: ApplicationSafeAreaValue) => void
```

---

<h3>Details</h3>

When an update is performed, all modules within the lifecycle are updated with real-time style variables.

---

<h3>Example</h3>

```ts
application.updateGlobalCSSVariables({
  '---common-button-color': '#000000',
  '---common-button-width': '100%',
})
```

---

<h3>Notes</h3>

The cross-domain module page needs to be handled by itself, please refer to 'Application.updateSafeArea'.
