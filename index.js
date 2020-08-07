const express = require('express');
require('./src/config/database');
const getIds = require('./src/services/getIds');
const getPokemon = require('./src/services/getPokemon');

const app = express();

app.listen(3000, () => console.log('connected on :3000'));

//*  MAIN()  *//

// getIds();
getPokemon();
