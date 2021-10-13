const mongoose = require("mongoose");

const venta = mongoose.Schema({
  nombreVendedor: { type: String, required: true },
  nombreCliente: {type: String, required: true },
  idCliente: { type: String, required: true  },
  fechaPago: { type: Date, required: true},
  idProducto: { type: String, required: true},
  marca: { type: String, required: true},
  modelo: { type: String, required: true},
  cantidad: { type: Number, required: true},
  precioUnitario: { type: Number, required: true},
  valorTotal: { type: Number, required:true},  
});


module.exports = mongoose.model("ventas", venta);


