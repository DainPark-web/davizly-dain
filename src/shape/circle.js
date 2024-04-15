const createShape = ({pos}) => {
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
