//db.js
const mysql = require("mysql2");

const DBConnection = () => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "tabla_usuarios"
    });

    connection.connect((error) => {
        if (error) throw new Error("Error al conectar con la db 💢");
        //tecla Win + . (punto)
        console.log("connected to MySql server");
    });
    return connection;
}

module.exports = DBConnection;