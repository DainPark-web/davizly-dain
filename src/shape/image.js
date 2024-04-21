import BasicShape from "./shape.js";

function createImage() {
  class Image extends BasicShape {
    constructor() {
      super("image");
    }
  }
  return new Image();
}

export default createImage;
