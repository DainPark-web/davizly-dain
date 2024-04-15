// import assert from "assert";
import {should} from "chai";
import * as davizly from "../src/index.js";

should();

describe("App index test!", function(){
    describe("mochaTest", function(){
        it("mochaTest should return hello dain✅", function(){
            // assert.equal(davizly.mochaTest(), "hello dain")
            davizly.mochaTest().should.equal("hello dain")
        })
    })
})