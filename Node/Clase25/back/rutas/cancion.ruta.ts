import express = require("express");
import { controlador } from "../api/controladores/cancion.controlador";
import { manejador } from "../manejadores/errores.manejador";

const ruteador = express.Router();

ruteador.get("/:id", manejador.cacheo(controlador.listar));
ruteador.get("/detalle/:id", manejador.cacheo(controlador.detallar));
ruteador.post("/", manejador.cacheo(controlador.insertar));
ruteador.put("/:id", manejador.cacheo(controlador.actualizar));
ruteador.delete("/:id", manejador.cacheo(controlador.eliminar));

export { ruteador };
