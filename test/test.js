const pokemon = require("../module.js");
// const expected = require("./fixtures/result.js");
const { expect } = require("chai");

describe("トライ", () => {
  beforeEach(() => {
    test = new pokemon();
  })
  it("addTwoが動く", () => {
    expect(test.addTwo(3)).to.equal(5);
  });
  it("findNamesがポケモンの名前が入った配列のプロミスを返す", () => {
    const promise = test.findNames(2);
    const next = promise.then((actual) => {
      expect(actual).to.deep.equal(["bulbasaur", "ivysaur"])
    })
    return next;
  });
  it("findPokemonInformationが指定したポケモンの画像URLのプロミスを返す", () => {
    const promise = test.findPokemonInformation("bulbasaur");
    const next = promise.then((actual) => {
      expect(actual[0]).to.equal("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png")
    })
    return next;
  });
  it("findPokemonInformationが指定したポケモンのHPのプロミスを返す", () => {
    const promise = test.findPokemonInformation("bulbasaur");
    const next = promise.then((actual) => {
      expect(actual[1]).to.equal(45)
    })
    return next;
  });
});
