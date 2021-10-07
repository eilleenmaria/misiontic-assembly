const mongoose = require('mongoose');

const producto = mongoose.Shema({
    nombre:{type:String, required: true},
    marca:{type:String, required: true},
    cilindraje:{type:Number, required: true},
    color:{type:String, required: true},
    precio:{type:Number, required: true}, 
    disponible:{type:Boolean, required: true},
});