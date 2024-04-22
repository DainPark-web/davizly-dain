import BasicShape from "./shape.js";

function createAnimationMotion() {
  class AnimationMotion extends BasicShape {
    constructor() {
      super("animateMotion");
    }
  }
  return new AnimationMotion();
}

export default createAnimationMotion;
