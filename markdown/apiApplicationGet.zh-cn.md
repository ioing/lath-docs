# Application.get

<small>Application.get</small>

获得程序卡对象 Applet。

---

<h3>Types</h3>

```ts
type get = (id: string) => Promise<Applet>
```

---

<h3>Details</h3>

“id”为要获取的程序卡名。

其返回为一个 Promise。

---

<h3>Example</h3>

```ts
const home = await application.get('home')
```

# Application.del

<small>Application.del</small>

删除一个程序卡对象 Applet。

---

<h3>Types</h3>

```ts
type del = (id: string) => Promise<boolean>
```

---

<h3>Details</h3>

“id”为要删除的程序卡名。

其返回为一个 Promise，删除成功你将获得 true。

---

<h3>Example</h3>

```ts
const isDel = await application.del('demo')
```

# Application.add

<small>Application.add</small>

增加一个程序卡对象 Applet。

---

<h3>Types</h3>

```ts
declare interface AppletManifest {
  config: AppletConfig
  resources?: AppletResources
  components?: ((w: Window) => CustomElementConstructor)[]
  events?: Partial<AppletEvents>
}
type add = (id: string, manifest: AppletManifest) => Applet
```

---

<h3>Details</h3>

“id”为要新增的程序卡名。

其返回为新程序卡对象 Applet。

---

<h3>Example</h3>

```ts
 const newApplet = await application.add('demo', {
              config: {
                title: 'title',
                ...
              }
            })

```
