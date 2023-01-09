# Application.exists

<small>Application.exists</small>

Get the historical sequence which was whether loaded for the first time of the current page.

---

<h3>Types</h3>

```ts
type exists = boolean
```

---

<h3>Details</h3>

When you first access the link into the app, Lath will record the location of your current history node, and after any page activity occurs, it can detect whether the current position has changed. If the value is false, it means that the history has changed, that is, the current history is not the first entry.

---

<h3>Example</h3>

```ts
console.log(application.exists)
```

---

<h3>Notes</h3>

This method only records the location of the node that was first loaded, for example, if you refresh the browser on any page, it will cause the node to relabel the location.
