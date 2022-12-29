# Transient

<small>AppletConfig > transient</small>

标记该程序卡为临时模块。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  transient?: boolean
}
```

---

<h3>Details</h3>

在程序卡切换到后台时，会被立即销毁，并同时删除程序卡的所有临时配置数据。

通过新窗口打开（A 链接 或 API - pushWindow）的 url 类型程序卡（即无自定义配置的临时模块），会被自动进行该标记。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    demoPage: {
      config: {
        transient: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

一般当你的程序卡不存在重复利用时可使用该参数，比如无法枚举的通过动态生成的程序卡。

> 该配置项的意义是什么？当 A 链接所访问的生成模块时，由于链接无法枚举，因此会累积很多无用的程序卡配置，因此开启该选项能够消除这些无意义的内存消耗。

# DisableTransient

<small>AppletConfig > disableTransient</small>

DisableTransient 和 Transient 相呼应，可通过此参数来关闭默认的 Transient 行为。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  disableTransient?: boolean
}
```

---

<h3>Details</h3>

若在某种特殊情境下，模块无须定义任何配置（或开发者懒于设置）而实际上模块是可枚举的（自动生成的配置也是有意义的，其存在重用的可能而并非临时程序卡），因此配置该选项时可关闭自动清除生成的程序卡配置的机制。
