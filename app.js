const myPokemonContainer = document.querySelector(".pokemoncontainer")

for (let i = 1; i < 501; i++) {
    const myImg = document.createElement("img")

    myImg.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)

    myImg.classList.add("pokemon")
    myPokemonContainer.append(myImg)

}