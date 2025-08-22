const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const routerHome = require('./routes/homeRoute');
const server = express();

server.set('view engine', 'ejs');

server.use(express.urlencoded({extended: true}));

server.use(express.static('public'));

server.set('layout', './layout.ejs');
server.use(expressEjsLayouts);

server.use('/', routerHome);

server.listen(5000, function(){
    console.log("Servidor em funcionamento!");
    console.log("http://localhost:5000")
})
