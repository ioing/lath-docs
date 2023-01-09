# Concept

Before getting started quickly, let's first understand the basic concepts and terms.

- **Lath**: Lath is an experience enhancement container with very small initial dependencies, only about **5kb**. Its core capabilities are atomic, and dependencies are only dynamically loaded when needed.
- **Application**: A Lath application is composed of several Applets.
- **Applet**: An Applet is composed of one page or one View and its related configuration files.
- **FrameworksApplet**: Each Lath Application must have a frame-type Applet, which mainly carries public capabilities, such as navigation bars and so on.

> Lath application is actually a SPA (single page application), its corresponding routing view can be a slice view inside itself or an external page view, no matter what type of view it is, it is used as an applet the entity content exists.

# Apply

Using **npm / yarn** to install

```bash
$ npm install lath --save
// or
$ yarn add lath

```

---

Suppose we want to make a SPA (single page application) now, and we have made each routing page corresponding to the application, then we only need to assemble it in the following way:

Use the **&lt;define-application>** container as the root node to wrap the entire content of the page, so that the page is declared as a Lath application, and then use **&lt;define-applet>** container inside it to wrap a specific routing view (we can understand it as a page in a traditional SPA) so that the wrapping view is declared as a view of an Applet entity.

```html
<body>
  <define-application default-applet="appletA">
    <define-applet applet-id="appletA">
      <div>This is the content of 'appletA'</div>
    </define-applet>
    <define-applet applet-id="appletB">
      <div>This is the content of 'appletB'</div>
    </define-applet>
  </define-application>
</body>
```

- The attribute **“default-applet”** on &lt;define-application> can specify an applet name as the default view when the application is initialized, that is, the earliest view visible to the user.</li>
- The attribute **“applet-id”** on &lt;define-applet> is the declared applet name</li>

> "default-applet" is the applet declared by &lt;define-applet> in the &lt;define-application> package. When the page is opened in the browser, only the specified applet view is visible, and other views are not visible.

Using lable wrapping is the first step in creating a Lath application. Next, we also need to configure properties for each declared applet, such as setting a title for each applet.

```ts
import { createApplication } from 'lath'
createApplication({
  applets: {
    frameworks: {
      config: {
        title: 'Lath Demo',
      },
    },
    appletA: {
      config: {
        title: 'Page A',
      },
    },
    appletB: {
      config: {
        title: 'Page B',
      },
    },
  },
})
```

We use the &lt;define-application> container to declare the application, but to actually start the application we also need to execute the <a to-applet="docs?id=install" clone-as="popDoc">createApplication</a> method, and pass in the Applet related configuration.

Unsurprisingly we will get a "magic" page, at which point we can do this via the A link or <a to-applet="docs?id=api_application_to" clone-as="popDoc">Application.to</a> etc. methods are routed to a defined Applet view.

---

In general, we will not integrate all the routing pages that may be loaded in the application into one page at one time, but hope to load on demand, then we only need to express it through the configuration information:

```ts
import { createApplication } from 'lath'
createApplication({
  applets: {
    frameworks: {
      config: {
        title: 'Lath Demo',
      },
    },
    home: {
      config: {
        title: 'home',
        source: {
          src: 'https://www.yoursite.com/home.html',
        },
      },
    },
  },
}).then((application) => {
  // return application
  console.log(application)
})
```

Applet views can be declared not only through &lt;define-applet>, but also through configuration items <a to-applet="docs?id=source" clone-as="popDoc">source</a>.

When using source to define an applet view, there is no need to declare it with &lt;define-applet>.

> Generally, we will declare the frameworks Applets and the first screen Applet by the method of &lt;define-applet>, and the other Applets will be declared by configuring the 'source' method, which can ensure the maximum loading speed of the first screen.
