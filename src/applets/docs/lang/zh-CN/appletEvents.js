"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Applet Events',
    content: [
        [
            {
                type: 'title',
                value: 'Applet Events'
            },
            {
                type: 'sub',
                value: 'Applet > on'
            },
            {
                type: 'text',
                value: '常用事件监听（on, one, off）。'
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
                value: "\n          <code-highlight type=\"ts\">\n            type ApplicationSafeAreaValue = string | Array&lt;string>\n            type GlobalCSSVariables = { [key: string]: string }\n            type TriggerEventArgsMap = {\n              show: [],\n              hide: [],\n              willShow: [],\n              willHide: [],\n              destroy: [],\n              pullToRefreshEnd: [],\n              pullToRefreshCancel: [],\n            }\n            type TriggerEventTypes = keyof TriggerEventArgsMap\n            type TriggerEventCallbackArgs&lt;N extends TriggerEventTypes> = TriggerEventArgsMap[N]\n            type TriggerEventCallback&lt;N extends TriggerEventTypes> = (...args: TriggerEventArgsMap[N]) => void\n            type TriggerEventTypesCallbacks = Record&lt;TriggerEventTypes, TriggerEventCallback&lt;keyof TriggerEventArgsMap>>\n            type on = &lt;T extends TriggerEventTypes, F extends TriggerEventCallback&lt;T>>(type: T, fn: F, groupName?: string) => this\n            type off = &lt;T extends TriggerEventTypes, F extends TriggerEventCallback&lt;T>>(type: T, fn: F) => this\n            type one = on\n          </code-highlight>\n        "
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
                value: '<b>show</b>'
            },
            {
                type: 'text',
                value: '程序卡显示。'
            },
            {
                type: 'text',
                value: '<b>hide</b>'
            },
            {
                type: 'text',
                value: '程序卡消失。'
            },
            {
                type: 'text',
                value: '<b>willShow</b>'
            },
            {
                type: 'text',
                value: '程序卡即将显示。'
            },
            {
                type: 'text',
                value: '<b>willHide</b>'
            },
            {
                type: 'text',
                value: '程序卡即将消失。'
            },
            {
                type: 'text',
                value: '<b>destroy</b>'
            },
            {
                type: 'text',
                value: '程序卡被销毁。'
            },
            {
                type: 'text',
                value: '<b>pullToRefreshEnd</b>'
            },
            {
                type: 'text',
                value: '程序卡下拉刷新结束。'
            },
            {
                type: 'text',
                value: '<b>pullToRefreshCancel</b>'
            },
            {
                type: 'text',
                value: '程序卡下拉刷新取消。'
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
                value: "\n          <code-highlight type=\"ts\">\n            const applet = await application.get('home')\n            applet.on('willShow', () => {\n              //...\n            })\n          </code-highlight>\n        "
            }
        ]
    ]
};
