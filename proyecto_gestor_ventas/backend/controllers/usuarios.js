const Usuario = require("../models/usuarios");

exports.getUsuario = (req, res) => {
  Usuario.find().then((postResult) => {
    res.status(200).json(postResult);
  })
};

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
    console.log(createUsuario);
    res.status(201).json("Creado satisfactoriamente");
  });
};

