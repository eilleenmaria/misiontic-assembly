const express = require("express");
const router = express.Router();

const VentaController = require("../controllers/ventas");

//lista todos las ventas
router.get("", VentaController.getVenta);
//crea las ventas
router.post("", VentaController.addVenta);
//busca los ventas por id
router.get("/:id", VentaController.getVentaId);
//Actualizar Venta
router.put("/:id", VentaController.editVenta);
//Remover Venta
router.delete("/:id", VentaController.deleteVenta);


module.exports = router;