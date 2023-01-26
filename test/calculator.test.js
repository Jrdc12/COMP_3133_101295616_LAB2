const assert = require("assert")
const math = require("../app/calculator")

describe("Math", function () {
  describe("#add()", function () {
    it("should return the sum of two numbers", function () {
      assert.equal(math.add(1, 2), 3)
    })
    // give an error
    it("should return the sum of two numbers", function () {
      assert.equal(math.add(1, 2), 4)
    })
  })

  describe("#mul()", function () {
    it("should return the product of two numbers", function () {
      assert.equal(math.mul(2, 3), 6)
    })
    // give an error
    it("should return the product of two numbers", function () {
      assert.equal(math.mul(2, 3), 7)
    })
  })

  describe("#div()", function () {
    it("should return the division of two numbers", function () {
      assert.equal(math.div(6, 3), 2)
    })

    // give an error
    it("should return the division of two numbers", function () {
      assert.equal(math.div(6, 3), 3)
    })
  })

  describe("#sub()", function () {
    it("should return the subtraction of two numbers", function () {
      assert.equal(math.sub(5, 2), 3)
    })

    // give an error
    it("should return the subtraction of two numbers", function () {
      assert.equal(math.sub(5, 2), 4)
    })
  })
})
