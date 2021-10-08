const mongoose = require("mongoose");

const usuario = mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true  },
  clave: { type: String, required: true},
  rol: { type: String, required: true},
  estado:{ type: String, required: true},
});

module.exports = mongoose.model("Usuario", usuario);