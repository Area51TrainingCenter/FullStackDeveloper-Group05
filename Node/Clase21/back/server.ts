require('ts-node').register();

// Importaciones
import { Application } from "express"
import express = require("express")
import dotenv = require("dotenv")
import { ruteador as usuarioRuta } from "./rutas/usuario.ruta"
import mongoose = require("mongoose")
import bodyParser = require("body-parser")
import { manejador as errores } from "./manejadores/errores.manejador"
import cors = require("cors")



dotenv.config({ path: "./variables.env" })

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })
mongoose.connection.on("error", () => console.log("No se conectó"))
mongoose.connection.on("connected", () => console.log("Conectado a Mongo"))

// Variables

//require("dotenv").config({path: "./variables.env"})

const app: Application = express()
app.set("PUERTO", process.env.PORT)

// Middlewares
app.use(cors())
app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: true }))

// Rutas
app.use("/usuario", usuarioRuta)

// Errores
app.use(errores.noEncontrada)
app.use(errores.errorGeneral)

// Servidor
app.listen(app.get("PUERTO"), () => console.log(`Servidor ejecutándose en el puerto ${app.get("PUERTO")}`))