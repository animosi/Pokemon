const axios = require('axios');
const PokemonModel = require('../models/pokemon');
const PokemonIdsModel = require('../models/pokemonIds');
// const schema = require('../models/schema'); //* custom schema

const uri = `https://pokeapi.co/api/v2/pokemon`; //* uri to pull Ids

module.exports = {
  getIds: async (limit) => {
    try {
      const { data } = await axios.get(uri, { params: { limit } });
      await PokemonIdsModel.insertMany(data.results);
    } catch (err) {
      console.log('getIds()', err);
      throw err;
    }
    return 'Get ids complete';
  },
  getPokemon: async () => {
    try {
      const ids = await PokemonIdsModel.find({});

      const array = await Promise.all(
        ids.map(async ({ url }) => {
          const { data } = await axios.get(url);
          const pokemon = new PokemonModel({ ...data });
          // const pokemon = { ...schema, ...data }; //* custom schema without mongoose
          return pokemon;
        })
      );
      await PokemonModel.insertMany(array);
    } catch (err) {
      console.log('getPokemon()', err);
      throw err;
    }
    return 'Get pokemon complete';
  },
};
