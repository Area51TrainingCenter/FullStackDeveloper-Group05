import jwt = require("jwt-simple")
import moment = require("moment")
import randToken = require("rand-token")

const crearAccessToken = (id: string) => {
	const tiempoVida: number = +process.env.TIMELIFE_TOKEN

	const payload = {
		id,
		iat: moment().unix(),
		exp: moment().add(tiempoVida, "seconds").unix()
	}

	const accessToken = jwt.encode(payload, process.env.KEYWORD)

	return accessToken
}

const crearRefreshToken = () => {
	const refreshToken = randToken.uid(256)

	return refreshToken
}

const validarAccessToken = (accessToken: string): Promise<any> => {

	return new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(accessToken, process.env.KEYWORD)
			resolve(payload)
		} catch (error) {
			if (error.message.toLowerCase() == "token expired") {
				reject({
					status: 401,
					message: "El token expiró"
				})
			} else {
				reject({
					status: 501,
					message: "El token es inválido"
				})
			}
		}
	})
}

export { crearAccessToken, crearRefreshToken, validarAccessToken }