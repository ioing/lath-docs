"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'GlobalCSSVariables',
    content: [
        [
            {
                type: 'title',
                value: 'GlobalCSSVariables'
            },
            {
                type: 'sub',
                value: 'FrameworksAppletConfig > globalCSSVariables'
            },
            {
                type: 'text',
                value: '设定应用的全局 CSS 变量。（frameworks 程序卡专属配置）'
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
                value: "\n          <code-highlight type=\"ts\">\n            type GlobalCSSVariables = { [key: string]: string }\n            interface AppletBaseConfig {\n              globalCSSVariables?: GlobalCSSVariables | (() => GlobalCSSVariables)\n            }\n          </code-highlight>\n        "
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
                value: '与 [safeArea] 相似，同样只能在同域程序卡页面下生效。'
            },
            {
                type: 'text',
                value: '如果需要动态的修改或增加这个值则可以通过 “API-updateGlobalCSSVariables” 事件来进行更新'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    globalCSSVariables: {\n                      '--main-color': '#fff',\n                      '--title-font-size': '28px'\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '配合 “API-updateGlobalCSSVariables” 使用，可创造出丝滑的主题切换效果。'
            }
        ]
    ]
};
