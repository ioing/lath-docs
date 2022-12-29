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
                value: 'Applet pages that belong to the same origin can share Web Components with the main Applet page.'
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
                value: 'As a future-oriented component standard, Web Components are not only easy to share, but also can greatly improve the experience performance of the page.'
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
                value: 'Since Web Components are to be shared into each Applet Container, we need to register the component in the window variable of the Applet when we encapsulate the component.'
            }
        ]
    ]
};
