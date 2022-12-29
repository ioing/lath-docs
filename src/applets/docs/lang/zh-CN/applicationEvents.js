"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Application Events',
    content: [
        [
            {
                type: 'title',
                value: 'Application Events'
            },
            {
                type: 'sub',
                value: 'Application > on'
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
                value: "\n          <code-highlight type=\"ts\">\n            type ApplicationSafeAreaValue = string | Array&lt;string>\n            type GlobalCSSVariables = { [key: string]: string }\n            type TriggerEventArgsMap = {\n              'safeAreaChange': [ApplicationSafeAreaValue],\n              'globalCSSVariablesChange': [GlobalCSSVariables],\n              'transformStart': [Applet[]],\n              'transformEnd': [Applet[]],\n              'systemDidMount': [Applet],\n              'frameworksDidMount': [Applet],\n              'pullToRefreshReady': [],\n              'exit': [{ backoutCount: number }],\n              'back': [Applet],\n              'error': [e: unknown]\n            }\n            type TriggerEventTypes = keyof TriggerEventArgsMap\n            type TriggerEventCallbackArgs&lt;N extends TriggerEventTypes> = TriggerEventArgsMap[N]\n            type TriggerEventCallback&lt;N extends TriggerEventTypes> = (...args: TriggerEventArgsMap[N]) => void\n            type TriggerEventTypesCallbacks = Record&lt;TriggerEventTypes, TriggerEventCallback&lt;keyof TriggerEventArgsMap>>\n            type on = &lt;T extends TriggerEventTypes, F extends TriggerEventCallback&lt;T>>(type: T, fn: F, groupName?: string) => this\n            type off = &lt;T extends TriggerEventTypes, F extends TriggerEventCallback&lt;T>>(type: T, fn: F) => this\n            type one = on\n          </code-highlight>\n        "
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
                value: '<b>safeAreaChange</b>'
            },
            {
                type: 'text',
                value: '可监听安全边距更新，若 updateSafeArea 被调用时通知，返回安全边距对象。'
            },
            {
                type: 'text',
                value: '<b>globalCSSVariablesChange</b>'
            },
            {
                type: 'text',
                value: '可监听全局样式变量更新，若 updateGlobalCSSVariables 被调用时通知，返回更新样式变量对象。'
            },
            {
                type: 'text',
                value: '<b>transformStart</b>'
            },
            {
                type: 'text',
                value: '当发生窗口切换前将通知，返回窗口程序卡数组。'
            },
            {
                type: 'text',
                value: '<b>transformEnd</b>'
            },
            {
                type: 'text',
                value: '当发生窗口切换完成时将通知，返回窗口程序卡数组。'
            },
            {
                type: 'text',
                value: '<b>systemDidMount</b>'
            },
            {
                type: 'text',
                value: '当系统程序卡执行完成时将通知，并返回 System Applet。'
            },
            {
                type: 'text',
                value: '<b>frameworksDidMount</b>'
            },
            {
                type: 'text',
                value: '当框架程序卡执行完成时将通知，并返回 Frameworks Applet。'
            },
            {
                type: 'text',
                value: '<b>pullToRefreshReady</b>'
            },
            {
                type: 'text',
                value: '当配置使用了下拉刷新，且下拉刷新原子能力准备完成时发出通知。'
            },
            {
                type: 'text',
                value: '<b>exit</b>'
            },
            {
                type: 'text',
                value: '当程序触发退出应用时发出通知，返回尝试退出累积次数。'
            },
            {
                type: 'text',
                value: '<b>back</b>'
            },
            {
                type: 'text',
                value: '当程序触发历史返回时通知，返回目标 Applet。'
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
                value: "\n          <code-highlight type=\"ts\">\n            const { application } = await createApplication({\n              applets: {\n                ...\n              }\n            })\n            application.on('frameworksDidMount', () => {\n              //...\n            })\n          </code-highlight>\n        "
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
                value: 'Application Events 上的事件使用场景一般不高，比较常用的事件在 Applet Events 上的比较多一些。'
            }
        ]
    ]
};
