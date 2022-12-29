# Applet Events

<small>Applet > on</small>

Common event listeners (on, one, off).

---

<h3>Types</h3>

```ts
type ApplicationSafeAreaValue = string | Array<string>
type GlobalCSSVariables = { [key: string]: string }
type TriggerEventArgsMap = {
  show: []
  hide: []
  willShow: []
  willHide: []
  destroy: []
  pullToRefreshEnd: []
  pullToRefreshCancel: []
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

**show**

The Applet is displayed.

**hide**

The Applet disappears.

**willShow**

The Applet is about to appear.

**willHide**

The Applet is about to disappear.

**destroy**

The Applet is destroyed.

**pullToRefreshEnd**

The Applet drop-down refresh ends.

**pullToRefreshCancel**

The Applet drop-down refresh cancels.

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
applet.on('willShow', () => {
  //...
})
```
