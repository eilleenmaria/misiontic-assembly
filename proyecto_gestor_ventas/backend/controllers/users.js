const User = require("../models/user");

//listar productos
exports.getUser = (req, res) => {
    const email = req.params.email;
  User.findOne({email: email}).then((user) => {
      if (user){
          if (user.activo) {
            res.status(200).json("usuario activo");
          } else{
            res.status(500).json("usuario inactivo");
          }
      } else {
          const nemUser = new User({
            email: userData.email,
            nombre: userData.name,
            activo: false,
          });
          newUser.save().then((user) => {
            res.status(200).json("usuario creado");
          });
      }
    
  })
};


