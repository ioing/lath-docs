"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Resource',
    content: [
        [
            {
                type: 'title',
                value: 'Resource'
            },
            {
                type: 'sub',
                value: 'AppletManifest > resource'
            },
            {
                type: 'text',
                value: 'Static resources that the Applet depends on when it runs.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletResources {\n              script?: Array&lt;string>\n              image?: Array&lt;string>\n              worker?: Array&lt;string>\n              video?: Array&lt;string>\n              audio?: Array&lt;string>\n              font?: Array&lt;string>\n              style?: Array&lt;string>\n              html?: Array&lt;string>\n            }\n            interface AppletManifest {\n              resource?: AppletResources\n            }\n          </code-highlight>\n        "
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
                value: 'When switching from the current Applet to the next Applet, if the current Applet is configured with pre-rendering dependencies (prerender=[${nextApplet}]), the static resources are preloaded before the new Applet is loaded, such as the \'script\', \'css tags\' in HTML, etc., do not need to be declared and configured for the static resources of these internal links, but for the content dynamically loaded through scripts during the running of the page, such as fonts in CSS, dynamically generated media materials, etc., The preloading cannot be completed. At this time, the resources that may be loaded can be preloaded through the resource configuration item.'
            },
            {
                type: 'text',
                value: 'The Applet hierarchy will also reflect the effect of the transition animation, from small to large, it is a forward animation; and vice versa, from large to small, it is a reverse animation.'
            },
            {
                type: 'text',
                value: 'When the history rolls back to the Applet with level 0, the singleLock event will be triggered. For details, please refer to the relevant description in the [singleLock] configuration.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  resource: [\n                    image: [\n                      'https://yourCDN.com/001.jpg',\n                      'https://yourCDN.com/002.jpg',\n                      'https://yourCDN.com/003.jpg'\n                    ]\n                  ],\n                  config: {\n                    title: 'Home Page'\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'The preload work is not performed immediately, but is loaded sequentially when the browser is idle.'
            },
            {
                type: 'tips',
                value: 'Unknown types that do not exist in the AppletResources type can try preloading with the script type.'
            }
        ]
    ]
};
