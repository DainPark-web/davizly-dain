import BasicShape from "./shape.js";

function createSymbol() {
  class Symbol extends BasicShape {
    constructor() {
      super("symbol");
    }
  }
  return new Symbol();
}

export default createSymbol;
