import frameworksHTML from './applets/frameworks/source'
import systemHTML from './applets/system/source'

/**
 * 一个 Applet 的视图可以由多种类型提供，以下为 <define-applet> 定义的 Applet 视图，这样的好处是能第一时间展示重要信息
 * 除此之外还可以在 config 中使用 source 进行定义
 */
export default `
  <define-application default-applet="frameworks">
    <define-applet applet-id="frameworks">
      ${frameworksHTML}
    </define-applet>
    <define-applet applet-id="system">
      ${systemHTML}
    </define-applet>
  </define-application>
`
