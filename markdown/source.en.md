# Source

<small>AppletConfig > source</small>

Define the HTML source code for the applet, which will run inside the container created by Lath.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  source?: EitherOr<
    {
      src?: string
      html?: string | (() => Promise<string> | string)
    },
    'src',
    'html'
  >
}
```

---

<h3>Details</h3>

Can be divided into Source Mode and Link Mode.

---

<h3>Example</h3>

**Source Mode**

```ts
createApplication({
  applets: {
    home: {
      config: {
        title: 'Home Page',
        source: {
          html: `
            <html lang="en">
            <head></head>
            <body>
              Hello World!
            </body>
            </html>
            `,
        },
      },
    },
  },
})
```

**Link Mode**

```js
export default {
  config: {
    title: 'Home Page',
    source: {
      src: 'http://yoursite.com',
    },
  },
}
```

Choose one of the two modes. And if they coexist, the src Link Mode will take precedence.

---

<h3>Notes</h3>

> When using Link Mode, you need to comply with the same-origin policy, otherwise some capabilities will not be enabled, such as Capture, Apply, Inject, etc. If you need to use these features, you need to also connect the target page to Lath and turn on the 'tunneling' mode, which can be referred to "PresetConfig > tunneling".
