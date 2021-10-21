const express = require("express");
const router = express.Router();
//importar auth

const auth = require ("../middleware/auth");
const UserController = require("../controllers/users");


router.get("",auth, UserController.GetUser);

module.exports = router;
