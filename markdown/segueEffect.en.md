# Animate Effect

<small>AppletConfig > animation</small>

Applet windows transition preset animation effect.

---

<small>AppletConfig > animationUnderUntouchable</small>
Sets the animation effect when the program card window transitions on devices such as PCs that do not support touch screens.

---

<h3>Types</h3>

Lath already has built-in common animation effects, while also allowing developers to develop custom animation effects.

```ts
type AnimationFunction = (e: SegueAnimateState) => undefined | Promise<boolean>
type AnimationPrestType =
  | 'inherit'
  | 'fade'
  | 'zoom'
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

type SwipeTransitionType = 'zoom' | 'slide'

type AnimationConfig =
  | AnimationPrestType
  | boolean
  | Array<AnimationPrestType>
  | [AnimationFunction, AnimationFunction]

interface AppletBaseConfig {
  animation?: AnimationPrestType
  animationUnderUntouchable?: AnimationConfig
}
```

SegueAnimateState is an available object provided in custom animations.

```ts
declare interface SegueActionOrigin {
  x: number
  y: number
  target: HTMLElement
}
declare interface SegueAnimateState {
  x: number
  y: number
  in: Animate
  out: Animate
  view: Array<HTMLElement>
  width: number
  height: number
  viewports: Array<HTMLElement>
  applets: Array<Applet>
  reverse: boolean
  direction: number
  fallbackState: number
  origin: string | Array<number>
  attach: string | Array<number>
  touches: SegueActionOrigin | undefined
  swipeTransitionType: SwipeTransitionType
  historyDirection: number
  callback: (stillness: boolean) => void
}
```

---

<h3>Details</h3>

Lath provides a choice of common animation effects, just specify your preset effect name to achieve cool windows animation.

The default transition animation for the program is the **slide-left** effect. When the <a href="?id=swipeModel#docs">swipeModel</a> is enabled, this effect will be given performance acceleration on a separate thread on iOS devices, and compared to other transition effects, it is the <b>best performing option</b> in terms of frame rate performance.

When the value is set to **inherit** and not configured, the option inherits the value from the FrameworksApplet.

If the configuration item type is an array, the first function in the array is forward animation and the second function is reverse animation. If the value is a function, you can manually control the animation through the state information in **SegueAnimateState**, such as direction, historyDirection, etc.

---

<h3>Example</h3>

Defining built-in animation effects is simple, like this:

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

Defining a custom animation will be a bit more complicated, take the fade animation as an example:

```ts
import { SegueAnimateState, Animate } from 'lath/app/types'
const getAnimate = (type: number) => {
  return (type: number) => {
    return async (state: SegueAnimateState) => {
      let inO: number, outO: number, inV: Animate, outV: Animate
      switch (type) {
        case 0:
          inO = 1
          outO = 0
          inV = state.in
          outV = state.out
          break
        case 1:
        default:
          inO = 0
          outO = 1
          inV = outV = state.in
      }
      await inV.duration(0).to(0, 0, 0).opacity(inO).end()
      await outV.duration(300).opacity(outO).end()
      return Promise.resolve(false)
    }
  }
}
createApplication({
  applets: {
    home: {
      config: {
        animation: [getAnimate(0), getAnimate(1)],
      },
    },
  },
})
```

Of course, you can also use functions directly to handle animation effects:

```ts
import { SegueAnimateState, Animate } from 'lath/app/types'
createApplication({
  applets: {
    home: {
      config: {
        animation: async (state: SegueAnimateState) => {
          if (!state.reverse) {
            await inV.duration(0).to(0, 0, 0).opacity(1).end()
            await outV.duration(300).opacity(0).end()
          } else {
            await inV.duration(0).to(0, 0, 0).opacity(0).end()
            await outV.duration(300).opacity(1).end()
          }
          return Promise.resolve(false)
        },
      },
    },
  },
})
```

---

<h3>Notes</h3>

Transition animations may fail in some scenarios, such as when the applet is set to **modality** mode, custom animations will be cast.

> Each pre-made animation includes a forward animation and a backward animation which effect will be determined by the direction of your browsing history and the [level] level between the Applets.

# Demo:

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
