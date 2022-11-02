const test = new pokemon();
test.findNames(10)
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
})

// move_button_0.addEventListener("click", () => {
//   console.log("aaa");
  
// })

