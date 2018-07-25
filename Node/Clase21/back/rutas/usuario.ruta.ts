import express = require("express")
import { controlador } from "../api/controladores/usuario.controlador"
import { manejador as errores } from "../manejadores/errores.manejador"

const ruteador = express.Router()

ruteador.post("/", errores.cacheo(controlador.insertar))
ruteador.put("/:id", errores.cacheo(controlador.actualizar))
ruteador.get("/:id", errores.cacheo(controlador.detallar))
ruteador.get("/", errores.cacheo(controlador.listar))
ruteador.delete("/:id", errores.cacheo(controlador.eliminar))

ruteador.post("/login", errores.cacheo(controlador.login))

export { ruteador }