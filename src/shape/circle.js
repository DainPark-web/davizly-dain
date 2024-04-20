import BasicShape from "./shape.js";


function Circle(x = 0,y = 0,r = 10) {
  class newCircle extends BasicShape {
    constructor(x2, y2, r2) {
      super("circle")
      this.shape.setAttributeNS(null, "cx", x2);
      this.shape.setAttributeNS(null, "cy", y2);
      this.shape.setAttributeNS(null, "r", r2);
    }
  
  }
  return new newCircle(x, y, r)
}

export default Circle;