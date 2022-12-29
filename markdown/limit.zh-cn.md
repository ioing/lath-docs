# Limit

<small>frameworksAppletConfig > limit</small>

定义应用最大可缓存在后台的程序卡数量。（frameworks 程序卡专属配置）

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  limit?: number
}
```

---

<h3>Details</h3>

默认为 5, 最大值为 100。其表示为应用中所允许的最多可同时缓存在后台的程序卡，当超过时会根据访问的顺序，对先访问的模块进行依次销毁，若模块配置了背景运行(background = true)时则不受此规则的影响。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        limit: 10,
      },
    },
  },
})
```

---

<h3>Notes</h3>

limit 数量将影响应用运行时的内存占用，一般建议在 5-20。
