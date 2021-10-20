const express = require("express");
const router = express.Router();
//importar auth

const auth = require ("../middleware/auth");
const UserController = require("../controllers/users");


router.get("/:email",auth, UserController.getUser);

module.exports = router;
