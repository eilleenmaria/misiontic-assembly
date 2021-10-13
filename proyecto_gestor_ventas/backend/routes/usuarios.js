const express = require("express");
const router = express.Router();

const UsuarioController = require("../controllers/usuarios");

//lista los usuarios
router.get("", UsuarioController.getUsuario);
//crea los usuarios
router.post("", UsuarioController.addUsuario);
//busca los usuarios por id
router.get("/:id", UsuarioController.getUsuarioId);
//actualizar los usuarios por id
router.put("/:id", UsuarioController.updateUsuario);
//router.get("/rol", UsuarioController.getUsuarioVendedor);


module.exports = router;