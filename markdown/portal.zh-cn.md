# Portal

<small>AppletConfig > portal</small>

开启该属性的程序卡在浏览器支持 portal 特性时，在转场动画结束后会执行 portal 的激活操作，激活后程序卡页面将在新的上下文中运行。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  portal?: boolean
}
```

---

<h3>Details</h3>

程序卡的 source 配置应为链接模式，且与主应用同域。

设置为 portal 的程序卡， 其[free]选项一般也应设置为 true。

当浏览器不支持 portal 能力时会自动降级为一般容器模式。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        portal: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

该选项适用于功能独立且与主应用没有任何的联系的（如 apply、inject 等）程序卡，否则，将会导致这些依赖上下文的配置失效。
