"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Events',
    content: [
        [
            {
                type: 'title',
                value: 'Events'
            },
            {
                type: 'sub',
                value: 'AppletManifest > events'
            },
            {
                type: 'text',
                value: '注册程序卡的事件回调。'
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
                value: "\n          <code-highlight type=\"ts\">\n            declare interface AppletEvents {\n              transformStart: (applet: Applet) => undefined | 'break'\n              transformEnd: (applet: Applet) => void\n              boot: (applet: Applet) => void\n              load: (applet: Applet) => void\n              loadError: (applet: Applet) => void\n              preload: (applet: Applet) => void\n              destroy: (applet: Applet) => void\n            }\n            declare interface AppletManifest {\n              events?: Partial<AppletEvents>\n            }\n          </code-highlight>\n        "
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
                value: '在程序卡中注册生命周期中的事件回调函数。'
            },
            {
                type: 'text',
                value: "\n          <ul>\n            <li><b>transformStart</b> \u7A0B\u5E8F\u5361\u8F6C\u573A\u52A8\u753B\u5F00\u59CB\u4E8B\u4EF6\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F transformStart \u53EF\u9009\u62E9\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u2018break\u2019\uFF0C\u6B64\u65F6\u6A21\u5757\u8F6C\u573A\u5C06\u88AB\u7EC8\u6B62\u6267\u884C\u3002</li>\n            <li><b>transformEnd</b> \u7A0B\u5E8F\u5361\u8F6C\u573A\u52A8\u753B\u7ED3\u675F\u4E8B\u4EF6\u3002</li>\n            <li><b>boot</b> \u7A0B\u5E8F\u5361\u542F\u52A8\u4E8B\u4EF6\uFF08\u6BCF\u4E2A\u751F\u547D\u5468\u671F\u5185\u4EC5\u4E00\u6B21\uFF09\u3002</li>\n            <li><b>load</b> source \u7C7B\u578B\u7A0B\u5E8F\u5361\u7684\u6E90\u4EE3\u7801\u52A0\u8F7D\u5B8C\u6210\u4E8B\u4EF6\u3002</li>\n            <li><b>loadError</b> source \u7C7B\u578B\u7A0B\u5E8F\u5361\u7684\u6E90\u4EE3\u7801\u52A0\u8F7D\u9519\u8BEF\u4E8B\u4EF6\u3002</li>\n            <li><b>preload</b> \u7A0B\u5E8F\u5361\u9884\u52A0\u8F7D\u5B8C\u4E8B\u4EF6\u3002</li>\n            <li><b>destroy</b> \u7A0B\u5E8F\u5361\u88AB\u9500\u6BC1\u4E8B\u4EF6\u3002</li>\n          </ul>\n        "
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    title: 'home'\n                  },\n                  events: {\n                    transformEnd: (applet) => {\n                      // ...\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '在程序卡注册事件中仅提供必要的事件，如需更多事件则可以使用 Applet 对象上的监听函数，请参照 API - Application Events。'
            },
            {
                type: 'tips',
                value: '程序卡配置中的事件都是运行在程序卡容器外的，当程序卡销毁时配置中的环境变量并不会随之消失，因此必须对配置文件中的逻辑质量负责，避免产生副作用，并且合理控制逻辑大小（不建议在此处处理复杂逻辑）。'
            }
        ]
    ]
};
