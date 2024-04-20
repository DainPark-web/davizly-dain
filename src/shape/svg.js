import BasicShape from "./shape.js";


function createSVG(width=200, height=100) {
  class SVG extends BasicShape {
    constructor(width2, height2) {
      super("svg")
      this.shape.setAttributeNS(null, "fill", "none");
      this.shape.setAttributeNS(null, "width", width2);
      this.shape.setAttributeNS(null, "heigth", height2);
    }
  
  }
  return new SVG(width, height)
}

export default createSVG;