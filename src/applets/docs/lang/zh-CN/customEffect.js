"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
                value: "\n          <code-highlight type=\"ts\">\n            type AnimationFunction = (e: TransformAnimateEvent) => undefined | Promise&lt;boolean>\n            type AnimationPrestType = 'inherit'\n            | 'fade' | 'zoom' | 'pop-sheet'\n            | 'flip' | 'flip-left' | 'flip-down' | 'flip-right' | 'flip-up'\n            | 'slide' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down'\n            type AnimationConfig = AnimationPrestType | boolean | Array&lt;AnimationPrestType> | [AnimationFunction, AnimationFunction]\n            interface AppletBaseConfig {\n              animation?: AnimationConfig\n            }\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: 'TransformAnimateEvent 为自定义动画中提供的可用对象。'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            interface TransformActionOrigin {\n              x: number,\n              y: number\n            }\n            interface TransformAnimateEvent {\n              x: number\n              y: number\n              in: Animate\n              out: Animate\n              view: Array&lt;HTMLElement>\n              width: number\n              height: number\n              viewport: Array&lt;HTMLElement>\n              applets: Array&lt;Applet>\n              reverse: boolean\n              direction: number\n              backset: number\n              origin: string | Array&lt;number>\n              attach: string | Array&lt;number>\n              touches: TransformActionOrigin | undefined\n              historyDirection: number\n              callback: (stillness: boolean) => void\n            }\n          </code-highlight>\n        "
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
                value: "\n          <code-highlight type=\"ts\">\n            const getAnimate = (type: number) => {\n              return (e: TransformAnimateEvent) => {\n                let inO: number, outO: number, inV: Animate, outV: Animate\n                switch (type) {\n                  case 0:\n                    inO = 1\n                    outO = 0\n                    inV = e.in\n                    outV = e.out\n                    break\n                  case 1:\n                  default:\n                    inO = 0\n                    outO = 1\n                    inV = outV = e.in\n                }\n                inV.duration(0).ease('ease-out-expo').to(0, 0, 0).opacity(inO).end(function () {\n                  outV.duration(767).opacity(outO).end(function () {\n                    e.callback(false)\n                  })\n                })\n                return undefined\n              }\n            }\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    animation: [getAnimate(0), getAnimate(1)]\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
};
