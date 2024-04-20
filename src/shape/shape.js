import { svgUrl } from "../utils/constant.js";

class BasicShape {
    constructor(shapeName) {
      this.svgns = svgUrl;
      this.shape = document.createElementNS(this.svgns, shapeName);
   
    }
  
    appendTo(parent){
      parent.append(this.shape)
      return this;
    }
    attrTo(att, value){
        this.shape.setAttributeNS(null, att, value);
      return this;
    }
    node(){
      return this.shape
    }
  }

export default BasicShape;