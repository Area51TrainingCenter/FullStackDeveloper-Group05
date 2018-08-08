import multer = require("multer")
import uuid = require("uuid")
import jimp = require("jimp")
import { Request, Response, NextFunction } from "express"
import { IError } from "../interfaces/ierror.interface"

const subirImagen = () => {
	const opcionesMulter = {
		storage: multer.memoryStorage(),
		fileFilter(req, file, next) {
			const esFoto: boolean = file.mimetype.startsWith("image/")

			if (esFoto) {
				return next(null, true)
			} else {
				const errorImagen: IError = new Error("No es una imagen")
				errorImagen["status"] = 500
				next(errorImagen, false)
			}
		}
	}

	return multer(opcionesMulter).single("foto")
}

const grabarDisco = () => {
	return async (req: Request, res: Response, next: NextFunction) => {
		if (!req.file) return next()

		const extension: string = req.file.mimetype.split("/")[1]
		const nuevoNombre: string = uuid.v4()

		req.body.foto = `${nuevoNombre}.${extension}`

		const foto = await jimp.read(req.file.buffer)
		await foto.resize(300, jimp.AUTO)
		await foto.write(`./publico/uploads/fotos/${req.body.foto}`)

		next()
	}
}

export { subirImagen, grabarDisco }