"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Background',
    content: [
        [
            {
                type: 'title',
                value: 'Background'
            },
            {
                type: 'sub',
                value: 'AppletConfig > background'
            },
            {
                type: 'text',
                value: '程序卡是否被允许在后台运行。'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              background?: boolean | 'auto'\n            }\n          </code-highlight>\n        "
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
                value: '<b>value = false</b>'
            },
            {
                type: 'text',
                value: '模块切换动画结束后会被立即销毁。'
            },
            {
                type: 'text',
                value: '<b>value = true</b>'
            },
            {
                type: 'text',
                value: '模块不会被销毁（仅当页面 load 成功时）；例外情况是当 timeout 超时时，在启动前会被销毁。'
            },
            {
                type: 'text',
                value: '<b>value = \'auto\'</b>'
            },
            {
                type: 'text',
                value: '当设置成自动时模块会进行智能的判断是否销毁，当触发以下几种情况时则会被销毁：'
            },
            {
                type: 'text',
                value: "\n          <ul>\n            <li>\u9875\u9762\u8BBE\u7F6E\u4E86 src\uFF0C\u4E14\u4E0D\u540C\u6E90\u65F6</li>\n            <li>\u9875\u9762\u4E2D\u5305\u542B\u4E86 object\u3001embed\u3001applet\u3001iframe \u5BF9\u8C61\u65F6</li>\n            <li>\u9875\u9762\u4E2D\u5305\u542B\u4E86 video\u3001audio \u6807\u7B7E\u65F6\uFF0C\u4E14\u5F00\u542F\u667A\u80FD\u5A92\u4F53\u7BA1\u7406\uFF08mediaGuard\uFF09\u65F6\u8FDB\u884C\u81EA\u52A8\u6682\u505C\u64AD\u653E\u51FA\u9519\u65F6</li>\n            <li>\u9875\u9762\u4E2D\u5B58\u5728\u8282\u70B9\u53D8\u52A8\u64CD\u4F5C\u5728 3 \u79D2\u949F\u5185\u8D85\u8FC7 10 \u6B21\u65F6</li>\n            <li>\u9875\u9762\u4E2D\u603B\u7684\u8282\u70B9\u64CD\u4F5C\u5728\u540E\u53F0\u8FD0\u884C\u8D85\u8FC7 1000 \u6B21\u65F6</li>\n          </ul>\n        "
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    background: true\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '若从该程序卡进入 “Pop Sheet" 等 Modality 类型非全屏程序卡时，即便符合销毁条件也将不会执行。'
            }
        ]
    ]
};
