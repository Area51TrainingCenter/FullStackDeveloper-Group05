import express = require("express")
import { controlador } from "../api/controladores/cantante.controlador"
import { manejador } from "../manejadores/errores.manejador"
import { subirImagen, grabarDisco } from "../manejadores/imagenes.manejador"

import { Request, Response, NextFunction } from "express"

const ruteador = express.Router()

ruteador.get("/", manejador.cacheo(controlador.listar))
ruteador.post("/", (req: Request, res: Response, next: NextFunction) => {
	console.log(req.body)
	next()
}, subirImagen(), grabarDisco(), manejador.cacheo(controlador.insertar))

export { ruteador }