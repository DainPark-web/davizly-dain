import BasicShape from "./shape.js";

function createA() {
  class A extends BasicShape {
    constructor() {
      super("a");
    }
  }
  return new A();
}

export default createA;
