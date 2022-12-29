"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Quick Start',
    content: [
        [
            {
                type: 'title',
                value: 'Concept'
            },
            {
                type: 'text',
                value: 'Before getting started quickly, let\'s first understand the basic concepts.'
            },
            {
                type: 'text',
                value: "\n          <ul>\n            <li><b>Application</b>: A Lath application is composed of several Applets.</li>\n            <li><b>Applet</b>: An Applet is composed of one page or one View and its related configuration files.</li>\n            <li><b>FrameworksApplet</b>: Each Lath Application must have a frame-type Applet, which mainly carries public capabilities, such as navigation bars and so on.</li>\n          </ul>\n        "
            },
            {
                type: 'tips',
                value: 'Lath application is actually a SPA (single page application), its corresponding routing view can be a slice view inside itself or an external page view, no matter what type of view it is, it is used as an applet the entity content exists.'
            },
        ],
        [
            {
                type: 'title',
                value: 'Apply'
            },
            {
                type: 'text',
                value: 'Suppose we want to make a SPA (single page application) now, and we have made each routing page corresponding to the application, then we only need to assemble it in the following way:'
            },
            {
                type: 'text',
                value: 'Use the <b>&lt;define-application></b> container as the root node to wrap the entire content of the page, so that the page is declared as a Lath application, and then use <b>&lt;define-applet></b> container inside it to wrap a specific routing view (we can understand it as a page in a traditional SPA) so that the wrapping view is declared as a view of an Applet entity.'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type='html'>\n            &lt;body>\n              &lt;define-application default-applet=\"appletA\">\n                &lt;define-applet applet-id=\"appletA\">\n                  &lt;div>\n                    This is the content of 'appletA'\n                  &lt;/div>\n                &lt;/define-applet>\n                &lt;define-applet applet-id=\"appletB\">\n                  &lt;div>\n                    This is the content of 'appletB'\n                  &lt;/div>\n                &lt;/define-applet>\n              &lt;/define-application>\n            &lt;/body>\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: "\n          <ul>\n            <li>The attribute <b>\u201Cdefault-applet\u201D</b> on &lt;define-application> can specify an applet name as the default view when the application is initialized, that is, the earliest view visible to the user.</li>\n            <li>The attribute <b>\u201Capplet-id\u201D</b> on &lt;define-applet> is the declared applet name</li>\n          </ul>\n        "
            },
            {
                type: 'tips',
                value: '"default-applet" is the applet declared by &lt;define-applet> in the &lt;define-application> package. When the page is opened in the browser, only the specified applet view is visible, and other views are not visible.'
            },
            {
                type: 'text',
                value: 'Using lable wrapping is the first step in creating a Lath application. Next, we also need to configure properties for each declared applet, such as setting a title for each applet.'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            import { createApplication } from 'lath'\n            createApplication({\n              applets: {\n                frameworks: {\n                  config: {\n                    title: 'Lath Demo'\n                  }\n                },\n                appletA: {\n                  config: {\n                    title: 'Page A'\n                  }\n                },\n                appletB: {\n                  config: {\n                    title: 'Page B'\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: 'We use the &lt;define-application> container to declare the application, but to actually start the application we also need to execute the <a to-applet="doc?id=install" clone-as="popDoc">createApplication</a> method, and pass in the Applet related configuration.'
            },
            {
                type: 'text',
                value: 'Unsurprisingly we will get a "magic" page, at which point we can do this via the A link or <a to-applet="doc?id=applicationTo" clone-as="popDoc">Application.to</a> etc. methods are routed to a defined Applet view.'
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: 'In general, we will not integrate all the routing pages that may be loaded in the application into one page at one time, but hope to load on demand, then we only need to express it through the configuration information:'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            import { createApplication } from 'lath'\n            createApplication({\n              applets: {\n                frameworks: {\n                  config: {\n                    title: 'Lath Demo'\n                  }\n                },\n                home: {\n                  config: {\n                    title: 'home',\n                    source: {\n                      src: 'https://www.yoursite.com/home.html' \n                    }\n                  }\n                }\n              }\n            }).then((application) => {\n              // return application\n              console.log(application)\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: 'Applet views can be declared not only through &lt;define-applet>, but also through configuration items <a to-applet="doc?id=source" clone-as="popDoc">source</a>.'
            },
            {
                type: 'text',
                value: 'When using source to define an applet view, there is no need to declare it with &lt;define-applet>.'
            },
            {
                type: 'tips',
                value: 'Generally, we will declare the frameworks Applets and the first screen Applet by the method of &lt;define-applet>, and the other Applets will be declared by configuring the \'source\' method, which can ensure the maximum loading speed of the first screen.'
            },
        ],
        [
            {
                type: 'title',
                value: 'Common Problems'
            },
            {
                type: 'text',
                value: '<b>Where does the scroll event go when declared with &lt;define-applet>?</b>'
            },
            {
                type: 'text',
                value: 'Each Applet view is equivalent to a complete page content, and it should have its own scroll container, so when declared with &lt;define-applet>, its internal logic related to scroll events needs to be moved from "body" Except, the modification is bound to its own &lt;define-applet>  tag element.'
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<b>How to introduce cross-domain page views?</b>'
            },
            {
                type: 'text',
                value: 'When using source to declare an Applet\'s view, if its src page points to a cross-domain page, the ability of the proxy type in the page will be limited. To solve this problem, you can also introduce Lath in the reference page and enable the option <a to-applet="doc?id=tunneling" clone-as="popDoc">PresetConfig > tunneling</a> to lift some restriction.'
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<b>Does Lath have timing requirements?</b>'
            },
            {
                type: 'text',
                value: 'Lath as an experience enhancement container, is not necessary on the first screen, so we recommend executing the \'createApplication\' method after the first screen is loaded, so as not to block the rendering of the first screen content.'
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<b>Typescript&JSX warning?</b>'
            },
            {
                type: 'text',
                value: 'When using Typescript in the React environment, we need to define the type of the container\'s label, otherwise \'ts\' will generate a warning. At this time, add \'the type.d.ts\' file to the project.'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type='ts'>\n            // type.d.ts\n            import 'lath'\n            declare namespace JSX {\n              interface IntrinsicElements {\n                'define-applet': {\n                  children: Element\n                  'applet-id': string\n                }\n                'define-application': {\n                  children: Element\n                  'default-applet': string\n                }\n              }\n            }\n          </code-highlight>\n        "
            },
        ],
        [
            {
                type: 'title',
                value: 'See also'
            },
            {
                type: 'text',
                value: '<a href="https://github.com/ioing/lath-vue-example">A code example developed using Lath in a Vue project.</a>'
            },
        ]
    ]
};
