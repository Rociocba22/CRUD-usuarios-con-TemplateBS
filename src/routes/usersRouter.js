//usersRouter.js
const express = require("express");
const router = express.Router();

//IMPORTO CONTROLADOR
const { getAllUsersController, createUserController, getUserByIdController, updateUserController, deleteUserController } = require("../controller/usersController");

router.get("/showUsers", getAllUsersController);
router.get("/:id", getUserByIdController);
router.post("/createUser", createUserController);
router.put("/updateUser/:id", updateUserController);
router.delete("/deleteUser/:id", deleteUserController);

module.exports = router;