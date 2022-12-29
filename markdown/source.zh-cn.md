# Source

<small>AppletConfig > source</small>

定义程序卡的 HTML 源代码，该源代码将在 Lath 创建的容器内运行。

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

可设置为源码模式与链接模式两种模式。

---

<h3>Example</h3>

**源码模式**

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
            `
        },
        ...
      }
    },
    ...
  }
})
```

**链接模式**

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

两种模式选其一，若共存时将以 src 链接模式优先。

---

<h3>Notes</h3>

使用链接模式时需符合同源策略，否者某些能力将无法开启，比如 Capture、Apply、Inject 等。若需要使用这些特性，则需要将目标页面也同样接入 lath，并开启“隧穿”模式，可参考“PresetConfig > tunneling”。
