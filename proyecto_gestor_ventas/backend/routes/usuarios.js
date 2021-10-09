const express = require("express");
const router = express.Router();

const UsuarioController = require("../controllers/usuarios");

//trae los usuarios
router.get("", UsuarioController.getUsuario);
//crea los usuarios
router.post("", UsuarioController.addUsuario);
//busca los usuarios por id
router.get("/:id", UsuarioController.getUsuarioId);


module.exports = router;