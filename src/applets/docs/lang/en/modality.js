"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Modality',
    content: [
        [
            {
                type: 'title',
                value: 'Modality'
            },
            {
                type: 'sub',
                value: 'AppletConfig > modality'
            },
            {
                type: 'text',
                value: 'Whether the Applet is displayed in the form of a modal box.'
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
                value: "\n          <code-highlight type=\"ts\">\n            type ModalityType = 'paper' | 'sheet' | 'overlay'\n            interface AppletBaseConfig {\n              modality?: ModalityType\n            }\n          </code-highlight>\n        "
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
                value: '<b>sheet</b> A window effect that pops up from the bottom.'
            },
            {
                type: 'text',
                value: '<b>paper</b> A window effect that zooms in from clicking on the block.'
            },
            {
                type: 'text',
                value: '<b>overlay</b> A pop-up effect that pops up gradually from the bottom.'
            },
            {
                type: 'text',
                value: 'The <b>sheet</b> type also provides a custom option <b>SheetOptions</b>, PaperOptions and OverlayOptions are subsets of SheetOptions and the options available are limited.'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            type ModalityType = 'paper' | 'sheet' | 'overlay'\n            type SheetOptions = {\n              top?: string,\n              miniCardHeight?: number | string\n              maskOpacity?: number\n              blockedHolderWidth?: number | string\n              alwaysPopUp?: boolean\n              maskClosable?: boolean\n              noHandlebar?: boolean\n              backdropColor?: string\n              stillBackdrop?: boolean\n              swipeClosable?: boolean\n              borderRadius?: number | string\n              useFade?: boolean\n            }\n            type PaperOptions = {\n              clipTop?: string\n              maskOpacity?: number\n              swipeClosable?: boolean\n            }\n            type OverlayOptions = {\n              maskOpacity?: number\n              swipeClosable?: boolean\n            }\n            interface AppletBaseConfig {\n              modality?: ModalityType\n              sheetOptions?: SheetOptions\n            }\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: "\n          <ul>\n            <li>\n              <b>top</b>: The edge distance from the top of the view to the top of the window, CSS units are supported.\n            </li>\n            <li>\n              <b>miniCardHeight</b>: Two-stage cards render the smallest size window by default, and the backdrop content does not scale when the small card is rendered until you slide up to open all.\n            </li>\n            <li>\n              <b>maskOpacity</b>: The opacity of the background black mash, default is 0.3.\n            </li>\n            <li>\n              <b>blockedHolderWidth</b>: The safe margin of the left finger edge sliding (the size of the margin will cover the interactive area), and the boundary value determines the sensitivity of the left sliding closing.\n            </li>\n            <li>\n              <b>alwaysPopUp</b>: Whether to always keep the popup animation when the window is switched, the default is off, and the window remains still when the scene is switched.\n            </li>\n            <li>\n              <b>maskClosable</b>: Click whether the background mask is allowed to close the window, the default is closed.\n            </li>\n            <li>\n              <b>noHandlebar</b>: Instead of showing the default slide controls, you may need to redefine that look in the interior view.\n            </li>\n            <li>\n              <b>backdropColor</b>: The underlay color to render when the backdrop Applet is scaled.\n            </li>\n            <li>\n              <b>swipeClose</b>: When your finger slides horizontally from the middle, you can manipulate the card to close.\n            </li>\n          </ul>\n        "
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                pageA: {\n                  config: {\n                    modality: 'sheet'\n                    sheetOptions: {\n                      top: '10%',\n                      miniCardHeight: '30vh',\n                      maskOpacity: 0.5,\n                      blockedHolderWidth: 20,\n                      alwaysPopUp: false,\n                      maskClosable: true\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'Note that the sheetOptions option is a further feature description when the modality option is \'sheet\', which needs to be used in conjunction and is not valid when used alone.'
            }
        ]
    ]
};
