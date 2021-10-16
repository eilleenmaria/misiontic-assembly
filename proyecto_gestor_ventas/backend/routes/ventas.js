const express = require("express");
const router = express.Router();

const VentaController = require("../controllers/ventas");

//trae los usuarios
router.get("", VentaController.getVenta);
//crea los usuarios
router.post("", VentaController.addVenta);
//busca los usuarios por id
router.get("/:id", VentaController.getVentaId);
//busca los usuarios por id
router.put("/:id", VentaController.editVenta);
//busca los usuarios por id
router.delete("/:id", VentaController.deleteVenta);



module.exports = router;