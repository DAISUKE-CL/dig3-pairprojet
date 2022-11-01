class pokemon {
  constructor() {
  }

  addTwo(num) {
    return num + 2;
  }

  findNames(n) {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=" + n)
      .then((data) => data.json())
      .then((data) => data.results.map((pokemon) => pokemon.name))
      .then((data) => this.pokemonNames = data)
      .catch(() => "error");
  }

  inputList(name) {
    const pokemonEl = document.getElementById("pokemon_list");
    const optionEl = document.createElement("option");
    optionEl.value = name;
    pokemonEl.append(optionEl);
  }

  makeList(arr) {
    arr.forEach(name => {
      this.inputList(name);
    })
  }
}

const test = new pokemon();
test.findNames(10)
  .then(data => test.makeList(data))

module.exports = pokemon;
