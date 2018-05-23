import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contenedor',
	templateUrl: './contenedor.component.html',
	styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

	elementos: Array<string> = []

	constructor() { }

	ngOnInit() {
	}

	agregar() {
		this.elementos.push("")
	}

	quitar() {
		this.elementos.pop()
	}

	cambiarPrimerElemento() {
		this.elementos[0] = "fullstack"
	}

}
