import { Component } from '@angular/core';
import { ITarea } from './modelos/tarea.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	tareas: ITarea[] = []
	tarea: ITarea = {}

	grabar() {
		this.tareas.push(this.tarea)
		this.tarea = {}
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
