# Tunneling

<small>PresetConfig > tunneling</small>

设定应用为“隧穿模式”。（应用启动前的预配置项）

---

<h3>Types</h3>

```ts
interface PresetConfig {
  tunneling?: boolean
}
```

---

<h3>Details</h3>

> 若在当前域下访问跨域的程序卡，此时会因同源策略导致跨域的程序卡无法实现，全局样式变量更新以及[Apply]中的能力（比如新开窗口）。

通过将跨域程序卡页面接入 Lath，并开启 [tunneling]来解决跨域程序卡页面的一些受限能力。

---

<h3>Example</h3>

```ts
createApplication({
  tunneling: true,
  applets: {
    ...
  }
})

```

---

<h3>Notes</h3>

当页面接入 Lath 且开启 [tunneling] 时，页面本身即为一个单独应用，但当该页面嵌入到另一个 Lath 应用作为程序卡时，其通过 A 链接（即 pushWindow）打开的页面将不会在本应用内打开，而是被代理到父级应用中打开，若父级应用也是被嵌入的 Lath 应用，且也开启了 [tunneling] 则会继续向上“隧穿”。
