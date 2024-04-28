# Documentation

## davizly-shape

In Davizly-dain, visual representations such as shapes play a crucial role in data visualization. Shapes such as circles, rectangles, and other geometric figures help illustrate quantitative data by transforming it into a visual context that is easy to understand. For example, a circle might represent a data point with its area proportional to the data value, enabling users to quickly grasp complex relationships and patterns.

Here's how you can create and manipulate a simple circle shape using Davizly-dain:

```js
const circle = davizly.Circle(100,100,100).appendTo(svg).attr("fill", "red")
```

### Shape list

- [Circle](./shape/01.md)

## Methods

### appendTo(target)

Appends the created shape to a specified target element, which is typically an SVG container. This method integrates the shape into the DOM, making it visible within the specified SVG context.

Parameter:
target: The target SVG element to which the shape will be appended.

Example:

```js
const svg = davizly.SVG().appendTo(container);
const circle = davizly.Circle(100, 100, 100).appendTo(svg);
circle.attr("fill", "red");
```

### Attributes

The Circle function creates a circle with specified center coordinates (cx, cy) and radius (r). It returns an object that can be further modified by methods such as attr and style.

#### attr(attributeKey, value | function)

Sets or updates an attribute for the shape. If a function is provided, it is called with the current data point as an argument, allowing for dynamic attribute values.

- Parameters:
attributeKey: The name of the attribute to set (e.g., "fill", "stroke").
value | function: The value to set the attribute to, or a function returning a value.

Example:

```js
circle.attr("stroke", "black");
circle.attr("fill", (data) => data.color);
```

#### style(styleKey, value | function)

Applies CSS styles to the shape. This method works similarly to attr, but for styling purposes.

- Parameters:
styleKey: The name of the style property to set (e.g., "opacity", "cursor").
value | function: The value to set the style to, or a function returning a value.

Example:

```js
circle.style("opacity", 0.75);
circle.style("cursor", (data) => (data.clickable ? "pointer" : "default"));
```

### node()

Returns the underlying DOM element for direct manipulation or inspection.

Example:

```js
const domNode = circle.node();
console.log(domNode.nodeName); // Outputs: "circle"
```
