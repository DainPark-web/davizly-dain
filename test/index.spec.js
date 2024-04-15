// import assert from "assert";
import {should} from "chai";
import * as davizly from "../src/index.js";

should();

describe("App index test!", function(){
    describe("shape", function(){
        it("it should return the value of positionX", function(){
            // assert.equal(davizly.mochaTest(), "hello dain")
            const circle = davizly.Circle({pos: {x: 1, y: 1}})
            const pos = circle.pos.x
            pos.should.equal(1)
        })
        it("it should return object", function(){
            // assert.equal(davizly.mochaTest(), "hello dain")
            const circle = davizly.Circle({pos: {x: 1, y: 1}})
            const pos = circle
            pos.should.be.a("object")
        })
       
    })
})