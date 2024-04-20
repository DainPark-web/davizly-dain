import BasicShape from "./shape";


function createRect(x=0,y=0, width=10, height=10) {
  class Rect extends BasicShape {
    constructor(x2, y2, width2, height2) {
      super("rect")
      this.shape.setAttributeNS(null, "x", x2);
      this.shape.setAttributeNS(null, "y", y2);
      this.shape.setAttributeNS(null, "width", width2);
      this.shape.setAttributeNS(null, "heigth", height2);
    }
  
  }
  return new Rect(x, y, width, height)
}

export default createRect;