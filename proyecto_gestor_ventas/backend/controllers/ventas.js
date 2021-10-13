const Venta = require("../models/ventas");
// listar ventas
exports.getVenta = (req, res) => {
    Venta.find().then((ventaResult) => {
      res.status(200).json(ventaResult);
    })
  };

// crear ventas
exports.addVenta = (req, res) => {
    const ventaAdd = new Venta({
      nombreVendedor: req.body.nombreVendedor,
      nombreCliente: req.body.nombreCliente,
      idCliente: req.body.idCliente,
      fechaPago: req.body.fechaPago,
      idProducto: req.body.idProducto,
      marca: req.body.marca,
      modelo: req.body.modelo,
      cantidad: req.body.cantidad,
      precioUnitario: req.body.precioUnitario,
      valorTotal: req.body.valorTotal,
    });
  
    ventaAdd.save().then((createdVenta) => {
        console.log(createdVenta);
        res.status(201).json("Creado satisfactoriamente");
      });
    };
//buscar usuario por id
exports.getVentaId = (req, res) => {
    Venta.findById(req.params.id).then((ventaResult) => {
      if (ventaResult) {
        res.status(200).json(ventaResult);
      } 
      else {
        res.status(404).json("Usuario no encontrado");
      }
    });
  };