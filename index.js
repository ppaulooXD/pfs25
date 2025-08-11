const express = require('express');
const routerHome = require('./routes/homeRoute');
const server = express();

server.set('view engine', 'ejs');

server.use('/rota1', routerHome);

server.listen(5000, function(){
    console.log("Servidor em funcionamento!");
})
