// Dipendenze configurazione
const dotenv = require('dotenv');

// Esportazione modulo configurazione
module.exports = (server) => {
  
    dotenv.config({path: '.env'});
};