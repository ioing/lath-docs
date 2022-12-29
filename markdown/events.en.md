# Events

<small>AppletManifest > events</small>

Register event callbacks for Applets.

---

<h3>Types</h3>

```ts
declare interface AppletEvents {
  transformStart: (applet: Applet) => undefined | 'break'
  transformEnd: (applet: Applet) => void
  boot: (applet: Applet) => void
  load: (applet: Applet) => void
  loadError: (applet: Applet) => void
  preload: (applet: Applet) => void
  destroy: (applet: Applet) => void
}
declare interface AppletManifest {
  events?: Partial<AppletEvents>
}
```

---

<h3>Details</h3>

Register the event callback function in the life cycle in the Applet.

- **transformStart** Applet transition animation start event. Note that 'transformStart' can optionally return a string 'break', at which point the block transition will be terminated.
- **transformEnd** Applet transition animation end event.
- **boot** Applet start event (only once per lifetime).
- **load** The source code loading completion event of 'source' type Applet.
- **loadError** The source code loading error event of 'source' type Applet.
- **preload** Applet preload finished event.
- **destroy** Applet destroyed event.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        title: 'home',
      },
      events: {
        transformEnd: (applet) => {
          // ...
        },
      },
    },
  },
})
```

---

<h3>Notes</h3>

Only the necessary events are provided in the Applet registration event, you can use the listener function on the Applet object to cover more events. Please refer to 'API-Application Events'.

> The events in the Applet configuration all run outside the Applet container. When the Applet is destroyed, the environment variables in the configuration will not disappear. Therefore, you must be responsible for the quality of the logic in the configuration file, avoid side effects, and be reasonable. Controls the logic size (complex logic is not recommended here).
