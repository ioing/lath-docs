# FAQ

**Why use it?**

It can take your page experience to the next level and achieve the effect comparable to native Apps, such as <a to-applet="docs?id=pullToRefresh" clone-as="popDoc">Preload secondary pages</a>, <a to-applet="docs?id=modality" clone-as="popDoc">Pop Sheet</a> interactive effect, <a to-applet="docs?id=pullToRefresh" clone-as="popDoc">smooth flicker-free pull-down refresh</a>, to achieve seamless<a to-applet="docs?id=presetEffect" clone-as="popDoc">Page segue effects</a>and smooth<a to-applet="docs?id=presetEffect" clone-as="popDoc">Page horizontal sliding effect</a>and many other implementation schemes.

When you want to get all of this, you do not need to make changes to the original logic and framework, or even block the page performance when the initial page loads.

Lath has a very good design in window management. It can not only automatically help you to recycle resources, but also automatically control the event process between pages. The applications created with it are truly Web Apps that are comparable to Native Apps.

---

**How much does it cost?**

Lath is a container, so it has no requirements for what framework your web program uses, and even you don't need to modify your program logic, just through some simple configurations and conventions to complete the transformation to Lath, such as you can use React, VueJs, and so on.

---

**Where does the scroll event go when declared with &lt;define-applet>?**

Each Applet view is equivalent to a complete page content, and it should have its own scroll container, so when declared with &lt;define-applet>, its internal logic related to scroll events needs to be moved from "body" Except, the modification is bound to its own &lt;define-applet> tag element.

---

**How to introduce cross-domain page views?**

When using source to declare an Applet's view, if its src page points to a cross-domain page, the ability of the proxy type in the page will be limited. To solve this problem, you can also introduce Lath in the reference page and enable the option <a to-applet="docs?id=tunneling" clone-as="popDoc">PresetConfig > tunneling</a> to lift some restriction.

---

**Does Lath have timing requirements?**

Lath as an experience enhancement container, is not necessary on the first screen, so we recommend executing the 'createApplication' method after the first screen is loaded, so as not to block the rendering of the first screen content.

---

**Typescript&JSX warning?**

When using Typescript in the React environment, we need to define the type of the container's label, otherwise 'ts' will generate a warning. At this time, add 'the type.d.ts' file to the project.

```ts
// type.d.ts
import 'lath'
declare namespace JSX {
  interface IntrinsicElements {
    'define-applet': {
      children: Element
      'applet-id': string
    }
    'define-application': {
      children: Element
      'default-applet': string
    }
  }
}
```

# See also

<a href="https://github.com/ioing/lath-vue-example">A code example developed using Lath in a Vue project.</a>
