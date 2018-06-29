import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private ruteador: Router, private autenticacionService: AutenticacionService) { }

	irA(ruta: string) {
		this.ruteador.navigate([ruta])
	}

	cerrarSesion() {
		this.autenticacionService.logout()
	}


}
