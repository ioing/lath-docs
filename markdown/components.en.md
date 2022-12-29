# Components

<small>AppletManifest > components</small>

Applet pages that belong to the same origin can share Web Components with the main Applet page.

---

<h3>Types</h3>

```ts
interface AppletManifest {
  components?: ((w: Window) => CustomElementConstructor)[]
}
```

---

<h3>Details</h3>

As a future-oriented component standard, Web Components are not only easy to share, but also can greatly improve the experience performance of the page.

---

<h3>Example</h3>

```ts
export const getCodeHighlighter = (shadowWindow): CustomElementConstructor => {
  class CodeHighlighter extends shadowWindow.HTMLElement {
    constructor () {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      shadowRoot.appendChild(tmpl.content.cloneNode(true))
      ...
    }
  }

  return CodeHighlighter as unknown as CustomElementConstructor
}
createApplication({
  applets: {
    home: {
      config: {
        title: 'Home Page'
      },
      components: [getCodeHighlighter]
    }
  }
})

```

---

<h3>Notes</h3>

Since Web Components are to be shared into each Applet Container, we need to register the component in the window variable of the Applet when we encapsulate the component.
