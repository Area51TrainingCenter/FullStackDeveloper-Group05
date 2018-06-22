import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private ruteador: Router) { }

	irA(ruta: string) {
		this.ruteador.navigate([ruta])
	}

	cerrarSesion() {

	}


}
