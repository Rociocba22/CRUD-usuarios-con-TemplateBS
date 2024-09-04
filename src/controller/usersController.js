//user controller
const { getAllUsersService, createUserService, getUserByIdService, updateUserService, deleteUserService } = require("../services/userServices");

const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// const { createUserService } = require("../services/userServices");

const createUserController = async (req, res) => {
    try {
        const userData = req.body;
        //console.log(userData)
        const result = await createUserService(userData);

        res.status(200).json({ message: "Usuario creado con éxito", result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getUserByIdController = async (req, res) => {
    const userId = req.params.id;

    try {
        const result = await getUserByIdService(userId);
        if (result.length === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario encontrado con éxito", result });
    } catch (error) {
        res.status(500).json({ message: "Usuario no encontrado", error });
    }
}

const updateUserController = async (req, res) => {
    const userId = req.params.id;
    const dataUser = req.body;

    try {
        const result = await updateUserService(dataUser, userId);

        res.status(200).json({ message: "Usuario actualizado con éxito", result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUserController = async (req, res) => {
    const userId = req.params.id;
    try {
        const result = await deleteUserService(userId);
        res.status(200).json({ message: result.message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllUsersController,
    createUserController,
    getUserByIdController,
    updateUserController,
    deleteUserController
}