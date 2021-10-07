//importando la libreria express
var express = require('express');
//se crea una instancia de express
var app = express();

const http = require ('http');

// respond with "hello world" when a GET request is made to the homepage

//ruta de escucha del servidor
app.get('/saludo', function(req, res) {
  res.send('Grupo Assembly');
});

app.post('/enviar', function(req, res) {
    console.log(req.body.title)
    res.send('Grupo Assembly');
  });


//para que el servidor quede escuchando y no se cierre
app.set("port", 3001);
const server = http.createServer(app)
server.listen(3001);