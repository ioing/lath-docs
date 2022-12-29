# UseMirroring

<small>AppletConfig > useMirroring</small>

持久化保存上次访问的镜像文件，以便下次访问时快速呈现。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  useMirroring?: boolean
}
```

---

<h3>Details</h3>

当程序卡页面销毁时，将会对其内部 HTML 进行本地化持久存储，当下次访问时会立刻呈现上次访问结果，直到新内容加载完成后消失。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        useMirroring: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

当本地存储溢出时会清空所有 localStorge 本地数据，一般在一些变动频次较低的场景使用，使用前请充分考虑展示逻辑的合理性。

> 镜像的还原不能存储和还原页面中的 Web Components、 ShadowDom 以及 iframe、canvas、object 等嵌入媒体，当使用该选项时应当考虑这些因素。
