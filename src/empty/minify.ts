import html from './html.html'
import { ScopeCodeHighlighter } from '../components/code-highlight'

export default {
  config: {
    level: 3,
    title: '',
    free: true,
    source: {
      html
    },
    animation: 'slideUp',
    color: '#bd243f',
    background: 'auto' as 'auto',
    capture: (e) => {
      return (e.href ?? String(e)).indexOf('empty') !== -1
    }
  },
  components: [ScopeCodeHighlighter]
}
