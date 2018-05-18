import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ITarea } from '../modelos/tarea.interface';

@Component({
	selector: 'app-tarea',
	templateUrl: './tarea.component.html',
	styleUrls: ['./tarea.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class TareaComponent implements OnInit {

	@Input() tareaItem: ITarea
	@Output("onEliminarTarea") onEliminar = new EventEmitter<ITarea>()

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

	eliminar(tarea: ITarea) {
		this.onEliminar.emit(tarea)
	}

}
