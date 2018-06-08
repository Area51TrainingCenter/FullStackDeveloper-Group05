import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IVehiculo } from '../models/vehiculo.interface';
import { VehiculoService } from '../servicios/vehiculo.service';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
	id: number
	vehiculo: IVehiculo
	suscripcion: Subscription

	constructor(private rutaActiva: ActivatedRoute, private vehiculoService: VehiculoService, private ruteador: Router, private location: Location) { }

	ngOnInit() {
		this.id = +this.rutaActiva.snapshot.params.id
		this.vehiculo = this.vehiculoService.detallar(this.id)

		this.suscripcion = this.rutaActiva.params.subscribe(
			(parametros: Params) => {
				this.id = +parametros.id
				this.vehiculo = this.vehiculoService.detallar(this.id)
			}
		)
	}

	grabar() {
		this.vehiculoService.modificar(this.id, this.vehiculo)
		//this.ruteador.navigate(["listado"])
		this.location.back()
	}

}
