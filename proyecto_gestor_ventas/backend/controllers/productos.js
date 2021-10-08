//AQUI VA TODA LA LÓGICA

//importar el modelo
const Producto = require("../models/productos");

exports.getProducts = (req, res) => {
  Producto.find().then((postResult) => {
    res.status(200).json(postResult);
  })
};

//exports.getProducts = (req, res) => {
//  Producto.find()
//    .populate("categoria")
//    .then((productoResult) => {
//      res.status(200).json(productoResult);
//    });
//};

exports.addProduct = (req, res) => {
  const productoAdd = new Producto({
    title: req.body.title,
    marca: req.body.marca,
    modelo: req.body.modelo,
    cilindraje: req.body.cilindraje,
    categoria: req.body.categoria,
    disponible: req.body.disponible,
    valorUnitario: req.body.valorUnitario,
  });

  productoAdd.save().then((createdProduct) => {
    console.log(createdProduct);
    res.status(201).json("Creado satisfactoriamente");
  });
};

//exports.getProductId = (req, res) => {
//  Producto.findById(req.params.id).then((productoResult) => {
//    if (productoResult) {
//      res.status(200).json(productoResult);
//    } else {
//      res.status(404).json("Producto no encontrado");
//    }
//  });
//};

//exports.getProductIdLazyLoading = (req, res) => {
//  Producto.findById(req.params.id)
//    .populate("categoria")
//    .then((productoResult) => {
//      if (productoResult) {
//        res.status(200).json(productoResult);
//      } else {
//        res.status(404).json("Producto no encontrado");
//      }
//    });
//};

//exports.getProductoDisponible = (req, res) => {
//  Producto.find({ disponible: true }).then((productoResult) => {
//    res.status(200).json(productoResult);
//  });
//};