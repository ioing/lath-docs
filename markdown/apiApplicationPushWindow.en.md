# Application.PushWindow

<small>Application.pushWindow</small>

Transform to the page that specifies the Applet or URL.

---

<h3>Types</h3>

```ts
declare interface TransformActionOrigin {
  x: number
  y: number
}
type PushWindowOptions = [
  url: string,
  title: string,
  preset: string,
  cloneAs?: string,
  touches?: TouchEvent | TransformActionOrigin
]
type pushWindow = (
  url: string,
  title = '',
  preset = 'slide',
  cloneAs?: string,
  touches?: TouchEvent | TransformActionOrigin
) => Promise<void>
```

---

<h3>Details</h3>

Same as <a href="?id=applicationTo#docs" preset-effect="slide" clone-as="doc-newWindow-applicationTo" >Application.to</a>, the first parameter of 'pushWindow' can be passed in not only an Applet ID, but also a page URL to open a newly generated Applet page.

**cloneAs**

Define the name of a new clone of the Applet that does not replace the original Applet instance, but exists independently as a new Applet.

**preset**

Define the built-in animation effect that is used when the Applet is opened, and its value is the built-in animation name.

**title**

Define the title of the opened Applet.

**touches**

Same as the part of the 'touches' in the 'Application.to'.

**url**

Open the url of the new page (the target page will be affected by the [capture] logic).

---

<h3>Example</h3>

```ts
application.pushWindow(
  'http://www.xxxxx.com/index.html',
  '首页',
  'zoom',
  'newHome'
)
```

If you want to invoke this capability in an 'iframe' page, you can use 'postMessage' to send a request.

```ts
parent.postMessage({
  action: 'pushWindow',
  data: ['https://xxx.com/', 'title'],
})
```
