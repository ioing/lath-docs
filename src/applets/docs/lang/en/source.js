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
                value: 'Define the HTML source code for the applet, which will run inside the container created by Lath.'
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
                value: 'Can be divided into Source Mode and Link Mode.'
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
                value: '<b>Source Mode</b>'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    title: 'Home Page',\n                    source: {\n                      html: `\n                        &lt;html lang=\"en\">\n                        &lt;head>&lt;/head>\n                        &lt;body>\n                          Hello World!\n                        &lt;/body>\n                        &lt;/html>\n                        `\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: '<b>Link Mode</b>'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"js\">\n            export default {\n              config: {\n                  title: 'Home Page',\n                  source: {\n                  src: 'http://yoursite.com'\n                }\n              }\n            }\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: 'Choose one of the two modes. And if they coexist, the src Link Mode will take precedence.'
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<h3>Notes</h3>'
            },
            {
                type: 'tips',
                value: 'When using Link Mode, you need to comply with the same-origin policy, otherwise some capabilities will not be enabled, such as Capture, Apply, Inject, etc. If you need to use these features, you need to also connect the target page to Lath and turn on the \'tunneling\' mode, which can be referred to "PresetConfig > tunneling".'
            }
        ]
    ]
};
