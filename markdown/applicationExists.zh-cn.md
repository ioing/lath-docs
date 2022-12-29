# Application.exists

<small>Application.exists</small>

取得当前页面是否为首次载入的历史序列上。

---

<h3>Types</h3>

```ts
type exists = boolean
```

---

<h3>Details</h3>

当你首次访问链接进入应用时，Lath 会记录你当前历史节点的位置，凡是发生页面活动后都可以检测当前位置是否发生了变动，如果该值为 false，则表示历史已经发生变化，即当前历史非首次进入的历史。

---

<h3>Example</h3>

```ts
console.log(application.exists)
```

---

<h3>Notes</h3>

该方法仅记录初次载入的节点位置，例如你在任何页面发生浏览器刷新都会导致该节点重新标记位置。
