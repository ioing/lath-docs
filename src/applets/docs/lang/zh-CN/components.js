"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Components',
    content: [
        [
            {
                type: 'title',
                value: 'Components'
            },
            {
                type: 'sub',
                value: 'AppletManifest > components'
            },
            {
                type: 'text',
                value: '属于同源的程序卡页面可与主程序卡页面共享 Web Components。'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletManifest {\n              components?: ((w: Window) => CustomElementConstructor)[]\n            }\n          </code-highlight>\n        "
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
                value: 'Web Components 作为面向未来的组件标准，不仅易于共享也能极大程度上提升页面的体验性能。'
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
                value: "\n          <code-highlight type=\"ts\">\n            export const getCodeHighlighter = (shadowWindow): CustomElementConstructor => {\n              class CodeHighlighter extends shadowWindow.HTMLElement {\n                constructor () {\n                  super()\n                  const shadowRoot = this.attachShadow({ mode: 'open' })\n                  shadowRoot.appendChild(tmpl.content.cloneNode(true))\n                  ...\n                }\n              }\n      \n              return CodeHighlighter as unknown as CustomElementConstructor\n            }\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    title: 'Home Page'\n                  },\n                  components: [getCodeHighlighter]\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '由于 Web Components 是要共享到各个程序卡容器内，因此我们封装组件时需要将组件注册到该程序卡的 window 变量中。'
            }
        ]
    ]
};
