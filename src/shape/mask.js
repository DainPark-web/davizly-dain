import BasicShape from "./shape.js";


function createMask() {
  class Rect extends BasicShape {
    constructor() {
      super("mask")
     
    }
  
  }
  return new Rect()
}

export default createMask;