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

	grabar(tareaRecibida: ITarea) {
		this.tareas.push(tareaRecibida)
		//this.tareas.push(this.tarea)
		//this.tarea = {}
	}

	eliminar(tarea: ITarea) {
		const indice: number = this.tareas.indexOf(tarea)
		this.tareas.splice(indice, 1)
	}
}
