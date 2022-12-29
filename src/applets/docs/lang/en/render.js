"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Render',
    content: [
        [
            {
                type: 'title',
                value: 'Render'
            },
            {
                type: 'sub',
                value: 'AppletConfig > render'
            },
            {
                type: 'text',
                value: 'In addition to defining the Applet view through the configuration item [source], you can also directly render elements to the Applet through the render method.'
            },
            {
                type: 'text',
                value: 'The Applet defined by render will use shadowDOM mode. '
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              render?: (target: HTMLElement) => void\n            }\n          </code-highlight>\n        "
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
                value: 'The \'render\' function passes in the root node of the Applet, and developers can directly insert the rendering view into the node.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    render: (target) => {\n                      target.innerHTML = `\n                        &lt;p>Hello World&lt;/p>\n                      `\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'The best practice solution for using the \'render\' function is to separate the business logic from the module configuration, and use dynamic \'import\' parts of the business logic.'
            }
        ]
    ]
};
