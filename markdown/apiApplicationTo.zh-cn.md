# Application.to

<small>Application.to</small>

转场到指定程序卡。

---

<h3>Types</h3>

```ts
type TransformToOptions = [
  id: string,
  param?: string,
  history?: -1 | 0 | 1,
  touches?: TouchEvent | TransformActionOrigin
]
type to = (...args: TransformToOptions) => Promise<void>
```

---

<h3>Details</h3>

**id**

跳转到指定 id 的程序卡。

**param**

跳转程序卡所携带的参数（参数字符串）。

**history**

为 -1 时不推入到历史记录，为 0 时替换当前历史记录，为 1 时推入新的历史记录。

**touches**

为发生点击行为的元素点击的 TouchEvent 对象，或直接定义的发生事件 x, y 坐标值的 TransformActionOrigin 对象，用做某些需要根据起始位置而发生的转场动画。

---

<h3>Example</h3>

```ts
application.to('home', '?id=100', 1)
```

---

<h3>Notes</h3>

该函数为一个异步函数，若访问程序卡不存在则会尝试进入 404 程序卡， 并将原有携带参以及通过参数“\_\_notFoundId”将该模块 id，一并传递给 404 程序卡。
