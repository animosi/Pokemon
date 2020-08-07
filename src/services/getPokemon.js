const axios = require('axios');
const PokemonModel = require('../models/pokemon');
const PokemonIdsModel = require('../models/pokemonIds');

const getPokemon = async () => {
  try {
    const ids = await PokemonIdsModel.find({});

    const array = await Promise.all(
      ids.map(async (id) => {
        const result = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id.name}`
        );
        const pokemon = new PokemonModel({ ...result.data });
        return pokemon;
      })
    );
    await PokemonModel.insertMany(array), (err) => console.log(err);
  } catch (err) {
    console.log('getPokemon() failed', err);
  }
};

module.exports = getPokemon;
