# Application Events

<small>Application > on</small>

常用事件监听（on, one, off）。

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

可监听安全边距更新，若 updateSafeArea 被调用时通知，返回安全边距对象。

**globalCSSVariablesChange**

可监听全局样式变量更新，若 updateGlobalCSSVariables 被调用时通知，返回更新样式变量对象。

**transformStart**

当发生窗口切换前将通知，返回窗口程序卡数组。

**transformEnd**

当发生窗口切换完成时将通知，返回窗口程序卡数组。

**systemDidMount**

当系统程序卡执行完成时将通知，并返回 System Applet。

**frameworksDidMount**

当框架程序卡执行完成时将通知，并返回 Frameworks Applet。

**pullToRefreshReady**

当配置使用了下拉刷新，且下拉刷新原子能力准备完成时发出通知。

**exit**

当程序触发退出应用时发出通知，返回尝试退出累积次数。

**back**

当程序触发历史返回时通知，返回目标 Applet。

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

Application Events 上的事件使用场景一般不高，比较常用的事件在 Applet Events 上的比较多一些。
