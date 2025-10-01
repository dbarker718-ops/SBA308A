fetchData();
async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } 
  catch (error) {
    console.error(error);
  }
}

// const searchInput = document.getElementById(`search-input`)
// const searchResults = document.getElementById(`search-result`)

// let pokeDex;

// //pokeDex = window.prompt("Choose your PokeMon!");

// let pokeMon = `https://pokeapi.co/api/v2/pokemon/`;
// console.log(pokeMon);
// async function getUser() {
//   try {
//     const response = await axios.get(pokeMon);
//     console.log(response);
//     console.log(response.data.types[0].type.name)
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUser();

// console.log(pokeDex);

//     searchInput.addEventListener('input', async (event) => {
//         const query = event.target.value;
//         if (query.length > 2) { // Only search if query is long enough
//             await fetchSearchResults(query);
//         } else {
//             searchResults.innerHTML = ''; // Clear results if query is too short
//         }
//     });

// // const Pokemon = {
// // name: "Pikachu",
// // health: 100,
// // type: ["electric"]
// // }
// // const Pokemon = {
// // name: "Charmander",
// // health: 100,
// // type: ["fire"]
// // }
// // const Pokemon = {
// // name: "Squirtle",
// // health: 100,
// // type: ["water"]
// // }
// // const Pokemon = {
// // name: "Bulbasaur",
// // health: 100,
// // type: ["grass"]
// // }
