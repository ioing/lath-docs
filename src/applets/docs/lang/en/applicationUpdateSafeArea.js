"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Application.updateSafeArea',
    content: [
        [
            {
                type: 'title',
                value: 'Application.updateSafeArea'
            },
            {
                type: 'sub',
                value: 'Application.updateSafeArea'
            },
            {
                type: 'text',
                value: 'Update the security margins of an App (subject to the same-origin policy).'
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
                value: "\n          <code-highlight type=\"ts\">\n            type ApplicationSafeAreaValue = string | Array<string>\n            type safeArea = (data: ApplicationSafeAreaValue) => void \n          </code-highlight>\n        "
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
                value: 'For its initial value, refer to the module configuration item [safeArea].'
            },
            {
                type: 'text',
                value: 'The \'updateSafeArea\' parameter is an array expressed in clockwise enumeration like \'CSS Margin\'.'
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
                value: "\n          <code-highlight type=\"ts\">\n            application.updateSafeArea(['48px', 0, '60px', 0])\n            application.updateSafeArea(['48px', 0, '60px'])\n            application.updateSafeArea(['60px', 0])\n            application.updateSafeArea(['48px'])\n          </code-highlight>\n        "
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
                value: 'In the application, the safety distance does not necessarily refer to the system default notch screen, but the safety area superimposed by the framework Applet, and when the framework interaction changes the safety margin, the display logic of each Applet can be controlled by this method.'
            },
            {
                type: 'text',
                value: 'Non-homology card pages are not under this control, but you can synchronize secondary operations by creating your own \'postMessage\'. In addition, "on/one" can be used to listen for "safeAreaChange" events on the Application object.'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            application.on('safeAreaChange', (data) => {\n              console.log(data)\n              // Applet is a cross-domain page module\n              // applet.view is a cross-domain page iframe\n              applet.view.postMessage({\n                action: 'safeAreaChange',\n                data\n              }, '*')\n            }\n          </code-highlight>\n        "
            },
            {
                type: 'tips',
                value: 'The target Applet object can be obtained directly in the \'events\' definition function in the configuration and through methods such as \'Application.get\'.'
            }
        ]
    ]
};
