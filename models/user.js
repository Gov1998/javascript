//importo le dipendenze del modello utente
const database = require('../configurations/database_configuration').database;
const sequelize = require('sequelize');

//entità utente
const user = database.define('user',{
   id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: sequelize.STRING,
        allowNull: false
    },
   lastname: {
       type: sequelize.STRING,
       allowNull: false
   },
  email: {
      type: sequelize.STRING,
      unique: true,
      allowNull: false
  },
  password: {
      type: sequelize.STRING,
      allowNull: false
  },
  address: {
      type: sequelize.STRING,
      allowNull: false
  }

});