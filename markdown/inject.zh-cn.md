# Inject

<small>AppletConfig > inject</small>

当为同源程序卡页面时，可在程序卡页面载入前对程序卡页面内注入设定的全局变量与方法，比如注入一些“jsBridge”、通用变量或者改写全局对象等。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  inject?: (w: Window, m: Applet) => void
}
```

---

<h3>Details</h3>

比如程序卡中的链接跳转是通过“jsBridge”进行的，因此 Lath 并无法自动捕捉，因此现在你想要改写该逻辑，那么现在你则可以通过该选项来进行对其改写。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        inject: (appletWindow, applet) => {
          appletWindow.open = (url) => {
            return applet.application.pushWindow(url).catch(() => {
              window.open(url)
            })
          }
        },
      },
    },
  },
})
```

---

<h3>Notes</h3>

需要注意的是 inject 选项受同域限制，因此在跨域场景下无法使用。

inject 是一个强大的能力，你可以基于此开发出不可思议的能力。
