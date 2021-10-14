//AQUI VA TODA LA LÓGICA

//importar el modelo
const Producto = require("../models/productos");

//listar productos
exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
    res.status(200).json(productoResult);
  })
};

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
    res.status(500).json({err: error});
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
//remover producto
exports.deleteProducto = (req, res) => {
  Producto.findByIdAndRemove(req.params.id).then((productoRemove) =>{
    if (productoRemove) {
      res.status(200).json(productoRemove);
    } 
    else {
      res.status(404).json("Producto  no removido");
    }
  })
  };
//actualizar producto
exports.updateProducto = (req, res) => {

  const updateObjectProd = {
      $set: {}

  };

  if(req.body.title) {

      updateObjectProd['$set']['title'] = req.body.title;

  }
  if(req.body.marca) {

    updateObjectProd['$set']['marca'] = req.body.marca;

}
if(req.body.modelo) {

  updateObjectProd['$set']['modelo'] = req.body.modelo;

}
if(req.body.categoria) {

  updateObjectProd['$set']['categoria'] = req.body.categoria;

}
if(req.body.disponible) {

  updateObjectProd['$set']['disponible'] = req.body.disponible;

}
if(req.body.valorUnitario) {

  updateObjectProd['$set']['valorUnitario'] = req.body.valorUnitario;

}
  if(req.body.cilindraje) {

 updateObjectProd['$set']['cilindraje'] = req.body.cilindraje;

  }
  Producto.updateOne({id: req.body.id}, updateObjectProd).then((productoUpdate) => {
    if (productoUpdate) {
      res.status(200).json(productoUpdate);
    } 
    else {
      res.status(404).json("Producto  no encontrado");
    }

  })
}


//eliminar productos por id
// exports.deleteProduct = (req, res) => {
//   Producto.deleteOne(req.params.id).then((productoResult) => {
//     if (productoResult) {
//       res.status(200).json(productoResult);
//     } 
//     else {
//       res.status(404).json("Producto no eliminado");
//     }
//   });
// };
