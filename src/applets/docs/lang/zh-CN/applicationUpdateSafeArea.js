"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Application.updateSafeArea',
    content: [
        [
            {
                type: 'title',
                value: 'Application.updateSafeArea'
            },
            {
                type: 'sub',
                value: 'Application.updateSafeArea'
            },
            {
                type: 'text',
                value: '更新应用的安全边距（受同源策略限制）。'
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
                value: "\n          <code-highlight type=\"ts\">\n            type ApplicationSafeAreaValue = string | Array<string>\n            type safeArea = (data: ApplicationSafeAreaValue) => void \n          </code-highlight>\n        "
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
                value: '其初始值请参照模块配置项 [safeArea]。'
            },
            {
                type: 'text',
                value: 'updateSafeArea 参数为一个数组，同 CSS Margin 一样通过顺时针枚举表达。'
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
                value: "\n          <code-highlight type=\"ts\">\n            application.updateSafeArea(['48px', 0, '60px', 0])\n            application.updateSafeArea(['48px', 0, '60px'])\n            application.updateSafeArea(['60px', 0])\n            application.updateSafeArea(['48px'])\n          </code-highlight>\n        "
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
                value: '在应用中安全距离并不一定指的是系统默认刘海屏，而是由框架程序卡所叠加的安全区域，而当框架交互发生安全边距变化时，则可通过该方法控制各程序卡的显示逻辑。'
            },
            {
                type: 'text',
                value: '非同源程序卡页面不受此控制，但可通过自行建立 postMessage 来同步次操作。另外，在 Application 对象上可通过 “on/one” 来监听 “safeAreaChange” 事件。'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            application.on('safeAreaChange', (data) => {\n              console.log(data)\n              // applet \u4E3A\u8DE8\u57DF\u9875\u9762\u6A21\u5757\n              // applet.view \u4E3A\u8DE8\u57DF\u9875\u9762 iframe\n              applet.view.postMessage({\n                action: 'safeAreaChange',\n                data\n              }, '*')\n            }\n          </code-highlight>\n        "
            },
            {
                type: 'tips',
                value: '在配置中的 events 定义函数中以及通过 Application.get 等方法都可直接获取目标程序卡对象 Applet。'
            }
        ]
    ]
};
