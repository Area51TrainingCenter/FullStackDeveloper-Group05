const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const esquema = new mongoose.Schema({
	nombre: String,
	apellido: String,
	foto: String
})

esquema.statics.listadoPaginado = function (pagina: number, campo: string, direccion: number) {
	const skip: number = (pagina) * 15
	const limit: number = 15

	const ordenacion = {}
	ordenacion[campo] = direccion

	console.log(ordenacion)

	return this.aggregate(
		[
			{ $sort: ordenacion },
			{ $skip: skip },
			{ $limit: limit }
		]
	)
}

const Cantante = mongoose.model("Cantante", esquema)

export default Cantante 