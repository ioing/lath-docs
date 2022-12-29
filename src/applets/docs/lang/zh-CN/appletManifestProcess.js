"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'AppletManifestProcess',
    content: [
        [
            {
                type: 'title',
                value: 'AppletManifestProcess'
            },
            {
                type: 'sub',
                value: 'frameworlksAppletConfig > appletManifestProcess'
            },
            {
                type: 'text',
                value: '当程序卡载入时，其配置文件会先经此函数加工后再返回。（frameworks 程序卡专属配置）'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              appletManifestProcess?: (config: AppletManifest) => AppletManifest\n            }\n          </code-highlight>\n        "
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
                value: '处理函数将传入当前处理程序卡配置，并接收一个新程序卡配置。'
            },
            {
                type: 'text',
                value: '可通过该配置对所有程序卡配置进行重写，比如设定统一的动画效果或对一些安全选项进行校验。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    appletManifestProcess: (manify) => {\n                      ... \u5904\u7406\n                      return newManify\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '程序卡配置中存在一些复杂选项，比如 inject、components 等，可通过此选项将可复用配置进行统一化管理。'
            }
        ]
    ]
};
