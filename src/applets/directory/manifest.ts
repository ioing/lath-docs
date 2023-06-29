import htmlString from './source'
import { ScopeCodeHighlighter } from '../../components/code-highlight'

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
    animation: 'slide' as 'slide',
    color: 'inherit',
    background: 'auto' as 'auto',
    pullToRefresh: true,
  },
  components: [ScopeCodeHighlighter]
}
