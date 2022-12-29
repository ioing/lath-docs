# Tunneling

<small>PresetConfig > tunneling</small>

Set the app to "Tunnel Mode". (Preconfigured items before the app starts.)

---

<h3>Types</h3>

```ts
interface PresetConfig {
  tunneling?: boolean
}
```

---

<h3>Details</h3>

> If you access a cross-domain Applet under the current domain, the cross-domain Applet cannot be implemented due to the same-origin policy, the global style variable update, and the ability in [Apply] (such as a new window).

Some of the limitations of the cross-domain Applet page are addressed by plugging the cross-domain Applet page to Lath and turning on [tunneling].

---

<h3>Example</h3>

```ts
createApplication({
  tunneling: true,
  applets: {
    ...
  }
})

```

---

<h3>Notes</h3>

When the page is connected to Lath and [tunneling] is turned on, the page itself is a separate application, but when the page is embedded in another Lath application as a Applet, the page opened through the A link (i.e. pushWindow) will not be opened within the application, but will proxied to open in the parent application, if the parent application is also embedded Lath application, and also opened [tunneling] will continue to "tunnel" upwards.
