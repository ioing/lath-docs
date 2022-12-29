# Render

<small>AppletConfig > render</small>

In addition to defining the Applet view through the configuration item [source], you can also directly render elements to the Applet through the render method.

The Applet defined by render will use shadowDOM mode.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  render?: (target: HTMLElement) => void
}
```

---

<h3>Details</h3>

The 'render' function passes in the root node of the Applet, and developers can directly insert the rendering view into the node.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        render: (target) => {
          target.innerHTML = `
              <p>Hello World</p>
            `
        },
      },
    },
  },
})
```

---

<h3>Notes</h3>

The best practice solution for using the 'render' function is to separate the business logic from the module configuration, and use dynamic 'import' parts of the business logic.
