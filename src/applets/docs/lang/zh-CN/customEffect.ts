export default {
  title: 'Custom Effect',
  content: [
    [
      {
        type: 'title',
        value: 'Custom Effect'
      },
      {
        type: 'sub',
        value: 'AppletConfig > animation'
      },
      {
        type: 'text',
        value: '自定义程序卡窗口动画。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Types</h3>'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            type AnimationFunction = (e: TransformAnimateEvent) => undefined | Promise&lt;boolean>
            type AnimationPrestType = 'inherit'
            | 'fade' | 'zoom' | 'pop-sheet'
            | 'flip' | 'flip-left' | 'flip-down' | 'flip-right' | 'flip-up'
            | 'slide' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down'
            type AnimationConfig = AnimationPrestType | boolean | Array&lt;AnimationPrestType> | [AnimationFunction, AnimationFunction]
            interface AppletBaseConfig {
              animation?: AnimationConfig
            }
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: 'TransformAnimateEvent 为自定义动画中提供的可用对象。'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            interface TransformActionOrigin {
              x: number,
              y: number
            }
            interface TransformAnimateEvent {
              x: number
              y: number
              in: Animate
              out: Animate
              view: Array&lt;HTMLElement>
              width: number
              height: number
              viewport: Array&lt;HTMLElement>
              applets: Array&lt;Applet>
              reverse: boolean
              direction: number
              backset: number
              origin: string | Array&lt;number>
              attach: string | Array&lt;number>
              touches: TransformActionOrigin | undefined
              historyDirection: number
              callback: (stillness: boolean) => void
            }
          </code-highlight>
        `
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Details</h3>'
      },
      {
        type: 'text',
        value: '数组中的第一个函数为正向动画，第二个函数为逆向动画。如果值为函数，则可通过参数进行动画控制，比如 direction、historyDirection 等。'
      },
      {
        type: 'text',
        value: '程序卡层级关系还将反应在转场动画的效果上，从小到大为正向动画，反之从大到小时为逆向动画。'
      },
      {
        type: 'text',
        value: '当历史回退到层级为 0 的程序卡时，会触发 singleLock 事件，具体可查看 [singleLock] 配置中的相关描述。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Example</h3>'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
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
                inV.duration(0).ease('ease-out-expo').to(0, 0, 0).opacity(inO).end(function () {
                  outV.duration(767).opacity(outO).end(function () {
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
                    animation: [getAnimate(0), getAnimate(1)]
                  }
                }
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '我们可以看到通过使用 TransformAnimateEvent 中提供的信息，即可完成 fade 的前进和后退动画效果。'
      }
    ]
  ]
}