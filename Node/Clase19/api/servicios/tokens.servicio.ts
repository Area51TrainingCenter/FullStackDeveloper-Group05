import { Request, Response, NextFunction } from "express"

const servicio = {
	validarToken(req: Request, res: Response, next: NextFunction) {
		const valido: boolean = true

		if (valido) {
			const _id: string = "393848ab39cde78"
			const rol: string = "auditor"

			res.locals.usuario = { _id, rol }

			next()
		} else {
			res.status(401).json({ mensaje: "Token inválido", estado: 401 })
		}
	}
}

export { servicio }