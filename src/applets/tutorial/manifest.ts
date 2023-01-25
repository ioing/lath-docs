import { getHtml } from '../docs/source'
import { ScopeCodeHighlighter } from '../../components/code-highlight'

export default {
  config: {
    level: 2,
    title: 'Tutorial',
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
    // modality: 'sheet' as 'sheet',
    // modalityUnderUntouchable: 'overlay' as 'overlay',
    // paperOptions: {
    //   top: '10px + env(safe-area-inset-top)'
    // },
    animation: 'zoom' as 'zoom',
    untouchableSegueType: 'zoom',
    color: 'inherit',
    timeout: 300000,
    background: 'auto' as 'auto',
    useMirroring: false,
    capture: (e) => {
      return (e.href ?? String(e)).indexOf('tutorial') !== -1
    }
  },
  components: [ScopeCodeHighlighter]
}
