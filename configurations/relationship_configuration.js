const database = require ('./database_configuration').database;
 
//importo i modelli
const User = require('../models/user');
const Product = require('../models/product');
const Order = require('../models/orders');

//definisco le relazioni del database
User.hasMany(Order);//1:M
Order.belongsTo(User);//1:1
Order.hasMany(Product);//1:M
Product.belongsTo(Order);//1:M

//sincronizza i modelli col database

database.sync({force: true})
