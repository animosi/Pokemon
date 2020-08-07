const mongoose = require('mongoose');

const pokeIdsSchema = new mongoose.Schema({
  name: String,
  url: String,
});
const PokemonIdsModel = mongoose.model('PokemonIds', pokeIdsSchema);

module.exports = PokemonIdsModel;
