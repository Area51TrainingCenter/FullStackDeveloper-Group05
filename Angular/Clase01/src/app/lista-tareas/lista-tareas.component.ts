import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lista-tareas',
	templateUrl: './lista-tareas.component.html',
	styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

	// tareas: Array<string> = ["Tarea 1", "Tarea 2", "Tarea 3"]
	tareas: string[] = ["Tarea 1", "Tarea 2", "Tarea 3"]

	constructor() {
		for (let tarea of this.tareas) {
			console.log(tarea)
		}
	}

	ngOnInit() {
	}

}
