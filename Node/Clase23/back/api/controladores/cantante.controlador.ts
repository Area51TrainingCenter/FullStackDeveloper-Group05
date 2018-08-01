import { Request, Response, NextFunction } from "express"
import { Cantante } from "../modelos/cantante.modelo"

const controlador = {
	async listar(req: Request, res: Response) {
		const cantantes = await Cantante.find().sort({ apellido: 1, nombre: 1 })

		res.json({
			estado: 200,
			mensaje: "lista de cantantes",
			resultado: cantantes
		})
	},
	async insertar(req: Request, res: Response) {
		const cantante = new Cantante(req.body)

		await cantante.save()

		res.json({ estado: 200, mensaje: "Cantante insertado" })
		/*
		const cantante: any = new Cantante()
		cantante.nombre = req.body.nombre
		cantante.apellido = req.body.apellido
		cantante.foto = req.body.foto

		const cantante = new Cantante({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			foto: req.body.foto
		})
		*/
	}
}

export { controlador }