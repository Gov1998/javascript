// Importo le dipendenze del modello product
const database = require('../configurations/database_configuration').database;
const sequelize = require('sequelize');

//entità prodotto
const Order = database.define('order', {
    code: {
        type: sequelize.INTEGER,
        primaryKey: true,
    },
    description : {
        type: sequelize.STRING,
        allowNull : false,
    },
    date_em : {
        type: sequelize.DATE,
        allowNull : false,
    },
    date_del : {
        type: sequelize.DATE,
        allowNull : false,
    }

});

module.exports = Order;