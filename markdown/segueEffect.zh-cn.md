# Animate Effect

<small>AppletConfig > animation</small>

设置程序卡窗口转场时的动画效果。

---

<small>AppletConfig > animationUnderUntouchable</small>

设置在不支持触摸屏设备上的（pc 等设备）程序卡窗口转场时的动画效果。

---

<h3>Types</h3>

Lath 已经内置了常用的动画效果，同时也允许开发者开发自定义的动画效果。

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

SegueAnimateState 为自定义动画中提供的可用对象。

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

Lath 提供了常见的动画效果选择，只需指定你预置的效果名即可实现炫酷的窗口动画。

程序卡默认的转场过渡动画为 **slide-left** 效果，在开启 <a href="?id=swipeModel#docs">swipeModel</a>时，该效果在 IOS 设备中将得到另一个线程上的性能加速，对比其它转场效果，其在帧率表现上是<b>性能最佳的选项</b>。

设置值为 **inherit** 以及未配置时，则该选项将继承 FrameworksApplet 中的值。

配置项类型若为数组，则数组中的第一个函数为正向动画，第二个函数为逆向动画。如果值为函数，则可通过 **SegueAnimateState** 中的状态信息手动进行动画控制，比如 direction、historyDirection 等。

---

<h3>Example</h3>

定义内置的动画效果很简单，就像下面这样：

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

定义一个自定义动画将会复杂一点，下面以 fade 动画为例：

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

当然你也可以直接使用函数来处理动画效果：

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

一些场景下转场动画可能会失效，比如 Applet 设置为了 <a href="?id=modality#docs">modality</a> 模式时，自定义动画将被强制转换。

> 每个预制的动画都包涵一个前进动画以及倒退动画，采用哪种效果将会受到你浏览历史的方向甚至程序卡之间的[level]层级所决定。

# Demo

- 左侧滑动(默认) <a href="#empty" preset-effect="slide-left" clone-as="empty-left">slide-left</a>
- 右侧滑动 <a href="#empty" preset-effect="slide-right" clone-as="empty-right">slide-right</a>
- 上侧滑动 <a href="#empty" preset-effect="slide-up" clone-as="empty-up">slide-up</a>
- 下侧滑动 <a href="#empty" preset-effect="slide-down" clone-as="empty-down">slide-down</a>
- 放大镜 <a href="#empty" preset-effect="zoom" clone-as="empty-zoom">zoom</a>
- 翻转 <a href="#empty" preset-effect="flip" clone-as="empty-flip">flip</a>
- 左侧翻转 <a href="#empty" preset-effect="flip-left" clone-as="empty-flip-left">flip-left</a>
- 右侧翻转 <a href="#empty" preset-effect="flip-right" clone-as="empty-flip-right">flip-right</a>
- 上侧翻转 <a href="#empty" preset-effect="flip-up" clone-as="empty-flip-up">flip-up</a>
- 下侧反转 <a href="#empty" preset-effect="flip-down" clone-as="empty-flip-down">flip-down</a>
- 渐变 <a href="#empty" preset-effect="fade" clone-as="empty-fade">fade</a>
