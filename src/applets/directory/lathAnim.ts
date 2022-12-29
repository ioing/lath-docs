const repeatSpan31 = (prefixClass) => {
  let str = ''
  for (let i = 31; i > 0; i--) {
    str += '<span class="' + prefixClass + '-' + i + '"></span> \n'
  }
  return str
}
export default `
<lathanim letter="L">
  <div class="helper-1">
    <div class="effect-brush">
      ${repeatSpan31('fur')}
    </div>
    <div class="effect-lumieres">
      ${repeatSpan31('lamp')}
    </div>
  </div>
  <div class="helper-2">
    <div class="effect-brush">
      ${repeatSpan31('fur')}
    </div>
  </div>
  <div class="helper-3">
    <div class="effect-brush">
      ${repeatSpan31('fur')}
    </div>
  </div>
  <div class="helper-4">
    <div class="effect-brush">
      ${repeatSpan31('fur')}
    </div>
  </div>
</lathanim>
`