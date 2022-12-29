"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'PullToRefresh',
    content: [
        [
            {
                type: 'title',
                value: 'PullToRefresh'
            },
            {
                type: 'sub',
                value: 'AppletConfig > pullToRefresh'
            },
            {
                type: 'text',
                value: '开启后，在主滚动容器持续下拉手势时将会触发页面无缝刷新。'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              pullToRefresh?: boolean\n              pullToRefreshTargetScrollId?: string\n            }\n          </code-highlight>\n        "
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
                value: '开启该选项的前提是“FrameworksApplet”也开启了该选项，否则将无法生效。'
            },
            {
                type: 'text',
                value: '下拉刷新将关联一个滚动容器，可通过“pullToRefreshTargetScrollId”指定容器“id”。'
            },
            {
                type: 'text',
                value: '若未指定容器，则会默认关联主滚动容器，主滚动条请参考配置项“mainScrollId”，默认主滚动关联为程序卡的 &lt;define-applet> 容器。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    pullToRefresh: true,\n                    pullToRefreshTargetScrollId: 'root'\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '注意指定的滚动容器“id”不可存在于 ShadowDom 中。'
            }
        ]
    ]
};
