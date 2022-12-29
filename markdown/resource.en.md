# Resource

<small>AppletManifest > resource</small>

Static resources that the Applet depends on when it runs.

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

When switching from the current Applet to the next Applet, if the current Applet is configured with pre-rendering dependencies (prerender=[${nextApplet}]), the static resources are preloaded before the new Applet is loaded, such as the 'script', 'css tags' in HTML, etc., do not need to be declared and configured for the static resources of these internal links, but for the content dynamically loaded through scripts during the running of the page, such as fonts in CSS, dynamically generated media materials, etc., The preloading cannot be completed. At this time, the resources that may be loaded can be preloaded through the resource configuration item.

The Applet hierarchy will also reflect the effect of the transition animation, from small to large, it is a forward animation; and vice versa, from large to small, it is a reverse animation.

When the history rolls back to the Applet with level 0, the singleLock event will be triggered. For details, please refer to the relevant description in the [singleLock] configuration.

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

The preload work is not performed immediately, but is loaded sequentially when the browser is idle.

> Unknown types that do not exist in the AppletResources type can try preloading with the script type.
