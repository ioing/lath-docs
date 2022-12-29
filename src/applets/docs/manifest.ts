import { getHtml } from './source'
import { ScopeCodeHighlighter } from '../../components/code-highlight'
import { AppletManifest } from 'lath/app/typings/types'

export default {
  config: {
    level: 2,
    title: 'DOCS',
    free: true,
    source: {
      html: () => {
        const htmlString = getHtml()
        if (htmlString) {
          return htmlString
        }
        return ''
      }
    },
    animation: 'slide' as 'slide',
    color: 'inherit',
    timeout: 300000,
    background: 'auto' as 'auto',
    useMirroring: false,
    capture: (e) => {
      return (e.href ?? String(e)).indexOf('docs') !== -1
    },
    injectToDocument: (appletWindow, _applet) => {
      appletWindow.addEventListener('load', () => {
        const h1Group = appletWindow.document.getElementsByTagName('h1')
        const titleBox = appletWindow.document.getElementById('docs-title')
        function observeElementDistance(element: HTMLElement, callback: () => void) {
          // 创建一个新的 IntersectionObserver 实例
          const observer = new IntersectionObserver((entries) => {
            // 当监听的元素的距离小于 300 时，执行回调函数
            if (entries[0].boundingClientRect.top <= 300) {
              callback();
            }
          })

          // 开始监听元素
          observer.observe(element)
        }
        for (let index = 0; index < h1Group.length; index++) {
          const h1 = h1Group[index]
          // 示例: 当页面中的第一个 h1 元素距离视窗顶部小于 300 时，将其文本内容设为 "Visible!"
          observeElementDistance(h1, () => {
            if (titleBox) titleBox.textContent = h1.textContent
          })
        }
      })
    },
  },
  components: [ScopeCodeHighlighter]
} as AppletManifest
