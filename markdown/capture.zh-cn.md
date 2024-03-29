# Capture

<small>AppletConfig > capture</small>

捕捉其它程序卡中的跳转链接，若匹配时则跳转至该程序卡。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  capture?:
    | string
    | ((
        resolve: {
          pathname: string
          origin: string
          host: string
          hash: string
          href: string
          search: string
          port: string
          searchParams: URLSearchParams
        },
        url: string
      ) => boolean)
}
```

---

<h3>Details</h3>

capture 可接受一个“url path”，或一个捕捉函数，当其它程序卡中进行跳转行为时则可受到该捕获。

捕捉函数返回 true 时，则代表跳转链接匹配，链接目标将由该程序卡替代。

在捕捉后，如若跳转链接携带参数，将会把携带参数一并传与捕获者程序卡。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        capture: (resolve) => {
          return resolve.path === '/abc/abc'
        },
      },
    },
  },
})
```

---

<h3>Notes</h3>

该程序卡是否被提前载入是捕获程序是否工作的重要前提，因此为确保该捕获者程序卡已经被提前依赖加载，则需要在之前程序卡配置选项[prerender]中包含对该依赖程序卡的提前载入。

当开启此选项时，所有可被捕获的链接跳转行为都将交由该选项决定是否在应用内打开新窗，这意味着你的规则需要严谨的保障应用的安全性。

若 frameworks 程序卡开启此选项时，所有未设置该选项的程序卡将默认由 frameworks 程序卡代为处理，同时需要注意的是配置项[allowHost]将失效，因为 capture 将优先代为处理。

> 仅当前程序卡在 [apply] 中开启了 proxy-link 时，捕获者程序卡才能正常捕获，否则不会进入捕获逻辑，但该选项是默认开启，除非你将其关闭。
