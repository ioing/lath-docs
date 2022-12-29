# Animate Effect

<small>AppletConfig > animation</small>

Applet windows transition preset animation effect.

Demo:

- <a href="#empty" preset-effect="slide-left" clone-as="empty-left">slide-left</a>
- <a href="#empty" preset-effect="slide-right" clone-as="empty-right">slide-right</a>
- <a href="#empty" preset-effect="slide-up" clone-as="empty-up">slide-up</a>
- <a href="#empty" preset-effect="slide-down" clone-as="empty-down">slide-down</a>
- <a href="#empty" preset-effect="zoom" clone-as="empty-zoom">zoom</a>
- <a href="#empty" preset-effect="flip" clone-as="empty-flip">flip</a>
- <a href="#empty" preset-effect="flip-left" clone-as="empty-flip-left">flip-left</a>
- <a href="#empty" preset-effect="flip-right" clone-as="empty-flip-right">flip-right</a>
- <a href="#empty" preset-effect="flip-up" clone-as="empty-flip-up">flip-up</a>
- <a href="#empty" preset-effect="flip-down" clone-as="empty-flip-down">flip-down</a>
- <a href="#empty" preset-effect="fade" clone-as="empty-fade">fade</a>

---

<h3>Types</h3>

```ts
type AnimationPrestType =
  | 'inherit'
  | 'fade'
  | 'zoom'
  | 'pop-sheet'
  | 'flip'
  | 'flip-left'
  | 'flip-down'
  | 'flip-right'
  | 'flip-up'
  | 'slide'
  | 'slide-left'
  | 'slide-right'
  | 'slide-up'
  | 'slide-down'
interface AppletBaseConfig {
  animation?: AnimationPrestType
}
```

---

<h3>Details</h3>

Lath provides a choice of common animation effects, just specify your preset effect name to achieve cool windows animation.

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      config: {
        animation: 'slide',
      },
    },
  },
})
```

---

<h3>Notes</h3>

If the Applet animation effect is not set, the animation effect in the frameworks Applet will be inherited by default.

When a hyperlink that is not defined as an Applet opens a new window, the default window effect is 'slide'.

> Each pre-made animation includes a forward animation and a backward animation which effect will be determined by the direction of your browsing history and the [level] level between the Applets.
