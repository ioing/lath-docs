# Sandbox

<small>AppletConfig > sandbox</small>

Sandbox restrictions for Applet containers.

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

This option is only available for Applets that have the [source] option set.

For more information on Sandbox, please refer to the W3C definition.

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

If your Applet page is a third-party link, you can use this option to restrict its unnecessary permissions for security reasons.
