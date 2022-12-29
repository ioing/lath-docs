# Applet Events

<small>Applet > on</small>

常用事件监听（on, one, off）。

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

程序卡显示。

**hide**

程序卡消失。

**willShow**

程序卡即将显示。

**willHide**

程序卡即将消失。

**destroy**

程序卡被销毁。

**pullToRefreshEnd**

程序卡下拉刷新结束。

**pullToRefreshCancel**

程序卡下拉刷新取消。

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
applet.on('willShow', () => {
  //...
})
```
