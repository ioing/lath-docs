"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Events',
    content: [
        [
            {
                type: 'title',
                value: 'Events'
            },
            {
                type: 'sub',
                value: 'AppletManifest > events'
            },
            {
                type: 'text',
                value: 'Register event callbacks for Applets.'
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
                value: "\n          <code-highlight type=\"ts\">\n            declare interface AppletEvents {\n              transformStart: (applet: Applet) => undefined | 'break'\n              transformEnd: (applet: Applet) => void\n              boot: (applet: Applet) => void\n              load: (applet: Applet) => void\n              loadError: (applet: Applet) => void\n              preload: (applet: Applet) => void\n              destroy: (applet: Applet) => void\n            }\n            declare interface AppletManifest {\n              events?: Partial<AppletEvents>\n            }\n          </code-highlight>\n        "
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
                value: 'Register the event callback function in the life cycle in the Applet.'
            },
            {
                type: 'text',
                value: "\n          <ul>\n            <li><b>transformStart</b> Applet transition animation start event. Note that 'transformStart' can optionally return a string 'break', at which point the block transition will be terminated.</li>\n            <li><b>transformEnd</b> Applet transition animation end event.</li>\n            <li><b>boot</b> Applet start event (only once per lifetime).</li>\n            <li><b>load</b> The source code loading completion event of 'source' type Applet.</li>\n            <li><b>loadError</b> The source code loading error event of 'source' type Applet.</li>\n            <li><b>preload</b> Applet preload finished event.</li>\n            <li><b>destroy</b> Applet destroyed event.</li>\n          </ul>\n        "
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    title: 'home'\n                  },\n                  events: {\n                    transformEnd: (applet) => {\n                      // ...\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'Only the necessary events are provided in the Applet registration event, you can use the listener function on the Applet object to cover more events. Please refer to \'API-Application Events\'.'
            },
            {
                type: 'tips',
                value: 'The events in the Applet configuration all run outside the Applet container. When the Applet is destroyed, the environment variables in the configuration will not disappear. Therefore, you must be responsible for the quality of the logic in the configuration file, avoid side effects, and be reasonable. Controls the logic size (complex logic is not recommended here).'
            }
        ]
    ]
};
