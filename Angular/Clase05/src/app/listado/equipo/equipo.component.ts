import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Iequipo, Ihistorial } from '../../iequipo';

@Component({
	selector: 'app-equipo',
	templateUrl: './equipo.component.html',
	styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
	@Input() equipo: Iequipo
	@Input() indice: number
	@Output() onMovimiento = new EventEmitter<any>()
	@ViewChild("persona") personaRef: ElementRef

	constructor() { }

	ngOnInit() {
	}

	registrarMovimiento(persona: string, tipoMovimiento: string) {
		const movimiento: Ihistorial = {}
		movimiento.persona = persona
		movimiento.movimiento = tipoMovimiento

		this.onMovimiento.emit({ movimiento, indice: this.indice })
		this.personaRef.nativeElement.value = ""
	}

}
