import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVehiculo } from '../models/vehiculo.interface';
import { VehiculoService } from '../servicios/vehiculo.service';

@Component({
	selector: 'app-nuevo',
	templateUrl: './nuevo.component.html',
	styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
	vehiculo: IVehiculo = {}
	constructor(private vehiculoService: VehiculoService, private ruteador: Router) { }

	ngOnInit() {
	}

	grabar() {
		this.vehiculoService.agregar(this.vehiculo)
		this.ruteador.navigate(["vehiculos"])
	}

}
