//usar router de express

//importar express
const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/productos");

//lista todos los productos
router.get("", ProductController.getProducts);
//crea los productos
router.post("", ProductController.addProduct);
//lista los productos disponibles
router.get("/disponibles", ProductController.getProductoDisponible);
//lista los productos por id
router.get("/:id", ProductController.getProductId);

//router.get("/entire/:id", ProductController.getProductIdLazyLoading);

module.exports = router;