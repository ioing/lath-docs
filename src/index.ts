import { Application } from 'lath/app'
import frameworksConfig from './frameworks/minify'
import home from './home/minify'
import doc from './doc/minify'
import empty from './empty/minify'
import './components/menu-icon'
import './components/app-nav'
import './components/app-logo'
import './components/menu-list'

// docs
const app = new Application()
app.setting({
  modules: {
    home,
    frameworks: frameworksConfig,
    doc,
    empty
  }
})

document.documentElement.style.background = '#000'
document.body.style.background = '#000'

app.start()
window['app'] = app

// ;(function () { const script = document.createElement('script'); script.src = '//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { window['eruda'].init() } })();
