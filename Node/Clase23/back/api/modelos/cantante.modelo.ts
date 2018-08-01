import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nombre: String,
	apellido: String,
	foto: String
})

const Cantante = mongoose.model("Cantante", esquema)

export { Cantante }