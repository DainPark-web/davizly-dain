import BasicShape from "./shape.js";


function createJoinData(data){
  class JoinData {
    constructor(data) {
      this.data = data;
      this.shapes = []
    }
  
    connectShape(shape) {
      if (this.data.length > 0) {
      this.data.forEach((element, index) => {
        this.shapes.push(new BasicShape(shape))
      })
      }
      return this;
    }

    appendTo(parent) {
      if (this.data.length > 0) {
        for (let i = 0; i < this.shapes.length; i++) {
          parent.append(this.shapes[i].node());
        }
      }
      return this;
    }

    attr(att, value) {
      if(typeof value === "function"){
        this.data.forEach((element, index) => {
          this.shapes[index].attr(att, value(element, index))
        })
      }else {
        for (let i = 0; i < this.data.length; i++) {
          this.shapes[i].attr(att, value);
        }
      }
      return this;
    }
    
    node(){
      return this.shapes
    }
  }

  return new JoinData(data)
}


export default createJoinData;