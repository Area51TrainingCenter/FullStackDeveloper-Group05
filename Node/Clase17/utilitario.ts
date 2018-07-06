const saludar = nombre => `Hola ${nombre}`

const datosUsuario = {
	nombre: "Adriana",
	apellido: "Tabori"
}

const logueado: boolean = true

interface IUsuario {
	nombre: string
	correo: string
	contrasena: string
}

class HoraActual {
	constructor() { }

	devolverHora() { }
}

export { saludar, datosUsuario, logueado, HoraActual, IUsuario };

