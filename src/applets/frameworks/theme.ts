const lightTheme = {
  '--background': '#f5f5f5',
  '--header-background': 'rgba(245, 245, 245, .82)',
  '--logo-background': '#fff',
  '--logo-text': '#424242',
  '--sub-title': '#969696',
  '--card-title': '#afafaf',
  '--main-color': '#000',
  '--card-background': '#fff',
  '--card-text-color': 'rgba(0, 0, 0, .82)',
  '--card-hr-color': 'rgba(0, 0, 0, .05)',
  '--menu-button-color': '#444',
  '--menu-hr-color': 'rgba(0, 0, 0, .15)',
  '--code-background': '#3c3c3c',
  '--docs-p-color': '#333',
  '--docs-hr-color': 'rgba(0, 0, 0, .1)',
  '--card-item-hover': 'rgba(0, 0, 0, .1)'
}

const darkTheme = {
}
for (let k in lightTheme) {
  darkTheme[k] = ''
}
Object.assign(darkTheme, {
  '--background': '#000',
})
const defTheme = darkTheme

export {
  lightTheme,
  darkTheme,
  defTheme,
}