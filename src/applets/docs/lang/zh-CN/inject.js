"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Inject',
    content: [
        [
            {
                type: 'title',
                value: 'Inject'
            },
            {
                type: 'sub',
                value: 'AppletConfig > inject'
            },
            {
                type: 'text',
                value: '当为同源程序卡页面时，可在程序卡页面载入前对程序卡页面内注入设定的全局变量与方法，比如注入一些“jsBridge”、通用变量或者改写全局对象等。'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              inject?: (w: Window, m: Applet) => void\n            }\n          </code-highlight>\n        "
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
                value: '比如程序卡中的链接跳转是通过“jsBridge”进行的，因此 Lath 并无法自动捕捉，因此现在你想要改写该逻辑，那么现在你则可以通过该选项来进行对其改写。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    inject: (appletWindow, applet) => {\n                      appletWindow.open = (url) => {\n                        return applet.application.pushWindow(url).catch(() => {\n                          window.open(url)\n                        })\n                      }\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<h3>Notes</h3>'
            },
            {
                type: 'text',
                value: '需要注意的是 inject 选项受同域限制，因此在跨域场景下无法使用。'
            },
            {
                type: 'text',
                value: 'inject 是一个强大的能力，你可以基于此开发出不可思议的能力。'
            }
        ]
    ]
};
