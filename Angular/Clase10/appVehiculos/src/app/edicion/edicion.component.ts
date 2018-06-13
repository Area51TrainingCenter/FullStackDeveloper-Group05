import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IVehiculo } from '../models/vehiculo.interface';
import { VehiculoService } from '../servicios/vehiculo.service';

interface CanDeactivateComponente {
	verificarDataNoSalvada: () => boolean
	grabar: () => void
}

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit, CanDeactivateComponente {
	id: number
	vehiculo: IVehiculo
	suscripcion: Subscription
	original: IVehiculo

	constructor(private rutaActiva: ActivatedRoute, private vehiculoService: VehiculoService, private ruteador: Router, private location: Location) { }

	ngOnInit() {
		/*this.id = +this.rutaActiva.snapshot.params.id
		this.vehiculo = this.vehiculoService.detallar(this.id)
		this.original = Object.assign({}, this.vehiculo)*/

		this.suscripcion = this.rutaActiva.params.subscribe(
			(parametros: Params) => {
				this.id = +parametros.id
				this.vehiculo = this.vehiculoService.detallar(this.id)
				this.original = Object.assign({}, this.vehiculo)
			}
		)
	}

	grabar() {
		this.vehiculoService.modificar(this.id, this.vehiculo)
		this.original = Object.assign({}, this.vehiculo)
		//this.ruteador.navigate(["listado"])
		//this.location.back()
	}

	ngOnDestroy() {
		this.suscripcion.unsubscribe()
	}

	verificarSinSalvar(): boolean {
		//let estado: boolean = false
		for (let propiedad in this.original) {
			if (this.original[propiedad] != this.vehiculo[propiedad]) {
				return true
			}
		}
		return false
	}

	verificarDataNoSalvada(): boolean {
		return this.verificarSinSalvar()
	}

}
