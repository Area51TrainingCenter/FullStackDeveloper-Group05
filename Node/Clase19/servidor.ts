// Importaciones
import { Application, Request, Response, NextFunction } from "express"
import express = require("express")
import { ruteador as IndexRutas } from "./rutas/index.rutas"
import { manejadores as ErroresManejadores } from "./manejadores/errores.manejador"
import { politicas as SeguridadPoliticas } from "./api/politicas/seguridad.politica"
import { servicio as TokensServicio } from "./api/servicios/tokens.servicio"


// Variables
const servidor: Application = express()

// Tokens
servidor.use("/auth", TokensServicio.validarToken)

// Rutas
servidor.use("/auth", SeguridadPoliticas.autenticacion, IndexRutas)

// Errores
servidor.use(ErroresManejadores.rutaNoEncontrada)
servidor.use(ErroresManejadores.errorGeneral)

// Ejecución del servidor
servidor.listen(4000, () => console.log("Servidor ejecutándose en el puerto 4000"))
