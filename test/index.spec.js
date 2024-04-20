// import assert from "assert";
import { should } from "chai";
import { JSDOM } from "jsdom";

should();

describe("DOM Manipulation!", function () {
  let document;
  beforeEach(function () {
    // fake dom
    const jsdom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
    document = jsdom.window.document;
  });
  describe("BasicShape", function () {
    it("it should return object", function () {
      class BasicShape {
        constructor(shapeName) {
          this.svgns = "http://www.w3.org/2000/svg";
          this.shape = document.createElementNS(this.svgns, shapeName);
        }

        appendTo(parent) {
          parent.append(this.shape);
          return this;
        }
        attrTo(att, value) {
          this.shape.setAttributeNS(null, att, value);
          return this;
        }
        node() {
          return this.shape;
        }
      }
      const bH = new BasicShape("circle")
      bH.attrTo("cx", 100);
      const xPos = bH.node().getAttribute("cx");


      bH.should.be.a("object");
      xPos.should.equal("100")
    });
  });
});
