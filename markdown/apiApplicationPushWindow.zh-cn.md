# Application.PushWindow

<small>Application.pushWindow</small>

转场到指定程序卡或 url 的页面。

---

<h3>Types</h3>

```ts
declare interface TransformActionOrigin {
  x: number
  y: number
}
type PushWindowOptions = [
  url: string,
  title: string,
  preset: string,
  cloneAs?: string,
  touches?: TouchEvent | TransformActionOrigin
]
type pushWindow = (
  url: string,
  title = '',
  preset = 'slide',
  cloneAs?: string,
  touches?: TouchEvent | TransformActionOrigin
) => Promise<void>
```

---

<h3>Details</h3>

同 <a href="?id=applicationTo#docs" preset-effect="slide" clone-as="doc-newWindow-applicationTo">Application.to</a> 相似，pushWindow 的第一个参数不仅可以传入一个程序卡 id，还可以传入一个页面 URL，以此来打开一个新生成的程序卡页面。

**cloneAs**

定义将该程序卡新克隆副本的名称，此时该克隆副本不会替换原有程序卡实例，而是作为一个新的程序卡独立存在。

**preset**

定义该程序卡被打开时所使用的内置的动画效果，其值为内置动画名。

**title**

定义打开程序卡的 title 标题。

**touches**

同 Application.to 中 touches 的部分。

**url**

打开新页面的 url（目标页面将会受到捕捉[capture]逻辑的影响）。

---

<h3>Example</h3>

```ts
application.pushWindow(
  'http://www.xxxxx.com/index.html',
  '首页',
  'zoom',
  'newHome'
)
```

若在 iframe 页面中想要调用该能力时，可使用 postMessage 发送请求。

```ts
parent.postMessage({
  action: 'pushWindow',
  data: ['https://xxx.com/', 'title'],
})
```
