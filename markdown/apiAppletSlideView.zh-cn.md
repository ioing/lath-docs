# Applet.slide

<small>Applet.slide</small>

横滑程序卡的控制对象（类似 Snap 效果）。

---

<h3>Types</h3>

```ts
interface Slide {
  to: (id: number | string) => Promise<unknown>
  index: number
}
```

---

<h3>Details</h3>

“to” 函数能够接受一个序列（对应配置项 defaultSlideViewApplets 中的 Applet 序列）/ Applet id。

“index” 属性可获取当前 SlideView 上所处于激活状态的程序卡的序列。

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
await applet.slide.to('pageA')
console.log(applet.slide.index)
```

---

<h3>Notes</h3>

关于它的创建请参照配置项：DefaultSlideViewApplets。
