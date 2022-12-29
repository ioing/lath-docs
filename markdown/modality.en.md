# Modality

<small>AppletConfig > modality</small>

Whether the Applet is displayed in the form of a modal box.

---

<h3>Types</h3>

```ts
type ModalityType = 'paper' | 'sheet' | 'overlay'
interface AppletBaseConfig {
  modality?: ModalityType
}
```

---

<h3>Details</h3>

**sheet** A window effect that pops up from the bottom.

**paper** A window effect that zooms in from clicking on the block.

**overlay** A pop-up effect that pops up gradually from the bottom.

The **sheet** type also provides a custom option **SheetOptions**, PaperOptions and OverlayOptions are subsets of SheetOptions and the options available are limited.

```ts
type ModalityType = 'paper' | 'sheet' | 'overlay'
type SheetOptions = {
  top?: string
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
```

- **top**: The edge distance from the top of the view to the top of the window, CSS units are supported.
- **miniCardHeight**: Two-stage cards render the smallest size window by default, and the backdrop content does not scale when the small card is rendered until you slide up to open all.
- **maskOpacity**: The opacity of the background black mash, default is 0.3.
- **maskOpacity**: The opacity of the background black mash, default is 0.3.
- **blockedHolderWidth**: The safe margin of the left finger edge sliding (the size of the margin will cover the interactive area), and the boundary value determines the sensitivity of the left sliding closing.
- **alwaysPopUp**: Whether to always keep the popup animation when the window is switched, the default is off, and the window remains still when the scene is switched.
- **maskClosable**: Click whether the background mask is allowed to close the window, the default is closed.
- **noHandlebar**: Instead of showing the default slide controls, you may need to redefine that look in the interior view.
- **backdropColor**: The underlay color to render when the backdrop Applet is scaled.
- **swipeClose**: When your finger slides horizontally from the middle, you can manipulate the card to close.

<h3>Example</h3>

```ts
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

```

---

<h3>Notes</h3>

Note that the sheetOptions option is a further feature description when the modality option is 'sheet', which needs to be used in conjunction and is not valid when used alone.
