import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lista',
	templateUrl: './lista.component.html',
	styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
	mostrar: boolean = false
	veces: Array<number> = []

	constructor() { }

	ngOnInit() {
	}

	mostrarDatos() {
		this.mostrar = !this.mostrar
		this.veces.push(this.veces.length + 1)
	}

	obtenerColor(vez) {
		if (vez >= 7) {
			if (vez % 2 == 0) {
				return "yellow"
			} else {
				return "orange"
			}
		}
		return "white"
	}

}
