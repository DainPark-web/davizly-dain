import BasicShape from "./shape.js";


function createPolygon() {
  class Polygon extends BasicShape {
    constructor() {
      super("polygon")
     
    }
  
  }
  return new Polygon()
}

export default createPolygon;