import htmlString from './source'
import { ScopeCodeHighlighter } from '../../components/code-highlight'
import { AppletManifest } from 'lath/app/typings/types'

export default {
  config: {
    level: 1,
    title: 'Lath',
    free: false,
    source: {
      html: () => {
        const html = htmlString()
        return Promise.resolve(html)
      }
    },
    animation: 'slide',
    color: 'inherit',
    background: 'auto' as 'auto',
    pullToRefresh: true,
  },
  components: [ScopeCodeHighlighter]
} as AppletManifest
