import BasicShape from "./shape.js";

function createPath() {
  class Path extends BasicShape {
    constructor() {
      super("path");
    }
  }
  return new Path();
}

export default createPath;
