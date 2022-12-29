# NotFound

<small>FrameworksAppletConfig > notFound</small>

404 程序卡。（frameworks 程序卡专属配置）

---

<h3>Types</h3>

```ts
interface FrameworksAppletConfig {
  notFound?: string
}
```

---

<h3>Details</h3>

若所请求的程序卡页面不存在时，则自动路由到该程序卡，若未配置时则会自动跳转到“id”为“404”的程序卡。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    frameworks: {
      config: {
        notFound: 'home',
      },
    },
  },
})
```

404 模块主要用于对应用异常访问时的承接及统计等。
