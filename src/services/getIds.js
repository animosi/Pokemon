const axios = require('axios');
const mongoose = require('mongoose');
const PokemonIdsModel = require('../models/pokemonIds');
const limit = 10;
const uri = `https://pokeapi.co/api/v2/pokemon`;

const getIds = async () => {
  try {
    const data = await axios.get(uri, { params: { limit } });
    await PokemonIdsModel.insertMany(data.data.results),
      (err) => console.log(err);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getIds;
