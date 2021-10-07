const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/productos");

router.get("", ProductController.getProducts);
router.post("", ProductController.addProduct);
router.get("/disponibles", ProductController.getProductoDisponible);
router.get("/:id", ProductController.getProductId);

module.exports = router;