const sequelize = require('sequelize');
const chalk = require ('chalk');

//carico dal file .env le impostazioni del database
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_DIALECT = process.env.DATABASE_DIALECT;
const DATABASE_PORT = process.env.DATABASE_PORT;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

//connessione al database
const database = new sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
    host: DATABASE_URL,
    dialect: DATABASE_DIALECT,
    port: DATABASE_PORT
});

// verifico la connessione
isConnected();
    function isConnected(){
        const connection = database.authenticate().catch(function (err) {
            console.log(chalk.red('✗')) + "Impossibile connettersi al database" + chalk.red(DATABASE_NAME);
        });
        console.log(chalk.green('✓') + "Connessione al database " + chalk.green(DATABASE_NAME)+ " effettuata");
};
module.exports = {database};