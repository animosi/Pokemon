const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema(
  {
    name: String,
    abilities: [{ ability: { name: String } }],
    types: [{ type: { name: String } }],
    height: { $type: Number, default: 0 },
    weight: { $type: Number, default: 0 },
    base_experience: { $type: Number, default: 0 },
    stats: [{ base_stat: String, stat: { name: String } }],
  },
  { typeKey: '$type' } //* change "type" keyword to $type
);

const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

module.exports = PokemonModel;
