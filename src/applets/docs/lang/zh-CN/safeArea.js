"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'SafeArea',
    content: [
        [
            {
                type: 'title',
                value: 'SafeArea'
            },
            {
                type: 'sub',
                value: 'AppletConfig > safeArea'
            },
            {
                type: 'text',
                value: '定义全局的 CSS 应用安全边距变量。（frameworks 程序卡专属配置）'
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
                value: "\n          <code-highlight type=\"ts\">\n            type ApplicationSafeAreaValue = string | Array<string>\n            interface AppletBaseConfig {\n              safeArea?: ApplicationSafeAreaValue | (() => ApplicationSafeAreaValue)\n            }\n          </code-highlight>\n        "
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
                value: '值为数字时，分别按顺序表示 顶部、右侧、底部、左侧 的安全边距。'
            },
            {
                type: 'text',
                value: '设置该值后将会在程序卡的全局样式中注入 CSS 全局变量：--application-safe-area-top、--application-safe-area-right、--application-safe-area-bottom、--application-safe-area-left 四个对应的安全边距值。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    safeArea: ['44px', '0px', '0px', '0px']\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: '如果需要动态的修改这个值则可以通过发送“safeAreaChange”事件来进行更新。'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            application.trigger('safeAreaChange', ['88px', '0px', '0px', '0px'])\n          </code-highlight>\n        "
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
                value: '当 frameworks 程序卡带有头部导航时，为了能让程序卡正常预留导航栏高度，使用该配置能动态调整该高度。'
            }
        ]
    ]
};
