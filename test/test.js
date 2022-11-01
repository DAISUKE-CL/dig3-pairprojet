const pokemon = require("../pokemon.js");
// const expected = require("./fixtures/result.js");
const { expect } = require("chai");

describe("トライ", () => {
  it("addTwoが動く", () => {
    // Setup
    const test = new pokemon();

    // Exercise
    // Assert
    expect(test.addTwo(3)).to.equal(5);
  });
});
