# Custom Effect

<small>AppletConfig > animation</small>

自定义程序卡窗口动画。

---

<h3>Types</h3>

```ts
type AnimationFunction = (
  e: TransformAnimateEvent
) => undefined | Promise<boolean>
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
type AnimationConfig =
  | AnimationPrestType
  | boolean
  | Array<AnimationPrestType>
  | [AnimationFunction, AnimationFunction]
interface AppletBaseConfig {
  animation?: AnimationConfig
}
```

TransformAnimateEvent 为自定义动画中提供的可用对象。

```ts
interface TransformActionOrigin {
  x: number
  y: number
}
interface TransformAnimateEvent {
  x: number
  y: number
  in: Animate
  out: Animate
  view: Array<HTMLElement>
  width: number
  height: number
  viewport: Array<HTMLElement>
  applets: Array<Applet>
  reverse: boolean
  direction: number
  backset: number
  origin: string | Array<number>
  attach: string | Array<number>
  touches: TransformActionOrigin | undefined
  historyDirection: number
  callback: (stillness: boolean) => void
}
```

---

<h3>Details</h3>

数组中的第一个函数为正向动画，第二个函数为逆向动画。如果值为函数，则可通过参数进行动画控制，比如 direction、historyDirection 等。

程序卡层级关系还将反应在转场动画的效果上，从小到大为正向动画，反之从大到小时为逆向动画。

当历史回退到层级为 0 的程序卡时，会触发 singleLock 事件，具体可查看 [singleLock] 配置中的相关描述。

---

<h3>Example</h3>

```ts
const getAnimate = (type: number) => {
  return (e: TransformAnimateEvent) => {
    let inO: number, outO: number, inV: Animate, outV: Animate
    switch (type) {
      case 0:
        inO = 1
        outO = 0
        inV = e.in
        outV = e.out
        break
      case 1:
      default:
        inO = 0
        outO = 1
        inV = outV = e.in
    }
    inV
      .duration(0)
      .ease('ease-out-expo')
      .to(0, 0, 0)
      .opacity(inO)
      .end(function () {
        outV
          .duration(767)
          .opacity(outO)
          .end(function () {
            e.callback(false)
          })
      })
    return undefined
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

---

我们可以看到通过使用 TransformAnimateEvent 中提供的信息，即可完成 fade 的前进和后退动画效果。
