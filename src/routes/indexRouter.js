//indexRouter.js

const express =  require("express");
const router = express.Router();
const path = require("path");

//importa el módulo createUser.js que maneja las solic HTTP de mostrar usuarios
const usersRouter = require("./usersRouter");
router.use("/users", usersRouter);

module.exports = router;