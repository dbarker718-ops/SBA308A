let pokeDex;

pokeDex = window.prompt("Choose your PokeMon!");

let pokeMon = `https://pokeapi.co/api/v2/pokemon/${pokeDex}`;
console.log(pokeMon);
async function getUser() {
  try {
    const response = await axios.get(pokeMon);
    console.log(response);
    console.log(response.data.types[0].type.name)
  } catch (error) {
    console.error(error);
  }
}

getUser();

console.log(pokeDex);

// const Pokemon = {
// name: "Pikachu",
// health: 100,
// type: ["electric"]
// }
// const Pokemon = {
// name: "Charmander",
// health: 100,
// type: ["fire"]
// }
// const Pokemon = {
// name: "Squirtle",
// health: 100,
// type: ["water"]
// }
// const Pokemon = {
// name: "Bulbasaur",
// health: 100,
// type: ["grass"]
// }
