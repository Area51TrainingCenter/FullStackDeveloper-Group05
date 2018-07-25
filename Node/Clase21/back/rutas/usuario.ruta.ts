import express = require("express")
import { controlador } from "../api/controladores/usuario.controlador";
import { manejador as errores } from "../manejadores/errores.manejador";

import { autenticacion } from "../api/politicas/autenticacion.politica"

const ruteador = express.Router()

ruteador.post("/login", errores.cacheo(controlador.login))
ruteador.post("/nuevo-access-token", errores.cacheo(controlador.nuevoAccessToken))
ruteador.post("/", errores.cacheo(controlador.insertar))
ruteador.put("/:id", errores.cacheo(controlador.actualizar))
ruteador.get("/:id", errores.cacheo(controlador.detallar))
ruteador.get("/", autenticacion, errores.cacheo(controlador.listar))
ruteador.delete("/:id", errores.cacheo(controlador.eliminar))

export { ruteador };