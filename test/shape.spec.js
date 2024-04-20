// import assert from "assert";
import { should } from "chai";
import { JSDOM } from "jsdom";

should();

describe("DOM Manipulation!", function () {
  let document;
  beforeEach(function () {
    // fake dom
    const jsdom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
        url: "http://localhost"
    });
    document = jsdom.window.document;
  });
  describe("BasicShape", function () {
    it("it should return object", function () {
      class BasicShape {
        constructor(shapeName) {
          this.svgns = "http://www.w3.org/2000/svg";
          this.shape = document.createElementNS(this.svgns, shapeName);
        }
      }
      const bH = new BasicShape("circle");
      bH.should.be.a("object");
    });

    it("it should return 100, SVGElement, children length 1", function () {
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
      const container = document.querySelector("body")
      const bH = new BasicShape("circle");
      bH.appendTo(container)
      bH.attrTo("cx", 100);
      const xPos = bH.node().getAttribute("cx");
      const circleNode = bH.node()
      const len = container.children.length


      xPos.should.equal("100");
      circleNode.should.be.a("SVGElement");
      len.should.equal(1);
    });
  });
});
