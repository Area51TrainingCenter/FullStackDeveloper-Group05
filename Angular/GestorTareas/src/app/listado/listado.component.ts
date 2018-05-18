import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITarea } from '../modelos/tarea.interface';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	@Input("datos") tareas: ITarea[]
	@Output() onTareaEliminada = new EventEmitter<ITarea>()

	constructor() { }

	ngOnInit() {
	}

	eliminar(tarea: ITarea) {
		this.onTareaEliminada.emit(tarea)
	}
}
