var express = require('express');
var mongoose = require('mongoose');
//const cors = require("cors");
var app = express();

const productsRoutes = require("./routes/productos");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cors());

//conexión a la base de datos con mongoose
mongoose.connect(
    "mongodb+srv://dbUser:SBDrrjnO7RC4B1Rm@cluster0.xifqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  ).then(() => {
   console.log("Estamos conectados");
  });

//Definición y organización de rutas
app.use("/api/productos", productsRoutes);

//permite llamar al server
module.exports = app;