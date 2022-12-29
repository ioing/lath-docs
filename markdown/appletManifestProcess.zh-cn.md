# AppletManifestProcess

<small>frameworlksAppletConfig > appletManifestProcess</small>

当程序卡载入时，其配置文件会先经此函数加工后再返回。（frameworks 程序卡专属配置）

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  appletManifestProcess?: (config: AppletManifest) => AppletManifest
}
```

---

<h3>Details</h3>

处理函数将传入当前处理程序卡配置，并接收一个新程序卡配置。

可通过该配置对所有程序卡配置进行重写，比如设定统一的动画效果或对一些安全选项进行校验。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        appletManifestProcess: (manify) => {
          ... 处理
          return newManify
        }
      }
    }
  }
})

```

---

<h3>Notes</h3>

程序卡配置中存在一些复杂选项，比如 inject、components 等，可通过此选项将可复用配置进行统一化管理。
