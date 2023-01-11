const html = (s: TemplateStringsArray, ...v: unknown[]) => String.raw(s, ...v)
import lathAnim from './lathAnim'
import getLang from './lang'

export default () => {
  const lang = getLang()
  return html`
    <div>
      <div class="placeholder"></div>
      </div>
      <figure id="figure">
        <div class="iconContainer">
          <div id="icon" class="icon">
            <div class="circle">
              <div id="logoContainer">
                ${lathAnim}
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
          <a href="?id=start#docs">${lang.GetStarted}</a>
        </div>
      </div>
      <div class="card">
        <div class="card-title">${lang.Help}</div>
        <div class="card-list">
          <a to-applet="support">${lang.Support}</a>
          <a href="?id=FAQ#docs">${lang.FAQ}</a>
        </div>
      </div>
      <div class="card snap-card">
        <div class="card-title">${lang.QuickDemo}</div>
        <div class="snap-container">
          ${lang.QuickDemoList.map((item) => {
    return `
              <div to-applet="tutorial?id=${item.id}" class="child">
                <h2>${item.title}</h2>
                <p>${item.subTitle}</p>
              </div>
            `
  }).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-title">${lang.Base}</div>
        <div class="card-list">
          <a href="?id=title#docs">${lang.Title}</a>
          <a href="?id=source#docs">${lang.Source}</a>
        </div>
      </div>
      <div class="card">
        <div class="card-title">${lang.Viewport}</div>
        <div class="card-list">
          <a href="?id=free#docs">${lang.Free}</a>
          <a href="?id=color#docs">${lang.Color}</a>
          <a href="?id=level#docs">${lang.Level}</a>
          <a href="?id=segueEffect#docs">${lang.SegueEffect}</a>
          <a href="?id=defaultSlideViewApplets#docs">${lang.DefaultSlideViewApplets}</a>
          <a href="?id=modality#docs">${lang.Modality}</a>
        </div>
      </div>
      <div class="card">
        <div class="card-title">${lang.FrameworksConfig}</div>
        <ul class="card-list">
          <a href="?id=index#docs">${lang.Index}</a>
          <a href="?id=singleFlow#docs">${lang.SingleFlow}</a>
          <a href="?id=singleLock#docs">${lang.SingleLock}</a>
          <a href="?id=preIndex#docs">${lang.PreIndex}</a>
          <a href="?id=notFound#docs">${lang.NotFound}</a>
          <a href="?id=holdBack#docs">${lang.HoldBack}</a>
          <a href="?id=limit#docs">${lang.Limit}</a>
          <a href="?id=appletManifestProcess#docs">${lang.AppletManifestProcess}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.Lifecycle}</div>
        <ul class="card-list">
          <a href="?id=background#docs">${lang.Background}</a>
          <a href="?id=timeout#docs">${lang.Timeout}</a>
          <a href="?id=mediaGuard#docs">${lang.MediaGuard}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.Performance}</div>
        <ul class="card-list">
          <a href="?id=resource#docs">${lang.Resource}</a>
          <a href="?id=prerender#docs">${lang.Prerender}</a>
          <a href="?id=components#docs">${lang.Components}</a>
          <a href="?id=portal#docs">${lang.Portal}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.Safest}</div>
        <ul class="card-list">
          <a href="?id=allowHost#docs">${lang.AllowHost}</a>
          <a href="?id=sandbox#docs">${lang.Sandbox}</a>
          <a href="?id=capture#docs">${lang.Capture}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.Advance}</div>
        <ul class="card-list">
          <!-- <a href="?id=touchBorder#docs">${lang.TouchBorder}</a> -->
          <a href="?id=inject#docs">${lang.Inject}</a>
          <a href="?id=safeArea#docs">${lang.SafeArea}</a>
          <a href="?id=globalCSSVariables#docs">${lang.GlobalCSSVariables}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.Preset_Config}</div>
        <ul class="card-list">
          <a href="?id=tunneling#docs">${lang.Tunneling}</a>
          <a href="?id=noShadowDom#docs">${lang.UnusedShadowDom}</a>
        </ul>
      </div>
      <div class="card">
        <div class="card-title">${lang.ExtraFeatures}</div>
        <div class="card-list">
          <a href="?id=pullToRefresh#docs">${lang.PullToRefresh}</a>
          <a href="?id=tapStatusBarToScrollToTop#docs">${lang.TapStatusBarToScrollToTop}</a>
          <a href="?id=mainScrollId#docs">${lang.MainScrollId}</a>
        </div>
      </div>
      <div class="card">
        <div class="card-title">${lang.Other}</div>
        <ul class="card-list">
          <a href="?id=render#docs">${lang.Render}</a>
          <a href="?id=apply#docs">${lang.Apply_unApply}</a>
          <a href="?id=events#docs">${lang.Events}</a>
          <a href="?id=useMirroring#docs">${lang.UseMirroring}</a>
          <a href="?id=transient#docs">${lang.Transient_DisableTransient}</a>
        </ul>
      </div>
      <div class="card">
        <p class="copyright">
          This project is licensed under <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener">MIT License</a><br> Copyright © 2010-2022 LATH
        </p>
      </div>
      <br />
    </div>
    <script>
    if (/iPhone OS (12|11|10|9|8)_\d(_\d)? like mac os x/ig.exec(navigator.userAgent)) {
      const snap = document.querySelector('.snap-container')
      if (snap) {
        snap.style.webkitOverflowScrolling = 'touch'
      }
    }
    </script>
`
}