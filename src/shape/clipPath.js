import BasicShape from "./shape.js";

function createClipPath() {
  class ClipPath extends BasicShape {
    constructor() {
      super("clipPath");
    }
  }
  return new ClipPath();
}

export default createClipPath;
