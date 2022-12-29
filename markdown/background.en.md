# Background

<small>AppletConfig > background</small>

Whether the Applet is allowed to run in the background.

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

Module transitions are destroyed immediately after the transition animation ends.

**value = true**

Modules are not destroyed (only if the page load succeeds); the exception is when 'timeout' times out, before startup.

**value = 'auto'**

When Automatic Mode is set, the module would intelligently determine whether to destroy, and is destroyed when the following conditions are triggered:

- When the page is set with SRC and the source is different
- When the page contains objects such as 'embed, applet, iframe'
- When the page contains video or audio tags, and there is an error in automatically pausing playback when mediaGuard is enabled
- There are node churn operations in the page that occur more than 10 times in 3 seconds
- When the total node operations in the page run more than 1000 times in the background

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

If an Applet enters the Modality type non-full-screen Applet such as 'Pop Sheet', it will not be executed even if it meets the destruction conditions.
