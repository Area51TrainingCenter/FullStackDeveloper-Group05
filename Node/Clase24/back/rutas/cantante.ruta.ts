import express = require("express")
import { controlador } from "../api/controladores/cantante.controlador"
import { manejador } from "../manejadores/errores.manejador"
import { subirImagen, grabarDisco } from "../manejadores/imagenes.manejador"

import { Request, Response, NextFunction } from "express"

const ruteador = express.Router()

ruteador.get("/:pagina/:campo/:direccion", manejador.cacheo(controlador.listarPaginado))
ruteador.get("/", manejador.cacheo(controlador.listar))
ruteador.post("/", subirImagen(), grabarDisco(), manejador.cacheo(controlador.insertar))
ruteador.delete("/:id", manejador.cacheo(controlador.eliminar))

export { ruteador }