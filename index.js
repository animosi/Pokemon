const express = require('express');
require('./src/config/database');
const service = require('./src/services/getPokemon');

const app = express();

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

app.listen(3000, () => console.log('connected on :3000'));

//*  MAIN()  *//

log('async 1');
(async () => {
  await service.getIds().then(log);
  service.getPokemon().then(log);
})();
log('async 2');
