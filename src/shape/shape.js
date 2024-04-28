

class BasicShape {
    constructor(shapeName) {
      this.svgns = "http://www.w3.org/2000/svg"
      this.shape = document.createElementNS(this.svgns, shapeName);
   
    }
  
    appendTo(parent){
      if(typeof parent.node === "function"){

        parent.node().append(this.shape)
      }else{
        parent.append(this.shape)

      }
      return this;
    }
    attr(att, value){
        this.shape.setAttributeNS(null, att, value);
      return this;
    }
    style(style, value){
      this.shape.style[style] = value;
    }
    node(){
      return this.shape
    }

  }

export default BasicShape;