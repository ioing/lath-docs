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
        value: '程序卡是否以模态框形式展示。'
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
        value: '<b>sheet</b> 一种从底部弹出的窗口效果。'
      },
      {
        type: 'text',
        value: '<b>paper</b> 一种从点击区块眼神放大的窗口效果。'
      },
      {
        type: 'text',
        value: '<b>overlay</b> 一种从底部渐变弹出的弹窗效果。'
      },
      {
        type: 'text',
        value: '类型在 config 中还提供有分别的一个自定义选项 <b>SheetOptions</b>，PaperOptions 和 OverlayOptions 为 SheetOptions 的子集，可使用选项有所限制。'
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
              <b>top</b>: 视图顶部距离窗口顶部的边距离距离，支持 CSS 单位。
            </li>
            <li>
              <b>miniCardHeight</b>: 两段式卡片，默认呈现最小尺寸窗口，在小卡呈现时背景内容不会发生缩放效果，直到向上滑打开全部。
            </li>
            <li>
              <b>maskOpacity</b>: 背景黑色蒙层的不透明度，默认为 0.3。
            </li>
            <li>
              <b>blockedHolderWidth</b>: 左侧手指边缘滑动的安全边距（边距大小会覆盖可交互区域），边界值决定了左侧滑动关闭的灵敏度。
            </li>
            <li>
              <b>alwaysPopUp</b>: 在窗口切换时是否始终保持弹出动画，默认为关闭，场景切换时窗口保持静止。
            </li>
            <li>
              <b>maskClosable</b>: 点击背景蒙层是否允许关闭窗口，默认为关闭。
            </li>
            <li>
              <b>noHandlebar</b>: 不展示默认的滑动控制手柄，可能你需要在内部视图中重新定义该外观。
            </li>
            <li>
              <b>backdropColor</b>: 当背景程序卡缩放时所呈现的衬底颜色。
            </li>
            <li>
              <b>swipeClose</b>: 手指从中间横向滑动时可操作卡片关闭。
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
        value: '注意 sheetOptions 选项是 modality 选项为 \'sheet\' 时的进一步特性描述，需配合使用，单独使用时无效。'
      }
    ]
  ]
}