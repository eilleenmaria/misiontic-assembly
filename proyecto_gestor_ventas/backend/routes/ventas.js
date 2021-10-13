const express = require("express");
const router = express.Router();

const VentaController = require("../controllers/ventas");

//trae los usuarios
router.get("", VentaController.getVenta);
//crea los usuarios
router.post("", VentaController.addVenta);
//busca los usuarios por id
router.get("/:id", VentaController.getVentaId);



module.exports = router;