import { Request, Response } from "express"

const controlador = {
	inicio(req: Request, res: Response) {
		res
			.status(200)
			.json(res.locals.usuario)
		//.send("Ok")
	}
}

export { controlador }