import BasicShape from "./shape.js";

function createAnimateMotion() {
  class AnimateMotion extends BasicShape {
    constructor() {
      super("animateMotion");
    }
  }
  return new AnimateMotion();
}

export default createAnimateMotion;
