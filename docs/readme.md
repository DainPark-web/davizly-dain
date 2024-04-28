# Documentation

### davizly-shape

```js
import * as davizly from "davizly-dain";
const container = document.querySelector(".container")
const svg = davizly.SVG().appendTo(container).attr("width", "100%").attr("height", "100%")

const circle = davizly.Circle(100,100,100).appendTo(svg).attr("fill", "red")
```
