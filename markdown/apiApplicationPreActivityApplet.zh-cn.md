# Application.preActivityApplet

<small>Application.preActivityApplet</small>

前一个活动的 Applet。

---

<h3>Types</h3>

```ts
preActivityApplet: Applet
```

---

<h3>Details</h3>

返回前一个来源的 Applet。

---

<h3>Example</h3>

```ts
const { application } = await createApplication({
  applets: {
    ...
  }
})
console.log(application.preActivityApplet)

```

---

<h3>Notes</h3>

程序卡的获取逻辑与<a href="?id=applicationActivityApplet#docs" preset-effect="slide" clone-as="doc-newWindow-applicationActivityApplet">Application.activeApplet</a>保持一致。
