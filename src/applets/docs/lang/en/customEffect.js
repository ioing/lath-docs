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
                value: "\n          <code-highlight type=\"ts\">\n            type AnimationFunction = (e: TransformAnimateEvent) => undefined | Promise&lt;boolean>\n            type AnimationPrestType = 'inherit'\n            | 'fade' | 'zoom' | 'pop-sheet'\n            | 'flip' | 'flip-left' | 'flip-down' | 'flip-right' | 'flip-up'\n            | 'slide' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down'\n            type AnimationConfig = AnimationPrestType | boolean | Array&lt;AnimationPrestType> | [AnimationFunction, AnimationFunction]\n            interface AppletBaseConfig {\n              animation?: AnimationConfig\n            }\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: 'TransformAnimateEvent is an available object provided in custom animations.'
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
                value: "\n          <code-highlight type=\"ts\">\n            const getAnimate = (type: number) => {\n              return (e: TransformAnimateEvent) => {\n                let inO: number, outO: number, inV: Animate, outV: Animate\n                switch (type) {\n                  case 0:\n                    inO = 1\n                    outO = 0\n                    inV = e.in\n                    outV = e.out\n                    break\n                  case 1:\n                  default:\n                    inO = 0\n                    outO = 1\n                    inV = outV = e.in\n                }\n                inV.duration(0).ease('ease-out-expo').to(0, 0, 0).opacity(inO).end(function () {\n                  outV.duration(767).opacity(outO).end(function () {\n                    e.callback(false)\n                  })\n                })\n                return undefined\n              }\n            }\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    animation: [getAnimate(0), getAnimate(1)]\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
};
