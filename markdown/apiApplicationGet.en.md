# Application.get

<small>Application.get</small>

Obtain the Applet Object.

---

<h3>Types</h3>

```ts
type get = (id: string) => Promise<Applet>
```

---

<h3>Details</h3>

"id" is the Applet name to be obtained.

'Promise' returned.

---

<h3>Example</h3>

```ts
const home = await application.get('home')
```

# Application.del

<small>Application.del</small>

Delete an Applet object.

---

<h3>Types</h3>

```ts
type del = (id: string) => Promise<boolean>
```

---

<h3>Details</h3>

"id" is the name of the Applet to be removed.

'Promise' is returned, and you will get 'true' if the deletion is successful.

---

<h3>Example</h3>

```ts
const isDel = await application.del('demo')
```

# Application.add

<small>Application.add</small>

Add an Applet object.

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

"id" is the new Applet name.

New Applet object returned.

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
