# GlobalCSSVariables

<small>FrameworksAppletConfig > globalCSSVariables</small>

设定应用的全局 CSS 变量。（frameworks 程序卡专属配置）

---

<h3>Types</h3>

```ts
type GlobalCSSVariables = { [key: string]: string }
interface AppletBaseConfig {
  globalCSSVariables?: GlobalCSSVariables | (() => GlobalCSSVariables)
}
```

---

<h3>Details</h3>

与 [safeArea] 相似，同样只能在同域程序卡页面下生效。

如果需要动态的修改或增加这个值则可以通过 “API-updateGlobalCSSVariables” 事件来进行更新

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        globalCSSVariables: {
          '--main-color': '#fff',
          '--title-font-size': '28px',
        },
      },
    },
  },
})
```

---

<h3>Notes</h3>

配合 “API-updateGlobalCSSVariables” 使用，可创造出丝滑的主题切换效果。
