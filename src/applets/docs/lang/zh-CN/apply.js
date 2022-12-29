"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Apply&UnApply',
    content: [
        [
            {
                type: 'title',
                value: 'Apply&UnApply'
            },
            {
                type: 'sub',
                value: 'AppletConfig > apply'
            },
            {
                type: 'text',
                value: '在同源程序卡中启用可预置的能力。'
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
                value: "\n          <code-highlight type=\"ts\">\n            type AppletApplyMabyeOptions = 'smart-setTimeout' | 'proxy-link' | 'tap-highlight'\n            type AppletApplyOptions = Array&lt;AppletApplyMabyeOptions>\n            type AppletApplyOptionsParam = {\n              'tap-highlight'?: {\n                selector: string\n              }\n            }\n            interface AppletBaseConfig {\n              apply?: AppletApplyOptions\n              applyOptions?: AppletApplyOptionsParam\n              unApply?: AppletApplyOptions\n            }\n          </code-highlight>\n        "
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
                value: 'apply 预置了以下可用能力：'
            },
            {
                type: 'text',
                value: "\n          <ul>\n            <li><b>smart-setTimeout</b> \u5F53\u7A0B\u5E8F\u5361\u7A97\u53E3\u4E0D\u53EF\u89C1\u65F6\u6216\u6B63\u5904\u4E8E\u7A97\u53E3\u52A8\u753B\u8FC7\u7A0B\u4E2D\u65F6\uFF0C\u6240\u6709 setTimeout \u4F1A\u81EA\u52A8\u6682\u505C\u6267\u884C\uFF0C\u76F4\u5230\u6A21\u5757\u52A8\u753B\u505C\u6B62\u5E76\u53EF\u89C1\u65F6\u81EA\u52A8\u6062\u590D\u6267\u884C\u3002</li>\n            <li><b>proxy-link</b> \u5F53\u7A0B\u5E8F\u5361\u9875\u9762\u4E2D\u6709\u4F7F\u7528 a\u94FE\u63A5\u6216 window.open \u65B9\u6CD5\u6253\u5F00\u9875\u9762\u65F6\uFF0CLath \u5BB9\u5668\u4F1A\u81EA\u52A8\u8FDB\u884C\u6355\u6349\u62E6\u622A\uFF0C\u5E76\u5C06\u9875\u9762\u5185\u5BB9\u751F\u6210\u65B0\u7684\u7A0B\u5E8F\u5361\uFF0C\u4E4B\u540E\u518D\u8FDB\u884C\u52A0\u8F7D\u5C55\u793A\u3002\u82E5 A\u94FE\u63A5\u8BBE\u7F6E target='_parent' \u6216 target='_top' \u65F6\u5219\u4E0D\u4F1A\u8FDB\u884C\u6355\u83B7\uFF0C\u4EE5\u6D4F\u89C8\u5668\u65B0\u5F00\u7A97\u53E3\u6253\u5F00\u3002\u5728 A\u94FE\u63A5\u4E2D\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u52A8\u753B\u6548\u679C\u548C\u8BBE\u7F6E\u514B\u9686\u4E3A\u65B0\u6A21\u5757 preset-effect=\"\u9884\u7F6E\u52A8\u753B\u540D\"\uFF0Cclone-as=\"\u65B0\u6A21\u5757\u540D\"</li>\n            <li><b>tap-highlight</b> \u6240\u6709 a\u94FE\u63A5 \u5728\u70B9\u51FB\u65F6\u4F1A\u81EA\u52A8\u6DFB\u52A0\u534A\u900F\u660E\u8499\u5C42\u9AD8\u4EAE\u63D0\u793A\u6548\u679C</li>\n          </ul>\n        "
            },
            {
                type: 'tips',
                value: '在 A链接上使用 clone-as属性时，目的是为了让同一程序卡以多个分身打开，比如文章详情程序卡，当其参数不同时可同时以分身打开多篇文章，而不是在同一个实例中更新文章。'
            },
            {
                type: 'text',
                value: '以上选项默认均开启，若不想开启可使用 unApply 配置项。'
            },
            {
                type: 'text',
                value: 'unApply 同 apply 选项相背，它将禁止配置中的预置能力。'
            },
            {
                type: 'text',
                value: 'applyOptions 可针对每项能力增加可用参数，目前可为"tap-highlight"提供高亮选择器"selector"，当点击元素匹配时将增加高亮效果，同时会在元素上新增"tap-highlight"属性，可用作 CSS 样式自定义。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    unApply: ['proxy-link'],\n                    applyOptions: {\n                      'tap-highlight': {\n                        selector: '.link'\n                      }\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '注意，使用“proxy-link”时不能捕捉通过“location.href”方法实现的跳转行为。'
            }
        ]
    ]
};
