class BasicShape {
  constructor(shapeName) {
    this.svgns = "http://www.w3.org/2000/svg";
    this.shape = document.createElementNS(this.svgns, shapeName);
  }

  appendTo(parent) {
    if (typeof parent.node === "function") {
      parent.node().append(this.shape);
    } else {
      parent.append(this.shape);
    }
    return this;
  }
  attr(att, value) {
    /* 
      x,y,r,cx,cy,fill,width,height,viewBox,href,transform, ...etc
      preserveAspectRatio
    */
    this.shape.setAttributeNS(null, att, value);
    return this;
  }
  // TODO: GetAttr
  getAttr(attrName) {
    const getAttrValue = this.shape.getAttribute(attrName);
    return getAttrValue;
  }

  style(style, value) {
    this.shape.style[style] = value;
    return this;
  }
  node() {
    return this.shape;
  }
  on(event, func) {
    this.shape.addEventListener(event, func);
    return this;
  }
}

export default BasicShape;
