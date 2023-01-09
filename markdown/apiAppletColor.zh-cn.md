# Applet.color

<small>Applet.color</small>

程序卡的背景色。

---

<h3>Types</h3>

```ts
type color = string
```

---

<h3>Details</h3>

color 来自于 config 中配置，若未配置则返回 frameworks Applet 的 color 设置，若依然未配置或使用继承，则根据浏览器是否为 dark 模式分别返回黑白两色。

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
console.log(applet.color)
```
