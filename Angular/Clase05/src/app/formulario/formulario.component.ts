import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iequipo } from '../iequipo';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
	@Output() onNuevoEquipo = new EventEmitter<Iequipo>()
	equipo: Iequipo = {}

	constructor() { }

	ngOnInit() {
	}

	grabar() {
		this.equipo.estado = "disponible"

		this.onNuevoEquipo.emit(this.equipo)
		this.equipo = {}
	}

}
