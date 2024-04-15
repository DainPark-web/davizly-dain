const createShape = ({pos = {x:0, y:0}}) => {
    class Circle {
        constructor(pos){
           this.pos = pos

           Object.seal(this)
        }
        draw(){
    
        }
    }
    return new Circle(pos)
}

export default createShape;
