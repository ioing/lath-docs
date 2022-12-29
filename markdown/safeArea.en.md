# SafeArea

<small>AppletConfig > safeArea</small>

定义全局的 CSS 应用安全边距变量。（frameworks 程序卡专属配置）

---

<h3>Types</h3>

```ts
type ApplicationSafeAreaValue = string | Array<string>
interface AppletBaseConfig {
  safeArea?: ApplicationSafeAreaValue | (() => ApplicationSafeAreaValue)
}
```

---

<h3>Details</h3>

值为数字时，分别按顺序表示 顶部、右侧、底部、左侧 的安全边距。

设置该值后将会在程序卡的全局样式中注入 CSS 全局变量：--application-safe-area-top、--application-safe-area-right、--application-safe-area-bottom、--application-safe-area-left 四个对应的安全边距值。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        safeArea: ['44px', '0px', '0px', '0px'],
      },
    },
  },
})
```

如果需要动态的修改这个值则可以通过发送“safeAreaChange”事件来进行更新。

```ts
application.trigger('safeAreaChange', ['88px', '0px', '0px', '0px'])
```

---

<h3>Notes</h3>

当 frameworks 程序卡带有头部导航时，为了能让程序卡正常预留导航栏高度，使用该配置能动态调整该高度。
