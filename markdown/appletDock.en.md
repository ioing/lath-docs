# Applet.dock

<small>Applet.dock</small>

程序坞的控制对象（Applet Snap 效果的模块切换器对象）。'The dock's control object (the module switcher object for the Applet Snap effect).

---

<h3>Types</h3>

```ts
interface Dock {
  to: (id: number | string) => Promise<unknown>
  index: number
}
```

---

<h3>Details</h3>

The "to" function is capable of accepting a sequence (corresponding to the sequence of modules in the configuration item 'defaultDockApplets') / module id.

The "index" property gets the sequence of Applets that are currently active on the Dock.

---

<h3>Example</h3>

```ts
const applet = await application.get('home')
await applet.dock.to('pageA')
console.log(applet.dock.index)
```

---

<h3>Notes</h3>

Dock object, that is, the dock, for its creation refer to the configuration item:'DefaultDockApplets'.
