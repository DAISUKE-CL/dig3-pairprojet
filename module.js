// const fetch = require("node-fetch");

class pokemon {
  constructor() {
    this.nowAttack = "right";
  }

  findNames(n) {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=" + n)
      .then((data) => data.json())
      .then((data) => data.results.map((pokemon) => pokemon.name))
      .then((data) => (this.pokemonNames = data))
      .catch(() => "error");
  }

  inputList(name) {
    const pokemonEl = document.getElementById("pokemon_list");
    const optionEl = document.createElement("option");
    optionEl.value = name;
    pokemonEl.append(optionEl);
  }

  makeList(arr) {
    arr.forEach((name) => {
      this.inputList(name);
    });
  }

  findPokemonInformation(name) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((data) => data.json())
      .then((data) => [
        data.sprites.other["official-artwork"].front_default,
        data.stats[0]["base_stat"],
        data.moves.map((val) => val.move.name).filter((move, i) => i < 4),
      ])
      .catch(() => "error");
  }

  inputPokemonInformation(arr, leftOrRight) {
    const selectedPokemonEl = document.getElementById(
      "selected_pokemon_" + leftOrRight
    );
    selectedPokemonEl.innerHTML = "";

    const imageEl = document.createElement("img");
    imageEl.src = arr[0];
    imageEl.alt = "選択したポケモンの画像";
    selectedPokemonEl.append(imageEl);

    const turnMessageEl = document.createElement("h2");
    turnMessageEl.id = "turn_Message_" + leftOrRight;
    if (leftOrRight === "left") {
      turnMessageEl.innerText = "あなたのターンです";
    } else {
      turnMessageEl.innerText = "相手のターンです";
    }
    selectedPokemonEl.append(turnMessageEl);

    const hpEl = document.createElement("p");
    hpEl.class = "hp";
    hpEl.name = "hp";
    hpEl.innerText = "HP: " + arr[1];

    selectedPokemonEl.append(hpEl);

    const buttonUpperEl = document.createElement("div")
    const buttonMiddleEl = document.createElement("div")
    const buttonBottomEl = document.createElement("div")

    selectedPokemonEl.append(buttonUpperEl)
    selectedPokemonEl.append(buttonMiddleEl)
    selectedPokemonEl.append(buttonBottomEl)

    for (let i = 0; i < arr[2].length; i++) {
      const buttonEl = document.createElement("button");
      buttonEl.name = "move_button_" + leftOrRight + i;
      buttonEl.id = "move_button_" + leftOrRight + i;
      buttonEl.innerText = arr[2][i];
      buttonEl.setAttribute("onclick", `test.attack("${leftOrRight}", ${i})`);
      if (i === 0) {
        buttonUpperEl.append(buttonEl);
      } else if (i === 3) {
        buttonBottomEl.append(buttonEl);
      } else {
        buttonMiddleEl.append(buttonEl)
      }
    }
  }

  attack(leftOrRight, i) {
    if (this.nowAttack === leftOrRight) {
      return;
    }
    this.nowAttack = leftOrRight;
    let hpEl;
    let myTurnMessageEl;
    let yourTurnMessageEl;
    if (leftOrRight === "left") {
      hpEl = document.getElementsByTagName("p")[1];
      myTurnMessageEl = document.getElementById("turn_Message_left");
      yourTurnMessageEl = document.getElementById("turn_Message_right");
    } else {
      hpEl = document.getElementsByTagName("p")[0];
      myTurnMessageEl = document.getElementById("turn_Message_right");
      yourTurnMessageEl = document.getElementById("turn_Message_left");
    }
    let hp = hpEl.innerText.slice(3);
    hp = Number(hp) - Math.ceil(20 * Math.random());
    if (hp > 0) {
      hpEl.innerText = "HP: " + hp.toString();
      myTurnMessageEl.innerText = "相手のターンです";
      yourTurnMessageEl.innerText = "あなたのターンです";
      document.getElementById(`attack_audio_${i}`).currentTime = 0;
      document.getElementById(`attack_audio_${i}`).play();
    } else {
      document.getElementById("down_audio").play();
      hpEl.innerText = "倒された！";
      myTurnMessageEl.innerText = "あなたの勝ちです！";
      yourTurnMessageEl.innerText = "あなたの負けです";
    }
  }

  mute() {
    if (document.getElementById("bgm_audio").muted) {
      document.getElementById("bgm_audio").muted = false;
    } else {
      document.getElementById("bgm_audio").muted = true;
    }
  }
}

module.exports = pokemon;
