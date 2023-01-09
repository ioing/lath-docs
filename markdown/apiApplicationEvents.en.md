# Application Events

<small>Application > on</small>

Common event listeners (on, one ,off).

---

<h3>Types</h3>

```ts
type ApplicationSafeAreaValue = string | Array<string>
type GlobalCSSVariables = { [key: string]: string }
type TriggerEventArgsMap = {
  safeAreaChange: [ApplicationSafeAreaValue]
  globalCSSVariablesChange: [GlobalCSSVariables]
  transformStart: [Applet[]]
  transformEnd: [Applet[]]
  systemDidMount: [Applet]
  frameworksDidMount: [Applet]
  pullToRefreshReady: []
  exit: [{ backoutCount: number }]
  back: [Applet]
  error: [e: unknown]
}
type TriggerEventTypes = keyof TriggerEventArgsMap
type TriggerEventCallbackArgs<N extends TriggerEventTypes> =
  TriggerEventArgsMap[N]
type TriggerEventCallback<N extends TriggerEventTypes> = (
  ...args: TriggerEventArgsMap[N]
) => void
type TriggerEventTypesCallbacks = Record<
  TriggerEventTypes,
  TriggerEventCallback<keyof TriggerEventArgsMap>
>
type on = <T extends TriggerEventTypes, F extends TriggerEventCallback<T>>(
  type: T,
  fn: F,
  groupName?: string
) => this
type off = <T extends TriggerEventTypes, F extends TriggerEventCallback<T>>(
  type: T,
  fn: F
) => this
type one = on
```

---

<h3>Details</h3>

**safeAreaChange**

You can listen for safe margin updates and return safe margin objects if 'updateSafeArea' is notified when it is called.

**globalCSSVariablesChange**

You can listen for global style variable updates, and if 'updateGlobalCSSVariables' is called, the update style variable object is returned.

**transformStart**

When a window switch occurs, an array of window Applets is returned.

**transformEnd**

When a window switchover is completed, it is notified, returning an array of window Applets.

**systemDidMount**

When the system Applet execution is completed, it is notified and returns to System Applet.

**frameworksDidMount**

When the framework Applet execution is completed, it is notified and returns to Frameworks Applet.

**pullToRefreshReady**

Notification is given when a pull-down refresh is used in the configuration and the pull-refresh atomic power is ready to complete.

**exit**

Notifies the app when program triggers an exit, returning the cumulative number of exit attempts.

**back**

When the program triggers a notification when history returns, the target Applet is returned.

---

<h3>Example</h3>

```ts
 const { application } = await createApplication({
              applets: {
                ...
              }
            })
            application.on('frameworksDidMount', () => {
              //...
            })

```

---

<h3>Notes</h3>

The usage of events on Application Events is generally not high, and there are more commonly used events on Applet Events.
