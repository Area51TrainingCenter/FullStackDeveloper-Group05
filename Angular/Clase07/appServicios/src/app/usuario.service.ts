import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	activos: Array<string> = ["Sergio", "Carmen", "Javier"]
	inactivos: Array<string> = ["Marlene", "Carlos", "María José"]

	constructor() { }

	cambiarAInactivo(ind) {
		const elemento = this.activos.splice(ind, 1)[0]
		this.inactivos.push(elemento)
	}

	cambiarAActivo(ind) {
		const elemento = this.inactivos.splice(ind, 1)[0]
		this.activos.push(elemento)
	}
}
