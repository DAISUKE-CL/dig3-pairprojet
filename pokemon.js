const test = new pokemon();
test.findNames(20)
  .then(data => test.makeList(data))


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

  const hTwo = document.getElementsByTagName("h2");
  hTwo[0].innerText = "勝負開始！"
})

// move_button_0.addEventListener("click", () => {
//   console.log("aaa");
  
// })

