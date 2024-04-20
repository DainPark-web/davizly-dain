import BasicShape from "./shape.js";

function createG() {
  class G extends BasicShape {
    constructor() {
      super("g");
    }
  }
  return new G();
}

export default createG;
