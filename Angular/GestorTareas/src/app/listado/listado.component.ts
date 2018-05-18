import { Component, Input, OnInit } from '@angular/core';
import { ITarea } from '../modelos/tarea.interface';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	@Input() datos: ITarea[]

	constructor() { }

	ngOnInit() {
	}

	obtenerColorTarea(estado: string): string {
		switch (estado) {
			case "sin-asignar":
				return "red"
			case "asignada":
				return "gray"
			case "en-proceso":
				return "yellow"
			case "terminada":
				return "brown"
			case "cancelada":
				return "orange"
			default:
				return "white"
		}
	}

}
