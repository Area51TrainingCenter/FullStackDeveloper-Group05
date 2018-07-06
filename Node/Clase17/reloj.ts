import { EventEmitter } from "events";

export class Reloj extends EventEmitter {
	constructor() {
		super()
	}

	iniciar() {
		setInterval(() => {
			const fecha = new Date()
			console.log(fecha)
			this.emit("hora", fecha)
		}, 1000)
	}
}
