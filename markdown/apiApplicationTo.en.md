# Application.to

<small>Application.to</small>

Transform to the specified Applet.

---

<h3>Types</h3>

```ts
type TransformToOptions = [
  id: string,
  param?: string,
  history?: -1 | 0 | 1,
  touches?: TouchEvent | TransformActionOrigin
]
type to = (...args: TransformToOptions) => Promise<void>
```

---

<h3>Details</h3>

**id**

Jump to the Applet with the specified 'id'.

**param**

The parameter carried by the jumper card (parameter string).

**history**

The parameter is at'-1', it would not be pushed to history; at '0', then it would replace the current history; and at '1' it would be pushed in a new history.

**touches**

'TouchEvent' objects that are clicked on elements that occur in click-through behavior, or 'TransformActionOrigin' objects that directly define the coordinate values of the occurrence event x, y, are used to animate some transitions that need to occur depending on the starting position.

---

<h3>Example</h3>

```ts
application.to('home', '?id=100', 1)
```

---

<h3>Notes</h3>

The function is an asynchronous function, if the access Applet does not exist, it will try to enter the 404 Applet, and pass the original carrying parameter and the module id through the parameter "\_\_notFoundId" to the 404 Applet.
