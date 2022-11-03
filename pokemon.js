const test = new pokemon();
test.findNames(20)
  .then(data => test.makeList(data))

// test.findPokemonInformation("bulbasaur")
//   .then((res) => {
//     test.inputPokemonInformation(res);
//   })

pokemon_select_left.addEventListener("click", () => {
  const selectedPokemonLeft = pokemon_left.value;  
  test.findPokemonInformation(selectedPokemonLeft)
  .then((res) => {
    test.inputPokemonInformation(res, "left");
  })
})

pokemon_select_right.addEventListener("click", () => {
  const selectedPokemonRight = pokemon_right.value;  
  test.findPokemonInformation(selectedPokemonRight)
  .then((res) => {
    test.inputPokemonInformation(res, "right");
  })
  document.getElementById('bgm_audio').play();
})

// move_button_0.addEventListener("click", () => {
//   console.log("aaa");
  
// })

