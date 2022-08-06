/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/html.html":
/*!***************************!*\
  !*** ./src/api/html.html ***!
  \***************************/
/***/ ((module) => {

module.exports = "<html>\n\n<head>\n  <style>\n    html,\n    body {\n      margin: 0;\n      background: var(--background, #000);\n      font-family: 'Lato', sans-serif;\n      transition: background .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .56s cubic-bezier(0.52, 0.16, 0.24, 1);\n    }\n\n    body {\n      margin: 0 8px;\n    }\n\n    .placeholder {\n      height: var(--application-safe-area-top);\n      margin-bottom: 20px;\n    }\n\n    .card {\n      min-height: 100px;\n      max-width: 520px;\n      margin: auto;\n      margin-bottom: 12px;\n      border-radius: 16px;\n      border: 0.5px solid rgba(255, 255, 255, .05);\n      background: var(--card-background, rgba(255, 255, 255, .1));\n    }\n\n    .card-title {\n      font-size: 32px;\n      font-weight: 400;\n      padding: 12px 20px 7px;\n      color: var(--card-title, rgba(255, 255, 255, .3));\n      -webkit-font-smoothing: antialiased;\n    }\n\n    .card-list {\n      padding: 0;\n      margin: 0;\n    }\n\n    .card-list a {\n      display: block;\n      position: relative;\n      font-size: 20px;\n      padding: 15px 20px;\n      list-style: none;\n      font-weight: 400;\n      color: var(--card-text-color, rgba(255, 255, 255, .92));\n      border-bottom: 0.5px solid rgba(255, 255, 255, .2);\n      border-bottom-color: var(--card-hr-color, rgba(255, 255, 255, .2));\n      align-content: space-between;\n      cursor: pointer;\n      text-decoration: none;\n    }\n\n    .card-list a[tap-highlight] {\n      background-color: var(--card-item-hover, rgba(255, 255, 255, .1)) !important;\n    }\n\n    @media (pointer: fine) {\n      .card-list a:hover {\n        background-color: var(--card-item-hover, rgba(255, 255, 255, .1));\n      }\n    }\n\n    .card-list a:last-child {\n      border-bottom: 0;\n      border-bottom-left-radius: 12px;\n      border-bottom-right-radius: 12px;\n    }\n\n    .card-list a:after {\n      position: absolute;\n      right: 15px;\n      top: 50%;\n      content: ' ';\n      display: block;\n      width: 20px;\n      height: 20px;\n      margin-top: -10px;\n      background-image: url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBmaWxsPScjY2NjY2NjJyB2ZXJzaW9uPScxLjEnIGlkPSflm77lsYJfMScgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCA1NCA1NCcgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTQgNTQnIHhtbDpzcGFjZT0ncHJlc2VydmUnPjxzY3JpcHQgeG1sbnM9JycgdHlwZT0ndGV4dC9qYXZhc2NyaXB0JyBjcm9zc29yaWdpbj0nYW5vbnltb3VzJy8+PHBhdGggZD0nTTQ0LjYsMjguNWMwLTAuMSwwLjEtMC4xLDAuMS0wLjJjMC42LTEuMywwLjQtMi45LTAuNy0zLjlMMTkuMiwwLjljLTEuNC0xLjMtMy41LTEuMi00LjgsMC4xcy0xLjIsMy41LDAuMSw0LjhsMjIuMiwyMSBMMTQuNyw0OC4yYy0xLjMsMS4zLTEuNCwzLjQtMC4xLDQuOGMwLjcsMC43LDEuNSwxLDIuNCwxYzAuOCwwLDEuNy0wLjMsMi4zLTAuOWwyNC42LTIzLjdjMCwwLDAuMS0wLjEsMC4xLTAuMmMwLDAsMC4xLTAuMSwwLjEtMC4xIEM0NC4zLDI4LjksNDQuNCwyOC43LDQ0LjYsMjguNUw0NC42LDI4LjV6Jy8+PC9zdmc+\");\n    }\n\n    .card-list a span {\n      font-size: 13px;\n      color: rgba(255, 255, 255, .3);\n      -webkit-font-smoothing: antialiased;\n    }\n\n    p.copyright {\n      margin-top: 20px;\n      opacity: .5;\n      padding: 8px 20px;\n    }\n\n    p.copyright,\n    p.copyright a {\n      font-size: 14px;\n      text-decoration: none;\n      color: var(--main-color, #f5f5f7);\n    }\n\n    p.copyright a {\n      font-weight: 600;\n    }\n  </style>\n</head>\n\n<body>\n  <div class=\"placeholder\"></div>\n  <div class=\"card\">\n    <div class=\"card-title\">Application API</div>\n    <div class=\"card-list\">\n      <a href=\"?id=applicationTo#doc\">to</a>\n      <a href=\"?id=applicationPushWindow#doc\">pushWindow</a>\n      <!-- <a href=\"?id=applicationStart#doc\">start</a> -->\n      <a href=\"?id=applicationInstall#doc\">install</a>\n      <a href=\"?id=applicationActiveApplet#doc\">activeApplet</a>\n      <a href=\"?id=applicationPreActiveApplet#doc\">preActiveApplet</a>\n      <a href=\"?id=applicationEvents#doc\">on & one & off</a>\n      <a href=\"?id=applicationGet#doc\">get & del & add</a>\n      <a href=\"?id=applicationExists#doc\">exists</a>\n      <a href=\"?id=applicationUpdateSafeArea#doc\">updateSafeArea</a>\n      <a href=\"?id=applicationUpdateGlobalCSSVariables#doc\">updateGlobalCSSVariables</a>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-title\">Applet API</div>\n    <div class=\"card-list\">\n      <a href=\"?id=appletSlideView#doc\">slideView</a>\n      <a href=\"?id=appletView#doc\">view</a>\n      <a href=\"?id=appletRefresh#doc\">refresh</a>\n      <a href=\"?id=appletSameOrigin#doc\">sameOrigin</a>\n      <a href=\"?id=appletColor#doc\">color</a>\n      <a href=\"?id=appletEvents#doc\">on & one & off</a>\n    </div>\n  </div>\n  <div class=\"card\">\n    <p class=\"copyright\">\n      This project is licensed under <a href=\"https://opensource.org/licenses/MIT\" target=\"_blank\" rel=\"noopener\">MIT\n        License</a><br> Copyright © 2010-2022 LATH\n    </p>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/components/app-logo/template.html":
/*!***********************************************!*\
  !*** ./src/components/app-logo/template.html ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<style>\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  .g-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    margin-top: 10px;\n  }\n\n  .word {\n    font-family: \"Montserrat\", sans-serif;\n    color: var(--logo-text, rgba(255, 255, 255, 0.7));\n    font-size: 17px;\n    font-weight: bold;\n    opacity: .3;\n    -webkit-font-smoothing: antialiased;\n    margin: 0 7px;\n    position: relative;\n    transition: all .2s ease;\n  }\n  .word.active {\n    font-size: 18px;\n    font-weight: bold;\n    opacity: 1;\n  }\n  .word::after {\n    content: ' ';\n    display: block;\n    width: 4px;\n    height: 4px;\n    border-radius: 4px;\n    background-color: blue;\n    position: absolute;\n    transition: all .4s ease;\n    opacity: 0;\n  }\n  .word.active::after {\n    width: 100%;\n    opacity: 1;\n  }\n  .tab {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 60px;\n    display: flex;\n    align-items: baseline;\n    transition: transform .4s ease;\n  } \n</style>\n\n<div class=\"g-container\">\n  <div id=\"tab\" class=\"tab\">\n    <div id=\"home-btn\" class=\"word active\" onclick=\"window._slideTo(0)\">HOME</div>\n    <div id=\"api-btn\" class=\"word\" onclick=\"window._slideTo(1)\">API</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/components/app-nav/template.html":
/*!**********************************************!*\
  !*** ./src/components/app-nav/template.html ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<style>\n  #header {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 48px;\n    z-index: 9999999;\n    box-sizing: border-box;\n    padding: 15px;\n    background: var(--header-background, rgba(0, 0, 0, 0.8));\n    -webkit-backdrop-filter: saturate(180%) blur(20px);\n    backdrop-filter: saturate(180%) blur(20px);\n    display: flex;\n  }\n  * {\n    font-family: 'Lato', sans-serif;\n  }\n  .header-container {\n    display: flex;\n    max-width: 520px;\n    width: 100%;\n    margin: auto;\n    justify-content: space-between;\n  }\n  #logo {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    text-align: center;\n    color: var(--logo-text, #fff);\n  }\n  #dark-switch {\n    display: flex;\n  }\n</style>\n\n<div id=\"header\">\n  <div class=\"header-container\">\n    <menu-icon id=\"menu-icon\"></menu-icon>\n    <div id=\"logo\"><app-logo></app-logo></div>\n    <div id=\"dark-switch\"><dark-switch></dark-switch><lang-switch></lang-switch></div>\n  </div>\n</div>\n<menu-list id=\"menu-list\">\n  <div slot=\"list\">\n    <slot name='list'></slot>\n  </div>\n</menu-list>\n"

/***/ }),

/***/ "./src/components/code-highlight/template.html":
/*!*****************************************************!*\
  !*** ./src/components/code-highlight/template.html ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<style>\n/* PrismJS 1.27.0\nhttps://prismjs.com/download.html#themes=prism-dark&languages=markup+css+clike+javascript+bash */\n/**\n * prism.js Dark theme for JavaScript, CSS and HTML\n * Based on the slides of the talk “/Reg(exp){2}lained/”\n * @author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #e8f7fd;\n\tbackground: none;\n\tfont-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n\tfont-size: 16px;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.7;\n\tfont-weight: 400;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n\tfont-synthesis: none;\n\ttext-rendering: optimizeLegibility;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 12px;\n\tmargin: 0;\n\toverflow: auto;\n\tborder-radius: .5em;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .15em .2em .05em;\n\tborder-radius: .3em;\n\tborder: .13em solid hsl(30, 20%, 40%);\n\tbox-shadow: 1px 1px .3em -.1em black inset;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: #408f00;\n}\n\n.token.function {\n\tcolor: #dcc844;\n}\n\n.token.punctuation {\n\tcolor: #89DDFF;\n}\n\n.token.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol {\n\tcolor: #94b2d1;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #e0965d;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: hsl(40, 90%, 60%);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #F07178;\n\tfont-style: italic;\n}\n\n.token.regex,\n.token.important {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\n.token.deleted {\n\tcolor: red;\n}\n</style>\n\n<div class=\"code-block\">\n  <pre id=\"code\" class=\"language-js\">\n  </pre>\n</div>\n"

/***/ }),

/***/ "./src/components/dark-switch/template.html":
/*!**************************************************!*\
  !*** ./src/components/dark-switch/template.html ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<style>\n  .switch-box {\n    cursor: pointer;\n    display: flex;\n    height: 20px;\n    color: #4d4d4d;\n    margin-right: 15px;\n  }\n  .switch-box svg {\n    zoom: .1;\n    opacity: .8;\n  }\n  .text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175/var(--tw-text-opacity));\n  }\n  .split-line {\n    color: rgb(125 125 125/.5);\n  }\n  .fill-current {\n    fill: currentColor;\n  }\n</style>\n<span id=\"m\" class=\"switch-box\">\n  <svg t=\"1649929666506\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"4563\" width=\"200\" height=\"200\"><path d=\"M512 938.666667c235.648 0 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667z m0-64v-725.333334a362.666667 362.666667 0 0 1 0 725.333334z\" p-id=\"4564\" fill=\"var(--card-text-color, rgba(255, 255, 255, .92))\"></path></svg>\n</span>"

/***/ }),

/***/ "./src/components/lang-switch/template.html":
/*!**************************************************!*\
  !*** ./src/components/lang-switch/template.html ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<style>\n  .lang-btn {\n    cursor: pointer;\n    display: flex;\n    height: 20px;\n  }\n  .lang-btn svg {\n    zoom: .1;\n    opacity: .8;\n  }\n  #popoverLayer {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, .6);\n  }\n  #popover {\n    position: fixed;\n    top: 50vh;\n    left: 50%;\n    width: 200px;\n    min-height: 200px;\n    background-color: rgb(54 54 54);\n    border-radius: 12px;\n    transform: translate(-50%, -50%);\n    box-shadow: 0 0 60px 1px rgb(0 0 0 / 40%);\n    padding: 15px;\n    text-align: center;\n  }\n  #popover h3 {\n    margin: 0;\n    color: rgba(255, 255, 255, .5);\n    font-size: 18px;\n    font-weight: 400;\n  }\n  ul {\n    margin: 0;\n    padding: 20px 0;\n  }\n  li {\n    list-style: none;\n    color: #fff;\n    font-size: 24px;\n    font-weight: 400;\n    border-bottom: 1px solid rgba(255, 255, 255, .1);\n    line-height: 50px;\n  }\n</style>\n<span id=\"m\" class=\"lang-btn\">\n  <svg t=\"1649923591357\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3023\" width=\"200\" height=\"200\"><path d=\"M531 703.2c0.8-1.2 1.8-2.6 2.4-3.8 0.8-1.4 1.4-2.6 2-4 0.6-1.4 1.2-2.8 1.6-4.2 0.4-1.4 1-2.8 1.2-4.4 0.4-1.4 0.6-3 0.8-4.4 0.2-1.6 0.4-3 0.4-4.6v-4.6c0-1.6-0.2-3-0.4-4.6-0.2-1.4-0.6-3-1-4.4-0.4-1.4-0.8-3-1.4-4.4l-1.8-4.2c-0.6-1.4-1.4-2.6-2.2-4-0.8-1.2-1.6-2.6-2.6-3.8-1-1.2-1.8-2.4-3-3.4-1-1.2-2.2-2.2-3.2-3.2-1.2-1-2.4-2-3.6-2.8-0.4-0.4-31.6-23.4-77-73.2 83.6-113.2 131-242 150.4-302.6h68c1.6 0 3 0 4.6-0.2 1.6-0.2 3-0.4 4.6-0.6 1.4-0.2 3-0.6 4.4-1.2 1.4-0.4 2.8-1 4.2-1.6 1.4-0.6 2.8-1.2 4.2-2 1.4-0.8 2.6-1.4 4-2.4 1.2-0.8 2.4-1.8 3.6-2.8 1.2-1 2.2-2 3.4-3 1-1 2-2.2 3-3.4 1-1.2 1.8-2.4 2.8-3.6 0.8-1.2 1.6-2.6 2.4-4 0.8-1.4 1.4-2.8 2-4.2 0.6-1.4 1-2.8 1.6-4.2 0.4-1.4 0.8-3 1.2-4.4s0.6-3 0.6-4.6c0.2-1.6 0.2-3 0.2-4.6s0-3-0.2-4.6c-0.2-1.6-0.4-3-0.6-4.6s-0.6-3-1.2-4.4c-0.4-1.4-1-2.8-1.6-4.2-0.6-1.4-1.2-2.8-2-4.2-0.8-1.4-1.4-2.6-2.4-4-0.8-1.2-1.8-2.4-2.8-3.6-1-1.2-2-2.2-3-3.4-1-1-2.2-2-3.4-3s-2.4-1.8-3.6-2.8c-1.2-0.8-2.6-1.6-4-2.4-1.4-0.8-2.8-1.4-4.2-2-1.4-0.6-2.8-1-4.2-1.6-1.4-0.4-3-0.8-4.4-1.2-1.4-0.2-3-0.6-4.6-0.6-1.6-0.2-3-0.2-4.6-0.2H417.4V127.6c0-1.6 0-3-0.2-4.6-0.2-1.6-0.4-3-0.6-4.6-0.2-1.4-0.6-3-1.2-4.4-0.4-1.4-1-2.8-1.6-4.2s-1.2-2.8-2-4.2c-0.8-1.4-1.4-2.6-2.4-4-0.8-1.2-1.8-2.4-2.8-3.6-1-1.2-2-2.2-3-3.4-1-1-2.2-2-3.4-3-1.2-1-2.4-1.8-3.6-2.8-1.2-0.8-2.6-1.6-4-2.4s-2.8-1.4-4.2-2c-1.4-0.6-2.8-1-4.2-1.6-1.4-0.4-3-0.8-4.4-1.2-1.4-0.2-3-0.6-4.6-0.6-1.6-0.2-3-0.2-4.6-0.2-1.6 0-3 0-4.6 0.2-1.6 0.2-3 0.4-4.6 0.6-1.4 0.2-3 0.6-4.4 1.2-1.4 0.4-2.8 1-4.2 1.6-1.4 0.6-2.8 1.2-4.2 2s-2.6 1.4-4 2.4c-1.2 0.8-2.4 1.8-3.6 2.8-1.2 1-2.2 2-3.4 3s-2 2.2-3 3.4c-1 1.2-1.8 2.4-2.8 3.6-0.8 1.2-1.6 2.6-2.4 4-0.8 1.4-1.4 2.8-2 4.2-0.6 1.4-1 2.8-1.6 4.2-0.4 1.4-0.8 3-1.2 4.4s-0.6 3-0.6 4.6c-0.2 1.6-0.2 3-0.2 4.6v42.2H80c-1.6 0-3 0-4.6 0.2-1.6 0.2-3 0.4-4.6 0.6-1.4 0.2-3 0.6-4.4 1.2-1.4 0.4-2.8 1-4.2 1.6-1.4 0.6-2.8 1.2-4.2 2-1.4 0.8-2.6 1.4-4 2.4-1.2 0.8-2.4 1.8-3.6 2.8-1.2 1-2.2 2-3.4 3-1 1-2 2.2-3 3.4-1 1.2-1.8 2.4-2.8 3.6-0.8 1.2-1.6 2.6-2.4 4-0.8 1.4-1.4 2.8-2 4.2s-1 2.8-1.6 4.2c-0.4 1.4-0.8 3-1.2 4.4-0.2 1.4-0.6 3-0.6 4.6-0.2 1.6-0.2 3-0.2 4.6 0 1.6 0 3 0.2 4.6s0.4 3 0.6 4.6c0.2 1.4 0.6 3 1.2 4.4 0.4 1.4 1 2.8 1.6 4.2 0.6 1.4 1.2 2.8 2 4.2 0.8 1.4 1.4 2.6 2.4 4 0.8 1.2 1.8 2.4 2.8 3.6s2 2.2 3 3.4c1 1 2.2 2 3.4 3 1.2 1 2.4 1.8 3.6 2.8s2.6 1.6 4 2.4c1.4 0.8 2.8 1.4 4.2 2 1.4 0.6 2.8 1 4.2 1.6s3 0.8 4.4 1.2c1.4 0.2 3 0.6 4.6 0.6 1.6 0.2 3 0.2 4.6 0.2h416c-20 56.8-57 146.6-113.4 228.6-66.2-88-90.8-144.8-91-145.2-0.6-1.4-1.2-2.8-2-4-0.8-1.4-1.6-2.6-2.4-3.8-0.8-1.2-1.8-2.4-2.8-3.6-1-1.2-2-2.2-3-3.4-1-1-2.2-2-3.4-3s-2.4-1.8-3.6-2.6-2.6-1.6-4-2.2c-1.4-0.6-2.8-1.4-4.2-1.8-1.4-0.6-2.8-1-4.2-1.4-1.4-0.4-3-0.8-4.4-1-1.4-0.2-3-0.4-4.4-0.6-1.6-0.2-3-0.2-4.6-0.2-1.6 0-3 0-4.6 0.2-1.6 0.2-3 0.4-4.4 0.6-1.4 0.4-3 0.6-4.4 1.2s-2.8 1-4.2 1.6-2.8 1.2-4 2c-1.4 0.8-2.6 1.4-3.8 2.4-1.2 0.8-2.4 1.8-3.6 2.8-1.2 1-2.2 2-3.4 3-1 1-2 2.2-3 3.4-1 1.2-1.8 2.4-2.6 3.6s-1.6 2.6-2.4 3.8c-0.8 1.4-1.4 2.6-2 4-0.6 1.4-1 2.8-1.6 4.2-0.4 1.4-0.8 3-1.2 4.4-0.2 1.4-0.6 3-0.6 4.4-0.2 1.6-0.2 3-0.2 4.6s0 3 0.2 4.6 0.4 3 0.6 4.4c0.2 1.4 0.6 3 1 4.4s1 2.8 1.4 4.2c1.2 3 30.6 72.2 111.6 177 2 2.6 3.8 5 5.8 7.4-82.8 93.6-164 151.6-198 170.4-1.4 0.8-2.6 1.6-3.8 2.4-1.2 0.8-2.4 1.8-3.6 2.8-1.2 1-2.2 2-3.4 3-1 1-2 2.2-3 3.4-1 1.2-1.8 2.4-2.6 3.6-0.8 1.2-1.6 2.6-2.4 4-0.8 1.4-1.4 2.8-2 4.2-0.6 1.4-1 2.8-1.6 4.4s-0.8 3-1 4.4c-0.2 1.4-0.4 3-0.6 4.6-0.2 1.6-0.2 3-0.2 4.6 0 1.6 0 3 0.2 4.6 0.2 1.6 0.4 3 0.8 4.6 0.4 1.4 0.6 3 1.2 4.4 0.4 1.4 1 2.8 1.6 4.2s1.2 2.8 2 4.2c0.8 1.4 1.6 2.6 2.4 3.8 0.8 1.2 1.8 2.4 2.8 3.6 1 1.2 2 2.2 3 3.4 1 1 2.2 2 3.4 3 1.2 1 2.4 1.8 3.6 2.6 1.2 0.8 2.6 1.6 4 2.4 1.4 0.8 2.8 1.4 4.2 2 1.4 0.6 2.8 1 4.4 1.4 1.4 0.4 3 0.8 4.4 1 1.4 0.2 3 0.4 4.6 0.6 1.6 0.2 3 0.2 4.6 0.2 1.6 0 3-0.2 4.6-0.2 1.6-0.2 3-0.4 4.6-0.8 1.4-0.4 3-0.6 4.4-1.2 1.4-0.4 2.8-1 4.2-1.6 1.4-0.6 2.8-1.2 4.2-2 4.6-2.4 102.6-56.8 214.4-180.6 47.6 50.8 80.2 74.8 82.2 76.2 1.2 0.8 2.6 1.8 3.8 2.4 1.4 0.8 2.6 1.4 4 2.2l4.2 1.8c1.4 0.4 2.8 1 4.4 1.2 1.4 0.4 3 0.6 4.4 0.8 1.6 0.2 3 0.4 4.6 0.4h4.6c1.6 0 3-0.2 4.6-0.4 1.6-0.2 3-0.6 4.4-1s3-0.8 4.4-1.4l4.2-1.8c1.4-0.6 2.8-1.4 4-2.2 1.2-0.8 2.6-1.6 3.8-2.6 1.2-1 2.4-1.8 3.4-3 1.2-1 2.2-2.2 3.2-3.2 0.4-2.6 1.2-3.8 2.2-5z m141.2 40.2l70-169.4 70 169.4h-140z m302.8 151.2l-189.8-459.8c-0.8-2.2-1.8-4.2-3-6.2s-2.4-3.8-4-5.6-3-3.4-4.8-5c-1.6-1.6-3.4-3-5.4-4.2-1.8-1.2-3.8-2.4-6-3.4-2-1-4.2-1.8-6.4-2.4-2.2-0.6-4.4-1.2-6.6-1.4-2.2-0.4-4.6-0.6-6.8-0.6s-4.6 0.2-6.8 0.6c-2.2 0.4-4.4 0.8-6.6 1.4-2.2 0.6-4.4 1.4-6.4 2.4s-4 2.2-6 3.4c-1.8 1.2-3.6 2.6-5.4 4.2-1.6 1.6-3.2 3.2-4.8 5-1.4 1.8-2.8 3.6-4 5.6-1.2 2-2.2 4-3 6.2l-189.8 459.8c-0.6 1.4-1.2 2.8-1.6 4.2-0.4 1.4-0.8 3-1.2 4.4s-0.6 3-0.6 4.6c-0.2 1.6-0.2 3-0.2 4.6 0 1.6 0 3 0.2 4.6 0.2 1.6 0.4 3 0.6 4.6 0.2 1.4 0.6 3 1.2 4.4 0.4 1.4 1 2.8 1.6 4.4s1.2 2.8 2 4.2c0.8 1.4 1.4 2.6 2.4 4 0.8 1.2 1.8 2.4 2.8 3.6 1 1.2 2 2.4 3 3.4s2.2 2.2 3.4 3c1.2 1 2.4 1.8 3.6 2.8 1.2 0.8 2.6 1.6 4 2.4 1.4 0.8 2.8 1.4 4.2 2 1.4 0.6 2.8 1 4.4 1.6 1.4 0.4 3 0.8 4.4 1.2 1.4 0.2 3 0.6 4.6 0.6 1.6 0.2 3 0.2 4.6 0.2s3 0 4.6-0.2c1.6-0.2 3-0.4 4.6-0.6 1.4-0.4 3-0.6 4.4-1.2 1.4-0.4 2.8-1 4.2-1.6 1.4-0.6 2.8-1.2 4.2-2 1.4-0.8 2.6-1.6 4-2.4s2.4-1.8 3.6-2.8c1.2-1 2.2-2 3.4-3 1-1 2-2.2 3-3.4 1-1.2 1.8-2.4 2.8-3.6 0.8-1.2 1.6-2.6 2.4-4 0.8-1.4 1.4-2.8 2-4.2l38.6-93.6h216.6l38.6 93.6c0.8 2.2 1.8 4.2 3 6.2s2.4 3.8 4 5.6c1.4 1.8 3 3.4 4.8 5 1.6 1.6 3.4 3 5.4 4.2 1.8 1.2 3.8 2.4 6 3.4 2 1 4.2 1.8 6.4 2.4 2.2 0.6 4.4 1.2 6.6 1.4 2.2 0.4 4.6 0.6 6.8 0.6h2.8c1 0 1.8-0.2 2.8-0.2 1-0.2 1.8-0.2 2.8-0.4 1-0.2 1.8-0.4 2.8-0.6 1-0.2 1.8-0.4 2.8-0.8 1-0.2 1.8-0.6 2.6-1s1.8-0.8 2.6-1.2c0.8-0.4 1.8-0.8 2.6-1.2 0.8-0.4 1.6-1 2.4-1.4s1.6-1 2.4-1.6c0.8-0.6 1.6-1.2 2.2-1.8 0.8-0.6 1.4-1.2 2.2-1.8 0.8-0.6 1.4-1.2 2-2l2-2c0.6-0.8 1.2-1.4 1.8-2.2 0.6-0.8 1.2-1.6 1.6-2.4 0.6-0.8 1-1.6 1.6-2.4 0.4-0.8 1-1.6 1.4-2.6 0.4-0.8 0.8-1.8 1.2-2.6 0.4-0.8 0.8-1.8 1-2.6 0.4-0.8 0.6-1.8 0.8-2.8 0.2-1 0.6-1.8 0.8-2.8 0.2-1 0.4-1.8 0.6-2.8 0.2-1 0.2-1.8 0.4-2.8 0-1 0.2-1.8 0.2-2.8v-2.8c0-1 0-1.8-0.2-2.8 0-1-0.2-1.8-0.4-2.8-0.2-1-0.4-1.8-0.6-2.8-0.2-1-0.4-1.8-0.6-2.8-0.2-1-0.6-1.8-0.8-2.8-1-1.4-1.2-2.2-1.6-3z\" p-id=\"3024\" fill=\"var(--card-text-color, rgba(255, 255, 255, .92))\"></path></svg>\n</span>\n<div id=\"popoverLayer\">\n  <div id=\"popover\">\n    <h3>Transfer Language</h3>\n    <ul>\n      <li data-lang=\"en\">English</li>\n      <li data-lang=\"zh-CN\">简体中文</li>\n      <li data-lang=\"JP\">日本語</li>\n    </ul>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/components/menu-icon/template.html":
/*!************************************************!*\
  !*** ./src/components/menu-icon/template.html ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<style>\n:host {\n  width: 17px;\n}\n\n#m {\n  margin: 0;\n  width: inherit;\n  position: relative;\n  display: inline-block;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  -o-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n  cursor: var(--menu-button-cursor, default);\n  transition: all 0.2s ease-in-out;\n  -webkit-tap-highlight-color: transparent;\n  opacity: 0.8;\n}\n\n/* this trick makes the height 75% of the width (4:3 ratio) */\n#m:after {\n  padding-top: 75%;\n  display: block;\n  content: \"\";\n}\n\n@media (hover: hover) {\n  :host(:hover) {\n    opacity: 0.75;\n  }\n}\n\n#m span {\n  display: block;\n  position: absolute;\n  height: 1px;\n  width: 100%;\n  background: var(--menu-button-color, #fff);\n  border-radius: 0.5px;\n  opacity: 1;\n  left: 0;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96), -webkit-transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n  -moz-transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n  -o-transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n  transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);\n\n}\n\n#m span:nth-child(1) {\n  top: 0%;\n}\n\n#m span:nth-child(2),\n#m span:nth-child(3) {\n  top: 40%;\n  width: 80%;\n}\n\n#m span:nth-child(4) {\n  top: 80%;\n  width: 60%;\n}\n\n:host([open]) #m span:nth-child(1) {\n  top: 40%;\n  width: 0%;\n  left: 50%;\n}\n\n:host([open]) #m span:nth-child(2) {\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n  width: 100%;\n}\n\n:host([open]) #m span:nth-child(3) {\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  width: 100%;\n}\n\n:host([open]) #m span:nth-child(4) {\n  top: 40%;\n  width: 0%;\n  left: 50%;\n}\n</style>\n\n<div id='m'>\n  <span></span>\n  <span></span>\n  <span></span>\n  <span></span>\n</div>\n"

/***/ }),

/***/ "./src/components/menu-list/template.html":
/*!************************************************!*\
  !*** ./src/components/menu-list/template.html ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<style>\n:host {\n  width: 100%;\n}\n\n#wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  width: 100vw;\n  background: var(--background, rgba(0, 0, 0, 0.8));\n  z-index: 999999;\n  transition: background .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .56s cubic-bezier(0.52, 0.16, 0.24, 1);\n  overflow-y: auto;\n}\n\n:host([open]) #wrapper {\n  background: var(--background, rgba(0, 0, 0, 1));\n  height: 100vh;\n}\n</style>\n\n<div id='wrapper'>\n  <slot name='list'></slot>\n</div>\n"

/***/ }),

/***/ "./src/doc/css.html":
/*!**************************!*\
  !*** ./src/doc/css.html ***!
  \**************************/
/***/ ((module) => {

module.exports = "<style>\n  html,\n  body {\n    height: 100%;\n    margin: 0;\n    overflow: auto;\n  }\n\n  html {\n    background-color: var(--background, #000);\n  }\n\n  #page-content {\n    min-height: 100%;\n  }\n\n  #header {\n    position: fixed;\n    height: 40px;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding-top: calc(20px + constant(safe-area-inset-top));\n    padding-top: calc(20px + env(safe-area-inset-top));\n    background-color: var(--header-background, rgba(0, 0, 0, .5));\n    backdrop-filter: saturate(180%) blur(20px);\n    -webkit-backdrop-filter: saturate(180%) blur(20px);\n    z-index: 99;\n  }\n\n  * {\n    font-family: 'Lato', sans-serif;\n  }\n\n  .header-inner {\n    display: flex;\n    max-width: 500px;\n    margin: 0 auto;\n    padding: 0 20px;\n  }\n\n  .placeholder {\n    width: 100%;\n    height: calc(50px + constant(safe-area-inset-top));\n    height: calc(50px + env(safe-area-inset-top));\n  }\n\n  .back-btn {\n    display: flex;\n    height: 21px;\n    cursor: pointer;\n  }\n\n  .back-icon {\n    width: 21px;\n    height: 21px;\n    background-image: url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMTJweCcgaGVpZ2h0PScyMnB4JyB2aWV3Qm94PScwIDAgMTIgMjInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PHRpdGxlPlBhdGg8L3RpdGxlPjxnIGlkPSdTeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz48ZyBpZD0nT3ZlcnJpZGVzL05hdmlnYXRpb24tQmFyL0xlZnQvQmFjay1CdXR0b24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC05LjAwMDAwMCwgLTExLjAwMDAwMCknIGZpbGw9JyMwMDdBRkYnIGZpbGwtcnVsZT0nbm9uemVybyc+PGcgaWQ9J1Bpbi1MZWZ0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg5LjAwMDAwMCwgMTEuNTAwMDAwKSc+PHBhdGggZD0nTTMuNjIxMzIwMzQsMTAuNSBMMTEuNTYwNjYwMiwyLjU2MDY2MDE3IEMxMi4xNDY0NDY2LDEuOTc0ODczNzMgMTIuMTQ2NDQ2NiwxLjAyNTEyNjI3IDExLjU2MDY2MDIsMC40MzkzMzk4MjggQzEwLjk3NDg3MzcsLTAuMTQ2NDQ2NjA5IDEwLjAyNTEyNjMsLTAuMTQ2NDQ2NjA5IDkuNDM5MzM5ODMsMC40MzkzMzk4MjggTDAuNDM5MzM5ODI4LDkuNDM5MzM5ODMgQy0wLjE0NjQ0NjYwOSwxMC4wMjUxMjYzIC0wLjE0NjQ0NjYwOSwxMC45NzQ4NzM3IDAuNDM5MzM5ODI4LDExLjU2MDY2MDIgTDkuNDM5MzM5ODMsMjAuNTYwNjYwMiBDMTAuMDI1MTI2MywyMS4xNDY0NDY2IDEwLjk3NDg3MzcsMjEuMTQ2NDQ2NiAxMS41NjA2NjAyLDIwLjU2MDY2MDIgQzEyLjE0NjQ0NjYsMTkuOTc0ODczNyAxMi4xNDY0NDY2LDE5LjAyNTEyNjMgMTEuNTYwNjYwMiwxOC40MzkzMzk4IEwzLjYyMTMyMDM0LDEwLjUgWicgaWQ9J1BhdGgnPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=\");\n    background-size: contain;\n    background-repeat: no-repeat;\n    cursor: pointer;\n  }\n\n  .back-text {\n    line-height: 23px;\n    font-size: 17px;\n    color: #007AFF;\n  }\n\n  .doc {\n    margin: 0 auto;\n    padding: 20px 12px;\n    max-width: 520px;\n    color: var(--main-color, #fff);\n    font-family: SF Pro SC, SF Pro Text, SF Pro Icons, PingFang SC, Helvetica Neue, Helvetica, Arial, sans-serif;\n    color: var(--docs-p-color, rgb(190, 190, 190));\n    font-size: 17px;\n    line-height: 1.4705882353;\n    font-weight: 400;\n    font-synthesis: none;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .doc-title {\n    font-size: 17px;\n    margin-bottom: 20px;\n    position: absolute;\n    font-weight: bold;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 2;\n    max-width: 50%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n  }\n\n  .doc-text {\n    color: color(--main-color .5);\n  }\n\n  .doc-code {\n    margin: 12px 0;\n    padding: 1px;\n    border-radius: 12px;\n    background-color: var(--code-background, #030303);\n    transform: translate3d(0, 0, 0);\n    box-shadow: inset 0 -1px 5px rgb(0 0 0 / 50%);\n    border: 0.5px solid rgba(0, 0, 0, .6);\n  }\n\n  .card {\n    box-sizing: border-box;\n    min-height: 100px;\n    max-width: 520px;\n    margin: auto;\n    padding: 12px 20px 0;\n    margin-bottom: 12px;\n    border-radius: 16px;\n    border: 0.5px solid rgba(255, 255, 255, .05);\n    background: var(--card-background, rgba(255, 255, 255, .1));\n    overflow: hidden;\n  }\n\n  .card-title {\n    font-size: 32px;\n    font-weight: 400;\n    margin: 0;\n    padding: 0;\n    color: var(--card-title, rgba(255, 255, 255, .3));\n    -webkit-font-smoothing: antialiased;\n  }\n\n  .tips {\n    position: relative;\n    border-radius: 14px;\n    padding: 20px 20px 15px 40px;\n    background-color: rgb(117 117 117 / 10%);\n    margin: 20px 0;\n    font-size: 14px;\n    opacity: .5;\n  }\n\n  .tips:before {\n    content: \"\\24d8\";\n    position: absolute;\n    font-weight: 600;\n    font-size: 15px;\n    top: 20px;\n    left: 17px;\n  }\n\n  p {\n    margin: 24px 0;\n  }\n\n  small {\n    color: #555;\n  }\n\n  hr {\n    border: 0;\n    background: var(--docs-hr-color, rgba(255, 255, 255, 0.1));\n    height: 0.5px;\n    margin: 25px 0;\n  }\n\n  ul {\n    padding-left: 25px;\n    list-style: none;\n  }\n\n  li {\n    position: relative;\n    margin: 15px 0;\n    list-style: none;\n    font-size: 17px;\n  }\n\n  ul>li:before {\n    content: \" \";\n    position: absolute;\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background-color: rgb(134 134 134);\n    transition: background-color .5s;\n    left: -1.25rem;\n    top: 0.75rem;\n  }\n\n  h1 {\n    font-size: 32px;\n    margin-bottom: 20px;\n  }\n\n  h3 {\n    font-size: 21px;\n  }\n\n  a {\n    text-decoration: underline;\n    color: #007AFF;\n    font-weight: bold;\n  }\n\n  a::before {\n    content: '?';\n    font-size: 10px;\n    display: inline-block;\n    background: rgb(80 80 80 / 50%);\n    border-radius: 20px;\n    height: 14px;\n    width: 14px;\n    color: rgba(255, 255, 255, .37);\n    overflow: hidden;\n    line-height: 14px;\n    text-align: center;\n    transform: scale(0.9);\n  }\n\n  b {\n    color: #007AFF;\n    font-weight: bold;\n    font-family: system-ui;\n  }\n\n  img {\n    width: 100%;\n  }\n\n  b.excl {\n    background: #ed143d;\n  }\n\n  p.copyright {\n    margin-top: 15px;\n    opacity: .5;\n    padding: 0;\n  }\n\n  p.copyright,\n  p.copyright a {\n    font-size: 14px;\n    text-decoration: none;\n    color: var(--main-color, #f5f5f7);\n  }\n\n  p.copyright a {\n    font-weight: 600;\n  }\n</style>"

/***/ }),

/***/ "./src/doc/foot.html":
/*!***************************!*\
  !*** ./src/doc/foot.html ***!
  \***************************/
/***/ ((module) => {

module.exports = "<div class=\"card\">\n  <p class=\"copyright\">\n    This project is licensed under <a href=\"https://opensource.org/licenses/MIT\" target=\"_blank\" rel=\"noopener\">MIT\n      License</a><br> Copyright © 2010-2022 Lath\n  </p>\n</div>\n<!-- <script>\n  const header = document.getElementById('header')\n  const page = document.getElementById('page-content')\n  const show = () => {\n    const id = /id\\=(\\w+)/.exec(parent.location.search)?.[1]\n    const currentEl = document.getElementById(id)\n    if (page && currentEl) {\n      page.innerHTML = currentEl.innerHTML\n    }\n    header.style.opacity = '1'\n    document.body.scrollTop = document.documentElement.scrollTop = 0\n  }\n  window.addEventListener('message', (e) => {\n    if (e.data.type === 'applet-will-show') {\n      show()\n    } else if (e.data.type === 'applet-will-hide') {\n      header.style.opacity = '0'\n    }\n  })\n  show()\n</script> -->"

/***/ }),

/***/ "./src/empty/html.html":
/*!*****************************!*\
  !*** ./src/empty/html.html ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<style>\nhtml {\n  background: radial-gradient(#3f010c, #000000);\n  background-size: cover;\n  height: 100%;\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  padding-top: calc(20px + constant(safe-area-inset-top));\n  padding-top: calc(20px + env(safe-area-inset-top));\n}\n.header-inner {\n  display: flex;\n  max-width: 500px;\n  padding: 0 20px;\n}\n.placeholder {\n  width: 100%;\n  height: calc(50px + constant(safe-area-inset-top));\n  height: calc(50px + env(safe-area-inset-top));\n}\n.back-btn {\n  display: flex;\n  height: 21px;\n  cursor: pointer;\n}\n.back-icon {\n  width: 21px;\n  height: 21px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMTJweCcgaGVpZ2h0PScyMnB4JyB2aWV3Qm94PScwIDAgMTIgMjInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PHRpdGxlPlBhdGg8L3RpdGxlPjxnIGlkPSdTeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz48ZyBpZD0nT3ZlcnJpZGVzL05hdmlnYXRpb24tQmFyL0xlZnQvQmFjay1CdXR0b24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC05LjAwMDAwMCwgLTExLjAwMDAwMCknIGZpbGw9JyMwMDdBRkYnIGZpbGwtcnVsZT0nbm9uemVybyc+PGcgaWQ9J1Bpbi1MZWZ0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg5LjAwMDAwMCwgMTEuNTAwMDAwKSc+PHBhdGggZD0nTTMuNjIxMzIwMzQsMTAuNSBMMTEuNTYwNjYwMiwyLjU2MDY2MDE3IEMxMi4xNDY0NDY2LDEuOTc0ODczNzMgMTIuMTQ2NDQ2NiwxLjAyNTEyNjI3IDExLjU2MDY2MDIsMC40MzkzMzk4MjggQzEwLjk3NDg3MzcsLTAuMTQ2NDQ2NjA5IDEwLjAyNTEyNjMsLTAuMTQ2NDQ2NjA5IDkuNDM5MzM5ODMsMC40MzkzMzk4MjggTDAuNDM5MzM5ODI4LDkuNDM5MzM5ODMgQy0wLjE0NjQ0NjYwOSwxMC4wMjUxMjYzIC0wLjE0NjQ0NjYwOSwxMC45NzQ4NzM3IDAuNDM5MzM5ODI4LDExLjU2MDY2MDIgTDkuNDM5MzM5ODMsMjAuNTYwNjYwMiBDMTAuMDI1MTI2MywyMS4xNDY0NDY2IDEwLjk3NDg3MzcsMjEuMTQ2NDQ2NiAxMS41NjA2NjAyLDIwLjU2MDY2MDIgQzEyLjE0NjQ0NjYsMTkuOTc0ODczNyAxMi4xNDY0NDY2LDE5LjAyNTEyNjMgMTEuNTYwNjYwMiwxOC40MzkzMzk4IEwzLjYyMTMyMDM0LDEwLjUgWicgaWQ9J1BhdGgnPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.back-text {\n  line-height: 23px;\n  font-size: 17px;\n  color: #007AFF;\n}\nh1 {\n  color: #fff;\n  font-size: 60px;\n  text-align: center;\n  line-height: 70vh;\n}\n</style>\n\n<div class=\"header\">\n  <div class=\"header-inner\">\n    <div class=\"back-btn\" onclick=\"javascript: history.back()\">\n      <div class=\"back-icon\"></div>\n      <span class=\"back-text\">返回</span>\n    </div>\n  </div>\n</div>\n<div>\n  <h1>Hello!</h1>\n</div>"

/***/ }),

/***/ "./src/frameworks/css.html":
/*!*********************************!*\
  !*** ./src/frameworks/css.html ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<style>\n  .menu-list {\n    padding: 80px 30px;\n    max-width: 520px;\n    margin: 0 auto;\n  }\n\n  .item-list {\n    padding: 0;\n  }\n\n  .item-list li {\n    list-style: none;\n    transition: opacity .3091s cubic-bezier(0.32, 0.08, 0.24, 1) .03s, transform .3455s cubic-bezier(0.32, 0.08, 0.24, 1) .02s, -webkit-transform .3455s cubic-bezier(0.32, 0.08, 0.24, 1) .02s;\n  }\n\n  .item-list a {\n    display: flex;\n    color: var(--main-color, #f5f5f7);\n    font-size: 19px;\n    line-height: 2.7;\n    font-weight: 400;\n    letter-spacing: -.022em;\n    height: 54px;\n    opacity: .8;\n    text-decoration: none;\n    white-space: nowrap;\n    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n    font-synthesis: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    direction: ltr;\n    text-align: left;\n    border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);\n    border-color: var(--menu-hr-color, rgba(255, 255, 255, 0.2));\n    width: 100%;\n  }\n\n  .item-list a svg {\n    margin-top: 12px;\n    margin-right: 15px;\n    width: 25px;\n  }\n\n  h2 {\n    font-size: 28px;\n    color: var(--main-color, #fff);\n    margin-top: 0;\n  }\n\n  h4 {\n    color: var(--main-color, #fff);\n  }\n\n  .payType {\n    padding: 7px 0 0;\n    cursor: pointer;\n  }\n\n  .payType[tap-highlight] {\n    background-color: var(--card-item-hover, rgba(255, 255, 255, .1)) !important;\n  }\n\n  @media (pointer: fine) {\n    .payType:hover {\n      background-color: var(--card-item-hover, rgba(255, 255, 255, .1));\n    }\n  }\n\n  .icon {\n    height: 30px;\n  }\n\n  hr {\n    border: 0;\n    border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);\n    border-color: var(--menu-hr-color, rgba(255, 255, 255, 0.2));\n  }\n\n  p {\n    margin: 0 auto;\n    padding: 10px 0;\n    color: var(--main-color, #f5f5f7);\n  }\n\n  p.title {\n    font-size: 19px;\n    font-weight: bold;\n    opacity: .7;\n  }\n\n  p.copyright {\n    margin-top: 20px;\n    opacity: .5;\n  }\n\n  p.copyright, p.copyright a {\n    font-size: 14px;\n    text-decoration: none;\n    color: var(--main-color, #f5f5f7);\n  }\n\n  #app-switcher {\n    position: fixed;\n    bottom: 40px;\n    right: 15px;\n    height: 44px;\n    width: 44px;\n    background-color: rgb(128 128 128 / 50%);\n    border-radius: 22px;\n    box-shadow: 0 0 8px rgb(0 0 0 / 50%);\n    -webkit-backdrop-filter: saturate(180%) blur(20px);\n    backdrop-filter: saturate(180%) blur(20px);\n  }\n  .icon-box-1 {\n    margin: 12px;\n    width: 20px;\n    height: 20px;\n    border: 2px solid rgb(195, 195, 195);\n    box-sizing: border-box;\n    border-radius: 6px;\n    box-shadow: 0 0 6px rgb(0 0 0 / 20%);\n  }\n  .icon-box-2 {\n    margin: 2px;\n    width: 12px;\n    height: 12px;\n    border: 2px solid #fff;\n    box-sizing: border-box;\n    border-radius: 4px;\n  }\n</style>\n\n"

/***/ }),

/***/ "./src/frameworks/html.html":
/*!**********************************!*\
  !*** ./src/frameworks/html.html ***!
  \**********************************/
/***/ ((module) => {

module.exports = "<app-nav>\n  <div slot=\"list\">\n    <div class=\"menu-list\">\n      <ul class=\"item-list\">\n        <li>\n          <a href=\"https://lathgroup.slack.com/\" target=\"_parent\">\n            <svg t=\"1650539392887\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n              p-id=\"1284\" width=\"200\" height=\"200\">\n              <path\n                d=\"M244.224 643.84c0 59.221333-45.098667 107.264-100.778667 107.264C87.808 751.104 42.666667 703.061333 42.666667 643.84c0-59.221333 45.141333-107.264 100.778666-107.264h100.778667v107.264zM294.613333 643.84c0-59.306667 45.141333-107.306667 100.821334-107.306667 55.637333 0 100.778667 48.042667 100.778666 107.264v268.288c0 59.264-45.141333 107.306667-100.778666 107.306667-55.68 0-100.821333-48.042667-100.821334-107.306667v-268.288z\"\n                fill=\"#E01E5A\" p-id=\"1285\"></path>\n              <path\n                d=\"M395.392 214.613333c-55.637333 0-100.778667-48.042667-100.778667-107.306666C294.613333 48.042667 339.754667 0 395.392 0c55.68 0 100.821333 48.042667 100.821333 107.306667V214.613333H395.392zM395.392 268.245333c55.68 0 100.821333 48.085333 100.821333 107.306667 0 59.306667-45.141333 107.306667-100.821333 107.306667H143.445333C87.808 482.858667 42.666667 434.816 42.666667 375.552c0-59.221333 45.141333-107.306667 100.778666-107.306667h251.946667z\"\n                fill=\"#36C5F0\" p-id=\"1286\"></path>\n              <path\n                d=\"M798.549333 375.552c0-59.221333 45.098667-107.306667 100.778667-107.306667 55.637333 0 100.778667 48.085333 100.778667 107.306667 0 59.306667-45.141333 107.306667-100.778667 107.306667h-100.778667V375.552zM748.16 375.552c0 59.306667-45.141333 107.306667-100.821333 107.306667-55.637333 0-100.778667-48.042667-100.778667-107.306667V107.306667C546.56 48.042667 591.701333 0 647.338667 0c55.68 0 100.821333 48.042667 100.821333 107.306667v268.245333z\"\n                fill=\"#2EB67D\" p-id=\"1287\"></path>\n              <path\n                d=\"M647.381333 804.778667c55.637333 0 100.778667 48.042667 100.778667 107.306666 0 59.264-45.141333 107.306667-100.778667 107.306667-55.68 0-100.821333-48.042667-100.821333-107.306667v-107.306666h100.821333zM647.381333 751.104c-55.68 0-100.821333-48.042667-100.821333-107.306667 0-59.221333 45.141333-107.306667 100.821333-107.306666h251.904c55.68 0 100.778667 48.085333 100.778667 107.306666 0 59.306667-45.098667 107.306667-100.778667 107.306667h-251.904z\"\n                fill=\"#ECB22E\" p-id=\"1288\"></path>\n            </svg> 团队\n          </a>\n        </li>\n        <li>\n          <a href=\"https://twitter.com/lathdev\" target=\"_parent\">\n            <svg t=\"1650016009194\" class=\"icon\" viewBox=\"0 0 1260 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n              p-id=\"17179\" width=\"200\" height=\"200\">\n              <path\n                d=\"M1259.846921 121.148242c-46.524504 20.728739-96.273478 34.547899-148.325646 40.536201 53.434084-31.784067 94.430924-82.454319 113.777747-142.797982-50.209613 29.480874-105.486251 51.13089-164.447999 62.646857A257.584528 257.584528 0 0 0 872.449815 0.000276c-142.797982 0-258.418284 115.620302-258.418284 258.418284 0 20.268101 2.303193 40.075563 6.909579 58.961748C405.82286 306.32498 215.579097 203.602561 87.98219 47.446058c-22.110655 38.233008-35.008538 82.454319-35.008538 129.900099 0 89.824537 45.603227 168.593747 115.159663 215.118251-42.378756-1.381916-81.99368-12.897882-117.002217-32.244706v3.224471c0 125.293713 88.90326 229.398049 207.287393 253.351259-21.650017 5.988302-44.681949 9.212773-68.17452 9.212773-16.582991 0-32.705344-1.842555-48.827697-4.606387 32.705344 102.722419 128.518184 177.345881 241.374653 179.649074-88.442621 69.095798-199.917175 110.553277-321.06514 110.553277-20.728739 0-41.457479-1.381916-61.72558-3.685109 114.238386 73.241546 250.126788 116.08094 396.149241 116.08094 475.379089 0 735.179289-393.846048 735.179289-735.179289 0-11.055328-0.460639-22.571294-0.921277-33.626621 51.13089-36.851092 94.891562-82.454319 129.439461-134.045848z\"\n                fill=\"#55ACEE\" p-id=\"17180\"></path>\n            </svg> Twitter\n          </a>\n        </li>\n      </ul>\n      <!-- <div>\n        <p class=\"title\">Sponsor Lath Research:</p>\n        <div class=\"payType\">\n          <svg class=\"icon\" viewBox=\"0 0 7000 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"11652\"\n            width=\"200\" height=\"200\">\n            <path\n              d=\"M1024.727025 511.98976c0 282.771945-229.217816 511.98976-511.98976 511.98976-282.766825 0-511.98976-229.217816-511.98976-511.98976 0-282.766825 229.222936-511.98976 511.98976-511.98976 282.771945 0 511.98976 229.222936 511.98976 511.98976\"\n              fill=\"#F7931A\" p-id=\"11653\"></path>\n            <path\n              d=\"M637.048379 661.623888a55.842723 55.842723 0 0 1-27.145697 33.417571 55.858083 55.858083 0 0 1-42.827943 4.444071l-144.181437-42.940581 32.122238-107.840403 144.171196 42.945701h0.00512c29.726125 8.852303 46.713946 40.242395 37.856523 69.973641m48.628787-221.00038a55.929761 55.929761 0 0 1 4.438952 42.833063c-8.857423 29.721006-40.262875 46.698586-69.973641 37.861643h-0.00512l-144.176316-42.940582 32.111998-107.840403 144.181436 42.940581a55.888802 55.888802 0 0 1 33.422691 27.145698m64.54143-34.917702c-16.48095-30.458271-43.836563-52.678626-77.01862-62.560029l-19.076738-5.677966 26.705385-89.669887-68.519589-20.407912-26.705386 89.669887-58.49995-17.423012 26.710506-89.669886-16.414392-4.889503-66.49723-19.803763-25.742845 86.434111-81.037739-24.135197-22.870583 76.798464 81.037739 24.140317-83.254655 279.536169-81.037739-24.135197-22.870583 76.803584 81.03262 24.130077-21.723726 72.953421 16.409272 4.889502 66.49723 19.803764 22.691386-76.189196 58.638188 17.463971-22.691387 76.194316 68.243116 20.325993 22.691386-76.194316 19.209856 5.718926a130.255315 130.255315 0 0 0 37.185816 5.452691c21.247575 0 42.295474-5.278614 61.51045-15.677127 30.458271-16.48095 52.673507-43.831443 62.560028-77.023739 10.393392-34.912582 5.263255-70.777464-11.268894-100.298794 30.01284-15.661767 53.927881-42.935461 64.331513-77.863403 9.886522-33.192296 6.251395-68.243115-10.224435-98.696266\"\n              fill=\"#FFFFFF\" p-id=\"11654\"></path>\n          </svg>\n        </div>\n        <div class=\"payType\">\n          <svg class=\"icon\" viewBox=\"0 0 7000 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2591\"\n            width=\"200\" height=\"200\">\n            <path\n              d=\"M3249.722604 229.409369h-232.537679c-15.641548 0-29.197556 11.470468-32.325865 27.112016l-93.849287 595.421589c-2.08554 11.470468 7.299389 21.898167 18.769857 21.898167h118.875764c11.470468 0 20.855397-8.342159 21.898167-18.769858l27.112016-168.928717c2.08554-15.641548 15.641548-27.112016 32.325866-27.112016h72.99389c153.287169 0 240.879837-74.03666 263.820774-221.06721 10.427699-63.608961 0-114.704684-29.197556-150.158859-31.283096-38.582485-89.678208-58.395112-167.885947-58.395112z m27.112016 216.89613c-12.513238 83.421589-76.1222 83.421589-137.645621 83.421589h-35.454175l25.026476-155.372709c1.04277-9.384929 9.384929-16.684318 18.769858-16.684318h15.641547c41.710794 0 81.336049 0 102.191447 23.983707 12.513238 14.598778 15.641548 35.454175 11.470468 64.651731z\"\n              fill=\"#009CDE\" p-id=\"2592\"></path>\n            <path\n              d=\"M1594.84684 229.409369h-232.537678c-15.641548 0-29.197556 11.470468-32.325866 27.112016l-93.849287 595.421589c-2.08554 11.470468 7.299389 21.898167 18.769857 21.898167h110.533605c15.641548 0 29.197556-11.470468 32.325866-27.112017l25.026476-160.586558c2.08554-15.641548 15.641548-27.112016 32.325866-27.112016h72.99389c153.287169 0 240.879837-74.03666 263.820774-221.06721 10.427699-63.608961 0-114.704684-29.197556-150.158859-31.283096-38.582485-89.678208-58.395112-167.885947-58.395112z m27.112016 216.89613c-12.513238 83.421589-76.1222 83.421589-137.645621 83.421589h-35.454175l25.026476-155.372709c1.04277-9.384929 9.384929-16.684318 18.769858-16.684318h15.641548c41.710794 0 81.336049 0 102.191446 23.983707 12.513238 14.598778 15.641548 35.454175 11.470468 64.651731zM2288.288795 443.177189h-111.576375c-9.384929 0-17.727088 7.299389-18.769857 16.684318l-5.213849 31.283096-7.299389-11.470469c-23.983707-34.411405-77.164969-46.924644-131.389002-46.924643-123.046843 0-227.323829 92.806517-248.179226 223.152749-10.427699 64.651731 4.171079 127.217923 41.710794 171.014257 34.411405 39.625255 82.378819 56.309572 139.731161 56.309572 99.063136 0 153.287169-63.608961 153.287169-63.608961l-5.21385 31.283096c-2.08554 11.470468 7.299389 21.898167 18.769858 21.898167h100.105906c15.641548 0 29.197556-11.470468 32.325866-27.112017l60.480652-380.610998c2.08554-10.427699-6.256619-21.898167-18.769858-21.898167z m-154.329939 216.896131c-10.427699 63.608961-61.523422 106.362525-125.132383 106.362525-32.325866 0-58.395112-10.427699-75.079429-30.240326-16.684318-19.812627-22.940937-46.924644-17.727088-78.207739 10.427699-62.566191 61.523422-107.405295 124.089613-107.405295 31.283096 0 57.352342 10.427699 74.03666 30.240326 17.727088 20.855397 25.026477 47.967413 19.812627 79.250509z\"\n              fill=\"#003087\" p-id=\"2593\"></path>\n            <path\n              d=\"M3943.164559 443.177189h-111.576375c-9.384929 0-17.727088 7.299389-18.769857 16.684318l-5.21385 31.283096-7.299389-11.470469c-23.983707-34.411405-77.164969-46.924644-131.389002-46.924643-123.046843 0-227.323829 92.806517-248.179226 223.152749-10.427699 64.651731 4.171079 127.217923 41.710795 171.014257 34.411405 39.625255 82.378819 56.309572 139.73116 56.309572 99.063136 0 153.287169-63.608961 153.28717-63.608961l-5.21385 31.283096c-2.08554 11.470468 7.299389 21.898167 18.769858 21.898167h100.105906c15.641548 0 29.197556-11.470468 32.325866-27.112017l60.480651-380.610998c2.08554-10.427699-6.256619-21.898167-18.769857-21.898167z m-154.329939 216.896131c-10.427699 63.608961-61.523422 106.362525-125.132383 106.362525-32.325866 0-58.395112-10.427699-75.07943-30.240326-16.684318-19.812627-22.940937-46.924644-17.727087-78.207739 10.427699-62.566191 61.523422-107.405295 124.089613-107.405295 31.283096 0 57.352342 10.427699 74.03666 30.240326 17.727088 20.855397 25.026477 47.967413 19.812627 79.250509z\"\n              fill=\"#009CDE\" p-id=\"2594\"></path>\n            <path\n              d=\"M2880.582074 443.177189h-111.576375c-10.427699 0-20.855397 5.213849-27.112016 14.598778l-154.329939 227.323829-65.694501-217.9389c-4.171079-13.556008-16.684318-22.940937-31.283096-22.940937h-109.490835c-13.556008 0-22.940937 13.556008-18.769857 26.069247l123.046843 360.79837-115.747454 162.672098c-9.384929 12.513238 0 30.240326 15.641548 30.240326h111.576375c10.427699 0 20.855397-5.213849 26.069246-13.556008l371.226069-535.983707c11.470468-13.556008 2.08554-31.283096-13.556008-31.283096z\"\n              fill=\"#003087\" p-id=\"2595\"></path>\n            <path\n              d=\"M4074.553561 245.050916l-94.892057 605.849288c-2.08554 11.470468 7.299389 21.898167 18.769857 21.898167h95.934827c15.641548 0 29.197556-11.470468 32.325866-27.112017l93.849287-595.421588c2.08554-11.470468-7.299389-21.898167-18.769857-21.898167h-107.405296c-10.427699 1.04277-18.769857 7.299389-19.812627 16.684317z\"\n              fill=\"#009CDE\" p-id=\"2596\"></path>\n            <path\n              d=\"M782.529121 259.649695c12.513238-79.250509 0-133.474542-42.753564-182.484726C691.808143 22.940937 606.301015 0 496.81018 0H178.765374c-21.898167 0-41.710794 16.684318-44.839104 38.582485L0.451728 879.05499c-3.12831 16.684318 10.427699 31.283096 27.112016 31.283096h196.040733l-13.556008 85.507128c-2.08554 14.598778 9.384929 27.112016 23.983707 27.112016h165.800407c19.812627 0 36.496945-14.598778 39.625255-33.368635l2.08554-8.342159 31.283095-198.126273 2.08554-10.427699c3.12831-19.812627 19.812627-33.368635 39.625255-33.368635h25.026476c160.586558 0 285.718941-64.651731 322.215886-253.393075 15.641548-79.250509 7.299389-144.94501-33.368635-190.826884-12.513238-13.556008-28.154786-26.069246-45.881874-35.454175\"\n              fill=\"#009CDE\" p-id=\"2597\"></path>\n            <path\n              d=\"M782.529121 259.649695c12.513238-79.250509 0-133.474542-42.753564-182.484726C691.808143 22.940937 606.301015 0 496.81018 0H178.765374c-21.898167 0-41.710794 16.684318-44.839104 38.582485L0.451728 879.05499c-3.12831 16.684318 10.427699 31.283096 27.112016 31.283096h196.040733l49.010184-312.830958-1.04277 9.384929c3.12831-21.898167 21.898167-38.582485 44.839104-38.582485h93.849287c183.527495 0 327.429735-74.03666 369.140529-289.89002l3.12831-18.769857\"\n              fill=\"#012169\" p-id=\"2598\"></path>\n            <path\n              d=\"M326.838693 260.692464c2.08554-13.556008 10.427699-23.983707 21.898167-30.240326 5.213849-2.08554 11.470468-4.171079 16.684318-4.171079h250.264766c29.197556 0 57.352342 2.08554 82.378819 6.256619 7.299389 1.04277 14.598778 2.08554 20.855397 4.17108 7.299389 1.04277 13.556008 3.12831 19.812627 5.213849l9.384929 3.128309c12.513238 4.171079 23.983707 9.384929 34.411405 14.598779 12.513238-79.250509 0-133.474542-42.753564-182.484726C691.808143 22.940937 606.301015 0 496.81018 0H178.765374c-21.898167 0-41.710794 16.684318-44.839104 38.582485L0.451728 879.05499c-3.12831 16.684318 10.427699 31.283096 27.112016 31.283096h196.040733l49.010184-312.830958L326.838693 260.692464z\"\n              fill=\"#003087\" p-id=\"2599\"></path>\n          </svg>\n        </div>\n        <div class=\"payType\">\n          <svg class=\"icon\" viewBox=\"0 0 7000 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"12544\"\n            width=\"200\" height=\"200\">\n            <path\n              d=\"M1028.653987 511.98976c0 282.771945-229.222936 511.98976-511.98976 511.98976-282.761705 0-511.98976-229.217816-511.98976-511.98976 0-282.766825 229.228055-511.98976 511.98976-511.98976 282.766825 0 511.98976 229.222936 511.98976 511.98976\"\n              fill=\"#497391\" p-id=\"12545\"></path>\n            <path\n              d=\"M289.970521 575.430411l219.602648-452.358312v567.95536zM743.368173 575.430411l-220.380873 115.597048V122.918502zM289.970521 591.97792l219.602648 109.954921v176.810544zM743.368173 591.97792l-220.380873 286.765465v-176.810544z\"\n              fill=\"#FFFFFF\" p-id=\"12546\"></path>\n          </svg>\n        </div>\n        <div class=\"payType\">\n          <svg class=\"icon\" viewBox=\"0 0 7000 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3131\"\n            width=\"200\" height=\"200\">\n            <path\n              d=\"M395.846 603.585c-3.921 1.98-7.936 2.925-12.81 2.925-10.9 0-19.791-5.85-24.764-14.625l-2.006-3.864-78.106-167.913c-0.956-1.98-0.956-3.865-0.956-5.845 0-7.83 5.928-13.68 13.863-13.68 2.965 0 5.928 0.944 8.893 2.924l91.965 64.43c6.884 3.864 14.82 6.79 23.708 6.79 4.972 0 9.85-0.945 14.822-2.926L861.71 282.479c-77.149-89.804-204.684-148.384-349.135-148.384-235.371 0-427.242 157.158-427.242 351.294 0 105.368 57.361 201.017 147.323 265.447 6.88 4.905 11.852 13.68 11.852 22.45 0 2.925-0.957 5.85-2.006 8.775-6.881 26.318-18.831 69.334-18.831 71.223-0.958 2.92-2.013 6.79-2.013 10.75 0 7.83 5.929 13.68 13.865 13.68 2.963 0 5.928-0.944 7.935-2.925l92.922-53.674c6.885-3.87 14.82-6.794 22.756-6.794 3.916 0 8.889 0.944 12.81 1.98 43.496 12.644 91.012 19.53 139.48 19.53 235.372 0 427.24-157.158 427.24-351.294 0-58.58-17.78-114.143-48.467-163.003l-491.39 280.07-2.963 1.98z\"\n              fill=\"#09BB07\" p-id=\"3132\"></path>\n          </svg>\n        </div>\n      </div> -->\n      <!-- <hr /> -->\n      <p class=\"copyright\">\n        This project is licensed under <a href=\"https://opensource.org/licenses/MIT\" target=\"_blank\" rel=\"noopener\">MIT\n          License</a><br> Copyright © 2010-2022 LATH\n      </p>\n    </div>\n  </div>\n</app-nav>\n\n<div id=\"app-switcher\" onclick=\"app.appSwitcher.open()\">\n  <div class=\"icon-box-1\">\n    <div class=\"icon-box-2\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/home/head.html":
/*!****************************!*\
  !*** ./src/home/head.html ***!
  \****************************/
/***/ ((module) => {

module.exports = "<head>\n  <style>\n    #figure {\n      margin: 20px auto;\n      padding-bottom: 12px;\n      overflow: hidden;\n      max-width: 520px;\n      border-radius: 16px;\n      border: 0.5px solid rgba(255, 255, 255, .05);\n      background: var(--card-background, rgba(255, 255, 255, .1));\n      min-height: 500px;\n    }\n    \n    .iconContainer {\n      margin: 17% 20px;\n      padding: 20px;\n      animation: zoom .6s ease-in;\n    }\n    \n    .icon {\n      width: 220px;\n      height: 220px;\n      background: #252525;\n      border-radius: 60px;\n      margin: 0 auto;\n      position: relative;\n      box-shadow: 0px 3px 7px -1px rgba(0, 0, 0, .3);\n      text-align: center;\n      padding-top: 11px;\n      box-sizing: border-box;\n      background: linear-gradient(to bottom, #252525, #181818);\n      transform: scale(1);\n      transition: all 0.6s ease;\n      overflow: hidden;\n    }\n    \n    /* .icon::before {\n      content: \"\";\n      display: block;\n      width: 198px;\n      height: 198px;\n      background-image: linear-gradient(to right, #ef4dbc, #bc4bfd, #5c9cfe, #24cffb);\n      border-radius: 50%;\n      margin: 0 auto;\n      -webkit-animation: rotate 2s linear infinite;\n      animation: rotate 2s linear infinite;\n    }\n\n    .icon.disableAnimation::before {\n      display: none;\n      -webkit-animation: none;\n      animation: none;\n    } */\n    \n    .circle {\n      width: 185px;\n      height: 185px;\n      background: #252525;\n      border-radius: 50%;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      margin-left: -92px;\n      margin-top: -92px;\n      overflow: hidden;\n      transform: translate3d(0, 0, 0);\n    }\n    \n    #logoText {\n      position: absolute;\n      color: #fff;\n      font-size: 60px;\n      top: -10px;\n      width: 100%;\n      text-align: center;\n      animation: 5s ease-in zoom;\n    }\n    \n    #figure hr {\n      border: 0;\n      height: 0.5px;\n      background-color: rgba(255, 255, 255, .15);\n    }\n    \n    #figure h2 {\n      font-size: 36px;\n      line-height: 1.16667;\n      color: var(--card-text-color, rgba(255, 255, 255, .92));\n      margin: 0 auto 20px;\n      padding: 0 30px 0 20px;\n      font-weight: 400;\n      -webkit-font-smoothing: antialiased;\n    }\n    \n    .subtitle {\n      margin-top: 10px;\n      margin-bottom: 10px;\n      margin-left: 20px;\n      width: 100%;\n      text-align: left;\n      color: var(--sub-title, rgba(255, 255, 255, .3));\n      font-size: 16px;\n      -webkit-font-smoothing: antialiased;\n    }\n    \n    @keyframes rotate {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n    \n    @keyframes zoom {\n      0% {\n        transform: translate3d(0, -40px, 0) scale(.8);\n        filter: blur(20px);\n        opacity: 0;\n      }\n      50% {\n        transform: translate3d(0, -40px, 0) scale(.8);\n        filter: blur(20px);\n        opacity: 0;\n      }\n      100% {\n        transform: translate3d(0, 0, 0) scale(1);\n        filter: blur(0px);\n        opacity: 1;\n      }\n    }\n  </style>\n  <style>\n    html,\n    body {\n      margin: 0;\n      background: var(--background, #000);\n      transition: background .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .56s cubic-bezier(0.52, 0.16, 0.24, 1);\n    }\n    \n    body {\n      margin: 0;\n    }\n    \n    .placeholder {\n      height: var(--application-safe-area-top)\n    }\n\n    .snap-container {\n      width: 100%;\n      height: 100%;\n      margin: 0 auto;\n      overflow-x: scroll;\n      scroll-snap-type: x mandatory;\n      color: white;\n      display: flex;\n      align-items: center;\n      border-radius: 16px;\n    }\n\n    .snap-card {\n      min-height: 220px;\n      padding: 0 15px 15px;\n    }\n\n    .snap-card .card-title {\n      margin-left: -15px;\n    }\n\n    .snap-container .child {\n      margin-left: 0.5rem;\n      min-height: 180px;\n      max-width: 320px;\n      scroll-snap-align: start;\n      display: flex;\n      align-items: left;\n      justify-content: left;\n      text-align: left;\n      flex: 0 0 90%;\n      border-radius: 16px;\n      position: relative;\n      padding: 0 30px;\n      box-sizing: border-box;\n      flex-direction: column;\n      box-shadow: 0 0 7px 3px rgb(0 0 0 / 20%);\n      cursor: pointer;\n    }\n\n    .snap-container .child h2 {\n      margin: 30px 0 60px;\n      font-size: 32px;\n      max-height: 270px;\n      text-overflow: ellipsis;\n      box-orient: vertical;\n      -webkit-box-orient: vertical;\n      line-clamp: 6;\n      -webkit-line-clamp: 6;\n      overflow: hidden;\n    }\n\n    .snap-container .child p {\n      position: absolute;\n      bottom: 15px;\n      max-width: 250px;\n      margin: 0;\n      font-size: 14px;\n      text-align: left;\n      color: rgba(255, 255, 255, .5);\n    }\n\n    .snap-container .child:nth-child(1n) {\n      background-image: linear-gradient(353deg,#580303,#d10000);\n    }\n\n    .snap-container .child:nth-child(2n) {\n      background-image: linear-gradient(353deg,#03045d,#2644ff);\n    }\n\n    .snap-container .child:nth-child(3n) {\n      background-image: linear-gradient(353deg,#501c01,#ff7700);\n    }\n\n    .snap-container .child:nth-child(4n) {\n      background-image: linear-gradient(353deg,#002003,#148103);\n    }\n\n    .snap-container .child:nth-child(5n) {\n      background-image: linear-gradient(353deg,#210026,#7e067e);\n    }\n\n    .snap-container .child:nth-child(6n) {\n      background-image: linear-gradient(353deg,#1c0037,#5e01d6);\n    }\n\n    .snap-container .child:nth-child(7n) {\n      background-image: linear-gradient(353deg,#001f26,#009f98);\n    }\n    \n    .card {\n      box-sizing: border-box;\n      min-height: 100px;\n      max-width: 520px;\n      margin: auto;\n      margin-bottom: 12px;\n      border-radius: 16px;\n      border: 0.5px solid rgba(255, 255, 255, .05);\n      background: var(--card-background, rgba(255, 255, 255, .1));\n      overflow: hidden;\n    }\n    \n    .card-title {\n      font-size: 32px;\n      font-weight: 400;\n      padding: 12px 20px 7px;\n      color: var(--card-title, rgba(255, 255, 255, .3));\n      -webkit-font-smoothing: antialiased;\n    }\n    \n    .card-list {\n      padding: 0;\n      margin: 0;\n    }\n    \n    .card-list a {\n      display: block;\n      position: relative;\n      font-size: 20px;\n      padding: 15px 20px;\n      list-style: none;\n      font-weight: 400;\n      color: var(--card-text-color, rgba(255, 255, 255, .92));\n      border-bottom: 0.5px solid rgba(255, 255, 255, .2);\n      border-bottom-color: var(--card-hr-color, rgba(255, 255, 255, .2));\n      align-content: space-between;\n      cursor: pointer;\n      text-decoration: none;\n    }\n    \n    .card-list a[tap-highlight] {\n      background-color: var(--card-item-hover, rgba(255, 255, 255, .1)) !important;\n    }\n    \n    @media (pointer: fine) {\n      .card-list a:hover {\n        background-color: var(--card-item-hover, rgba(255, 255, 255, .1));\n      }\n    }\n    \n    .card-list a:last-child {\n      border-bottom: 0;\n      border-bottom-left-radius: 12px;\n      border-bottom-right-radius: 12px;\n    }\n    \n    .card-list a:after {\n      position: absolute;\n      right: 15px;\n      top: 50%;\n      content: ' ';\n      display: block;\n      width: 20px;\n      height: 20px;\n      margin-top: -10px;\n      background-image: url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBmaWxsPScjY2NjY2NjJyB2ZXJzaW9uPScxLjEnIGlkPSflm77lsYJfMScgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCA1NCA1NCcgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTQgNTQnIHhtbDpzcGFjZT0ncHJlc2VydmUnPjxzY3JpcHQgeG1sbnM9JycgdHlwZT0ndGV4dC9qYXZhc2NyaXB0JyBjcm9zc29yaWdpbj0nYW5vbnltb3VzJy8+PHBhdGggZD0nTTQ0LjYsMjguNWMwLTAuMSwwLjEtMC4xLDAuMS0wLjJjMC42LTEuMywwLjQtMi45LTAuNy0zLjlMMTkuMiwwLjljLTEuNC0xLjMtMy41LTEuMi00LjgsMC4xcy0xLjIsMy41LDAuMSw0LjhsMjIuMiwyMSBMMTQuNyw0OC4yYy0xLjMsMS4zLTEuNCwzLjQtMC4xLDQuOGMwLjcsMC43LDEuNSwxLDIuNCwxYzAuOCwwLDEuNy0wLjMsMi4zLTAuOWwyNC42LTIzLjdjMCwwLDAuMS0wLjEsMC4xLTAuMmMwLDAsMC4xLTAuMSwwLjEtMC4xIEM0NC4zLDI4LjksNDQuNCwyOC43LDQ0LjYsMjguNUw0NC42LDI4LjV6Jy8+PC9zdmc+\");\n    }\n    \n    .card-list a span {\n      font-size: 13px;\n      color: rgba(255, 255, 255, .3);\n      -webkit-font-smoothing: antialiased;\n    }\n\n    p.copyright {\n      margin-top: 20px;\n      opacity: .5;\n      padding: 8px 20px;\n    }\n\n    p.copyright, p.copyright a {\n      font-size: 14px;\n      text-decoration: none;\n      color: var(--main-color, #f5f5f7);\n    }\n    p.copyright a {\n      font-weight: 600;\n    }\n  </style>\n  <style>\n    body {\n      font-family: 'Lato', sans-serif;\n    }\n    \n    h1 {\n      animation: glitch 3s steps(100) infinite;\n      color: var(--logo-text, #fff);\n      font-size: 150px;\n      text-align: center;\n      text-transform: uppercase;\n      line-height: 1;\n      margin: 0.6em 0;\n      transition: color .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .56s cubic-bezier(0.52, 0.16, 0.24, 1);\n    }\n    \n    @media (min-width: 480px) {\n      h1 {\n        font-size: 180px;\n      }\n    }\n  </style>\n  <style>\n    #logoContainer {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n      background-color: #000000;\n      border-radius: 50%;\n      overflow: hidden;\n      zoom: .5;\n    }\n    \n    #logoContainer lathanim {\n      display: block;\n      position: relative;\n      width: 300px;\n      height: 300px;\n      overflow: hidden;\n      animation-name: zoom-in;\n      animation-delay: 0.5s;\n      animation-duration: 3.5s;\n      animation-timing-function: ease-in;\n      animation-fill-mode: forwards;\n      background-size: 4000px;\n      background-position: -1950px 0;\n    }\n    \n    #logoContainer lathanim::before {\n      content: \"\";\n      position: absolute;\n      display: block;\n      background-color: #000000;\n      width: 150%;\n      height: 30%;\n      left: -25%;\n      bottom: -27%;\n      border-radius: 50%;\n      z-index: 5;\n      transform-origin: left center;\n      background-size: 4000px;\n      background-position: -1950px 0;\n    }\n    \n    #logoContainer lathanim[letter=L] {\n      transform-origin: 30% center;\n    }\n    \n    #logoContainer lathanim[letter=L] .helper-1 {\n      width: 19.5%;\n      height: 100%;\n      background-color: rgba(228, 9, 19, 0.5);\n      left: 22%;\n      top: 0;\n      transform: rotate(180deg);\n      animation-name: fading-lumieres-box;\n      animation-duration: 2s;\n      animation-delay: 0.6s;\n      animation-fill-mode: forwards;\n    }\n    \n    #logoContainer lathanim[letter=L] .helper-1 .effect-brush {\n      animation-name: brush-moving;\n      animation-duration: 2.5s;\n      animation-fill-mode: forwards;\n      animation-delay: 0.8s;\n    }\n    \n    #logoContainer lathanim[letter=L] .helper-1 .effect-brush [class*=fur-] {\n      bottom: 0;\n      height: 40%;\n    }\n    \n    #logoContainer lathanim[letter=L] .helper-2 {\n      width: 17.5%;\n      height: 50%;\n      left: 38%;\n      top: 196px;\n      transform: rotate(270deg);\n      overflow: hidden;\n    }\n    \n    #logoContainer lathanim[letter=L] .helper-2 .effect-brush {\n      animation-name: brush-moving;\n      animation-duration: 2s;\n      animation-fill-mode: forwards;\n      animation-delay: 0.4s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] {\n      position: absolute;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush {\n      position: absolute;\n      width: 100%;\n      height: 300%;\n      top: 0;\n      overflow: hidden;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush::before {\n      display: block;\n      content: \"\";\n      position: absolute;\n      background-color: #e40913;\n      width: 100%;\n      height: 70%;\n      box-shadow: 0px 0px 29px 24px #e40913;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush [class*=fur-] {\n      display: block;\n      position: absolute;\n      bottom: 10%;\n      height: 30%;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-1 {\n      left: 0%;\n      width: 3.8%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 15%, rgba(0, 0, 0, 0) 81%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-2 {\n      left: 3.8%;\n      width: 2.8%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 10%, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-3 {\n      left: 6.6%;\n      width: 4.8%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 37%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-4 {\n      left: 11.4%;\n      width: 4%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 23%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-5 {\n      left: 15.4%;\n      width: 4%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 15%, rgba(0, 0, 0, 0) 86%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-6 {\n      left: 19.4%;\n      width: 2.5%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 27%, rgba(0, 0, 0, 0) 89%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-7 {\n      left: 21.9%;\n      width: 4%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 20%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-8 {\n      left: 25.9%;\n      width: 2%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 30%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-9 {\n      left: 27.9%;\n      width: 4%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 35%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-10 {\n      left: 31.9%;\n      width: 3.5%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 39%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-11 {\n      left: 35.4%;\n      width: 2%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 34%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-12 {\n      left: 37.4%;\n      width: 2.6%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 22%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-13 {\n      left: 40%;\n      width: 6%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 47%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-14 {\n      left: 46%;\n      width: 2%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 36%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-15 {\n      left: 48%;\n      width: 5.5%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 29%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-16 {\n      left: 53.5%;\n      width: 3%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 39%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-17 {\n      left: 56.5%;\n      width: 4.1%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 45%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-18 {\n      left: 60.6%;\n      width: 2.4%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 34%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-19 {\n      left: 63%;\n      width: 4%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 47%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-20 {\n      left: 67%;\n      width: 1.5%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 27%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-21 {\n      left: 68.5%;\n      width: 2.8%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 37%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-22 {\n      left: 71.3%;\n      width: 2.3%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 9%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-23 {\n      left: 73.6%;\n      width: 2.2%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 28%, rgba(0, 0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-24 {\n      left: 75.8%;\n      width: 1%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 37%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-25 {\n      left: 76.8%;\n      width: 2.1%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 28%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-26 {\n      left: 78.9%;\n      width: 4.1%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 34%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-27 {\n      left: 83%;\n      width: 2.5%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 21%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-28 {\n      left: 85.5%;\n      width: 4.5%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 39%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-29 {\n      left: 90%;\n      width: 2.8%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 30%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-30 {\n      left: 92.8%;\n      width: 3.5%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 19%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-brush .fur-31 {\n      left: 96.3%;\n      width: 3.7%;\n      background: linear-gradient(to bottom, #e40913 0%, #e40913 37%, rgba(0, 0, 0, 0) 100%);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      opacity: 0;\n      animation-name: showing-lumieres;\n      animation-duration: 2s;\n      animation-delay: 1.6s;\n      animation-fill-mode: forwards;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres [class*=lamp-] {\n      position: absolute;\n      display: block;\n      height: 100%;\n      box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);\n      background: var(--color);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres [class*=lamp-]::before {\n      position: absolute;\n      content: \" \";\n      display: block;\n      width: 100%;\n      height: 100%;\n      background: var(--color);\n      box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-1 {\n      --color: #ff0100;\n      z: 6;\n      left: 0.7%;\n      width: 1%;\n      animation-delay: 1.33s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-1::before {\n      left: 193%;\n      animation-delay: 1.98s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-2 {\n      --color: #ffde01;\n      left: 2.2%;\n      width: 1.4%;\n      animation-delay: 1.81s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-2::before {\n      left: 188%;\n      animation-delay: 0.89s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-3 {\n      --color: #ff00cc;\n      left: 5.8%;\n      width: 2.1%;\n      animation-delay: 1.51s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-3::before {\n      left: 105%;\n      animation-delay: 0.34s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-4 {\n      --color: #04fd8f;\n      left: 10.1%;\n      width: 2%;\n      animation-delay: 1.91s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-4::before {\n      left: 147%;\n      animation-delay: 0.2s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-5 {\n      --color: #ff0100;\n      left: 12.9%;\n      width: 1.4%;\n      animation-delay: 0.57s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-5::before {\n      left: 118%;\n      animation-delay: 1.3s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-6 {\n      --color: #ff9600;\n      left: 15.3%;\n      width: 2.8%;\n      animation-delay: 0.22s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-6::before {\n      left: 124%;\n      animation-delay: 1.86s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-7 {\n      --color: #0084ff;\n      left: 21.2%;\n      width: 2.5%;\n      animation-delay: 1.49s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-7::before {\n      left: 27%;\n      animation-delay: 1.04s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-8 {\n      --color: #f84006;\n      left: 25%;\n      width: 2.5%;\n      animation-delay: 0.26s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-8::before {\n      left: 198%;\n      animation-delay: 0.76s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-9 {\n      --color: #ffc601;\n      left: 30.5%;\n      width: 3%;\n      animation-delay: 0.7s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-9::before {\n      left: 82%;\n      animation-delay: 0.56s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-10 {\n      --color: #ff4800;\n      left: 36.3%;\n      width: 3%;\n      animation-delay: 1.52s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-10::before {\n      left: 66%;\n      animation-delay: 1.77s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-11 {\n      --color: #fd0100;\n      left: 41%;\n      width: 2.2%;\n      animation-delay: 0.98s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-11::before {\n      left: 105%;\n      animation-delay: 0.72s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-12 {\n      --color: #01ffff;\n      left: 44.2%;\n      width: 2.6%;\n      animation-delay: 1.95s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-12::before {\n      left: 105%;\n      animation-delay: 0.25s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-13 {\n      --color: #ffc601;\n      left: 51.7%;\n      width: 0.5%;\n      animation-delay: 0.72s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-13::before {\n      left: 166%;\n      animation-delay: 1.11s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-14 {\n      --color: #ffc601;\n      left: 52.1%;\n      width: 1.8%;\n      animation-delay: 1.35s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-14::before {\n      left: 177%;\n      animation-delay: 2s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-15 {\n      --color: #0078fe;\n      left: 53.8%;\n      width: 2.3%;\n      animation-delay: 0.7s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-15::before {\n      left: 161%;\n      animation-delay: 0.08s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-16 {\n      --color: #0080ff;\n      left: 57.2%;\n      width: 2%;\n      animation-delay: 1.2s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-16::before {\n      left: 4%;\n      animation-delay: 1.73s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-17 {\n      --color: #ffae01;\n      left: 62.3%;\n      width: 2.9%;\n      animation-delay: 1.05s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-17::before {\n      left: 185%;\n      animation-delay: 1.77s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-18 {\n      --color: #ff00bf;\n      left: 65.8%;\n      width: 1.7%;\n      animation-delay: 0.85s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-18::before {\n      left: 117%;\n      animation-delay: 0.82s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-19 {\n      --color: #a601f4;\n      left: 72.8%;\n      width: 0.8%;\n      animation-delay: 1.92s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-19::before {\n      left: 151%;\n      animation-delay: 1.99s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-20 {\n      --color: #f30b34;\n      left: 74.3%;\n      width: 2%;\n      animation-delay: 0.09s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-20::before {\n      left: 10%;\n      animation-delay: 0.72s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-21 {\n      --color: #ff00bf;\n      left: 79.8%;\n      width: 2%;\n      animation-delay: 0.97s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-21::before {\n      left: 198%;\n      animation-delay: 1.89s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-22 {\n      --color: #04fd8f;\n      left: 78.2%;\n      width: 2%;\n      animation-delay: 1.32s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-22::before {\n      left: 22%;\n      animation-delay: 0.1s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-23 {\n      --color: #01ffff;\n      left: 78.5%;\n      width: 2%;\n      animation-delay: 0.02s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-23::before {\n      left: 197%;\n      animation-delay: 1.36s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-24 {\n      --color: #a201ff;\n      left: 85.3%;\n      width: 1.1%;\n      animation-delay: 0.87s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-24::before {\n      left: 37%;\n      animation-delay: 0.56s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-25 {\n      --color: #ec0014;\n      left: 86.9%;\n      width: 1.1%;\n      animation-delay: 1.86s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-25::before {\n      left: 97%;\n      animation-delay: 0.22s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-26 {\n      --color: #0078fe;\n      left: 88.8%;\n      width: 2%;\n      animation-delay: 0.48s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-26::before {\n      left: 159%;\n      animation-delay: 0.63s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-27 {\n      --color: #ff0036;\n      left: 92.4%;\n      width: 2.4%;\n      animation-delay: 0.78s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-27::before {\n      left: 47%;\n      animation-delay: 1.41s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-28 {\n      --color: #06f98c;\n      left: 96.2%;\n      width: 2.1%;\n      animation-delay: 0.97s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-28::before {\n      left: 3%;\n      animation-delay: 0.86s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-1,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-3,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-5,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-7,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-9,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-11,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-13,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-15,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-17,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-19,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-21,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-23,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-25,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-27 {\n      animation-name: lumieres-moving-left;\n      animation-duration: 5s;\n      animation-fill-mode: forwards;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-1::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-3::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-5::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-7::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-9::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-11::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-13::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-15::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-17::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-19::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-21::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-23::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-25::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-27::before {\n      animation-name: lumieres-moving-left;\n      animation-duration: 5.5s;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-2,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-4,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-6,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-8,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-10,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-12,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-14,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-16,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-18,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-20,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-22,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-24,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-26,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-28 {\n      animation-name: lumieres-moving-right;\n      animation-duration: 5s;\n      animation-fill-mode: forwards;\n    }\n    \n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-2::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-4::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-6::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-8::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-10::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-12::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-14::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-16::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-18::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-20::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-22::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-24::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-26::before,\n    #logoContainer lathanim [class*=helper-] .effect-lumieres .lamp-28::before {\n      animation-name: lumieres-moving-right;\n      animation-duration: 5.5s;\n    }\n    \n    @keyframes brush-moving {\n      0% {\n        transform: translateY(0);\n      }\n      100% {\n        transform: translateY(-100%);\n      }\n    }\n    \n    @keyframes fading-out {\n      0% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n    \n    @keyframes lumieres-moving-right {\n      0% {\n        transform: translate(0);\n      }\n      40% {\n        transform: translate(-10px) scaleX(1);\n      }\n      50% {\n        transform: translate(-60px);\n      }\n      100% {\n        transform: translate(-120px) scaleX(3);\n      }\n    }\n    \n    @keyframes lumieres-moving-left {\n      0% {\n        transform: translate(0);\n      }\n      40% {\n        transform: translate(10px) scaleX(1);\n      }\n      50% {\n        transform: translate(60px);\n      }\n      100% {\n        transform: translate(120px) scaleX(3);\n      }\n    }\n    \n    @keyframes zoom-in {\n      0% {\n        transform: scale(1);\n      }\n      100% {\n        transform: scale(15);\n      }\n    }\n    \n    @keyframes showing-lumieres {\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }\n    }\n    \n    @keyframes fading-lumieres-box {\n      0% {\n        background-color: rgba(228, 9, 19, 0.5);\n      }\n      100% {\n        background-color: rgba(228, 9, 19, 0);\n      }\n    }\n  </style>\n  <script>\n    document.addEventListener(\"DOMContentLoaded\", () => {\n      // const icon = document.getElementById(\"icon\");\n      // window.addEventListener('scroll', (event) => {\n      //   icon.style.boxShadow = `0px ${Math.min(window.scrollY > 3 ? window.scrollY : 3, 20)}px ${Math.min(window.scrollY > 7 ? window.scrollY : 7, 60)}px -1px rgb(0 0 0 / ${Math.min(window.scrollY > 7 ? window.scrollY : 30, 100)}%)`\n      // })\n    })\n    // setTimeout(() => {\n    //   const icon = document.getElementById(\"icon\");\n    //   icon.setAttribute('class', 'icon disableAnimation')\n    // }, 3000)\n    const _to = (id) => {\n      window.parent.postMessage({\n        action: 'to',\n        data: {\n          applet: id\n        }\n      }, '*')\n    }\n  </script>\n</head>"

/***/ }),

/***/ "./src/sheetsBottom/html.html":
/*!************************************!*\
  !*** ./src/sheetsBottom/html.html ***!
  \************************************/
/***/ ((module) => {

module.exports = "<style>\nhtml {\n  font-size: 1vmin;\n  background: radial-gradient(#bd243f, #190d23);\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  padding-top: calc(20px + constant(safe-area-inset-top));\n  padding-top: calc(20px + env(safe-area-inset-top));\n}\n.header-inner {\n  display: flex;\n  max-width: 500px;\n  padding: 0 20px;\n}\n.placeholder {\n  width: 100%;\n  height: calc(50px + constant(safe-area-inset-top));\n  height: calc(50px + env(safe-area-inset-top));\n}\n.back-btn {\n  display: flex;\n  height: 21px;\n  cursor: pointer;\n}\n.back-icon {\n  width: 21px;\n  height: 21px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMTJweCcgaGVpZ2h0PScyMnB4JyB2aWV3Qm94PScwIDAgMTIgMjInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PHRpdGxlPlBhdGg8L3RpdGxlPjxnIGlkPSdTeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz48ZyBpZD0nT3ZlcnJpZGVzL05hdmlnYXRpb24tQmFyL0xlZnQvQmFjay1CdXR0b24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC05LjAwMDAwMCwgLTExLjAwMDAwMCknIGZpbGw9JyMwMDdBRkYnIGZpbGwtcnVsZT0nbm9uemVybyc+PGcgaWQ9J1Bpbi1MZWZ0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg5LjAwMDAwMCwgMTEuNTAwMDAwKSc+PHBhdGggZD0nTTMuNjIxMzIwMzQsMTAuNSBMMTEuNTYwNjYwMiwyLjU2MDY2MDE3IEMxMi4xNDY0NDY2LDEuOTc0ODczNzMgMTIuMTQ2NDQ2NiwxLjAyNTEyNjI3IDExLjU2MDY2MDIsMC40MzkzMzk4MjggQzEwLjk3NDg3MzcsLTAuMTQ2NDQ2NjA5IDEwLjAyNTEyNjMsLTAuMTQ2NDQ2NjA5IDkuNDM5MzM5ODMsMC40MzkzMzk4MjggTDAuNDM5MzM5ODI4LDkuNDM5MzM5ODMgQy0wLjE0NjQ0NjYwOSwxMC4wMjUxMjYzIC0wLjE0NjQ0NjYwOSwxMC45NzQ4NzM3IDAuNDM5MzM5ODI4LDExLjU2MDY2MDIgTDkuNDM5MzM5ODMsMjAuNTYwNjYwMiBDMTAuMDI1MTI2MywyMS4xNDY0NDY2IDEwLjk3NDg3MzcsMjEuMTQ2NDQ2NiAxMS41NjA2NjAyLDIwLjU2MDY2MDIgQzEyLjE0NjQ0NjYsMTkuOTc0ODczNyAxMi4xNDY0NDY2LDE5LjAyNTEyNjMgMTEuNTYwNjYwMiwxOC40MzkzMzk4IEwzLjYyMTMyMDM0LDEwLjUgWicgaWQ9J1BhdGgnPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.back-text {\n  line-height: 23px;\n  font-size: 17px;\n  color: #007AFF;\n}\n\n@media (min-width: 500px) {\n  html {\n    font-size: 5px;\n  }\n}\nbody {\n  color: #190d23;\n  font-size: 12rem;\n  padding: 1rem;\n  font-family: \"Courier New\";\n  overflow: hidden;\n  margin: 0;\n  padding-top: 20vh;\n}\n\nscreen,\nscreen *,\nscreen *:before,\nscreen *:after {\n  box-sizing: border-box;\n  content: \"\";\n  display: block;\n  transform-style: preserve-3d;\n  position: relative;\n  perspective: 200rem;\n}\n\ncard {\n  margin: auto;\n  height: 96rem;\n  width: 64.5rem;\n  background: #fff;\n  border-radius: 5rem;\n  transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0) rotate(1deg);\n  position: relative;\n  animation: rotate 3s linear;\n}\ncard *, card *:before, card *:after, card:before, card:after {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\ncard:before, card:after {\n  width: 100%;\n  height: 100%;\n  transform: translate3d(0, 0, -0.2rem) rotateY(180deg);\n  border-radius: 5rem;\n  animation: light 3s linear;\n  box-shadow: inset 0 0 1rem rgba(25, 13, 35, 0.5);\n  background-image: linear-gradient(to right bottom, rgba(25, 13, 35, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(25, 13, 35, 0.3));\n}\ncard:after {\n  transform: translate3d(0, 0, 0.2rem) rotateY(0deg);\n  animation: light 3s linear reverse;\n}\n\nback {\n  box-shadow: 0 0 0 1rem #302e9b, inset 0 0 0 1rem #302e9b, inset 0 0 0 2rem #f5e3e3;\n  border-radius: 1rem;\n  height: 93%;\n  width: 90%;\n  border: 2rem solid rgba(255, 255, 255, 0);\n  background-position: 0.9rem 0.99rem;\n  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 0.99rem, #302e9b 0.99rem, #302e9b 1.98rem), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 0.99rem, #302e9b 0.99rem, #302e9b 1.98rem);\n  transform: translate3d(0, 0, -0.1rem) rotateY(180deg);\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n\nshadow {\n  margin: auto;\n  height: 100rem;\n  width: 70rem;\n  background: radial-gradient(#190d23, rgba(255, 255, 255, 0));\n  background: #190d23;\n  border-radius: 10rem;\n  position: relative;\n  animation: shadow 3s linear;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(0deg) skewY(0) scale(1);\n  opacity: 0.2;\n  box-shadow: 0 0 2vmin #190d23, 0 0 5vmin #190d23;\n}\n\nhoverspace {\n  height: 100%;\n  width: 50rem;\n  position: absolute;\n  transform: translate3d(0, 0, 50rem);\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  cursor: grab;\n}\nhoverspace:hover ~ card {\n  animation: rotatehover 3s linear;\n}\nhoverspace:hover ~ card:before, hoverspace:hover ~ card:after {\n  animation: lighthover 3s linear;\n}\nhoverspace:hover ~ card:after {\n  animation: lighthover 3s linear reverse;\n}\nhoverspace:hover ~ shadow {\n  animation: shadowhover 3s linear;\n}\n\n@keyframes rotate {\n  100% {\n    transform: translate3d(0, 0, 0) rotate3d(1, 1, 0, -360deg) rotate(1deg);\n  }\n}\n@keyframes rotatehover {\n  100% {\n    transform: translate3d(0, 0, 0) rotate3d(1, 1, 0, -360deg) rotate(1deg);\n  }\n}\n@keyframes light {\n  0%, 100%, 50% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n  25% {\n    background-color: rgba(245, 227, 227, 0.7);\n  }\n  75% {\n    background-color: #190d23;\n  }\n}\n@keyframes lighthover {\n  0%, 100%, 50% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n  25% {\n    background-color: rgba(245, 227, 227, 0.7);\n  }\n  75% {\n    background-color: #190d23;\n  }\n}\n@keyframes shadow {\n  25% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(-90deg);\n    opacity: 0;\n  }\n  50% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(0);\n    opacity: 0.2;\n  }\n  75% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(90deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(180deg) skewY(0);\n    opacity: 0.2;\n  }\n}\n@keyframes shadowhover {\n  25% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(-90deg);\n    opacity: 0;\n  }\n  50% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(0);\n    opacity: 0.2;\n  }\n  75% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(90deg) skewY(90deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translate3d(0, 90rem, -50rem) rotateX(90deg) rotate(180deg) skewY(0);\n    opacity: 0.2;\n  }\n}\nfront {\n  transform: translate3d(0, 0, 0.1rem) rotateY(0deg);\n  height: 100%;\n  width: 100%;\n}\nfront > * {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\nfront > * > *:nth-of-type(1) {\n  transform: translate3d(2rem, 13rem, 0) scaleX(0.7);\n  height: 4rem;\n  width: 4rem;\n  background: #b32b28;\n  border-radius: 50%;\n  box-shadow: 3.25rem 0 0 #b32b28;\n}\nfront > * > *:nth-of-type(1):before {\n  transform: translate3d(1.7rem, 1.7rem, 0) rotate(45deg);\n  background: #b32b28;\n  width: 4rem;\n  height: 4rem;\n}\nfront > * > *:nth-of-type(1):after {\n  content: \"K\";\n  color: #b32b28;\n  transform: translate3d(0, -12rem, 0);\n}\nfront > * > *:nth-of-type(2) {\n  border: 0.5rem solid #302e9b;\n  width: 68%;\n  height: 79.5%;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(6) {\n  background: #bdb725;\n  box-shadow: inset 0 0 0 0.1rem #fff, inset 0 0 0 0.6rem #302e9b;\n  width: 30rem;\n  height: 30rem;\n  transform: translate3d(7rem, -23rem, 0) rotate(37deg) skewY(20deg);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(6):after {\n  background: #fff;\n  width: 40rem;\n  height: 10rem;\n  border-radius: 50%;\n  transform: translate3d(4rem, 25.5rem, 0) rotate(-50deg);\n  box-shadow: 0 0 0 1.5rem #190d23;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(6):before {\n  width: 1.5rem;\n  height: 1.5rem;\n  transform: translate3d(16.5rem, 26.5rem, 0) rotate(-1deg);\n  background: #190d23;\n  box-shadow: 0 0 0 1.5rem #bdb725, 0 0 0 2rem #190d23, 5rem -5rem 0 #190d23, 5rem -5rem 0 1.5rem #bdb725, 5rem -5rem 0 2rem #190d23, 10rem -10rem 0 #190d23, 10rem -10rem 0 1.5rem #bdb725, 10rem -10rem 0 2rem #190d23;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(8) {\n  transform: translate3d(0.5rem, 2.5rem, 0) scaleX(0.7);\n  height: 8rem;\n  width: 8rem;\n  background: #b32b28;\n  border-radius: 50%;\n  box-shadow: 6.5rem 0 0 #b32b28;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(8):before {\n  transform: translate3d(3.25rem, 3.25rem, 0) rotate(45deg);\n  background: #b32b28;\n  width: 8rem;\n  height: 8rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) {\n  width: 40rem;\n  height: 20rem;\n  transform: translate3d(-0.5rem, 6.5rem, 0);\n  border-radius: 50%;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7):after {\n  width: 5rem;\n  height: 14rem;\n  border-radius: 3rem;\n  transform: translate3d(21.5rem, -1rem, 0) rotate(-20deg) skewY(-10deg);\n  box-shadow: 0.4rem 0.4rem 0 #302e9b, 1rem 0.8rem 0 #fff, 1.4rem 1.2rem 0 #302e9b, 2rem 1.6rem 0 #fff, 2.4rem 2rem 0 #302e9b, 3rem 2.4rem 0 #fff, 3.4rem 2.8rem 0 #302e9b, 4rem 3.2rem 0 #fff, 4.4rem 3.6rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7):before {\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  transform: translate3d(13.35rem, 7.85rem, 0);\n  border-radius: 50%;\n  box-shadow: 0.4rem 0 0 #302e9b, 0.4rem 0.4rem 0 0.3rem #fff, 0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(1) {\n  width: 3rem;\n  height: 14rem;\n  border-radius: 2rem;\n  transform: translate3d(15rem, -4rem, 0) rotate(25deg);\n  box-shadow: 0.4rem 0.4rem 0 #302e9b, 1rem 0.8rem 0 #fff, 1.4rem 1.2rem 0 #302e9b, 2rem 1.6rem 0 #fff, 2.4rem 2rem 0 #302e9b, 3rem 2.4rem 0 #fff, 3.4rem 2.8rem 0 #302e9b, 4rem 2.3rem 0 #fff, 4.4rem 2.6rem 0 #302e9b, 5rem 2rem 0 #fff, 5.4rem 2.1rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(1):after {\n  background: #fff;\n  width: 10.8rem;\n  height: 12rem;\n  border-radius: 5rem 0 60% 2rem/1.25rem 0 60% 5rem;\n  transform: translate3d(1.5rem, 1rem, 0) rotate(-29deg);\n  box-shadow: -0.4rem -0.3rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(1):before {\n  width: 7rem;\n  height: 10rem;\n  border-radius: 2.5rem;\n  transform: translate3d(6.5rem, 4rem, 0) rotate(-55deg);\n  border: 0.4rem solid #fff;\n  box-shadow: 0 0 0 0.4rem #302e9b, inset 0 0 0 0.4rem #302e9b, inset 0.5rem 0 0 0.4rem #fff, inset 0.9rem 0 0 0.4rem #302e9b, inset 1.4rem 0.2rem 0 0.4rem #fff, inset 1.8rem 0.2rem 0 0.4rem #302e9b, inset 2.3rem 0.4rem 0 0.4rem #fff, inset 2.7rem 0.4rem 0 0.4rem #302e9b, inset 3.2rem 0.8rem 0 0.4rem #fff, inset 3.6rem 0.8rem 0 0.4rem #302e9b, inset -0.5rem 0 0 0.4rem #fff, inset -0.9rem 0 0 0.4rem #302e9b, inset -1.4rem 0.2rem 0 0.4rem #fff, inset -1.8rem 0.2rem 0 0.4rem #302e9b, inset -2.3rem 0.4rem 0 0.4rem #fff, inset -2.7rem 0.4rem 0 0.4rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(2) {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #fff;\n  transform: translate3d(25rem, 10.65rem, 0);\n  border-radius: 50%;\n  box-shadow: 0.4rem 0 0 #302e9b, 0.4rem 0.4rem 0 0.4rem #fff, 0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(2):after {\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  transform: translate3d(-1.5rem, 1.2rem, 0) rotate(-70deg);\n  border-radius: 50%;\n  box-shadow: -0.4rem 0 0 #302e9b, -0.4rem 0.4rem 0 0.4rem #fff, -0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(2):before {\n  width: 0.75rem;\n  height: 0.75rem;\n  background: #fff;\n  transform: translate3d(-11.25rem, -7rem, 0) rotate(-50deg);\n  border-radius: 50%;\n  box-shadow: 0.4rem 0 0 #302e9b, 0.4rem 0.4rem 0 0.3rem #fff, 0.1rem 0.4rem 0 0.6rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(4) {\n  width: 3rem;\n  height: 1rem;\n  border-radius: 50%;\n  border-top: 0.4rem solid #302e9b;\n  transform: translate3d(21rem, 1rem, 0);\n  box-shadow: -5rem 0.4rem 0 #fff, -5.5rem 0 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(4):after {\n  width: 0.3rem;\n  height: 2rem;\n  background: #302e9b;\n  transform: translate3d(-2.65rem, 0, 0) rotate(-15deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(4):before {\n  width: 2.5rem;\n  height: 5rem;\n  border-radius: 2rem;\n  transform: translate3d(-2.5rem, 1.25rem, 0) rotate(15deg) skewY(-10deg);\n  box-shadow: -0.2rem 0.3rem 0 #302e9b;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(5) {\n  width: 0.6rem;\n  height: 0.6rem;\n  background: #302e9b;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.5rem #fff, 0 0 0 0.8rem #302e9b;\n  transform: translate3d(21.5rem, 3rem, 0) rotate(5deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(5):before {\n  width: 3.5rem;\n  height: 3rem;\n  border-radius: 50%;\n  border-top: 0.4rem solid #302e9b;\n  transform: translate3d(-1rem, -0.4rem, 0);\n  box-shadow: 0 -0.8rem 0 -0.4rem #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(5):after {\n  width: 1.5rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  box-shadow: -0.2rem 0.2rem 0 0 #302e9b;\n  transform: translate3d(-0.75rem, 1rem, 0) rotate(20deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(6) {\n  width: 0.6rem;\n  height: 0.6rem;\n  background: #302e9b;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.5rem #fff, 0 0 0 0.8rem #302e9b;\n  transform: translate3d(16.6rem, 2.75rem, 0) rotate(5deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(6):before {\n  width: 3.5rem;\n  height: 3rem;\n  border-radius: 50%;\n  border-top: 0.4rem solid #302e9b;\n  transform: translate3d(-1rem, -0.4rem, 0);\n  box-shadow: 0 -0.8rem 0 -0.4rem #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(6):after {\n  width: 1rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  box-shadow: 0 0.2rem 0 0 #302e9b;\n  transform: translate3d(-0.75rem, 1rem, 0) rotate(30deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(3) {\n  width: 2rem;\n  height: 1.25rem;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0.3rem 0 0 0 #302e9b;\n  transform: translate3d(18.75rem, 6rem, 0) rotate(45deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(3):before {\n  width: 4rem;\n  height: 4rem;\n  transform: translate3d(0.25rem, 0.25rem, 0);\n  box-shadow: -0.2rem -0.2rem 0 #302e9b;\n  border-radius: 1rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(3):after {\n  width: 1rem;\n  height: 1rem;\n  box-shadow: 0 -0.4rem 0 #302e9b;\n  transform: translate3d(3.25rem, 3.25rem, 0) rotate(-45deg);\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(7) {\n  width: 0.6rem;\n  height: 0.6rem;\n  background: #302e9b;\n  border-radius: 50%;\n  box-shadow: 1rem 0 0 0 #302e9b, 0.5rem 0.3rem 0 0 #302e9b;\n  transform: translate3d(18.75rem, 8.5rem, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(7) > *:nth-of-type(7):after {\n  width: 3.2rem;\n  height: 0.5rem;\n  box-shadow: 0 -0.2rem 0 #302e9b;\n  transform: translate3d(-0.7rem, 0.4rem, 0);\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(5) {\n  transform: translate3d(36rem, 5rem, 0);\n  border: 0.3rem solid #302e9b;\n  width: 2rem;\n  height: 3.85rem;\n  border-radius: 1rem;\n  background: #fff;\n  box-shadow: 0.75rem 0.3rem 0 -0.3rem #fff, 0.75rem 0.3rem 0 #302e9b, 1.75rem 0.5rem 0 -0.5rem #fff, 1.75rem 0.5rem 0 -0.2rem #302e9b, 2.65rem 0.6rem 0 -0.8rem #fff, 2.65rem 0.6rem 0 -0.4rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(5):before {\n  transform: translate3d(-1rem, -0.75rem, 0);\n  border: 0.5rem solid #302e9b;\n  border-bottom: none;\n  width: 1.65rem;\n  height: 4rem;\n  border-radius: 1rem 1rem 0 0;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(5):after {\n  transform: translate3d(0, 3.5rem, 0);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0 100% 0 0;\n  box-shadow: 0.3rem -0.3rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(4) {\n  transform: translate3d(35.25rem, 6.5rem, 0);\n  border: 0.5rem solid #302e9b;\n  width: 4.75rem;\n  height: 5.5rem;\n  border-radius: 50%;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(4):before {\n  transform: translate3d(4rem, -0.1rem, 0);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 100%;\n  box-shadow: 0 0 0 0.5rem #302e9b, inset 0 -0.25rem 0 0.5rem #bdb725, inset 0 -0.5rem 0 1rem #302e9b;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(4):after {\n  transform: translate3d(-1.5rem, -3rem, 0);\n  width: 1rem;\n  height: 7rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 0 0 0.5rem #302e9b;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(3) {\n  transform: translate3d(31.25rem, 6rem, 0);\n  border: 0.5rem solid #302e9b;\n  width: 3rem;\n  height: 3rem;\n  box-shadow: inset 0 0 0 0.5rem #fff, inset 0 0 0 1rem #302e9b, -3rem 0 0 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(3):before {\n  transform: translate3d(4rem, 5rem, 0);\n  width: 3.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.5rem #302e9b;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) {\n  transform: translate3d(30rem, 13rem, 0);\n  height: 20rem;\n  width: 20rem;\n  background: #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1):before {\n  border-radius: 50%;\n  background: #fff;\n  width: 10rem;\n  height: 30rem;\n  box-shadow: -0.4rem 0.4rem 0 0 #302e9b, -12.5rem -1rem 0 0rem #fff, -12rem -1rem 0 0rem #302e9b;\n  transform: translate3d(9rem, -22rem, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1):after {\n  background: #fff;\n  width: 30rem;\n  height: 20rem;\n  transform: translate3d(0rem, -20rem, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1) {\n  background: #b32b28;\n  border: 0.5rem solid #302e9b;\n  transform: translate3d(5rem, 9rem, 0) rotate(-40deg) skewY(-30deg);\n  width: 10rem;\n  height: 10rem;\n  box-shadow: 0 0 0 1rem #bdb725, 0 0 0 1.5rem #302e9b;\n  z-index: -1;\n  border-radius: 50% 0;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):before {\n  background: #b32b28;\n  border: 0.5rem solid #302e9b;\n  transform: translate3d(-4rem, -5.5rem, 0) rotate(20deg) skewY(0deg);\n  width: 10rem;\n  height: 10rem;\n  box-shadow: 0 0 0 1rem #bdb725, 0 0 0 1.5rem #302e9b;\n  border-radius: 50% 0;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):after {\n  background: #302e9b;\n  transform: translate3d(11.75rem, -11.75rem, 0) rotate(15deg) skewY(0deg);\n  width: 10rem;\n  height: 10rem;\n  box-shadow: 0 0 0 0.5rem #bdb725, 0 0 0 1rem #302e9b;\n  border-radius: 50% 0;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) {\n  border: 0.5rem solid #302e9b;\n  transform: translate3d(-6.5rem, 16rem, 0);\n  width: 56rem;\n  height: 43rem;\n  border-radius: 50% 48%;\n  box-shadow: inset 0 0 0 1rem #bdb725, inset 0 0 0 4.5rem #302e9b, inset 0 0 0 5rem #bdb725, inset 0 0 0 5.5rem #302e9b;\n  background: linear-gradient(#b32b28, #b32b28 50%, #fff 50%, #fff);\n  background-size: 100% 1rem;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2):before {\n  width: 2rem;\n  height: 2rem;\n  background: #bdb725;\n  transform: translate3d(45.75rem, 31.4rem, 0);\n  box-shadow: -2.5rem 2rem 0 0 #bdb725, -5.5rem 4rem 0 0 #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2):after {\n  width: 2rem;\n  height: 2rem;\n  background: #190d23;\n  transform: translate3d(45.7rem, 31.3rem, 0) rotate(-45deg);\n  box-shadow: inset 0 0 0 0.55rem #bdb725, -3.25rem -0.25rem 0 -0.55rem #190d23, -3.25rem -0.25rem 0 0 #bdb725, -6.75rem -1rem 0 -0.55rem #190d23, -6.75rem -1rem 0 0 #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) {\n  width: 50rem;\n  height: 60rem;\n  border: 5rem solid #fff;\n  border-left-width: 3rem;\n  transform: translate3d(30rem, -9rem, 0);\n  box-shadow: inset 0 0 0 0.5rem #302e9b, 0 0 0 0.5rem #302e9b;\n  border-radius: 50%;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):before {\n  width: 40rem;\n  height: 31rem;\n  background: #b32b28;\n  box-shadow: inset 5rem 14rem 0 0 #302e9b, inset 0 14.9rem 0 0 #bdb725, inset 0 15.3rem 0 0 #302e9b;\n  transform: translate3d(0, 0, 0);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):after {\n  width: 2rem;\n  background: #bdb725;\n  height: 30rem;\n  transform: translate3d(10.5rem, 0rem, 0);\n  border: solid 0.5rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) {\n  width: 24rem;\n  height: 24rem;\n  border: 1rem solid #190d23;\n  transform: translate3d(-15rem, 6rem, 0);\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 1rem #bdb725, inset 0 0 0 1.5rem #190d23, inset 0 0 0 3.5rem #fff, inset 0 0 0 4rem #190d23, inset 0 0 0 4.5rem #bdb725, inset 0 0 0 5rem #190d23;\n  background: linear-gradient(#b32b28, #b32b28 50%, #fff 50%, #fff);\n  background-size: 100% 1rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):before {\n  width: 18rem;\n  height: 18rem;\n  border: 1rem dotted #b32b28;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):after {\n  width: 5rem;\n  height: 5rem;\n  transform: translate3d(29rem, 5rem, 0) rotate(45deg);\n  background: #b32b28;\n  box-shadow: 0 0 0 0.4rem #302e9b, 0 0 0 0.9rem #bdb725, 0 0 0 1.1rem #302e9b, 0 0 0 1.6rem #bdb725, 0 0 0 2rem #302e9b, 4rem 4rem 0 0 #b32b28, 4rem 4rem 0 0.4rem #302e9b, 4rem 4rem 0 0.9rem #bdb725, 4rem 4rem 0 1.1rem #302e9b, 4rem 4rem 0 1.6rem #bdb725, 4rem 4rem 0 2rem #302e9b, 8rem 8rem 0 0 #b32b28, 8rem 8rem 0 0.4rem #302e9b, 8rem 8rem 0 0.9rem #bdb725, 8rem 8rem 0 1.1rem #302e9b, 8rem 8rem 0 1.6rem #bdb725, 8rem 8rem 0 2rem #302e9b, -4rem -4rem 0 0 #b32b28, -4rem -4rem 0 0.4rem #302e9b, -4rem -4rem 0 0.9rem #bdb725, -4rem -4rem 0 1.1rem #302e9b, -4rem -4rem 0 1.6rem #bdb725, -4rem -4rem 0 2rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) {\n  width: 16rem;\n  height: 53rem;\n  transform: translate3d(20rem, 0rem, 0);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):before {\n  height: 20rem;\n  width: 35rem;\n  background: #b32b28;\n  transform: translate3d(-10rem, -10rem, 0) rotate(-45deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1):after {\n  height: 5rem;\n  width: 30rem;\n  background: #fff;\n  transform: translate3d(-10rem, 10rem, 0) rotate(-45deg);\n  border: 0.5rem solid #fff;\n  box-shadow: inset 0 0 0 0.4rem #302e9b, 0 0 0 0.4rem #302e9b;\n  background: #fff;\n  background-image: radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0), radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0);\n  background-size: 6rem 6rem;\n  background-position: 0 0, 3rem 3rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1) {\n  transform: translate3d(0rem, 18rem, 0);\n  background: #302e9b;\n  height: 5rem;\n  width: 20rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):before {\n  height: 20rem;\n  width: 35rem;\n  background: #b32b28;\n  transform: translate3d(-10rem, 15rem, 0) rotate(-45deg);\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) > *:nth-of-type(1):after {\n  height: 5rem;\n  width: 30rem;\n  background: #fff;\n  transform: translate3d(-10rem, 12rem, 0) rotate(-45deg);\n  border: 0.5rem solid #fff;\n  box-shadow: inset 0 0 0 0.4rem #302e9b, 0 0 0 0.4rem #302e9b;\n  background: #fff;\n  background-image: radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0), radial-gradient(#b32b28 25%, #bdb725 35%, #190d23 45%, transparent 0);\n  background-size: 6rem 6rem;\n  background-position: 0 0, 3rem 3rem;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(3) {\n  width: 50rem;\n  height: 60rem;\n  border: 2rem dotted #302e9b;\n  transform: translate3d(31rem, -9rem, 0);\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(9) {\n  width: 50rem;\n  height: 37rem;\n  transform: translate3d(25rem, 19rem, 0);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(9):after {\n  width: 50rem;\n  height: 53rem;\n  transform: translate3d(2rem, -8rem, 0);\n  box-shadow: inset 0 0 0 0.5rem #302e9b, 0 0 0 1rem #fff;\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(9):before {\n  width: 15rem;\n  background: #190d23;\n  height: 2rem;\n  transform: translate3d(8.5rem, 0, 0) skewX(-35deg);\n  box-shadow: 0 0 0 0.5rem #302e9b, 0 0 0 1rem #190d23, 0 0 0 1.5rem #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(12) {\n  transform: translate3d(-1rem, 21.5rem, 0);\n  width: 45rem;\n  height: 32rem;\n  border-radius: 50%;\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(12):before {\n  width: 20rem;\n  height: 8rem;\n  background: repeating-linear-gradient(-45deg, #302e9b, #302e9b 0.2rem, rgba(255, 255, 255, 0) 0.2rem, rgba(255, 255, 255, 0) 1rem), #bdb725;\n  transform: translate3d(38rem, 19rem, 0);\n  border: 0.5rem solid #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(12):after {\n  width: 2.5rem;\n  height: 5rem;\n  transform: translate3d(33.5rem, 20.25rem, 0);\n  background: #bdb725;\n  border: 0.4rem solid #302e9b;\n  border-radius: 50%;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(13) {\n  transform: translate3d(28.5rem, 46rem, 0);\n  border: 0.4rem solid #302e9b;\n  border-top: none;\n  width: 4.25rem;\n  height: 2rem;\n  border-radius: 1.5rem 0 100% 0.75rem;\n  background: #fff;\n  box-shadow: 0.75rem -1rem 0 #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(13):before {\n  transform: translate3d(-4rem, -2rem, 0);\n  border: 0.4rem solid #302e9b;\n  border-right: none;\n  width: 5.5rem;\n  height: 1.8rem;\n  border-radius: 1rem 0 0 1rem;\n  background: #fff;\n  box-shadow: 0.7rem 1rem 0 -0.4rem #fff, 0.3rem 1.4rem 0 -0.4rem #302e9b, 0.8rem -1.3rem 0 -0.5rem #fff, 0.8rem -1.3rem 0 -0.1rem #302e9b, 1.8rem -2.3rem 0 -0.6rem #fff, 1.8rem -2.3rem 0 -0.2rem #302e9b;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(13):after {\n  transform: translate3d(1rem, -4.2rem, 0);\n  width: 4rem;\n  height: 4.5rem;\n  border-radius: 0 100% 100% 0;\n  border: 0.4rem solid #302e9b;\n  border-left: none;\n  border-bottom: none;\n  background: #fff;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(10) {\n  width: 10rem;\n  height: 8rem;\n  transform: translate3d(32.5rem, 40.5rem, 0);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(10):before {\n  border-radius: 50%;\n  transform: translate3d(-2.5rem, -2.5rem, 0);\n  width: 7.5rem;\n  height: 5rem;\n  border: 0.5rem solid #302e9b;\n  box-shadow: 0 0 0 1rem #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(10):after {\n  border-radius: 50%;\n  transform: translate3d(-2.5rem, 5rem, 0);\n  width: 7.5rem;\n  height: 6rem;\n  border: 0.5rem solid #302e9b;\n  box-shadow: 0 0 0 1rem #bdb725;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(11) {\n  width: 10rem;\n  height: 4rem;\n  transform: translate3d(33.75rem, 42.2rem, 0) scaleY(0.7);\n  overflow: hidden;\n}\nfront > * > *:nth-of-type(2) > *:nth-of-type(11):after {\n  width: 2.5rem;\n  height: 2.5rem;\n  transform: translate3d(0rem, 0.5rem, 0) rotate(45deg);\n  background: #302e9b;\n  border: 0.75rem solid #bdb725;\n  box-shadow: 0 0 0 0.5rem #302e9b, 0 0 0 2rem #bdb725;\n}\nfront > *:nth-of-type(2) {\n  transform: rotate(180deg);\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) {\n  background: none;\n  border: none;\n  box-shadow: none;\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):before {\n  transform: translate3d(45.75rem, 32.4rem, 0);\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2):after {\n  transform: translate3d(45.7rem, 32.3rem, 0) rotate(-45deg);\n}\nfront > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(2) > *:nth-of-type(1) {\n  display: none;\n}\n</style>\n\n<div class=\"header\">\n  <div class=\"header-inner\">\n    <div class=\"back-btn\" onclick=\"javascript: history.back()\">\n      <div class=\"back-icon\"></div>\n      <span class=\"back-text\">返回</span>\n    </div>\n  </div>\n</div>\n<screen>\n  <hoverspace></hoverspace>\n  <shadow></shadow>\n  <card>\n      <back></back>\n      <front>\n          <!--up-->\n          <x>\n              <x></x>\n              <x>\n                  <x> <x></x> </x>\n                  <!--body-->\n                  <x>\n                      <!--shirt-->\n                      <x> <x></x> <x></x> </x>\n                      <!--coat-->\n                      <x> <x></x> </x>\n                      <x></x>\n                  </x>\n                  <x></x> <x></x> <x></x> <x></x>\n                  <x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> </x>\n                  <x></x> <x></x> <x></x> <x></x> <x></x> <x></x>\n              </x>\n          </x>\n          <!--down-->\n          <x>\n              <x></x>\n              <x>\n                  <x> <x></x> </x>\n                  <!--body-->\n                  <x>\n                      <!--shirt-->\n                      <x> <x></x> <x></x> </x>\n                      <!--coat-->\n                      <x> <x></x> </x> <x></x>\n                  </x>\n                  <x></x> <x></x> <x></x> <x></x>\n                  <x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> <x></x> </x>\n                  <x></x> <x></x> <x></x> <x></x> <x></x> <x></x>\n              </x>\n          </x>\n      </front>\n  </card>\n</screen>"

/***/ }),

/***/ "./src/tutorial/html.html":
/*!********************************!*\
  !*** ./src/tutorial/html.html ***!
  \********************************/
/***/ ((module) => {

module.exports = "<html>\n\n<head>\n  <style>\n    html,\n    body {\n      margin: 0;\n      background: var(--background, #000);\n      transition: background .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .56s cubic-bezier(0.52, 0.16, 0.24, 1);\n    }\n\n    body {\n      margin: 0 8px;\n    }\n\n    .placeholder {\n      height: var(--application-safe-area-top)\n    }\n  </style>\n</head>\n\n<body>\n  <div class=\"placeholder\"></div>\n  <div class=\"questionTitle\"></div>\n</body>\n\n<script>\n  const questionMap = {\n    0: {\n      title: '请问你的应用有'\n    }\n  }\n</script>\n\n</html>"

/***/ }),

/***/ "./src/typesDoc/html.html":
/*!********************************!*\
  !*** ./src/typesDoc/html.html ***!
  \********************************/
/***/ ((module) => {

module.exports = "<style>\nhtml, body {\n  font-size: 1vmin;\n  background: none;\n  margin: 0;\n  height: 100%;\n}\n#page {\n  margin: 0 auto;\n  max-width: 500px;\n  min-height: 100%;\n  background: #333;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n}\n</style>\n\n<div id=\"page\">\n  <code-highlight type=\"js\">\n    import { createApplication } from 'lath'\n\n    /**\n    * \"home\": appletName\n    * \"root\": target element id\n    */\n    createApplication({\n      index: {\n        id: 'home', // 命名一个模块 id\n        target: 'root', // 元素 或 元素 id\n      },\n      applets: {\n        frameworks: {...}, // 直接进行配置\n        home: () => import('../home') // Promise 的方式进行配置，这里配置的就是你当前的页面了\n        otherPage: {...} // 这里就是你当前页面准备链接到其它页面的配置了\n      }\n    }).then({ application } => {\n      // 返回 Application 实例，可以在这里做一些操作\n    })\n  </code-highlight>\n</div>"

/***/ }),

/***/ "./src/api/minify.ts":
/*!***************************!*\
  !*** ./src/api/minify.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./src/api/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./src/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 1,
        title: '',
        free: false,
        source: {
            html: (_html_html__WEBPACK_IMPORTED_MODULE_0___default())
        },
        color: 'inherit',
        animation: 'slide',
        background: 'auto'
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./src/components/app-logo/index.ts":
/*!******************************************!*\
  !*** ./src/components/app-logo/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogo": () => (/* binding */ AppLogo)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/components/app-logo/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template');
tmpl.innerHTML = (_template_html__WEBPACK_IMPORTED_MODULE_0___default());
class AppLogo extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        const homeBtn = shadowRoot.getElementById('home-btn');
        const apiBtn = shadowRoot.getElementById('api-btn');
        const tab = shadowRoot.getElementById('tab');
        window.addEventListener('lathApplicationReady', (event) => {
            const { detail } = event;
            detail.application.get('frameworks').then((frameworksApplet) => {
                frameworksApplet.on('slideEnter', (applet) => {
                    if (applet.id === 'home') {
                        homeBtn === null || homeBtn === void 0 ? void 0 : homeBtn.setAttribute('class', 'word active');
                        apiBtn === null || apiBtn === void 0 ? void 0 : apiBtn.setAttribute('class', 'word');
                        tab.style.transform = 'translate(-50%, -50%)';
                    }
                    else {
                        apiBtn === null || apiBtn === void 0 ? void 0 : apiBtn.setAttribute('class', 'word active');
                        homeBtn === null || homeBtn === void 0 ? void 0 : homeBtn.setAttribute('class', 'word');
                        tab.style.transform = 'translate(-100%, -50%)';
                    }
                });
            });
        });
    }
}
customElements.define('app-logo', AppLogo);


/***/ }),

/***/ "./src/components/app-nav/index.ts":
/*!*****************************************!*\
  !*** ./src/components/app-nav/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppNav": () => (/* binding */ AppNav)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/components/app-nav/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);

const tmpl = document.createElement('template');
tmpl.innerHTML = `${(_template_html__WEBPACK_IMPORTED_MODULE_0___default())}`;
class AppNav extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        /** @type {HTMLElement | null} */
        this.header = shadowRoot.getElementById('header');
        this.menuIcon = shadowRoot.getElementById('menu-icon');
        this.menuList = shadowRoot.getElementById('menu-list');
    }
    connectedCallback() {
        var _a, _b, _c;
        if (this.header !== null) {
            // this.header.addEventListener('click', this.handleMenuButtonClick)
        }
        this.upgradeProperty('hidden');
        (_a = this.menuIcon) === null || _a === void 0 ? void 0 : _a.addEventListener('opened', () => {
            var _a;
            (_a = this.menuList) === null || _a === void 0 ? void 0 : _a.setAttribute('open', '');
        });
        (_b = this.menuIcon) === null || _b === void 0 ? void 0 : _b.addEventListener('closed', () => {
            var _a;
            (_a = this.menuList) === null || _a === void 0 ? void 0 : _a.removeAttribute('open');
        });
        (_c = this.menuList) === null || _c === void 0 ? void 0 : _c.addEventListener('click', (event) => {
            const e = new CustomEvent('click', {
                detail: event
            });
            window.dispatchEvent(new CustomEvent('click', e));
            event.preventDefault();
            event.stopPropagation();
        });
    }
    upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    get hidden() {
        return this.hasAttribute('hidden');
    }
    set hidden(isHidden) {
        if (isHidden) {
            if (!this.hasAttribute('hidden')) {
                this.setAttribute('hidden', '');
            }
        }
        else {
            if (this.hasAttribute('hidden')) {
                this.removeAttribute('hidden');
            }
        }
    }
    static get observedAttributes() {
        return ['hidden'];
    }
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(name, _oldValue, _newValue) {
        if (name === 'hidden') {
            if (!this.hidden) {
                this.dispatchEvent(new CustomEvent('hidden', {
                    bubbles: true
                }));
            }
            else {
                this.dispatchEvent(new CustomEvent('visible', {
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define('app-nav', AppNav);


/***/ }),

/***/ "./src/components/code-highlight/index.ts":
/*!************************************************!*\
  !*** ./src/components/code-highlight/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScopeCodeHighlighter": () => (/* binding */ ScopeCodeHighlighter)
/* harmony export */ });
/* harmony import */ var _Prism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prism */ "./src/components/code-highlight/Prism.js");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ "./src/components/code-highlight/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_1__);


console.log(_Prism__WEBPACK_IMPORTED_MODULE_0__["default"], 222);
(function () {
    if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
        window.customElements === undefined ||
        // The webcomponentsjs custom elements polyfill doesn't require
        // ES2015-compatible construction (`super()` or `Reflect.construct`).
        window.customElements['polyfillWrapFlushCallback'])
        return;
    const BuiltInHTMLElement = HTMLElement;
    /**
     * With jscompiler's RECOMMENDED_FLAGS the function name will be optimized away.
     * However, if we declare the function as a property on an object literal, and
     * use quotes for the property name, then closure will leave that much intact,
     * which is enough for the JS VM to correctly set Function.prototype.name.
     */
    const wrapperForTheName = {
        'HTMLElement': /** @this {!Object} */ function HTMLElement() {
            return Reflect.construct(BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
        }
    };
    window.HTMLElement = wrapperForTheName['HTMLElement'];
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();
const tmpl = document.createElement('template');
tmpl.innerHTML = `${(_template_html__WEBPACK_IMPORTED_MODULE_1___default())}`;
const ScopeCodeHighlighter = (w) => {
    class CodeHighlighter extends w.HTMLElement {
        constructor() {
            var _a, _b, _c;
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            const ele = shadowRoot.getElementById('code');
            const lang = this.getAttribute('type');
            let codeText = (_b = (_a = this.childNodes[0]) === null || _a === void 0 ? void 0 : _a.wholeText) !== null && _b !== void 0 ? _b : '';
            const trimstr = ((_c = /^\s+/.exec(codeText)) === null || _c === void 0 ? void 0 : _c[0]) || '';
            const trimlength = trimstr.length;
            codeText = codeText.replace(/\n\s+/g, function (trims) {
                trims = '\n' + trims.substr(trimlength);
                return trims;
            });
            codeText = codeText.trim();
            // if (this.offsetTop === 0) {
            //   setTimeout(() => {
            //     Prism.highlightCode(ele, codeText, lang ?? 'js')
            //   }, 100)
            //   return
            // }
            // Prism.highlightCode(ele, codeText, lang ?? 'js')
            const html = _Prism__WEBPACK_IMPORTED_MODULE_0__["default"].highlight(codeText, _Prism__WEBPACK_IMPORTED_MODULE_0__["default"].languages[lang], lang);
            ele.innerHTML = html;
        }
        connectedCallback() {
            //
        }
        static get observedAttributes() {
            return [''];
        }
    }
    return CodeHighlighter;
};
// customElements.define('code-highlight', CodeHighlighter)


/***/ }),

/***/ "./src/components/dark-switch/index.ts":
/*!*********************************************!*\
  !*** ./src/components/dark-switch/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkSwitch": () => (/* binding */ DarkSwitch)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/components/dark-switch/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);

const tmpl = document.createElement('template');
tmpl.innerHTML = `${(_template_html__WEBPACK_IMPORTED_MODULE_0___default())}`;
class DarkSwitch extends HTMLElement {
    constructor() {
        super();
        this.handleMenuButtonClick = () => {
            this.open = !this.open;
            parent.postMessage('dark-switch', '*');
        };
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        /** @type {HTMLElement | null} */
        this._menuButton = shadowRoot.getElementById('m');
    }
    connectedCallback() {
        if (this._menuButton !== null) {
            this._menuButton.addEventListener('click', this.handleMenuButtonClick);
        }
        this.upgradeProperty('open');
    }
    // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
    /**
     * @param {string} prop
     *
     * @memberOf WcMenuButton
     */
    upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    get open() {
        return this.hasAttribute('open');
    }
    set open(isOpen) {
        if (isOpen) {
            if (!this.hasAttribute('open')) {
                this.setAttribute('open', '');
            }
        }
        else {
            if (this.hasAttribute('open')) {
                this.removeAttribute('open');
            }
        }
    }
    static get observedAttributes() {
        return ['open'];
    }
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(_name, _oldValue, _newValue) {
        if (_name === 'open') {
            if (!this.open) {
                this.dispatchEvent(new CustomEvent('closed', {
                    bubbles: true
                }));
            }
            else {
                this.dispatchEvent(new CustomEvent('opened', {
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define('dark-switch', DarkSwitch);


/***/ }),

/***/ "./src/components/lang-switch/index.ts":
/*!*********************************************!*\
  !*** ./src/components/lang-switch/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangSwitch": () => (/* binding */ LangSwitch)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/components/lang-switch/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);

const tmpl = document.createElement('template');
tmpl.innerHTML = `${(_template_html__WEBPACK_IMPORTED_MODULE_0___default())}`;
class LangSwitch extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        /** @type {HTMLElement | null} */
        this.menuButton = shadowRoot.getElementById('m');
        this.popoverLayer = shadowRoot.getElementById('popoverLayer');
        console.log(this.menuButton, this.popoverLayer);
    }
    connectedCallback() {
        if (this.menuButton !== null) {
            this.menuButton.addEventListener('click', this.handleMenuButtonClick.bind(this));
        }
        if (this.popoverLayer !== null) {
            this.popoverLayer.addEventListener('click', this.handlePopoverLayerClick.bind(this));
        }
        this.upgradeProperty('open');
    }
    upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    get open() {
        return this.hasAttribute('open');
    }
    set open(isOpen) {
        if (isOpen) {
            if (!this.hasAttribute('open')) {
                this.setAttribute('open', '');
            }
        }
        else {
            if (this.hasAttribute('open')) {
                this.removeAttribute('open');
            }
        }
    }
    static get observedAttributes() {
        return ['open'];
    }
    attributeChangedCallback() {
        if (this.open) {
            this.popoverLayer.style.display = 'block';
        }
        else {
            this.popoverLayer.style.display = 'none';
        }
    }
    handleMenuButtonClick() {
        if (!this.popoverLayer)
            return;
        this.open = !this.open;
        if (this.open) {
            this.popoverLayer.style.display = 'block';
        }
        else {
            this.popoverLayer.style.display = 'none';
        }
    }
    handlePopoverLayerClick(event) {
        const path = event.composedPath();
        const target = path[0];
        if (target === this.popoverLayer) {
            this.open = false;
        }
        if (target.tagName === 'LI') {
            const lang = target.getAttribute('data-lang');
            if (lang) {
                localStorage.setItem('__lang__', lang);
                window['app'].refresh();
            }
            this.open = false;
        }
    }
}
customElements.define('lang-switch', LangSwitch);


/***/ }),

/***/ "./src/components/menu-icon/index.ts":
/*!*******************************************!*\
  !*** ./src/components/menu-icon/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuIcon": () => (/* binding */ MenuIcon)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/components/menu-icon/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);
(function () {
    if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
        window.customElements === undefined ||
        // The webcomponentsjs custom elements polyfill doesn't require
        // ES2015-compatible construction (`super()` or `Reflect.construct`).
        window.customElements['polyfillWrapFlushCallback'])
        return;
    const BuiltInHTMLElement = HTMLElement;
    /**
     * With jscompiler's RECOMMENDED_FLAGS the function name will be optimized away.
     * However, if we declare the function as a property on an object literal, and
     * use quotes for the property name, then closure will leave that much intact,
     * which is enough for the JS VM to correctly set Function.prototype.name.
     */
    const wrapperForTheName = {
        'HTMLElement': /** @this {!Object} */ function HTMLElement() {
            return Reflect.construct(BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
        }
    };
    window.HTMLElement = wrapperForTheName['HTMLElement'];
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template');
tmpl.innerHTML = (_template_html__WEBPACK_IMPORTED_MODULE_0___default());
class MenuIcon extends HTMLElement {
    constructor() {
        super();
        this.handleMenuButtonClick = () => {
            this.open = !this.open;
        };
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        /** @type {HTMLElement | null} */
        this._menuButton = shadowRoot.getElementById('m');
    }
    connectedCallback() {
        if (this._menuButton !== null) {
            this._menuButton.addEventListener('click', this.handleMenuButtonClick);
        }
        this.upgradeProperty('open');
    }
    // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
    /**
     * @param {string} prop
     *
     * @memberOf WcMenuButton
     */
    upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    get open() {
        return this.hasAttribute('open');
    }
    set open(isOpen) {
        if (isOpen) {
            if (!this.hasAttribute('open')) {
                this.setAttribute('open', '');
            }
        }
        else {
            if (this.hasAttribute('open')) {
                this.removeAttribute('open');
            }
        }
    }
    static get observedAttributes() {
        return ['open'];
    }
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(_name, _oldValue, _newValue) {
        if (_name === 'open') {
            if (!this.open) {
                this.dispatchEvent(new CustomEvent('closed', {
                    bubbles: true
                }));
            }
            else {
                this.dispatchEvent(new CustomEvent('opened', {
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define('menu-icon', MenuIcon);


/***/ }),

/***/ "./src/components/menu-list/index.ts":
/*!*******************************************!*\
  !*** ./src/components/menu-list/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuList": () => (/* binding */ MenuList)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/components/menu-list/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement('template');
tmpl.innerHTML = (_template_html__WEBPACK_IMPORTED_MODULE_0___default());
class MenuList extends HTMLElement {
    constructor() {
        super();
        this.handleMenuButtonClick = () => {
            this.open = !this.open;
        };
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        /** @type {HTMLElement | null} */
        this._menuButton = shadowRoot.getElementById('m');
    }
    connectedCallback() {
        if (this._menuButton !== null) {
            this._menuButton.addEventListener('click', this.handleMenuButtonClick);
        }
        this.upgradeProperty('open');
    }
    // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
    /**
     * @param {string} prop
     *
     * @memberOf WcMenuButton
     */
    upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    get open() {
        return this.hasAttribute('open');
    }
    set open(isOpen) {
        if (isOpen) {
            if (!this.hasAttribute('open')) {
                this.setAttribute('open', '');
            }
        }
        else {
            if (this.hasAttribute('open')) {
                this.removeAttribute('open');
            }
        }
    }
    static get observedAttributes() {
        return ['open'];
    }
    /**
     * @param {string} _name
     * @param {any} _oldValue
     * @param {any} _newValue
     * @memberof WcMenuButton
     */
    attributeChangedCallback(name, _oldValue, _newValue) {
        if (name === 'open') {
            if (!this.open) {
                this.dispatchEvent(new CustomEvent('closed', {
                    bubbles: true
                }));
            }
            else {
                this.dispatchEvent(new CustomEvent('opened', {
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define('menu-list', MenuList);


/***/ }),

/***/ "./src/doc/minify.ts":
/*!***************************!*\
  !*** ./src/doc/minify.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./src/doc/source.ts");
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./src/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 2,
        title: 'DOCS',
        free: true,
        source: {
            html: () => {
                const htmlString = (0,_source__WEBPACK_IMPORTED_MODULE_0__.getHtml)();
                if (htmlString) {
                    return htmlString;
                }
                return '';
            }
        },
        animation: 'slide',
        color: 'inherit',
        timeout: 300000,
        background: 'auto',
        useMirroring: false,
        capture: (e) => {
            var _a;
            return ((_a = e.href) !== null && _a !== void 0 ? _a : String(e)).indexOf('doc') !== -1;
        }
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./src/doc/source.ts":
/*!***************************!*\
  !*** ./src/doc/source.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHtml": () => (/* binding */ getHtml)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _css_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.html */ "./src/doc/css.html");
/* harmony import */ var _css_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foot_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foot.html */ "./src/doc/foot.html");
/* harmony import */ var _foot_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foot_html__WEBPACK_IMPORTED_MODULE_1__);



const generateCard = (schema) => {
    const htmlStringArray = [];
    for (const item of schema) {
        htmlStringArray.push(generateItem(item));
    }
    return `
    <div class="card">
      ${htmlStringArray.join('\n')}
    </div>
  `;
};
const generateItem = (schema) => {
    const htmlStringArray = [];
    const type = schema.type;
    switch (type) {
        case 'title':
            return `
        <div class="card-title">${schema.value}</div>
      `;
        case 'text':
            return `
        <p>${schema.value}</p>
      `;
        case 'brief':
            return `
        <p style="font-size: 21px;font-weight: bold;">${schema.value}</p>
      `;
        case 'image':
            return `
        <img src="${schema.value}" />
      `;
        case 'sub':
            return `
        <small>${schema.value}</small>
      `;
        case 'tips':
            return `
        <div class="tips">${schema.value}</div>
      `;
        case 'hr':
            return `
        <hr />
      `;
        case 'code':
            return `
        <div class="doc-code">
          ${schema.value}
        </div>
      `;
    }
    return htmlStringArray.join('\n');
};
const generateHtml = (schema) => {
    const htmlStringArray = [];
    for (const item of schema.content) {
        htmlStringArray.push(generateCard(item));
    }
    return `
    ${(_css_html__WEBPACK_IMPORTED_MODULE_0___default())}
    <div class="placeholder"></div>
    <div class="doc">
      <div id="header">
        <div class="header-inner">
          <div class="back-btn" onclick="javascript: history.back()">
            <div class="back-icon"></div>
            <span class="back-text">List</span>
          </div>
          <div class="doc-title">${schema.title}</div>
        </div>
      </div>
      <section id="page-content">
        ${htmlStringArray.join('\n')}
      </section>
      ${(_foot_html__WEBPACK_IMPORTED_MODULE_1___default())}
    </div>
  `;
};
const getHtml = () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function* () {
    const id = location.search.split('=')[1];
    const lang = localStorage.getItem('__lang__');
    let schema;
    if (lang === 'zh-CN') {
        schema = yield __webpack_require__.e(/*! import() */ "src_doc_lang_zh-CN_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lang/zh-CN */ "./src/doc/lang/zh-CN.ts"));
    }
    else if (lang === 'JP') {
        schema = yield __webpack_require__.e(/*! import() */ "src_doc_lang_jp_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lang/jp */ "./src/doc/lang/jp.ts"));
    }
    else {
        schema = yield __webpack_require__.e(/*! import() */ "src_doc_lang_en_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lang/en */ "./src/doc/lang/en.ts"));
    }
    if (schema[id]) {
        return generateHtml(schema[id]);
    }
    else {
        schema = yield __webpack_require__.e(/*! import() */ "src_doc_lang_zh-CN_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lang/zh-CN */ "./src/doc/lang/zh-CN.ts"));
        return generateHtml(schema[id]);
    }
});



/***/ }),

/***/ "./src/empty/minify.ts":
/*!*****************************!*\
  !*** ./src/empty/minify.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./src/empty/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./src/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 3,
        title: '',
        free: true,
        source: {
            html: (_html_html__WEBPACK_IMPORTED_MODULE_0___default())
        },
        animation: 'slide-up',
        color: '#bd243f',
        background: 'auto',
        capture: (e) => {
            var _a;
            return ((_a = e.href) !== null && _a !== void 0 ? _a : String(e)).indexOf('empty') !== -1;
        }
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./src/frameworks/minify.ts":
/*!**********************************!*\
  !*** ./src/frameworks/minify.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
};
const darkTheme = {};
for (let k in lightTheme) {
    darkTheme[k] = '';
}
const defTheme = darkTheme;
document.documentElement.style.background = document.body.style.background = defTheme === darkTheme ? '#000' : '#f5f5f5';
document.documentElement.style.overscrollBehavior = document.body.style.overscrollBehavior = 'none';
let a;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        // index: 'home',
        title: 'LATH',
        level: 0,
        free: false,
        // swipeModel: false,
        prerender: ['home', 'empty', 'doc'],
        // oneHistory: true,
        swipeModel: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        defaultSlideViewApplets: [
            {
                id: "home",
                activate: "instant"
            },
            {
                id: "api",
                activate: "lazy"
            }
        ],
        pullToRefresh: true,
        animation: 'slide',
        appSwitcher: true,
        background: true,
        color: defTheme === darkTheme ? '#000' : '#f5f5f5',
        safeArea: ['48px', '0px', '0px', '0px'],
        inject: (_shadowWindow, applet) => {
            a = (e) => {
                if (e.data !== 'dark-switch')
                    return;
                const config = applet.config;
                const curTheme = config.globalCSSVariables === darkTheme ? lightTheme : darkTheme;
                applet.application.updateGlobalCSSVariables(curTheme);
                config.globalCSSVariables = curTheme;
                window.document.documentElement.style.background = window.document.body.style.background = curTheme === darkTheme ? '#000' : '#f5f5f5';
            };
            window.addEventListener('message', a);
        },
        transfer: (url) => {
            return url.indexOf('#doc') !== -1 ? 'doc' : '';
        },
        globalCSSVariables: defTheme
    },
    events: {
        destroy: () => {
            window.removeEventListener('message', a);
        }
    }
});


/***/ }),

/***/ "./src/frameworks/source.ts":
/*!**********************************!*\
  !*** ./src/frameworks/source.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.html */ "./src/frameworks/css.html");
/* harmony import */ var _css_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html.html */ "./src/frameworks/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_css_html__WEBPACK_IMPORTED_MODULE_0___default()) + (_html_html__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/home/html.ts":
/*!**************************!*\
  !*** ./src/home/html.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lathanim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lathanim */ "./src/home/lathanim.ts");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./src/home/lang/index.ts");
const html = (s, ...v) => String.raw(s, ...v);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const lang = (0,_lang__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return html `
    <div>
      <div class="placeholder"></div>
      </div>
      <figure id="figure">
        <div class="iconContainer">
          <div id="icon" class="icon">
            <div class="circle">
              <div id="logoContainer">
                ${_lathanim__WEBPACK_IMPORTED_MODULE_0__["default"]}
              </div>
              <h3 id="logoText">Lath</h3>
            </div>
          </div>
        </div>
        <div class="subtitle">${lang.websiteSubtitle}</div>
        <h2>${lang.websiteMainTitle}</h2>
      </figure>
      <div class="card">
        <div class="card-title">${lang.Start}</div>
        <div class="card-list">
          <a href="?id=install#doc">${lang.Install}</a>
          <a href="?id=start#doc">${lang.GetStarted}</a>
        </div>
      </div>
      <div class="card snap-card">
        <div class="card-title">${lang.QuickDemo}</div>
        <div class="snap-container">
          ${lang.QuickDemoList.map((item) => {
        return `
              <div to-applet="doc?id=${item.id}" class="child">
                <h2>${item.title}</h2>
                <p>${item.subTitle}</p>
              </div>
            `;
    }).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-title">${lang.Base}</div>
        <div class="card-list">
          <a href="?id=title#doc">${lang.Title}</a>
          <a href="?id=source#doc">${lang.Source}</a>
          <a href="?id=render#doc">${lang.Render}</a>
        </div>
      </div>
      <div class="card">
        <div class="card-title">${lang.Viewport}</div>
        <div class="card-list">
          <a href="?id=free#doc">${lang.Free}</a>
          <a href="?id=level#doc">${lang.Level}</a>
          <a href="?id=color#doc">${lang.Color}</a>
          <a href="?id=presetEffect#doc">${lang.Preset_Effect}</a>
          <a href="?id=customEffect#doc">${lang.Custom_Effect}</a>
          <a href="?id=defaultSlideViewApplets#doc">${lang.DefaultSlideViewApplets}</a>
          <a href="?id=modality#doc">${lang.Modality}</a>
        </div>
      </div>
      <div class="card">
        <div class="card-title">${lang.FrameworksConfig}</div>
        <ul class="card-list">
          <a href="?id=index#doc">${lang.Index}</a>
          <a href="?id=singleFlow#doc">${lang.SingleFlow}</a>
          <a href="?id=singleLock#doc">${lang.SingleLock}</a>
          <a href="?id=preIndex#doc">${lang.PreIndex}</a>
          <a href="?id=notFound#doc">${lang.NotFound}</a>
          <a href="?id=holdBack#doc">${lang.HoldBack}</a>
          <a href="?id=appletManifestProcess#doc">${lang.AppletManifestProcess}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.Lifecycle}</div>
        <ul class="card-list">
          <a href="?id=background#doc">${lang.Background}</a>
          <a href="?id=timeout#doc">${lang.Timeout}</a>
          <a href="?id=limit#doc">${lang.Limit}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.Performance}</div>
        <ul class="card-list">
          <a href="?id=resource#doc">${lang.Resource}</a>
          <a href="?id=prerender#doc">${lang.Prerender}</a>
          <a href="?id=components#doc">${lang.Components}</a>
          <a href="?id=mediaGuard#doc">${lang.MediaGuard}</a>
          <a href="?id=portal#doc">${lang.Portal}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.Safest}</div>
        <ul class="card-list">
          <a href="?id=allowHost#doc">${lang.AllowHost}</a>
          <a href="?id=sandbox#doc">${lang.Sandbox}</a>
          <a href="?id=capture#doc">${lang.Capture}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.Advance}</div>
        <ul class="card-list">
          <!-- <a href="?id=touchBorder#doc">${lang.TouchBorder}</a> -->
          <a href="?id=inject#doc">${lang.Inject}</a>
          <a href="?id=safeArea#doc">${lang.SafeArea}</a>
          <a href="?id=globalCSSVariables#doc">${lang.GlobalCSSVariables}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.Preset_Config}</div>
        <ul class="card-list">
          <a href="?id=tunneling#doc">${lang.Tunneling}</a>
          <a href="?id=unusedShadowDom#doc">${lang.UnusedShadowDom}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.ExtraFeatures}</div>
        <div class="card-list">
          <a href="?id=pullToRefresh#doc">${lang.PullToRefresh}</a>
          <a href="?id=tapStatusBarToScrollToTop#doc">${lang.TapStatusBarToScrollToTop}</a>
          <a href="?id=mainScrollId#doc">${lang.MainScrollId}</a>
        </div>
      </div>
      <div class="card">
        <div class="card-title">${lang.Other}</div>
        <ul class="card-list">
          <a href="?id=apply#doc">${lang.Apply_unApply}</a>
          <a href="?id=events#doc">${lang.Events}</a>
          <a href="?id=useMirroring#doc">${lang.UseMirroring}</a>
          <a href="?id=transient#doc">${lang.Transient_DisableTransient}</a>
        </ul>
      </div>
      <div class="card">
        <p class="copyright">
          This project is licensed under <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener">MIT License</a><br> Copyright © 2010-2022 LATH
        </p>
      </div>
      <br />
    </div>
`;
});


/***/ }),

/***/ "./src/home/lang/en.ts":
/*!*****************************!*\
  !*** ./src/home/lang/en.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    websiteMainTitle: 'Bring interactive experiences comparable to Native Apps.',
    websiteSubtitle: 'A pure front-end container',
    Start: 'Start',
    QuickDemo: 'Quick Demo Index',
    QuickDemoList: [
        {
            id: 'tutorialSlidingCards',
            title: 'Sliding cards, smooth and not stuck',
            subTitle: 'Gesture and event-driven support'
        },
        {
            id: 'pullToRefresh',
            title: 'Smooth pull-down refresh without the white screen, flicker',
            subTitle: 'Cool Animations without intervention'
        },
        {
            id: 'modality',
            title: 'A new page popped up by a floating layer',
            subTitle: 'Gesture support and smooth animation'
        },
        {
            id: 'tunneling',
            title: 'Implement a solution for cross-domain pages',
            subTitle: 'No need to change the original logic'
        },
        {
            id: 'globalCSSVariables',
            title: 'Solution for multiple theme',
            subTitle: 'Smooth transitions for any coding scheme'
        }
    ],
    Install: 'Installation Instructions',
    GetStarted: 'Get Started',
    Base: 'Basic',
    Title: 'Title',
    Source: 'Source',
    Index: 'Index',
    Viewport: 'Viewport',
    Free: 'Free',
    Level: 'Level',
    Color: 'Color',
    Animate_Effect: 'Animate Effect',
    Custom_Effect: 'Custom Effect',
    Preset_Effect: 'Preset Effect',
    Modality: 'Modality',
    Lifecycle: 'Lifecycle',
    Background: 'Background',
    Timeout: 'Timeout',
    Limit: 'Limit',
    Performance: 'Performance',
    Resource: 'Resource',
    Prerender: 'Prerender',
    Components: 'Web Components',
    MediaGuard: 'MediaGuard',
    Portal: 'Portal',
    Safest: 'Security',
    AllowHost: 'AllowHost',
    Sandbox: 'Sandbox',
    Capture: 'Capture',
    Advance: 'Advance',
    AppletManifestProcess: 'AppletManifestProcess',
    TouchBorder: 'TouchBorder',
    Inject: 'Inject',
    Render: 'Render',
    SafeArea: 'SafeArea',
    GlobalCSSVariables: 'GlobalCSSVariables',
    Preset_Config: 'Preset Config',
    Tunneling: 'Tunneling',
    UnusedShadowDom: 'UnusedShadowDom',
    DefaultSlideViewApplets: 'DefaultSlideViewApplets',
    OpenSlideViewLeftHolder: 'OpenSlideViewLeftHolder',
    ExtraFeatures: 'ExtraFeatures',
    PullToRefresh: 'PullToRefresh',
    TapStatusBarToScrollToTop: 'TapStatusBarToScrollToTop',
    MainScrollId: 'MainScrollId',
    FrameworksConfig: 'Frameworks unique configurations',
    Apply_unApply: 'Apply & unApply',
    Events: 'Events',
    PreIndex: 'PreIndex',
    NotFound: 'NotFound',
    SingleFlow: 'SingleFlow',
    SingleLock: 'SingleLock',
    HoldBack: 'HoldBack',
    UseMirroring: 'UseMirroring',
    Transient_DisableTransient: 'Transient & DisableTransient',
    Other: 'Other',
});


/***/ }),

/***/ "./src/home/lang/index.ts":
/*!********************************!*\
  !*** ./src/home/lang/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en */ "./src/home/lang/en.ts");
/* harmony import */ var _zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zh-CN */ "./src/home/lang/zh-CN.ts");
/* harmony import */ var _jp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jp */ "./src/home/lang/jp.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const lang = localStorage.getItem('__lang__');
    if (lang === 'zh-CN') {
        return _zh_CN__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    else if (lang === 'JP') {
        return _jp__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    else {
        return _en__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
});


/***/ }),

/***/ "./src/home/lang/jp.ts":
/*!*****************************!*\
  !*** ./src/home/lang/jp.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    websiteMainTitle: 'ネイティブアプリに匹敵するインタラクティブな体験をもたらす.',
    websiteSubtitle: '純粋なフロントエンドコンテナ',
    Start: '始める',
    QuickDemo: 'チュートリアル',
    QuickDemoList: [
        {
            title: 'スライディングカード、スムーズでスタックしない',
            subTitle: 'ジェスチャーおよびイベント駆動型のサポート'
        },
        {
            title: '白い画面、ちらつきのないスムーズなプルダウンリフレッシュ',
            subTitle: '介入なしのクールなアニメーションn'
        },
        {
            title: 'フローティングレイヤーによってポップアップされた新しいページ',
            subTitle: 'ジェスチャーサポートとスムーズなアニメーション'
        },
        {
            title: 'クロスドメインページのソリューションを実装する',
            subTitle: '元のロジックを変更する必要はありません'
        },
        {
            title: '複数の言語向けのソリューション',
            subTitle: 'あらゆるコーディングスキームのスムーズな移行'
        }
    ],
    Install: 'インストールと必読',
    GetStarted: 'すぐに始めましょう',
    Base: '基本構成',
    Rel: 'ウィンドウプログラムタイプ宣言',
    Title: 'ウィンドウプログラムタイトル',
    Source: 'ウィンドウプログラムのソースコード',
    Index: 'メインプログラムのホームページ',
    Viewport: 'Windows構成',
    Free: 'フルスクリーンウィンドウ',
    Level: 'ウィンドウ表示レベル',
    Color: 'ウィンドウのデフォルトの背景色',
    Animate_Effect: 'ウィンドウアニメーション',
    Custom_Effect: 'カスタムトランジションアニメーション',
    Preset_Effect: 'プリセットトランジションアニメーション',
    Modality: 'Modality',
    Lifecycle: 'ライフサイクル',
    Background: 'バックグラウンド実行',
    Timeout: 'キャッシュタイムアウト',
    Limit: 'キャッシュ制限',
    Performance: 'パフォーマンス',
    Resource: 'リソースのリスト',
    Prerender: '事前レンダリング',
    Components: 'Webコンポーネント',
    MediaGuard: 'メディア管理',
    Portal: 'ウィンドウアクティベーションを使用する',
    Safest: '安全性',
    AllowHost: '許可されたドメイン',
    Sandbox: 'サンドボックス',
    Capture: 'キャプチャー',
    Advance: '前進',
    AppletManifestProcess: 'プログラム構成統一処理',
    TouchBorder: 'タッチボーダー',
    Inject: 'コンテナに注入',
    Render: '与える',
    SafeArea: '安全マージン',
    GlobalCSSVariables: 'グローバルスタイル変数',
    Preset_Config: '起動前の設定',
    Tunneling: 'トンネルモード',
    UnusedShadowDom: 'シャドウノードを使用しないでください',
    DefaultSlideViewApplets: 'ドック',
    OpenSlideViewLeftHolder: '左ハンドルをドッキング',
    ExtraFeatures: '追加機能',
    PullToRefresh: 'プルダウンして更新',
    TapStatusBarToScrollToTop: '上部のスクロールスタートビットをクリックします',
    MainScrollId: 'メインスクロールを定義する',
    FrameworksConfig: 'ユニークなフレームプログラムカード',
    Apply_unApply: 'アプリの設定',
    Events: 'イベント',
    PreIndex: 'アクセスする前にプログラムカードを挿入する',
    NotFound: '404 ページが見つかりません',
    SingleFlow: '歴史の一方向の流れ',
    SingleLock: '一方向ロック',
    HoldBack: 'ホーム出口をブロックする',
    UseMirroring: 'ミラーを使用する',
    Transient_DisableTransient: '一時的なプログラムカードとしてマーク',
    Other: '他の',
});


/***/ }),

/***/ "./src/home/lang/zh-CN.ts":
/*!********************************!*\
  !*** ./src/home/lang/zh-CN.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    websiteMainTitle: '带来媲美原生应用的交互体验，只需在页面中引入即可获得全部。',
    websiteSubtitle: '一个纯前端页面容器',
    Start: '开始',
    QuickDemo: '快速指引',
    QuickDemoList: [
        {
            id: 'tutorialSlidingCards',
            title: '多程序卡片间横滑，不卡顿不掉帧',
            subTitle: '支持手势与事件驱动'
        },
        {
            id: 'pullToRefresh',
            title: '无白屏无闪烁，实现平滑切换的下拉刷新',
            subTitle: '无需干预以及炫酷的动画效果'
        },
        {
            id: 'modality',
            title: '浮层式向上弹出新开页面',
            subTitle: '支持手势，并进行流畅的交互动画'
        },
        {
            id: 'tunneling',
            title: '为跨域页面实现解决方案',
            subTitle: '对原有逻辑无需改变'
        },
        {
            id: 'globalCSSVariables',
            title: '为多主题实现解决方案',
            subTitle: '任何代码方案都可得到平滑过渡'
        }
    ],
    Install: '安装与引言',
    GetStarted: '快速上手',
    Base: '基础配置',
    Title: '窗口下程序卡的标题',
    Source: '声明程序卡的源代码',
    Index: '应用的默认展示程序卡',
    Viewport: '视窗配置',
    Free: '全屏展示窗口',
    Level: '窗口显示的层级',
    Color: '窗口默认的背景色',
    Animate_Effect: '视窗动画',
    Custom_Effect: '自定义转场动画',
    Preset_Effect: '预置的转场动画',
    Modality: '模态效果类型',
    Lifecycle: '生命周期',
    Background: '是否允许背景任务',
    Timeout: '缓存有效期计时',
    Limit: '缓存个数上限',
    Performance: '性能',
    Resource: '静态资源列表',
    Prerender: '预渲染/预加载',
    Components: '共享 Web 组件',
    MediaGuard: '智能媒体管理',
    Portal: '使用浏览器的窗口激活特性',
    Safest: '安全',
    AllowHost: '允许加载的访问域',
    Sandbox: '容器沙盒的权限',
    Capture: '链接跳转捕获',
    Advance: '进阶的',
    AppletManifestProcess: '程序卡配置的统一处理',
    TouchBorder: '边缘手势',
    Inject: '容器内脚本注入',
    Render: '自定义渲染函数',
    SafeArea: '可视区安全边距',
    GlobalCSSVariables: '共享全局样式变量',
    Preset_Config: '启动前配置',
    Tunneling: '隧穿模式',
    UnusedShadowDom: '不使用影子节点',
    DefaultSlideViewApplets: '滑动卡视图',
    OpenSlideViewLeftHolder: '滑动卡左侧手柄',
    ExtraFeatures: '额外的功能',
    PullToRefresh: '静默下拉刷新',
    TapStatusBarToScrollToTop: '点击顶部滚动开始位',
    MainScrollId: '自定义主滚动 Id',
    FrameworksConfig: '框架程序卡独有',
    Apply_unApply: '应用预置项',
    Events: '事件',
    PreIndex: '在访问前插入程序卡',
    NotFound: '404 未发现页',
    SingleFlow: '历史单向流',
    SingleLock: '历史单向锁',
    HoldBack: '阻止退出的条件函数',
    UseMirroring: '使用缓存镜像提速',
    Transient_DisableTransient: '标记为临时程序卡',
    Other: '其它',
});


/***/ }),

/***/ "./src/home/lathanim.ts":
/*!******************************!*\
  !*** ./src/home/lathanim.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const repeatSpan31 = (prefixClass) => {
    let str = '';
    for (let i = 31; i > 0; i--) {
        str += '<span class="' + prefixClass + '-' + i + '"></span> \n';
    }
    return str;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`
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
`);


/***/ }),

/***/ "./src/home/minify.ts":
/*!****************************!*\
  !*** ./src/home/minify.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./src/home/source.ts");
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./src/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 1,
        title: 'Lath',
        free: false,
        source: {
            html: () => {
                const html = (0,_source__WEBPACK_IMPORTED_MODULE_0__["default"])();
                return Promise.resolve(html);
            }
        },
        animation: 'slide',
        color: 'inherit',
        background: 'auto',
        pullToRefresh: true,
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./src/home/source.ts":
/*!****************************!*\
  !*** ./src/home/source.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _head_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head.html */ "./src/home/head.html");
/* harmony import */ var _head_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_head_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html */ "./src/home/html.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    return `
    ${(_head_html__WEBPACK_IMPORTED_MODULE_0___default())}
    <div style="margin: 0 12px">
      ${(0,_html__WEBPACK_IMPORTED_MODULE_1__["default"])()}
    </div>
  `;
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lath */ "../Lath/app/launcher.js");
/* harmony import */ var _frameworks_minify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frameworks/minify */ "./src/frameworks/minify.ts");
/* harmony import */ var _frameworks_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frameworks/source */ "./src/frameworks/source.ts");
/* harmony import */ var _home_minify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/minify */ "./src/home/minify.ts");
/* harmony import */ var _tutorial_minify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorial/minify */ "./src/tutorial/minify.ts");
/* harmony import */ var _api_minify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/minify */ "./src/api/minify.ts");
/* harmony import */ var _doc_minify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doc/minify */ "./src/doc/minify.ts");
/* harmony import */ var _typesDoc_minify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typesDoc/minify */ "./src/typesDoc/minify.ts");
/* harmony import */ var _empty_minify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./empty/minify */ "./src/empty/minify.ts");
/* harmony import */ var _sheetsBottom_minify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sheetsBottom/minify */ "./src/sheetsBottom/minify.ts");
/* harmony import */ var _components_menu_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu-icon */ "./src/components/menu-icon/index.ts");
/* harmony import */ var _components_app_nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/app-nav */ "./src/components/app-nav/index.ts");
/* harmony import */ var _components_app_logo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/app-logo */ "./src/components/app-logo/index.ts");
/* harmony import */ var _components_menu_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/menu-list */ "./src/components/menu-list/index.ts");
/* harmony import */ var _components_dark_switch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dark-switch */ "./src/components/dark-switch/index.ts");
/* harmony import */ var _components_lang_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/lang-switch */ "./src/components/lang-switch/index.ts");
















document.body.innerHTML = `
  <define-application default-applet="frameworks">
    <define-applet applet-id="frameworks">
      ${_frameworks_source__WEBPACK_IMPORTED_MODULE_2__["default"]}
    </define-applet>
  </define-application>
`;
(0,lath__WEBPACK_IMPORTED_MODULE_0__.createApplication)({
    applets: {
        home: _home_minify__WEBPACK_IMPORTED_MODULE_3__["default"],
        tutorial: _tutorial_minify__WEBPACK_IMPORTED_MODULE_4__["default"],
        frameworks: _frameworks_minify__WEBPACK_IMPORTED_MODULE_1__["default"],
        doc: _doc_minify__WEBPACK_IMPORTED_MODULE_6__["default"],
        api: _api_minify__WEBPACK_IMPORTED_MODULE_5__["default"],
        empty: _empty_minify__WEBPACK_IMPORTED_MODULE_8__["default"],
        typesDoc: _typesDoc_minify__WEBPACK_IMPORTED_MODULE_7__["default"],
        sheetsBottom: _sheetsBottom_minify__WEBPACK_IMPORTED_MODULE_9__["default"]
    }
}).then(({ application }) => {
    window['app'] = application;
    window['_slideTo'] = (index = 0) => {
        var _a;
        (_a = application.applets.frameworks.slide) === null || _a === void 0 ? void 0 : _a.to(index);
    };
});
document.body.style.margin = '0';
document.body.style.overflow = 'hidden';
// setTimeout(() => {
//   app.to('sheetsBottom')
// }, 4000);
// ;(function () { const script = document.createElement('script'); script.src = '//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { window['eruda'].init() } })();


/***/ }),

/***/ "./src/sheetsBottom/minify.ts":
/*!************************************!*\
  !*** ./src/sheetsBottom/minify.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./src/sheetsBottom/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./src/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 4,
        title: '',
        free: true,
        source: {
            html: (_html_html__WEBPACK_IMPORTED_MODULE_0___default())
        },
        modality: 'sheets:bottom',
        sheetsBottomOptions: {
            top: '12%'
        },
        color: '#bd243f',
        background: 'auto',
        capture: (e) => {
            var _a;
            return ((_a = e.href) !== null && _a !== void 0 ? _a : String(e)).indexOf('empty') !== -1;
        }
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./src/tutorial/minify.ts":
/*!********************************!*\
  !*** ./src/tutorial/minify.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./src/tutorial/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./src/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 1,
        title: '',
        free: false,
        source: {
            html: (_html_html__WEBPACK_IMPORTED_MODULE_0___default())
        },
        animation: 'slide',
        background: 'auto'
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./src/typesDoc/minify.ts":
/*!********************************!*\
  !*** ./src/typesDoc/minify.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.html */ "./src/typesDoc/html.html");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/code-highlight */ "./src/components/code-highlight/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    config: {
        level: 4,
        title: '',
        free: true,
        source: {
            html: (_html_html__WEBPACK_IMPORTED_MODULE_0___default())
        },
        modality: 'sheets:bottom',
        sheetsBottomOptions: {
            top: '12%'
        },
        color: '#bd243f',
        background: 'auto'
    },
    components: [_components_code_highlight__WEBPACK_IMPORTED_MODULE_1__.ScopeCodeHighlighter]
});


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./src/components/code-highlight/Prism.js":
/*!************************************************!*\
  !*** ./src/components/code-highlight/Prism.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		/**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			_.util.setLanguage(element, language);

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				_.util.setLanguage(parent, language);
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			if (!env.grammar) {
				throw new Error('The language "' + env.language + '" has no grammar.');
			}
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if (typeof applet !== 'undefined' && applet.exports) {
	applet.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
	__webpack_require__.g.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */
;
Prism.languages.markup = {
	'comment': {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	'prolog': {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	'boolean': /\b(?:false|true)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': {
		pattern: RegExp(
			/(^|[^\w$])/.source +
			'(?:' +
			(
				// constant
				/NaN|Infinity/.source +
				'|' +
				// binary integer
				/0[bB][01]+(?:_[01]+)*n?/.source +
				'|' +
				// octal integer
				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
				'|' +
				// hexadecimal integer
				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
				'|' +
				// decimal bigint
				/\d+(?:_\d+)*n/.source +
				'|' +
				// decimal number (integer or float) but no bigint
				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
			) +
			')' +
			/(?![\w$])/.source
		),
		lookbehind: true
	},
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		// eslint-disable-next-line regexp/no-dupe-characters-character-class
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	},
	'string-property': {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	}
});

Prism.languages.insertBefore('javascript', 'operator', {
	'literal-property': {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: true,
		alias: 'property'
	},
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;

(function (Prism) {

	Prism.languages.typescript = Prism.languages.extend('javascript', {
		'class-name': {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: true,
			greedy: true,
			inside: null // see below
		},
		'builtin': /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
	});

	// The keywords TypeScript adds to JavaScript
	Prism.languages.typescript.keyword.push(
		/\b(?:abstract|declare|is|keyof|readonly|require)\b/,
		// keywords that have to be followed by an identifier
		/\b(?:asserts|infer|interface|applet|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
		// This is for `import type *, {}`
		/\btype\b(?=\s*(?:[\{*]|$))/
	);

	// doesn't work with TS because TS is too complex
	delete Prism.languages.typescript['parameter'];
	delete Prism.languages.typescript['literal-property'];

	// a version of typescript specifically for highlighting types
	var typeInside = Prism.languages.extend('typescript', {});
	delete typeInside['class-name'];

	Prism.languages.typescript['class-name'].inside = typeInside;

	Prism.languages.insertBefore('typescript', 'function', {
		'decorator': {
			pattern: /@[$\w\xA0-\uFFFF]+/,
			inside: {
				'at': {
					pattern: /^@/,
					alias: 'operator'
				},
				'function': /^[\s\S]+/
			}
		},
		'generic-function': {
			// e.g. foo<T extends "bar" | "baz">( ...
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
			greedy: true,
			inside: {
				'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
				'generic': {
					pattern: /<[\s\S]+/, // everything after the first <
					alias: 'class-name',
					inside: typeInside
				}
			}
		}
	});

	Prism.languages.ts = Prism.languages.typescript;

}(Prism));


(function (Prism) {
	// $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
	// + LC_ALL, RANDOM, REPLY, SECONDS.
	// + make sure PS1..4 are here as they are not always set,
	// - some useless things.
	var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';

	var commandAfterHeredoc = {
		pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
		lookbehind: true,
		alias: 'punctuation', // this looks reasonably well in all themes
		inside: null // see below
	};

	var insideString = {
		'bash': commandAfterHeredoc,
		'environment': {
			pattern: RegExp('\\$' + envVars),
			alias: 'constant'
		},
		'variable': [
			// [0]: Arithmetic Environment
			{
				pattern: /\$?\(\([\s\S]+?\)\)/,
				greedy: true,
				inside: {
					// If there is a $ sign at the beginning highlight $(( and )) as variable
					'variable': [
						{
							pattern: /(^\$\(\([\s\S]+)\)\)/,
							lookbehind: true
						},
						/^\$\(\(/
					],
					'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
					// Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
					'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
					// If there is no $ sign at the beginning highlight (( and )) as punctuation
					'punctuation': /\(\(?|\)\)?|,|;/
				}
			},
			// [1]: Command Substitution
			{
				pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
				greedy: true,
				inside: {
					'variable': /^\$\(|^`|\)$|`$/
				}
			},
			// [2]: Brace expansion
			{
				pattern: /\$\{[^}]+\}/,
				greedy: true,
				inside: {
					'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
					'punctuation': /[\[\]]/,
					'environment': {
						pattern: RegExp('(\\{)' + envVars),
						lookbehind: true,
						alias: 'constant'
					}
				}
			},
			/\$(?:\w+|[#?*!@$])/
		],
		// Escape sequences from echo and printf's manuals, and escaped quotes.
		'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
	};

	Prism.languages.bash = {
		'shebang': {
			pattern: /^#!\s*\/.*/,
			alias: 'important'
		},
		'comment': {
			pattern: /(^|[^"{\\$])#.*/,
			lookbehind: true
		},
		'function-name': [
			// a) function foo {
			// b) foo() {
			// c) function foo() {
			// but not “foo {”
			{
				// a) and c)
				pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
				lookbehind: true,
				alias: 'function'
			},
			{
				// b)
				pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
				alias: 'function'
			}
		],
		// Highlight variable names as variables in for and select beginnings.
		'for-or-select': {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: 'variable',
			lookbehind: true
		},
		// Highlight variable names as variables in the left-hand part
		// of assignments (“=” and “+=”).
		'assign-left': {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
			inside: {
				'environment': {
					pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
					lookbehind: true,
					alias: 'constant'
				}
			},
			alias: 'variable',
			lookbehind: true
		},
		'string': [
			// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			// Here-document with quotes around the tag
			// → No expansion (so no “inside”).
			{
				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: true,
				greedy: true,
				inside: {
					'bash': commandAfterHeredoc
				}
			},
			// “Normal” string
			{
				// https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
				pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
				pattern: /(^|[^$\\])'[^']*'/,
				lookbehind: true,
				greedy: true
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
				pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
				greedy: true,
				inside: {
					'entity': insideString.entity
				}
			}
		],
		'environment': {
			pattern: RegExp('\\$?' + envVars),
			alias: 'constant'
		},
		'variable': insideString.variable,
		'function': {
			pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|slideViewer|slideViewer-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'keyword': {
			pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		// https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
		'builtin': {
			pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
			lookbehind: true,
			// Alias added to make those easier to distinguish from strings.
			alias: 'class-name'
		},
		'boolean': {
			pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'file-descriptor': {
			pattern: /\B&\d\b/,
			alias: 'important'
		},
		'operator': {
			// Lots of redirections here, but not just that.
			pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
			inside: {
				'file-descriptor': {
					pattern: /^\d/,
					alias: 'important'
				}
			}
		},
		'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		'number': {
			pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
			lookbehind: true
		}
	};

	commandAfterHeredoc.inside = Prism.languages.bash;

	/* Patterns in command substitution. */
	var toBeCopied = [
		'comment',
		'function-name',
		'for-or-select',
		'assign-left',
		'string',
		'environment',
		'function',
		'keyword',
		'builtin',
		'boolean',
		'file-descriptor',
		'operator',
		'punctuation',
		'number'
	];
	var inside = insideString.variable[1].inside;
	for (var i = 0; i < toBeCopied.length; i++) {
		inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
	}

	Prism.languages.shell = Prism.languages.bash;
}(Prism));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prism);

/***/ }),

/***/ "../Lath/app/index-43745ef5.js":
/*!*************************************!*\
  !*** ../Lath/app/index-43745ef5.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ __awaiter),
/* harmony export */   "c": () => (/* binding */ createApplication),
/* harmony export */   "t": () => (/* binding */ typeError)
/* harmony export */ });
function __awaiter(t,l,a,c){return new(a=a||Promise)(function(n,e){function o(t){try{r(c.next(t))}catch(t){e(t)}}function i(t){try{r(c.throw(t))}catch(t){e(t)}}function r(t){var e;t.done?n(t.value):((e=t.value)instanceof a?e:new a(function(t){t(e)})).then(o,i)}r((c=c.apply(t,l||[])).next())})}function getMessage(t,e){const n=ErrorCode[t];return n&&e?String.raw({raw:n.split("[$]")},...e):null!==n&&void 0!==n?n:"unknown"}var typeError,needsPolyfill,autoScrollPolyfill=()=>"function"!=typeof Element.prototype.scrollTo?Promise.all(/*! import() */[__webpack_require__.e("vendors-Lath_node_modules_scroll-polyfill_dist_index_esm_js"), __webpack_require__.e("Lath_app_auto_cjs-138463ec_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ./auto.cjs-138463ec.js */ "../Lath/app/auto.cjs-138463ec.js", 23)):Promise.resolve();const Preset={appletsDefinition:{},appletsSlot:{},defaultApplet:"home",awaitDefine:()=>new Promise(t=>Preset.awaitCallback=t),__EXISTING__:!1},ErrorCode={1001:"<define-application> not found！Only call <define-applet> at the Top Level / inside loops, conditions, or nested functions.",1002:"Cannot redefine 'applet-id'!",1003:"Only call <define-applet> at the Top Level / inside loops, conditions, or nested functions.",1004:"Non-changeable 'default-applet'!",1005:"<define-application> execution exception! Maybe the browser version is not supported.",1006:"The defined applet('defaultApplet') could not be found!",1007:"'FrameworksApplet' must be included!",1008:'Unable to get applet with id "[$]".',1101:"Applet config: Applets(id == frameworks/system) applets do not need to configured with [free].",1102:"Applet config: Applets(id == frameworks/system) do not need to configured with [source].",1103:"Applet config: [free & portal] conflict! [free] must be true when [portal] sets true.",1104:"Applet config: Undefined [level] affects the animation!",1105:"Applet config: [level] needs to be less than 9999!",1106:"Applet config: [modality] applets do not need to configured with [animation]."},needsShadowDom=(typeError=(t,e="error",...n)=>{t=getMessage(t,n);if("return"===e)return t;"error"===e?console.error("LATH ERROR:",t):"info"===e?console.info("LATH INFO:",t):"warn"===e&&console.warn("LATH WARN:",t)},!("attachShadow"in Element.prototype&&"getRootNode"in Element.prototype)),needsCustomElements=!window.customElements,needsTemplate=function(){const t=document.createElement("template");if(!("content"in t))return!0;if(!(t.content.cloneNode()instanceof DocumentFragment))return!0;const e=document.createElement("template");e.content.appendChild(document.createElement("div")),t.content.appendChild(e);var n=t.cloneNode(!0);return 0===n.content.childNodes.length||0===n.content.firstChild.content.childNodes.length}(),buildAppletSlot=(needsPolyfill=!window.Promise||!Array.from||!window.URL||!window.Symbol||needsTemplate||needsShadowDom||needsCustomElements,!function(){function o(t){var e=at.has(t);return t=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t),!e&&t}function c(t){var e=t.isConnected;if(void 0!==e)return e;if(n(t))return!0;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function s(t){var e=t.children;if(e)return Array.prototype.slice.call(e);for(e=[],t=t.firstChild;t;t=t.nextSibling)t.nodeType===Node.ELEMENT_NODE&&e.push(t);return e}function a(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function p(){var t=!(null==S||!S.noDocumentConstructionObserver),e=!(null==S||!S.shadyDomFastWalk);this.m=[],this.g=[],this.j=!1,this.shadyDomFastWalk=e,this.I=!t}function u(t,e,n,o){var i=window.ShadyDOM;if(t.shadyDomFastWalk&&i&&i.inUse){if(e.nodeType===Node.ELEMENT_NODE&&n(e),e.querySelectorAll)for(t=i.nativeMethods.querySelectorAll.call(e,"*"),e=0;e<t.length;e++)n(t[e])}else!function t(e,n,o){for(var i,r,l=e;l;){if(l.nodeType===Node.ELEMENT_NODE){if(n(i=l),"link"===(r=i.localName)&&"import"===i.getAttribute("rel")){if(l=i.import,void 0===o&&(o=new Set),l instanceof Node&&!o.has(l))for(o.add(l),l=l.firstChild;l;l=l.nextSibling)t(l,n,o);l=a(e,i);continue}if("template"===r){l=a(e,i);continue}if(i=i.__CE_shadowRoot)for(i=i.firstChild;i;i=i.nextSibling)t(i,n,o)}l=l.firstChild||a(e,l)}}(e,n,o)}function d(e,t){e.j&&u(e,t,function(t){return f(e,t)})}function f(t,e){if(t.j&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.m.length;n++)t.m[n](e);for(n=0;n<t.g.length;n++)t.g[n](e)}}function h(t,e){var n,o=[];for(u(t,e,function(t){return o.push(t)}),e=0;e<o.length;e++)1===(n=o[e]).__CE_state?t.connectedCallback(n):g(t,n)}function m(t,e){var n,o=[];for(u(t,e,function(t){return o.push(t)}),e=0;e<o.length;e++)1===(n=o[e]).__CE_state&&t.disconnectedCallback(n)}function w(o,t,e){var i=(e=void 0===e?{}:e).J,r=e.upgrade||function(t){return g(o,t)},l=[];for(u(o,t,function(n){var t;o.j&&f(o,n),"link"===n.localName&&"import"===n.getAttribute("rel")?((t=n.import)instanceof Node&&(t.__CE_isImportDocument=!0,t.__CE_registry=document.__CE_registry),t&&"complete"===t.readyState?t.__CE_documentLoadHandled=!0:n.addEventListener("load",function(){var e,t=n.import;t.__CE_documentLoadHandled||(t.__CE_documentLoadHandled=!0,e=new Set,i&&(i.forEach(function(t){return e.add(t)}),e.delete(t)),w(o,t,{J:e,upgrade:r}))})):l.push(n)},i),t=0;t<l.length;t++)r(l[t])}function g(t,e){var n,o,i,r,l,a;try{if((i=(o=(n=e.ownerDocument).__CE_registry)&&(n.defaultView||n.__CE_isImportDocument)?C(o,e.localName):void 0)&&void 0===e.__CE_state){i.constructionStack.push(e);try{try{if(new i.constructorFunction!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{i.constructionStack.pop()}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,(e.__CE_definition=i).attributeChangedCallback&&e.hasAttributes())for(r=i.observedAttributes,i=0;i<r.length;i++)l=r[i],null!==(a=e.getAttribute(l))&&t.attributeChangedCallback(e,l,null,a,null);c(e)&&t.connectedCallback(e)}}catch(t){y(t)}}function E(e,n,o,i){var t,r=n.__CE_registry;if(r&&(null===i||"http://www.w3.org/1999/xhtml"===i)&&(r=C(r,o)))try{if(void 0===(t=new r.constructorFunction).__CE_state||void 0===t.__CE_definition)throw Error("Failed to construct '"+o+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==t.namespaceURI)throw Error("Failed to construct '"+o+"': The constructed element's namespace must be the HTML namespace.");if(t.hasAttributes())throw Error("Failed to construct '"+o+"': The constructed element must not have any attributes.");if(null!==t.firstChild)throw Error("Failed to construct '"+o+"': The constructed element must not have any children.");if(null!==t.parentNode)throw Error("Failed to construct '"+o+"': The constructed element must not have a parent node.");if(t.ownerDocument!==n)throw Error("Failed to construct '"+o+"': The constructed element's owner document is incorrect.");if(t.localName!==o)throw Error("Failed to construct '"+o+"': The constructed element's local name is incorrect.");return t}catch(t){return y(t),n=null===i?T.call(n,o):D.call(n,i,o),Object.setPrototypeOf(n,HTMLUnknownElement.prototype),n.__CE_state=2,n.__CE_definition=void 0,f(e,n),n}return f(e,n=null===i?T.call(n,o):D.call(n,i,o)),n}function y(t){var e=t.message,n=t.sourceURL||t.fileName||"",o=t.line||t.lineNumber||0,i=t.column||t.columnNumber||0,r=void 0;void 0===ErrorEvent.prototype.initErrorEvent?r=new ErrorEvent("error",{cancelable:!0,message:e,filename:n,lineno:o,colno:i,error:t}):((r=document.createEvent("ErrorEvent")).initErrorEvent("error",!1,!0,e,n,o),r.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}),void 0===r.error&&Object.defineProperty(r,"error",{configurable:!0,enumerable:!0,get:function(){return t}}),window.dispatchEvent(r),r.defaultPrevented||console.error(t)}function i(){var e=this;this.g=void 0,this.F=new Promise(function(t){e.l=t})}function e(t){var e=document;this.l=void 0,this.h=t,this.g=e,w(this.h,this.g),"loading"===this.g.readyState&&(this.l=new MutationObserver(this.G.bind(this)),this.l.observe(this.g,{childList:!0,subtree:!0}))}function r(t){t.l&&t.l.disconnect()}function b(t){this.s=new Map,this.u=new Map,this.C=new Map,this.A=!1,this.B=new Map,this.o=function(t){return t()},this.i=!1,this.v=[],this.h=t,this.D=t.I?new e(t):void 0}function l(t,e){if(!o(e))throw new SyntaxError("The element name '"+e+"' is not valid.");if(C(t,e))throw Error("A custom element with name '"+e+"' has already been defined.");if(t.A)throw Error("A custom element is already being defined.")}function _(t,e,n){var o,i,r,l,a,c,s;t.A=!0;try{if(!((i=n.prototype)instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");l=(r=function(t){var e=i[t];if(void 0===e||e instanceof Function)return e;throw Error("The '"+t+"' callback must be a function.")})("connectedCallback"),a=r("disconnectedCallback"),c=r("adoptedCallback"),s=(o=r("attributeChangedCallback"))&&n.observedAttributes||[]}catch(t){throw t}finally{t.A=!1}return t.u.set(e,n={localName:e,constructorFunction:n,connectedCallback:l,disconnectedCallback:a,adoptedCallback:c,attributeChangedCallback:o,observedAttributes:s,constructionStack:[]}),t.C.set(n.constructorFunction,n),n}function v(o){var i,t,r,e,n,l,a;if(!1!==o.i){for(o.i=!1,i=[],t=o.v,r=new Map,e=0;e<t.length;e++)r.set(t[e],[]);for(w(o.h,document,{upgrade:function(t){var e,n;void 0===t.__CE_state&&(e=t.localName,(n=r.get(e))?n.push(t):o.u.has(e)&&i.push(t))}}),e=0;e<i.length;e++)g(o.h,i[e]);for(e=0;e<t.length;e++){for(n=t[e],l=r.get(n),a=0;a<l.length;a++)g(o.h,l[a]);(n=o.B.get(n))&&n.resolve(void 0)}t.length=0}}function C(t,e){var n=t.u.get(e);if(n)return n;if(n=t.s.get(e)){t.s.delete(e);try{return _(t,e,n())}catch(t){y(t)}}}function A(a,t,e){function n(l){return function(t){for(var e,n,o,i=[],r=0;r<arguments.length;++r)i[r]=arguments[r];for(r=[],e=[],n=0;n<i.length;n++)if((o=i[n])instanceof Element&&c(o)&&e.push(o),o instanceof DocumentFragment)for(o=o.firstChild;o;o=o.nextSibling)r.push(o);else r.push(o);for(l.apply(this,i),i=0;i<e.length;i++)m(a,e[i]);if(c(this))for(i=0;i<r.length;i++)(e=r[i])instanceof Element&&h(a,e)}}void 0!==e.prepend&&(t.prepend=n(e.prepend)),void 0!==e.append&&(t.append=n(e.append))}function O(l){function e(t,r){Object.defineProperty(t,"innerHTML",{enumerable:r.enumerable,configurable:!0,get:r.get,set:function(t){var e,n,o=this,i=void 0;if(c(this)&&(i=[],u(l,this,function(t){t!==o&&i.push(t)})),r.set.call(this,t),i)for(e=0;e<i.length;e++)1===(n=i[e]).__CE_state&&l.disconnectedCallback(n);return(this.ownerDocument.__CE_registry?w:d)(l,this),t}})}function t(t,o){t.insertAdjacentElement=function(t,e){var n=c(e);return t=o.call(this,t,e),n&&m(l,e),c(t)&&h(l,e),t}}function n(t,o){function i(t,e){for(var n=[];t!==e;t=t.nextSibling)n.push(t);for(e=0;e<n.length;e++)w(l,n[e])}t.insertAdjacentHTML=function(t,e){if("beforebegin"===(t=t.toLowerCase())){var n=this.previousSibling;o.call(this,t,e),i(n||this.parentNode.firstChild,this)}else if("afterbegin"===t)n=this.firstChild,o.call(this,t,e),i(this.firstChild,n);else if("beforeend"===t)n=this.lastChild,o.call(this,t,e),i(n||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");n=this.nextSibling,o.call(this,t,e),i(this.nextSibling,n)}}}var o,a,i;function r(l){return function(t){for(var e,n,o,i=[],r=0;r<arguments.length;++r)i[r]=arguments[r];for(r=[],e=[],n=0;n<i.length;n++)if((o=i[n])instanceof Element&&c(o)&&e.push(o),o instanceof DocumentFragment)for(o=o.firstChild;o;o=o.nextSibling)r.push(o);else r.push(o);for(l.apply(this,i),i=0;i<e.length;i++)m(a,e[i]);if(c(this))for(i=0;i<r.length;i++)(e=r[i])instanceof Element&&h(a,e)}}V&&(Element.prototype.attachShadow=function(t){if(t=V.call(this,t),l.j&&!t.__CE_patched){t.__CE_patched=!0;for(var e=0;e<l.m.length;e++)l.m[e](t)}return this.__CE_shadowRoot=t}),j&&j.get?e(Element.prototype,j):F&&F.get?e(HTMLElement.prototype,F):(o=function(t){e(t,{enumerable:!0,configurable:!0,get:function(){return W.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName,n=e?this.content:this,o=D.call(document,this.namespaceURI,this.localName);for(o.innerHTML=t;0<n.childNodes.length;)P.call(n,n.childNodes[0]);for(t=e?o.content:o;0<t.childNodes.length;)k.call(n,t.childNodes[0])}})},(i=l).j=!0,i.g.push(o)),Element.prototype.setAttribute=function(t,e){if(1!==this.__CE_state)return X.call(this,t,e);var n=x.call(this,t);X.call(this,t,e),e=x.call(this,t),l.attributeChangedCallback(this,t,n,e,null)},Element.prototype.setAttributeNS=function(t,e,n){if(1!==this.__CE_state)return q.call(this,t,e,n);var o=M.call(this,t,e);q.call(this,t,e,n),n=M.call(this,t,e),l.attributeChangedCallback(this,e,o,n,t)},Element.prototype.removeAttribute=function(t){if(1!==this.__CE_state)return $.call(this,t);var e=x.call(this,t);$.call(this,t),null!==e&&l.attributeChangedCallback(this,t,e,null,null)},Element.prototype.removeAttributeNS=function(t,e){var n,o;if(1!==this.__CE_state)return J.call(this,t,e);n=M.call(this,t,e),J.call(this,t,e),n!==(o=M.call(this,t,e))&&l.attributeChangedCallback(this,e,n,o,t)},rt?t(HTMLElement.prototype,rt):Y&&t(Element.prototype,Y),lt?n(HTMLElement.prototype,lt):K&&n(Element.prototype,K),A(l,Element.prototype,{prepend:Q,append:Z}),a=l,i=Element.prototype,void 0!==tt&&(i.before=r(tt)),void 0!==et&&(i.after=r(et)),void 0!==nt&&(i.replaceWith=function(t){for(var e,n,o,i=[],r=0;r<arguments.length;++r)i[r]=arguments[r];for(r=[],e=[],n=0;n<i.length;n++)if((o=i[n])instanceof Element&&c(o)&&e.push(o),o instanceof DocumentFragment)for(o=o.firstChild;o;o=o.nextSibling)r.push(o);else r.push(o);for(n=c(this),nt.apply(this,i),i=0;i<e.length;i++)m(a,e[i]);if(n)for(m(a,this),i=0;i<r.length;i++)(e=r[i])instanceof Element&&h(a,e)}),void 0!==ot&&(i.remove=function(){var t=c(this);ot.call(this),t&&m(a,this)})}function t(){var r,n,l,t,e,o=new p;function i(){var t,e,n,o=this.constructor,i=document.__CE_registry.C.get(o);if(!i)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");if(0===(t=i.constructionStack).length)return t=T.call(document,i.localName),Object.setPrototypeOf(t,o.prototype),t.__CE_state=1,t.__CE_definition=i,f(r,t),t;if((n=t[e=t.length-1])===N)throw Error("Failed to construct '"+i.localName+"': This element was already constructed.");return t[e]=N,Object.setPrototypeOf(n,o.prototype),f(r,n),n}function a(t,r){Object.defineProperty(t,"textContent",{enumerable:r.enumerable,configurable:!0,get:r.get,set:function(t){var e,n,o,i;if(this.nodeType===Node.TEXT_NODE)r.set.call(this,t);else{if(e=void 0,this.firstChild&&0<(o=(n=this.childNodes).length)&&c(this))for(e=Array(o),i=0;i<o;i++)e[i]=n[i];if(r.set.call(this,t),e)for(t=0;t<e.length;t++)m(l,e[t])}}})}r=o,i.prototype=it.prototype,Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:i}),window.HTMLElement=i,n=o,Document.prototype.createElement=function(t){return E(n,this,t,null)},Document.prototype.importNode=function(t,e){return t=H.call(this,t,!!e),(this.__CE_registry?w:d)(n,t),t},Document.prototype.createElementNS=function(t,e){return E(n,this,e,t)},A(n,Document.prototype,{prepend:I,append:R}),A(o,DocumentFragment.prototype,{prepend:U,append:B}),l=o,Node.prototype.insertBefore=function(t,e){if(t instanceof DocumentFragment){var n=s(t);if(t=z.call(this,t,e),c(this))for(e=0;e<n.length;e++)h(l,n[e]);return t}return n=t instanceof Element&&c(t),e=z.call(this,t,e),n&&m(l,t),c(this)&&h(l,t),e},Node.prototype.appendChild=function(t){var e,n;if(t instanceof DocumentFragment){if(e=s(t),t=k.call(this,t),c(this))for(n=0;n<e.length;n++)h(l,e[n]);return t}return e=t instanceof Element&&c(t),n=k.call(this,t),e&&m(l,t),c(this)&&h(l,t),n},Node.prototype.cloneNode=function(t){return t=W.call(this,!!t),(this.ownerDocument.__CE_registry?w:d)(l,t),t},Node.prototype.removeChild=function(t){var e=t instanceof Element&&c(t),n=P.call(this,t);return e&&m(l,t),n},Node.prototype.replaceChild=function(t,e){var n,o,i;if(t instanceof DocumentFragment){if(n=s(t),t=G.call(this,t,e),c(this))for(m(l,e),e=0;e<n.length;e++)h(l,n[e]);return t}return n=t instanceof Element&&c(t),o=G.call(this,t,e),(i=c(this))&&m(l,e),n&&m(l,t),i&&h(l,t),o},L&&L.get?a(Node.prototype,L):(e=function(t){a(t,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=this.firstChild;e;e=e.nextSibling)e.nodeType!==Node.COMMENT_NODE&&t.push(e.textContent);return t.join("")},set:function(t){for(;this.firstChild;)P.call(this,this.firstChild);null!=t&&""!==t&&k.call(this,document.createTextNode(t))}})},(t=l).j=!0,t.m.push(e)),O(o),o=new b(o),document.__CE_registry=o,Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:o})}var n,N,S,T=window.Document.prototype.createElement,D=window.Document.prototype.createElementNS,H=window.Document.prototype.importNode,I=window.Document.prototype.prepend,R=window.Document.prototype.append,U=window.DocumentFragment.prototype.prepend,B=window.DocumentFragment.prototype.append,W=window.Node.prototype.cloneNode,k=window.Node.prototype.appendChild,z=window.Node.prototype.insertBefore,P=window.Node.prototype.removeChild,G=window.Node.prototype.replaceChild,L=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),V=window.Element.prototype.attachShadow,j=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),x=window.Element.prototype.getAttribute,X=window.Element.prototype.setAttribute,$=window.Element.prototype.removeAttribute,M=window.Element.prototype.getAttributeNS,q=window.Element.prototype.setAttributeNS,J=window.Element.prototype.removeAttributeNS,Y=window.Element.prototype.insertAdjacentElement,K=window.Element.prototype.insertAdjacentHTML,Q=window.Element.prototype.prepend,Z=window.Element.prototype.append,tt=window.Element.prototype.before,et=window.Element.prototype.after,nt=window.Element.prototype.replaceWith,ot=window.Element.prototype.remove,it=window.HTMLElement,F=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),rt=window.HTMLElement.prototype.insertAdjacentElement,lt=window.HTMLElement.prototype.insertAdjacentHTML,at=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(t){return at.add(t)}),n=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement),p.prototype.connectedCallback=function(t){var e=t.__CE_definition;if(e.connectedCallback)try{e.connectedCallback.call(t)}catch(t){y(t)}},p.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;if(e.disconnectedCallback)try{e.disconnectedCallback.call(t)}catch(t){y(t)}},p.prototype.attributeChangedCallback=function(t,e,n,o,i){var r=t.__CE_definition;if(r.attributeChangedCallback&&-1<r.observedAttributes.indexOf(e))try{r.attributeChangedCallback.call(t,e,n,o,i)}catch(t){y(t)}},i.prototype.resolve=function(t){if(this.g)throw Error("Already resolved.");this.g=t,this.l(t)},e.prototype.G=function(t){var e,n,o=this.g.readyState;for("interactive"!==o&&"complete"!==o||r(this),o=0;o<t.length;o++)for(e=t[o].addedNodes,n=0;n<e.length;n++)w(this.h,e[n])},b.prototype.H=function(t,e){var n=this;if(!(e instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");l(this,t),this.s.set(t,e),this.v.push(t),this.i||(this.i=!0,this.o(function(){return v(n)}))},b.prototype.define=function(t,e){var n=this;if(!(e instanceof Function))throw new TypeError("Custom element constructors must be functions.");l(this,t),_(this,t,e),this.v.push(t),this.i||(this.i=!0,this.o(function(){return v(n)}))},b.prototype.upgrade=function(t){w(this.h,t)},b.prototype.get=function(t){if(t=C(this,t))return t.constructorFunction},b.prototype.whenDefined=function(t){var e,n;return o(t)?((e=this.B.get(t))||(e=new i,this.B.set(t,e),n=this.u.has(t)||this.s.has(t),t=-1===this.v.indexOf(t),n&&t&&e.resolve(void 0)),e.F):Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."))},b.prototype.polyfillWrapFlushCallback=function(e){this.D&&r(this.D);var n=this.o;this.o=function(t){return e(function(){return n(t)})}},(window.CustomElementRegistry=b).prototype.polyfillDefineLazy=b.prototype.H,N={},(S=window.customElements)&&!S.forcePolyfill&&"function"==typeof S.define&&"function"==typeof S.get||t(),window.__CE_installPolyfill=t}.call(self),__webpack_require__.e(/*! import() */ "Lath_app_index-0afbe02d_js").then(__webpack_require__.bind(__webpack_require__, /*! ./index-0afbe02d.js */ "../Lath/app/index-0afbe02d.js")).then(function(t){return t.i}).catch(t=>{console.warn(t)}),t=>{if(Preset.appletsSlot[t])return Preset.appletsSlot[t];const e=document.createElement("slot");return e.name="applet-"+t,Preset.appletsSlot[t]=e});class DefineApplet extends HTMLElement{constructor(){super()}getViewSlot(){return this.appletSlot}static get observedAttributes(){return["applet-id"]}get appletId(){return this.getAttribute("applet-id")}defineApplet(){var t=this.appletId;t&&(this.slot="applet-"+t,this.appletSlot=buildAppletSlot(t),Preset.appletsDefinition[t]=this)}attributeChangedCallback(t,e,n){if("applet-id"===t&&n){if(e&&-1===n.indexOf(e))return typeError(1002),void typeError(1003,"info");this.defineApplet()}}connectedCallback(){this.defineApplet()}}class DefineApplication extends HTMLElement{constructor(){var t;super(),this.contentShadowRoot=null==(t=this.attachShadow)?void 0:t.call(this,{mode:"open"}),this.contentShadowRoot.appendChild(buildAppletSlot("frameworks")),Preset.root=this.contentShadowRoot,Preset.appletsSpace=this}static get observedAttributes(){return["default-applet"]}get defaultApplet(){return this.getAttribute("default-applet")}setupDefaultApplet(t){var e=buildAppletSlot(t);this.contentShadowRoot.appendChild(e),Preset.defaultApplet=t,setTimeout(()=>{Preset.awaitCallback&&Preset.awaitCallback()},1e3)}attributeChangedCallback(t,e,n){"default-applet"===t&&n&&(e?typeError(1004):this.defineApplet())}connectedCallback(){this.defineApplet()}defineApplet(){this.defaultApplet&&this.setupDefaultApplet(this.defaultApplet)}}const createApplication=(s={tunneling:!0})=>__awaiter(void 0,void 0,void 0,function*(){if(yield autoScrollPolyfill(),Preset.__EXISTING__)return Promise.reject("repeat");if(s.tunneling&&window.__LATH_APPLICATION_AVAILABILITY__)return Promise.reject("tunneling");Preset.__EXISTING__=!0;const t=(yield __webpack_require__.e(/*! import() */ "Lath_app_index-0afbe02d_js").then(__webpack_require__.bind(__webpack_require__, /*! ./index-0afbe02d.js */ "../Lath/app/index-0afbe02d.js")).then(function(t){return t.i}))["Application"],{tunneling:e=!0,zIndex:n=void 0,applets:o={}}=s;Preset.root||(setTimeout(()=>{Preset.root||typeError(1005,"return")},5e3),yield Preset.awaitDefine());var{root:i,defaultApplet:r,appletsSpace:l}=Preset;if(!i)return Promise.reject(typeError(1005,"return"));const a=new t({root:i,tunneling:e,zIndex:n,appletsSpace:l});i=null==(l=null==(i=null===o||void 0===o?void 0:o.frameworks)?void 0:i.config)?void 0:l.index;if(!Preset.appletsDefinition[r])return Promise.reject(typeError(1006,"return"));o.frameworks||(o.frameworks={config:{level:0,index:r,singleFlow:!1,singleLock:!1,animation:"slide",transientTimeout:18e5,disableTransient:!0}},o[r]||(o[r]={config:{level:1,title:document.title,free:!1,animation:"slide",background:!0}})),i&&!o[i]&&(o[i]={config:{level:1,title:document.title,free:!1,animation:"slide",background:!0}});for(const c in Preset.appletsDefinition)o[c]||(o[c]={config:{level:1,title:document.title,free:!1,animation:"slide",background:!0}});return a.setting({applets:o}),a.start(),a.setPrestAppletsView(Preset.appletsDefinition),Promise.resolve({application:a})});needsPolyfill?__webpack_require__.e(/*! import() */ "vendors-Lath_node_modules_webcomponents_webcomponentsjs_webcomponents-bundle_js").then(__webpack_require__.t.bind(__webpack_require__, /*! @webcomponents/webcomponentsjs */ "../Lath/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js", 23)).then(()=>{customElements.define("define-applet",DefineApplet),customElements.define("define-application",DefineApplication)}).catch(t=>{console.warn(t)}):(customElements.define("define-applet",DefineApplet),customElements.define("define-application",DefineApplication));

/***/ }),

/***/ "../Lath/app/launcher.js":
/*!*******************************!*\
  !*** ../Lath/app/launcher.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApplication": () => (/* reexport safe */ _index_43745ef5_js__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _index_43745ef5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-43745ef5.js */ "../Lath/app/index-43745ef5.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("82dd7a5eb53b89a6a626")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "lath-docs:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatelath_docs"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklath_docs"] = self["webpackChunklath_docs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map