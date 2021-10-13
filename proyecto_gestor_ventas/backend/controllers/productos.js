//AQUI VA TODA LA LÓGICA

//importar el modelo
const Producto = require("../models/productos");

//listar productos
exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
    res.status(200).json(productoResult);
  })
};

//exports.getProducts = (req, res) => {
//  Producto.find()
//    .populate("categoria")
//    .then((productoResult) => {
//      res.status(200).json(productoResult);
//    });
//};

//crear productos
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
    res.status(201).json("Creado satisfactoriamente");
  }).catch((error) => {
    res.satus(500).json({err: error});
  });
};

//listar productos por id
exports.getProductId = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } 
    else {
      res.status(404).json("Producto no encontrado");
    }
  });
};

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

//listar productos disponibles
exports.getProductoDisponible = (req, res) => {
  Producto.find({ disponible: true }).then((productoResult) => {
    res.status(200).json(productoResult);
  });
};


//eliminar productos por id
exports.deleteProduct = (req, res) => {
  Producto.deleteOne(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } 
    else {
      res.status(404).json("Producto no eliminado");
    }
  });
};
