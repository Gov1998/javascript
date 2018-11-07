// Importo le dipendenze del modello product
const database = require('../configs/database_configuration').database;
const sequelize = require('sequelize');

//entità prodotto
const Product = database.define('product', {
    code: {
        type: sequelize.INTEGER,
        primaryKey: true,
    },
    description : {
        type: sequelize.STRING,
        allowNull : false,
    },
    size : {
        type: sequelize.STRING,
        allowNull : false,
    },
    quantity : {
        type: sequelize.INTEGER,
        allowNull : false,
    },
    price : {
        type: sequelize.INTEGER,
        allowNull : false,
    },

});

module.exports = Product;