//userServices.JS
const DBConnection = require('../db/db');

const getAllUsersService = async () => {

    const db = DBConnection();
    const sql = 'SELECT * FROM users';

    return new Promise((resolve, reject) => {
        db.query(sql, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    });
}

const createUserService = async (dataUser) => {
    const db = DBConnection();
    const sql = 'INSERT INTO users (name, lastName, address, mail, password) VALUES (?, ?, ?, ?, ?)';

    return new Promise((resolve, reject) => {
        db.query(sql, [dataUser.name, dataUser.lastName, dataUser.address, dataUser.mail, dataUser.password], (error, result) => {
            if (error) {
                reject(error);
            } else {
                console.log(result);
                resolve(result);
            }
        });
    });
}

//FUNCION PARA SELECCIONAR USUARIO POR ID
const getUserByIdService = async (userId) => {
    const db = DBConnection();
    const sql = 'SELECT * FROM users WHERE id = ?';

    return new Promise((resolve, reject) => {
        db.query(sql, [userId], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

const updateUserService = async (dataUser, userId) => {
    const db = DBConnection();
    const sql = 'UPDATE users SET name=?, lastName=?, address=?, mail=?, password=? WHERE id=?';

    return new Promise((resolve, reject) => {
        db.query(sql, [dataUser.name, dataUser.lastName, dataUser.address, dataUser.mail, dataUser.password, userId], (error, result) => {
            // el id se pasa como último parámetro en el array, correspondiente al WHERE id=? de la consulta SQL.
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    })
}

const deleteUserService = async (userId) => {
    const db = DBConnection();
    const sql = "DELETE FROM users WHERE id=?";
    return new Promise((resolve, reject) => {
        db.query(sql, [userId], (error, result) => {
            if (error) {
                reject(new Error("Error al eliminar usuario desde el service"));
            } else if (result.affectedRows === 0) {
                reject(new Error("Usuario no encontrado, no se ha podido eliminar"));
            } else {
                resolve({ message: "Usuario eliminado", status: 200 });
            }
        });
    });
};

module.exports = { getAllUsersService, createUserService, getUserByIdService, updateUserService, deleteUserService };