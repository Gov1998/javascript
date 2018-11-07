//dipendenze del server
const express = require ('express');
const path = require ("path");
const chalk = require('chalk');
const express_static = require('express').static;

//istanziamento server
const server = express();