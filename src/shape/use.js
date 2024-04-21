import BasicShape from "./shape.js";

function createUse() {
  class Use extends BasicShape {
    constructor() {
      super("use");
    }
  }
  return new Use();
}

export default createUse;
