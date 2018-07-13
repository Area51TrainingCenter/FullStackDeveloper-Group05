import { Request, Response, NextFunction } from "express"

const politicas = {
	autenticacion(req: Request, res: Response, next: NextFunction) {
		let usuarioAutenticado: boolean = false

		if (res.locals.usuario) usuarioAutenticado = true

		if (usuarioAutenticado) {
			return next()
		} else {
			res.status(401).send("Usuario no autenticado")
		}
		console.log("Este es el middleware de autenticación")
	},

	autorizacion(...permisos) {
		console.log(permisos)

		return (req: Request, res: Response, next: NextFunction) => {
			let usuarioAutorizado: boolean = false

			if (permisos.indexOf(res.locals.usuario.rol) > -1) usuarioAutorizado = true

			if (usuarioAutorizado) {
				return next()
				//res.send("Usuario Autorizado")
			} else {
				res.status(409).send("Usuario no autorizado")
			}
		}

	}

	/*autorizacion(req: Request, res: Response, next: NextFunction) {
		const usuarioAutorizado: boolean = true
		if (usuarioAutorizado) {
			return next()
			//res.send("Usuario Autorizado")
		} else {
			res.status(409).send("Usuario no autorizado")
		}
	}*/
}

export { politicas }