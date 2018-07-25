import { Request, Response } from "express"
import { Usuario } from "../modelos/usuario.modelo"

const controlador = {
	async insertar(req: Request, res: Response) {
		/*const correo: string = req.body.correo  
		const contrasena: string = req.body.contrasena*/

		const datos = req.body
		const usuario = new Usuario(datos)

		await usuario.save()

		res.json({ estado: 200, mensaje: "usuario grabado" })

		/*usuario.save()
			.then(() => {
				console.log("usuario grabado")
				res.json({ estado: 200, mensaje: "usuario grabado" })
			})
			.catch(error => {
				console.log(error)
				//console.log("ocurrió un error")
				res.status(500).json({ estado: 500, mensaje: "ocurrió un error" })
			})*/

		//.then(()=>{}, ()=>{})
		// {correo: "xxxx", contrasena: "kdkdkd"}
	},
	async listar(req: Request, res: Response) {
		const usuarios = await Usuario.find()

		res.json({ estado: 200, resultados: usuarios })
	},
	async detallar(req: Request, res: Response) {
		const _id = req.params.id

		const usuario = await Usuario.findOne({ _id })

		res.json({ estado: 200, resultados: usuario })
	},
	async eliminar(req: Request, res: Response) {
		const _id = req.params.id

		await Usuario.findOneAndRemove({ _id })

		res.json({ estado: 200 })
	},
	async actualizar(req: Request, res: Response) {
		const _id = req.params.id
		const datos = req.body

		await Usuario.findOneAndUpdate({ _id }, datos)

		res.json({ estado: 200 })
	}
}

export { controlador }
