import express = require("express")
import { controlador } from "../api/controladores/cantante.controlador"
import { manejador } from "../manejadores/errores.manejador"
import { subirImagen, grabarDisco } from "../manejadores/imagenes.manejador"

const ruteador = express.Router()

ruteador.get("/", manejador.cacheo(controlador.listar))
ruteador.post("/", subirImagen(), grabarDisco(), manejador.cacheo(controlador.insertar))

export { ruteador }