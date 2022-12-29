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
                value: 'Common event listeners (on, one ,off).'
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
                value: 'You can listen for safe margin updates and return safe margin objects if \'updateSafeArea\' is notified when it is called.'
            },
            {
                type: 'text',
                value: '<b>globalCSSVariablesChange</b>'
            },
            {
                type: 'text',
                value: 'You can listen for global style variable updates, and if \'updateGlobalCSSVariables\' is called, the update style variable object is returned.'
            },
            {
                type: 'text',
                value: '<b>transformStart</b>'
            },
            {
                type: 'text',
                value: 'When a window switch occurs, an array of window Applets is returned.'
            },
            {
                type: 'text',
                value: '<b>transformEnd</b>'
            },
            {
                type: 'text',
                value: 'When a window switchover is completed, it is notified, returning an array of window Applets.'
            },
            {
                type: 'text',
                value: '<b>systemDidMount</b>'
            },
            {
                type: 'text',
                value: 'When the system Applet execution is completed, it is notified and returns to System Applet.'
            },
            {
                type: 'text',
                value: '<b>frameworksDidMount</b>'
            },
            {
                type: 'text',
                value: 'When the framework Applet execution is completed, it is notified and returns to Frameworks Applet.'
            },
            {
                type: 'text',
                value: '<b>pullToRefreshReady</b>'
            },
            {
                type: 'text',
                value: 'Notification is given when a pull-down refresh is used in the configuration and the pull-refresh atomic power is ready to complete.'
            },
            {
                type: 'text',
                value: '<b>exit</b>'
            },
            {
                type: 'text',
                value: 'Notifies the app when program triggers an exit, returning the cumulative number of exit attempts.'
            },
            {
                type: 'text',
                value: '<b>back</b>'
            },
            {
                type: 'text',
                value: 'When the program triggers a notification when history returns, the target Applet is returned.'
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
                value: 'The usage of events on Application Events is generally not high, and there are more commonly used events on Applet Events.'
            }
        ]
    ]
};
