const Usuario = require("../models/usuarios");

exports.getUsuario = (req, res) => {
  Usuario.find().then((postResult) => {
    res.status(200).json(postResult);
  })
};
//buscar usuario por id
exports.getUsuarioId = (req, res) => {
  Usuario.findById(req.params.id).then((usuarioResult) => {
    if (usuarioResult) {
      res.status(200).json(usuarioResult);
    } 
    else {
      res.status(404).json("Usuario no encontrado");
    }
  });
};
// crear usuario
exports.addUsuario = (req, res) => {
  const usuarioAdd = new Usuario({
    nombre: req.body.nombre,
    email: req.body.email,
    usuario: req.body.usuario,
    clave: req.body.clave,
    rol: req.body.rol,
    estado: req.body.estado,
  });

  usuarioAdd.save().then((createdUsuario) => {
    console.log(createdUsuario);
    res.status(201).json("Creado satisfactoriamente");
  });
};

