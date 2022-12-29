"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'MediaGuard',
    content: [
        [
            {
                type: 'title',
                value: 'MediaGuard'
            },
            {
                type: 'sub',
                value: 'AppletConfig > mediaGuard'
            },
            {
                type: 'text',
                value: '该设置开启时，会对同源程序卡页面中的视频和音频进行智能的管控，当模块隐藏时则自动暂停正在播放的音/视频，反之模块可见时则恢复暂停的音/视频。'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              mediaGuard?: boolean\n            }\n          </code-highlight>\n        "
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
                value: '一般场景下，自动媒体管控能帮你自动处理媒体状态，若自动处理失败则会强制销毁程序卡，背景运行(background=true)除外。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    mediaGuard: true\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '不开启此选项，你同样可以通过窗口可见事件进行手动管理 - 请参考 API - Application - Events。'
            }
        ]
    ]
};
