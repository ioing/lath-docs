import head from './head.html'
import html from './html'

export default () => {
  return `
    ${head}
    <div style="margin: 0 12px">
      ${html()}
    </div>
  `
}