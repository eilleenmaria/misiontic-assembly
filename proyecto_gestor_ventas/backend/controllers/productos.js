const Producto = require("../models/productos");

exports.getProducts =(req, res) =>{
    Producto.find().then((postResult){
        //me trae todos los productos postResult
        res.status(200).json(postResult);
    })
};

exports.addProducts = (req, res) =>{
    const productoAdd = new Producto({
        nombre: req.body.nombre,
        marca: req.body.marca,
        cilindraje: req.body.cilindraje,
        color: req.body.color,
        precio: req.body.precio,
        disponible: req.body.disponible,
    })

    productoAdd.save().then((createdProduct) =>{
        console.log(createdProduct);
        res.status(201).json("Creado con éxito");
    });
};

exports.getProductId = (req, res) =>{
    Producto.findById(req.params.id).then((productoResult) => {
        if(productoResult){
            res.status(200).json
        }
    })
}

//trae los productos disponibles
exports.getProductoDisponible = (req,res) => {
    Producto.find({disponible:true});
    res.status(200).json(productoResult);
}