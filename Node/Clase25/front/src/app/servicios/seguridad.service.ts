import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IUsuario } from '../modelos/usuario.model';
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class SeguridadService {

	urlApiRest: string
	usuarioLogueado: IUsuario

	onCambioEstado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

	onErrorLogueo: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

	constructor(private http: HttpClient, private ruteador: Router) {
		this.urlApiRest = environment.apiRest
	}

	login(usuario: IUsuario) {
		this.http.post(`${this.urlApiRest}/usuario/login`, usuario)
			.subscribe(
				(data: IUsuario) => {
					localStorage.setItem("usuarioLogueado", JSON.stringify(data))
					this.usuarioLogueado = data
					this.onCambioEstado.next(true)
					this.ruteador.navigate(["/cantante"])
				},
				error => {
					console.log(error)
					this.onErrorLogueo.next(false)
				}
			)
	}

	logout() {
		localStorage.clear()
		this.usuarioLogueado = undefined
		this.ruteador.navigate([""])
		this.onCambioEstado.next(false)
	}

	estaLogueado(): boolean {
		return localStorage.getItem("usuarioLogueado") ? true : false
	}

	obtenerDatoUsuario(campo: string): string {
		const usuario: IUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))

		return usuario[campo]
	}


}
