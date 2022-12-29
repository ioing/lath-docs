# Transient

<small>AppletConfig > transient</small>

Mark the Applet as a temporary module.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  transient?: boolean
}
```

---

<h3>Details</h3>

When the Applet switches to the background, it is immediately destroyed and all temporary configuration data for the Applet is deleted at the same time.

URL-type Applets (i.e. temporary modules without custom configuration) opened through a new window (A link or API - pushWindow) are automatically marked.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    demoPage: {
      config: {
        transient: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

This parameter can generally be used when there is no reuse of your Applet, such as dynamically generated Applets that cannot be enumerated.

> What is the significance of this configuration item? When a build module accessed by the A link accumulates a lot of useless Applet configurations because the links cannot be enumerated, turning on this option eliminates these meaningless memory consumption.

# DisableTransient

<small>AppletConfig > disableTransient</small>

'DisableTransient' echoes 'Transient', and this parameter allows you to turn off the default 'Transient' behavior.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  disableTransient?: boolean
}
```

---

<h3>Details</h3>

If, in a particular case, the module does not need to define any configuration (or the developers is lazy to set it) and the module is actually enumerable (the automatically generated configuration is also meaningful, and there is a possibility of reuse rather than temporary Applets), so configuring this option turns off the mechanism for automatically clearing the generated Applet configuration.
