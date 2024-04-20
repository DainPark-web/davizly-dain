import BasicShape from "./shape";

function createG() {
  class G extends BasicShape {
    constructor() {
      super("g");
    }
  }
  return new G();
}

export default createG;
