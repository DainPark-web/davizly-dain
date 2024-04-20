import BasicShape from "./shape";


function createCircle(x,y,r) {
  class Circle extends BasicShape {
    constructor(cx, cy, cr) {
      super("circle")
      this.shape.setAttributeNS(null, "cx", cx);
      this.shape.setAttributeNS(null, "cy", cy);
      this.shape.setAttributeNS(null, "r", cr);
    }
  
  }
  return new Circle(x, y, r)
}

export default createCircle;