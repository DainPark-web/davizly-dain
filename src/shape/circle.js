// const createShape = () => {
//     const svgns = "http://www.w3.org/2000/svg";
//     let circle = document.createElementNS(svgns, "circle");
//     circle.setAttributeNS(null, 'cx', 10);
//     circle.setAttributeNS(null, 'cy', 10);
//     circle.setAttributeNS(null, 'r', 50);
//     return circle;
// };

// export default createShape;

class Circle {
  constructor() {
    this.circle;
  }

  draw() {
    const svgns = "http://www.w3.org/2000/svg";
    let circle = document.createElementNS(svgns, "circle");
    this.circle = circle;
    return circle;
  }
  pos(pos){
    this.circle.setAttribute("x", pos.x)
    this.circle.setAttribute("y", pos.y)
  }
}
