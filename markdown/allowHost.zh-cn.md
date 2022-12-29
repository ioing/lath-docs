# AllowHost

<small>frameworksAppletConfig > allowHost</small>

当没有设置 [capture] 时，可通过该配置来过滤掉不安全的 host 地址，反之则不受限。（frameworks 程序卡专属配置）

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  allowHost?: Array<string>
}
```

---

<h3>Details</h3>

该配置主要用于防止通过 url 参数拼接的方式使应用不按预期的访问外域网站，以防止产生危害。

当 frameworks 模块设置了 [capture] 时，则会忽略该配置。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    frameworks: {
      allowHost: ['aaa.com', 'bbb.com', 'ccc.com'],
    },
  },
})
```

---

<h3>Notes</h3>

一般程序卡页面中的 A 链接跳转行为会被自动捕获为应用内的新窗口打开，但有时并不希望所有的情况都是如此，因此可通过该选项进行一个有效域的管控，当域不匹配时则不会进行应用内的新窗口打开，而是直接新开浏览器窗口进行访问。

> 如果你的应用中可能存在由用户输入的可访问地址，那么你很可能需要这项配置，以此来强制新页面以新开浏览器窗口的方式访问。
