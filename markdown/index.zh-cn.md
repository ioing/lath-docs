# Index

<small>FrameworksAppletConfig > index</small>

定义应用的默认入口的程序卡。（frameworks 程序卡专属配置）

---

<h3>Types</h3>

```ts
interface FrameworksAppletConfig {
  index?: string
}
```

---

<h3>Details</h3>

启动 Lath 应用时首先会先启动 frameworks 程序卡，然后根据“index”配置启动首页程序卡。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    frameworks: {
      config: {
        index: 'home',
      },
    },
  },
})
```

当应用启动时将首先初始化名称为“home”的程序卡。
