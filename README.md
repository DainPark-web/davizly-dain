# Davizly-dain

Welcome to **Davizly-dain**, an open-source data visualization library designed to help developers, data scientists and information designers create intuitive and dynamic visual representations of their data. This library is part of a personal project aimed at practicing and enhancing my programming skills while contributing valuable tools to the community.

#### [Documentation &rarr;](docs/readme.md)

## Installation

```bash
npm install davizly-dain
```

## Features

- **Dynamic Charts**: Easily create and customize dynamic charts to visualize complex data.
- **Interactive Graphs**: Implement interactive graphs that users can manipulate to explore data sets.
- **Custom Visualizations**: Extend the library with your own custom visualizations using simple API hooks.

## Usage

#### davizly-shape

```js
import * as davizly from "davizly-dain";
const container = document.querySelector(".container")
const svg = davizly.SVG().appendTo(container).attr("width", "100%").attr("height", "100%")

const circle = davizly.Circle(100,100,100).appendTo(svg).attr("fill", "red")
```

#### joinData

```js
const datas = [1,4,2,3,2,4,5,5,2,23,4,3,2,1,1,4]
let circles = davizly.JoinData(datas).connectShape("circle").appendTo(svg)
circles
.attr("cx", (ele, idx) => {
    if(ele > 10){
        return window.innerWidth - 100;
    }else {
        return 100
    }
})
.attr("cy", (ele, idx) => {
   return 100 * idx
})
.attr("r", 100)
.attr("fill", "black")
```

[Documentation &rarr;](docs/readme.md)

## License

**Davizly-dain** is released under the MIT license. This means it is free for everyone to use, modify, and distribute for both personal and commercial purposes. Feel free to fork this repository, contribute back, or use it in your own projects!
