# Sandbox

<small>AppletConfig > sandbox</small>

程序卡容器的沙盒限制。

---

<h3>Types</h3>

```ts
type SandboxOptions = Array<
  | 'allow-same-origin'
  | 'allow-scripts'
  | 'allow-forms'
  | 'allow-modals'
  | 'allow-orientation-lock'
  | 'allow-popups'
  | 'allow-pointer-lock'
  | 'allow-popups-to-escape-sandbox'
  | 'allow-presentation'
  | 'allow-top-navigation'
  | 'allow-top-navigation-by-user-activation'
  | 'allow-downloads-without-user-activation'
  | 'allow-storage-access-by-user-activation'
  | 'allow-top-navigation-by-user-activation'
  | string
>
interface AppletBaseConfig {
  sandbox?: SandboxOptions
}
```

---

<h3>Details</h3>

该选项仅适用于拥有[source]选项设定的程序卡。

关于 Sandbox 的更多信息，请参照 W3C 定义。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        sandbox: 'allow-modals',
      },
    },
  },
})
```

---

<h3>Notes</h3>

若你的程序卡页面为第三方链接，出于对安全性的考虑可通过此选项对其不必要的权限进行限制。
