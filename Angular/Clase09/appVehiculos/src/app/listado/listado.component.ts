import { Component, OnInit } from '@angular/core';
import { IVehiculo, tipoVehiculo } from '../models/vehiculo.interface';
import { VehiculoService } from '../servicios/vehiculo.service';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	listadoVehiculos: IVehiculo[]

	constructor(private vehiculoService: VehiculoService) { }

	ngOnInit() {
		this.listar()
	}

	eliminar(ind: number) {
		if (confirm("¿Está seguro de querer eliminar?")) {
			this.vehiculoService.eliminar(ind)
			this.listar()
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
