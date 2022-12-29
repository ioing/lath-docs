# MediaGuard

<small>AppletConfig > mediaGuard</small>

When this setting is enabled, the video and audio in the same-origin Applet will be intelligently controlled. When the module is hidden, the audio/video being played will be automatically paused, otherwise, the paused audio/video will be resumed when module is visible.

---

<h3>Types</h3>

```ts
interface AppletBaseConfig {
  mediaGuard?: boolean
}
```

---

<h3>Details</h3>

In general scenarios, automatic media control can help you automatically process the media status. If the automatic processing fails, the Applet will be forcibly destroyed, except for background running (background=true).

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        mediaGuard: true,
      },
    },
  },
})
```

---

<h3>Notes</h3>

Without this option, you can also manage manually via window visibility events - refer to API - Application - Events.
