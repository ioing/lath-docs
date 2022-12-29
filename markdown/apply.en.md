# Apply&UnApply

<small>AppletConfig > apply</small>

Enable presetable capabilities in the same-origin Applet.

---

<h3>Types</h3>

```ts
type AppletApplyMabyeOptions =
  | 'smart-setTimeout'
  | 'proxy-link'
  | 'tap-highlight'
type AppletApplyOptions = Array<AppletApplyMabyeOptions>
type AppletApplyOptionsParam = {
  'tap-highlight'?: {
    selector: string
  }
}
interface AppletBaseConfig {
  apply?: AppletApplyOptions
  applyOptions?: AppletApplyOptionsParam
  unApply?: AppletApplyOptions
}
```

---

<h3>Details</h3>

'apply' presets the following available capabilities:

- **smart-setTimeout** When the Applet window is not visible or is in the process of window animation, all 'setTimeout' will automatically pause execution until the module animation stops and automatically resumes execution.
- **proxy-link** When the 'a link' or the 'window.open' method is used to open the page in the Applet page, the Lath container will automatically capture and intercept, and generate a new Applet from the page content, and then load and display it. If the 'a link' is set with target='\_parent' or target='\_top', it will not be captured and will be opened in a new browser window. In the 'a link', you can also set the animation effect and set the clone as a new module preset-effect="preset animation name", clone-as="new module name"
- **tap-highlight** All 'a links' will automatically add a translucent mask highlighting effect when clicked.

> When using the 'clone-as' attribute on the 'a link', the purpose is to allow the same Applet to be opened with multiple avatars, such as the article details Applet. When its parameters are different, multiple articles can be opened with avatars at the same time, rather than in the same instance to update the article.

The options above are enabled by default. If you do not want to enable them, you can use the 'unApply' configuration item.

'unApply' is the opposite of the 'apply' option, which disables the ability to preconfigure in the configuration.

'applyOptions' can add available parameters for each capability. Currently, a highlight selector "selector" can be provided for "tap-highlight". When the click element matches, the highlight effect will be added, and "tap-highlight" will be added to the element. Properties that can be used for CSS style customization.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        unApply: ['proxy-link'],
        applyOptions: {
          'tap-highlight': {
            selector: '.link',
          },
        },
      },
    },
  },
})
```

---

<h3>Notes</h3>

Note that using "proxy-link" does not capture the jump behavior implemented by the "location.href" method.
