import { Component } from '@angular/core';
import { SeguridadService } from './servicios/seguridad.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	logueado: boolean = false

	constructor(private seguridadService: SeguridadService) {
		this.logueado = this.seguridadService.estaLogueado()

		this.seguridadService.onCambioEstado
			.subscribe(
				(estado: boolean) => this.logueado = estado
			)
	}

	logout() {
		this.seguridadService.logout()
	}

}
