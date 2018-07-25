import { Request, Response, NextFunction } from "express"
import { validarAccessToken } from "../servicios/tokens"

const autenticacion = (req: Request, res: Response, next: NextFunction) => {
	const autorizacion = req.headers["authorization"]

	if (autorizacion) {
		const accessToken = autorizacion.split(" ")[1]

		validarAccessToken(accessToken)
			.then(data => {
				res.locals.id = data.id
				return next()
			})
			.catch(error => {
				return res.status(error.estado).json(error)
			})

	} else {
		return res.status(409).json({ estado: 409, mensaje: "Usuario no logueado" })
	}
}

export { autenticacion }