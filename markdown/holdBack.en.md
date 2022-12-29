# HoldBack

<small>FrameworksAppletConfig > holdBack</small>

Prevent the main program from exiting. (Frameworks Applet exclusive configuration)

---

<h3>Types</h3>

```ts
interface FrameworksAppletConfig {
  holdBack?: (backoutCount: number) => boolean
}
```

---

<h3>Details</h3>

It is valid when [singleLock] is turned on. When the user performs a return operation and the page is about to exit, it will be verified through this function (if it is blocked, 'backCount' is the number of clicks to return). When it returns 'true', it prevents the application page from exiting. Otherwise, the direct exit of the application will be allowed.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    frameworks: {
      config: {
        singleLock: true,
        holdBack: (event) => {
          // decide whether to quit
          return true
        },
      },
    },
  },
})
```

As configured above, when jumping from other pages to enter the application, when you click the browser back button, you will not exit the application page, but will judge whether it should be exited through the [holdBack] configuration in the 'Frameworks Applet', and return the back button clicked times to the user at the same time.
