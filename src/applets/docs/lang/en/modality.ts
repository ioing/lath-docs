export default {
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
        value: `
          <code-highlight type="ts">
            type ModalityType = 'paper' | 'sheet' | 'overlay'
            interface AppletBaseConfig {
              modality?: ModalityType
            }
          </code-highlight>
        `
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
        value: `
          <code-highlight type="ts">
            type ModalityType = 'paper' | 'sheet' | 'overlay'
            type SheetOptions = {
              top?: string,
              miniCardHeight?: number | string
              maskOpacity?: number
              blockedHolderWidth?: number | string
              alwaysPopUp?: boolean
              maskClosable?: boolean
              noHandlebar?: boolean
              backdropColor?: string
              stillBackdrop?: boolean
              swipeClosable?: boolean
              borderRadius?: number | string
              useFade?: boolean
            }
            type PaperOptions = {
              clipTop?: string
              maskOpacity?: number
              swipeClosable?: boolean
            }
            type OverlayOptions = {
              maskOpacity?: number
              swipeClosable?: boolean
            }
            interface AppletBaseConfig {
              modality?: ModalityType
              sheetOptions?: SheetOptions
            }
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: `
          <ul>
            <li>
              <b>top</b>: The edge distance from the top of the view to the top of the window, CSS units are supported.
            </li>
            <li>
              <b>miniCardHeight</b>: Two-stage cards render the smallest size window by default, and the backdrop content does not scale when the small card is rendered until you slide up to open all.
            </li>
            <li>
              <b>maskOpacity</b>: The opacity of the background black mash, default is 0.3.
            </li>
            <li>
              <b>blockedHolderWidth</b>: The safe margin of the left finger edge sliding (the size of the margin will cover the interactive area), and the boundary value determines the sensitivity of the left sliding closing.
            </li>
            <li>
              <b>alwaysPopUp</b>: Whether to always keep the popup animation when the window is switched, the default is off, and the window remains still when the scene is switched.
            </li>
            <li>
              <b>maskClosable</b>: Click whether the background mask is allowed to close the window, the default is closed.
            </li>
            <li>
              <b>noHandlebar</b>: Instead of showing the default slide controls, you may need to redefine that look in the interior view.
            </li>
            <li>
              <b>backdropColor</b>: The underlay color to render when the backdrop Applet is scaled.
            </li>
            <li>
              <b>swipeClose</b>: When your finger slides horizontally from the middle, you can manipulate the card to close.
            </li>
          </ul>
        `
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
        value: `
          <code-highlight type="ts">
            createApplication({
              applets: {
                pageA: {
                  config: {
                    modality: 'sheet'
                    sheetOptions: {
                      top: '10%',
                      miniCardHeight: '30vh',
                      maskOpacity: 0.5,
                      blockedHolderWidth: 20,
                      alwaysPopUp: false,
                      maskClosable: true
                    }
                  }
                }
              }
            })
          </code-highlight>
        `
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
}