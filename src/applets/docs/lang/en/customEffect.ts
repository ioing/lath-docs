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
        value: 'Customize Applet window animations.'
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
        value: 'TransformAnimateEvent is an available object provided in custom animations.'
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
        value: 'The first function in the array is forward animation and the second function is reverse animation. If the value is a function, the animation can be controlled by parameters, such as \'direction\', \'historyDirection\', etc.'
      },
      {
        type: 'text',
        value: 'The Applet hierarchy will also reflect the effect of the transition animation: from small to large, it is a forward animation; and vice versa, from large to small, it is a reverse animation.'
      },
      {
        type: 'text',
        value: 'When the history rolls back to the Applet with level 0, the singleLock event will be triggered. For details, please refer to the relevant description in the [singleLock] configuration.'
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
        value: 'We can see that by using the information provided in \'TransformAnimateEvent\', the fade forward and backward animation can be done.'
      }
    ]
  ]
}