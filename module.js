const fetch = require("node-fetch");

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

  findPokemonInformation(name){
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((data) => data.json())
      .then((data) => data.sprites.front_default)
      .catch(() => "error");
  }

  inputPokemonInformation(url){
    const selectedPokemonEl = document.getElementById("selected_pokemon_left");
    selectedPokemonEl.innerHTML = "";
    const imageEl = document.createElement("img");
    imageEl.src = url;
    imageEl.alt = "選択したポケモンの画像"
    selectedPokemonEl.append(imageEl)
  }
}

module.exports = pokemon;
