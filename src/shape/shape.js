

class BasicShape {
    constructor(shapeName) {
      this.svgns = "http://www.w3.org/2000/svg"
      this.shape = document.createElementNS(this.svgns, shapeName);
   
    }
  
    appendTo(parent){
      parent.append(this.shape)
      return this;
    }
    attr(att, value){
        this.shape.setAttributeNS(null, att, value);
      return this;
    }
    node(){
      return this.shape
    }
  }

export default BasicShape;