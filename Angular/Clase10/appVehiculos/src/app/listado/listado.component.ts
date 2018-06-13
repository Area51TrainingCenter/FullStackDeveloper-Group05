import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IVehiculo, tipoVehiculo } from '../models/vehiculo.interface';
import { VehiculoService } from '../servicios/vehiculo.service';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	listadoVehiculos: IVehiculo[]
	suscripcion: Subscription
	constructor(private vehiculoService: VehiculoService) { }

	ngOnInit() {
		this.listar()
		this.suscripcion = this.vehiculoService.onCambioLista
			.subscribe(
				(datos: any) => {
					//this.listar()
					if (datos.id != undefined && datos.vehiculo) {
						this.listadoVehiculos[datos.id] = datos.vehiculo
					} else if (!datos.id) {
						this.listadoVehiculos.push(datos.vehiculo)
					} else if (!datos.vehiculo) {
						this.listadoVehiculos.splice(datos.id, 1)
					}

				}
			)
	}

	eliminar(ind: number) {
		if (confirm("¿Está seguro de querer eliminar?")) {
			this.vehiculoService.eliminar(ind)
			//this.listar()
		}
	}

	listar() {
		this.listadoVehiculos = this.vehiculoService.listar()
	}

	mostrarTipo(tipo: tipoVehiculo) {
		switch (tipo) {
			case tipoVehiculo.tipoSedan:
				return "Sedán"
			case tipoVehiculo.tipoCamioneta:
				return "Camioneta"
			case tipoVehiculo.tipoCamion:
				return "Camión"
		}
	}

}
