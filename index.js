const express = require('express');
const routerHome = require('./routes/homeRoute');
const server = express();

server.set('view engine', 'ejs');

server.use('/', routerHome);

server.listen(5000, function(){
    console.log("Servidor em funcionamento!");
})
