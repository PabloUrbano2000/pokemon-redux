import axios from "axios";

export const getPokemons = async () => {
  return await axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

export const getPokemonDetails = async (pokemon) => {
  return await axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
