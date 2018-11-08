//dipendenze del server
const express = require ('express');
const path = require ("path");
const chalk = require('chalk');
const express_static = require('express').static;

//istanziamento server
const server = express();

//configurazioni
require ('./configurations/server_configuration')(server);
require ('.configuration/database_configuration');
require ('.configuration/relationship_configuration');
server.set('view engine','pug');
server.set("view",path.join(__dirname,"view"));
server.use(express_static(path.join(__dirname, '/public')));

//carico le variabili per configurare il server
const SERVER_PORT = process.env.SERVER_PORT;
const SERVER_URL = process.env.SERVER_URL;

//creare la connessione al server
server.listen(SERVER_PORT, function(){
    console.log(chalk.green('✓') + "Server disponibile all'indirizzo" + chalk.green(SERVER_URL + SERVER_PORT));
});

