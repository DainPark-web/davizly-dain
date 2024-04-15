import assert from "assert";
import { mochaTest } from "../src/index.js";
describe("App test!", function(){
    it("mochaTest should return hello dain", function(done){
        if(mochaTest() === "hello dain"){
            done()
        }
    })
})