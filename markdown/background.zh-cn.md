# Background

<small>AppletConfig > background</small>

程序卡是否被允许在后台运行。

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  background?: boolean | 'auto'
}
```

---

<h3>Details</h3>

**value = false**

模块切换动画结束后会被立即销毁。

**value = true**

模块不会被销毁（仅当页面 load 成功时）；例外情况是当 timeout 超时时，在启动前会被销毁。

**value = 'auto'**

当设置成自动时模块会进行智能的判断是否销毁，当触发以下几种情况时则会被销毁：

- 页面设置了 src，且不同源时
- 页面中包含了 object、embed、applet、iframe 对象时
- 页面中包含了 video、audio 标签时，且开启智能媒体管理（mediaGuard）时进行自动暂停播放出错时
- 页面中存在节点变动操作在 3 秒钟内超过 10 次时
- 页面中总的节点操作在后台运行超过 1000 次时

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        background: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

若从该程序卡进入 “Pop Sheet" 等 Modality 类型非全屏程序卡时，即便符合销毁条件也将不会执行。
