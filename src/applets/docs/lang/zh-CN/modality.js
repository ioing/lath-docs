"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Modality',
    content: [
        [
            {
                type: 'title',
                value: 'Modality'
            },
            {
                type: 'sub',
                value: 'AppletConfig > modality'
            },
            {
                type: 'text',
                value: '程序卡是否以模态框形式展示。'
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
                value: "\n          <code-highlight type=\"ts\">\n            type ModalityType = 'paper' | 'sheet' | 'overlay'\n            interface AppletBaseConfig {\n              modality?: ModalityType\n            }\n          </code-highlight>\n        "
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
                value: '<b>sheet</b> 一种从底部弹出的窗口效果。'
            },
            {
                type: 'text',
                value: '<b>paper</b> 一种从点击区块眼神放大的窗口效果。'
            },
            {
                type: 'text',
                value: '<b>overlay</b> 一种从底部渐变弹出的弹窗效果。'
            },
            {
                type: 'text',
                value: '类型在 config 中还提供有分别的一个自定义选项 <b>SheetOptions</b>，PaperOptions 和 OverlayOptions 为 SheetOptions 的子集，可使用选项有所限制。'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            type ModalityType = 'paper' | 'sheet' | 'overlay'\n            type SheetOptions = {\n              top?: string,\n              miniCardHeight?: number | string\n              maskOpacity?: number\n              blockedHolderWidth?: number | string\n              alwaysPopUp?: boolean\n              maskClosable?: boolean\n              noHandlebar?: boolean\n              backdropColor?: string\n              stillBackdrop?: boolean\n              swipeClosable?: boolean\n              borderRadius?: number | string\n            }\n            type PaperOptions = {\n              clipTop?: string\n              maskOpacity?: number\n              swipeClosable?: boolean\n            }\n            type OverlayOptions = {\n              maskOpacity?: number\n              swipeClosable?: boolean\n            }\n            interface AppletBaseConfig {\n              modality?: ModalityType\n              sheetOptions?: SheetOptions\n            }\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: "\n          <ul>\n            <li>\n              <b>top</b>: \u89C6\u56FE\u9876\u90E8\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u7684\u8FB9\u8DDD\u79BB\u8DDD\u79BB\uFF0C\u652F\u6301 CSS \u5355\u4F4D\u3002\n            </li>\n            <li>\n              <b>miniCardHeight</b>: \u4E24\u6BB5\u5F0F\u5361\u7247\uFF0C\u9ED8\u8BA4\u5448\u73B0\u6700\u5C0F\u5C3A\u5BF8\u7A97\u53E3\uFF0C\u5728\u5C0F\u5361\u5448\u73B0\u65F6\u80CC\u666F\u5185\u5BB9\u4E0D\u4F1A\u53D1\u751F\u7F29\u653E\u6548\u679C\uFF0C\u76F4\u5230\u5411\u4E0A\u6ED1\u6253\u5F00\u5168\u90E8\u3002\n            </li>\n            <li>\n              <b>maskOpacity</b>: \u80CC\u666F\u9ED1\u8272\u8499\u5C42\u7684\u4E0D\u900F\u660E\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 0.3\u3002\n            </li>\n            <li>\n              <b>blockedHolderWidth</b>: \u5DE6\u4FA7\u624B\u6307\u8FB9\u7F18\u6ED1\u52A8\u7684\u5B89\u5168\u8FB9\u8DDD\uFF08\u8FB9\u8DDD\u5927\u5C0F\u4F1A\u8986\u76D6\u53EF\u4EA4\u4E92\u533A\u57DF\uFF09\uFF0C\u8FB9\u754C\u503C\u51B3\u5B9A\u4E86\u5DE6\u4FA7\u6ED1\u52A8\u5173\u95ED\u7684\u7075\u654F\u5EA6\u3002\n            </li>\n            <li>\n              <b>alwaysPopUp</b>: \u5728\u7A97\u53E3\u5207\u6362\u65F6\u662F\u5426\u59CB\u7EC8\u4FDD\u6301\u5F39\u51FA\u52A8\u753B\uFF0C\u9ED8\u8BA4\u4E3A\u5173\u95ED\uFF0C\u573A\u666F\u5207\u6362\u65F6\u7A97\u53E3\u4FDD\u6301\u9759\u6B62\u3002\n            </li>\n            <li>\n              <b>maskClosable</b>: \u70B9\u51FB\u80CC\u666F\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED\u7A97\u53E3\uFF0C\u9ED8\u8BA4\u4E3A\u5173\u95ED\u3002\n            </li>\n            <li>\n              <b>noHandlebar</b>: \u4E0D\u5C55\u793A\u9ED8\u8BA4\u7684\u6ED1\u52A8\u63A7\u5236\u624B\u67C4\uFF0C\u53EF\u80FD\u4F60\u9700\u8981\u5728\u5185\u90E8\u89C6\u56FE\u4E2D\u91CD\u65B0\u5B9A\u4E49\u8BE5\u5916\u89C2\u3002\n            </li>\n            <li>\n              <b>backdropColor</b>: \u5F53\u80CC\u666F\u7A0B\u5E8F\u5361\u7F29\u653E\u65F6\u6240\u5448\u73B0\u7684\u886C\u5E95\u989C\u8272\u3002\n            </li>\n            <li>\n              <b>swipeClose</b>: \u624B\u6307\u4ECE\u4E2D\u95F4\u6A2A\u5411\u6ED1\u52A8\u65F6\u53EF\u64CD\u4F5C\u5361\u7247\u5173\u95ED\u3002\n            </li>\n          </ul>\n        "
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                pageA: {\n                  config: {\n                    modality: 'sheet'\n                    sheetOptions: {\n                      top: '10%',\n                      miniCardHeight: '30vh',\n                      maskOpacity: 0.5,\n                      blockedHolderWidth: 20,\n                      alwaysPopUp: false,\n                      maskClosable: true\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '注意 sheetOptions 选项是 modality 选项为 \'sheet\' 时的进一步特性描述，需配合使用，单独使用时无效。'
            }
        ]
    ]
};
