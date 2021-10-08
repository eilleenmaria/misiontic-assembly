const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/usuarios");

//trae los productos
router.get("", UsuarioController.getUsuario);
//crea los productos
router.post("", UsuarioController.addUsuario);

//router.get("/disponibles", ProductController.getProductoDisponible);
//router.get("/entire/:id", ProductController.getProductIdLazyLoading);
//router.get("/:id", ProductController.getProductId);

module.exports = router;