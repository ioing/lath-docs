import html from './html.html'
import { ScopeCodeHighlighter } from '../components/code-highlight'

export default {
  config: {
    level: 2,
    title: '',
    free: true,
    source: {
      html
    },
    animation: 'slide',
    color: '#000',
    background: 'auto' as 'auto',
    capture: (e) => {
      return (e.href ?? String(e)).indexOf('doc') !== -1
    }
  },
  components: [ScopeCodeHighlighter]
}
