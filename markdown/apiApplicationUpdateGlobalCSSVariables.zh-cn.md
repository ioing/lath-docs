# Application.updateGlobalCSSVariables

<small>Application.updateGlobalCSSVariables</small>

更新应用的全局 CSS 变量（受同源策略限制）。

---

<h3>Types</h3>

```ts
type ApplicationSafeAreaValue = string | Array<string>
type updateSafeArea = (data: ApplicationSafeAreaValue) => void
```

---

<h3>Details</h3>

执行更新时，所有生命周期内的模块都将进行实时的样式变量更新。

---

<h3>Example</h3>

```ts
application.updateGlobalCSSVariables({
  '---common-button-color': '#000000',
  '---common-button-width': '100%',
})
```

---

<h3>Notes</h3>

跨域模块页面需要自行处理，处理方法请参考 Application.updateSafeArea 相关介绍。
