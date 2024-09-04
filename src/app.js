//app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path"); //Este módulo es parte de la API estándar de Node.js y proporciona utilidades para trabajar con rutas de archivos y directorios.
const app=express();

require("dotenv").config();

app.use(express.json());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, '..', 'public')));
//app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

/* INDEX ROUTER*/
//Esta configuración indica que cualquier ruta que comience con /api se manejará mediante indexRouter.
const indexRouter = require('./routes/indexRouter');
app.use("/api", indexRouter);

module.exports = app;