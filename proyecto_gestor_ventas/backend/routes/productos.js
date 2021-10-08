//usar router de express

//importar express
const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/productos");

//trae los productos
router.get("", ProductController.getProducts);
//crea los productos
router.post("", ProductController.addProduct);
router.get("/disponibles", ProductController.getProductoDisponible);
router.get("/entire/:id", ProductController.getProductIdLazyLoading);
router.get("/:id", ProductController.getProductId);

module.exports = router;