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
    test.inputPokemonInformation(res);
  })
})