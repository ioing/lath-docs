"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'SingleLock',
    content: [
        [
            {
                type: 'title',
                value: 'SingleLock'
            },
            {
                type: 'sub',
                value: 'FrameworksAppletConfig > singleLock'
            },
            {
                type: 'text',
                value: 'When an Applet falls back to the program exit (level === 0 Applet),the organization history continues to fallback when the return operation is performed.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface FrameworksAppletConfig {\n              singleLock?: boolean\n            }\n          </code-highlight>\n        "
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
                value: 'When a fallback is locked, continuing to fallback begins recording the number of fallbacks and can be used to decide whether the Applet is allowed to exit through the [holdBack] configuration in \'frameworks Applets\'.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                frameworks: {\n                  config: {\n                    singleLock: true,\n                    holdBack: (event) => {\n                      // Determine whether to exit\n                      return true\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: 'As configured above, when jumping from other pages to the application, when the browser back button is clicked, it will not exit the application page, but will be judged whether it should be exited through the [holdBack] configuration in frameworks applet, and the number of times the user clicks the back button is returned.'
            }
        ]
    ]
};
