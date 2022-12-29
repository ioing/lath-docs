"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Source',
    content: [
        [
            {
                type: 'title',
                value: 'Source'
            },
            {
                type: 'sub',
                value: 'AppletConfig > source'
            },
            {
                type: 'text',
                value: '定义程序卡的 HTML 源代码，该源代码将在 Lath 创建的容器内运行。'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              source?: EitherOr<{\n                src?: string\n                html?: string | (() => Promise<string> | string)\n              }, 'src', 'html'>,\n            }\n          </code-highlight>\n        "
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
                value: '可设置为源码模式与链接模式两种模式。'
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<h3>Example</h3>'
            },
            {
                type: 'text',
                value: '<b>源码模式</b>'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    title: 'Home Page',\n                    source: {\n                      html: `\n                        &lt;html lang=\"en\">\n                        &lt;head>&lt;/head>\n                        &lt;body>\n                          Hello World!\n                        &lt;/body>\n                        &lt;/html>\n                        `\n                    },\n                    ...\n                  }\n                },\n                ...\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: '<b>链接模式</b>'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"js\">\n            export default {\n              config: {\n                  title: 'Home Page',\n                  source: {\n                  src: 'http://yoursite.com'\n                }\n              }\n            }\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: '两种模式选其一，若共存时将以 src 链接模式优先。'
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
                value: '使用链接模式时需符合同源策略，否者某些能力将无法开启，比如 Capture、Apply、Inject 等。若需要使用这些特性，则需要将目标页面也同样接入 lath，并开启“隧穿”模式，可参考“PresetConfig > tunneling”。'
            }
        ]
    ]
};
