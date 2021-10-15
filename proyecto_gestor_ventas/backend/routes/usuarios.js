const express = require("express");
const router = express.Router();

const UsuarioController = require("../controllers/usuarios");

//lista los usuarios
router.get("", UsuarioController.getUsuario);
//crea los usuarios
router.post("", UsuarioController.addUsuario);
router.get("/rol", UsuarioController.getUsuarioVendedor);
//busca los usuarios por id
router.get("/:id", UsuarioController.getUsuarioId);
//actualizar los usuarios por id
router.put("/:id", UsuarioController.updateUsuario);



module.exports = router;