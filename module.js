// const fetch = require("node-fetch");

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
      .then((data) => [
        data.sprites.other["official-artwork"].front_default,
        data.stats[0]["base_stat"],
        data.moves.map(val => val.move.name)
          .filter((move, i) => i < 4)
      ])
      .catch(() => "error");
  }

  inputPokemonInformation(arr, leftOrRight){
    const selectedPokemonEl = document.getElementById("selected_pokemon_" + leftOrRight);
    selectedPokemonEl.innerHTML = "";
    
    const imageEl = document.createElement("img");
    imageEl.src = arr[0];
    imageEl.alt = "選択したポケモンの画像"
    
    const hpEl = document.createElement("p");
    hpEl.class = "hp"
    hpEl.name = "hp"
    hpEl.innerText = "HP: " + arr[1]
    selectedPokemonEl.append(imageEl)
    selectedPokemonEl.append(hpEl)

    for (let i = 0; i < arr[2].length; i ++) {
      const buttonEl = document.createElement("button");
      buttonEl.name = "move_button_" + i;
      buttonEl.id = "move_button_" + i;
      buttonEl.innerText = arr[2][i];
      buttonEl.setAttribute("onclick", "test.attack()");
      selectedPokemonEl.append(buttonEl);
    }
  }

  attack(){
   const hpEl = document.getElementsByTagName("p");
   let hp = hpEl[0].innerText.slice(3);
   hp = Number(hp) - Math.ceil(20 * Math.random());
   if (hp > 0) {
    hpEl[0].innerText = "HP: " + hp.toString();
   } else {
    hpEl[0].innerText = "倒された！"
   }
  }
}

module.exports = pokemon;
