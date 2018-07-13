import { Request, Response, NextFunction } from "express"

interface IError extends Error {
	status?: number
}

const manejadores = {
	errorGeneral(error: IError, req: Request, res: Response, next: NextFunction) {
		const entorno: string = "produccion"

		if (entorno == "desarrollo") {
			res
				.status(error.status)
				.json({
					nombre: error.name,
					mensaje: error.message,
					estado: error.status,
					pila: error.stack
				})
		}

		if (entorno == "produccion") {
			res
				.status(error.status)
				.json({
					nombre: error.name,
					mensaje: error.message,
					estado: error.status
				})
		}
	},
	rutaNoEncontrada(req: Request, res: Response, next: NextFunction) {
		const error: IError = new Error("Ruta no encontrada")
		error.status = 404

		next(error)
		// res.status(404).send("ruta no encontrada")
	}
}

export { manejadores }