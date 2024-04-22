import BasicShape from "./shape.js";

function createAnimate() {
  class Animate extends BasicShape {
    constructor() {
      super("animate");
    }
  }
  return new Animate();
}

export default createAnimate;
