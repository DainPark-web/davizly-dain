import BasicShape from "./shape";

function createLine(x1="0", y1="80", x2="100", y2="20", stroke="black") {
  class Line extends BasicShape {
    constructor(lx1, ly1, lx2, ly2, lstroke) {
      super("line");
      this.shape.setAttributeNS(null, "x1", lx1);
      this.shape.setAttributeNS(null, "y1", ly1);
      this.shape.setAttributeNS(null, "x2", lx2);
      this.shape.setAttributeNS(null, "y2", ly2);
      this.shape.setAttributeNS(null, "stroke", lstroke);
    }
  }
  return new Line(x1, y1, x2, y2, stroke);
}

export default createLine;
