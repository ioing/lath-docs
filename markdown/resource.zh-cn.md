# Resource

<small>AppletManifest > resource</small>

程序卡运行时所依赖的静态资源。

---

<h3>Types</h3>

```ts
interface AppletResources {
  script?: Array<string>
  image?: Array<string>
  worker?: Array<string>
  video?: Array<string>
  audio?: Array<string>
  font?: Array<string>
  style?: Array<string>
  html?: Array<string>
}
interface AppletManifest {
  resource?: AppletResources
}
```

---

<h3>Details</h3>

从当前程序卡切换到下一程序卡时，若当前程序卡配置了预渲染依赖(prerender=[${nextApplet}])时，在下一个程序卡被加载前进行其静态资源的预载入，如 html 中的 script、css 标签等，对于这些内链的静态资源是无需进行声明配置的，但是对于页面运行期间通过脚本动态加载的内容，如 css 中的 font 字体，动态产生的的媒体素材等，并不能完成预先的载入，此时则可通过 resource 配置项将可能发生加载的资源进行预载。

程序卡层级关系还将反应在转场动画的效果上，从小到大为正向动画，反之从大到小时为逆向动画。

当历史回退到层级为 0 的程序卡时，会触发 singleLock 事件，具体可查看 [singleLock] 配置中的相关描述。

---

<h3>Example</h3>

```ts
createApplication({
  applets: {
    home: {
      resource: [
        image: [
          'https://yourCDN.com/001.jpg',
          'https://yourCDN.com/002.jpg',
          'https://yourCDN.com/003.jpg'
        ]
      ],
      config: {
        title: 'Home Page'
      }
    }
  }
})

```

---

<h3>Notes</h3>

预载工作并不是立刻执行的，而是在浏览器空闲时按顺序依次载入。

> 非存在于 AppletResources 类型中的未知类型可尝试使用 script 类型进行预载。
