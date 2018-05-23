import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
	selector: 'app-activos',
	templateUrl: './activos.component.html',
	styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit {
	@Output("onSeleccionado") onSeleccionado = new EventEmitter<number>()

	@Input() indice: number

	activo: boolean = false

	constructor() { }

	ngOnInit() {
	}

	seleccionar() {
		this.activo = !this.activo
		console.log("seleccionado")
		this.onSeleccionado.emit(this.indice)

	}

}
