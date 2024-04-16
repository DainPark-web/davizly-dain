class Shape {
    constructor(pos){
       this.pos = pos
       Object.seal(this)
    }
    
}

export default Shape;