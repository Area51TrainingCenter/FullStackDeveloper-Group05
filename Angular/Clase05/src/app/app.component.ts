import { Component } from '@angular/core';
import { Iequipo, Ihistorial } from './iequipo';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	equipos: Iequipo[] = []
	historial: Ihistorial[]

	agregarEquipo(equipo: Iequipo): void {
		this.equipos.push(equipo)
	}

	agregarMovimiento(dato: any) {
		this.equipos[dato.indice].historial = this.equipos[dato.indice].historial ? this.equipos[dato.indice].historial : []

		this.equipos[dato.indice].historial.push(dato.movimiento)
	}

	seleccionarEquipo(indice: number) {
		this.historial = this.equipos[indice].historial
	}
}
