const axios = require('axios');
const PokemonModel = require('../models/pokemon');
const PokemonIdsModel = require('../models/pokemonIds');

const limit = 10;
const uri = `https://pokeapi.co/api/v2/pokemon`;

module.exports = {
  getIds: async () => {
    try {
      const data = await axios.get(uri, { params: { limit } });
      await PokemonIdsModel.insertMany(data.data.results),
        (err) => console.log(err);
    } catch (err) {
      console.log(err);
    }
    return 'Get ids complete';
  },
  getPokemon: async () => {
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
    return 'Get pokemon complete';
  },
};
