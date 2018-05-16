import { Component, OnInit } from '@angular/core';

class Tarea {
	titulo: string
	fecha: Date

	constructor(titulo: string, fecha: Date) {
		this.titulo = titulo
		this.fecha = fecha
	}
}

interface ITarea {
	titulo: string
	fecha?: Date
}

@Component({
	selector: 'app-lista-tareas',
	templateUrl: './lista-tareas.component.html',
	styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
	//tareas: Array<{ titulo: string, fecha: Date }> = []
	//tareas: Array<Tarea> = []
	tareas: Array<ITarea> = []

	constructor() {
		this.tareas.push({ titulo: "Tarea1" })
		this.tareas.push({ titulo: "Tarea2", fecha: new Date() })
		this.tareas.push({ titulo: "Tarea3", fecha: new Date() })

		/*this.tareas.push(new Tarea("Tarea 1", new Date()))
		this.tareas.push(new Tarea("Tarea 2", new Date()))
		this.tareas.push(new Tarea("Tarea 3", new Date()))*/

		/*this.tareas.push({ titulo: "Tarea 1", fecha: new Date() })
		this.tareas.push({ titulo: "Tarea 2", fecha: new Date() })
		this.tareas.push({ titulo: "Tarea 3", fecha: new Date() })
		this.tareas.push({ titulo: "Tarea 4", fecha: new Date() })*/
	}

	ngOnInit() {
	}

}
