# Timeout

<small>AppletConfig > timeout</small>

程序卡生命周期的有效时长，单位为毫秒。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  timeout?: number
}
```

---

<h3>Details</h3>

程序卡符合缓存条件或设置为允许背景运行(background=true)时，程序卡在二次进入前会检查过期情况，当检查到程序卡已过期时将会进行更新操作。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        timeout: 36000,
      },
    },
  },
})
```

---

<h3>Notes</h3>

若该值设置为 0 时，则背景运行(background=true)将不会生效。
