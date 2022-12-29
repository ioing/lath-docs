import html from './html.html'
import { ScopeCodeHighlighter } from '../../components/code-highlight'

export default {
  config: {
    level: 1,
    title: '',
    free: false,
    source: {
      html
    },
    color: 'inherit',
    animation: 'slide' as 'slide',
    background: 'auto' as 'auto'
  },
  components: [ScopeCodeHighlighter]
}
