var express = require('express');
var mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect( 
//conexión a la base de datos

)

//crear la colección (tabla)
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));