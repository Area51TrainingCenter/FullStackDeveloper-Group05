import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iequipo } from '../iequipo';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	@Input() equipos: Array<Iequipo>
	@Output() onMovimiento = new EventEmitter<any>()
	@Output() onMostrarHistorial = new EventEmitter<number>()

	constructor() { }

	ngOnInit() {
	}

	generarMovimiento(dato: any) {
		this.onMovimiento.emit(dato)
	}

	mostrarHistorial(indice: number) {
		this.onMostrarHistorial.emit(indice)
	}

}
