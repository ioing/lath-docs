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
                value: 'Enable presetable capabilities in the same-origin Applet.'
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
                value: '\'apply\' presets the following available capabilities:'
            },
            {
                type: 'text',
                value: "\n          <ul>\n            <li><b>smart-setTimeout</b> When the Applet window is not visible or is in the process of window animation, all 'setTimeout' will automatically pause execution until the module animation stops and automatically resumes execution.</li>\n            <li><b>proxy-link</b> When the 'a link' or the 'window.open' method is used to open the page in the Applet page, the Lath container will automatically capture and intercept, and generate a new Applet from the page content, and then load and display it. If the 'a link' is set with target='_parent' or target='_top', it will not be captured and will be opened in a new browser window. In the 'a link', you can also set the animation effect and set the clone as a new module preset-effect=\"preset animation name\", clone-as=\"new module name\"</li>\n            <li><b>tap-highlight</b> All 'a links' will automatically add a translucent mask highlighting effect when clicked.</li>\n          </ul>\n        "
            },
            {
                type: 'tips',
                value: 'When using the \'clone-as\' attribute on the \'a link\', the purpose is to allow the same Applet to be opened with multiple avatars, such as the article details Applet. When its parameters are different, multiple articles can be opened with avatars at the same time, rather than in the same instance to update the article.'
            },
            {
                type: 'text',
                value: 'The options above are enabled by default. If you do not want to enable them, you can use the \'unApply\' configuration item.'
            },
            {
                type: 'text',
                value: '\'unApply\' is the opposite of the \'apply\' option, which disables the ability to preconfigure in the configuration.'
            },
            {
                type: 'text',
                value: '\'applyOptions\' can add available parameters for each capability. Currently, a highlight selector "selector" can be provided for "tap-highlight". When the click element matches, the highlight effect will be added, and "tap-highlight" will be added to the element. Properties that can be used for CSS style customization.'
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
                value: 'Note that using "proxy-link" does not capture the jump behavior implemented by the "location.href" method.'
            }
        ]
    ]
};
