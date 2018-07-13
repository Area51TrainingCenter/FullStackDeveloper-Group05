import express = require("express")
import { controlador } from "../api/controladores/index.controlador"
import { politicas as SeguridadPoliticas } from "../api/politicas/seguridad.politica"

const ruteador = express.Router()

ruteador.get("/login", SeguridadPoliticas.autorizacion("administrador", "operador"), controlador.inicio)

export { ruteador }