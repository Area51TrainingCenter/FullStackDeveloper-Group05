import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	correo: {
		type: String,
		unique: true,
		trim: true,
		required: true
	},
	contrasena: {
		type: String,
		trim: true,
		required: true
	},
	refreshToken: {
		type: String,
		required: true
	}
})

const Usuario = mongoose.model("Usuario", esquema)

export { Usuario }