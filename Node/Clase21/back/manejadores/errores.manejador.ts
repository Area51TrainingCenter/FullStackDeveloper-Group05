import { Request, Response, NextFunction } from "express"

interface IError extends Error {
	status?: number
}

const manejador = {
	cacheo(ftn: (req: Request, res: Response) => Promise<any>) {
		return (req: Request, res: Response, next: NextFunction) => {
			return ftn(req, res).catch((error: IError) => {
				error.status = 500
				next(error)
			})
		}
	},
	noEncontrada(req: Request, res: Response, next: NextFunction) {
		const error: IError = new Error("Ruta no encontrada")
		error.status = 404
		next(error)
	},
	errorGeneral(error: IError, req: Request, res: Response, next: NextFunction) {
		if (process.env.ENVIRONMENT == "development") {
			res
				.status(error.status)
				.json({
					estado: error.status,
					mensaje: error.message,
					pila: error.stack
				})
		} else {
			res
				.status(error.status)
				.json({
					estado: error.status,
					mensaje: error.message,
					pila: ""
				})
		}
	}
}

export { manejador }