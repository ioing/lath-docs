import html from './html.html'
import { ScopeCodeHighlighter } from '../components/code-highlight'

export default {
  config: {
    level: 1,
    title: '',
    free: false,
    source: {
      html
    },
    animation: 'slide',
    color: '#000',
    background: 'auto' as 'auto'
  },
  components: [ScopeCodeHighlighter]
}
