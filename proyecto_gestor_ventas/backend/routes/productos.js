//usar router de express

//importar express
const express = require("express");
const router = express.Router();
//importar auth

const auth = require ("../middleware/auth");
const ProductController = require("../controllers/productos");

//lista todos los productos
router.get("", ProductController.getProducts);
//crea los productos
router.post("",auth, ProductController.addProduct);
//lista los productos disponibles
router.get("/disponibles", ProductController.getProductoDisponible);
//remover producto
router.delete("/:id",auth, ProductController.deleteProducto);
//actualizar producto
router.put("/:id",auth, ProductController.editProduct);
//buscar producto por id
router.get("/:id", ProductController.getProductId);


//router.get("/entire/:id", ProductController.getProductIdLazyLoading);

module.exports = router;