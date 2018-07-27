import { Request, Response } from "express";
import { Usuario } from "../modelos/usuario.modelo";
import { crearAccessToken, crearRefreshToken } from "../servicios/tokens";

const controlador = {
	async insertar(req: Request, res: Response) {
		const datos = req.body
		datos.refreshToken = crearRefreshToken()

		const usuario = new Usuario(datos)
		await usuario.save()

		res.json({ estado: 200, mensaje: "usuario grabado" })
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
	},
	async login(req: Request, res: Response) {
		const datos = req.body

		const usuario: any = await Usuario.findOne(datos)

		if (usuario) {
			const accessToken = crearAccessToken(usuario._id)
			const refreshToken = usuario.refreshToken

			res
				.status(200)
				.json({ accessToken, refreshToken })
		} else {
			res
				.status(404)
				.json({ estado: 404, mensaje: "Usuario no existe" })
		}
	},
	async nuevoAccessToken(req: Request, res: Response) {
		const refreshToken = req.body.refreshToken

		const usuario = await Usuario.findOne({ refreshToken })

		if (usuario) {
			const accessToken = crearAccessToken(usuario._id)

			return res.status(200).json({ accessToken })
		} else {
			return res.status(404).json({ estado: 404, mensaje: "Usuario no encontrado" })
		}
	}
}

export { controlador };

